let topics = []

var req = require.context("./", true, /\.(yml|yaml)$/)
req.keys().forEach(function(key){
  topics.push(req(key))
});

export default topics