import {
    isAlphaNumericExtended,
    isFrenchPostalCode,
    isIncludedIn,
    isPrice,
    isUuid
} from '@wonkledge/okatsu/lib/validator/built-in';

const allStatus = ['ongoing', 'accepted', 'refused', 'closed'];
const allCyclicity = ['monthly', 'quarterly', 'biannual', 'punctual'];

const isDate = date => {
    const result = date.toString().match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/);
    return result !== null;
};

const checkRows = rows => {
    return rows.reduce( (bool, row) => {
        return bool
        && isAlphaNumericExtended(row.description)
        && isPrice(row.price_vat_excl)
    }, true)
}

const checkState = state => {
    return isDate(state.creation_date)
        && isDate(state.due_date)
        && isIncludedIn(allStatus)(state.status)
        && isIncludedIn(allCyclicity)(state.cyclicity);
};

const validators = [
    {
        field: 'state',
        predicate: checkState,
        errorMessage: 'state is incorrect',
        required: true
    },
    {
        field: 'rows',
        predicate: checkRows,
        errorMessage: 'rows are not correctly formatted',
        required: true
    },
    {
        field: 'syndicate_id',
        predicate: syndicate_id => isUuid(syndicate_id),
        errorMessage: 'syndicate id must be uuid',
        required: true
    },
    {
        field: 'syndicate_name',
        predicate: syndicate_name => isAlphaNumericExtended(syndicate_name),
        errorMessage: 'syndicate name is incorrect',
        required: true
    },
    {
        field: 'building_address',
        predicate: building_address => isAlphaNumericExtended(building_address),
        errorMessage: 'building address must be uuid',
        required: true
    },
    {
        field: 'building_postal_code',
        predicate: building_postal_code => isFrenchPostalCode(building_postal_code),
        errorMessage: 'building postal code must be uuid',
        required: true
    },
    {
        field: 'building_city',
        predicate: building_city => isAlphaNumericExtended(building_city),
        errorMessage: 'building city must be uuid',
        required: true
    },
    {
        field: 'total_vat_excl',
        predicate: totalVatExcl => isPrice(totalVatExcl),
        errorMessage: 'totalVatExcl is incorrect',
        required: true
    },
    {
        field: 'vat_percentage',
        predicate: tva => tva.toString().match(/^[0-9]{1,2}$/),
        errorMessage: 'tva percentage is incorrect',
        required: true
    },
    {
        field: 'total_vat_incl',
        predicate: totalVatIncl => isPrice(totalVatIncl),
        errorMessage: 'totalVatIncl is incorrect',
        required: true
    },
    {
        field: 'vat',
        predicate: tva => isPrice(tva),
        errorMessage: 'tva is incorrect',
        required: true
    }
];



export default validators;
