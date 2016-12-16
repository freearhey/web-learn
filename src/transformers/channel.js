import nl2br from 'nl2br'
import linkifyjs from 'linkifyjs/html'

export default function(channel) {
  return {
    id: channel.id,
    title: channel.snippet.title,
    description: nl2br(linkifyjs(channel.snippet.description, false)),
    thumbnails: channel.snippet.thumbnails,
    publishedAt: channel.snippet.publishedAt,
    viewCount: parseInt(channel.statistics.viewCount),
    subscriberCount: parseInt(channel.statistics.subscriberCount),
    profileColor: channel.brandingSettings.channel.profileColor,
    image: channel.brandingSettings.image
  }
}
