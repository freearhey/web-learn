import axios from 'axios'
import config from '~config'
import merge from 'lodash.merge'

export default {
  list(params) {
    merge(params, config.api.videos.params)

    // console.log(params)

    return axios.get(config.api.videos.endpoint, { params })
                .then((response) => Promise.resolve(response.data))
                .catch((error) => Promise.reject(error))
  }
}
