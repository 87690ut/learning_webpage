console.log("Page is working");

// increment operator post & pre
var a = 10;
let aa = a++;

var b = 5;
let ab = ++b;
console.log(aa, ab);

//comparison operator
let fs = 10;
let sc = 15;
let fi = fs < sc;
console.log(fi);

// conditional statment

// if

let num = 50;
if (num >= 40 && num <= 55) {
  console.log("Mid range number");
}

// nested if-else
let n = 55;
if (n <= 20) {
  console.log("low range number");
} else if (n <= 56 && n >= 19) {
  console.log("number is smaller than 56");

  if (n >= 19) {
    console.log("Bigger than 19");
  }
} else {
  console.log("Big number greater than 55");
}

// switch statments
let sw = 2;
switch (sw) {
  case 1:
    console.log("a");
    break;
  case 2:
    console.log("b");
    break;
  case 3:
    console.log("c");
    break;

  default:
    console.log("nothing");
}

//for loop
let i = 0;
for (let nn = 1; nn <= 5; nn++) {
  i++;
  if (i == 4) {
    break; // this will break the code when it reachs on 4 & prints only 3 digits
  }

  if (nn == 2) {
    continue; // this will continue the code when it reachs on 2 it will skip 2 & prints next except 2 digits
  }

  console.log(i);
  console.log(nn);

  console.log("I am Learner");
}
