let BASE_URL = 'http://18.221.153.152:6533';
let API_BASE_URL = `${BASE_URL}/`;

let appUrl = {
    USER    : API_BASE_URL+'find-user',
    REPORTS : API_BASE_URL+'bug-report'
};
const version = '1.0.0';
module.exports = { 
    appUrl,
    BASE_URL,
    version
}