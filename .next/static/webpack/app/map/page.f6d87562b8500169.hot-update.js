"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/map/page",{

/***/ "(app-pages-browser)/./src/app/components/OpenLayersMap/index.tsx":
/*!****************************************************!*\
  !*** ./src/app/components/OpenLayersMap/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/Map */ \"(app-pages-browser)/./node_modules/ol/Map.js\");\n/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/View */ \"(app-pages-browser)/./node_modules/ol/View.js\");\n/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/layer/Tile */ \"(app-pages-browser)/./node_modules/ol/layer/Tile.js\");\n/* harmony import */ var ol_source_XYZ__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/source/XYZ */ \"(app-pages-browser)/./node_modules/ol/source/XYZ.js\");\n/* harmony import */ var ol_Feature__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/Feature */ \"(app-pages-browser)/./node_modules/ol/Feature.js\");\n/* harmony import */ var ol_geom_Point__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/geom/Point */ \"(app-pages-browser)/./node_modules/ol/geom/Point.js\");\n/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/proj */ \"(app-pages-browser)/./node_modules/ol/proj.js\");\n/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Vector */ \"(app-pages-browser)/./node_modules/ol/layer/Vector.js\");\n/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source/Vector */ \"(app-pages-browser)/./node_modules/ol/source/Vector.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/style */ \"(app-pages-browser)/./node_modules/ol/style/Style.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/style */ \"(app-pages-browser)/./node_modules/ol/style/Circle.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/style */ \"(app-pages-browser)/./node_modules/ol/style/Fill.js\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/style */ \"(app-pages-browser)/./node_modules/ol/style/Stroke.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst OpenLayersMap = ()=>{\n    _s();\n    const [lonLat, setLonLat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        -51.9275533,\n        -23.4473893\n    ]);\n    const [vectorSource, setVectorSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            const source = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n            setVectorSource(source);\n            const vectorLayer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n                source: source,\n                style: new ol_style__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n                    image: new ol_style__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n                        radius: 6,\n                        fill: new ol_style__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n                            color: \"blue\"\n                        }),\n                        stroke: new ol_style__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n                            color: \"white\",\n                            width: 2\n                        })\n                    })\n                })\n            });\n            const map = new ol_Map__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n                target: \"map\",\n                layers: [\n                    new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_10__[\"default\"]({\n                        source: new ol_source_XYZ__WEBPACK_IMPORTED_MODULE_11__[\"default\"]({\n                            url: \"https://tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                        })\n                    }),\n                    vectorLayer\n                ],\n                view: new ol_View__WEBPACK_IMPORTED_MODULE_12__[\"default\"]({\n                    center: [\n                        0,\n                        0\n                    ],\n                    zoom: 2\n                })\n            });\n            return ()=>{\n                map.setTarget(undefined);\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if ( true && lonLat.length > 0 && vectorSource) {\n            const point = new ol_geom_Point__WEBPACK_IMPORTED_MODULE_13__[\"default\"]((0,ol_proj__WEBPACK_IMPORTED_MODULE_2__.fromLonLat)(lonLat));\n            const feature = new ol_Feature__WEBPACK_IMPORTED_MODULE_14__[\"default\"]({\n                geometry: point\n            });\n            vectorSource.clear();\n            vectorSource.addFeature(feature);\n        }\n    }, [\n        lonLat,\n        vectorSource\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if ( true && \"geolocation\" in navigator) {\n            console.log(\"hey\");\n            navigator.geolocation.watchPosition((position)=>{\n                setLonLat([\n                    position.coords.longitude,\n                    position.coords.latitude\n                ]);\n            });\n        }\n    });\n    const handleMove = ()=>{\n        setLonLat([\n            lonLat[0] + 0.05,\n            lonLat[1] + 0.05\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    border: \"1px solid red\"\n                },\n                onClick: handleMove,\n                children: \"Se mexer\"\n            }, void 0, false, {\n                fileName: \"/home/paulo/Documentos/frella/map-mock/src/app/components/OpenLayersMap/index.tsx\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Lat: \",\n                    lonLat[0]\n                ]\n            }, void 0, true, {\n                fileName: \"/home/paulo/Documentos/frella/map-mock/src/app/components/OpenLayersMap/index.tsx\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Long: \",\n                    lonLat[1]\n                ]\n            }, void 0, true, {\n                fileName: \"/home/paulo/Documentos/frella/map-mock/src/app/components/OpenLayersMap/index.tsx\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"map\",\n                style: {\n                    width: \"100%\",\n                    height: \"80vh\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/paulo/Documentos/frella/map-mock/src/app/components/OpenLayersMap/index.tsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(OpenLayersMap, \"YgDpfv3+fjGedXHOcdsf19WCm8g=\");\n_c = OpenLayersMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OpenLayersMap);\nvar _c;\n$RefreshReg$(_c, \"OpenLayersMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9PcGVuTGF5ZXJzTWFwL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW1EO0FBQzFCO0FBQ0U7QUFDVztBQUNOO0FBQ0M7QUFDQztBQUNHO0FBQ0s7QUFDRTtBQUMwQjtBQUV0RSxNQUFNaUIsZ0JBQWdCOztJQUNsQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2pCLCtDQUFRQSxDQUFXO1FBQUMsQ0FBQztRQUFZLENBQUM7S0FBVztJQUN6RSxNQUFNLENBQUNrQixjQUFjQyxnQkFBZ0IsR0FBR25CLCtDQUFRQSxDQUFzQjtJQUV0RUQsZ0RBQVNBLENBQUM7UUFDTixJQUFJLElBQTZCLEVBQUU7WUFDL0IsTUFBTXFCLFNBQVMsSUFBSVgsd0RBQVlBO1lBQy9CVSxnQkFBZ0JDO1lBQ2hCLE1BQU1DLGNBQWMsSUFBSWIsdURBQVdBLENBQUM7Z0JBQ2hDWSxRQUFRQTtnQkFDUkUsT0FBTyxJQUFJUixnREFBS0EsQ0FBQztvQkFDYlMsT0FBTyxJQUFJWixnREFBV0EsQ0FBQzt3QkFDbkJhLFFBQVE7d0JBQ1JDLE1BQU0sSUFBSWIsZ0RBQUlBLENBQUM7NEJBQUVjLE9BQU87d0JBQU87d0JBQy9CQyxRQUFRLElBQUlkLGdEQUFNQSxDQUFDOzRCQUFFYSxPQUFPOzRCQUFTRSxPQUFPO3dCQUFFO29CQUNsRDtnQkFDSjtZQUNKO1lBRUEsTUFBTUMsTUFBTSxJQUFJNUIsOENBQUdBLENBQUM7Z0JBQ2hCNkIsUUFBUTtnQkFDUkMsUUFBUTtvQkFDSixJQUFJNUIsc0RBQVNBLENBQUM7d0JBQ1ZpQixRQUFRLElBQUloQixzREFBR0EsQ0FBQzs0QkFDWjRCLEtBQUs7d0JBQ1Q7b0JBQ0o7b0JBQ0FYO2lCQUNIO2dCQUNEWSxNQUFNLElBQUkvQixnREFBSUEsQ0FBQztvQkFDWGdDLFFBQVE7d0JBQUM7d0JBQUc7cUJBQUU7b0JBQ2RDLE1BQU07Z0JBQ1Y7WUFDSjtZQUNBLE9BQU87Z0JBQ0hOLElBQUlPLFNBQVMsQ0FBQ0M7WUFDbEI7UUFDSjtJQUNKLEdBQUcsRUFBRTtJQUVMdEMsZ0RBQVNBLENBQUM7UUFDTixJQUNJLEtBQTZCLElBQzdCaUIsT0FBT3NCLE1BQU0sR0FBRyxLQUNoQnBCLGNBQ0Y7WUFDRSxNQUFNcUIsUUFBUSxJQUFJakMsc0RBQUtBLENBQUNDLG1EQUFVQSxDQUFDUztZQUNuQyxNQUFNd0IsVUFBVSxJQUFJbkMsbURBQU9BLENBQUM7Z0JBQ3hCb0MsVUFBVUY7WUFDZDtZQUVBckIsYUFBYXdCLEtBQUs7WUFDbEJ4QixhQUFheUIsVUFBVSxDQUFDSDtRQUM1QjtJQUNKLEdBQUc7UUFBQ3hCO1FBQVFFO0tBQWE7SUFFekJuQixnREFBU0EsQ0FBQztRQUNOLElBQUksS0FBNkIsSUFBSSxpQkFBaUI2QyxXQUFXO1lBQzdEQyxRQUFRQyxHQUFHLENBQUM7WUFDWkYsVUFBVUcsV0FBVyxDQUFDQyxhQUFhLENBQUMsQ0FBQ0M7Z0JBQ2pDaEMsVUFBVTtvQkFDTmdDLFNBQVNDLE1BQU0sQ0FBQ0MsU0FBUztvQkFDekJGLFNBQVNDLE1BQU0sQ0FBQ0UsUUFBUTtpQkFDM0I7WUFDTDtRQUNKO0lBQ0o7SUFFQSxNQUFNQyxhQUFhO1FBQ2ZwQyxVQUFVO1lBQUNELE1BQU0sQ0FBQyxFQUFFLEdBQUc7WUFBTUEsTUFBTSxDQUFDLEVBQUUsR0FBRztTQUFLO0lBQ2xEO0lBRUEscUJBQ0k7OzBCQUNJLDhEQUFDc0M7Z0JBQU9oQyxPQUFPO29CQUFFaUMsUUFBUTtnQkFBZ0I7Z0JBQUdDLFNBQVNIOzBCQUFZOzs7Ozs7MEJBSWpFLDhEQUFDSTs7b0JBQUk7b0JBQU16QyxNQUFNLENBQUMsRUFBRTs7Ozs7OzswQkFDcEIsOERBQUN5Qzs7b0JBQUk7b0JBQU96QyxNQUFNLENBQUMsRUFBRTs7Ozs7OzswQkFDckIsOERBQUN5QztnQkFBSUMsSUFBRztnQkFBTXBDLE9BQU87b0JBQUVNLE9BQU87b0JBQVErQixRQUFRO2dCQUFPOzs7Ozs7OztBQUdqRTtHQW5GTTVDO0tBQUFBO0FBcUZOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9PcGVuTGF5ZXJzTWFwL2luZGV4LnRzeD8xY2NkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hcCBmcm9tIFwib2wvTWFwXCI7XG5pbXBvcnQgVmlldyBmcm9tIFwib2wvVmlld1wiO1xuaW1wb3J0IFRpbGVMYXllciBmcm9tIFwib2wvbGF5ZXIvVGlsZVwiO1xuaW1wb3J0IFhZWiBmcm9tIFwib2wvc291cmNlL1hZWlwiO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSBcIm9sL0ZlYXR1cmVcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwib2wvZ2VvbS9Qb2ludFwiO1xuaW1wb3J0IHsgZnJvbUxvbkxhdCB9IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQgVmVjdG9yTGF5ZXIgZnJvbSBcIm9sL2xheWVyL1ZlY3RvclwiO1xuaW1wb3J0IFZlY3RvclNvdXJjZSBmcm9tIFwib2wvc291cmNlL1ZlY3RvclwiO1xuaW1wb3J0IHsgQ2lyY2xlIGFzIENpcmNsZVN0eWxlLCBGaWxsLCBTdHJva2UsIFN0eWxlIH0gZnJvbSBcIm9sL3N0eWxlXCI7XG5cbmNvbnN0IE9wZW5MYXllcnNNYXAgPSAoKSA9PiB7XG4gICAgY29uc3QgW2xvbkxhdCwgc2V0TG9uTGF0XSA9IHVzZVN0YXRlPG51bWJlcltdPihbLTUxLjkyNzU1MzMsIC0yMy40NDczODkzXSk7XG4gICAgY29uc3QgW3ZlY3RvclNvdXJjZSwgc2V0VmVjdG9yU291cmNlXSA9IHVzZVN0YXRlPFZlY3RvclNvdXJjZSB8IG51bGw+KG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IG5ldyBWZWN0b3JTb3VyY2UoKTtcbiAgICAgICAgICAgIHNldFZlY3RvclNvdXJjZShzb3VyY2UpO1xuICAgICAgICAgICAgY29uc3QgdmVjdG9yTGF5ZXIgPSBuZXcgVmVjdG9yTGF5ZXIoe1xuICAgICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBuZXcgU3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICBpbWFnZTogbmV3IENpcmNsZVN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogNixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IG5ldyBGaWxsKHsgY29sb3I6IFwiYmx1ZVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgU3Ryb2tlKHsgY29sb3I6IFwid2hpdGVcIiwgd2lkdGg6IDIgfSksXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogXCJtYXBcIixcbiAgICAgICAgICAgICAgICBsYXllcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRpbGVMYXllcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG5ldyBYWVooe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3RpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHZlY3RvckxheWVyLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgdmlldzogbmV3IFZpZXcoe1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFswLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMixcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBtYXAuc2V0VGFyZ2V0KHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgbG9uTGF0Lmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIHZlY3RvclNvdXJjZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gbmV3IFBvaW50KGZyb21Mb25MYXQobG9uTGF0KSk7XG4gICAgICAgICAgICBjb25zdCBmZWF0dXJlID0gbmV3IEZlYXR1cmUoe1xuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiBwb2ludCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2ZWN0b3JTb3VyY2UuY2xlYXIoKTtcbiAgICAgICAgICAgIHZlY3RvclNvdXJjZS5hZGRGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgfSwgW2xvbkxhdCwgdmVjdG9yU291cmNlXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBcImdlb2xvY2F0aW9uXCIgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhleVwiKTtcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHNldExvbkxhdChbXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVNb3ZlID0gKCkgPT4ge1xuICAgICAgICBzZXRMb25MYXQoW2xvbkxhdFswXSArIDAuMDUsIGxvbkxhdFsxXSArIDAuMDVdKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZCByZWRcIiB9fSBvbkNsaWNrPXtoYW5kbGVNb3ZlfT5cbiAgICAgICAgICAgICAgICBTZSBtZXhlclxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxkaXY+TGF0OiB7bG9uTGF0WzBdfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5Mb25nOiB7bG9uTGF0WzFdfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cIm1hcFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjgwdmhcIiB9fSAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3BlbkxheWVyc01hcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWFwIiwiVmlldyIsIlRpbGVMYXllciIsIlhZWiIsIkZlYXR1cmUiLCJQb2ludCIsImZyb21Mb25MYXQiLCJWZWN0b3JMYXllciIsIlZlY3RvclNvdXJjZSIsIkNpcmNsZSIsIkNpcmNsZVN0eWxlIiwiRmlsbCIsIlN0cm9rZSIsIlN0eWxlIiwiT3BlbkxheWVyc01hcCIsImxvbkxhdCIsInNldExvbkxhdCIsInZlY3RvclNvdXJjZSIsInNldFZlY3RvclNvdXJjZSIsInNvdXJjZSIsInZlY3RvckxheWVyIiwic3R5bGUiLCJpbWFnZSIsInJhZGl1cyIsImZpbGwiLCJjb2xvciIsInN0cm9rZSIsIndpZHRoIiwibWFwIiwidGFyZ2V0IiwibGF5ZXJzIiwidXJsIiwidmlldyIsImNlbnRlciIsInpvb20iLCJzZXRUYXJnZXQiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJwb2ludCIsImZlYXR1cmUiLCJnZW9tZXRyeSIsImNsZWFyIiwiYWRkRmVhdHVyZSIsIm5hdmlnYXRvciIsImNvbnNvbGUiLCJsb2ciLCJnZW9sb2NhdGlvbiIsIndhdGNoUG9zaXRpb24iLCJwb3NpdGlvbiIsImNvb3JkcyIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiaGFuZGxlTW92ZSIsImJ1dHRvbiIsImJvcmRlciIsIm9uQ2xpY2siLCJkaXYiLCJpZCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/OpenLayersMap/index.tsx\n"));

/***/ })

});