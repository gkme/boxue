var demoAnim1 = new countUp("project", 3137, 0, 1);
var demoAnim2 = new countUp("enterprise", 7044, 0, 1);
var demoAnim3 = new countUp("personnel", 461435, 0, 1);
var demoAnim4 = new countUp("record", 0, 0, 1);
//参数说明  id 要达到的数 从多少开始 几秒完成
$(function(){
    demoAnim1.start();
    demoAnim2.start();
    demoAnim3.start();
    demoAnim4.start();
})


