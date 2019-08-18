import {CommonConfig} from "../config/CommonConfig";
import RequestUtil from "../util/RequestUtil";

const { AddManager, AddReview } = CommonConfig;

export const submitNewManager = (data, headers) => RequestUtil.POST({
    url: `${AddManager}`,
    data,
    headers
});

export const submitNewReview = (data, headers) => RequestUtil.POST({
    url: `${AddReview}`,
    data,
    headers
});
