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
define("src/components/graph/graph.presets", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = {
        "default": {
            name: "Pie Chart",
            props: {
                type: "pie",
                labels: ["Test 1", "test 2"],
                datasets: [
                    {
                        label: "Dataset 1",
                        data: [30, 20],
                        backgroundColor: ["red", "blue"]
                    },
                ]
            }
        },
        bar: {
            name: "Bar Chart",
            props: {
                type: "bar",
                labels: ["Test 1", "test 2"],
                datasets: [
                    {
                        label: "Dataset 1",
                        data: [30, 20],
                        backgroundColor: ["red", "blue"]
                    },
                ]
            }
        },
        line: {
            name: "Line Chart",
            props: {
                type: "line",
                labels: ["Test 1", "test 2"],
                datasets: [
                    {
                        label: "Dataset 1",
                        data: [30, 20],
                        backgroundColor: ["red", "blue"]
                    },
                ]
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
