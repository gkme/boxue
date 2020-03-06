/*****************************************************************
                  jQuery Validate扩展验证方法  (linjq)       
*****************************************************************/
$(function(){
    // 判断整数value是否等于0 
    jQuery.validator.addMethod("isIntEqZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value==0;       
    }, $.i18n.prop("jqvalidate.isIntEqZero")); 
      
    // 判断整数value是否大于0,此方法有问题，谨慎使用可以输入数字后面跟字母
    jQuery.validator.addMethod("isIntGtZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value>0;       
    }, $.i18n.prop("jqvalidate.isIntGtZero")); 
      
    // 判断整数value是否大于或等于0
    jQuery.validator.addMethod("isIntGteZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value>=0;       
    }, $.i18n.prop("jqvalidate.isIntGteZero"));   
    
    // 判断整数value是否不等于0 
    jQuery.validator.addMethod("isIntNEqZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value!=0;       
    }, $.i18n.prop("jqvalidate.isIntNEqZero"));  
    
    // 判断整数value是否小于0 
    jQuery.validator.addMethod("isIntLtZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value<0;       
    }, $.i18n.prop("jqvalidate.isIntLtZero"));  
    
    // 判断整数value是否小于或等于0 
    jQuery.validator.addMethod("isIntLteZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value<=0;       
    }, $.i18n.prop("jqvalidate.isIntLteZero"));  
    
    // 判断浮点数value是否等于0 
    jQuery.validator.addMethod("isFloatEqZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value==0;       
    }, $.i18n.prop("jqvalidate.isFloatEqZero")); 
      
    // 判断浮点数value是否大于0
    jQuery.validator.addMethod("isFloatGtZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value>0;       
    }, $.i18n.prop("jqvalidate.isFloatGtZero")); 
      
    // 判断浮点数value是否大于或等于0
    jQuery.validator.addMethod("isFloatGteZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value>=0;       
    }, $.i18n.prop("jqvalidate.isFloatGteZero"));   
    
    // 判断浮点数value是否不等于0 
    jQuery.validator.addMethod("isFloatNEqZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value!=0;       
    }, $.i18n.prop("jqvalidate.isFloatNEqZero"));  
    
    // 判断浮点数value是否小于0 
    jQuery.validator.addMethod("isFloatLtZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value<0;       
    }, $.i18n.prop("jqvalidate.isFloatLtZero"));  
    
    // 判断浮点数value是否小于或等于0 
    jQuery.validator.addMethod("isFloatLteZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value<=0;       
    }, $.i18n.prop("jqvalidate.isFloatLteZero"));  
    
    // 判断浮点型  
    jQuery.validator.addMethod("isFloat", function(value, element) {       
         return this.optional(element) || /^[-\+]?\d+(\.\d+)?$/.test(value);       
    }, $.i18n.prop("jqvalidate.isFloat")); 
     
    // 匹配integer
    jQuery.validator.addMethod("isInteger", function(value, element) {       
         return this.optional(element) || (/^[-\+]?\d+$/.test(value) && parseInt(value)>=0);       
    }, $.i18n.prop("jqvalidate.isInteger"));  
     
    // 判断数值类型，包括整数和浮点数 
    jQuery.validator.addMethod("isNumber", function(value, element) {       
         return this.optional(element) || /^[-\+]?\d+$/.test(value) || /^[-\+]?\d+(\.\d+)?$/.test(value);       
    }, $.i18n.prop("jqvalidate.isNumber"));  
    
    // 只能输入[0-9]数字
    jQuery.validator.addMethod("isDigits", function(value, element) {       
         return this.optional(element) || /^\d+$/.test(value);       
    }, $.i18n.prop("jqvalidate.isDigits"));  
    // 不能为0
    jQuery.validator.addMethod("isNot0", function(value, element) {       
    	return this.optional(element) || !(/^0$/.test(value));       
    }, "不能为0");  
    
    // 判断中文字符 
    jQuery.validator.addMethod("isChinese", function(value, element) {       
         return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);       
    }, $.i18n.prop("jqvalidate.isChinese"));   
 
    // 判断英文字符 
    jQuery.validator.addMethod("isEnglish", function(value, element) {       
         return this.optional(element) || /^[A-Za-z]+$/.test(value);       
    }, $.i18n.prop("jqvalidate.isEnglish"));   
 
     // 手机号码验证    
    jQuery.validator.addMethod("isMobile", function(value, element) {    
      var length = value.length;    
      return this.optional(element) || (length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value));    
    }, $.i18n.prop("jqvalidate.isMobile"));

    // 电话号码验证    
    jQuery.validator.addMethod("isPhone", function(value, element) {    
      var tel = /^(\d{3,4}-?)?\d{7,9}$/g;    
      return this.optional(element) || (tel.test(value));    
    }, $.i18n.prop("jqvalidate.isPhone"));

    // 联系电话(手机/电话皆可)验证   
    /*jQuery.validator.addMethod("isTel", function(value,element) {   
        var length = value.length;   
        var mobile = /^[+-\d]+$/;   
        return this.optional(element) || mobile.test(value);   
    }, $.i18n.prop("jqvalidate.isTel")); */
 
     // 匹配qq      
    jQuery.validator.addMethod("isQq", function(value, element) { 
         return this.optional(element) || /^[1-9]\d{4,12}$/.test(value);       
    }, $.i18n.prop("jqvalidate.isQq"));   
 
     // 邮政编码验证    
    jQuery.validator.addMethod("isZipCode", function(value, element) {    
      var zip = /^[0-9]{6}$/;    
      return this.optional(element) || (zip.test(value));    
    }, $.i18n.prop("jqvalidate.isZipCode"));  
    
    // 匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线。      
    jQuery.validator.addMethod("isPwd", function(value, element) {       
         return this.optional(element) || /^[a-zA-Z]\\w{6,12}$/.test(value);       
    }, $.i18n.prop("jqvalidate.isPwd"));  
    
    // 身份证号码验证
    jQuery.validator.addMethod("isIdCardNo", function(value, element) { 
      //var idCard = /^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/;   
      return this.optional(element) || isIdCardNo(value);    
    }, $.i18n.prop("jqvalidate.isIdCardNo")); 

    // IP地址验证   
    jQuery.validator.addMethod("ip", function(value, element) {    
      return this.optional(element) || /^(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.)(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.){2}([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))$/.test(value);    
    }, $.i18n.prop("jqvalidate.ip"));
   
    // 字符验证，只能包含中文、英文、数字、下划线等字符。    
    jQuery.validator.addMethod("stringCheck", function(value, element) {   
         return this.optional(element) || /^[a-zA-Z0-9\u4e00-\u9fa5-_]+[a-zA-Z0-9\u4e00-\u9fa5-_\s]*$/.test(value);       
    }, $.i18n.prop("jqvalidate.stringCheck"));   
    
    // 字符验证，只能包含中文、英文、数字、下划线、逗号、点等字符。    
    jQuery.validator.addMethod("stringCheckOne", function(value, element) {   
         return this.optional(element) || /^[a-zA-Z0-9\u4e00-\u9fa5-_]+[a-zA-Z0-9\u4e00-\u9fa5-_\,\.\s]*$/.test(value);       
    }, $.i18n.prop("jqvalidate.stringCheckOne")); 
    
    // 字符验证，只能包含中文、英文、数字、下划线等字符。    
    jQuery.validator.addMethod("stringCheck1", function(value, element) {   
         return this.optional(element) || /^[a-zA-Z0-9\u4e00-\u9fa5-_]+[a-zA-Z0-9\u4e00-\u9fa5-_\\s]*$/.test(value);       
    }, $.i18n.prop("jqvalidate.stringCheck1"));
    // 字符验证，只能包含段落的合法字符串。    
    //包括常用的中英文标点符号2016年1月13日11:03:39更新
    jQuery.validator.addMethod("stringCheck2", function(value, element) {   
         return this.optional(element) || /^[a-zA-Z0-9\u4e00-\u9fa5-_]+[a-zA-Z0-9\u4e00-\u9fa5-_\s(\。)(\，)(\.)(\,)(\！)(\!)(\、)(\;)(\；)]*$/.test(value);       
    }, $.i18n.prop("jqvalidate.stringCheck2"));
    //字符验证，允许中英文以及括号
    jQuery.validator.addMethod("stringCheck3", function(value, element) {   
         return this.optional(element) || /^[a-zA-Z0-9\u4e00-\u9fa5-_]+[a-zA-Z0-9\u4e00-\u9fa5-_\s(\。)(\，)(\.)(\,)(\！)(\!)(\、)(\;)(\；)(\()(\))(\（)(\）)]*$/.test(value);       
    }, $.i18n.prop("jqvalidate.stringCheck3"));
    // 匹配english  
    jQuery.validator.addMethod("isEnglish", function(value, element) {       
         return this.optional(element) || /^[A-Za-z]+$/.test(value);       
    }, $.i18n.prop("jqvalidate.isEnglish"));   
    //验证国际电话
    //1.如果存在'+'号，必须在第一位
    //2.如果存在 '(' ，必须存在  ')'
    //3.'-'可以存在任意位置，但不能是第一位和最后一位
    //4.可以存在空格
    //5.必须有数字
    //6.长度不限
    //7.出现其他符号不能通过验证
    jQuery.validator.addMethod("isInternational", function(value, element) {       
    	return this.optional(element) ||  /^\s*\+?\s*(\(\s*\d+\s*\)|\d+)(\s*-?\s*(\(\s*\d+\s*\)|\s*\d+\s*))*\s*$/.test(value);
    }, "请输入正确电话号码或传真"); 
    // 匹配汉字  
    jQuery.validator.addMethod("isChinese", function(value, element) {       
         return this.optional(element) || /^[\u4e00-\u9fa5]+$/.test(value);       
    }, $.i18n.prop("jqvalidate.isChinese"));   
    
    // 匹配中文(包括汉字和字符) 
    jQuery.validator.addMethod("isChineseChar", function(value, element) {       
         return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);       
    }, $.i18n.prop("jqvalidate.isChineseChar")); 
      
    // 判断是否为合法字符(a-zA-Z0-9-_)
    jQuery.validator.addMethod("isRightfulString", function(value, element) {   
         return this.optional(element) || /^[A-Za-z0-9_-]+$/.test(value);       
    },"请输入字母与数字的组合字符串");
    // 判断是否为合法字符(a-zA-Z0-9-_.)
    jQuery.validator.addMethod("isversion", function(value, element) {
         return this.optional(element) || /^[A-Za-z0-9\._-]+$/.test(value);       
    }, "只允许输入数字、字母、小数点和下划线");
    
    // 判断是否包含中英文特殊字符，除英文"-_"字符外
    jQuery.validator.addMethod("isContainsSpecialChar", function(value, element) {  
         var reg = RegExp(/[(\ )(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\|)(\{)(\})(\')(\:)(\;)(\')(',)(\[)(\])(\.)(\<)(\>)(\/)(\?)(\~)(\！)(\@)(\#)(\￥)(\%)(\…)(\&)(\*)(\（)(\）)(\—)(\+)(\|)(\{)(\})(\【)(\】)(\‘)(\；)(\：)(\”)(\“)(\’)(\。)(\，)(\、)(\？)]+/);   
         return this.optional(element) || !reg.test(value);       
    }, $.i18n.prop("jqvalidate.isContainsSpecialChar"));   
    // 是否是纯空格  
    jQuery.validator.addMethod("isPurespace", function(value, element) {       
         return this.optional(element) || /^\s+$/g.test(value);       
    }, $.i18n.prop("jqvalidate.isPurespace"));   
    
    // 是否是大于0带小数的数字
    jQuery.validator.addMethod("parnt", function(value, element) {       
         return this.optional(element) || /^[1-9]\d*(\.\d+)?$/.test(value);       
    }, $.i18n.prop("jqvalidate.parnt"));
    // 数字2位精度，小数点前21位后面2位
    jQuery.validator.addMethod("parntNumber", function(value, element) {       
         return this.optional(element) || /^[1-9]\d{0,20}(\.\d{0,2})?$/.test(value) || /^0(\.\d{0,2})?$/.test(value);       
    }, $.i18n.prop("jqvalidate.parntNumber"));
    //自定义验证数字格式   使用时传数组（小数点前param位['小数点前N位','小数点后M位']）
    var customNum = ""; 
    jQuery.validator.addMethod("parntNum", function(value, element, param) {
    	customNum = $.i18n.prop("jqvalidate.parntNumberBef") + param[0] + $.i18n.prop("jqvalidate.parntNumberAft") + param[1] + $.i18n.prop("jqvalidate.parntNumberEnd"); 
    	jQuery.validator.messages.parntNum = customNum; 
    	var reg = eval("/^[1-9]\\d{0,"+ (param[0]-1) +"}(\\.\\d{0,"+ param[1] +"})?$/");
    	var reg1 = eval("/^0(\\.\\d{0,"+ param[1] +"})?$/");
		return this.optional(element) || reg.test(value) || reg1.test(value);
	}, ""); 
    
    //匹配0-100
    jQuery.validator.addMethod("positive", function(value, element) { 
    	var falg = false;
    	if(parseFloat(value) <= 100 && parseFloat(value)>0 && value.indexOf(".") ==-1 && value.substring(1,1)!="0"){
    		falg = true;
    	}
        return this.optional(element) || falg;     
   }, "请输入1-100的正整数");
    //六位小数验证
    
    jQuery.validator.addMethod("parnt6", function(value, element) {  
   	 return this.optional(element) || /^[1-9]\d*(\.\d{1,6})?$/.test(value) || /^0\.\d{1,6}$/.test(value);       
   }, "最多可以输入六位小数");
    
    // 允许输入正整数或者带少于3位的小数末尾可以为0
    jQuery.validator.addMethod("parnt1", function(value, element) {  
    	 return this.optional(element) || /^[1-9]\d*(\.\d{1,3})?$/.test(value) || /^0\.\d{1,3}$/.test(value);       
    }, $.i18n.prop("jqvalidate.parnt1"));
    // 允许输入正整数或者带1位小数末尾不能为0
    jQuery.validator.addMethod("parnt2", function(value, element) {  
    	return this.optional(element) || /^[1-9]\d*(\.[1-9])?$/.test(value) || /^0\.[1-9]$/.test(value);
//    	return this.optional(element) || /^[1-9]\d*(\.\d*[1-9])?$/.test(value) || /^0\.\d*[1-9]$/.test(value);
    }, $.i18n.prop("jqvalidate.parnt2"));
    
    //验证字母汉字逗号
    // 字符验证，只能包含中文、英文、数字、下划线等字符。    
    jQuery.validator.addMethod("contractorCheck", function(value, element) {   
         return this.optional(element) || /^[^!@#$%^&*()-=+]+$/.test(value);       
    }, $.i18n.prop("jqvalidate.contractorCheck"));   
    //只允许输入字母数字下划线和减号验证所有编号
    jQuery.validator.addMethod("isCode", function(value, element) {   
        return this.optional(element) || /^[a-zA-Z0-9_-]{1,}$/.test(value);       
    }, $.i18n.prop("jqvalidate.isCode"));
    //textarea长度验证（每个回车长度为）
    var customError = ""; 
    jQuery.validator.addMethod("lengthCheck", function(value, element, param) { 
    	customError = $.i18n.prop("jqvalidate.lengthCheck")+ param + $.i18n.prop("jqvalidate.lengthCheck1"); 
    	jQuery.validator.messages.lengthCheck = customError; 
		return this.optional(element) || checkstrlength(value,param);
	}, customError); 
    jQuery.validator.addMethod("principalEmail", function(value, element) {    
   	 var tel = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
   	 return this.optional(element) || (tel.test(value));       
   }, "请输入正确格式的电子邮件"); 
});
//js替换字符串中空格为空格求长度
function checkstrlength(str,length){
	var str1 = str.replace(/\n/g,"&nbsp");
	var temp = str1.split("&nbsp");
	var newlength = 0;
	if(temp == null){
		newlength = str.length;
	}else{
		newlength = str.length+temp.length - 1;
	}
	var v = false;
	if(newlength <= length){ 
		v = true;
	}
	return v;
}