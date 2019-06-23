import {CommonConfig} from "../config/CommonConfig";
import RequestUtil from "../util/RequestUtil";

const { CompanyAll } = CommonConfig;

export const fetchAllCompaniesApi = () => RequestUtil.GET({
    url: `${CompanyAll}`,

    headers: {
        'Content-Type': 'application/json',
        'x-atv-did': 'sd',
    },
});
