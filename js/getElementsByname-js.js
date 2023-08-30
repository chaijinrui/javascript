// checked有个属性是 checked---表示选中
// 全选
function selectAll() {
    alert("全选")
    var elementsByName = document.getElementsByName("sport");
    for (var i = 0; i < elementsByName.length; i++) {
        elementsByName[i].checked = true
    }
}

//全不选
function unSelectAll() {
    alert("全不选")
    var elementsByName = document.getElementsByName("sport");
    for (var i = 0; i < elementsByName.length; i++) {
        elementsByName[i].checked = false
    }
}

//反选
function unSelect() {
    alert("反选")
    var elementsByName = document.getElementsByName("sport");
    for (var i = 0; i < elementsByName.length; i++) {
        // js的一种取反方式
        elementsByName[i].checked = !elementsByName[i].checked
    }
}