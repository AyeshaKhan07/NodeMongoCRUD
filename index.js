import express from 'express';
import bodyParser from 'body-parser'
const app = express();
import * as database from "./database/index.js"
import { Item } from "./modules/items/model.js"
import { User } from "./modules/user/model.js"

database.connectDB();

app.use(bodyParser.json());

app.get('/api/users', async (req, res) => {
    console.log('/api/users')
    try {
        let users = await User.aggregate([
            {
                $lookup:
                {
                    from: "posts",
                    localField: "_id",
                    foreignField: "user",
                    pipeline: [
                        {
                            $lookup:
                            {
                                from: "comments",
                                localField: "_id",
                                foreignField: "post",
                                as: "comments"
                            }
                        }],
                    as: "posts"
                }
            }
        ]);
        res.send(apiResponse(users))
    }
    catch (error) {
        res.send(error)
    }
});

/**
 * Get Single Item
 *
 * @return response()
 */
app.get('/api/items/:id', async (req, res) => {
    try {
        let item = await Item.findOne({ _id: req.params.id });
        res.send(apiResponse(item))
    }
    catch (error) {
        res.send(error)
    }
});

/**
 * Create New Item
 *
 * @return response()
 */
app.post('/api/items', async (req, res) => {
    let data = { title: req.body.title, body: req.body.body };
    try {
        let response = await Item.create(data);
        res.send(apiResponse(response))
    }
    catch (error) {
        res.send(error)
    }
});

/**
 * Update Item
 *
 * @return response()
 */
app.put('/api/items/:id', async (req, res) => {
    try {
        let response = await Item.updateOne({ _id: req.params.id }, { $set: { title: req.body.title, body: req.body.body } });
        res.send(apiResponse(response))
    }
    catch (error) {
        res.send(error)
    }
});

/**
 * Delete Item
 *
 * @return response()
 */
app.delete('/api/items/:id', async (req, res) => {
    try {
        let response = await Item.findByIdAndDelete(req.params.id);
        res.send(apiResponse(response))
    }
    catch (error) {
        res.send(error)
    }
});

function apiResponse(results) {
    return JSON.stringify({ "status": 200, "error": null, "response": results });
}

app.listen(3000, () => {
    console.log('Server started on port 3000...');
});