

## 1.web前端技术  

**1.Web前端的组织结构**

```css
Html — 结构标准：负责网页内容(图片/文字/视频/音频)
CSS —  样式标准：美化
JavaScript — 行为标准：负责网页行为动作，<数据交互>，表单验证
```

## 2.html发展历史

**1.html:超文本标记语言**

```
HTML是 HyperText Mark-up Language 的首字母简写，意思是超文本标记语言(超文本指的是超链接).
标记指的是标签，是一种用来制作网页的语言，这种语言由一个个的标签组成.
用这种语言制作的文件保存的是一个文本文件，文件的扩展名为html或者htm。
```

**2.html发展历史(了解)**
```html
html1.0 — 1993年起草了一个草案，纯文本格式：看新闻灵感来源于报纸
html2.0/html3.0/html4.0 — 意识到有问题：语法松散(如不区分大小写) 

— 想要规范语法xhtml1.0（x严格型的html — 相对严格） 
— xhtml2.0 — 特别严格（不兼容原来的版本） 
	— 网站研发人员和浏览器厂商不愿意 
	— 浏览器厂商开会：不用xhtml2.0 我们自己研发语法提出研发html5.0 
— 各退一步（html5.0由w3c研发）
学习目标：xhtml1.0 + html5.0
```

## 3.vscode使用

**1.VSCode常用插件**
```html
autofilename（显示路径）  
open in broswer 或 openchrome（调出浏览器）
```

**2.如果没有插件需要找到html文件双击打开**

**3.设置自动保存(VSCode默认不自动保存):文件->自动保存**

**4.前端常用的编辑器(了解)**

```css
dreamweaver : 是一种强大的网页可视化编辑工具,收费.
Hbuilder : 国产优秀IDE，基于eclipse，完备的代码提示，并且可以轻松生成hybrid应用。
SublimeText3 : 非常多前端使用的编辑器，轻量级，快速启动，丰富的插件。
VS Code : 来自微软的编辑器，被称作“披着编辑器外衣的IDE”
Webstorm : 前端开发者的信仰.
```

**5.中文界面设置:按ctrl+shift+p, 输入Configure Language,打开locale.json设置"lcoale":"zh-CN"**

## 4.默认代码的含义

**1.html文件的html后缀需要手动键入,不会自动生成**

**2.快速创建html模板: ! + tab**

**3.放大缩小字体**
```
调大字号：ctrl+shift + 加号
调小字号： ctrl+ 减号
```

**4.标记**

```
<标记的名字></标记的名字> — 双标记/双标签
<标记的名字> — 单标记
```

**5.基本模板中代码的含义**
```html
<!DOCTYPE html>
<!--规定文档的dtd格式（规定好浏览器到底以哪个版本的html解析接下来的所有代码）vscode默认是html5.0-->
<html lang="en">
<head><!--网页的头，存储的是需要浏览器渲染执行的代码css和js-->
<!--<meta>标签做推广时应用比较广泛(SEO),影响网页在搜索中的排名-->
    <meta charset="UTF-8">
    <!-- 设置网页在移动端观看时，网页不缩放 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 设置网页在IE上观看时，按照IE的最高版本观看网页 -->
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>网页的标题</title>
</head>
<body><!--存储的是给用户看的内容-->
   网页的主体
</body>
</html>
```

## 5.常用换行标签 

**1.html中的注释 : `<!--注释内容-->`   快捷键 : (ctrl + /)**

**2.标题标签`<h1>`**
```html
1.标题标签，表示文档的标题，除了具有块元素基本特性外，还含有默认的外边距和字体大小.
2.标题标签只有<h1></h1>--<h6></h6>,h7标签书写时不报错,但不生效.
3.h1标签一个网页只能有一个,用来放网站的logo.
注意:<h4>的效果等同于<strong>
```

**3.段落标签`<p>`**
```html
1.表示文档中的一个文字段落，除了具有块元素基本特性外，还含有默认的外边距
2.每个浏览器的标签默认样式不一样.
```

**4.通用块容器标签`<div>`**
```
division
1.表示文档中一块内容，具有块元素基本特性，没有其他默认样式.
2.前端做布局（划分区域）常用的标签.
3.多用于标签嵌套,里面可以放任何内容，任何标签(可以放自己).
```

**5.通用内联容器标签`<span>`**

```html
1.具有内联元素基本特性,没有其他默认样式
2.主要用来存放特殊效果的文字,小图片
3.<span> 标签提供了一种将文本的一部分或者文档的一部分独立出来的方式。如果不对 <span> 应用样式，那么 <span> 元素中的文本与其他文本不会任何视觉上的差异
```

**6.换行标签`<br>`**

```html
<!-- 空白折叠现象 -->
注意:多个空格,和一个空格和换行都是一个空格
```

**7.分隔标签<hr>**

```html
 
```

## 6.常用不换行标签

**1.常用的内联元素标签**
```html
<!--无强调语意标签-->
    <b>加粗</b>
    <i>倾斜</i>
    <u>下划线</u>
    <s>删除线</s>
<!--有强调语意标签,存放搜索引擎可以优先抓取的关键字-->
    <strong>加粗</strong>
    <em>倾斜</em>
    <ins>下划线</ins>
    <del>删除线</del>
```

**2.分析是否需要有开始结束位置,判断是单标记标签还是双标记标签**

## 7.图片

**1.图片标签 `<img>`**
```html
1.在网页中插入图片，具有内联元素基本特性，但是它支持宽高设置
2.html属性表现为键值对形式(key=“value”),一个标签可以添加多个属性  各个属性之间用空格隔开.
3.alt属性作用:
    (1)替换文本，当图片无法显示的时候显示alt里面的文字.
    (2)支持盲人读屏软件.
4.title：提示文本：
    (1)提示用户图片的作用.
    (2)推广关键字常用.
<img src="picture/1.jpg",alt="图片无法显示的时候显示的文字" width="304" height="228">
```

## 8.超链接

```html
1.链接到另外一个网页，具有内联元素基本特性，默认文字蓝色，有下划线,鼠标划过时变形.
2.跳转到网站时必须添加网络传输协议(http:\\ 或者 https:\\).
3.可跳转到互联网,也可跳转到本地.
4.点击时打开新的窗口:在原来的<a>标签基础上添加target="_blank"属性默认是_self.
5.假连接:如果项目初期没有跳转目标网址可以用"#"占位,项目上线前需用真实网址替换.
6.<a>标签内科嵌套<img>标签
```

```html
<!-- a标签的基本应用 -->
    <a href="https:www.baidu.com"  title="点击一下了解更多" target="_blank"><img src="picture/1.jpg",alt="图片无法显示的时候显示的文字" width="304" height="228"></a>
<!-- a标签的锚点定位 -->
<a href="#top"></a>
<!-- 发送邮件 -->
<a href="mailto:xiaopawnye@163.com">联系我们</a>
```



## 9.体验布局 

```
标签在网页中会显示成一个个的方块，
先按照行的方式，把网页划分成多个行，
再到行里面划分列,也就是在表示行的标签中再嵌套标签来表示列,
整体按照先整体,后局部,先大后小的顺序来书写结构
```

## 10.路径  

**1.相对地址:**

```
"./"表示当前文件所在的目录下
"../"表示当前文件所在目录下的上一级目录
```

**2.绝对地址:**

```
1.相对于磁盘的位置去定位文件的地址.
2.绝对地址在整体文件迁移时会因为磁盘和顶层目录的改变而找不到文件，相对地址就没有这个问题.
```

**3.注意事项: 在前端范围内,绝对路径是不允许使用的**

## 11.列表  

**1.无序列表标签:(新闻标题,文章标题,菜单等)**

```html
<ul><!--整体结构的大标签unordered list-->
    <li>列表标题一</li><!--代表某一项的小标签-->
    <li>列表标题二</li>
    <li>列表标题三</li>
</ul>
```

**2.查看页面结构**

```
右键->检查
```

**3.创建列表标签快捷方式**

```html
<!-- ul>(li>a{列表文字})*3  ordered list-->
    <ul class="list">
         <li><a href="#">列表文字</a></li>
         <li><a href="#">列表文字</a></li>
         <li><a href="#">列表文字</a></li>
     </ul>
```

**4.去掉列表前面的小圆点**

```
list-style:none;
```

**5.有序列表(了解):自动生成列表序号**

```html
<ol><!--整体结构的大标签-->
    <li>列表标题一</li><!--代表某一项的小标签-->
    <li>列表标题二</li>
    <li>列表标题三</li>
</ol>
```

**6.定义列表(了解):**

```html
    <dl><!--dl是整体标签-->
        <dt>标题</dt><!--项目标题definition title-->
        <dd>描述信息</dd><!--项目的描述信息 definition description-->
    </dl>
```

**7.工作经验:一般情况下,网站的导航部分用`<ul>`列表标签书写**

## 12.表格

**1.自2005年开始,网站改版,从表格布局修改为div布局**

```
表格布局:浏览器当整个表格读取完显示页面.
div布局:读取一行显示一行.
```

**2.表格的结构**

```html
   <table border="1" cellspacing="0">
       <caption>商品清单</caption>
       <tr>
        <th>产品名称</th>
        <th>品牌</th>
        <th colspan="2">数量和入库时间</th>
       </tr>
       <tr>
        <td>电脑</td>
        <td rowspan="2">小米</td>
        <td>200</td>
        <td>2019-09</td>
       </tr>
       <tr>
        <td>电视机</td>
        <td>200</td>
        <td>2019-09</td>
       </tr>
       <tr>
        <td>电视机</td>
        <td>海尔</td>
        <td>200</td>
        <td>2019-09</td>
       </tr>
   </table>
```

**3.table 添加border属性可以添加边框(只能修改粗细),css也可以添加边框(添加边框样式种类更多)**

```css
table{
        /* border:粗细 颜色 线条种类;  border是一个key对应多个v，各个v之间用空格隔开，border的值不分先后顺序 */
        border: 1px red solid;  /* solid是 实线 */
        /* 合并表格边框线 */
        /* border-collapse: collapse; */
    }
```

**4.table 添加`cellspacing`和`cellpadding`属性**

```html
cellspacing:拉开单元格之间的距离
cellpadding :拉开内容和td边缘之间的距离
```

**5.td 添加`colspan`和`rowspan`合并单元格**

```html
colspan:水平合并单元格
rowspan:垂直合并单元格
```

## 13.表单

**1.`<form>`标签 定义整体的表单区域(登录,注册,搜索)**

```html
action属性 定义表单数据提交地址
method属性 定义表单提交的方式，一般有“get”方式和“post”方式
```

**2.`<label>`标签 为表单元素定义文字标注**

```html
单选框扩大触发区域:文字添加label标签，保证label标签的for属性值和input标签的id属性值完全相等
```

**3.`<input>`标签 定义通用的表单元素**

```html
type属性
    type="text" 定义单行文本输入框
    type="password" 定义密码输入框 <!--可隐藏输入框中的内容-->
    type="radio" 定义单选框  <!--必须将name属性名称定义成同名才具有单选特性-->
value属性 定义表单元素的值
name属性 定义表单元素的名称，此名称是提交数据时的键名
```

**4.设置input框的提示文字,用placeholder属性**

```html
例:<input type="text" class="input_txt" placeholder="请输入搜索内容"> 只适用于html5.0

在html5.0之前用value加上JavaScript写占位文字.
```

**5.单款/复选框默认选择: 添加属性checked = "checked"(键值相等可省略值)**

```html
<form action="https://www.baidu.com" method="POST">
        <p><label for="username">用户名:</label><input type="text" id="username" placeholder="请输入用户名"></p>
        <p><label for="pwd">密码:</label><input type="password" id="pwd" placeholder="请输入密码"></p>
        <p>男:<input type="radio" name="sex" checked="checked"> 女:<input type="radio" name="sex"></p>
        <p>购买的课程: web前端<input type="checkbox" checked="checked">后台开发<input type="checkbox" ></p>
        
        <p>
            <select name="class">
                <option>HTML</option>
                <option selected="selected">CSS</option>
                <option>JavaScript</option>
            </select>
        </p>
        <p>
            <h3>个人描述:</h3>
            <textarea rows="10" clos="50"></textarea>
        </p>
        <p>
            <input type="submit" value="立即注册" >
            <input type="reset" value="重置">
            <button>按钮</button>
        </p>
 <!--lable标签的作用:for属性与input标签中的id属性相关联从而实现表格框的高亮-->
```

**6.`<input>`标签(补充)**

```html
type属性
    type="checkbox" 定义复选框
    type="file" 定义上传文件
    type="submit" 定义提交按钮 <!--value属性可以设置按钮文本-->
    type="reset" 定义重置按钮 <!--清空所有表单内容-->
    type="button" 定义一个普通按钮 <!--可以绑定功能-->
value属性 定义表单元素的值
name属性 定义表单元素的名称，此名称是提交数据时的键名
```

**7.提交按钮的提交方式**

```html
使用get方法进行提交的时候,提交时会将数据拼接到URL后边拼接方式为:
URL + ? + name : value & name : value ......
注: 有文本输入时value为输入的内容,没有文本输入时,value属性需要手动设置
```

```html
使用post方法进行提交的时候,会通过http报文的形式提交.
查找方式:右键->提交->Networking->FormData.
```

**8.`<textarea>`标签 定义多行文本输入框**

```css
textarea{
        resize: none;<!--取消拖拽放大-->
        /* 蓝色的框  焦点框 */
        outline: none;<!--取消焦点框-->
    }
```

**9.`<select>`标签 定义下拉表单元素**

**10`<option>`标签 与`<select>`标签配合，定义下拉表单元素中的选项**

```
给option添加selected属性时,可以将其设置为默认选择内容.
```

## 14.特殊符号

```
<!-- &nbsp;空格特殊符号 -->
```



## 15 小米官网和京东网站划分结构

1.顶部栏:

​	left顶部栏目:链接数目*10

​	right购物城 链接*1

​	right:用户操作 链接*3 a

2.导航栏:

​	left logo:图片链接 a+img

​	left :logo

​	lef:导航链接

​	right:导航搜索

3.内容区域

3.底部区域



