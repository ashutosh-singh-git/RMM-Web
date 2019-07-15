import {CommonConfig} from "../config/CommonConfig";
import RequestUtil from "../util/RequestUtil";

const { CompanyAll, ManagerReviewSearch } = CommonConfig;

export const fetchAllCompaniesApi = () => RequestUtil.GET({
    url: `${CompanyAll}`,

    headers: {
        'Content-Type': 'application/json',
        'x-atv-did': 'sd',
    },
});

export const fetchAllReviewsManager = (managerId) => RequestUtil.GET({
    url: `${ManagerReviewSearch}?managerId=${managerId}`,

    headers: {
        'Content-Type': 'application/json',
        'x-atv-did': 'sd',
    },
});
