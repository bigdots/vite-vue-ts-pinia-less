import { GET } from './request'

function test() {
  return GET({
    url: '123',
  })
}

export default {
  test,
}
