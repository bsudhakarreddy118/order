var student = [{
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 }];
    

function objectProperty(student){
    for(var i=0;i<student.length;i++){
        console.log(student[i].name+" "+student[i].sclass+' '+student[i].rollno);
    }
}

objectProperty(student);