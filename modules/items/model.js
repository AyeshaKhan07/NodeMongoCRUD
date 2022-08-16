import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: String,
    body: String
})

export const Item = mongoose.model('Item', itemSchema)