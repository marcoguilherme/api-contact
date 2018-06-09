import mongoose from 'mongoose';

const ContactSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name '
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_data: {
        type: Date,
        default: Date.now
    }
})

var contact = mongoose.model('Contact', ContactSchema);

export default contact;  