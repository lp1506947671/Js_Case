## CSS:cascading style sheet:层叠样式表

## 0.css的优点

```css
1.节省时间
2.页面加载速度更快
3.易于维护
4.多设备兼容(css2.0兼容性最好)
```

css的样式:

```css
/*
css样式： 选择符和声明构成
声明：属性名和属性值
*/
```

**css命名规范:http://www.divcss5.com/jiqiao/j4.shtml#no2**

## 1.css的引入

### 1.css嵌入式 

**1.CSS概述**

```html
为了让网页元素的样式更加丰富，也为了让网页的内容和样式能拆分开，CSS由此思想而诞生.CSS是 Cascading Style Sheets 的首字母缩写，意思是层叠样式表。有了CSS，html中大部分表现样式的标签就废弃不用了，html只负责文档的结构和内容，表现形式完全交给CSS，html文档变得更加简洁。
```

**2.css嵌入式：通过style标签，在网页上创建嵌入的样式表。**

```html
1.<style>   type:text/css 纯文本的css格式 这个属性可有可
2.css注释: /* 注释内容 */
举例:
    <style type="text/css">
        h3{
            color:red;
         }
    </style>
```

### 2.css外部式 

**1.外链式：通过link标签，链接外部样式文件到页面中。**

```html
1.rel=“stylesheet” -- html和css关系是什么：样式单
2.href = "" -- 路径查找css文件
<link rel="stylesheet" href="css/main.css" type="text/css">
```

### 3.css内联式 

**1.内联式(内联式)：通过标签的style属性，在标签上直接写样式。**

**2.工作经验**

```html
外链式:最常用的写法，
内联式:容易重复的代码,不利于维护,不符合结构样式分离
嵌入式:能解决样式分离,不解决代码复用一般电商网站首页用嵌入式写法（提高页面的加载速度）
优先级:内联式>嵌入式>外部式(link写在style后面)
```

## 2.CSS选择器

```css
一.基础选择器
标签选择器,类选择器,id选择器
二.高级选择器
后代选择器,子代选择器,组合选择器,交集选择器,伪类选择器
```

### 0.标签选择器

```css
p{}
span{}
```

### 1.类选择器 

```css
通过类名来选择元素，一个类可应用于多个元素，一个元素上也可以使用多个类，应用灵活，可复用，是css中应用最多的一种选择器

.blue{color:blue}
.big{font-size:20px}
.box{width:100px;height:100px;background:gold}
```

### 2.id选择器 

```html
通过id名来选择元素，元素的id名称不能重复，所以一个样式设置项只能对应于页面上一个元素，不能复用(浪费资源)，id名一般给程序使用，所以不推荐使用id作为选择器。

<--其实并不是用id选择器写css样式，id选择器查找标签做数据交互-->

例:#box{color:red}
```

### 3.后代/子代选择器(层级选择器)

```css
<ul>
    <li>
    	<a herf='#'>一级菜单</a>
        <a>一级菜单</a>
        <div>
            <a>二级菜单</a>
            <a>二级菜单</a>
        </div>
        
    </li>
</ul>

ul li a{
    color:red;
} #此时li内的所有a标签都变为红色了

ul li>a{
    color:blue;
}#此时只有一级菜单的a标签变为蓝色，二级的不受影响

```

### 4.组合选择器(并集选择器)

```css
多个选择器，如果有同样的样式设置，可以使用组选择器
例:.box1,.box2,.box3{width:100px;height:100px} 类选择器
例: h1,div,sapn{} 

全部选择时可使用*选中所有标签
例:*{width:100px;height:100px}
/*注意:使用逗号进行分割隔开*/
```

###  5.交集选择器

```css
<head>
    <meta charset="UTF-8">
    <title>15-css交集选择器.html</title>
    
    <style>
        p.para1{
            color: red;
        }
    </style>
</head>
<body>
<!--
        交集选择器,相交的部分就是要设置属性值的标签
        1,格式:
        选择器1选择器2...{
            属性:值;
        }
        2,注意点:
        (1),选择器之间没有任何的连接符号
        (2),选择器可以是标签名称,也可以是id、class名称
        (3),交集选择器仅仅是了解
    -->
<p>我是段落</p>
<p>我是段落</p>
<p class="para1">我是段落</p>
<p class="para1">我是段落</p>
<p>我是段落</p>
</body>
```

### 6.伪类选择器

```css
/*伪类类选择器种类(a标签)*/
/* a  共有4个 */
    a:link{ /* 默认状态 */
        color: red;
    }
    a:visited{ /* 访问状态 */
        color: green;
    }
    a:hover{ /* 悬停状态 能运用在html的所有标签上*/
        color: blue;
    }
    a:active{ /* 点击状态 */
        color: pink;
    }


div:hover{
    backegroud-color:green
}
div:hover span{
    backegroud-color:green
}
```

### 7.总结

| 选择器                       | 应用场景                                                     |
| ---------------------------- | ------------------------------------------------------------ |
| 标签选择器                   | 对页面中相同的元素，设置共同的属性                           |
| id选择器                     | * 任何的元素都可以设置id<br/>* id是唯一，并且不能重复，表示选中的是有“特性的元素” |
| class选择器                  | * 任何的元素都可以设置类<br/> * 一个元素中可以设置多个类<br/> * 一定要有“归类的概念，公共类的想法”。选中的页面元素，设置相同的属性 |
| 后代（爸爸的儿子，孙子....） | *div p{}                                                     |
| 子代（亲儿子）               | div>p                                                        |
| 交集选择器                   | 选择器1选择器2{}                                             |
| 伪类选择器                   | 爱恨准则  LoVe HAte<br/>                    + a:link{}<br/>                    + a:visited{}<br/>                    + a:hover{}<br/>                    + a:active{}<br/>注意：:hover可以应用于任何的元素 |

### 8.css的继承性

```
检查->style->inheritted form 名字
```

### 9.css的权重

|      | 内联样式 | id选择器 | 类选择器 | 标签选择器 | !important                     |
| ---- | -------- | -------- | -------- | ---------- | ------------------------------ |
| 权重 | 1000     | 100      | 10       | 1          | 最高的优先级，甚至超过内联样式 |

**注意:**

1.css权重永不进位

2.与选中的标签相比继承的权重非常小

3.同样具备!important的css选择器,权重越高的优先级越高

```css
选择器类型：
1、ID　　#id
2、class　　.class
3、标签　　p
4、通用　　*
5、属性　　[type="text"]
6、伪类　　：hover
7、伪元素　　::first-line
8、子选择器、相邻选择器
 
权重计算规则：
1、第一等：代表内联样式，如: style=””，权值为1000。
2、第二等：代表ID选择器，如：#content，权值为0100。
3、第三等：代表类，伪类和属性选择器，如.content，权值为0010。
4、第四等：代表类型选择器和伪元素选择器，如div p，权值为0001。
5、通配符、子选择器、相邻选择器等的。如*、>、+,权值为0000。
6、继承的样式没有权值。
```



##  3.CSS的常见属性

### 0.字体属性

|             | 描述     | 值                                                           |
| ----------- | -------- | ------------------------------------------------------------ |
| font-family | 字体类型 | "微软雅黑"                                                   |
| font-szie   | 字体大小 | 1.rgb表示法:rgba(255,103,0,.3)其中.3为透明度,取值在0~1之间其中.3等于0.3<br/>2.十六进制表示法:#FF6700 等同于rgb(255,103,0)<br/>px:像素绝对单位<br/>em:像素相对单位字体大小为20px则1em为20px<br/>rem：相对单位 主要应用于移动端 |
| font-style  | 字体样式 | normal正常italic:斜体                                        |
| font-weight | 字体粗细 | font-weight:400 取值范围0~900其中400是正常的,bold:粗的字体   |

### 1.文本属性

| 1               | 2                        |                                                              |
| --------------- | ------------------------ | ------------------------------------------------------------ |
| text-decoration | 文本装修饰               | none,overline,thoughline,underline                           |
| text-ident      | 文本缩进                 | 12px,2em(2个字体大小)                                        |
| line-hight      | 文本行高                 | 12px,2em(行高一定大于字体大小)<br>linr-height:height**垂直居中** |
| left-spacing    | 文字间距(只对中文起作用) | 5px                                                          |
| word-spacing    | 文字间距(只对英文起作用) | 5px                                                          |
| text-align      | 文本对齐                 | center:**水平居中对齐**<br>right<br>left                     |

### 2.元素的分类

| 名称       | 标签                                   | 特点                                                  | display:none         |
| ---------- | -------------------------------------- | ----------------------------------------------------- | -------------------- |
| 块级元素   | <div>,<ul>,<ol>,<p>,<h>,<table>,<from> | 独占一行,可以设置宽高,默认宽度是父标签的100%          | display:block        |
| 行内元素   | <a>,<span>,<em>,<strong>,<lable>       | 在一行内显示.不能设置宽高默认宽高是文本内容占据的宽高 | display:inline       |
| 行内块元素 | <input>,<img>(属于行内元素)            | 在一行显示,能试着宽高                                 | display:inline-block |

**小米顶部栏案例**

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>小米顶部案例</title>
	<style type="text/css">
		.top_bar{
			width: 100%;
			height: 40px;
			background-color: black;
		}
		a{
			text-decoration: none;
		}
		.top_bar span{
			color: #424242;
		}
		.top_bar a{
			color: #b0b0b0;
			display: inline-block;
			line-height: 40px;
		}
		
		.top_bar a:hover{
			color: #fff;
		}
		

	</style>
</head>
<body>
	<div class="top_bar">
		<a href="#">小米商城</a>
		<span>|</span>
		<a href="#">MIUI </a>
		<span>|</span>
		<a href="#">IoT</a>
		<span>|</span>
		<a href="#">云服务</a>
		<span>|</span>
	</div>
</body>
</html>
```

### 3.显示隐藏 

```css
display:属性是用来设置元素的类型及隐藏的，常用的属性有：
    1.none 元素隐藏且不占位置
    2.inline 元素以行内元素显示
    3.block 元素以块元素显示
visibility: hidden;占位隐藏
```

### 4.溢出 

```css
当子元素的尺寸超过父元素的尺寸时，需要设置父元素显示溢出的子元素的方式，设置的方法是通过overflow属性来设置。

overflow的设置项： 
1、visible 默认值。内容不会被修剪，会呈现在元素框之外。
2、hidden 内容会被修剪，并且其余内容是不可见的。
3、scroll 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。(无论超不超过都加滚动条)
4、auto 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。(前端布局时水平方向不允许有滚动条)
```

### 5.居中

**文字居中** 

**1.文字水平居中:text-align: center;**

**2.文字垂直居中**

```css
/* 文字垂直居中：设置行高属性的值等于自身高度属性的值 */
	div{
	height:200px
    line-height: 200px;
	}
    
```

**3.版心(网页有效内容的标签)居中即块元素相对于父级水平居中**

```
块元素如果想设置相对页面水平居中，可以使用margin值中的auto关键字，“auto”只能用于左右的margin设置，不能用于上下的.
margin: 0px auto;
```

**1.行内元素水平居中**

```css
 display:table-cell
 vertical-align:middle
```

**2.块级元素水平居中一:**

```css
/*position+margin*/
.father{
position:relative;
}
.child{
    position:absolute;
    margin:auto:
    left:0;
    right:0;
    top:0;
    botoom:0;
}
```

**3.块级元素水平居中二:**

```css
/* display:table-cell*/
.father{
		width: 200px;
		height: 200px;
		background-color: red;
		display: table-cell;
		vertical-align: middle;
		text-align: center;
	}
.son{
    width: 100px;
    height: 100px;
    background-color:green;
    display: inline-block;

}
```

**4.块级元素垂直水平居中方法三**

```css
/* 纯定位 */
.father{
    width: 200px;
    height: 200px;
    background-color: red;
    position: relative;

}
.son{
    width: 100px;
    height: 100px;
    background-color:green;
    position: absolute;
    margin-left: 50px;
    margin-top: 50px;
```

### 6.背景属性

```css
background-image: url('images/scholl_flower.jpeg');
/*平铺方式*/
background-repeat:no-repeat; 
/*背景定位*/
background-position:  50px 100px;
background-position-x: 100px;
background-position-y: 200px;
/*关键字：top right bottom left center*/
background-position: bottom right;
/*百分比： 0% 50% 100%*/
/*水平百分比的值 =  容器宽度的百分比- 背景图片宽度百分比*/
background-position: 30% 60%;
background-position: 270px 600px;
background: url("images/MIUI.png")no-repeat center top;
```

### 7.雪碧图技术

- 静态图片,不随用户的信息变化而变化

- 小图片,图片比较大小(2~3kb)

- 加载量比较大

  一些大图不建议使用雪碧图

  通过css的背景属性的background'-position来控制雪碧图的显示

  有效减少了Http请求的数量,加速了内容的显示.因为没请求一次,就会和服务器链接一次,建立链式连接需求需要额外的时间开销

### 8.边框阴影

```css
/*box-shadow:水平方向 垂直方向 虚化程度 颜色 是否内部虚化; */
box-shadow: 20px 20px 50px black inset;
```



## 4.盒子模型 

### 1.盒子模型属性介绍

```css
把元素叫做盒子，设置对应的样式分别为：
盒子的宽度(width)、
盒子的高度(height)、
盒子的边框(border)、
盒子内的内容和边框之间的间距(padding)、
盒子与盒子之间的间距(margin)

solid -> 实线
dashed -> 虚线
dotted -> 点线
例: border-top:10px solid black;
```

[1]:https://www.runoob.com/css/css-boxmodel.html

### 2.paddin属性

|                              1                               |
| :----------------------------------------------------------: |
| /* 分别设置上边  右边  下边  左边的padding值 */<br/>padding:20px 80px 160px 40px; |
| /* 分别设置上边   左右边   下边的padding值 */<br/>padding:20px 80px 160px; |
| /* 分别设置上下边  左右边的padding值 */<br/>padding:20px 80px; |
|      /* 同时设置四个边的padding值 */<br/>padding:20px;       |

### 3.border属性

```css
#清除input默认样式
/* 清除默认样式 */
border:0;
/* 清除外线 */
outline: none;

/* 三要素： 粗细（width）  样式 (style) 颜色 (color)*/
border: 1px solid red;
/* 等同于 */
border-width: 4px 10px;
border-style:soild dotted double dashed;
border-color: green red purple;


/*按照方向来编写border */
border-top-width: 4px;
border-bottom-color: red;
border-bottom-style: solid;
```

### 4.margin

```css
/*应用场景:不同盒子之间进行距离划分*/
注意:垂直方向上margin之间存在外边距存在塌陷的情况及外边距合并
/*Html盒子居中显示*/
margin-left: auto;
margin-right: auto;
```

**3.设置边框和内边距时都会增大盒子的尺寸.设置外边距会改变盒子的位置**

```css
如果不想修改盒子大小:
 /* 启动盒子内减模式 css3.0 */
 box-sizing: border-box;
```

**4.详解盒子模型属性** 

**1.外边距和内边距设置及简写方法**

* 外边距:

```css
/* 分别设置上边  右边  下边  左边的margin值 */
margin:20px 80px 160px 40px;
/* 分别设置上边   左右边   下边的margin值 */
margin:20px 80px 160px;
/* 分别设置上下边  左右边的margin值 */
margin:20px 80px; */
/* 设置四个边的外边距 */
margin:20px;
```

**案例:热搜的html+css**

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div{
            width: 560px;
            height: 240px;
            border: 1px solid #000;
        }
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
        }
        li{
            height: 36px;
            border-bottom: 1px solid #ccc;
            padding-left:20px ;
        }
        a{
            color: #000000;
            text-decoration: none;
        }
        a:hover{

            color: red;
        }

    </style>
</head>
<body>
<div>
    <ul>
        <li> <a href="#">热搜榜第一</a></li>
        <li> <a href="#">热搜榜第二</a></li>
        <li> <a href="#">热搜榜第三</a></li>
        <li> <a href="#">热搜榜第四</a></li>
        <li> <a href="#">热搜榜第五</a></li>
    </ul>
</div>
</body>
</html>
```

## 5.css的初始化 

**1.大部分标签存在默认样式(主要影响布局的属性为内外边距)需要清除**

```css
body,p,ul,ol,dl,dt{
			margin: 0;
			padding:0;
		}
ul,ol{
    list-style: none;

}
input{
    border: none;
    outline: none;

}
a{
    text-decoration: none;
}
```

**2.推荐初始化的内容**

```css
    body,button,dd,dl,dt,h1,h2,h3,h4,h5,h6,input,li,ol,p,td,ul{margin:0;padding:0}
    body,button,input{font:12px/1.5 tahoma,arial,'Hiragino Sans GB',\5b8b\4f53,sans-serif}
    h1,h2,h3,h4,h5,h6,button,input{font-size:100%}/*默认继承body的字体大小设定*/
    ol,ul{list-style:none}
    a{text-decoration:none}
    a:hover{text-decoration:underline}
    fieldset,img{border:0;vertical-align:top;}
    a,button{cursor:pointer;}

```

**注意:**百度resetcss

## 6.浮动

### 1.浮动的背景

只是为了单纯的实现文字环绕现象

### 2.浮动的属性

| 属性值  | 描述                 |
| ------- | -------------------- |
| none    | 没有浮动             |
| left    | 所有的标签左对齐     |
| right   | 所有的标签右对齐     |
| inhreit | 继承父元素的浮动属性 |

### 3.浮动的现象

```css
0.文字环绕(左浮动的图片和段落)
1.脱离了标准文档流(左浮动的盒子和不浮动的盒子)
2.浮动元素互相贴靠(左浮动的盒子和左浮动的盒子)
3.浮动元素有收缩现象(没有指定宽度的左浮动盒子)
```

**注意:**由于包裹性的特点，浮动元素一般需要手动设置width

**参考:**https://blog.csdn.net/Light__1024/article/details/86741766

### 4.消除浮动元素的破坏性

注意:子类的浮动使自己父元素的高度塌陷

| 方法                   | 规则/应用                                                    | 缺点                     |
| ---------------------- | ------------------------------------------------------------ | ------------------------ |
| 1.给父元素设置固定高度 | 网页中盒子固定高度区域,比如固定导航栏                        | 使用不灵活后期不容易维护 |
| 2.内墙法               | 在最后一个浮动元素的后面加一个空的块级元素,并且设置该属性clear:both | 结构冗余                 |
| 3.伪元素(选择器)清除.  | `.clearfix::after{content:'',display:block,clear:both}`      |                          |
| 4.overflow:hidden      | BFC区域:计算BFC区域的高度时,浮动元素的高度也参与计算 <br>形成BFC的条件:除了overflow:visitable的属性值外(hidden,scroll,auto,inherit都可以) |                          |

**注意:**BFC(Block Formtting Context)

**参考:**https://blog.csdn.net/m0_37922443/article/details/108098474

###  5.BFC区域

**一：BFC是什么**
**了解BFC前先一了解一下Box和Formatting Context**

（1）B: BOX即盒子，页面的基本构成元素。分为 inline 、 block 和 inline-block三种类型的BOX

（2）FC: Formatting Context是W3C的规范中的一种概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。

常见的 Formatting Context 有 Block fomatting context (简称BFC)和 Inline formatting context (简称IFC)

**BFC 定义**
	BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与,它规定了内部的Block-level Box如何布局,并且与这个区域外部毫不相干,也是浮动元素与其他元素交互的区域

**二:box布局规则：**

1. 内部的Box会在垂直方向,一个接一个地放置。
2. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin_top会发生重叠(margin塌陷)
3. 每个元素的margin box的左边,与包含块border box的左边相接触(对于从左往右的格式化,否则相反)。即使存在浮动也是如此(浮动脱离文档流)。

**三：那些元素会生成BFC**
	1.根元素(html元素)
	2.float属性不为none
	3.position为absolute或fixed
	4.display为inline-block
	5.overflow不为visible 

**四:BFC布局规则：**

1. BFC的区域不会与float 元素重叠。

2. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

3. 计算BFC的高度时，浮动元素也参与计算

**注意:**浮动能够使行内元素具备改变宽高的能力

**参考:**https://www.jianshu.com/p/e69394e960d5

## 4.定位

### 1.相对定位 

**1.文档流**

```css
<文档流> 是指盒子按照html标签编写的顺序依次从上到下，从左到右排列，块元素占一行，行内元素在一行之内从左到右排列，先写的先排列，后写的排在后面，每个盒子都占据自己的位置。
```

**2.相对定位**

```css
我们可以使用css的position属性来设置元素的定位类型:
<relative> 生成相对定位元素，一般是将父级设置相对定位，子级设置绝对定位，子级就以父级作为参照来定位，否则子级相对于body来定位。
```

**3.定位代码实例**

```css
 .box01{
            /* 设置相对定位 */
            position:relative;
            left:50px;
            top:50px;
        }
```

**4.在position属性使用时left、right、top或者bottom来设置相对于参照元素的偏移值时可以使用像素值,也可以使用百分比.**

### 2.绝对定位 

```
<absolute> 生成绝对定位元素，
元素脱离文档流，不占据文档流的位置，可以理解为漂浮在文档流的上方，
相对于上一个设置了定位的父级元素来进行定位，如果找不到，则相对于body元素进行定位。
```

```css
 .box01{
            /* 设置相对定位 */
            position:absolute;
            left:50px;
            top:50px;
  }
```

### 3.固定定位 

**1.定义**

```
<fixed> 生成固定定位元素，
元素脱离文档流，不占据文档流的位置，
可以理解为漂浮在文档流的上方，相对于浏览器窗口进行定位。
```

**2.注意:坐标轴的定义:x轴为从左向右依次增大,y轴为上到下依次增大.**

### 4.定位总结

| 定位类型          |                             定义                             |                            参考点                            |
| :---------------- | :----------------------------------------------------------: | :----------------------------------------------------------: |
| 相对定位:relative |                  不脱离文档流,可以调整元素                   |                     以原来的位置为参考点                     |
| 绝对定位:absolute |       脱离标准文档流,在页面占位置<br>层级提高,压盖现象       | 相对于最近的非static祖先元素,如果没有非static祖先元素,那么以页面根元素左上角进行定位,网站中实战应用:"子绝父相" |
| 固定定位          | 脱离标准文档流<br>一旦设置固定定位，在页面中滚动网页，固定不变<br> |    以浏览器的左上角(应用:小广告， 回到顶部 ，固定导航栏)     |

**注意:**除相对定位外其他定位能够改变行内元素的宽高

### 5 z-index

   **定义:指定一个元素的堆叠顺序**

- z-index只用于定位中
- z-index默认是auto,值越大优先级越高
- z-index有"从父现象"父级大则相应的子集也就大 



**1.定位元素水平垂直居中技巧**

```css
div{
    width:800px;
    height:300px;
    backgroud:#ccc;
    position:absolute;
    left:50%;
    margin-left:-400px; /*减去自身宽度的一半*/
    top:50%;
    margin-top:-150px; /*减去自身高度的一半*/
    z-index:10;
    /*内容和背景色一起透明*/
    opacity:0.5;
    /*alpha*/
    background:rgba(0,0,0,0.6)
}
p{
    width:300px;
    height:300px;
    backgroud:#green;
    position:absolute;
    left:500px;
    top:300px;
}
```

**2.定位元素层级**

``` css
定位元素是浮动的正常的文档流之上的，可以用z-index属性来设置元素的层级,数值较大的元素排列在上边.
```

**3.注意默认状态下(不设置z-index属性),后写的标签层级排列在上边,先写的标签排列在下边**

**4.元素透明度**

```css
/* 设置元素透明度,将元素透明度设置为0.3，此属性需要加一个兼容IE的写法内容和背景色一起透明 */
opacity:0.3;
/* 兼容IE */
filter:alpha(opacity=30);
```

**5.背景透明**

```
 background: rgba(0,0,0,0.6);
```

## 5.页面嵌套 

**1.iframe:元素会创建包含另外一个文档的内联框架（即行内框架）。**

```html
    <!--target的值为iframe的name属性的值,点击超连接标签时在iframe区域内打开链接-->
    <a href="http://www.baidu.com" target="myframe">百度</a>
    <br>
    <!-- src:默认显示的页面 -->
    <!--  frameborder="0"  设置iframe的边框 -->
    <iframe src="03-版心居中.html" name="myframe"></iframe>
```

**2.frameset(了解):元素可定义一个框架集。它被用来组织多个窗口（框架）。**

**每个框架存有独立的文档。在其最简单的应用中，frameset 元素仅仅会规定在框架集中存在多少列或多少行。您必须使用 cols 或 rows 属性。**

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<!-- frameborder="0" -->
<!-- noresize 属性规定用户无法调整框架的大小。默认地，可以通过拖动框架之间的“墙壁”来改变框架的大小，该属性可以锁定框架的大 -->
<frameset rows="150px, *" noresize="noresize">
    <frame src="top.html">
    <frameset cols="250px, *">
        <frame src="left.html">
        <frame src="right01.html" name="right" scrolling="no">
    </frameset>
</frameset>
</html>
```

