

// 第二种自定义方式
var person = {
    //多个属性、函数之间用 , 隔开
    name: "cjr",
    age: 10,
    say: function () {
        console.log(this.age + this.name)
    },
    sum: function (a, b) {
        return a + b
    }
};

//使用
console.log("外部=" + person.name + person.age)
console.log(person.name, person.age)
person.say()
console.log(person.sum(1, 2))