function createImg() {
    // 1. 创建元素
    var htmlImageElement = document.createElement("img");
    htmlImageElement.src = "./img/1.png"
    htmlImageElement.width = 100
    // 2. 把元素挂到body上
    document.body.appendChild(htmlImageElement)
}