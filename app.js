function loadData(){
    console.log("Loading from server!");
};

function sayHelloToAPerson(name){
    console.log("Hi there, "+name);
};

function sum(num1, num2){
    let sum = num1+num2;
    return sum;
};

function testValidation() {
    let num = 9;

    if(num < 10) {
        console.log("Error, num to low");
        return;
    }

    console.log("Saved!");
}

function printSomeNumbers(){
    for(let i=1;i<=20;i++){
        if(i!=7 && i!=13){
            console.log(i);
        }
    }
}

function sumSomeNumbers(){
    let list = [12,32,12,456,12,87,345,56,3,7,5678,2,4587,243,09,234,-3,4567,-9,0];

    //console log every number
    for(let i=0;i<list.length;i++){
        let num = list[i];
    }
    let total = 0;  
    
    //sum all the numbers
    for(let c=0;c<list.length;c++){
        
        total = total + list[c];
    }

    //console log the result
    console.log(total);

    let pivot = list[0];

    //find the biggest number
    for(let i=0;i<list.length;i++){
        let num = list[i];
        
        if(num>pivot){
            pivot = num;
        }
    }

    console.log(pivot);
}

function init(){
    console.log("DOM Ready");
    //catch events
    
    //load previous data
    loadData();

    sayHelloToAPerson("Bob");
    sayHelloToAPerson("Jose");
    sayHelloToAPerson("Ivan");

    //make it work
    let res = sum(21, 21);
    console.log(res);

    //for loops
    printSomeNumbers(); //nums from 0 to 20

    sumSomeNumbers();
};

//when the browser finishes rendering all the html, do this
window.onload = init;