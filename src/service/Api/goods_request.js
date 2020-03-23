import server from '../index.js';

export function goodsRequest(type, page){
    return server.request({
        method: 'get',
        url: '/home/data',
        params: {
            page,
            type
        }
    })
}