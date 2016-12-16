export default function(video) {
  const tags = []

  if(video.snippet.tags) {
    for(let i = 0; i < video.snippet.tags.length; i++) {
      tags.push(video.snippet.tags[i].toLowerCase())
    }
  }

  const likeCount = parseInt(video.statistics.likeCount)
  const dislikeCount = parseInt(video.statistics.dislikeCount)
  const rating = likeCount - dislikeCount

  return {
    id: video.id,
    title: video.snippet.title,
    publishedAt: video.snippet.publishedAt,
    channelId: video.snippet.channelId,
    description: video.snippet.description,
    thumbnails: video.snippet.thumbnails,
    channelTitle: video.snippet.channelTitle,
    tags: tags,
    duration: video.contentDetails.duration,
    viewCount: parseInt(video.statistics.viewCount),
    likeCount: likeCount,
    dislikeCount: dislikeCount,
    rating: rating
  }
}
