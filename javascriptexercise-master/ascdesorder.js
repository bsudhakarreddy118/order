function string_sort(str) {
    var i = 0, j;
    while (i < str.length) {
        j = i + 1;
        while (j < str.length) {
            if (str[j] < str[i]) {
                var temp = str[i];
                str[i] = str[j];
                str[j] = temp;
            }
            j++;
        }
        i++;
    }
}
var string = ["Suraj", "Sanjeev", "Rajnish", "Yash", "Ravi"];
string_sort(string);
console.log(string);


function stringk(str) {
    for(var i=0;i<str.length;i++) {
        for(var j=i+1;j<str.length;j++) {

            if (str[j] > str[i]) {

                var temp = str[i];

                str[i] = str[j];

                str[j] = temp;
            }
        }
    }
}
var string = ["Suraj", "Sanjeev", "Rajnish", "Yash", "Ravi"];
stringk(string);
console.log(string);

