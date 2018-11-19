let reg = {
    tel:/^[1][3,4,5,7,8][0-9]{9}$/,//验证手机号
    switchText:/(\d{3})\d{4}(\d{4})/, //转换为*
    mail:/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/,//判断是否为邮箱
    // switchMail://
}
export default reg