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
define("src/components/photo-carousel/photo-carousel.presets", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = {
        "default": {
            name: "Default",
            props: {
                photos: [
                    {
                        id: "test",
                        url: "https://firebasestorage.googleapis.com/v0/b/ftms-ca85b.appspot.com/o/jobs%2FKJUk1VXGlRrALDFpNdOE%2Fphotos%2F2021-05-28T19%3A18%3A22.835Z.jpg?alt=media&token=f2617197-3249-4a65-852e-d3550ceef48b"
                    },
                    {
                        id: "test2",
                        url: "https://firebasestorage.googleapis.com/v0/b/ftms-ca85b.appspot.com/o/jobs%2FUXmgvBkzLJQ9eKRR8o7i%2Fphotos%2F2021-06-24T21%3A35%3A31.403Z.jpeg?alt=media&token=d5168723-3670-4b6e-872e-74a98d51180d"
                    }
                ]
            }
        }
    };
});
