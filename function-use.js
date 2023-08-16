// 定义没有返回值函数
function f1(){
    alert("f1被调用")
}
f1()

// 定义有返回值的函数，形参的类型是由实参决定的
function f2(name){
    alert(name)
}
f2("这是名字")

// 定义有形参和返回值的方法
function f3(age){
    return age
}
alert("我的年龄是"+f3(18))

