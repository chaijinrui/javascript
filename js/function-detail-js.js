// function f1() {
//     alert("first")
// }
// function f1(name) {
//     alert("second "+name)
// }
// f1()

function f1() {
    for (i = 0; i < arguments.length; i++) {
        console.log("argument=" + arguments[i])
        console.log("argument=", arguments[i])
    }
    alert("hi")
}

f1(10, 2, 2, 2)