
const { lte } = require('lodash');
const CapUser = require('./CapUser.js');
const Photos = require('./CapUser.js');
const Posts = require('./CapUSer.js');


let create = (req, res) =>{
    CapUser.findById(req.params.id, function (err, CapUser) {
        CapUser.push(req.body);
        CapUSer.save(function (err) {
            res.redirect(`/CapUser/${Capser._id}`);
        });
    });
}

let create = (req, res)=> {
    Photos.findById(req.params.id, function (err, Photos) {
        Photos.push(req.body);
        Photos.save(function (err) {
            res.redirect(`/Photos/${Photos._id}`);
        });
    });
}

let create = (req, res)=> {
    Posts.findById(req.params.id, function (err, Posts) {
        Posts.push(req.body);
        Posts.save(function (err) {
            res.redirect(`/Posts/${Posts._id}`);
        });
    });
}


function delCapUser(req, res, next) {
    CapUser.findOne({ 'CapUser._id': req.params.id }, function (err, CapUser) {
        CapUser.id(req.params.id).remove();
        CapUser.save(function (err) {
            res.redirect('/CapUser');
        });
    });
}
function delPosts(req, res, next) {
    Posts.findOne({ 'Posts._id': req.params.id }, function (err, Posts) {
        Posts.id(req.params.id).remove();
        Posts.save(function (err) {
            res.redirect('/CapUser');
        });
    });
}
function delPhotos(req, res, next) {
    Photos.findOne({ 'Photos._id': req.params.id }, function (err, Photos) {
        Photos.facts.id(req.params.id).remove();
        Photos.save(function (err) {
            res.redirect('/CapUser');
        });
    });
}
let update =(req, res) => {
    Posts.findById(req.params.id, function (err, Posts) {
        Posts.push(req.body);
        Posts.update(function (err) {
            res.redirect(`/Posts/${Posts._id}`);
        });
    });
}
let update = (req, res) => {
    Photos.findById(req.params.id, function (err, Photos) {
        Photos.push(req.body);
        Photos.update(function (err) {
            res.redirect(`/Photos/${Photos._id}`);
        });
    });
}
let update = (req, res) => {
    CapUser.findById(req.params.id, function (err, CapUser) {
        CapUser.push(req.body);
        CapUser.update(function (err) {
            res.redirect(`/CapUser/${CapUser._id}`);
        });
    });
}
let show = (req, res) => {
    CapUser.findById(req.params.id, function (err, CapUser) {
        CapUser.push(req.body);
        CapUser.show(function (err) {
            res.redirect(`/CapUser/${CapUser._id}`);
        });
    });
}
let show = (req, res) => {
    Posts.findById(req.params.id, function (err, Posts) {
        Posts.push(req.body);
        Posts.show(function (err) {
            res.redirect(`/Posts/${Posts._id}`);
        });
    });
}
let show = (req, res) => {
    Photos.findById(req.params.id, function (err, Photos) {
        Photos.push(req.body);
        Photos.show(function (err) {
            res.redirect(`/Photos/${Photos._id}`);
        });
    });
}


module.exports = {
    show,
    create,
    update,
    delCapUser,
    delPosts,
    delPhotos
}