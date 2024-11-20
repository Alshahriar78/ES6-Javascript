let name= new Set(['a','b','c','d']);

console.log(name);

name.add('e')
console.log(name);
let h=name.entries();
    for(const item of h){
        console.log(item);
    }

console.log((8).toString(2) & (1).toString(2));


    for(let i = 0; i < 5; i++){

        for(let j = 0; j < 5; j++){

                console.log('*');

        }
    }