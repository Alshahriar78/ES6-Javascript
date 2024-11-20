const payment=true;
const marks=90;

function enroll(){
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

function progress(){
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

async function course(){
  try {
      await enroll();
      await progress();
      const msg=await getCertificate();
      console.log(msg);
  }catch (e) {
      console.log(e);
  }

}

course();