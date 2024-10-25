function createAccount(startPin, initialAmount = 0) {

    let currentPin = startPin;
    let balance = initialAmount;

    return {

        checkBalance: function (pin) {
            if (pin !== currentPin) return "Invalid PIN.";
            return `$${balance}`;
        },

        deposit: function (pin, amount) {
            if (pin !== currentPin) return "Invalid PIN.";
            balance += amount;
            return `Succesfully deposited $${amount}. Current balance: $${balance}.`;
        },

        withdraw: function (pin, amount) {
            if (pin !== currentPin) return "Invalid PIN.";
            if (amount > balance) return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
            balance -= amount;
            return `Succesfully withdrew $${amount}. Current balance: $${balance}.`;
        },

        changePin: function (oldPin, newPin) {
            if (oldPin !== currentPin) return "Invalid PIN.";
            currentPin = newPin;
            return `PIN successfully changed!`;
        }
    }

}

module.exports = { createAccount };
