{
    const user={
    name: 'sam',
    age: 32,
}

const user2={
    id: 1,
    ...user,
    addres: 'dhaka'
}
const {id, name, age}= user2 

const numbers: number[]= [1, 2, 3, 4, 5]
const numbers2 : number[]=[0,...numbers,6,7,8]
// rest

function restFn(...num: number[] ) : void{
    console.log(id, name, age)
}

restFn(1,2,3,4,5)

// console.log(numbers2[0]);
}