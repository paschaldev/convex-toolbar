"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  Toolbar: () => Toolbar
});
module.exports = __toCommonJS(index_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var Toolbar = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "fixed bottom-0 left-0 right-0 h-64 bg-background border-t border-border flex text-foreground font-sans", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1/2 border-r border-border p-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "text-sm font-bold mb-2", children: "Function Input" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1/2 p-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "text-sm font-bold mb-2", children: "Output" }) })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Toolbar
});
