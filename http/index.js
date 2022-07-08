const express = require("express");
const {getAllAccounts, getOneAccount,storeAccount,updateAccount,deleteAccount} = require("./accounts");
const account = require("./account");
const app = express();

app.use(express.json());

app.post('/account', (request,response)=> {
    try {
        const {id,name,age} = request.body;
        if(!id) throw new Error("Account must have an id, please provide id.");
        if(!name) throw new Error("Account must have an name, please provide name.");
        if(!age) throw new Error("Account must have an age, please provide age.");
        
        let newAccount = new account(id,name,age);

        storeAccount(newAccount);
        response.status(200).json({Message: "account created successfully"});
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.get('/account', (request,response) => {
    try {
        let result = getAllAccounts();
        if(!result) throw new Error("No accounts found.");
        response.status(200).json(result);
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.get('/account/:id', (request,response) => {
    try {
        let id = request.params.id;
        if(!id) throw new Error("Please provide id.");
        let result = getOneAccount(Number(id));
        if(!result) throw new Error("No account found.");
        response.status(200).json(result);
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.patch('/account',(request,response)=> {
    try {
        const {id, balance} = request.body;
        if(!id) throw new Error("Please provide id.");
        if(!balance) throw new Error("Please provide balance");
        let result = updateAccount(id,balance);
        if(!result) throw new Error("Account not found");
        response.status(200).json({Message: "Updated account balance"});
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.delete('/account',(request,response)=> {
    try {
        const {id} = request.body;
        if(!id) throw new Error("Please provide id.");
        let result = deleteAccount(id);
        if(!result) throw new Error("Account not found");
        response.status(200).json({Message: "Deleted account"});
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.listen(3020, () => {
    console.log("server running on port:"+3020);
});


