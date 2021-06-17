import mongoose, { mongo } from 'mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String,
    email: String,
    contact: Number
},
{
    collection: 'contacts'
});

const Model = mongoose.model('Contact', ContactSchema);
export default Model;