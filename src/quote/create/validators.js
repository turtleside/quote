
const allStatus = ['ongoing', 'accepted', 'refused', 'closed'];
const allCyclicity = ['monthly', 'quarterly', 'biannual', 'punctual'];

const validators = [
    {
        field: 'syndic_id',
        predicate: id => id.toString().match(/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/),
        errorMessage: 'id must have uuid format'
    },
    {
        field: 'society_id',
        predicate: id => id.toString().match(/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/),
        errorMessage: 'id must have uuid format'
    },
    {
        field: 'creation_date',
        predicate: date => date.toString().match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/),
        errorMessage: 'id must have uuid format'
    },
    {
        field: 'due_date',
        predicate: date => date.toString().match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/),
        errorMessage: 'id must have uuid format'
    },
    {
        field: 'last_bill_created_date',
        predicate: id => id.toString().match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/),
        errorMessage: 'id must have uuid format'
    },
    {
        field: 'status',
        predicate: status => allStatus.includes(status),
        errorMessage: 'id must have uuid format'
    },
    {
        field: 'cyclicity',
        predicate: cyclicity => allCyclicity.includes(cyclicity),
        errorMessage: 'id must have uuid format'
    },
    {
        field: 'description',
        predicate: id => id.toString().match(/[a-z ]+/),
        errorMessage: 'id must have uuid format'
    },
    {
        field: 'amount',
        predicate: amount => amountIsValid(amount),
        errorMessage: 'id must have uuid format'
    },
    {
        field: 'building',
        predicate: building => buildingIsValid(building),
        errorMessage: 'id must have uuid format'
    }
];



const amountIsValid = amount => {
    const checkWithoutVat = (withoutVat) => withoutVat.toString().match(/^[0-9]+,[0-9]{2}$/);
    const checkWithVat = (withVat) => withVat.toString().match(/^[0-9]+,[0-9]{2}$/);
    const checkVatPercentage = (vatPercentage) => vatPercentage.toString().match(/^[0-9]{2}$/);
    const checkVat = vat => vat.toString().match(/^[0-9]+,[0-9]{2}$/);

    return checkWithoutVat(amount.without_vat) && checkWithVat(amount.with_vat) && checkVatPercentage(amount.vat_percentage) && checkVat(amount.vat);
};

const buildingIsValid = building => {
    const checkName = name => name.toString().match(/^[a-zA-Z -]+$/);
    const checkPostalCode = postalCode => postalCode.toString().match(/[0-9]{5}/);
    const checkCity = city => city.toString().match(/^[a-zA-Z0-9 àèìòùáéíóúýâêîôûãñõäëïöüÿç -]+$/);
    const checkAddress = address => address.toString().match(/^[a-zA-Z0-9 àèìòùáéíóúýâêîôûãñõäëïöüÿç -]+$/);

    return checkName(building.name) && checkPostalCode(building.postal_code) && checkCity(building.city) && checkAddress(building.address);
};

export default validators;
