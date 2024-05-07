import inquirer from "inquirer";
const calculator = await inquirer.prompt([
    {message: "Enter 1st Number: ", type: "number", name:"num1"},
    {message: "Enter 2nd Number: ", type: "number", name:"num2"},
    {message: "Choose the task: ", type: "list", name:"task", choices :["Addition", "Subtraction", "Multiplication", "Division"]}
]);
if(calculator.task == "Addition"){
    console.log(`Addition of ${calculator.num1} and ${calculator.num2} is ${calculator.num1 + calculator.num2}`);    
}
else if(calculator.task == "Subtraction"){
    console.log(`Subtraction of ${calculator.num2} from ${calculator.num1} is ${calculator.num1 - calculator.num2}`);    
}
else if(calculator.task == "Multiplication"){
    console.log(`Multiplication of ${calculator.num1} and ${calculator.num2} is ${calculator.num1*calculator.num2}`);    
}
else if(calculator.task == "Division"){
    console.log(`Division of ${calculator.num1} by ${calculator.num2} is ${calculator.num1/calculator.num2}`);    
}
else{
    console.log("first Assign task."); 
}