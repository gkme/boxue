$.validator.addMethod("phoneCheck", function(value, element, param){
     return new RegExp(/^1[34587]\d{9}$/).test(value);
     // return this.optional(element) || new RegExp(/^1[34587]\d{9}$/).test(value);
    }, "手机号码非法");

$.validator.addMethod("userCheck", function(value, element, param){
     return new RegExp(/^\w{6,12}$/).test(value);
    }, "用户名存在非法字符");