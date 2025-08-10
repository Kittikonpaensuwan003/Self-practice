//1. Create array with many data type
const a = [1,"d",3,4,5,6,7,"stwed",true]
//2. print array size
console.log("2 :" ,a.length)
//3. print the first item
console.log("3 :" ,a[0])
//4. print the last item
console.log("4 :" ,a[(a.length)-1])
//5.add two more at the end of array with object and array data type respectively
x.push(['ffe'])
console.log("5 :" , a )
//6. print every item in the array
for(let i = 0 ; i < a.length ; i++)
    console.log("6 :",a)
//7.
console.log("7 :" ,a.splice(3))
//8. apply spread on string 
let str =('Csharkwow')
const strCH = [...str]
console.log("8 :" ,strCH)
//9. create array with new constructor
const arr1 = new Array()
console.log("9.1 : ",arr1)
const arr2 = new Array(5)
console.log("9.2 : ",arr2)
const arr3 = new Array(1,2,3,4)
console.log("9.3 : ",arr3)
const arr4 = new Array(1,2,3,4)
console.log("9.4 : ",arr3)
const str2 = Array.from(str)
console.log("9.5 : ",str2)