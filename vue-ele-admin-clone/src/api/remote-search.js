import request from '@/utils/request'

export function transactionList(query) {
  return request({
    url: "/transaction",
    method: "get",
    params: query
  })
}