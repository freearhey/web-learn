import topics from '~topics'

export default {
  list(params) {
    return new Promise((resolve, reject) => {
      let items = topics
      let id
      let order
      let limit

      if(params) {
        id = params.id || null
        order = params.order || null
        limit = params.limit || null
      }

      if(id) {
        const searchIds = id.split(',')
        items = items.filter(item => {
          for(let i = 0; i < searchIds.length; i++) {
            return item.id.localeCompare(searchIds[i]) === 0 || item.title.toLowerCase().localeCompare(searchIds[i]) === 0
          }
        })
      }

      if(order && order === 'score') {
        items.sort((a, b) => {
          return b[order] - a[order]
        })
      } else {
        items.sort((a, b) => {
          return a.id.localeCompare(b.id)
        })
      }

      if(limit) {
        items = items.slice(0, limit)
      }

      resolve({ items })
    })
  }
}
