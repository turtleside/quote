import sendResponse from "@wonkledge/okatsu/lib/response";
import {feature} from "@wonkledge/okatsu/lib/promise";
import query from "@wonkledge/okatsu/lib/mongooseAdapter";
import Quote from "./model";
import mapFields from "@wonkledge/okatsu/lib/datamapper";

const mapping = [
    {
        source: 'public_id',
        target: 'id'
    }
];

const fetchQuote = () => {
    return Quote.find();
};

const getAll = (req, res) => {
    feature(sendResponse(res), mapFields(mapping), query(fetchQuote))(req)
};

export default getAll;