const str : string = 'Next Level Web Development'
// string, number, boolean, array, object, undefined, null
// Non-Primitive= array, object
let num : number = 10
let arr : number[] = [3,4,6]

    export type Tobj = {
    name: string,
    age : number,
    address: string,
    education?:{
        institute: 'university' | 'college' | ' diploma' | 'school',
        educationLevel: string
    }
}

const obj : Tobj ={
    name:'ajib',
    age: 32,
    address: 'sylhet',
    education: {
        institute: 'university',
        educationLevel: 'Undergraduate'
    }
}
