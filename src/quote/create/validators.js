import {isIncludedIn} from '@wonkledge/okatsu/lib/validator/built-in';

const allStatus = ['ongoing', 'accepted', 'refused', 'closed'];
const allCyclicity = ['monthly', 'quarterly', 'biannual', 'punctual'];


const isDate = date => {
    const result = date.toString().match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/);
    return result !== null;
};

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
        errorMessage: 'state is incorrect'
    }
];

export default validators;
