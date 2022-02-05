"use strict";
exports.__esModule = true;
exports.ApiFiles = void 0;
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var swagger_1 = require("@nestjs/swagger");
function ApiFiles(fieldName, required, maxCount, localOptions) {
    var _a;
    if (fieldName === void 0) { fieldName = 'files'; }
    if (required === void 0) { required = false; }
    if (maxCount === void 0) { maxCount = 10; }
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)(fieldName, maxCount, localOptions)), (0, swagger_1.ApiConsumes)('multipart/form-data'), (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            required: required ? [fieldName] : [],
            properties: (_a = {},
                _a[fieldName] = {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary'
                    }
                },
                _a)
        }
    }));
}
exports.ApiFiles = ApiFiles;
