let payment=true;
let marks=90;

function Enroll(){
    console.log(`Enrolling...`);

    const promises=new Promise((resolve, reject) => {
        setTimeout(function(){
            if(payment){
                resolve();
            }else{
                reject(`payment failed`);
            }
        },2000)
    })
    return promises;
}

function Progress(){
    console.log(`progress...`);
    const promises=new Promise((resolve, reject) => {
        setTimeout(function(){
            if(marks>70){
                resolve();
            }else{
                console.log(`You could not get enough marks to get certificates`);
            }
        },2000)
    })
   return promises;
}
function getCertificate(){
    console.log(`Preparing certificate.......`);
    const promises=new Promise((resolve) => {
        setTimeout(function(){
            resolve(`congratulation  you got the certificate`);
        },2300)
    })
    return promises;
}

enroll()
.then(progress)
.then(getCertificate)
.then( (value) => {
    console.log(value);
})
.catch((err) => {
    console.log(err)
})