console.log("hello world");

// console.log('1');
// console.log('2');
// console.log('3');
// setTimeout(() => {
//     console.log('4');
// }, 0);
// console.log('5');



// syncronous
// asyncronous

// promises async await
// api calling

// pending
// fulfilled
// rejected

// let settled = false
// const loansettlement = new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         if(settled){
//             resolve()
//         } else {
//             reject()
//         }
//     }, 5000);
// })

// // promise execute

// loansettlement
// .then(()=>{
//     console.log("paisa milgaya ha");
    
// })
// .catch(()=>{
//     console.log("paisa nahi milaa ha");

// })

function shaadiScnz(bankBalance){
    return new Promise((resolve,  reject)=>{
        setTimeout(() => {
            if(bankBalance > 5000000){
                resolve("shaadi Mubarak")
            } else {
                reject("Istekhara ma naa aya ha..")
            }
        }, 2000);
    })

}

const executePromise = async ()=>{
    try {
        const result = await shaadiScnz(200000)
        console.log(result);
    } catch (error) {
        console.error(error);
        
    }
    
}

executePromise()

// shaadiScnz(50000000)
// .then((res)=>{
//     console.log(res);
    
// }).catch((err) =>{
//     console.log(err);
    
// }).finally(()=>{
//     console.log("laazmi chalaiga");
    
// })





// try{
//     aler("hello world")

// } catch(error){
//     console.error(error);
    
// }

// console.log("console after alert");



















// settimeout
// setinterval
// promises
// then catch
// async await
// fetch
// axios
// advance