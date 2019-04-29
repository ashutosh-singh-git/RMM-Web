import {EndPoints} from "../config/EndPoints";
import RequestUtil from "../util/RequestUtil";

const { AddManager } = EndPoints;

export const submitNewManager = (data) => RequestUtil.POST({
    url: `${AddManager}`,
    data,
});
