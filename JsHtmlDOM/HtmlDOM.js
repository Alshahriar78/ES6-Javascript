let clickHandler = document.getElementById('demo');
clickHandler.addEventListener('click', function(){
    console.log('Button clicked');
    this.style.backgroundColor ='red';
    this.style.color = 'white';
})