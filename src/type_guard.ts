{
    // Type Guard usng Typeof and in
    type alphaNumeric= number | string

    const add  = ( param1: alphaNumeric , param2: alphaNumeric): alphaNumeric =>{
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2;

        }else{
            return param1.toString() + param2.toString()
        }
        
    }
    const res = add("2", "4")
    console.log(res);

    // in Guard
    type NormalUser= {
        name: string
    }
    type AdminUser={
        name: string;
        role: "admin"
    }

    const getUser=(user: NormalUser | AdminUser)=>{
        if("role" in user){
            console.log(`My Name is ${user.name} and My role is ${user.role}`);
        }else{

            console.log(user.name);


        }
    }

    const normalUser : NormalUser={
        name: 'Goribs User'

    }
    const adminUser : AdminUser={
        name: 'Akash',
        role: "admin"

    }

    getUser(normalUser)
    getUser(adminUser)
    


    // 
}