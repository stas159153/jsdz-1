let array = [1,2,3,4,5]
let array2 = [1, 2, 3, 4, 5,6,7,8,9,10]
let i = 0
while(i < 10){
  i++
  console.log(i)
}
for (let index = 0; index <= 20; index++) {
  if(index % 2 == 1){
    continue
  }
  else{console.log(index);}
  
}
for (let index = 0; index <= 10; index++) {
 console.log( 7 * index)
}
let n = -1
while(n < array.length){
n++ 
console.log(array[n])
}
for (let index = 0; index < array2.length; index++) {

  if(index == 7){
    break
  }
  else{
    console.log(array2[index])
  }
  let j = 0
}
function fsd(n){
  for (let index = 0; index <= 10; ++index) {
    console.log(index);
    if(index >= n){
       break; 
      }
  
  }
}
fsd(Math.floor(Math.random()* 9));