import { GET } from './request'

function musicRankingsDetails() {
  return GET({
    url: '/musicRankingsDetails',
    params: {
      type: 1,
    },
  })
}

export default {
  musicRankingsDetails,
}
