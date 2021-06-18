import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BusinessContactSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    contact: String
},
{
    collection: 'business_contacts'
});

const Model = mongoose.model('BusinessContact', BusinessContactSchema);

export default Model;