const n = parseInt(prompt("Введите число"));
console.log(n);

let isSimple = true;
if (n < 2) {
  console.log("Числое непростое");
} else {
  for (let i = 2; i < n; i = i + 1) {
    console.log(i);    // 7
    if (n % i == 0) {    // 77 % 7 = 0; true
      isSimple = false;
      break;
    } 
  }
  // СЮДА
  if (isSimple) {
	  console.log("Числое простое");
  } else {
	  console.log("Числое не простое");
  }
} 
