import mongoose from 'mongoose';

const quoteScheme = mongoose.Schema({
    state: {
        creation_date: {
            type: String,
            required: true
        },
        due_date: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        cyclicity: {
            type: String,
            required: true
        }
    },
    public_id: {
        type: String,
        required: true
    }
});

const Quote = mongoose.model('quote', quoteScheme);

export default Quote;
