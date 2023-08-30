// 页面加载完成要执行的函数
window.onload = function () {
    var elementById = document.getElementById("form1");
    // 绑定onsubmit事件
    elementById.onsubmit = function () {
        if (elementById.name.value == "" || elementById.password.value == "" || elementById.centerpassword.value == "" || elementById.email.value == "") {
            alert("请补全信息")
            return false
        }
        // 这里运用反向思维：先写下正确情况，再取反
        if (!(elementById.name.value.length >= 4 && elementById.name.value.length <= 6)) {
            alert("用户名长度不正确")
            return false
        }
        if (elementById.password.value.length !== 6) {
            alert("密码长度不正确")
            return false
        }
        if (elementById.centerpassword.value!==elementById.password.value){
            alert("两次密码不一致")
        }
        if (elementById.centerpassword.value.length !== 6) {
            alert("确认密码长度不正确")
        }
        // 需要用正则表达式形容邮箱
        var emailPatt = /^[\w-]+@([a-zA-Z]+\.)+[a-zA-Z]+$/;
        if (!emailPatt.test(elementById.email.value)) {
            alert("电子邮件格式不正确~")
            return false;
        }
        return true
    }
}