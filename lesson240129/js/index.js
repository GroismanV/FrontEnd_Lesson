class BankAccount {
    #balance;

    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.#balance = balance;
    }

    // getBalance(){
    //     return this.#balance > 0 ? this.#balance : `The balance is empty!`
    // }

    get balance() {
        return this.#balance > 0 ? this.#balance : `The balance is empty!`;
    }

    set balance(value) { // 1000 < 1500
        if (this.#balance < value) {
            this.#balance = value;
        } else {
            alert("You can only increase the balance!")
        }
    }

    deposit(amount) {
        amount = Number(amount);

        this.#balance += amount > 0 ? amount : 0;
    }

    withdraw(amount, accountNumber) {
        if (accountNumber === this.accountNumber) {
            if (amount <= this.#balance) {
                this.#balance -= amount;
            } else {
                alert("На балансе нет столько денег!")
            }
        } else {
            alert("Нет такого аккаунта!")
        }
    }
}

// let account = new BankAccount("123456", 1000);
// console.log(account.accountNumber, account.balance);

// account.balance = 0;
// console.log(account.getBalance());

// console.log(account.accountNumber, account.balance);
// console.log(account.#balance);

// account.balance = 0;
// console.log(account.balance);
// console.log(account.getBalance());
// console.log(account);

// account.balance = 0;
// console.log(account.balance);
// console.log(account);

// account.balance = 1001;
// console.log(account.balance);
// console.log(account);

// account.deposit(1000);
// account.deposit(5000);
// console.log(account.balance);

let form = document.querySelector(".form");
let accountController = {}, account = {}, initDeposit = 1000;

const handlerChangeInput = (event) => {
    if (event.target.closest(".form__input")) {
        accountController[event.target.name] = event.target.value;
    }
}

const updateBalanceElement = () => {
    document.querySelector(".balance").innerText = account.balance;
}

const handlerClickButton = (event) => {
    if (event.target.closest(".btn-create")) {
        let accountNumber = accountController?.accountNumber || String(Date.now())

        account = new BankAccount(accountNumber, initDeposit);

        accountController.accountNumber = "";
        // document.querySelector(".action__number").value = "";
        event.target.previousElementSibling.value = "";

        document.querySelector(".accountNumber").innerText = account.accountNumber;
        updateBalanceElement();

        document.querySelector(".form__content").classList.add("form__content--active");

        event.target.remove();
    }

    if (event.target.closest(".btn-deposit")) {
        let depositAmount = accountController?.deposit || 0;

        if (depositAmount === 0) alert("Вы ничего не положили на счет!");

        account.deposit(depositAmount);

        accountController.deposit = ""
        // document.querySelector(".action__deposit").value = ""
        event.target.previousElementSibling.value = "";
        updateBalanceElement();
    }

    if (event.target.closest(".btn-withdraw")) {
        let withdraw = accountController?.withdraw || 0,
            accountNumber = accountController.accountNumber;

        if (accountNumber && withdraw) {
            account.withdraw(withdraw, accountNumber);

            accountController.accountNumber = "";
            accountController.withdraw = "";

            document.querySelector(".action__number").value = "";
            event.target.previousElementSibling.value = "";

            updateBalanceElement();
        } else {
            console.log("Пустой номер аккаунта!");
        }
    }
}

form.addEventListener("keyup", handlerChangeInput);
form.addEventListener("click", handlerClickButton);