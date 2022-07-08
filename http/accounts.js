let accounts = [];

function getAllAccounts() {
    return accounts;
}

function getOneAccount(id) {
    for(let account of accounts) {
        if(account.id == id) {
            return account;
        }
    }
    return false;
}

function storeAccount(account) {
    accounts.push(account);
}

function updateAccount(id,newBalance) {
    console.log(id,newBalance);
    for(let account of accounts) {
        if(account.id == id) {
            account.balance += newBalance;
            return true;
        }
    }ioi
    return false;
}

function deleteAccount(id) {
    let found = false;
    for(let account of accounts) {
        if(account.id == id) {
            found = true;
        }
    }
    if(accounts.length>0 && found) {
        accounts = accounts.filter(account => account.id != id);
        return true;
    }
    return found;
}

module.exports = {getAllAccounts, getOneAccount,storeAccount,updateAccount,deleteAccount};