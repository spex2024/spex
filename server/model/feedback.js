
import mongoose from "mongoose";

// Import necessary modules and dependencies...

const { Schema, model } = mongoose;

const feedbackSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    organization: {
        type: String, // Use the correct type for user_id
        required: true,
    },
    location: {
        type: String, // Use the correct type for user_id
        required: true,
    },
    agree :{
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    dateUpdated: {
        type: Date,
        default: Date.now,
    }
});

feedbackSchema.statics.createData = async function (name, email, phone, organization ,location ,  agree) {
    return await this.create({ name, email, phone, organization ,location ,  agree});
};

feedbackSchema.statics.getData = async function () {
    return await this.find().sort({ dateCreated: -1 });
};

// BlogSchema.statics.getUserBlogs = async function (user_id) {
//     return await this.find({ user_id }).sort({ dateCreated: -1 });
// };
//
// BlogSchema.statics.getBlog = async function (id) {
//     return await this.findById(id);
// };
// BlogSchema.statics.searchBlogs = async function (search, searchBy) {
//     let query = {};
//
//     if (search && searchBy === 'title') {
//         query = { title: { $regex: new RegExp(search, 'i') } };
//     }
//
//     return await this.find(query).sort({ dateCreated: -1 });
// };
//
//
// BlogSchema.statics.updateBlog = async function (id, data) {
//     return await this.findOneAndUpdate({ _id: id }, data, { new: true }); // Set { new: true } to return the updated document
// };
//
// BlogSchema.statics.deleteBlog = async function (id) {
//     return await this.findByIdAndDelete(id);
// };

const FeedbackModel = model('Feedback', feedbackSchema);

export default FeedbackModel;