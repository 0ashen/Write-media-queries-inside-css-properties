"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitBreakpoints = void 0;
exports.splitBreakpoints = {
    all: '',
    mb_tablet: '',
    mb_mob: ''
};
// каждый в начале ts писал как подазреваю в таком же стиле хуйню
function media(styles) {
    var response = '';
    var propertiesKeys = Object.keys(styles);
    for (var i = 0; i < propertiesKeys.length; i++) {
        var propertyKey = propertiesKeys[i], breakpointsKeys = Object.keys(styles[propertyKey]);
        for (var y = 0; y < breakpointsKeys.length; y++) {
            var breakpoints = styles[propertyKey], propertyValue = breakpoints[breakpointsKeys[y]];
            exports.splitBreakpoints[breakpointsKeys[y]] += propertyKey + ':' + propertyValue + '; \n ';
        }
    }
    console.log(response, exports.splitBreakpoints);
    return response;
}
var queryExample = {
    'display': 
};
console.log(media(queryExample));
//# sourceMappingURL=index.js.map