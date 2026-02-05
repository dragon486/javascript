function BankAccount(){
    let balance =0;

    return{
        deposit: function(amount){
            balance += amount;
        },
        getBalance: function(){
            return balance;
        },

        withdraw: function(amount){
            if(amount > balance){
                console.log("Insufficient balance");
            } else{
                balance -= amount;
            }
        },

        resetbalance: function(){
            balance=0;
        }

    }
}
let myAccount = BankAccount();
myAccount.deposit(1000);
console.log("Balance after deposit: " + myAccount.getBalance());
myAccount.withdraw(500);
console.log("Balance after withdrawal: " + myAccount.getBalance());
myAccount.resetbalance();
console.log("Balance after reset: " + myAccount.getBalance());