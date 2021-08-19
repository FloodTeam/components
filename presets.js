"use strict";
function define(name, dependencies, callback) {
    if (!name || !dependencies || !callback)
        return;
    var exports = {};
    callback({}, exports);
    if (!window.presets)
        window.presets = {};
    window.presets[name.split('/').pop()] = exports["default"];
}
;
define("src/components/avatar/avatar.presets", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = {
        "default": {
            name: "Default",
            props: {}
        }
    };
});
define("src/components/book-now/book-now.presets", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = {
        "default": {
            name: "Default",
            props: {
                googleMapsKey: "AIzaSyBenUMQZUJg7qRUoFUJOS5tjK-JnOeQtjM"
            }
        }
    };
});
define("src/components/epay/epay.presets", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = {
        "default": {
            name: "Default",
            props: {
                stripeKey: "pk_test_K1eh90TvFf2KeXn6HHTdUJRO",
                dadeUrl: "https://test.dadesystems.com/api/billers/82",
                dadeKey: "pk_test_K1eh90TvFf2KeXn6HHTdUJRO"
            }
        }
    };
});
define("src/components/location-bar/location-bar.presets", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = {
        "default": {
            name: "Default",
            props: {
                src: "https://madnesslabs.net/img/logo.png",
                size: "100px"
            }
        },
        wee: {
            props: {
                size: "100px",
                initials: "ML"
            }
        }
    };
});
