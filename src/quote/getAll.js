import {sendResponse} from "@wonkledge/okatsu/lib/response";
import {feature} from "@wonkledge/okatsu/lib/promise";
import {query} from "@wonkledge/okatsu/lib/mongooseAdapter";
import Quote from "./model";
import {mapFields} from "@wonkledge/okatsu/lib/datamapper";
import {checkParameters} from '@wonkledge/okatsu/lib/validator';
import {isUuid} from "@wonkledge/okatsu/lib/validator/built-in";

const allStatus = ['ongoing', 'accepted', 'refused', 'closed'];

const mapping = [
    {
        source: 'public_id',
        target: 'id'
    }
];

const checkDevisIds = devis_ids => {
    const devisIdsArr = devis_ids.split(',');

    return devisIdsArr.reduce( (acc,val) => {
        return acc && isUuid(val);
    }, true)
}

const validators = [
    {
        field: 'status',
        predicate: status => allStatus.includes(status),
        errorMessage: 'id must have uuid format',
        required: false
    },
    {
        field: 'devis_ids',
        predicate: checkDevisIds,
        errorMessage: 'devis_id must be array of uuids',
        required: false
    }
];

const fetchQuote = (params) => {
    console.log(params);
    let searchCondition = params.status ? { 'state.status': params.status } : {};
    searchCondition = params.devis_ids ? { 'public_id': { $in: params.devis_ids.split(',')}} : searchCondition


    return Quote.find(searchCondition);
};

const getAll = (req, res) => {
    feature(sendResponse(res), mapFields(mapping), query(fetchQuote), checkParameters(validators))(req.query)
};

export default getAll;