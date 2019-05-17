
const COMMENT_TEXT = 200;

export const truncateText = (val) => {
    if(val.length > COMMENT_TEXT) {
        let value =  val.substring(0, COMMENT_TEXT);
        return value+'...';
    }
    return val;
};
