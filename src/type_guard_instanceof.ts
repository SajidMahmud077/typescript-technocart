{
    // type guard using instanceof

    class Animal {
        name: string;
        species: string

        constructor(name: string, species: string){
            this.name= name;
            this.species= species

        }

        makeSound(){
            console.log(" I am making sound");

        }
    }

    class Dog extends Animal{
        constructor( name: string, species: string){
            super(name, species)
        }
        makeBark(){
            console.log(" I am Barking");
        }
    }
    class Cat extends Animal{
        constructor( name: string, species: string){
            super(name, species)
        }
        makeMeaw(){
            console.log(" I am Meawaing");
        }
    }

    
    const dog= new Dog('German shepard', 'Barking')
    const cat= new Cat('Persian', 'Meawing')
    



    // 
}