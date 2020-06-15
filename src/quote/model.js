import mongoose from 'mongoose';
import {isPrice, isUuid} from "@wonkledge/okatsu/lib/validator/built-in";

const rowScheme = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    price_vat_excl: {
        type: String,
        required: true
    }
});

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
    syndicate_id: {
        type: String,
        required: true
    },
    syndicate_name: {
        type: String,
        required: true
    },
    building_address: {
        type: String,
        required: true
    },
    building_postal_code: {
        type: String,
        required: true
    },
    building_city: {
        type: String,
        required: true
    },
    total_vat_excl: {
        type: String,
        required: true
    },
    total_vat_incl: {
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
    },
    rows: [rowScheme],
    public_id: {
        type: String,
        required: true
    }
});

const Quote = mongoose.model('quote', quoteScheme);

export default Quote;
