import map from 'lodash.map'

let util = {
  prepareQuery(topics) {
    let query = ''
    
    if(topics.constructor === Array) {
      // get all topic titles
      let topicTitles = map(topics, 'title')
      // transform array of topics to pipe string
      query = topicTitles.join('|')
      // remove all dots
      query = query.replace(/\./g, '')
      // remove all spaces
      // query = query.replace(/\s/g, '')
    } else if(topics.constructor === Object) {
      query = topics.title
    }

    return '$1'.replace(/\$1/, query)
  }
}

export default util