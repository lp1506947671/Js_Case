## 1:JS介绍

**1.JavaScript简介**

JavaScript是运行在浏览器端的脚步语言，JavaScript主要解决的是前端与用户交互的问题，包括使用交互与数据交互，JavaScript是浏览器解释执行的。

1995年JavaScript出生,没有任何一个脚本语言是运行在浏览器端的,为了在浏览器端完成表单验证所以研发JavaScript.

java  和 JavaScript 没有任何关系

**2.调试程序方法**  

- alert调试:用于输出错误信息或者变量/属性信息,会打断程序运行
- 右键检查->console->查看错误信息(包含错误内容,文件名及行号等)
- console.log()函数不会打断程序运行输出调试内容
- document.title(不建议使用)

## 2:JS嵌入页面的方式

**1.嵌入式JavaScript**

```js
<script type="text/javascript">        
    alert('ok！');
</script>
```

**注意:**

1.alert命令相当于python中的print用于输出变量或错误信息

**2.外链式JavaScript**

```js
<script type="text/javascript" src="js/index.js"></script>
```

**3.行内式JavaScript(一般情况下不用)**

```html
<!-- 行内式js要求：必须是事件的格式   事件：用户触发了才执行命令 k="v" -->
<input type="button" name="" onclick="alert('ok！');">
```



## 3:JS基础语法

### 3.1:变量

#### 1变量的定义

JavaScript 是一种弱类型语言，javascript的变量类型由它的值来决定。 定义变量需要用关键字 'var'

```js
 // 变量初始化
 var iNum = 123;
 // 声明变量
 var sTr
 // 变量赋值,同时定义多个变量可以用","隔开，公用一个‘var’关键字
 var iNum = 45,sTr='qwe',sCount='68';
```

#### 2.变量的命名规则

```python
1、第一个字符必须是字母、下划线（_）或者美元符号（$）
2、其他字符可以是字母、下划线、美元符或数字
3、使用驼峰命名(iIndex,oDiv)
4、js中变量存的是标签  标签都是数据类型为对象型  object
```

**注意:**区分大小写

#### 3.变量的数据类型 

**1.js中的数据类型**

| 类型名    | 解释                                                         |
| --------- | ------------------------------------------------------------ |
| number    | 数字类型 (不区分整形和浮点型)                                |
| string    | 字符串类型                                                   |
| boolean   | 布尔类型 true 或 false                                       |
| undefine  | **变量声明未赋值，**它的值就是undefined (只有在程序出错时才会出现) |
| null 类型 | 表示空对象，如果定义的变量将来准备保存对象，可以将变量初始化为null,在页面上获取不到对象，返回的值就是null |

**注意:**检查数据类型的函数:`typeof iNum`

#### 4.变量作用域

1.变量作用域指的是变量的作用范围，javascript中的变量分为全局变量和局部变量。

```js
1、全局变量：在函数之外定义的变量，为整个页面公用，函数内部外部都可以访问。
2、局部变量：在函数内部定义的变量，只能在定义该变量的函数内部访问，外部无法访问。
```

2.js和Python中变量作用域的对比

```js
1、函数内部使用全局变量,不需要global，直接变量赋值.
2、js声明变量可以不加var，不加var是全局变量，要求如果是函数体里面定义变量（期望是局部）-- 一定加var
```

3.变量的使用遵循就近原则:多个同名变量使用时,离自己最近的变量是全局变量即使用全局变量,是局部变量集使用局部变量

```js
<script type="text/javascript">
    // 定义全局变量
    var a = 12;
    function myalert()
    {
        // 定义局部变量
        var b = 23;
        alert(a);
        // 修改全局变量
        a++;
        alert(b);
    }
    myalert(); // 弹出12和23
    alert(a);  // 弹出13    
    alert(b);  // 出错
</script>
```

**注意:**

ES6 新增了`let`命令，用来声明变量。它的用法类似于`var`，但是所声明的变量，只在`let`命令所在的代码块内有效

```js
for (let i = 0; i < 10; i++) {
  // ...
}

console.log(i);
// ReferenceError: i is not defined
上面代码中，计数器i只在for循环体内有效，在循环体外引用就会报错。

```

```js
下面的代码如果使用var，最后输出的是10。
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```

```js
如果使用let，声明的变量仅在块级作用域内有效，最后输出的是 6。
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```



#### 5.语句与注释

1.JavaScript命令末尾需要写";",防止进行压缩后代码无法正常运行

2.javascript注释

```js
<script type="text/javascript">    
// 单行注释
var iNum = 123;
/*  
    多行注释
    1、...
    2、...
*/
</script>
```



### 3.2:字符

**1.字符串常用的方法**

| 字符串                                              | 含义                   |
| --------------------------------------------------- | ---------------------- |
| str.length                                          | 获取指定字符串的长度   |
| str.charAt(1)                                       | 获取指定字符           |
| str.charCodeAt(1)                                   | 获取指定字符的编码     |
| str.concat('mjj','jack')                            | 字符串的拼接           |
| str.slice(2,4):第二参数时结束位置                   | 字符串的截取           |
| str.substring(2,4):第二参数时结束位置               | 字符串的截取           |
| str.substr(2,4):第二个参数是返回的字符数            | 字符串的截取           |
| str.indexof('o',6);第二个参数指定从什么位置开始搜索 | 返回指定字符串的索引   |
| str.lastIndexof('o',6),第二个参数指定从什么开始搜索 | 返回指定字符串的索引   |
| str.trim():不影响原始字符串                         | 清除字符串前后空格     |
| toLowerCase()/toUpperCase()                         |                        |
| toLocaleLowerCase/toLocaleUpperCase()               |                        |
| parseInt(str)                                       | 将字符串转换成整数     |
| parseFloat(str)                                     | 将数字字符串转化为小数 |
| str.split("分割符")                                 | 将字符串按照什么分割   |
| Number(str)                                         | 字符串                 |
| isNAN(str)                                          | 判断字符是不是NAN      |
| String(num)                                         | 强制类型转换           |
| num.toFixed(2)                                      | 数值保留两位小数       |

**2.查找字符串在str中的所有的位置**

```js
var str = 'He unfolded the map and set it on the floor.';
var arr = [];
var pos = str.indexOf('e'); //1
console.log(pos);
while(pos > -1){
    // 找到当前e字符对应的位置
    arr.push(pos);
    pos = str.indexOf('e',pos+1);
}
console.log(arr);
```



### 3.3:条件语句

**1.比较运算符**

```js
==、===、>、>=、<、<=、!=
```

**注意:**"==","==="的区别

```js
"==":只判断数值相等
"===":不仅判断数值,还判断数据类型是否相等

var a=5
var astr="5"
var isequal1=a === astr
```

**2.逻辑运算符**

```js
&&(而且)、||(或者)、!(否)
```

**2.if else**

```js
var iNum01 = 3;
var iNum02 = 5;
var sTr;
if(iNum01>iNum02){
    sTr = '大于';
}
else
{
    sTr = '小于';
}
alert(sTr);
```

**3.多重if else语句**

```js
var iNow = 1;
if(iNow==1)
{
    ... ;
}
else if(iNow==2)
{
    ... ;
}
else
{
    ... ;
}
```

**4.switch语句**

```js
switch(a){
    case label_1:
        break;
    case label_2:
        break;
    case label_3:
        break; 
    default:
        break;
}
```

**4.三元运算符**

```js
// (条件)? run this code :run this code;
var isresult =1>2? "真的":"假的"
```



### 3.4:循环语句

**1.while循环**

```js
    // 1、变量设定初始值
    // 2、while while (条件){命令}
    var i = 0;
    while(i<3)
    {
        alert('while');
        // 增量
        // i+=1等价于i++,  i-=1等价于i--
        i++;
    }
```

**2.for循环**

```js
    // for(初始值;条件;增量){命令}
    for(var i=0;i<3;i++)
    {
        alert('for');
    }
```

**3.do...while..循环**

```js
var sum=0;
var i=1;
do{
    sum=sum+i;
    i++;
    console.log(sum);
}while(i<=100)
```

**3.break和continue**

```js
break;
continue;
```



###  3.5:函数

#### 1.普通函数

- 函数的定义和调用
- js中的函数有**函数预解析功能**.可以先调用再定义(**变量不支持预解析**)
- 函数中'return'关键字的作用：返回函数中的值或者对象/结束函数的运行

```js
<script type="text/javascript">    
    fnAlert();       // 弹出 hello！
    alert(iNum);  // 弹出 undefined
    function fnAlert(){
        alert('hello!');
    }
    var iNum = 123;
</script>
```

```js
<script type="text/javascript">
function fnAdd(iNum01,iNum02){
    var iRs = iNum01 + iNum02;
    return iRs;
    alert('here!');
}
var iCount = fnAdd(3,4);
alert(iCount);  //弹出
```

#### 2.封闭函数

**1.封闭的定义**

封闭函数是javascript中匿名函数的另外一种写法，创建一个一开始就执行而不用命名的函数。

**2.封闭函数的作用**

封闭函数可以创造一个独立的空间，在封闭函数内定义的变量和函数不会影响外部同名的函数和变量，可以避免命名冲突，在页面上引入多个js文件时，用这种方式添加js文件比较安全

一般定义的函数和执行函数：

```js
var fuc1=function myalert(){
    alert('hello!');
};
myalert();
```

封闭函数：

```js
(function(){
    alert('hello!');
})();
```

还可以在函数定义前加上“~”和“!”等符号来定义匿名函数

```js
!function(){
    alert('hello!');
}()
```

**3.封闭函数的使用方法**

```js
    //方式1:
    (function(){
        function fn1(){
            alert(2)
        }
        fn1()
    })()
    // 方式2
    !function(){
        alert(3)
    }()
    // 方式3
    ~function(){
        alert(4)
    }()
```

**4.函数作用域和全局污染**

first.js

```js
(function(){
    var name='mjj'
    var hello =function(){
        alert('hello'+name)
    }
    windows.first=hello
})()
```

second.js

```js
(function(){
    var name='hello mjj'
    var hello =function(){
        alert('hello'+name)
    }
    windows.first=hello
})()
```

demo.html

```js
<script type="text/javascript">
    console.log(window);
    first();
    second();
</script>
```



### 3.6:对象

#### 1.定义

```js
// 对象
var person={
    name:'mjj',
    age:18,
    sex:'女',
    fav:function(a){
        alert('爱好菇凉')
        return '菇凉'+a+'岁'
    }
}
console.log(person)
console.log(person.name)
consle.log(person.fav(18))
```

#### 2.内置对象(native object)

```js
var arr=[1.2,3];
document.write("呵呵")
alert(typeof)
      
//js 构造函数
var colors=new Array();
var colors2=[];
colors[0]='red'

// 对象在数组中的使用
        var person1 = {
            toLocaleString: function () {
                return '刘鹏';
            },
            toString: function () {
                return 'lp';
            }

        }
        var person2 = {
            toLocaleString: function () {
                return "李洁";
            },
            toString: function () {
                return 'lj'
            }
        }
        var pepole = [person1, person2];
        console.log(pepole);
        console.log(pepole.toString());
        console.log(pepole.toLocaleString())
        //分割字符串
        var colors = ["red", "blue", "green"];
        var a = colors.join('|');
        console.log(a);
```

#### 3.global对象的编码和解码

| 方法名                                       | 含义                     |
| -------------------------------------------- | ------------------------ |
| encodeURI(uri)/decodeURI(encodeuri)          | 只能编解码空格符号       |
| encodeURIComponent(uri)/decodeURIComponent() | 所有的特殊符号都能编解码 |



### 3.7:数组

#### 1.数组定义

```js
//对象的实例创建
var aList = new Array(1,2,3);
//直接量创建
var aList2 = [1,2,3,'asd'];
```

#### 2.数组的常用方法 

| 方法                                           | 例子                                                         |
| ---------------------------------------------- | ------------------------------------------------------------ |
| join                                           | var aList = [1,2,3,4];<br/>alert(aList.join('-'));           |
| push/ pop栈方法:(LIFO)后进先出                 | var aList = [1,2,3,4];<br/>aList.push(5);<br/>console.log(aList);//弹出1,2,3,4,5<br/>aList.pop();<br/>console.log(aList); // 弹出1,2,3,4 |
| shift(),unshift():先进先出数组的队列方法(FIFO) | aList.unshift(0);<br/>console.log(aList);<br/>var firstItem=aList.shift();<br/>console.log(firstItem);<br/>console.log(aList); |
| indexOf()返回数组中元素第一次出现的索引值      | var aList = [1,2,3,4,1,3,4];<br/>alert(aList.indexOf(1));    |
| concat():数组的合并                            | let colors = ['red', 'blue']; <br/>colors = colors.concat('green');<br/> colors = colors.concat({name: 'zhangsan'}); <br/>console.log(colors) |
| slice():数组的截取                             | let newColors = ['red', 'blue', {name: 'zhangsan'}, {name: "lisi"}, ['black', 'purple']];<br/> newcolors = newColors.slice(-4, -1); <br/>console.log(newcolors); |
| splice():删除                                  | let names = ['张三', '李四', 'mjj', 'alex'];<br/>names.splice(0, 2);<br/>console.log(names); |
| splice():插入                                  | names.splice(1,0,'熊大大','jack');<br/> console.log(names);  |
| splice():替换                                  | names.splice(1,1,'xiongdada'); <br/>console.log(names);      |

####  3.数组的排序

```js
 var values = [0, 3, 2, 2, 16, 15, 10]
        // 数组倒序
        values.reverse();
        console.log(values);
        //数组的排序
        values.sort();
        console.log(values)
        //排序1
        function compare1(a, b) {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 0;
            }
        }

        values.sort(compare1)
        console.log(values)

        //排序2
        function compare2(a, b) {
            return a-b;
        }

        values.sort(compare2)
        console.log(values)
```

#### 4.数组的位置方法

```js
 // indexOf/lastIndexOf查不到结果返回负一
 var names = ['张三', 'mjj', '王五', 'mjj'];
 console.log(names.indexOf('mjj'));
 console.log(names.indexOf('mjj',2));
 console.log(names.lastIndexOf('mjj'));
 console.log(names.lastIndexOf('mjj',2));
```



#### 5.循环写入数组数据

```js
    window.onload = function(){
        //(工作中运用极其频繁)
        var oMyul = document.getElementById('myul')
        var arr = ['侏罗纪世纪', '侏罗纪世纪2','侏罗纪世纪3', '侏罗纪世纪4']
        var str = ''
        for(var i=0;i<arr.length;i++)
        {
            str += '<li>'+ arr[i] +'</li>'
        }
        oMyul.innerHTML = str
    }
```

#### 6.数组的迭代方法

1.filter

```js
var numbers = [1,2,3,6,19,4,20];
var filterResult = numbers.filter(function(item,index,array){
    console.log('item:'+ item);
    console.log('index:'+ index);
    console.log('array:'+ array);

    return item > 10
});
console.log(filterResult);
```

2. forEach()

```js
var numbers = [1,2,3,6,19,4,20];
var mapresult = numbers.map(function(item,index,array){
			return item * 2;
})
for(var i = 0; i < mapresult.length; i ++){
			console.log(mapresult[i]);
		}
		
mapresult.forEach(function(item,index){
    console.log(item);
})
```

3.map()

```js
var oldArray = [
			{
				name:'张三',
				age: 17
			},
			{
				name:'mjj',
				age: 29
			},
			{
				name:'李四',
				age: 30
			}
		];
var newNames = oldArray.map(function(item,index){
			return item.name
		})
var newAges = oldArray.map(function(item,index){
    return item.age
})
console.log(newNames);
console.log(newAges);
```

#### 6.数组去重

```js
    var aList = [1,2,3,4,4,3,2,1,2,3,4,5,6,5,5,3,3,4,2,1];
    var aList2 = [];
    for(var i=0;i<aList.length;i++)
    {
        // 方法一:
        if(aList.indexOf(aList[i])==i)
        {
            aList2.push(aList[i]);
        }
        // 方法二:
        if(aList.indexOf(aList[i])!=i)
        {
            aList.splice(i,1);
            i--;
        }
    }
    alert(aList1);
    alert(aList2);
```

###  3.8日期对象

**1.日期对象的创建**

```js
1.四种方式创建
var now = new Date();
console.log(now);
var xmas = new Date('December 25,1995 13:30:00');
console.log(xmas); 
var xmas = new Date(1995,11,25);
console.log(xmas);
var xmas = new Date(1995,11,25,14,30,0);
console.log(xmas);
```

2.日期对象常用的方法

| 方法                     | 含义                          |
| ------------------------ | ----------------------------- |
| now.getDate()            | 获取月份的第几天 (1~31)       |
| now.getMonth()           | 获取月份 (0~11)               |
| now.getFullYear()        | 获取年份                      |
| now.getDay()             | 获取一星期中的第几天(0 ~ 6)   |
| now.getHours()           | 获取小时(0~23);               |
| now.getMinutes()         | 获取分钟(0~59);               |
| now..getSeconds()        | 获取秒(0~59);                 |
| now.toDateString()       | Sat Nov 14 2020               |
| now.toTimeString()       | 17:03:09 GMT+0800             |
| now.toLocaleDateString() | 2020/11/14                    |
| now.toLocaleTimeString   | 下午5:03:09                   |
| now.toLocaleString()     | 2020/11/14 下午5:03:09        |
| now.toUTCString()        | Sat, 14 Nov 2020 09:03:09 GMT |

```js
function nowNumTime(){
    var now = new Date();
    var hour  = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var temp = '' + (hour > 12 ?  hour - 12 : hour);
    if(hour === 0){
        temp = '12';
    }
    temp  = temp +(minute < 10 ?  ':0': ":")+ minute;
    temp  = temp +(second < 10 ?  ':0': ":")+ second;
    temp = temp + (hour >= 12 ?  ' P.M.': " A.M.");
    return temp;
		}
```

### 3.9数学对象

**1.MATH对象属性**

| 属性             | 描述                                       |
| ---------------- | ------------------------------------------ |
| Math.E           | e自然对数的底数约等于(2.718）              |
| Math.LN2         | 2 的自然对数                               |
| Math.LOG2E       | 返回以 2 为底的 e 的对数                   |
| Math.LOG10E      | 返回以 10 为底的 e 的对数（约等于0.434）。 |
| Math.PI          | 约等于3.14159                              |
| Math.SQRT1_2     | 返回 2 的平方根的倒数（约等于 0.707）。    |
| Math.SQRT2       | 返回 2 的平方根（约等于 1.414）。          |
| Math.ceil(x)     | 对数进行上舍入。                           |
| Math.floor(x)    | 对 x 进行下舍入。                          |
| max(x,y,z...n)   | 返回 x,y,z,...,n 中的最高值。              |
| min(x,y,z,...,n) | 返回 x,y,z,...,n中的最低值。               |
| random()         | 返回 0 ~ 1 之间的随机数。                  |

**2.获取随机验证码和背景色**

```js
function random(max,min){
			return Math.floor(Math.random() * (max-min) + min);
		}
function creatCode(){
			// 设置默认的空的字符串  
			var  code = '';
			// 设置长度 
			var codeLength = 4;
			var randomCode = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z'];
			for(var i  = 0; i < codeLength; i++){
				// 设置随机范围 0~36
				var index = random(0,36);
				code +=  randomCode[index];
			}
			return code;
		}
		var rndcode = creatCode();
		console.log(rndcode);
		document.write(`<h1>${rndcode}</h1`)

function randomColor(){

			// var result
			var r = random(0,256),g = random(0,256),b = random(0,256);
			// 模板字符串 ``
			var result = `rgb(${r},${g},${b})`;
			return result;
		}
		var rc = randomColor();
		console.log(rc);
		document.body.style.backgroundColor = rc;
```



## 4.BOM

### 1.定义

浏览器对象模型 (BOM) 使 JavaScript 有能力与浏览器"对话"

### 2.常用的方法

| 方法名                                        | 描述 |
| --------------------------------------------- | ---- |
| windows.alert("弹出框")                       |      |
| windows.congfirm('你确定要离开网站吗')        |      |
| windows.prompt('请输入你早餐吃了什么',"包子") |      |
| windows.setTimeout(函数,时间)                 |      |

### 2.定时器方法

| 方法名                      | 描述                   |
| --------------------------- | ---------------------- |
| setTimeout(函数,延迟时间)   | 只执行一次的定时器     |
| clearTimeou(函数,延迟时间)  | 关闭只执行一次的定时器 |
| setInterval(函数,延迟时间)  | 反复执行的定时器       |
| clearInterva(函数,延迟时间) | 关闭反复执行的定时器   |

```js
window.setTimeout(function () {
        console.log('mjj');
    }, 0);
    console.log('xiongdada');
```

```js
let num = 0;
	let timer = null;
	timer = setInterval(function () {
        num++;
        if (num > 5) {
            clearInterval(timer);
            return;
        }
        console.log('num:' + num);
    }, 1000);
```

**注意:**

1.为了释放浏览器缓存会在关闭定时器后使用oTimer = null

2.延迟时间为毫秒

### 3.location对象

| 属性                                      | 描述                             |
| ----------------------------------------- | -------------------------------- |
| location.hostname                         | 返回 web 主机的域名              |
| location.pathname                         | 返回当前页面的路径和文件名       |
| location.port                             | 返回 web 主机的端口 （80 或 443) |
| location.protocol                         | 返回所使用的 web 协议            |
| location.href                             | 返回当前页面的 URL(会产生历史)   |
| location.replace                          | 返回当前页面的 URL(不会产生历史) |
| location.reload                           | 刷新网页                         |
| location.assign("https://www.runoob.com") | 加载新的文档。                   |
| navigator.plugins                         | 检测浏览器上的插件               |
| history.go(-2)                            | 返回前一个历史记录               |

**查询字符串中的每个参数**

```js
function getQueryString(){
    // 1.取得去掉问号查询字符串 user=mjj&pwd=123 
    let qs = location.search.length > 0 ? location.search.substring(1) : '';
    // 2.取得每一项 存放到数组中
    let items = qs.length ? qs.split('&') : []; //["name=mjj", "pwd=123"]
    let item = null, name = null, value = null, args = {};
    for(let i = 0; i < items.length; i ++){
        item = items[i].split('='); //['name%20','mjj']
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if (name.length) {
            args[name]  = value;
        }
    }
    return args;
}
let args  = getQueryString();
console.log(args.name);
console.log(args.pwd);
```



## 5.DOM

### 1.节点的分类

| 名称           | 描述     |
| -------------- | -------- |
| element node   | 元素节点 |
| text node      | 文本节点 |
| attribute node | 属性节点 |

###  2.节点属性

|          | nodeName         | nodeValue         | nodeType |
| -------- | ---------------- | ----------------- | -------- |
| 元素节点 | 与标签名相同     | undefined 或 null | 1        |
| 属性节点 | 属性的名称       | 文本自身          | 2        |
| 文本节点 | 永远是 #text     | 属性的值          | 3        |
| 文档节点 | 永远是 #document |                   | 9        |

###  3.获取元素节点的方法

| 方法                                    | 方法名                 |
| --------------------------------------- | ---------------------- |
| document.getElementById('classList')    | 通过id查找html元素     |
| document.getElementsByTagName('li')     | 通过标签查找html元素   |
| document.getElementsByClassName('item') | 通过类名找到 HTML 元素 |

**注意:** 获取到一个节点对象集合,有点像数组  push()

### 4.获取属性节点的方法

| 方法                                             | 描述           |
| ------------------------------------------------ | -------------- |
| 属性节点对象集合.getAttribute('属性名');         | 获取某个属性   |
| 属性节点对象集合.setAttribute('属性名','属性值') | 设置某个属性值 |

**注意:**设置属性并不会改变前端的

### 5.节点对象的其他常用属性

| 属性                                                         | 方法名                     |
| ------------------------------------------------------------ | -------------------------- |
| 节点对象集合.childNodes                                      | 返回元素的一个子节点的数组 |
| 节点对象集合.firstChild(等同于:节点对象集合.childNodes[0])   | 返回元素的第一个子节点     |
| 节点对象集合.lastChild(等同于:节点对象集合.childNodes[oFather.childNodes.length - 1]) | 返回元素的最后一个子节点   |
| 节点对象集合.parentNode                                      | 返回元素的父节点           |
| 节点对象集合.nextSibling                                     | 返回该元素紧跟的一个节点   |
| 节点对象集合.previousSibling                                 | 返回某个元素紧接之前元素   |

```js
function get_childNodes(fatherNode){
			var nodes = fatherNode.childNodes;
			var arr = [];//保存已经获取的元素节点对象
			for(var i = 0; i < nodes.length; i++){
				if (nodes[i].nodeType === 1) {
					arr.push(nodes[i]);
				}
			}
			return arr;

		}
		var childnodes = get_childNodes(oFather);
		console.log(childnodes[0]);
```

```js
function get_nextSibling(n){
			var x = n.nextSibling;
			while(x  && x.nodeType != 1){
				x = x.nextSibling;
			}
			return x;
		}
		console.log(get_nextSibling(oFather));
```

### 6.元素节点对象的增删改查

| 方法名                              | 描述         |
| ----------------------------------- | ------------ |
| document.createElement()            | 创建节点     |
| 节点对象.appendChild()              | 插入节点     |
| 节点对象.appendChild(newNode,node)  | 插入节点     |
| 节点对象.removeChild(childNode)     | 删除节点     |
| 节点对象.replaceChild(newNode,node) | 替换节点     |
| document.createTextNode()           | 创建文本节点 |
| 节点对象.innerHTML(html内容)        |              |
| 节点对象.innerText(文本内容)        |              |

###  7.操作元素属性

1.直接操作样式属性

```js
var para = document.getElementById('box');
1、直接操作样式属性
console.log(para.style);
para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.width = '250px';
para.style.height = '250px';
para.style.textAlign = 'center';
para.style.lineHeight  = '250px';
para.style.fontSize  = '30px';
```

 2.通过控制属性的类名来控制样式

```js
<style type="text/css">
		.highLight{
			background-color: black;
			color: white;
			width: 250px;
			height: 250px;
			line-height: 250px;
			text-align: center;
			font-size: 30px;
		}
</style>
para.setAttribute('class', 'highLight');
```

**注意:**
html的属性和js里面属性写法一样

“style” 属性里面的属性,有横杠的改成驼峰式,比如：“font-size”,改成”style.fontSize”

“class” 属性写成 “className”

### 8.事件

**1.常用的事件方法**

| 事件名      | 作用                 |
| ----------- | -------------------- |
| onclick     | 鼠标单击事件         |
| onmouseover | 鼠标经过事件         |
| onmouserout | 鼠标移开事件         |
| onchange    | 文本框内容改变事件   |
| onselect    | 文本框内容被选中事件 |
| onfocus     | 光标聚焦事件         |
| onblur      | 光标失焦事件         |
| onload      | 网页加载事件         |

**鼠标点击事件的两种方法**

方法一:

```html
<div id="box" onclick="add();"></div>
<script type="text/javascript">
    function add (){
        	var isBlue = true;
	 		if (isBlue) {
	 			// this 指向了当前的元素节点对象
	 			this.style.backgroundColor = 'red';
	 			isBlue = false;
	 		}else{
				this.style.backgroundColor = 'blue';
	 			isBlue = true;
	 		}
	 	};
</script>
```

方法二:

```html
<div id="box" ></div>
<script type="text/javascript">
	 	var oDiv = document.getElementById('box');
	 	var isBlue = true;
	 	oDiv.onclick = function(){
	 		if (isBlue) {
	 			// this 指向了当前的元素节点对象
	 			this.style.backgroundColor = 'red';
	 			isBlue = false;
	 		}else{
				this.style.backgroundColor = 'blue';
	 			isBlue = true;
	 		}
	 	};	
 </script>
```

**鼠标悬浮事件**

```html
<div id="box">
<script type="text/javascript">
    var oDiv = document.getElementById('box');
    // 2.鼠标滑过事件  
    oDiv.onmouseover = function(){
        console.log(111);
        // 3.事件处理程序
        this.style.backgroundColor = 'green';
    };
    // 2.鼠标移开事件  
    oDiv.onmouseout = function(){
        // 3.事件处理程序
        this.style.backgroundColor = 'red';
    }
</script></script>
```

**光标聚焦和失焦事件**

```html
<form action="">
		<p class="name">
			<label for="username">用户名：</label>
			<input type="text" name="user" id="username">
		</p>
		<p class="pwd">
			<label for="pwd">密码：</label>
			<input type="password" name="wpd" id="pwd">
		</p>
		<input type="submit" name="">
</form>
<script type="text/javascript">
		var userName = document.getElementById('username');
		var newNode = document.createElement('span');
		userName.onfocus = function(){
			newNode.innerHTML = '请输入用户名';
			newNode.setAttribute('class', 'text')
			userName.parentNode.appendChild(newNode);
		}
		userName.onblur = function(){
			newNode.innerHTML = '请输入正确的用户名';
			newNode.setAttribute('class', 'text')
			userName.parentNode.appendChild(newNode);
		}
</script>
```

**内容的选中事件和改变事件**

```html
<label>
		<textarea cols="30" rows="10">请写入个人简介，字数不少于200字</textarea>
</label>
<label>
		<input type="text" name="" value="mjj">
</label>
<script type="text/javascript">
		var textArea = document.getElementsByTagName('textarea')[0];
		var inputObj = document.getElementsByTagName('input')[0];

		textArea.onselect = function(){
			console.log('内容被选中');
		};
		inputObj.onchange = function(){
			console.log('内容被改变了');
		};
		inputObj.oninput = function(){
			console.log('内容被实时改变了');
			console.log(this.value);
		};
</script>
```

**窗口加载事件**

```html
<script type="text/javascript">
/*方法一*/
setTimeout(function(){
			var oDiv = document.getElementById('box');
			console.log(oDiv);
			oDiv.onclick = function(){
				this.innerHTML = 'alex';
			}
		}, 0)
/*方法二*/  
window.onload = function(){
			var oDiv = document.getElementById('box');
			console.log(oDiv);
			oDiv.onclick = function(){
				this.innerHTML = 'alex';
			}
		}
</script>
```

##  6:JS高级语法

### 4.1:元素

#### 1.获取元素方法

第一种方法：将javascript放到页面最下边

```js
....
<div id="div1">这是一个div元素</div>
....
<script type="text/javascript">
    var oDiv = document.getElementById('div1');
</script>
</body>
```

第二种方法：将javascript语句放到window.onload触发的函数里面,获取元素的语句会在页面加载完后才执行，就不会出错了。

```js
<script type="text/javascript">
    window.onload = function(){
        var oDiv = document.getElementById('div1');
    }
</script>
....
<div id="div1">这是一个div元素</div>
```

#### 2.操作元素属性

**操作元素属性**
读取属性: var 变量 = 元素.属性名 
改写属性: 元素.属性名 = 新属性值

**属性名在js中的写法**
1、html的属性和js里面属性写法一样
**2、“class” 属性写成 “className”**
3、“style” 属性里面的属性，有横杠的改成驼峰式，比如：“font-size”，改成”style.fontSize”

```js
<script type="text/javascript">
    window.onload = function(){
        var oInput = document.getElementById('input1');
        var oA = document.getElementById('link1');
        // 读取属性值
        var sValue = oInput.value;
        var sType = oInput.type;
        var sName = oInput.name;
        var sLinks = oA.href;
        // 写(设置)属性
        oA.style.color = 'red';
        oA.style.fontSize = sValue;
    }
</script>
<input type="text" name="setsize" id="input1" value="20px">
<a href="http://www.baidu.com" id="link1">百度</a>
```

#### 3.控制html内容 

**innerHTML:可以读取或者写入标签包裹的内容**

```js
<script type="text/javascript">
    window.onload = function(){
        var oDiv = document.getElementById('div1');
        //读取
        var sTxt = oDiv.innerHTML;
        alert(sTxt);
        //写入
        oDiv.innerHTML = '<a href="http://www.baidu.com" ">百度</a>';
    	//清除html文本
    	document.getElementById('box').innerHTML = ''
    }
</script>
<div id="div1">这是一个div元素</div>
```

#### 4.控制css

**1.控制Css的方式:**

```js
<script>
    window.onload = function(){
        // 查找到对应的元素.style.要修改的样式 = 属性的值
        document.getElementById('box').style.color = 'red'
        document.getElementById('box').style.background = '#ccc'
        // 在js中xx-xx形式的属性名改写成xxXx形式
        document.getElementById('box').style.fontSize = '60px'
    }
</script>
```



### 4.2:事件

#### 1.事件属性 

```
元素上除了有样式，id等属性外，还有事件属性，常用的事件属性有
鼠标点击事件属性(onclick)，
鼠标移入事件属性(mouseover),
鼠标移出事件属性(mouseout),
将函数名称赋值给元素事件属性，可以将事件和函数关联起来。
```

```js
<script type="text/javascript">
window.onload = function(){
    var oBtn = document.getElementById('btn1');

    oBtn.onclick = myalert;

    function myalert(){
        alert('ok!');
    }
}

</script>
```

#### 2.事件的使用方式

**匿名函数**
定义的函数可以不给名称，这个叫做匿名函数，可以将匿名函数的定义直接赋值给元素的事件属性来完成事件和函数的关联，这样可以减少函数命名，并且简化代码。函数如果做公共函数，就可以写成匿名函数的形式

```js
<script>
    window.onload = function(){
        var oBtn1 = document.getElementById('btn1')
        var oBtn2 = document.getElementById('btn2')
        var oBtn3 = document.getElementById('btn3')
        // 匿名函数：就是没有名字的函数  function (){}
        // **** 事件语法： 事件发生在谁身上(变量).事件属性(事件类型) = 匿名函数
        oBtn1.onclick = function(){
            alert('单击成功')
        }
        oBtn2.onmouseover = function(){
            alert('鼠标滑过')
        }
        oBtn3.onmouseout = function(){
            alert('鼠标离开')
        }
    }
</script>
```

### 4.3定时器

#### 1.定时器的种类

```
单次定时器：用时间控制命令只执行一次-->setTimeout()
多次循环定时器：用时间控制命令重复执行-->setInterval()
```

#### 2.定时器的使用方法

```js
/*
    定时器：
    setTimeout  只执行一次的定时器 
    clearTimeout 关闭只执行一次的定时器
    setInterval  反复执行的定时器
    clearInterval 关闭反复执行的定时器
*/
// 参数1：命令：1、匿名函数形式；2、函数名形式
// 参数2：延迟时间，以毫秒为单位 1000毫秒 = 1秒
var time1 = setTimeout(myalert,2000);
var time2 = setInterval(myalert,2000);
/*
clearTimeout(time1);
clearInterval(time2);
*/
function myalert(){
    alert('ok!');
}

//工作经验:为了释放浏览器缓存会在关闭定时器后使用oTimer = null
```

## 5:JS案例

### 5.1:网页换肤

#### 1.网页换肤css部分 

1.网页换肤使用外链式css(替换样式只需替换文件链接)

2.button标签自带边框使用时一般需设置边框宽度为0px

3.border-radius属性的值可以为像素值,也可以为百分比,当值为百分比时代表宽高的百分比

**pifu.css**

```css
body{
    background: #ccc;
}
button{
    width: 200px;
    height: 50px;
    background: pink;
    border: 0px;
    font-size:20px ;
    color: #000;
    border-radius: 25px ;
}
```

**pifu2.css**

```css
body{
    background: gold;
}
button{
    width: 200px;
    height: 50px;
    background: green;
    border: 0px;
    font-size:20px ;
    color: #cccccc;
}
```

#### 2.网页换肤js部分 

1.所有的html属性，在js中写法只有class=“” 在js中写为className,其余的都相同

```HTML
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../css/pifu.css" id="mylink">
    <script>
        window.onload = function () {
            // 控制单机.控制link标签 ,换标签的href值
            var oBtn1 = document.getElementById('btn1')
            var oBtn2 = document.getElementById('btn2')
            var oMylink = document.getElementById('mylink')
            oBtn1.onclick=function () {
                oMylink.href = "../css/pifu.css"
            }
            oBtn2.onclick=function () {
                oMylink.href = "../css/pifu2.css"
            }
        }
    </script>
</head>
<body>
<h1 class="aa">网页换肤</h1>
<button id="btn1">皮肤一</button>
<button id="btn2">皮肤二</button>
</body>

</html>
```

###  5.2:打印名片

#### 1.打印名片显示数据 

1.用户在input中输入的值就是input标签中value属性的值

2.js中字符串拼接可以使用"+"进行拼接,字符串内部不能换行

3.如果input标签中value属性的值为空则需要抛出错误终止程序

4.针对不同的名片,需要切换不同的div的类名,来实现不同样式

```js
<script>
        window.onload = function () {
            var oInput01 = document.getElementById("input01")
            var oInput02 = document.getElementById("input02")
            var oInput03 = document.getElementById("input03")
            var oInput04 = document.getElementById("input04")
            var oInput05 = document.getElementById("input05")
            var oInput06 = document.getElementById("input06")
            var oInput07 = document.getElementById("input07")
            var oSetcard = document.getElementById("setcard")
            //    右边显示区域
            var oCard_wrap = document.getElementById('card_wrap')
            var str = ''
            oSetcard.onclick = function () {
                //判断用户的输入是否为空
                if(oInput01.value==''||oInput02.value==''||oInput03.value==''||oInput04.value==''||oInput05.value==''||oInput06.value==''){
                    alert("请输入内容")
                    return
                }
                //    得到用户输入的数据
                str = '            <div class="p01">' + oInput01.value + '<em>' + oInput02.value + '</em></div>' +
                    '            <div class="p02">' +
                    '                <p class="company">' + oInput03.value + '</p>' +
                    '                <p>手机：' + oInput04.value + '</p>' +
                    '                <p>email：' + oInput05.value + '</p>' +
                    '                <p>地址：' + oInput06.value + '</p>' +
                    '            </div>'

                oCard_wrap.innerHTML = str

                if (oInput07.value==0){
                    oCard_wrap.className='idcard01'
                }
                else if (oInput07.value==1){
                    oCard_wrap.className='idcard02'
                }
                else {
                    oCard_wrap.className='idcard03'
                }
            }


        }
```



#### 2.打印名片完成

1.return可以终止代码运行

2.风格切换

```js
    if(oInp07.value == 0)
        {
            oCard_wrap.className = 'idcard01'
        }
        else if(oInp07.value == 1)
        {
            oCard_wrap.className = 'idcard02'
        }
        else
        {
            oCard_wrap.className = 'idcard03'
        }
```

#### 3.扩展(switch)

```js
    switch (oInp07.value) {
        case '0':
            oCard_wrap.className = 'idcard01'
            break;
        case '1':
            oCard_wrap.className = 'idcard02'
            break;
        case '2':
            oCard_wrap.className = 'idcard03'
            break;

        default:
            break;
        }
```

### 5.3:标签位移原理

```js
    window.onload = function(){
        var oBox = document.getElementById('box')
        var num = 0;  // num就是left的值
        var speed = 5
        setInterval(fnMove, 50)
        function fnMove(){
            // 改变left取值
            num += speed
            // 如果num增到600，大于600，左侧运动
            if(num > 600)
            {
                // num-=5
                // num += -5
                speed = -5
            }
            if(num <0)
            {
                speed = 5
            }

            oBox.style.left = num + 'px'
        }
    }
```

### 5.4:无缝滚动

1.无缝滚动的核心思想是将需要滚动的图片复制一份,当超出显示区域时快速切换

2.无缝滚动实现完整js

```js
window.onload = function(){
    // 1、默认左侧移动 产品父级ul的left
    var oList = document.getElementById('list')
    var num = 0 // left值
    var speed = 5
    var oTimer = null
    // 为了产品移动，后面显示区域不落空，复制一份5个产品
    oList.innerHTML += oList.innerHTML
    // oList.innerHTML = oList.innerHTML + oList.innerHTML
    oTimer = setInterval(fnMove, 50)
    function fnMove(){
        num -= speed
        if(num < -1000)
        {
            num = 0
        }
        if(num>0)
        {
            num=-1000
        }
        oList.style.left = num + 'px'
    }

    // 2、左右箭头单击，改变运动方向
    var oBtn01 = document.getElementById('btn01')
    var oBtn02 = document.getElementById('btn02')
    oBtn02.onclick = function(){
        speed = -5
    }
    oBtn01.onclick = function(){
        speed = 5
    }

    // 3、鼠标滑过停止定时器，鼠标离开启动定时器
    var oSlide = document.getElementById('slide')
    oSlide.onmouseover = function(){
        clearInterval(oTimer)
        oTimer = null
    }
    oSlide.onmouseout = function(){
        oTimer = setInterval(fnMove, 50)
        // 定时器累加  setInterval(fnMove, 50)
    }
}
```



