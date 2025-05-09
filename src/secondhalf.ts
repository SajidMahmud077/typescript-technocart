{
    function fn(input: number | string | boolean | 'osthir'){
        if(typeof input === 'number'){
            console.log('narrow number', input * 2); 
        }else if(typeof input === 'string'){
            console.log(input.length);
        }else{
            console.log(1);
        }

    }



    type TUser={
        name: string,
        age : number

    }

    type TLearner={
        attitude: "Learning"
    }

    type combined= TUser & TLearner

    interface IUser {
        name: string,
        age: number
    }

    interface iLearner extends IUser{
        attitude: 'Learning'
    }

//interface object


    const learner : combined = {
        name: 'sajid',
        age: 21,
        attitude: 'Learning'

    }

    //Generic
    function identity <T>(value : T) : T[]{
        return [value];  
    }

    interface iYoulearn<T> extends IUser{
        attitude: T
    }
    const user23: iYoulearn<number> ={
        name: 'sam',
        age:22,
        attitude: 1

    }

    //constraints

    function getProperty<T, K extends keyof T>(obj : T, key: K): T[K]{
        return obj[key]
    }

    const name= getProperty(user23, 'age')
    // console.log(typeof name);

    //asynchronus Typescript
    async function fetchUser() : Promise<string> {
        return 'str'

    }

    fetchUser().then((user)=>{console.log(user);})

    const myPromise= new Promise ((resolve, reject)=>{
        const success = true;
        setTimeout(()=>{
            if(success){
                resolve('promise resolve')
            }else{
                reject('promise rejected')
            }

        },1000);

    });
    myPromise
    .then((res)=>{
        console.log(res);
    })
    .catch((error)=>{
        console.log(error);
    })




    type result<T>={
        [J in keyof T] : boolean
    }
    const resulType: result<iLearner>={
        name: true,
        age:true,
        attitude: true
    }
    





    }





    // try {
    //     console.log("error is make");
        
    // } catch (error) {
    //     console.log(error);
        
    // }






