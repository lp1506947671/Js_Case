$(function () {
// 加载本地数据
    function loadData() {
        //1.获取本地数据
        let data = localStorage.getItem("todo");
        //2.判断数据有无
        if (data) {
            return JSON.parse(data)
        } else {
            return [];
        }
    }

//1.查询数据
// "[{"title":"1111","done":true},{"title":"111","done":true}]"
    function load() {
        //    1.获取本地数据
        let data = loadData();
        //    2.定义四个变量
        let todoCount = 0, doneCount = 0, todoStr = '', doneStr = '';
        if (data.length > 0) {
            // 3.有数据:遍历数据
            data.forEach(function (item, index) {

                if (item.done) {
                    // 1.数据已完成
                    doneStr += `<li>
                         <input type="checkbox" index="${index}" checked='checked'>
                          <p id="${index}" index="${index}">${item.title}</p>
                           <a href="javascript:;">-</a>
                    </li>`;
                    doneCount++;
                } else {
                    // 2.数据正在进行的
                    todoStr += `<li>
                         <input type="checkbox" index="${index}">
                          <p id="${index}" index="${index}">${item.title}</p>
                           <a href="javascript:;">-</a>
                    </li>`;
                    todoCount++;
                }
            })


        }
        $('#todolist').html(todoStr);
        $('#donelist').html(doneStr);
        $('#todocount').html(todoCount);
        $('#donecount').html(doneCount);

    }


    //加载数据
    function saveData(data) {
        localStorage.setItem('todo', JSON.stringify(data))
    }

    //2.添加数据
    $("#title").keydown(function (event) {
        // 判断是否是enter(13)
        if (event.which === 13) {
            //2.1 获取输入框中的值
            let data = $(this).val();
            if (!data) {
                //为空弹出提示
                alert("数据不能为空")
            } else {
                // 不为空则加载数据,并且清除输入框的内容
                let localData = loadData();
                // 追加到data中,并在本地保存,
                localData.unshift({
                    title: data,
                    done: false
                });
                saveData(localData);
                load()
            }
        }

    });

    //3.删除操作
    $("#donelist").on("click", "a", function () {
        //获取到li在整个排序中的索引
        let i = parseInt($(this).attr("index"));
        //更新数据
        let data = loadData();
        data.splice(1, 1)
        saveData(data);
        load()
    });
    $("#todolist").on("click", "a", function () {
        //获取到li在整个排序中的索引
        let i = parseInt($(this).attr("index"));
        //更新数据
        let data = loadData();
        data.splice(1, 1)
        saveData(data);
        load()
    });
    //4.编辑数据
    $("#todolist").on("click", "p", function () {
        //判断当前p标签下是否有input标签
        if ($(this).children().length > 0) {
            return
        }
        //获取当前p标签的索引
        let i = $(this).attr("index");
        //获取p标签的内容
        let title = $(this).html();
        let inputId = `input-${i}`;
        //将获取到的内容与input组合插入到html中
        let insertHtml = `<input type="text" id=${inputId} value="${title}" />`;
        $(this).html(insertHtml);
        //获取到焦点
        let $input = $(`#${inputId}`);
        $input.focus();
        //选中
        //获取到input的输入内容
        let inputData = $input.val();
        //选中所有输入内容的长度
        $input[0].setSelectionRange(0, inputData.length)
        //失去焦点
        $input.blur(function () {
            if (inputData.length ===0){
                //判断输入的内容为空，则插入原有内容，且弹出输入内容不能为空
                $(this).html(title);
                alert("内容不能为空")
            }else{
                    //从当前失去焦点的input标签中获取内容
                    update(i,"title",$(this).val())
            }

                })

        //不为空，则在本地更新数据

    });

    //5.添加已完成的数据
    function update(i, key, value) {
        let data = loadData();
        let data_item = data.splice(i, 1)[0];
        data_item[key] = value;
        data.splice(i, 0, data_item);
        saveData(data);
        load();
    }

    $("#todolist").on("click", "input[type='checkbox']", function () {
        //获取到li在整个排序中的索引
        let i = parseInt($(this).attr("index"));
        //更新数据
        update(i, "done", true)
    });
    $("#donelist").on("click", "input[type='checkbox']", function () {
        //获取到li在整个排序中的索引
        let i = parseInt($(this).attr("index"));
        //更新数据
        update(i, "done", false)
    });

    load();


});
