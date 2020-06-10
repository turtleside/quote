import sendResponse from "@wonkledge/okatsu/lib/response";
import {feature} from "@wonkledge/okatsu/lib/promise";
import query from "@wonkledge/okatsu/lib/mongooseAdapter";
import Quote from "./model";
import mapFields from "@wonkledge/okatsu/lib/datamapper";
import checkParameters from '@wonkledge/okatsu/lib/validator';


const allStatus = ['ongoing', 'accepted', 'refused', 'closed'];

const mapping = [
    {
        source: 'public_id',
        target: 'id'
    }
];

const validators = [
    {
        field: 'status',
        predicate: status => allStatus.includes(status),
        errorMessage: 'id must have uuid format',
        required: false
    }
];

const fetchQuote = (params) => {
    return Quote.find(params);
};

const getAll = (req, res) => {
    feature(sendResponse(res), mapFields(mapping), query(fetchQuote), checkParameters(validators))(req.query)
};

export default getAll;