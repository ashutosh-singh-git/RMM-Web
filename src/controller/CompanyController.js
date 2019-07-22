import {CommonConfig} from "../config/CommonConfig";
import RequestUtil from "../util/RequestUtil";

const { CompanyAll, ManagerReviewSearch, ManagerSearch } = CommonConfig;

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
    },
});

export const managerSearch = (ci, mn) => RequestUtil.GET({
    url: `${ManagerSearch}?companyId=${ci}&managerName=${mn}`,

    headers: {
        'Content-Type': 'application/json',
    },
});
