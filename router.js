// 全局路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to)
  if(to.name==="Login"){
  }else{
    if(localStorage.getItem("g_tagMArry")==null){
      let arry=[];
      arry.push(to.meta);
      localStorage.setItem("g_tagMArry",JSON.stringify(arry))
    }else{
      // let tagMArry=JSON.parse(localStorage.getItem("g_tagMArry"));
      // tagMArry.push(to.meta);
      // let hash = {};
      // const newArr = tagMArry.reduceRight((item, next) => {
      //     hash[next.name] ? '' : hash[next.name] = true && item.push(next);
      //     return item
      // }, []);
      // localStorage.setItem("g_tagMArry",JSON.stringify(newArr));

      let tagMArry=JSON.parse(localStorage.getItem("g_tagMArry"));
      var cun = tagMArry.some(item=>{
        if(item.name==to.meta.name){
           return true 
        }
      })
      if(cun==true){

      }else if(to.meta=={}){
        
      }else{
        tagMArry.push(to.meta);
        localStorage.setItem("g_tagMArry",JSON.stringify(tagMArry));
      }
    }
  }
  // Vue.prototype.GLOBAL.tagArry.push(to.fullPath)
  // console.log(to);
  // console.log(from);
  // console.log(next);
  // console.log('navigation-guards');
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  const nextRoute = ['Activity'];
  let isLogin=localStorage.getItem("g_userName1");// 是否登录
  // console.log(isLogin);
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.name) >= 0) { 
    if (isLogin==null) {
      router.push({ name: 'Login' })
    }
  }
  // 已登录状态；当路由到login时，跳转至home
  if (to.name === 'Login') {
    if (isLogin) {
      router.push({ name: 'HelloWorld' });
    }
  }
  next();
});