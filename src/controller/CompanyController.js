import {EndPoints} from "../config/EndPoints";
import RequestUtil from "../util/RequestUtil";

const { CompanyAll } = EndPoints;

export const fetchAllCompaniesApi = () => RequestUtil.GET({
    url: `${CompanyAll}`,

    headers: {
        'Content-Type': 'application/json',
        'x-atv-did': 'sd',
    },
});
