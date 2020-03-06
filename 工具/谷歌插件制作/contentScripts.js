function gotosuccess(id,names,mima,xiangmu,enterpriseId,regmSid,isProjectLogin,enterpriseFullCode,entFlag){
    localStorage.lastUserCode = names;
    $("#userCode").val(names);
    $("#password").val(mima);
    $("#enterpriseId").val(enterpriseId);
    $("#enterpriseName").val(xiangmu);
    $("#regmSid").val(regmSid);
    $("#isProjectLogin").val(isProjectLogin);
    $("#login_submit")[0].click();
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request);

    switch(request.cmd){
        case "xiayunfei":
            gotosuccess("#xiayunfei","xiayf","ebep@666","惠东垃圾发电项目","59e29d537d414538adfff71952ba93af","56274A72-B288-47ED-9034-CF69F80532E5",1);
            break;
        case "zhangdd":
            gotosuccess("#zhangdd","zhangdd","ebep@666","惠东垃圾发电项目","59e29d537d414538adfff71952ba93af","56274A72-B288-47ED-9034-CF69F80532E5",1);
            break;
        case "guangdaguoji":
            gotosuccess("#guangdaguoji","admin.gd","ebep@666","中国光大国际有限公司","56274A72-B288-47ED-9034-CF69F80532E5","56274A72-B288-47ED-9034-CF69F80532E5",0);
            break;
        case "guangdahuanbao":
            gotosuccess("#guangdahuanbao","admin.gd","ebep@666","光大环保（中国）有限公司","26BCEE04-2820-4D33-A100-448726879A69","56274A72-B288-47ED-9034-CF69F80532E5",0);
            
    }
    
});