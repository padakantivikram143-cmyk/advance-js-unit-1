/* function abc() {
  console.log('Hello World');
}

function def() {
  console.log('Hello there');
}

console.log('The Start');
abc();
def();
console.log('The End');

setTimeout(() => {
  console.log('Delayed Start');
  abc();
  def();
  console.log('Delayed End');
}, 4000); */

/*   console.log('Im First');
setTimeout(() => {
  console.log('iam vicky');
}, 2000);
console.log('Im Last');  */ 

// Task 4
/*  setTimeout(() => {
    console.log('I am First');
}, 1000);

setTimeout(() => {
    console.log('I am Second');
}, 1500);

setTimeout(() => {
    console.log('I am Third');
}, 3500);

setTimeout(() => {
    console.log('I am just getting started with Adv. JS');
    setTimeout(() => {
        console.log('I am just getting started again.');
    }, 5000);
}, 2000); 

 */


//task5
/* console.log('Hello');
setTimeout(() => {console.log('User ID: 11 : User Name : John Doe, User Age: 25'), 5000, 11});
setTimeout(() => {console.log('iam first'), 1000});
setTimeout(() => {console.log('iam second'), 1500});
console.log('Script started');
 */

//task 6
/* setTimeout((id,id2)=>{console.log ("iam first", id)}, 1000, 99, 25);
 */


//task 7
/* console.log('HI');
for(var i=0; i=5; i++);
console.log(i);
setTimeout(() => {
  console.log('time out firing', i);
}, 5000); */


//task 8
/* setTimeout(() => {
    console.log('I am first');
}, 4000);

var sum = 0;
for(var i = 1; i<=4; i++){
   sum += i;
}
console.log(sum); */

//task 9
/* const arr = [10,20,30,40];

for(var i = 0; i<4; i++){
    setTimeout(()=>{
        console.log(arr[i-2]);
    }, 4000);
    
}

console.log(i); */

//task 10
/* console.log('1', new Date()); 
setTimeout(() => {
    console.log("I am First", new Date());
}, 0); 
console.log('11', new Date());
setTimeout(() => {
    console.log("I am Second", new Date());
}, 0);
console.log('111', new Date());
setTimeout(() => {
    console.log("I am Third", new Date());
}, 0);
setTimeout(() => {
   console.log("I am Just Getting Started with Adv. JS", new Date());
    setTimeout(() => {
       console.log("I am Just Getting Started again", new Date());
    }, 5000);
}, 2000); */

//task 11
/*  
for (var i = 0; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 4000);
}
 

for (let i = 0; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 4000);
} */