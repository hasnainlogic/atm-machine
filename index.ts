#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 10000;
let myPin = 1234;

let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin"),
    }
]);

if (pinAns.pin===myPin){
    console.log(chalk.blue("pin is correct"));

    let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type:  "list",
        message: chalk.yellow ("select a operation"),
        choices: ["Withdraw Amount","Check Balance"]
    }
    ])

    if(operationAns.operation === "Withdraw Amount"){

        let withdrawAns = await inquirer.prompt([
            {
                name: "withdraw",
                type: "list",
                message: chalk.yellow("Select a withdraw method "),
                choices: ["Fast Cash","Enter Amount"]

            }
        ])

        if(withdrawAns.withdraw === "Fast Cash"){
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: chalk.yellow("Select a Amount"),
                    choices: [500,1000,2000,5000]
                }
            ])
            if(fastCashAns.fastCash > myBalance )
                {
                    console.log(chalk.red("Insufficient Balance!"))
                }
                
                else{
                    myBalance -= fastCashAns.fastCash;
                    console.log(`${fastCashAns.fastCash} Withdraw Successfully`);
                    console.log(`Your Remaining Balance is :${ myBalance} `);       }
        
        }

    else if(withdrawAns.withdraw === "Enter Amount"){

            let amountAns= await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: chalk.yellow("Enter your amount"),
                }
            ])
    
    
            if(amountAns.amount > myBalance){
                console.log(chalk.red("Insufficient Balance!"));
            }
    
            else{
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw Successfully`);
                console.log(`Your Remaining Balance is :${ myBalance} `);       }
    
                
        }


        
        
    }

   
    if(operationAns.operation === "Check Balance"){
        console.log(`Your balance is ${myBalance}`)
    }
}

    
  else{
        console.log(chalk.red("Incorrect pin code!"));
    }