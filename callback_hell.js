//write a program where you are making maggie using callback hell
//1. buy the maggie
//2.maggie got it
//3.start preparing maggie
//4.eating maggie
//5.maggie eaten
console.log("Buy the maggie");
setTimeout(() => {
    console.log("maggie got");
    setTimeout(() => {
        console.log("start preparing maggie");
        setTimeout(() => {
            console.log("eating maggie");
            setTimeout(() => {
                console.log("maggie eaten");
            },2000);
        },2000);
    },2000);
},2000);

//structural approach

function Buymaggie(){
    console.log("maggie bought");
    
}

