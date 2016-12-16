const topics = []

var req = require.context('./', true, /\.(yml|yaml)$/)
req.keys().forEach(key => {
  topics.push(req(key))
})

export default topics
