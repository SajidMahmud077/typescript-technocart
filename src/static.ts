{
    // Static
    class Conuter{
        static  count : number = 0;
        static  incriment(){
        return  (Conuter.count = Conuter.count + 1)
        }
        static  decrement(){
            return (Conuter.count = Conuter.count - 1)
        }

    }
    const instance1 = new Conuter();
    console.log(Conuter.incriment());


    const instance2 = new Conuter()
    
    console.log(Conuter.incriment());


    // 
}