//数据字典返回函数,若没查询到返回 undefined 
function dictionaryReturnValue(a,b){//数据字典  编号
    var len = a.length;
    var result = "";
    for(var i=0;i<len;i++){
        if(a[i].code == b){
            result = a[i].name;
            return result;
        }
    }
}

//数组快速排序代码
function quickSort(arr){//传入数组
    if(arr.length<=1){return arr;}
    var pivotIndex=Math.floor(arr.length/2);
    var pivot=arr.splice(pivotIndex,1)[0];
    var left=[];
    var right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<=pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}

//添加和移除事件监听
function addListener(element,e,fn){ 
    element.addEventListener?element.addEventListener(e,fn,false):element.attachEvent("on" + e,fn)
} 
function removeListener(element,e,fn){ 
    element.removeEventListener?element.removeEventListener(e,fn,false):element.detachEvent("on" + e,fn)
}

//<textarea  onkeydown="keySend(event);" placeholder="按ctrl+enter直接发送"></textarea>
function keySend(event) {
    if (event.ctrlKey && event.keyCode == 13) {
        console.log(getFormatCode($("textarea").val()));
    }
}
//保持textarea的换行问题
function getFormatCode(strValue){
    return strValue.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, ' ');
}

//jQuery实现textarea高度根据内容自适应  $("#txtaMain").txtaAutoHeight();
$.fn.extend({
   txtaAutoHeight: function () {
       return this.each(function () {
           var $this = $(this);
           if (!$this.attr('initAttrH')) {
               $this.attr('initAttrH', $this.outerHeight());
           }
           setAutoHeight(this).on('input', function () {
               setAutoHeight(this);
           });
       });
       function setAutoHeight(elem) {
           var $obj = $(elem);
           return $obj.css({ height: $obj.attr('initAttrH'), 'overflow-y': 'hidden' }).height(elem.scrollHeight);
       }
   }
});


//数组删除指定数--返回新的数组
function remove(arr,item){
    return arr.filter(function(ele){
         return ele != item;
    })
}

//字节转换kb m
function byteConversion(limit){
    var size = "";
    if(limit < 0.1 * 1024){                            //小于0.1KB，则转化成B
        size = limit.toFixed(2) + "B"
    }else if(limit < 0.1 * 1024 * 1024){            //小于0.1MB，则转化成KB
        size = (limit/1024).toFixed(2) + "KB"
    }else if(limit < 0.1 * 1024 * 1024 * 1024){        //小于0.1GB，则转化成MB
        size = (limit/(1024 * 1024)).toFixed(2) + "MB"
    }else{                                            //其他转化成GB
        size = (limit/(1024 * 1024 * 1024)).toFixed(2) + "GB"
    }

    var sizeStr = size + "";                        //转成字符串
    var index = sizeStr.indexOf(".");                    //获取小数点处的索引
    var dou = sizeStr.substr(index + 1 ,2)            //获取小数点后两位的值
    if(dou == "00"){                                //判断后两位是否为00，如果是则删除00                
        return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
    }
    return size;
}

//生成UUID
function S4(){
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}
function getuuid(){
    return (S4()+S4()+S4()+S4()+new Date().getTime());
}

//获取表单的对象数据   https://blog.csdn.net/qq_37144354/article/details/79922048
//JQuery("form").serialize();--序列化form表单 带name属性的内容为字符串
//JQuery("form").serializeArray();--返回JSON 对象数组
//JQuery("form").serializeObject();--返回对象
JQuery.prototype.serializeObject = function () {
    var a,o,h,i,e;
    a = this.serializeArray();
    o={};
    h=o.hasOwnProperty;
    for(i=0;i<a.length;i++){
        e=a[i];
        if(!h.call(o,e.name)){
            o[e.name]=e.value;
        }
    }
    return o;
}

//获取地址栏参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r!=null) return unescape(r[2]); return null; //返回参数值
}

//转换时间 dateFtt(1565059668200,"yyyy-MM-dd hh:mm:ss") dateFtt(1565059668200,"yyyy-MM-dd")
function dateFtt(date,fmt) {
    if(date != null && date != "" && date != undefined){
        if(typeof date == "string"){
            date = date.replace(/-/g,"/");
        }
        var date = new Date(date);
        var o = {
            "M+" : date.getMonth()+1,
            "d+" : date.getDate(),
            "h+" : date.getHours(),
            "m+" : date.getMinutes(), 
            "s+" : date.getSeconds(), 
            "q+" : Math.floor((date.getMonth()+3)/3), //季度
            "S" : date.getMilliseconds() //毫秒
        };
        if(o.S < 100){
            if(o.S < 10){
                o.S = "00"+o.S;
            }else{
                o.S = "0"+o.S;
            }
        }
        if(/(y+)/.test(fmt))
            fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    }else{
        fmt = "";
    }
    return fmt;
}
function getFormNumber(){return dateFtt(new Date(),"yyyyMMddhhmmssS")}//获取表单编号的函数

//判断是否是手机
function isMobile(){
    var ua = navigator.userAgent;
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
    isMobile = isIphone || isAndroid;
    if(isMobile) {
        return true;
    }else {
        return false;
    }
}

/*复制某一块内容的方法*/
$.fn.extend({
    jmcopy: function (option) {//复制内容
        var defaults = {text:""},arg = $.extend(true,{},defaults,option),copyID = "copy"+new Date().getTime();
        if(option === undefined || JSON.stringify(option) == "{}"){arg.text = $(this).html();}//没有传入参数或者传入空对象,直接去对应的调用对象的值
        if(arg.text){
            var newTextarea = '<textarea cols="20" rows="10" id="'+copyID+'" style="position: fixed;top:-2000px;" contentEditable="true">'+arg.text+'</textarea>';
            $(this).after(newTextarea);//$("body").append(newTextarea);
            $("#"+copyID)[0].select();
            document.execCommand("Copy");
            $("#"+copyID).remove();
            toastr.info(_platformUI.copysuccess+"&nbsp;&nbsp;<span style='color:red;'>" + arg.text + "</span>");//提示复制成功
        }else{toastr.info(_platformUI.copyisempty);}//复制内容为空
    }
});
//行内调用：<div onclick="$(this).jmcopy()">点击我内容自动复制到粘贴板</div>
/*
按钮或者其它元素触发的调用
$("#goCopy").on("click",function(){
    $("#htmlDiv").jmcopy({
        text:$("element").html()
    })
})*/

//判断数据类型(也可以判断dom)
function judgeDataType(data) {
    var toString = Object.prototype.toString;
    var dataType =
        data instanceof Element
            ? "element" // 为了统一DOM节点类型输出
            : toString
              .call(data)
              .replace(/\[object\s(.+)\]/, "$1")
              .toLowerCase();
              console.log(data,dataType);

    return dataType;
};
/*judgeDataType("a") // string
judgeDataType(1) // number
judgeDataType(window) // window
judgeDataType(document.querySelector("h1")) // element 不存在是null
judgeDataType(0) // number
judgeDataType(NaN) // number 
judgeDataType("") // string
judgeDataType(null) // null
judgeDataType(true) // boolean*/


//扁平化数组的方法
function ArrayFlat(items){
    return items.reduce((prev,current)=>{
        return prev.concat(current,
            Array.isArray(current.children) ? ArrayFlat(current.children) : []
        )
    },[])
}
/*ArrayFlat(datalist)*/
/*var datalist = [
    {
        name:"2",
        children:[
            {
                name:"2.1",
                children:[
                    {
                        name:"2.2",
                    }
                ]
            }       
        ]
    }
];*/


//sdf 
