//计算是否是24节气
function getjq(yyyy,mm,dd){//年月日
    mm = mm-1;
    var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758);
    var solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至");
    var tmp1 = new Date((31556925974.7*(yyyy-1900)+sTermInfo[mm*2+1]*60000)+Date.UTC(1900,0,6,2,5));
    var tmp2 = tmp1.getUTCDate();
    var solarTerms = "";
    if (tmp2==dd)
        solarTerms = solarTerm[mm*2+1];
    tmp1 = new Date((31556925974.7*(yyyy-1900)+sTermInfo[mm*2]*60000)+Date.UTC(1900,0,6,2,5));
    tmp2= tmp1.getUTCDate();
    if (tmp2==dd) 
        solarTerms = solarTerm[mm*2];
    return solarTerms;
}
console.log(getjq(2018,5,21));