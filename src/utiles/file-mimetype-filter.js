"use strict";
exports.__esModule = true;
exports.fileMimetypeFilter = void 0;
var common_1 = require("@nestjs/common");
function fileMimetypeFilter() {
    var mimetypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mimetypes[_i] = arguments[_i];
    }
    return function (req, file, callback) {
        if (mimetypes.some(function (m) { return file.mimetype.includes(m); })) {
            callback(null, true);
        }
        else {
            callback(new common_1.UnsupportedMediaTypeException("File type is not matching: " + mimetypes.join(', ')), false);
        }
    };
}
exports.fileMimetypeFilter = fileMimetypeFilter;
