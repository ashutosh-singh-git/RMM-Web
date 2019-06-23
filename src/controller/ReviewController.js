import {CommonConfig} from "../config/CommonConfig";
import RequestUtil from "../util/RequestUtil";

const { AddManager } = CommonConfig;

export const submitNewManager = (data) => RequestUtil.POST({
    url: `${AddManager}`,
    data,
});
