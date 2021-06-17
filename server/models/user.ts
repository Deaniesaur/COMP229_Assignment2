import mongoose, { PassportLocalSchema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    email: String,
    display: String,
    created: {
        type: Date,
        default: Date.now()
    },
    updated: {
        type: Date,
        default: Date.now()
    }
},
{
    collection: 'users'
});

UserSchema.plugin(passportLocalMongoose);

const Model = mongoose.model('User', UserSchema);

declare global {
    export type UserDocument = mongoose.Document & {
        _id: String,
        username: String,
        email: String,
        display: String
    }
}
export default Model;