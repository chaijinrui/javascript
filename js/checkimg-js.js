function changeImg() {
    var elementById = document.getElementById(111);
    if (elementById.value === "查看多少只小猫，切换成小狗图片") {
        // 1. 得到所有的img
        // getElementsByTagName属性获得
        var elementsByTagName = document.getElementsByTagName("img");
        alert("猫的数量=" + (elementsByTagName.length))

//     2. 修改src
        for (var i = 0; i < elementsByTagName.length; i++) {
            elementsByTagName[i].src = "./img/" + (i + 4) + ".png"
            console.log("jixu")
        }
        console.log("jixu!!!!!!!")
        elementById.value = "查看多少只小狗，切换成小猫图片"
        console.log("jixu!!!!!!!")
    }

    else {
        var elementsByTagName = document.getElementsByTagName("img");
//     2. 修改src
        for (var i = 0; i < elementsByTagName.length; i++) {
            elementsByTagName[i].src = "./img/" + (i + 1) + ".png"
        }
        var elementById = document.getElementById(111);
        elementById.value = "查看多少只小猫，切换成小狗图片"
    }

//     else
//     var elementsByTagName = document.getElementsByTagName("img");
// //     2. 修改src
//     for (var i = 0; i < elementsByTagName.length; i++) {
//         elementsByTagName[i].src = "./img/" + (i + 1) + ".png"
//     }
//     var elementById = document.getElementById(111);
//     elementById.value = "查看多少只小猫，切换成小狗图片"
}






