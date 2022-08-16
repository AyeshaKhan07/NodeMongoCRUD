import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const user = new Schema({
    name: String,
    address: String,
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
})

export const User = mongoose.model('User', user)