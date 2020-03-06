//获取是星期几
function getWeek(y,m,day){//年，月，日
    var d = new Date();
    d.setYear(y);
    d.setMonth(m-1);
    d.setDate(day);
    var weeks = ['周日','周一','周二','周三','周四','周五','周六'];
    return (weeks[d.getDay()]); 
}

//判断今天的年月日
var date = new Date();
var year = date.getYear()+1900;
var month = date.getMonth()+1;
var today = date.getDate();
$(".query-tit .date").html(today);//今天是几号
var todayWeek = getWeek(year,month,today);
$(".query-tit .week").html(todayWeek);//今天是周几
$(".query-tit .year-month").html(year+"年"+month+"月");
$(".year-month").attr("data-y",year);
$(".year-month").attr("data-m",month);
dateFun(1);

//点击当天号,或者周渲染当前月份
$(".query-time").click(function(){
    dateFun(1);
})

//点击左箭头进入上个月
$(".last-month .upper").click(function(){
    $(".upper").addClass('sel');
    $(".lower").removeClass('sel');
    dateFun("upper");
})

//点击右箭头进入下个月
$(".last-month .lower").click(function(){
    $(".lower").addClass('sel');
    $(".upper").removeClass('sel');
    dateFun("lower");
})

//哪一年哪一月有多少天的函数
function dayNum(y,m){//参数：年,月
    var  day = new Date(y,m,0);
    var daycount = day.getDate();
    return daycount;
}

//判断每个月第一天是星期几
function getOneWeek(year,month){//参数：年，月
    var d = new Date();
    d.setYear(year);
    d.setMonth(month-1);
    d.setDate(1);
    //获得周几
    var weeks = ['周日','周一','周二','周三','周四','周五','周六'];
    return weeks[d.getDay()];
}

//判断第一行有几个空格
function frontDay(week){
    var d = "";
    if(week == "周日"){
        d = 0;
    }else if(week == "周一"){
        d = 1;
    }else if(week == "周二"){
        d = 2;
    }else if(week == "周三"){
        d = 3;
    }else if(week == "周四"){
        d = 4;
    }else if(week == "周五"){
        d = 5;
    }else if(week == "周六"){
        d = 6;
    }
    return d;
}

//日期渲染函数
function dateFun(arrow){
    var y = Number($(".year-month").attr("data-y"));
    var m = Number($(".year-month").attr("data-m"));
    if(arrow == "upper"){
        if(m==1){
            m = 12;
            y-=1;
        }else{
            m-=1;
        }
    }
    if(arrow == "lower"){
        if(m==12){
            m = 1;
            y+=1;
        }else{
            m+=1;
        }
    }
    if(arrow == 1){
        y=year;
        m=month;
    }
    $(".year-month").attr("data-y",y);
    $(".year-month").attr("data-m",m);
    var y_m = y +"年" + m +"月";
    $(".year-month").html(y_m);
    var monthDayNum = dayNum(y,m);//记录这个月有多少天
    var oneDayWeek = getOneWeek(y,m);//判断每个月第一天是周几
    var emptyItem = frontDay(oneDayWeek);//需要渲染几个格子
    var lattice = emptyItem+monthDayNum;//需要渲染的格子数量
    var lineNum = "";//需要的渲染几行？
    if(lattice <= 28){
        lineNum = 4;
    }else if(lattice <= 35){
        lineNum = 5;
    }else{
        lineNum = 6;
    }
    //需要渲染的数据
    var html = "";
    var liheight = "";
    if(lineNum == 4){
        liheight = 30;
    }else if(lineNum == 5){
        liheight = 24;
    }else if(lineNum == 6){
        liheight = 20;
    }
    if(emptyItem == 0){
        for(var i=1;i<=monthDayNum;i++){
            html += '<li data-y="'+ y 
                 +'" data-m="'+ m 
                 +'" data-d="'+ i +'" style="height:'
                 + liheight +'px;line-height:'
                 + liheight +'px;">'
                 + i +'</li>';
        }
    }else{
        for(var i=0;i<emptyItem;i++){
            html += '<li style="visibility:hidden;height:'
                 + liheight +'px;line-height:'
                 + liheight +'px;">0</li>';
        }
        for(var i=1;i<=monthDayNum;i++){
            html += '<li data-y="'+ y 
                 +'" data-m="'+ m 
                 +'" data-d="'+ i +'" style="height:'
                 + liheight +'px;line-height:'
                 + liheight +'px;">'
                 + i +'</li>';
        }
    }
    $(".day-info").empty().append(html);
}
