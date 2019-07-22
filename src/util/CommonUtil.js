
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
