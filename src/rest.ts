{
    type nickname = 'Good' | 'Better' | 'Best'
    const friend : nickname = 'Good' 

    type A = {Bondu : 'Upokari'}
    type B = {Shotru : number}
    type AB = A & B 

    const robot : AB ={
        Bondu: 'Upokari',
        Shotru: 2
    }

    if(true){
        console.log('first');
    }else{
        console.log('none');
    }
    let age;
    age = 21;

    const status = age >= 18 ? 'voter' : 'not eligible'
    if(typeof age == 'number'){
        type voter= number
    }

    type VoterType= typeof age extends number  ? number : string

    let nm : unknown = 'tanjim'
    
    console.log((<string>nm).length) 
    console.log((nm as string).length) 
    // console.log(status);
}

