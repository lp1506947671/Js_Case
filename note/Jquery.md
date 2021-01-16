# 01.前端第六天

## 1.了解jq

**1.jQuery的版本分为1.x系列和2.x、3.x系列，1.x系列兼容低版本的浏览器，2.x、3.x系列放弃支持低版本浏览器，目前使用最多的是1.x系列的**

**2.jquery是一个函数库，一个js文件，页面用script标签引入这个js文件就可以使用。**

```js
<script type="text/javascript" src="js/jquery-1.12.2.js"></script>
```

**3.jQuery:The Write Less, Do More.**

**注意:**使用1.x版本的min

## 2.jq入口函数

**1.jQuery的特点:写得少,做的多,效果好,支持链式编程.**

**2.JavaScript的入口函数**

```js
<script type="text/javascript">
    // 完整写法
    $(document).ready(function(){
         ......
    });
    // 简化写法 工作中常用的写法  $(匿名函数)
    $(function(){
        alert(2)
    })
</script>  
```

## 5.对比js和jq

**1.原生js实现隐藏显示**
```js
 window.onload = function(){
        var oBtn = document.getElementById('btn')
        var oBox = document.getElementById('box')
        oBtn.onclick = function(){
            oBox.style.display = 'none'
        }
    }
```

**2.jQuery实现隐藏显示**

```js
#jQuery 中所有选择器都以美元符号开头：$()
$(function(){
    // 查找到按钮绑定单击，查找div隐藏
    // $(目标)  == jq选择器：和css一样的选择器  、 jq自己新增的选择器
    $('#btn').click(function(){
        // $('div').hide(500)
        // $('div').show(500)
        $('div').toggle(500)
    })
})
```

## 6.jq控制html和css

**1.jQuery控制html**

内容 html() -- 用法：如果写参数表示修改；不写参数表示访问

```js
$(function(){
    alert($('div').html())
    $('div').html('<p>aaaaa</p>')
    $('div').html('')
})
```

**2.jQuery控制css**

css:css() -- 单属性操作和多属性操作

```js
$(function(){
    // 1、单属性：控制 和  访问
    $('div').css('color', 'red')
    alert($('div').css('color'))
    // 2、多属性  -- 一次性控制多个css键值对字典的形式,不能访问
    $('div').css({'color':'red', 'font-size':'60px'})
})
```

## 7.jq常用选择器

**1.jQuery选择器**
```js
$('#myId') //选择id为myId的网页元素
$('.myClass') // 选择class为myClass的元素
$('li') //选择所有的li元素
$('#ul1 li span') //选择id为为ul1元素下的所有li下的span元素
//jquery所特有的
$('input[name=first]') // 选择name属性等于first的input元素 
$('input[id=second]') // 选择name属性等于first的input元素 
$('input[class=third]') // 选择name属性等于first的input元素 
```

**2.jQuery对选择集进行过滤**

```js
$('div').has('p'); // 选择包含p元素的div元素
$('div').not('.myClass'); //选择class不等于myClass的div元素
# eq的两种用法
$('div').eq(5); //选择第6个div元素
$('div:eq(5)'); //选择第6个div元素
# has()和find()的两种区别
$('div').has('p'); // 选择包含p元素的div元素
$('div').find('p'); // 选择div元素包含的p元素
```

**3.选择集转移**
```js
$('#box').prev(); //选择id是box的元素前面紧挨的同辈元素
$('#box').prevAll(); //选择id是box的元素之前所有的同辈元素
$('#box').next(); //选择id是box的元素后面紧挨的同辈元素
$('#box').nextAll(); //选择id是box的元素后面所有的同辈元素
$('#box').parent(); //选择id是box的元素的父元素
$('#box').children(); //选择id是box的元素的所有子元素
$('#box').siblings(); //选择id是box的元素的同级元素
$('#box').find('.myClass'); //选择id是box的元素内的class等于myClass的元素
```

## 8.siblings

**1.siblings兄弟选择器：排他思想**

**2.siblings选择器的使用**
```js
<script>
$(function(){
    $('button').click(function(){
        // 单击的这个标签（this）变css为绿色
        $(this).css('background', 'green')
        // 这个标签的兄弟标签为红色
        $(this).siblings().css('background', '')  
    })
})
</script>
```

**3.jQuery的链式编程**
```js
<script>
$(function(){
    $('button').click(function(){
       // 链接编程/链式调用 -- 比喻：火车
       $(this).css('background', 'green').siblings().css('background', '')
    })
})
</script>
```

## 9.parent

**1.parent父集选择器,选择自己的父集元素**

**2.parent选择器的使用**
```css
 <script>
$(function(){
    // 单击span，隐藏自己的父级
    $('span').click(function(){
        $(this).parent().hide(500)
    })
})
</script>
```

**案例:**左右两边的广告

## 10.children:电商左边栏

**1.children子集选择器,选择自己的子集元素**

**2.清除动画排队机制：在形成动画函数之前加stop()**

**3.children子集选择器的使用**

```js
 <script>
    $(function(){
        // 鼠标滑过（），二级菜单显示
        $('.nav li').mouseover(function(){
            // 这个li的子级ul显示
            $(this).children('ul').stop().show(500)
        })
        $('.nav li').mouseout(function(){
            $(this).children('ul').stop().hide(500)
        })
    })
    </script>
```

## 11.index方法

**1.获取元素的索引值**
```js
// 有时候需要获得匹配元素相对于其同胞元素的索引位置，此时可以用index()方法获取
var $li = $('.list li').eq(1);
alert($(this).index()); // 弹出1
......
<ul class="list">
    <li>1</li>
    <li>2</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
</ul>
```


## 12.添加类删除类

**1.操作样式类名**
```js
$("#div1").addClass("divClass2") //为id为div1的对象追加样式divClass2
$("#div1").removeClass("divClass")  //移除id为div1的对象的class名为divClass的样式
$("#div1").removeClass("divClass divClass2") //移除多个样式
$("#div1").removeClass()  //移除全部以类名添加的样式
$("#div1").toggleClass("anotherClass") //重复切换anotherClass样式
```

## 13.tab

**1.选项卡案例**
```js
 <script>
$(function(){
    $('input').mouseover(function(){
        // $(this).addClass('active')
        // $(this).siblings().removeClass()
        $(this).addClass('active').siblings().removeClass()
        // 得到按钮鼠标滑过的下标，从3个内容div中选中和这个下标相等的内容显示
        var num = $(this).index()
        // alert(num)
        // $('.tab_cons div').eq(num).addClass('current')
        // $('.tab_cons div').eq(num).siblings().removeClass()
        $('.tab_cons div').eq(num).addClass('current').siblings().removeClass()
    })
})
  </script>
```

# 02.前端第七天

## 1.animate

**1.animate函数:自定义动画函数**

**2.animate函数的参数**

```js
// $('div').animate(字典的形式写css键值对, 时间, 运动曲线, 回调函数) 
1.样式: css键值对：{k:v,...} // 不支持变色动画   
2.时间:以毫秒为单位， 默认值是600
3.运动曲线：swing  linear -- 工作中不用, 必须是字符串
4.回调函数：匿名函数，表示动画完成之后要执行的命令
```

**2.animate函数的使用方法**

```js
<script>
$(function(){
    // 作用：自定义动画函数
    $('div').animate({'width': '800px', 'height':'300px', 'background':'pink'}, 2000, 'linear', function(){
        alert('动画完成了')
    })
})
</script>
```

## 2.tab练习

**1.标签切换小案例**

```js
<script>
$(function(){
    $('input').mouseover(function(){
        $(this).addClass('current').siblings().removeClass()
        var num = -$(this).index() * 500
        $('.tab_cons').animate({'left':num})
    })
})
</script>
```

## 3.弹窗练习

```js
<script>
$(function(){
    $('#btn').click(function(){
        // 显示：从上top:0到下，从透明度看不见opacity:0  到看得见
        $('.pop_main').show()
        $('.pop_con').css({'top':0, 'opacity': 0})
        $('.pop_con').animate({'top':'50%', 'opacity': 1})
    })
    $('.cancel, .pop_title a').click(function(){
        $('.pop_con').animate({'top':0, 'opacity': 0}, function(){
            $('.pop_main').hide()
        })
    })
}) 
</script>
```

## 4.内置动画函数

**1.jQuery中的特殊动画效果**

```js
// 透明度动画
fadeIn() 淡入
fadeOut() 淡出
fadeToggle() 切换淡入淡出
// 显隐动画
hide() 隐藏元素
show() 显示元素
toggle() 切换元素的可见状态
// 滑动动画
slideDown() 向下展开
slideUp() 向上卷起
slideToggle() 依次展开或卷起某个元素
// 设置透明度
// $('div').fadeTo(时间, 透明度小数)
$('div').fadeTo(500, 0.6)
```

**2.jQuery中的特殊动画参数**

```
1.时间:以毫秒为单位， 默认值是600
2.运动曲线：swing  linear -- 工作中不用, 必须是字符串
3.回调函数：匿名函数，表示动画完成之后要执行的命令

```

## 5.层级菜单

**1.层级菜单案例**

```js
<script type="text/javascript">
$(function(){
    // 单击一级菜单，显示隐藏 滑动 二级菜单
    $('.level1').click(function(){
    $(this).next().slideDown().parent().siblings().children('ul').slideUp()
    })
})
</script>
```

## 6.jq控制html属性

**1.html() 取出或设置html内容**

```js
// 取出html内容
var $htm = $('#div1').html();
// 设置html内容
$('#div1').html('<span>添加文字</span>');
```

**2.prop() 取出或设置某个属性的值**

```js
// 取出图片的地址
var $src = $('#img1').prop('src');
// 设置图片的地址和alt属性
$('#img1').prop({src: "test.jpg", alt: "Test Image" });
```

**3.val()取出或设置某个属性的value值**

```js
// val() -- 访问控制value属性 
alert($('input').val())
// value属性赋值
$('input').val('123')
```

## 7.聊天对话框

```js
 <script type="text/javascript">       
$(function(){
    // 发送单击 获取用户输入的数据value属性值， 显示（看a是b）
    $('#talksub').click(function(){
        var vals = $('#talkwords').val()
        // alert(vals)
        // 保留原有的div和类名  条件下拉菜单的value属性值是0还是1
        var whoVal = $('#who').val()
        var str = ''
        if(vals == '')
        {
            alert('请输入内容')
            return
        }
        if(whoVal == 0)
        {
            str = '<div class="atalk"><span>A说：'+ vals +'</span></div>'
        }
        else
        {
            str = '<div class="btalk"><span>B说：'+ vals +'</span></div>'
        }
        // 原有的内容  + str
        $('#words').html( $('#words').html() + str )
        $('#talkwords').val('')
    })
})
</script>
```

## 8.jq循环

**1.对jquery选择的对象集合分别进行操作，需要用到jquery循环操作，此时可以用对象上的each方法**

```js
$(function(){
    $('li').each(function(event){
        // 形参表示的就是标签的索引值
        alert( event )
    })
})
```

## 9.获得和失去焦点

**1.jQuery中的事件函数**

```
blur() 元素失去焦点
focus() 元素获得焦点
click() 鼠标单击
mouseover() 鼠标进入（进入子元素也触发）
mouseout() 鼠标离开（离开子元素也触发）
mouseenter() 鼠标进入（进入子元素不触发）
mouseleave() 鼠标离开（离开子元素不触发）
hover() 同时为mouseenter和mouseleave事件指定处理函数
ready() DOM加载完成
submit() 用户递交表单
```

**2.blur和focus函数的使用**

```js
 <script>
$(function(){
    $('input').focus(function(){
        // 清空也有条件：如果是默认值
        if($(this).val() == '请输入用户名'){
            $(this).val('')
        }
    })
    $('input').blur(function(){
        // 还回默认值条件：如果用户没有输入数据
        if($(this).val() == ''){
            $(this).val('请输入用户名')
        }
    })
})
</script>
```

## 10.鼠标移入和离开

**1.mouseover,mouseout,mouseenter,mouseleave函数的使用**

```js
<script>
$(function(){
    // 鼠标进入（进入子元素也触发）
    $('div').mouseover(function(){
        $(this).animate({'margin-top': '150px'})
    })
    // 鼠标离开（离开子元素也触发）
    $('div').mouseout(function(){
        $(this).animate({'margin-top': 0})
    })
    // 鼠标进入（进入子元素不触发）
    $('div').mouseenter(function(){
        $(this).animate({'margin-top': '150px'})
    })
    // 鼠标离开（离开子元素不触发）
    $('div').mouseleave(function(){
        $(this).animate({'margin-top': 0})
    })
})
</script>
```

**2.hover函数的使用**

```js
<script>
$(function(){
    // 同时为mouseenter和mouseleave事件指定处理函数
    // 参数为两个匿名函数 第一个匿名函数为mouseenter执行的代码,第二个匿名函数为mouseleave执行的代码
    $('div').hover(function(){
        // 鼠标移入的命令
        $(this).animate({'margin-top': '150px'})
    }, function(){
        // 鼠标离开的命令
        $(this).animate({'margin-top': 0})
    })
})
</script>
```

## 11.submit事件

**1.submit函数的使用**

```js
<script>
$(function(){
    // submit
    // $('form')
    $('#myform').submit(function(event){
        // alert(1)
        // 工作中不是直接提交 ，条件判断：如果所有表单控件合法提交，否则报错不能提交数据
        if(提交条件){
            // 提交
        }else{
            // 报错  不能提交数据/阻止表单默认提交行为（某些操作系统的某些浏览器自动提交数据）
            return false  // 工作中常用
            event.preventDefault()
        }
    })
})
</script>
```

## 12.正则的使用方法

**1.正则表达式的写法**

```js
var re=new RegExp('规则', '可选参数');
var re=/规则/参数;

例: var re03 = /a/
    var re04 = /a/i  //i忽略大小写
```

**2.修饰参数**

```js
g： global，全文搜索，默认搜索到第一个结果接停止
i： ingore case，忽略大小写，默认大小写敏感
```

**3.常用函数**

```js
test
用法：正则.test(字符串) 匹配成功，就返回真，否则就返回假

例: var re04 = /a/i
    var str2 = 'Abc'
    alert(re04.test(str2))
```

## 12.正则验证用户名

**1.用户名验证**

```js
$(function(){
    // 表单验证应该失去焦点
    // $('#user_name').blur()
    var $user_name = $('#user_name')
    // oUser_name.onclick = xxx
    // $user_name.click()
    $user_name.blur(function(){
        // 封装函数 调用函数
        fnCheckUser()
    })
    function fnCheckUser(){
        // 获取用户输入的数据
        var vals = $user_name.val()
        // alert(vals)
        // 正则，正则验证用户输入的数据是否合法
        var re = /^\w{6,20}$/

        if(vals == '')
        {
            $user_name.next().show().html('用户名不能为空')
            return
        }
        if(re.test(vals))
        {
            // 合法 -- 隐藏报错信息
            $user_name.next().hide()
        }else{
            // 不合法 -- 报错 -- 下面的span标签显示
            $user_name.next().show().html('用户名是6-20位数字、字母和下划线！')

        }
    }
})
```

# 03.前端第八天

## 1.allow的验证

**1.checkbox复选框的验证**

```js
    // 复选框同意协议 -- 单击改变勾选的状态 -- click
    var $allow = $('#allow')
    $allow.click(function(){
        // 如果没有勾选  报错，勾选的话隐藏错误信息表示可以提交
        // 看jq验证 勾选到底是什么值  true  没有勾选是false
        // alert($allow.prop('checked'))
        // if(){}else{}
        fnCheckAllow()
    })
    // 验证是否同意协议
    function fnCheckAllow(){
        if($allow.prop('checked')){
            // 隐藏错误信息表示可以提交
            $allow.next().next().hide()
            // true  dakai 
            // false dakai
            flagAllow = true
        }else{
            // 没有勾选  报错
            $allow.next().next().show().html('请勾选同意协议')
            // 关闭
            flagAllow = false
        }
    }
```

## 2.submit的验证

**1.提交按钮验证**

```js
    // submit
    var $myform = $('#myform')
    $myform.submit(function(){
        // 如果验证合法提交，否则阻止表单提交return false
        fnCheckSubmit()
    })
    // 提交的函数

    function fnCheckSubmit(){
        // 避免用户打开页面直接单击注册：定义开关默认不能提交（关闭），当正则验证通过了可以提交（打开）
        if(flagUser && flagAllow){
            // 提交  所有都是true  && 
            alert('ok')
        }else{
            // alert('bu ok')
            return false
        }
    }
```

## 3.事件冒泡

**1.事件冒泡**

```
在一个对象上触发某类事件（比如单击onclick事件），如果此对象定义了此事件的处理程序，那么此事件就会调用这个处理程序，如果没有定义此事件处理程序或者事件返回true，那么这个事件会向这个对象的父级对象传播，从里到外，直至它被处理（父级对象所有同类事件都将被激活），或者它到达了对象层次的最顶层，即document对象（有些浏览器是window）。
```

**2.事件冒泡的作用**

```
事件冒泡允许多个操作被集中处理（把事件处理器添加到一个父级元素上，避免把事件处理器添加到多个子级元素上），它还可以让你在对象层的不同级别捕获事件。
```

**3.阻止事件冒泡**

```
事件冒泡机制有时候是不需要的，需要阻止掉，通过 event.stopPropagation() / return false 来阻止
```

## 4.弹窗

**1.弹窗小案例**

```js
 $(function(){
        $(document).click(function(){
            alert(1)
        })
        $('.da').click(function(){
            alert('da')
        })
        $('.zhong').click(function(){
            alert('zhong')
        })
        $('.xiao').click(function(event){
            alert('xiao')
            return false
            // event.stopPropagation()
        })
    })
```

## 5.事件委托

**1.事件委托**

```
事件委托就是利用冒泡的原理，把事件加到父级上，通过判断事件来源的子集，执行相应的操作，事件委托首先可以极大减少事件绑定次数，提高性能；其次可以让新加入的子元素也可以拥有相同的操作。
```

**2.事件委托的使用方式**

```js
        // $('ul').delegate(事件真实发生在谁身上, 事件属性, 匿名函数写命令)
        $('ul').delegate('li', 'click', function(){
            alert('ok')
        })
        // 作用：1、提高代码的执行效率；2、可以给未来元素绑定命令
        // 拓展：on(事件属性，匿名函数) -- 给未来元素绑定命令
```

## 6.DOM和append

**1.DOM:文档对象模型 document object model**

**2.Js内置：内置的一个结构化表现手法，通过这个结构化表现手法把所有的标签实现了一个倒置的树状结构图**

**3.元素节点的操作**

```
标记 == 标签  == 元素  < 节点（标签、标签的属性、标签的内容）

元素节点操作指的是改变html的标签结构，它有两种情况：
1、移动现有标签的位置
2、将新创建的标签插入到现有的标签中
```

**4.append()/appendTo()函数**

```js
// 在现存元素的内部，从后面放入元素
$('ul').append($li)
$li.appendTo( $('ul') )
```

## 7.节点操作函数

**1.prepend()/prependTo()函数**

```js
// 在现存元素的内部，从前面放入元素
$('ul').prepend($li)
$li.prependTo( $('ul'))
```

**2.after/和insertAfter()函数**

```js
// 在现存元素的外部，从后面放入元素
$('ul').after( $div )
$div.insertAfter( $('ul') )
```

**3.before()/insertBefore()函数**

```js
// 在现存元素的外部，从前面放入元素
$('ul').before( $div )
$div.insertBefore( $('ul') )
```

**4.删除节点**

```js
$('ul').remove()  // 删除节点
$('ul').empty()  // 清空节点
```

## 8.todoList

**1.todoList小案例**

```js
$(function(){
	// 增加按钮单击 -- 获取用户输入的数据放到li节点里面，追加到页面
	var $btn1 = $('#btn1')
	// var str = ''
	$btn1.click(function(){
		var vals = $('#txt1').val()
		// alert(vals)
		// str = ''
		if(vals == '')
		{
			alert('请输入内容')
			return
		}
		var $li = $('<li><span>'+ vals +'</span><a href="javascript:;" class="up"> ↑ </a><a href="javascript:;" class="down"> ↓ </a><a href="javascript:;" class="del">删除</a></li>')
		// 子级前面追加
		$li.prependTo( $('#list') )
	})
	// 删除  上下  单击
	// $('a').click(function(){  // 原始绑定命令的方法无法做给未来元素绑定命令
	// 	alert(1)
	// })
	$('#list').delegate('a', 'click', function(){
		// alert(2)
		// 不同的a有不的功能，看class属性的值 -- if  得到class属性的值
		var myClass = $(this).prop('class')
		if(myClass == 'del')
		{
			// 删除的是自己的父li
			$(this).parent().remove()
		}
		else if(myClass == 'up'){
			// 如果是第一个 提示  索引值==0
			if( $(this).parent().index() == 0 )
			{
				alert('已经是第一个了')
				return
			}
			$(this).parent().insertBefore( $(this).parent().prev() )
		}
		else if(myClass == 'down')
		{
			// 如果是最后一个提示一下 ：index == 长度-1
			// 后面没有其他标签最后一个了：后面人地 长度是0
			if( $(this).parent().nextAll().length == 0 ){
				alert('已经是最后一个了')
				return
			}
			$(this).parent().insertAfter( $(this).parent().next() )
		}
	})
})
```

## 9.js对象

**1.javascript中的对象，可以理解成是一个键值对的集合，键是调用每个值的名称，值可以是基本变量，还可以是函数和对象。**

**2.创建对象的方式:var preson = new Object()**

**3.JavaScript对象的使用**

```js
// 添加属性：
person.name = 'tom';
person.age = '25';

// 添加方法：
person.sayName = function(){
    alert(this.name);
}

// 调用属性和方法：
alert(person.age);
person.sayName();
```

## 10.了解json和ajax请求流程

**1.json**

```json
json是 JavaScript Object Notation 的首字母缩写，单词的意思是javascript对象表示法，这里说的json指的是类似于javascript对象的一种数据格式对象，目前这种数据格式比较流行，逐渐替换掉了传统的xml数据格式。

json数据对象类似于JavaScript中的对象，但是它的键对应的值里面是没有函数方法的，值可以是普通变量，不支持undefined，值还可以是数组或者json对象。

与JavaScript对象写法不同的是，json对象的属性名称和字符串值需要用双引号引起来，用单引号或者不用引号会导致读取数据错误。
例:
{
    "name":"jack",
    "age":29,
    "hobby":["reading","travel","photography"]
    "school":{
        "name":"Merrimack College",
        "location":'North Andover, MA'
    }
}
```

**2.同步和异步**

```
现实生活中，同步指的是同时做几件事情，异步指的是做完一件事后再做另外一件事，程序中的同步和异步是把现实生活中的概念对调，也就是程序中的异步指的是现实生活中的同步，程序中的同步指的是现实生活中的异步。
```

**3.局部刷新和无刷新**

```
ajax可以实现局部刷新，也叫做无刷新，无刷新指的是整个页面不刷新，只是局部刷新，ajax可以自己发送http请求，不用通过浏览器的地址栏，所以页面整体不会刷新，ajax获取到后台数据，更新页面显示数据的部分，就做到了页面局部刷新。
```

**4.ajax不支持操作本地数据也不支持操作数据库(数据安全)**

## 11.请求股票首页数据

**1.$.ajax常用参数**

```python
1、url 请求地址
2、type 请求方式，默认是'GET'，常用的还有'POST'
3、dataType 设置返回的数据格式，常用的是'json'格式，也可以设置为'html'
4、data 设置发送给服务器的数据
5、success 设置请求成功后的回调函数
6、error 设置请求失败后的回调函数
7、async 设置是否异步，默认值是'true'，表示异步
```

**2.$.ajax的使用方法**

```js
$(function(){
    $.ajax({
        // ajax的参数
        // 请求数据的地址：接口地址  名字
        url:'/index_data',
        // 请求数据方式：get  post
        type:'get',
        // 返回的数据格式  json
        dataType:'json',
        // data:发送给接口的数据
        success:function(dat){
            // 请求成功之后要执行的回调函数
            // 得到数据，并在页面显示数据
            console.log(dat)  //-- 数组里面字典  -- 循环取数据循环放数据
            var str = '<tr><th>序号</th><th>股票代码</th><th>股票简称</th><th>涨跌幅</th><th>换手率</th><th>最新价(元)</th><th>前期高点</th><th>前期高点日期</th><th>添加自选</th></tr>'
            for(var i=0;i<dat.length;i++)
            {
                // dat[i].id  对象名.shuxing
                str += '<tr><td>'+dat[i].id+'</td><td>'+ dat[i].code +'</td><td>全新好</td><td>10.01%</td><td>4.40%</td><td>全新好</td><td>16.05</td><td>2017-07-18</td><td><input type="button" value="添加" name="toAdd"></td></tr> '

                // 95 个tr
            }
            // 放数据  设置table的内容是str
            $('.table').html( str )
        },
        error:function(){
            // 请求失败
            alert('请求失败')
        }
    })
})
```

# 09前端第九天

## 1.ajax请求流程

**1.请求流程:ajax<==>数据接口<==>数据库**

**2.数据接口**

```
数据接口是后台程序提供的，它是一个url地址，访问这个地址，会对数据进行增、删、改、查的操作，最终会返回json格式的数据或者操作信息，格式也可以是text、xml等。
```

**3.接口文档的内容**

```
1.接口的作用
2.接口地址
3.参数意义
4.模板数据
```

## 2.ajax再次请求股票系统首页数据

**1.ajax的新写法**

```js
$.ajax({
    url: '/change_data',
    type: 'GET',
    dataType: 'json',
    data:{'code':300268}
})
.done(function(dat) {
    alert(dat.name);
})
.fail(function() {
    alert('服务器超时，请重试！');
});
```

## 3.ajax化简写法get和post

**1.ajax的简写方式**

```js
// $.ajax按照请求方式可以简写成$.get或者$.post方式
$.get("/change_data", {'code':300268},
  function(dat){
    alert(dat.name);
});

$.post("/change_data", {'code':300268},
  function(dat){
    alert(dat.name);
});

```

## 4.股票首页添加关注

**1.绑定未来元素要使用事件委托**

**2.时间委托不一定要委托给直接父集,可以跨级委托**

**3.html允许自定义属性,以完成自定义功能**

```js
// 定义:
mycode="'+字符串变量+'"  自定义属性使用

// 使用
$(this).prop('mycode') // 已有的html属性:prop()
$(this).attr('mycode') // 自定义的html属性用:attr()
```

## 5.jsonp原理

**1.jsonp**

```js
ajax只能请求同一个域下的数据或资源，有时候需要跨域请求数据，就需要用到jsonp技术，jsonp可以跨域请求数据，它的原理主要是利用了<script>标签可以跨域链接资源的特性。jsonp和ajax原理完全不一样，不过jquery将它们封装成同一个函数。
跨域方式 : (json  代理  传参)
```

## 6.jsonp

**1.$.ajax**

```
jQuery将ajax与jsonp封装在$.ajax函数中
```

## 7.请求360数据

**1.360数据请求**

```jQuery
    // a 到360
    $.ajax({
        url:'https://sug.so.360.cn/suggest',
        type:'get',
        dataType:'jsonp',
        data:{'word':'b'}
    })
    .done(function(dat){
        console.log(dat)
    })
```

**2.keyup()函数:键盘抬起事件**

# 案例

1.父级选择器



