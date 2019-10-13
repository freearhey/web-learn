export default function(topic) {
  return {
    id: topic.id,
    title: topic.title,
    score: topic.score,
    site: topic.site || null,
    logo: 'static/logos/$1.svg'.replace(/\$1/, topic.id),
    color: topic.color
  }
}
