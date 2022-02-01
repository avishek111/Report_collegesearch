/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-details-inputtypes-objectfit-touchevents-addtest-prefixes-setclasses-teststyles !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function i() {
        var e, t, n, i, o, s, a;
        for (var l in _)
            if (_.hasOwnProperty(l)) {
                if (e = [], t = _[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (i = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) s = e[o], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = i : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = i), C.push((i ? "" : "no-") + a.join("-"))
            }
    }

    function o(e) {
        var t = x.className,
            n = Modernizr._config.classPrefix || "";
        if (T && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), T ? x.className.baseVal = t : x.className = t)
    }

    function s(e, t) {
        if ("object" == typeof e)
            for (var n in e) S(e, n) && s(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                i = Modernizr[r[0]];
            if (2 == r.length && (i = i[r[1]]), "undefined" != typeof i) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), o([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
        }
        return Modernizr
    }

    function a() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : T ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function l() {
        var e = t.body;
        return e || (e = a(T ? "svg" : "body"), e.fake = !0), e
    }

    function u(e, n, r, i) {
        var o, s, u, f, c = "modernizr",
            d = a("div"),
            p = l();
        if (parseInt(r, 10))
            for (; r--;) u = a("div"), u.id = i ? i[r] : c + (r + 1), d.appendChild(u);
        return o = a("style"), o.type = "text/css", o.id = "s" + c, (p.fake ? p : d).appendChild(o), p.appendChild(d), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = x.style.overflow, x.style.overflow = "hidden", x.appendChild(p)), s = n(d, e), p.fake ? (p.parentNode.removeChild(p), x.style.overflow = f, x.offsetHeight) : d.parentNode.removeChild(d), !!s
    }

    function f(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function c(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function d(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function p(e, t, n) {
        var i;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (i = t[e[o]], r(i, "function") ? d(i, n || t) : i);
        return !1
    }

    function m(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function h(t, n, r) {
        var i;
        if ("getComputedStyle" in e) {
            i = getComputedStyle.call(e, t, n);
            var o = e.console;
            if (null !== i) r && (i = i.getPropertyValue(r));
            else if (o) {
                var s = o.error ? "error" : "log";
                o[s].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else i = !n && t.currentStyle && t.currentStyle[r];
        return i
    }

    function y(t, r) {
        var i = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; i--;)
                if (e.CSS.supports(m(t[i]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; i--;) o.push("(" + m(t[i]) + ":" + r + ")");
            return o = o.join(" or "), u("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == h(e, null, "position")
            })
        }
        return n
    }

    function v(e, t, i, o) {
        function s() {
            u && (delete V.style, delete V.modElem)
        }
        if (o = r(o, "undefined") ? !1 : o, !r(i, "undefined")) {
            var l = y(e, i);
            if (!r(l, "undefined")) return l
        }
        for (var u, d, p, m, h, v = ["modernizr", "tspan", "samp"]; !V.style && v.length;) u = !0, V.modElem = a(v.shift()), V.style = V.modElem.style;
        for (p = e.length, d = 0; p > d; d++)
            if (m = e[d], h = V.style[m], c(m, "-") && (m = f(m)), V.style[m] !== n) {
                if (o || r(i, "undefined")) return s(), "pfx" == t ? m : !0;
                try {
                    V.style[m] = i
                } catch (g) {}
                if (V.style[m] != h) return s(), "pfx" == t ? m : !0
            }
        return s(), !1
    }

    function g(e, t, n, i, o) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + L.join(s + " ") + s).split(" ");
        return r(t, "string") || r(t, "undefined") ? v(a, t, i, o) : (a = (e + " " + A.join(s + " ") + s).split(" "), p(a, t, n))
    }
    var C = [],
        _ = [],
        b = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                _.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                _.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = b, Modernizr = new Modernizr;
    var w = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    b._prefixes = w;
    var S, x = t.documentElement,
        T = "svg" === x.nodeName.toLowerCase();
    ! function() {
        var e = {}.hasOwnProperty;
        S = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function(t, n) {
            return e.call(t, n)
        }
    }(), b._l = {}, b.on = function(e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, b._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, r;
                for (e = 0; e < n.length; e++)(r = n[e])(t)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function() {
        b.addTest = s
    });
    var j = a("input"),
        z = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        k = {};
    Modernizr.inputtypes = function(e) {
        for (var r, i, o, s = e.length, a = "1)", l = 0; s > l; l++) j.setAttribute("type", r = e[l]), o = "text" !== j.type && "style" in j, o && (j.value = a, j.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && j.style.WebkitAppearance !== n ? (x.appendChild(j), i = t.defaultView, o = i.getComputedStyle && "textfield" !== i.getComputedStyle(j, null).WebkitAppearance && 0 !== j.offsetHeight, x.removeChild(j)) : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? j.checkValidity && j.checkValidity() === !1 : j.value != a)), k[e[l]] = !!o;
        return k
    }(z);
    var P = b.testStyles = u;
    Modernizr.addTest("touchevents", function() {
        var n;
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
        else {
            var r = ["@media (", w.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            P(r, function(e) {
                n = 9 === e.offsetTop
            })
        }
        return n
    }), Modernizr.addTest("details", function() {
        var e, t = a("details");
        return "open" in t ? (P("#modernizr details{display:block}", function(n) {
            n.appendChild(t), t.innerHTML = "<summary>a</summary>b", e = t.offsetHeight, t.open = !0, e = e != t.offsetHeight
        }), e) : !1
    });
    var E = "Moz O ms Webkit",
        L = b._config.usePrefixes ? E.split(" ") : [];
    b._cssomPrefixes = L;
    var N = function(t) {
        var r, i = w.length,
            o = e.CSSRule;
        if ("undefined" == typeof o) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + t;
        for (var s = 0; i > s; s++) {
            var a = w[s],
                l = a.toUpperCase() + "_" + r;
            if (l in o) return "@-" + a.toLowerCase() + "-" + t
        }
        return !1
    };
    b.atRule = N;
    var A = b._config.usePrefixes ? E.toLowerCase().split(" ") : [];
    b._domPrefixes = A;
    var O = {
        elem: a("modernizr")
    };
    Modernizr._q.push(function() {
        delete O.elem
    });
    var V = {
        style: O.elem.style
    };
    Modernizr._q.unshift(function() {
        delete V.style
    }), b.testAllProps = g;
    var q = b.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? N(e) : (-1 != e.indexOf("-") && (e = f(e)), t ? g(e, t, n) : g(e, "pfx"))
    };
    Modernizr.addTest("objectfit", !!q("objectFit"), {
        aliases: ["object-fit"]
    }), i(), o(C), delete b.addTest, delete b.addAsyncTest;
    for (var R = 0; R < Modernizr._q.length; R++) Modernizr._q[R]();
    e.Modernizr = Modernizr
}(window, document);;
if ('objectFit' in document.documentElement.style === true) {
    document.documentElement.classList.add('object-fit');
} else {
    document.documentElement.classList.add('no-object-fit');
};