import mongoose, { PassportLocalSchema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

const BusinessContactSchema = new Schema({
    name: String,
    email: String,
    contact: String
},
{
    collection: 'business_contacts'
});

BusinessContactSchema.plugin(passportLocalMongoose);

const Model = mongoose.model('BusinessContact', BusinessContactSchema);

export default Model;