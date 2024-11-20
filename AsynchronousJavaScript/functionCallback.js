let payment=true;
let marks=90;

function enroll(callback){
    console.log(`Enrolling...`);
    setTimeout(function(){
        if(payment){
            callback();
        }else{
            console.log(`payment failed`);
        }
    },2000)
}
function progress(callback){
    console.log(`progress...`);
    setTimeout(function(){
        if(marks>70){
            callback();
        }else{
            console.log(`You could not get enough marks to get certificates`);
        }
    },2000)
}
function getCertificate(){
    console.log(`Preparing certificate.......`);
    setTimeout(function(){
        console.log(`congratulation  you got the certificate`);
    },2300)
}

enroll(function(){
    progress(getCertificate)
})