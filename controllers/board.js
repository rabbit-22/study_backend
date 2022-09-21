const db = require('../models');

const getPosts = async (req, res) => {
    const posts = await db.Post.findAll();
    res.status(200).send(posts);
};

const getPost = async (req, res) => {
    var id = req.params['id'];
    const post = await db.Post.findOne({
        where : { id : id }
    });
    res.status(200).send(post);
};

module.exports = {
    getPosts,
    getPost
};



