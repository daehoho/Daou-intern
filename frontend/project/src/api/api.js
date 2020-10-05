export default {
    URL: 'http://localhost:8080/api',
    IMAGE_STORE:'http://localhost:8080/images/',
    ROUTES: {
    
      // accounts
      myaccount: '/user/token',
      signup: '/user/join',
      login: '/user/login',
      checkreduplication: '/user',
      updateuser: '/user/edit',
      uploaduserimageA: '/user',
      uploaduserimageB: '/image',
      deleteuserimageA:'/user',
      deleteuserimageB:'/image',

      // categorys
      itemcategory:'/category/item',
      departmentcategory:'/category/department',
      postitem:'/item',
      getallitem:'/item',
      getdetailitem:'/item'

    }
}