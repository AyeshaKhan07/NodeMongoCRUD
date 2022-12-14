import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: String,
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
})

export const Comment = mongoose.model('Comment', commentSchema)