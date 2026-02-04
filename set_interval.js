let a = 0;
let s = setInterval(() => { a++; console.log(`Hello ${a}`); if(a>=5){clearInterval(s)} } , 2000);

