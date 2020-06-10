import sendResponse from "@wonkledge/okatsu/lib/response";
import {feature} from "@wonkledge/okatsu/lib/promise";
import Quote from "./model";
import checkParameters from '@wonkledge/okatsu/lib/validator';
import query from "@wonkledge/okatsu/lib/mongooseAdapter";

const validators = [
    {
        field: 'id',
        predicate: id => id.toString().match(/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/),
        errorMessage: 'id must have uuid format'
    }
];

const deleteQuoteById = (params) => {
    return Quote.deleteOne({ public_id: params.id});
};

const deleteById = (req, res) => {
    feature(sendResponse(res), query(deleteQuoteById), checkParameters(validators))(req.params)
};

export default deleteById;