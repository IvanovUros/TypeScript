// const User = {
//     name: 'uros',
//     email: 'uros@gmail.com',
//     isActive: true,
// }

// function createUser({name: string, isPaid: boolean}) {}

// let newUser = {name: 'Uros', isPaid: false, email: 'Uros@gmail.com'}

// createUser({name: 'uros', isPaid: false})
// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return {name: 'reactjs', price: 399}
// }

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User) {
    return {name: "", email: "", isActive: true}
}

createUser({name: "", email: "", isActive: true})



export {}