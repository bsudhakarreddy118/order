/* * Consider the following object:
var myObj =
	[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
	{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
	{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
	{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
	{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
	{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

 - Display all objects with occupation as 'Programmer'
 - Sort the object based on age in descending order
 - Create a new array containing only names present in myObj
 - Recreate the above array of objects into the following object of objects :
	{ 'Team Leader' : [{'name':_____________, 'age':__________},{}],
	'<anotheroccupation>': [{'name':______________, 'age':________},{}]} */
    var myObj =
	[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
	{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
	{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
	{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
	{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
	{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
//1 Display all objects with occupation as 'Programmer'
myObj.forEach(ele=>ele.occupation==="Programmer"?console.log(ele):null);
//2 Sort the object based on age in descending order
myObj.sort((a,b)=>b.age-a.age);
console.log(myObj);
//3 Create a new array containing only names present in myObj
let arr=[]
myObj.forEach(ele=>arr.push(ele.name));
console.log(arr)
/* 4 Recreate the above array of objects into the following object of objects :
	{ 'Team Leader' : [{'name':_____________, 'age':__________},{}],
	'<anotheroccupation>': [{'name':______________, 'age':________},{}]} */
let newObj={}
myObj.forEach(ele=>{
    if(newObj[ele.occupation]===undefined){
        newObj[ele.occupation]=[]
        newObj[ele.occupation].push({name:ele.name,age:ele.age})
    }
    else{
        newObj[ele.occupation].push({name:ele.name,age:ele.age})
    }
})
console.log("----------------")
console.log(newObj);