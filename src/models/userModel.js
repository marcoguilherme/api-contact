import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    company: {
        type: String
    },
    hashPassword: {
        type: String,
        required: true
    },
    created_data: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.comparePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
};

const user = mongoose.model('User', UserSchema);


export default user;