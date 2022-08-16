import * as database from "./database/index.js"
import { User } from "./modules/user/model.js";

database.connectDB();

const users = [
    { name: 'User 1', address: 'abc' },
    { name: 'User 2', address: 'abc' },
    { name: 'User 3', address: 'abc' },
    { name: 'User 4', address: 'abc' },
    { name: 'User 5', address: 'abc' },
    { name: 'User 6', address: 'abc' },
    { name: 'User 7', address: 'abc' },
];

try {
    for (const user of users) {
        User.create(user);
        console.log(`Created Item ${user.name}`);
    }
} catch (e) {
    console.error(e);
}