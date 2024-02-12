let saurov={
    height:"5feet 8inch",
    gendar:"Male",
    hair:"Black",
    physicalCondition:"Al Right",
    work(){
        console.log("Work  6 hour per day");
    },
    sleep(){
        console.log("Sleep  8 hour per day");
    },
    adress:{
        country:"Bngaladesh",
        city:"Bogra",
        union:"Mokamtola"
    },
    education:{
        ssc:{
            school:"BIAM Model school and college,Bogra",
            passedYear:2015,
            board:"Rajshahi"
        },
        hsc:{
            college:"Cambrian  college,Dhaka",
            passedYear:2017,
            board:"Dhaka"
        },
        bsc:{
            university:"North South University",
            passedYear:2022,
            major:"CSE"
        }
    }
}

console.log(saurov.education.bsc.university);

//for in loop in object

for(props in saurov){
    console.log(props+":"+saurov.props);
}

//Object Declaration
let person={
    name:"Al Shahoriar",
    age:27,
    IsStudent:true,
    city:{
        district:"Bogra",
        division:"Rajshahi",
        country:"Bangladesh"
    },
    education: {
        ssc: {
            passedYear: 2015,
            Institution: "BIAM Model School & College, Bogra",
            Board: "Rajshahi"
        },
        hsc: {
            passedYear: 2017,
            Institution: "Cambrian  College, Dhaka",
            Board: "Dhaka"
        },
        bsc: {
            passedYear: 2022,
            Institution: "North South University"

        },
    }
}
//Retrieve Data from Object
let personInfo=`My name is ${person.name}. 
I am form ${person.city.district},${person.city.division},${person.city.country}.
My last Institution is ${person.education.bsc.Institution}. 
`
console.log(personInfo);// Display Object Information

//Object Declaration
const person2={
    firstName:"Saurov",
    lastName:"Hossain",
    age:25,
    address:{
        city:"Dhaka",
        division:"Dhaka",
        country:"Bangladesh"
    },
    education:{
        ssc:{
            institution:"BIAM Model School & College,Bogra",
            cgpa:5.00,
            grade:"A+"
        },
        hsc:{
            institution:"BIAM Model School & College,Dhaka",
            cgpa:4.42,
            grade:"A"
        },
        bsc:{
            passedYear: 2022,
            institution: "North South University",
            cgpa:2.52

        }
    }


}
//Retrieve Data from Object
const personInfo2=`My name is ${person2.firstName} ${person2.lastName}.My age is ${person2.age}.
My present Address is ${person2.address.city} and My country is ${person2.address.country}.
I am passed  Secondary School Certificate from ${person2.education.ssc.institution}.
My grade is ${person2.education.ssc.grade}.
My cgpa is ${person2.education.ssc.cgpa}.
I am passed  Higher  School Certificate from ${person2.education.hsc.institution}.
My grade is ${person2.education.hsc.grade}.
My cgpa is ${person2.education.hsc.cgpa}.
My graduation Completed from ${person2.education.bsc.institution}.
My passed year is ${person2.education.bsc.passedYear}.
My cgpa is ${person2.education.bsc.cgpa}.`

console.log(personInfo2);// Display Object Information