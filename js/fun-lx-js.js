function cal() {
    var sum = 0
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == "number") {
            sum += arguments[i]
        }
    }
    console.log(arguments)
    return sum
}

alert("总和为 " + cal(1, 2, "1", 3,4))