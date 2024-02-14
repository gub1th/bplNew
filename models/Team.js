const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema(
{
    member1: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    member2: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
}, 
{
    timestamps: true
}
)

module.exports = mongoose.model('Team', teamSchema)