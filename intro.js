// javascript can change html content
document.getElementById('para').innerHTML="Hello I am Paragraph";
// javascript can change css element
document.getElementById('para').style.color='red';

// javascript can change html attributes
function On(){
    document.getElementById('img').src='./images/pic_bulbon.gif';
}
function Off(){
    document.getElementById('img').src='./images/pic_bulboff.gif';
}

