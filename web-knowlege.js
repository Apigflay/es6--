// 前端每日小技巧
new 6-21
	(a ==1 && a== 2 && a==3) 有可能是 true 吗？
	解法一：对象类型转换
	var a = {
	    i:1,
	    toString:function(){
	        return a.i++; 
	    }
	}
	a ==1 && a== 2 && a==3    true
	解法二：数组类型转换 
	pop()和shift() 从数组的 尾部/头部 删除1个元素(删且只删除1个)，并返回 被删除的元素；空数组是继续删除，不报错，但返回undefined；
	var a = [1,2,3];
	a.join = a.shift;
	console.log(a==1&&a==2&&a==3)
	解法三：定义a的get
	var val = 0;
	Object.defineProperty(window, 'a', {
	  get: function() {
	    return ++val;
	  }
	});
	console.log(a==1&&a==2&&a==3)
	