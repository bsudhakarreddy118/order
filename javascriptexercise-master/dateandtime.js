var d=new Date();
console.log(FormDate(d));
function FormDate(pd){
    var date=pd.getDate();
    var month=pd.getMonth();
    month++;
    var year=pd.getFullYear();
    return date+"-"+month+"-"+year;
}