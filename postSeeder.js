import * as database from "./database/index.js"
import { Post } from "./modules/post/model.js";
import readline from 'readline'

database.connectDB();

const readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

readInput.question(`Enter user id to create posts for: `, userId => {
    const posts = [
        { post: 'Post 1', user: userId },
        { post: 'Post 2', user: userId },
        { post: 'Post 3', user: userId },
        { post: 'Post 4', user: userId },
    ];
    try {
        for (const post of posts) {
            Post.create(post);
            console.log(`Created Item ${post.post}`);
        }
    } catch (e) {
        console.error(e);
    }
    readInput.close()
})


