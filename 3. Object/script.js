const user = {
    firstName: 'Kalle',
    lastName: 'Anka',
    age: 55,
    address: {
        street : 'en gata',
        nr : 123,
        city: 'Ankeborg'
    },
    phoneNumbers: [
        '35353-3535',
        '12125-3535'
    ],
    isActive: true
}

const user2 = {
    firstName: 'Kajsa',
    lastName: 'Anka',
    'age of': 40,
    address: {
        street : 'en gata',
        nr : 123,
        city: 'Ankeborg'
    },
    phoneNumbers: [
        '3989353-3535',
        '12109025-3535'
    ],
    isActive: false
}

let key = 'age of';

console.log(user);
console.log(user.firstName);
console.log(user['lastName']);
console.log(user2[key]);

user2.arr = [ 1,2,3,4];

console.log(`Användaren heter ${user.firstName} och bor i ${user.address.city}.`);


user.firstName = 'Jeanette';

console.log(user.firstName);

user.email = 'kalle.anka@lexicon.se';
console.log(user);


const { firstName, lastName, address: { city } } = user;

console.log(firstName);
console.log(lastName);
console.log(city);
