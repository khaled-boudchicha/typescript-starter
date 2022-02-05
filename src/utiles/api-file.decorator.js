"use strict";
exports.__esModule = true;
exports.ApiFile = void 0;
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var swagger_1 = require("@nestjs/swagger");
function ApiFile(fieldName, required, localOptions) {
    var _a;
    if (fieldName === void 0) { fieldName = 'file'; }
    if (required === void 0) { required = false; }
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)(fieldName, localOptions)), (0, swagger_1.ApiConsumes)('multipart/form-data'), (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            required: required ? [fieldName] : [],
            properties: (_a = {},
                _a[fieldName] = {
                    type: 'string',
                    format: 'binary'
                },
                _a)
        }
    }));
}
exports.ApiFile = ApiFile;
// export function ApiImageFile(fileName = 'image', required = false) {
//   return ApiFile(fileName, required, {
//     fileFilter: fileMimetypeFilter('image'),
//   });
// }
// export function ApiPdfFile(fileName = 'image', required = false) {
//   return ApiFile(fileName, required, {
//     fileFilter: fileMimetypeFilter('pdf'),
//   });
// }
