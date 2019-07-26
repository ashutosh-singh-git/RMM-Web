
const COMMENT_TEXT = 200;

export const truncateText = (val) => {
    if(val.length > COMMENT_TEXT) {
        let value =  val.substring(0, COMMENT_TEXT);
        return value+'...';
    }
    return val;
};

export const isEmpty =(obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export const getManagerSlug = (val, id) => {
    return '/manager/'+ makeSlug(val, id);
};

export const getManagerId = (val) => {
    return val.split('-').slice(-1)[0];
};

export const makeSlug = (val, id) => {
    return val
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-') + '-' + id;
};

export const GENDERS = [
    {value: 0, label: 'Mr'},
    {value: 1, label: 'Miss'},
];

export const DESIGNATIONS = [
    {value: 0, label: 'Project Manager'},
    {value: 1, label: 'Technical Lead'},
    {value: 2, label: 'Other'},
];

const DESIGNATION_VALUE = {
    PROJECT_MANAGER: 'Project Manager',
    TECH_LEAD: 'Technical Lead',
    OTHER: 'Other'
};

export const getDesignation = (value) => {
    return DESIGNATION_VALUE[value] ? DESIGNATION_VALUE[value] : DESIGNATION_VALUE.OTHER
}

export const formatDate = (date) => {
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}
