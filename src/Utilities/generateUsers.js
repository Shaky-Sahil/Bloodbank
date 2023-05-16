import { faker } from '@faker-js/faker';

const generateUsers = () =>{
    const users = []
    Array.from({length:10}).map(()=>(
        users.push({
            name:faker.name.fullName(),
            email:faker.internet.email(),
            avatar:faker.internet.avatar(),
            mobile:faker.phone.number()
        })
    ))
    return users
}

export default generateUsers