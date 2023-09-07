window.onload = function () {

    // 通过修改top值来实现移动
    var wugui = document.getElementById("img1")
    var tuzi = document.getElementById("img2");


    // 定义兔子的top和left
    var tuzi_top_string = getComputedStyle(tuzi, null).getPropertyValue("top")

    var tuzi_top = parseInt(tuzi_top_string.match(/\d+(\.\d+)?/g))
    var tuzi_left_string = getComputedStyle(tuzi, null).getPropertyValue("left")
    var tuzi_left = parseInt(tuzi_left_string.match(/\d+(\.\d+)?/g))


    // window.getComputedStyle是获取对象的css属性的值
    // getPropertyValue 返回某个属性的值
    var wugui_left_string = getComputedStyle(wugui, null).getPropertyValue("left")
    console.log(wugui_left_string)
    // 使用正则表达式 将字符串100px转为数字100
    // 用parseInt 将string转换为int
    let wugui_left = parseInt(wugui_left_string.match(/\d+(\.\d+)?/g))
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
            // console.log(wugui.style.top)
        } else
            alert("不能再往上了")
        move()
    }
    // 让图片向左移动的代码
    var but2 = document.getElementById("but2");
    but2.onclick = function () {
        if (wugui_left !== 200) {
            wugui_left -= 100
            // 把值赋给css属性
            wugui.style.left = wugui_left + "px"
            // console.log(wugui.style.left)
        } else
            alert("不能再往左了")
        move()
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
        move()
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
            // console.log(wugui.style.top)
        } else
            alert("不能再往下了")
        move()
    }

//     获取乌龟、兔子的长和宽；兔子不动乌龟动
    var wugui_length = 245
    var wugui_high = 236
    var tuzi_length = 327
    var tuzi_hith = 225


//思路：可能覆盖的情况如下：
//      乌龟在上：乌龟top-兔子top绝对值y小于乌龟high，yy的值
//     乌龟在下：乌龟top-兔子top绝对值y小于兔子high，yy的值
//      乌龟在左：乌龟left-兔子left绝对值x小于乌龟length，xx的值
//     乌龟在右：乌龟left-兔子left绝对值x小于兔子length，xx的值
//     一定覆盖的情况如下：
//     yy&&xx===1


    // 判断函数
    function move() {
        //     获取横、纵坐标的差的绝对值
        var y = Math.abs(wugui_top - tuzi_top);
        var x = Math.abs(wugui_left - tuzi_left);

        //     默认没有重叠
        var yy = 0
        var xx = 0

        // 乌龟在上和在下的情况
        if (wugui_top - tuzi_top < 0) {
            if (y < wugui_high) {
                yy = 1
            }
        } else {
            if (y < tuzi_hith)
                yy = 1
        }
//     乌龟在左和在右的情况
        if (wugui_left - tuzi_left < 0) {
            if (x < wugui_length) {
                xx = 1
            }
        } else {
            if (x < tuzi_length)
                xx = 1
        }

//     判断是否遮挡
        if (xx && yy) {
            alert("被挡住了")
        }
    }
}