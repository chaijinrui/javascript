var f1 = function () {
    alert("hi")
}
console.log(typeof f1)
f1()

var f2 = function (name) {
    return name
}
alert("name=" + f2("niaho"))

var f3=f1
f3()

