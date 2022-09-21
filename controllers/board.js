const db = require('../models');

const getPosts = async (req, res) => {
    try {
        const posts = await db.Post.findAll();
        res.status(200).send(posts);
    } catch (err) {
        res.status(err.status || 500).send(err.message);
    }
};

const getPost = async (req, res) => {
    try {
        const id = req.params['id'];
        const post = await db.Post.findOne({
            where : { id : id }
        });
        res.status(200).send(post);
    } catch (err) {
        res.status(err.status || 500).send(err.message);
    }
};

const createPost = async (req, res) => {
    try {
        const post = {
            title: req.body.title,
            content: req.body.content,
        };
        console.log(req.body);
        const result = await db.Post.create(post);
        res.status(201).send(result);
    } catch (err) {
        res.status(err.status || 500).send(err.message);
    }
};

const updatePost = async (req, res) => {
    try {
        const id = req.params['id'];
        const post = {
            title: req.body.title,
            content: req.body.content,
        };
        const result = await db.Post.update(post, {
            where : { id : id }
        });
        res.status(201).send(result);
    } catch (err) {
        res.status(err.status || 500).send(err.message);
    }
};

const deletePost = async (req, res) => {
    try {
        const id = req.params['id'];
        db.Post.destroy({
            where : { id : id }
        });
        res.status(204).send();
    } catch (err) {
        res.status(err.status || 500).send(err.message);
    }
};

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
};



