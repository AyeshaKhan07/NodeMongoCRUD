import * as database from "./database/index.js"
import { Comment } from "./modules/comment/model.js";
import readline from 'readline'

database.connectDB();

const readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

readInput.question(`Enter post id to create comments for: `, postId => {
    const comments = [
        { comment: 'Comment 1', post: postId },
        { comment: 'Comment 2', post: postId },
        { comment: 'Comment 3', post: postId },
        { comment: 'Comment 4', post: postId },
        { comment: 'Comment 5', post: postId },
        { comment: 'Comment 6', post: postId },
    ];
    try {
        for (const comment of comments) {
            Comment.create(comment);
            console.log(`Created Item ${comment.comment}`);
        }
    } catch (e) {
        console.error(e);
    }
    readInput.close()
})


