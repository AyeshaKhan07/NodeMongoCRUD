import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const postSchema = new Schema({
    post: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

export const Post = mongoose.model('Post', postSchema)