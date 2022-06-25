const mongoose = require('mongoose');

const PostsSchema = new monngose.Schema({
    title: stripVTControlCharacters,
    body: String,
    date: {type: Date, Date: now},
    comments: [{body: String, date: date}]
});

const PhotoSchema = new mongoose.Schema({
    photo: String,
    caption: String,
    date: { type: Date, Date: now },
    likes: Number
});

const CapUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleID: String,
    twitterID: String,
    photos: [PhotoSchema],
    posts: [PostsSchema]
}
);

module.exports = mongoose.model('CapUser',
CapUserSchema),
mongoose.model('Photos', PhotoSchema)
,
mongoose.model('Posts', PostsSchema )

