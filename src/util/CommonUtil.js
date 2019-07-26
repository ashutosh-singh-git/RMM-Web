import {DESIGNATION_VALUE} from "../config/CommonConfig";
import Fingerprint2 from 'fingerprintjs2';

const COMMENT_TEXT = 200;

export const truncateText = (val) => {
    if(val.length > COMMENT_TEXT) {
        let value =  val.substring(0, COMMENT_TEXT);
        return value+'...';
    }
    return val;
};

let privateFingerPrintHolder = null;
export const createFingerPrint = async () => {
    if (privateFingerPrintHolder) {
        return Promise.resolve(privateFingerPrintHolder);
    }

    return new Promise((resolve, reject) => {
        try {
            Fingerprint2.get((components) => {
                const values = components.map(component => component.value);
                const murmur = Fingerprint2.x64hash128(values.join(''), 31);
                privateFingerPrintHolder = murmur;
                resolve(murmur);
            });
        }
        catch (error) {
            reject(error);
        }
    });
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

export const rateFormKeys = {
    overallRating: (val) => !isNaN(val) && val > 0 && val < 11,
    isRecommended: (val) => val !== null,
    behaviour: (val) => !isNaN(val) && val > 0 && val < 6,
    knowledge: (val) => !isNaN(val) && val > 0 && val < 6,
    skills: (val) => !isNaN(val) && val > 0 && val < 6,
    leadership: (val) => !isNaN(val) && val > 0 && val < 6,
    transparency: (val) => !isNaN(val) && val > 0 && val < 6,
    communication: (val) => !isNaN(val) && val > 0 && val < 6,
    reviewerExperience: (val) => val !== undefined && !isEmpty(val),
    reviewerRelation: (val) => !isNaN(val) && val > 0 && val < 4,
};

export const verifyRMap = (map) => {
    console.log(map);
    let errors = Object.keys(rateFormKeys).map(function (property) {
        let validator = rateFormKeys[property];

        return [property, validator(map[property])];
    }).reduce(function (errors, pair) {
        if (pair[1] === false) {
            errors.push(new Error(pair[0] + " is invalid."));
        }

        return errors;
    }, []);

    if (errors.length > 0) {
        errors.forEach(function (error) {
            console.log(error.message);
        });
        return false
    } else {
        console.log("info is valid");
        return true;
    }
};

export const getDesignation = (value) => {
    return DESIGNATION_VALUE[value] ? DESIGNATION_VALUE[value] : DESIGNATION_VALUE.OTHER
};

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
};
