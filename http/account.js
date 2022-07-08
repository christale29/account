class Account {
    constructor(id, name, age, balance=0) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.balance = balance;
    }

    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    };

    
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    };

    
    setAge(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    };

    
    setBalance(balance) {
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    };
}

module.exports = Account;