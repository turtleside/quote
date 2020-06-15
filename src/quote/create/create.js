import {sendResponse} from "@wonkledge/okatsu/lib/response";
import {feature} from "@wonkledge/okatsu/lib/promise";
import Quote from "../model";
import {checkParameters} from '@wonkledge/okatsu/lib/validator';
import {query} from "@wonkledge/okatsu/lib/mongooseAdapter";
import { v4 as uuidv4 } from 'uuid';
import validators from "./validators";
import {logStash} from "@wonkledge/okatsu/lib/log";

const createQuote = (params) => {
    let quote = new Quote();

    quote.state = params.state;
    quote.rows  = params.rows;
    quote.syndicate_id = params.syndicate_id;
    quote.syndicate_name = params.syndicate_name;
    quote.building_address = params.building_address;
    quote.building_city = params.building_city;
    quote.building_postal_code = params.building_postal_code;
    quote.total_vat_excl = params.total_vat_excl;
    quote.vat_percentage = params.vat_percentage;
    quote.total_vat_incl = params.total_vat_incl;
    quote.vat            = params.vat;
    quote.public_id = uuidv4();

    return quote.save();
};

const create = (req, res) => {
    feature(sendResponse(res), logStash, query(createQuote), checkParameters(validators))(req.body)
};

export default create;
