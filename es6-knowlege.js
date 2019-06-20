// 作者：阮一峰
1 ECMAScript 6简介
 
2 let 和 const 命令
	



3 变量的解构赋值
	1-数组的解构赋值
		1-1-基本用法
		ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
		以前，为变量赋值，只能直接指定值
		let a = 1;
		let b = 2;
		let c = 3;
		ES6 允许写成下面这样。
		let [a, b, c] = [1, 2, 3];
		本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。
		let [foo, [[bar], baz]] = [1, [[2], 3]];
		foo // 1
		bar // 2
		baz // 3

		let [ , , third] = ["foo", "bar", "baz"];
		third // "baz"

		let [x, , y] = [1, 2, 3];
		x // 1
		y // 3

		let [head, ...tail] = [1, 2, 3, 4];
		head // 1
		tail // [2, 3, 4]

		let [x, y, ...z] = ['a'];
		x // "a"
		y // undefined
		z // []
		如果解构不成功，变量的值就等于 undefined。
		let [foo] = [];
		let [bar, foo] = [1];
		以上两种情况都属于解构不成功，foo的值都会等于 undefined。
		let [x, y] = [1, 2, 3];
		x // 1
		y // 2

		let [a, [b], d] = [1, [2, 3], 4];
		a // 1
		b // 2
		d // 4
		上面两个例子，都属于不完全解构，但是可以成功。
		// 报错
		let [foo] = 1;
		let [foo] = false;
		let [foo] = NaN;
		let [foo] = undefined;
		let [foo] = null;
		let [foo] = {};
		上面的语句都会报错，因为等号右边的值，要么转为对象以后不具备 Iterator 接口（前五个表达式），要么本身就不具备 Iterator 接口（最后一个表达式）。
		对于 Set 结构，也可以使用数组的解构赋值
		let [x, y, z] = new Set(['a', 'b', 'c']);
		x// "a"
		function* fibs() {
		  let a = 0;
		  let b = 1;
		  while (true) {
		    yield a;
		    [a, b] = [b, a + b];
		  }
		}

		let [first, second, third, fourth, fifth, sixth] = fibs();
		sixth // 5
		fibs是一个 Generator 函数
		1-2-默认值
		解构赋值允许指定默认值。
		let [foo = true] = [];
		foo // true

		let [x, y = 'b'] = ['a']; // x='a', y='b'
		let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
		注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
		let [x = 1] = [undefined];
		x // 1

		let [x = 1] = [null];
		x // null
		上面代码中，如果一个数组成员是 null，默认值就不会生效，因为null不严格等于 undefined。

		如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
		function f() {
		  console.log('aaa');
		}
		let [x = f()] = [1];
		上面代码中，因为x能取到值，所以函数f根本不会执行。上面的代码其实等价于下面的代码。
		let x;
		if ([1][0] === undefined) {
		  x = f();
		} else {
		  x = [1][0];
		}

		默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
		let [x = 1, y = x] = [];     // x=1; y=1
		let [x = 1, y = x] = [2];    // x=2; y=2
		let [x = 1, y = x] = [1, 2]; // x=1; y=2
		let [x = y, y = 1] = [];     // ReferenceError: y is not defined
	2-对象的解构赋值
	解构不仅可以用于数组，还可以用于对象
	let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
	foo // "aaa"
	bar // "bbb"
	
	字符串的解构赋值
	数值和布尔值的解构赋值
	函数参数的解构赋值
	圆括号问题
	用途
	

4 字符串的扩展

5 字符串的新增方法

6 正则的扩展

7 数值的扩展

8 函数的扩展

9 数组的扩展

10 对象的扩展