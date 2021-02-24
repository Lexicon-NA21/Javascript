//"use strict"

// SCOPE

/* 
  global scope - accessbar överallt i koden

  local scope - accessbar inom det givna området, innanför ett kodblock {}

*/

document.body.innerText = 'Detta är en text';

// skriver ut i consolen
console.log('Här skriver vi ut någonting in konsolen');
console.warn('Detta är en varning!');
console.error('Detta är ett felmeddelande!');

let str = 'hej'; //globalt scope

console.log(str);


//afafafagfa; //Error koden avbryts

str = 3;
str = [];
str = {};


 var str = 'då';
console.log(str);


function tryIt() {
    glob = 54; //globalt scope använd "use strict"
    let x = 3.14; //localt scope
    console.log(x);
}
let c = 34;
c = 'Hej';
console.log(c);



// y = 9;

// let y;

// console.log(y);

tryIt();

window.namespace1 = {};
namespace1.x = 56;
namespace1.y = 'Hej hopp';
console.log(window.namespace1.x);
console.log(namespace1.y);

//Använd let eller const
//Deklarera variabler överst!
//"use strict"



//Example with scope
    
var i = 20;//global variable i


for (var i = 0; i < 4; i++)
  {​​​​​​​
    console.log(i);
  }​​​​​​​


console.log(i);
console.log("Not good to use var as it overrides other variables with same name");


var j = 50;//golbal variable j


for (let j = 0; j < 4; j++)
  {​​​​​​​
    console.log(j);//local variable j
  }​​​​​​​


console.log(j);//global variable j
console.log("Better use let & const when decalring variables");







