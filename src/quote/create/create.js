import sendResponse from "@wonkledge/okatsu/lib/response";
import {feature} from "@wonkledge/okatsu/lib/promise";
import Quote from "../model";
import checkParameters from '@wonkledge/okatsu/lib/validator';
import query from "@wonkledge/okatsu/lib/mongooseAdapter";
import { v4 as uuidv4 } from 'uuid';
import validators from "./validators";

const createQuote = (params) => {
    let quote = new Quote();

    quote.syndic_id                 = params.syndic_id;
    quote.society_id                = params.society_id;
    quote.creation_date             = params.creation_date;
    quote.due_date                  = params.due_date;
    quote.last_bill_created_date    = params.last_bill_created_date;
    quote.status                    = params.status;
    quote.cyclicity                 = params.cyclicity;
    quote.description               = params.description;
    quote.amount                    = params.amount;
    quote.building                  = params.building;
    quote.public_id                 = uuidv4();

    return quote.save();
};

const create = (req, res) => {
    feature(sendResponse(res), query(createQuote), checkParameters(validators))(req.body)
};

export default create;
