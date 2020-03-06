$("#xiayunfei").on("click",function(){
    sendMessageToContentScript({cmd:'xiayunfei'});
})
$("#zhangdd").on("click",function(){
    sendMessageToContentScript({cmd:'zhangdd'});
})
$("#guangdaguoji").on("click",function(){
    sendMessageToContentScript({cmd:'guangdaguoji'});
})
$("#guangdahuanbao").on("click",function(){
    sendMessageToContentScript({cmd:'guangdahuanbao'});
})
function sendMessageToContentScript(message, callback){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, message);
    });
}