import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: "/article/list",
    methods: "get",
    params: query
  })
}