let p1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("resolve work after 2 sec");
    },2000);
});

p1.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("promise 2 is working");
        },2000);
    });
    return p2;
}) 

.then((value) => {
    console.log("it is done");
    return 2;
})

.then((value) => {
    console.log("ok done now");
})

// implementing maggie making using promises

function Buymaggie(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("maggie bought");
            resolve();
        },2000);
    });
}

function MaggieGot(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("maggie got");
            resolve();
        },2000);
    });
}

function PrepareMaggie(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            console.log("preparring maggie");
            resolve();
        },2000);
    })
}

function EatMaggie(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("eating maggie");
            resolve();
        },2000);
    });
}

function MaggieEaten(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("maggie eaten");
            resolve();
        },2000);
    });
}

Buymaggie()
.then(MaggieGot)
.then(PrepareMaggie)
.then(EatMaggie)
.then(MaggieEaten);



function Downloadmovie(url){
    return new Promise((resolve,reject) => {
        let externalurl = url.split('/').pop().split('.').pop();
        if(externalurl != mp4){
            reject("this is not mp4 file");
        }else{
            setTimeout(() => {
                resolve(url.split('/').pop());
            },2000);
        }
    });
}

Downloadmovie("www.movie.com/abcd.mp4")
.then((value) => {
    console.log("movie downloaded "+ value);
})
.catch((error) => {
    console.log("error "+ error);
});