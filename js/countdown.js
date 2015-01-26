
//chadly was here
var before = "Groundhog's Day!";
var current = "Today is Groundhog's Day!";
var montharray = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");


function countdown(yr,m,d){
    document.body.innerHTML = '';

var today=new Date()
var tdy=today.getYear()
var tdh = today.getHours();
var tdmin = today.getMinutes();
var tdsec = today.getSeconds();
if (tdy < 1000)
tdy+=1900
var tdmon=today.getMonth()
var tdd=today.getDate()
var todaystring=montharray[tdmon]+" "+tdd+", "+tdy+ " " + tdh + ":" + tdmin + ":" + tdsec;
var futurestring=montharray[m-1]+" "+d+", "+yr+", "+0 + ":" + 0 + ":" + 0;
var diffd=(Math.round((Date.parse(futurestring)-Date.parse(todaystring))/(24*60*60*1000))*1)
var diffh=(Math.round(((Date.parse(futurestring)-Date.parse(todaystring))% (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1))
var diffm=(Math.round((((Date.parse(futurestring)-Date.parse(todaystring))% (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1))
var diffs=(Math.round(((((Date.parse(futurestring)-Date.parse(todaystring))% (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1))

if (diffd<0&&(diffh-1)<0&&(diffm-1)<0&&diffs<1)
{
document.write(current)
clearInterval(t);
}
else if (diffs>0)
document.write("Only "+diffd+" days, "+(diffh-1)+" hours, "+(diffm-1)+" min, and "+diffs+" seconds till "+before)


}

//enter the count down date using the format year/month/day
var myVar=setInterval(function () {countdown(2015, 2, 2)}, 1000);
//countdown(2015, 2, 2);