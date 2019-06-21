
const COMMENT_TEXT = 200;

export const truncateText = (val) => {
    if(val.length > COMMENT_TEXT) {
        let value =  val.substring(0, COMMENT_TEXT);
        return value+'...';
    }
    return val;
};


export const getManagerSlug = (val) => {
    return 'manager/'+ makeSlug(val);
};

export const makeSlug = (val) => {
    return val
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-');
};
