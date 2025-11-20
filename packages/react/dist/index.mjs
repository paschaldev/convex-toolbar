// src/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Toolbar = () => {
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-0 left-0 right-0 h-64 bg-background border-t border-border flex text-foreground font-sans", children: [
    /* @__PURE__ */ jsx("div", { className: "w-1/2 border-r border-border p-4", children: /* @__PURE__ */ jsx("h2", { className: "text-sm font-bold mb-2", children: "Function Input" }) }),
    /* @__PURE__ */ jsx("div", { className: "w-1/2 p-4", children: /* @__PURE__ */ jsx("h2", { className: "text-sm font-bold mb-2", children: "Output" }) })
  ] });
};
export {
  Toolbar
};
