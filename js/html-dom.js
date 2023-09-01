window.onload = function () {
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
            // 做一个筛选
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
// 7.返回id=java 的父节点
    var btn07 = document.getElementById("btn07");
    btn07.onclick = function () {
        console.log("没有绑定上")
        var elementById1 = document.getElementById("java");
        alert(elementById1.parentElement.innerText)
    }


}




