// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mainScss = require("../sass/main.scss");
var _controller = require("./modules/controller");
var _controllerDefault = parcelHelpers.interopDefault(_controller);
function init() {
    (0, _controllerDefault.default)();
}
init();

},{"../sass/main.scss":"5Izhf","./modules/controller":"l3lnG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Izhf":[function() {},{}],"l3lnG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _model = require("./model");
var _modelDefault = parcelHelpers.interopDefault(_model);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
async function appController() {
    try {
        // call the Wufoo Data
        await (0, _modelDefault.default).theData();
        // Show the Data
        (0, _viewDefault.default).showForm((0, _modelDefault.default).formData);
        (0, _viewDefault.default).showResponses((0, _modelDefault.default).formData.entries);
        // handle submit
        (0, _viewDefault.default).onSubmit((0, _modelDefault.default).formData, (0, _modelDefault.default).submitData);
    } catch (err) {
        console.error(err);
    }
}
exports.default = appController;

},{"./model":"8PI2T","./View":"byZDR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8PI2T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilities = require("./utilities");
class Model {
    formData = {
        total: 0,
        length: 0
    };
    constructor(){}
    theData = async function() {
        try {
            const data = await (0, _utilities.makeRequest)();
            this.formData.form = data.Forms[0];
            const fields = await (0, _utilities.makeRequest)("fields");
            this.formData.fields = fields.Fields;
            const entries = await (0, _utilities.makeRequest)("entries");
            this.formData.entries = entries.Entries;
            this.sumDollars(this.formData.entries);
        } catch (err) {
            throw new Error(err);
        }
    };
    sumDollars(entries) {
        let sum = 0;
        entries.forEach((el)=>{
            switch(el.Field11){
                case "monthly":
                    sum += Number(el.Field522) * 12;
                    break;
                case "weekly":
                    sum += Number(el.Field522) * 52;
                default:
                    sum += Number(el.Field522);
            }
            this.formData.total = sum;
        });
    }
    submitData = async function(data) {
        const postData = {
            Field1: data[0],
            Field2: data[1],
            Field9: data[2],
            Field419: data[3],
            Field527: data[5],
            Field528: data[6],
            Field522: data[7].giving,
            Field11: data[7].freq
        };
        try {
            const res = await (0, _utilities.makeRequest)("entries", "POST", postData);
            if (res.Success === 0 || res.Success === 1 && res.ErrorText) throw new Error(res.ErrorText);
        } catch (err) {
            console.error(err);
            alert("Oops. Something went wrong.");
        }
    };
}
exports.default = new Model();

},{"./utilities":"5HnRK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5HnRK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Shorthand for Query Selector Function.
 * @param selector {string} CSS Selector. Must include class ('.') marker if needed
 * @param  [all] {boolean} optional to call querySelectorAll.
 * @return {Element} HTML Element
 * */ parcelHelpers.export(exports, "select", ()=>select);
/**
 * Makes AJAX request.
 * @param {string} endpoint accepts 'entries', 'fields' or false to simply GET the form.
 * @param {object} theData Data to POST
 * @param {boolean} returnAll if `true`, returns an Array, else only return the `data`
 * @returns {Array|Object} `data` object or an Array containing [AJAX `res`ponse, The `data`, The `method`]
 */ parcelHelpers.export(exports, "makeRequest", ()=>makeRequest);
function select(selector, all = false) {
    return all === false ? document.querySelector(selector) : document.querySelectorAll(selector);
}
const API_URL = `https://firstchurchcarrollton.wufoo.com/api/v3/forms`;
const FORM_ID = "rt2tdqd0lcp3yx";
async function makeRequest(endpoint = false, method = false, theData = false, returnAll = false) {
    try {
        const config = {
            headers: {
                Authorization: `Basic ${window.btoa("OEC5-G60N-KHXP-YGQR:footastic")}`
            },
            method: `GET`,
            timeout: 5000
        };
        if (theData) config.body = new URLSearchParams(theData);
        let url;
        switch(endpoint){
            case "entries":
                url = `${API_URL}/${FORM_ID}/entries.json/`;
                break;
            case "fields":
                url = `${API_URL}/${FORM_ID}/fields.json/`;
                break;
            default:
                url = `${API_URL}/${FORM_ID}.json/`;
        }
        if (method) config.method = method;
        const res = await fetch(url, config);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return returnAll ? [
            res,
            data,
            method
        ] : data;
    } catch (error) {
        console.error(error);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"byZDR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formMarkup = require("./formMarkup");
var _formMarkupDefault = parcelHelpers.interopDefault(_formMarkup);
var _utilities = require("./utilities");
class View {
    form = (0, _utilities.select)(".commitmentForm");
    goalsText = (0, _utilities.select)(".goals__display--text");
    allInputs = [];
    responseContainer = (0, _utilities.select)(".responses");
    entries = {
        time: [],
        talent: []
    };
    constructor(){
        this.renderSpinner(this.form);
    }
    renderSpinner(el) {
        el.innerHTML = `<div class="lds-dual-ring"></div>`;
    }
    showForm(formData) {
        this.form.innerHTML = (0, _formMarkupDefault.default)(formData);
        this.#displayPledgeDollars(formData.total, formData.entries.length);
        this.#handleActiveClass();
    }
    showResponses(responses) {
        this.#getResponses(responses);
        this.responseContainer.innerHTML = "";
        const allResponses = [];
        this.entries.time.forEach((el)=>allResponses.push(el));
        this.entries.talent.forEach((el)=>allResponses.push(el));
        if (allResponses.length === 0) return;
        setInterval(()=>{
            const entry = this.#getRandomResponse(allResponses);
            let response = `<div class="response"><p class="response__text">"${allResponses[entry]}"</p></div>`;
            this.responseContainer.innerHTML = response;
        }, 3000);
    }
     #getResponses(responses) {
        responses.forEach((entry)=>{
            const time = entry.Field527;
            const talent = entry.Field528;
            if (time.length > 0) this.entries.time.push(time);
            if (talent.length > 0) this.entries.talent.push(talent);
        });
    }
     #getRandomResponse(all) {
        const max = all.length;
        return Math.floor(Math.random() * max);
    }
    /** Toggles '.active' CSS class to highlight which fields are being edited. */  #handleActiveClass() {
        const inputs = (0, _utilities.select)("form input", true);
        const textAreas = (0, _utilities.select)("form textarea", true);
        inputs.forEach((el)=>this.allInputs.push(el));
        textAreas.forEach((el)=>this.allInputs.push(el));
        this.allInputs.forEach((el)=>{
            el.addEventListener("focusin", (ev)=>{
                if (!el.closest(".section").classList.contains("active")) el.closest(".section").classList.add("active");
            });
            el.addEventListener("focusout", (ev)=>{
                if (el.closest(".section").classList.contains("active")) el.closest(".section").classList.remove("active");
            });
        });
    }
    /** Updates the text output below the progress bar
	 * @param {number} total the total amount of dollars donated as Number (will be localized)
	 * @param {number} length the total number of entries
	 */  #displayPledgeDollars(total, length) {
        if (length > 0) {
            this.goalsText.innerHTML = `${total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })} pledged by ${length} ${length > 1 ? "households" : "household"}`;
            this.#updateProgress(length);
        } else this.goalsText.innerHTML = `Looks like you're the first to fill this form out. Nice!`;
    }
    /** Updates progress bar based on number of entries received
	 * @param {number} entries the number of entries.
	 */  #updateProgress(entries) {
        const toGoal = entries / 200 * 100;
        const barFill = document.getElementById("myBar");
        const count = (0, _utilities.select)(".goals__progress--counter");
        if (entries >= 200) {
            barFill.style.width = "100%";
            count.innerHTML = `We've hit our goal!`;
        }
        if (entries < 200) {
            barFill.style.width = toGoal <= 10 ? "10%" : `${toGoal}%`;
            count.innerHTML = `${toGoal}%`;
        }
    }
     #getPledgeDollars(formData) {
        const dollars = document.getElementById("dollars").value, frequency = document.getElementById("frequency"), freqVal = frequency.value, freqText = frequency.options[frequency.selectedIndex].text;
        const pledge = {
            giving: dollars,
            freq: freqText.toLowerCase()
        };
        const newTotal = formData.total + Number(dollars) * Number(freqVal);
        this.#displayPledgeDollars(newTotal, formData.entries.length + 1);
        return pledge;
    }
    onSubmit(formData, handler) {
        const string = formData.form.RedirectMessage;
        const message = `<div id="thanks"><h2>${string}</h2></div>`;
        this.form.addEventListener("submit", (ev)=>{
            ev.preventDefault();
            const data = this.allInputs.map((el)=>el.value);
            data.push(this.#getPledgeDollars(formData));
            handler(data);
            this.form.style.border = "none";
            this.form.innerHTML = message;
        });
    }
}
exports.default = new View();

},{"./formMarkup":"kVTVZ","./utilities":"5HnRK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kVTVZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function formMarkup(formData) {
    const markup = `
            <form>
                <div class="section contact-info">
                    <div class="contact-info__fields">
                        <h3 class="contact-info__header">Your Name</h3>
                        <div class="contact-info__fields--first">
                            <label for="first">First Name</label>
                            <input required type="text" name="first" id="">
                        </div>
                        <div class="contact-info__fields--second">
                            <label for="last">Last Name</label>
                            <input required type="text" name="last" id="">
                        </div>
                    </div>
                    <div class="contact-info__fields">
                        <h3 class="contact-info__header">Contact Info</h3>
                        <div class="contact-info__fields--first">
                            <label for="email">Email</label>
                            <input required type="email" name="email" id="">
                        </div>
                        <div class="contact-info__fields--second">
                            <label for="cell">Phone</label>
                            <input required type="tel" name="phone" id="phone" inputtype="numeric" >
                        </div>
                    </div>
                </div>
                <div class="section time">
                    <div class="section-header">
                        <h2 class="section-header__headline">Time</h2>
                        <span class="section-header__description">${formData.fields[4].Title}</span>
                    </div>
                    <div class="time__fields">
                        <label for="time-field">Your response</label>
                        <textarea placeholder="&#34;In 2023, I commit to attending worship more often...&#34;&#10;&#34;I&#39;m committing to attend more events...&#34;" name="time-field" id="time-field" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="section talent">
                    <div class="section-header">
                        <h2 class="section-header__headline">talent</h2>
                        <span class="section-header__description">${formData.fields[5].Title}</span>
                    </div>
                    <div class="talent__fields">
                        <label for="talent-field">Your response</label>
                        <textarea name="talent-field" id="talent-field" placeholder="&#34;In 2023, I commit to using my gift of [blank] in ministry...&#34;&#10;&#34;I&#39;d like to grow my talents by volunteering with...&#34;" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="section treasure">
                    <div class="section-header">
                        <h2 class="section-header__headline">treasure</h2>
                    </div>
                    <div class="treasure__fields">
                        <div class="treasure__fields--giving">
                            <label for="dollars">${formData.fields[6].Title}</label>
                            <input type="number" name="dollars" id="dollars" placeholder="85.50" step="0.01">
                        </div>
                        <div class="treasure__fields--frequency">
                            <label for="frequency">Frequency</label>
                            <select name="frequency" id="frequency">
                                <option value="1">One-Time</option>
                                <option value="52">Weekly</option>
                                <option selected value="12">Monthly</option>
                                <option value="1">Annually</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button type="submit" id="submit">Submit</button>
                </form>
                `;
    return markup;
}
exports.default = formMarkup;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire6cc0")

//# sourceMappingURL=index.975ef6c8.js.map
