{
    // Access Modifiers
    class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number

        constructor(id: number, name: string, balance: number){
            this.id=id;
            this.name= name;
            this._balance= balance
        }
// setter
        set deposite(amount : number){
            this._balance= this._balance +  amount;
        }



        // public addDeposite(amount : number){
        //     this._balance= this._balance + amount
        // }

        // public getBalance(){
        //     return this._balance
        // }
// getter
        get balance(){
            return this._balance
        }
    }

    class studentAccount extends  BankAccount{
        test(){
            this
        }
    }

    const personAccount= new BankAccount(111, 'Adeeb Mahtab', 50 )
    // personAccount.Deposite=0;
    // personAccount.addDeposite(20) // function call kore
    personAccount.deposite= 50
    // const myBalance= personAccount.getBalance()
    const myBalance = personAccount.balance
    console.log(myBalance);

}