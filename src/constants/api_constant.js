let BASE_URL = 'http://18.221.153.152:5000';
var API_BASE_URL = `${BASE_URL}/`;

var appUrl = {
    USER    : API_BASE_URL+'find-user',
    REPORTS : API_BASE_URL+'bug-report'
};
export default appUrl;
export const version = '1.0.0';