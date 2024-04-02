class BankAccount {
    constructor(accountNumber, ownerName, balance) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }
    deposit(amount) {
      this.balance += amount;
      console.log(`Amount $${amount} deposited into account ${this.accountNumber}.`);
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Amount $${amount} withdrawn from account ${this.accountNumber}.`);
      } else {
        console.log(`Insufficient balance in account ${this.accountNumber}.`);
      }
    }

    getBalance() {
        console.log(`Account ${this.accountNumber} \n Current balance: $${this.balance}`);
      }

      displayAccountInfo()
      {
        console.log(`Account Number:  ${this.accountNumber} \n Owner Name: ${this.ownerName} \n Current balance: $${this.balance}`);

      }
 
  
    
  }
  
 
  const account1 = new BankAccount('SB-001', 'Md. Wasim', 2000);
  const account2 = new BankAccount('SB-002', 'Md. Abdul Ahad', 300);
  
 
  account1.getBalance();

  account1.deposit(500); 
  account1.getBalance(); 
  
  account1.withdraw(200); 
  account1.getBalance();
  
  account1.displayAccountInfo();



  account2.getBalance();
    
  account2.withdraw(400); 
  account2.getBalance();
  
  account2.displayAccountInfo();
