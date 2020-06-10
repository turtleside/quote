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
    },

];

const fetchQuoteById = (params) => {
    return Quote.find({ public_id: params.id});
};

const getById = (req, res) => {
    feature(sendResponse(res), query(fetchQuoteById), checkParameters(validators))(req.params)
};

export default getById;