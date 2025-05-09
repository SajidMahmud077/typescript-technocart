{
    // 
    interface Vehicle{
        startEngine(): void;
        stopEngine(): void;
        move(): void
    }
    class Car implements Vehicle{
        startEngine(): void {
            console.log('I am starting the car engine');
        }
        stopEngine(): void {
            console.log('i am stoping the car');
        }
        move(): void {
            console.log('I am moving the car');
        }
        test(): void{
            console.log('I am just testing');
        }
    }

    const bmw = new Car();
    bmw.startEngine();




    // 
    
}