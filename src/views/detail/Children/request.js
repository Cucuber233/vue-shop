import server from 'request/index'

export default function getDetail(iid){
    return server.request({
        url: '/detail',
        method: 'get',
        params: {
            iid
        }
    })
}