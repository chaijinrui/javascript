window.onload = function () {

    // 通过修改top值来实现移动
    var wugui = document.getElementById("img1")
    var tuzi = document.getElementById("img2");
    console.log(wugui.innerHTML)

    // window.getComputedStyle是获取对象的css属性的值
    // getPropertyValue 返回某个属性的值
    var wugui_left_string = getComputedStyle(wugui, null).getPropertyValue("left")
    // 使用正则表达式 将字符串100px转为数字100
    // 用parseInt 将string转换为int
    let wugui_left = parseInt(wugui_left_string.match(/\d+(\.\d+)?/g))
    // alert(wugui_left + 10)


    // 获取对象css的top值
    var wugui_top_string = getComputedStyle(wugui, null).getPropertyValue("top");
    var wugui_top = parseInt(wugui_top_string.match(/\d+(\.\d+)?/g));


    // 让图片向上移动的代码
    var but1 = document.getElementById("but1");
    but1.onclick = function () {
        // 限定下范围
        if (wugui_top !== 0) {
            wugui_top -= 100
            // 把值赋给css属性
            wugui.style.top = wugui_top + "px"
            console.log(wugui.style.top)
        } else
            alert("不能再往上了")
    }


    // 让图片向左移动的代码
    var but2 = document.getElementById("but2");
    but2.onclick = function () {
        if (wugui_left !== 200) {
            wugui_left -= 100
            // 把值赋给css属性
            wugui.style.left = wugui_left + "px"
            console.log(wugui.style.left)
        } else
            alert("不能再往左了")
    }

    // 让图片向右移动的代码
    var but3 = document.getElementById("but3");
    but3.onclick = function () {
        // document.documentElement.clientWidth 网页可见域的宽度
        if (wugui_left <= document.documentElement.clientWidth) {
            wugui_left += 100
            // 把值赋给css属性
            wugui.style.left = wugui_left + "px"
            console.log(wugui.style.left)
        } else
            alert("不能再往右了")
    }

    // 让图片向下移动的代码
    var but4 = document.getElementById("but4");
    // alert("高度"+document.documentElement.clientHeight)
    but4.onclick = function () {
        // 限定下范围
        if (wugui_top < document.documentElement.clientHeight) {
            wugui_top += 100
            // 把值赋给css属性
            wugui.style.top = wugui_top + "px"
            console.log(wugui.style.top)
        } else
            alert("不能再往下了")
    }

//     获取乌龟、兔子的长和宽，兔子为被覆盖的情况
//     覆盖的情况：
//     1.乌龟-兔子<兔子高 & 乌龟-兔子<兔子宽
//     2.兔子-乌龟<兔子高 & 兔子-乌龟<兔子宽
//     3.乌龟-兔子<兔子高 & 兔子-乌龟<兔子宽
//     4.兔子-乌龟<兔子高 & 乌龟-兔子<兔子宽
}