//--------------------------------nodejs给本地json文件添加内容开始
var fs = require('fs');
var params = {
    "id":5,
    "name":"郭坤测试数据"
}
function writeJson(params){
    fs.readFile('./json/yulu.json',function(err,data){
        if(err){ return console.error(err); }
        var person = data.toString('utf-8');
        person = JSON.parse(person);
        //params.id = person.data.length + 1;
        person.data.push(params);
        person.total = person.data.length;
        //console.log(person);
        var str = JSON.stringify(person);
        fs.writeFile('./json/yulu.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log('----------新增成功-------------');
        })
    })
}
writeJson(params)
//--------------------------------nodejs给本地json文件添加内容结束


