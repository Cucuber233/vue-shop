
const account = () => import('../../views/profileinformation/account')
const address = () => import('../../views/profileinformation/address')
const setting = () => import('../../views/profileinformation/setting')
const wait = () => import('../../views/profileinformation/wait')
const password = () => import('../../views/profileinformation/password')
const orderform_ = () => import('../../views/profileinformation/orderform')



//我的
const profileInfo = [
    {
      name: '账户',
      path: 'account',
      component: account
    },
    {
      name: '地址',
      path: 'address',
      component: address
    },
    {
      name: '设置',
      path: 'setting',
      component: setting
    },
    {
      name: '等待',
      path: 'wait',
      component: wait
    },
    {
      name: '密码',
      path: 'password',
      component: password
    },
    {
      name: '订单',
      path: 'orderform',
      component: orderform_
    },
  ]

  export default profileInfo