

// 定义对象方式1
// 此刻person是一个空对象，没有自定义 函数和属性
var person = new Object()
// 增加一个属性 name
person.name = "cjr"
// 再增加一个属性 age
person.age = 10
//再增加一个函数
person.say = function () {
    alert(this.age + this.name)
}
person.say()

// 调用
//访问属性
console.log(person.age)
//访问函数
person.say()

//如果没有定义属性，直接使用，js语法不会报错，就会 变量提升（显示undefined）
// person.say = function () {
//     alert(this.age + this.name+this.class(这个属性会提示undefined))
//  }