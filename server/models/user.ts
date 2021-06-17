import mongoose, { mongo } from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    password: String,
},
{
    collection: 'users'
});

const Model = mongoose.model('User', UserSchema);
export default Model;