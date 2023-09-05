window.onload = function () {
    // 测试切换被选项
    // var elementById2 = document.getElementById("btn07");
    // btn07.onclick=function () {
    //     var elementById = document.getElementById("ct");
    //     elementById.selected=true
    // }


    // 使用动态绑定
// 1. 完成第一个按钮的绑定
// 查找id=java节点
    var btn01 = document.getElementById("btn01");
    btn01.onclick = function () {
        var elementById = document.getElementById("java");
        alert(elementById.innerText)
    }


//2.1 查找所有option节点
// 通过tagname查找

    var btn02 = document.getElementById("btn02");
    btn02.onclick = function () {
        var elementsByTagName = document.getElementsByTagName("option");
        for (let i = 0; i < elementsByTagName.length; i++) {
            alert(elementsByTagName[i].innerText)
        }
    }


// 3 查找name=sport的节点
    var btn03 = document.getElementById("btn03")
    btn03.onclick = function () {
        var elementsByName = document.getElementsByName("sports");
        for (let i = 0; i < elementsByName.length; i++) {
            // 做一个筛选，只弹出被选中的
            if (elementsByName[i].checked) {
                alert(elementsByName[i].value)
            }
        }
    }


// 4. 查找id=language 下所有li节点

    var btn04 = document.getElementById("btn04");
    btn04.onclick = function () {
        var elementById = document.getElementById("language").getElementsByTagName("li")
        for (let i = 0; i < elementById.length; i++) {
            alert(elementById[i].innerText)
        }
    }


// 5. 返回id=sel01 的所有子节点
    var btn05 = document.getElementById("btn05");
    btn05.onclick = function () {
        var elementById = document.getElementById("sel01").children
        for (let i = 0; i < elementById.length; i++) {
            alert(elementById[i].innerText)
        }
    }


//6. 返回id=sel01 的第一个子节点
    var btn06 = document.getElementById("btn06");
    btn06.onclick = function () {
        var elementById = document.getElementById("sel01")
        // 下面两行代码可以体现出节点和元素的概念
        alert(elementById.firstChild)
        alert(elementById[0].innerText)
    }

// 7.返回id=java 的父节点的文本子节点
    var btn07 = document.getElementById("btn07");
    btn07.onclick = function () {
        var elementById1 = document.getElementById("java");
        var childNodes = elementById1.parentNode.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            if (childNodes[i].innerText !== undefined)
                alert(childNodes[i].innerHTML)
        }
    }

    // 8.返回id=ct 的前后兄弟节点
    var btn08 = document.getElementById("btn08");
    btn08.onclick = function () {
        var elementById = document.getElementById("ct");
        alert(elementById.previousSibling.previousSibling.innerHTML)
        alert(elementById.nextSibling.nextSibling.innerHTML)
    }

    // 9. 读取id=ct 的 value 属性值
    var btn09 = document.getElementById("btn09");
    btn09.onclick = function () {
        var elementById = document.getElementById("ct");
        alert(elementById.value)
    }

//     10.设置#person的文本域
    var btn10 = document.getElementById("btn10");
    btn10.onclick = function () {
        var elementById = document.getElementById("text");
        elementById.innerText = "hhhhhhhhh"
    }
}




