const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user2Schema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String
    }
}, {
    collection: 'users2'
})

const User2 = mongoose.model('User2', user2Schema);

module.exports = User2;