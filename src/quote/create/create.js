import {sendResponse} from "@wonkledge/okatsu/lib/response";
import {feature} from "@wonkledge/okatsu/lib/promise";
import Quote from "../model";
import {checkParameters} from '@wonkledge/okatsu/lib/validator';
import {query} from "@wonkledge/okatsu/lib/mongooseAdapter";
import { v4 as uuidv4 } from 'uuid';
import validators from "./validators";

const createQuote = (params) => {
    let quote = new Quote();

    quote.state = params.state;
    quote.public_id = uuidv4();

    return quote.save();
};

const create = (req, res) => {
    feature(sendResponse(res), query(createQuote), checkParameters(validators))(req.body)
};

export default create;
