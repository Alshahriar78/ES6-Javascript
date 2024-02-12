function CalculationSum(...numbers){
    let sum=0;
    for(let i of numbers){
        sum+=i;
    }
    console.log(sum);
}
CalculationSum(1,2,3,4,5,6,7,8,9);//output 45


function CalculationSumWithManyArguments(a,b,...numbers){
    let sum=0+a+b;
    for(let i of numbers){
        sum+=i;
    }
    console.log(sum);
}
CalculationSumWithManyArguments(1,2,3,4,5,6,7,8,9);//output 45