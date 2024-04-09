const Post = require('../../model/post.js');
// const Product = require('../../model/post
// const { post } = require('../../routers/api

exports.getPost = (req, res, next) => {
    // Goi model
    Post.getAll(function (data) {
        res.status(200).json({
            posts: data
        });
    });
}
// exports.getaddPost = (req, res, next) => {
//     res.render('admin/post/add');
// }
exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const created_at = req.body.created_at;
    const user_id = req.body.user_id;
    const post = {
        title: title,
        content: content,
        created_at: created_at,
        user_id: user_id
    }
    Post.savePost(post, function (data) {
        res.status(201).json({
            message: 'Thêm bài viết thành công',
            posts: data
        });
    });
};