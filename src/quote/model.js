import mongoose from 'mongoose';

const quoteScheme = mongoose.Schema({
    syndic_id: {
        type: String,
        required: true
    },
    creation_date: {
        type: String,
        required: true
    },
    due_date: {
        type: String,
        required: true
    },
    last_bill_created_date: {
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
    },
    description: {
        type: String,
        required: true
    },
    society_id: {
      type: String,
      required: true
    },
    building: {
        name: {
            type: String,
            required: true
        },
        postal_code: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        }
    },
    amount: {
        without_vat: {
            type: String,
            required: true
        },
        with_vat: {
            type: String,
            required: true
        },
        vat_percentage: {
            type: String,
            required: true
        },
        vat: {
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
