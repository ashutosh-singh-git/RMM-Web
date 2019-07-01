import {CommonConfig} from "../config/CommonConfig";
import RequestUtil from "../util/RequestUtil";

const { AddManager, AddReview } = CommonConfig;

export const submitNewManager = (data) => RequestUtil.POST({
    url: `${AddManager}`,
    data,
});

export const submitNewReview = (data) => RequestUtil.POST({
    url: `${AddReview}`,
    data,
});
