var obj = {
	"One":"1",
	"Two":"2",
	"Three":"3",
	"Four":"4"
	}
let newArr=[];
for (let ele in obj) {
    newArr.push(obj[ele])
}
console.log(newArr);
