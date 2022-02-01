/*!jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license*/ ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        x = function(e) {
            return null != e && e === e.window
        },
        E = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.5.1",
        S = function(e, t) {
            return new S.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function(e, t) {
                return e === t && (l = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != C && T(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, S.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return S.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(S(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) {
            return S.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return S.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
        return !0
    }

    function Ee() {
        return !1
    }

    function Se(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }

    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Ae(this, e, Se), !1
            },
            trigger: function() {
                return Ae(this, e), !0
            },
            delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }

    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                else Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        We = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Fe = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function $e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"],
        ze = E.createElement("div").style,
        Ue = {};

    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
            while (n--)
                if ((e = _e[n] + t) in ze) return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Ie(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Ge.test(t),
                    l = e.style;
                if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() {
                    return Ze(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Ie(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Je)
    }), S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = et.prototype.init, S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick())
    }

    function ut() {
        return C.setTimeout(function() {
            tt = void 0
        }), tt = Date.now()
    }

    function lt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ft(o, e, t) {
        var n, a, r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], ot.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && le([e], !0), p.done(function() {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
                })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() {
                    var e = ft(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function() {
        nt || (nt = !0, st())
    }, S.fx.stop = function() {
        nt = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), pt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function vt(e) {
        return (e.match(P) || []).join(" ")
    }

    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).addClass(t.call(this, e, yt(this)))
            });
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).removeClass(t.call(this, e, yt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = mt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var Tt = C.location,
        Ct = {
            guid: Date.now()
        },
        Et = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
    };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function(e, t) {
            r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Dt(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");

    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Bt(t, i, o, a) {
        var s = {},
            u = t === Mt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function $t(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Wt.href = Tt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var _t = {
            0: 200,
            1223: 204
        },
        zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, function(e, t) {
            if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Yt = C.jQuery,
        Qt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});;
(function() {
    var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
    window.drupalSettings = {};
    if (settingsElement !== null) {
        window.drupalSettings = JSON.parse(settingsElement.textContent);
    }
})();;
window.Drupal = {
    behaviors: {},
    locale: {}
};
(function(Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
    Drupal.throwError = function(error) {
        setTimeout(function() {
            throw error;
        }, 0);
    };
    Drupal.attachBehaviors = function(context, settings) {
        context = context || document;
        settings = settings || drupalSettings;
        var behaviors = Drupal.behaviors;
        Object.keys(behaviors || {}).forEach(function(i) {
            if (typeof behaviors[i].attach === 'function') {
                try {
                    behaviors[i].attach(context, settings);
                } catch (e) {
                    Drupal.throwError(e);
                }
            }
        });
    };
    Drupal.detachBehaviors = function(context, settings, trigger) {
        context = context || document;
        settings = settings || drupalSettings;
        trigger = trigger || 'unload';
        var behaviors = Drupal.behaviors;
        Object.keys(behaviors || {}).forEach(function(i) {
            if (typeof behaviors[i].detach === 'function') {
                try {
                    behaviors[i].detach(context, settings, trigger);
                } catch (e) {
                    Drupal.throwError(e);
                }
            }
        });
    };
    Drupal.checkPlain = function(str) {
        str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        return str;
    };
    Drupal.formatString = function(str, args) {
        var processedArgs = {};
        Object.keys(args || {}).forEach(function(key) {
            switch (key.charAt(0)) {
                case '@':
                    processedArgs[key] = Drupal.checkPlain(args[key]);
                    break;
                case '!':
                    processedArgs[key] = args[key];
                    break;
                default:
                    processedArgs[key] = Drupal.theme('placeholder', args[key]);
                    break;
            }
        });
        return Drupal.stringReplace(str, processedArgs, null);
    };
    Drupal.stringReplace = function(str, args, keys) {
        if (str.length === 0) {
            return str;
        }
        if (!Array.isArray(keys)) {
            keys = Object.keys(args || {});
            keys.sort(function(a, b) {
                return a.length - b.length;
            });
        }
        if (keys.length === 0) {
            return str;
        }
        var key = keys.pop();
        var fragments = str.split(key);
        if (keys.length) {
            for (var i = 0; i < fragments.length; i++) {
                fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
            }
        }
        return fragments.join(args[key]);
    };
    Drupal.t = function(str, args, options) {
        options = options || {};
        options.context = options.context || '';
        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
            str = drupalTranslations.strings[options.context][str];
        }
        if (args) {
            str = Drupal.formatString(str, args);
        }
        return str;
    };
    Drupal.url = function(path) {
        return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
    };
    Drupal.url.toAbsolute = function(url) {
        var urlParsingNode = document.createElement('a');
        try {
            url = decodeURIComponent(url);
        } catch (e) {}
        urlParsingNode.setAttribute('href', url);
        return urlParsingNode.cloneNode(false).href;
    };
    Drupal.url.isLocal = function(url) {
        var absoluteUrl = Drupal.url.toAbsolute(url);
        var protocol = window.location.protocol;
        if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
            protocol = 'https:';
        }
        var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);
        try {
            absoluteUrl = decodeURIComponent(absoluteUrl);
        } catch (e) {}
        try {
            baseUrl = decodeURIComponent(baseUrl);
        } catch (e) {}
        return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
    };
    Drupal.formatPlural = function(count, singular, plural, args, options) {
        args = args || {};
        args['@count'] = count;
        var pluralDelimiter = drupalSettings.pluralDelimiter;
        var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
        var index = 0;
        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
            index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
        } else if (args['@count'] !== 1) {
            index = 1;
        }
        return translations[index];
    };
    Drupal.encodePath = function(item) {
        return window.encodeURIComponent(item).replace(/%2F/g, '/');
    };
    Drupal.deprecationError = function(_ref) {
        var message = _ref.message;
        if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
            console.warn('[Deprecation] ' + message);
        }
    };
    Drupal.deprecatedProperty = function(_ref2) {
        var target = _ref2.target,
            deprecatedProperty = _ref2.deprecatedProperty,
            message = _ref2.message;
        if (!Proxy || !Reflect) {
            return target;
        }
        return new Proxy(target, {
            get: function get(target, key) {
                for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    rest[_key - 2] = arguments[_key];
                }
                if (key === deprecatedProperty) {
                    Drupal.deprecationError({
                        message: message
                    });
                }
                return Reflect.get.apply(Reflect, [target, key].concat(rest));
            }
        });
    };
    Drupal.theme = function(func) {
        if (func in Drupal.theme) {
            var _Drupal$theme;
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }
            return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
        }
    };
    Drupal.theme.placeholder = function(str) {
        return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
    };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
if (window.jQuery) {
    jQuery.noConflict();
}
document.documentElement.className += ' js';
(function(Drupal, drupalSettings) {
    var domReady = function domReady(callback) {
        if (document.readyState !== 'loading') {
            callback();
        } else {
            var listener = function listener() {
                callback();
                document.removeEventListener('DOMContentLoaded', listener);
            };
            document.addEventListener('DOMContentLoaded', listener);
        }
    };
    domReady(function() {
        Drupal.attachBehaviors(document, drupalSettings);
    });
})(Drupal, window.drupalSettings);;
! function() {
    var n = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || this || {},
        r = n._,
        e = Array.prototype,
        o = Object.prototype,
        s = "undefined" != typeof Symbol ? Symbol.prototype : null,
        u = e.push,
        c = e.slice,
        p = o.toString,
        i = o.hasOwnProperty,
        t = Array.isArray,
        a = Object.keys,
        l = Object.create,
        f = function() {},
        h = function(n) {
            return n instanceof h ? n : this instanceof h ? void(this._wrapped = n) : new h(n)
        };
    "undefined" == typeof exports || exports.nodeType ? n._ = h : ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = h), exports._ = h), h.VERSION = "1.9.1";
    var v, y = function(u, i, n) {
            if (void 0 === i) return u;
            switch (null == n ? 3 : n) {
                case 1:
                    return function(n) {
                        return u.call(i, n)
                    };
                case 3:
                    return function(n, r, t) {
                        return u.call(i, n, r, t)
                    };
                case 4:
                    return function(n, r, t, e) {
                        return u.call(i, n, r, t, e)
                    }
            }
            return function() {
                return u.apply(i, arguments)
            }
        },
        d = function(n, r, t) {
            return h.iteratee !== v ? h.iteratee(n, r) : null == n ? h.identity : h.isFunction(n) ? y(n, r, t) : h.isObject(n) && !h.isArray(n) ? h.matcher(n) : h.property(n)
        };
    h.iteratee = v = function(n, r) {
        return d(n, r, 1 / 0)
    };
    var g = function(u, i) {
            return i = null == i ? u.length - 1 : +i,
                function() {
                    for (var n = Math.max(arguments.length - i, 0), r = Array(n), t = 0; t < n; t++) r[t] = arguments[t + i];
                    switch (i) {
                        case 0:
                            return u.call(this, r);
                        case 1:
                            return u.call(this, arguments[0], r);
                        case 2:
                            return u.call(this, arguments[0], arguments[1], r)
                    }
                    var e = Array(i + 1);
                    for (t = 0; t < i; t++) e[t] = arguments[t];
                    return e[i] = r, u.apply(this, e)
                }
        },
        m = function(n) {
            if (!h.isObject(n)) return {};
            if (l) return l(n);
            f.prototype = n;
            var r = new f;
            return f.prototype = null, r
        },
        b = function(r) {
            return function(n) {
                return null == n ? void 0 : n[r]
            }
        },
        j = function(n, r) {
            return null != n && i.call(n, r)
        },
        x = function(n, r) {
            for (var t = r.length, e = 0; e < t; e++) {
                if (null == n) return;
                n = n[r[e]]
            }
            return t ? n : void 0
        },
        _ = Math.pow(2, 53) - 1,
        A = b("length"),
        w = function(n) {
            var r = A(n);
            return "number" == typeof r && 0 <= r && r <= _
        };
    h.each = h.forEach = function(n, r, t) {
        var e, u;
        if (r = y(r, t), w(n))
            for (e = 0, u = n.length; e < u; e++) r(n[e], e, n);
        else {
            var i = h.keys(n);
            for (e = 0, u = i.length; e < u; e++) r(n[i[e]], i[e], n)
        }
        return n
    }, h.map = h.collect = function(n, r, t) {
        r = d(r, t);
        for (var e = !w(n) && h.keys(n), u = (e || n).length, i = Array(u), o = 0; o < u; o++) {
            var a = e ? e[o] : o;
            i[o] = r(n[a], a, n)
        }
        return i
    };
    var O = function(c) {
        return function(n, r, t, e) {
            var u = 3 <= arguments.length;
            return function(n, r, t, e) {
                var u = !w(n) && h.keys(n),
                    i = (u || n).length,
                    o = 0 < c ? 0 : i - 1;
                for (e || (t = n[u ? u[o] : o], o += c); 0 <= o && o < i; o += c) {
                    var a = u ? u[o] : o;
                    t = r(t, n[a], a, n)
                }
                return t
            }(n, y(r, e, 4), t, u)
        }
    };
    h.reduce = h.foldl = h.inject = O(1), h.reduceRight = h.foldr = O(-1), h.find = h.detect = function(n, r, t) {
        var e = (w(n) ? h.findIndex : h.findKey)(n, r, t);
        if (void 0 !== e && -1 !== e) return n[e]
    }, h.filter = h.select = function(n, e, r) {
        var u = [];
        return e = d(e, r), h.each(n, function(n, r, t) {
            e(n, r, t) && u.push(n)
        }), u
    }, h.reject = function(n, r, t) {
        return h.filter(n, h.negate(d(r)), t)
    }, h.every = h.all = function(n, r, t) {
        r = d(r, t);
        for (var e = !w(n) && h.keys(n), u = (e || n).length, i = 0; i < u; i++) {
            var o = e ? e[i] : i;
            if (!r(n[o], o, n)) return !1
        }
        return !0
    }, h.some = h.any = function(n, r, t) {
        r = d(r, t);
        for (var e = !w(n) && h.keys(n), u = (e || n).length, i = 0; i < u; i++) {
            var o = e ? e[i] : i;
            if (r(n[o], o, n)) return !0
        }
        return !1
    }, h.contains = h.includes = h.include = function(n, r, t, e) {
        return w(n) || (n = h.values(n)), ("number" != typeof t || e) && (t = 0), 0 <= h.indexOf(n, r, t)
    }, h.invoke = g(function(n, t, e) {
        var u, i;
        return h.isFunction(t) ? i = t : h.isArray(t) && (u = t.slice(0, -1), t = t[t.length - 1]), h.map(n, function(n) {
            var r = i;
            if (!r) {
                if (u && u.length && (n = x(n, u)), null == n) return;
                r = n[t]
            }
            return null == r ? r : r.apply(n, e)
        })
    }), h.pluck = function(n, r) {
        return h.map(n, h.property(r))
    }, h.where = function(n, r) {
        return h.filter(n, h.matcher(r))
    }, h.findWhere = function(n, r) {
        return h.find(n, h.matcher(r))
    }, h.max = function(n, e, r) {
        var t, u, i = -1 / 0,
            o = -1 / 0;
        if (null == e || "number" == typeof e && "object" != typeof n[0] && null != n)
            for (var a = 0, c = (n = w(n) ? n : h.values(n)).length; a < c; a++) null != (t = n[a]) && i < t && (i = t);
        else e = d(e, r), h.each(n, function(n, r, t) {
            u = e(n, r, t), (o < u || u === -1 / 0 && i === -1 / 0) && (i = n, o = u)
        });
        return i
    }, h.min = function(n, e, r) {
        var t, u, i = 1 / 0,
            o = 1 / 0;
        if (null == e || "number" == typeof e && "object" != typeof n[0] && null != n)
            for (var a = 0, c = (n = w(n) ? n : h.values(n)).length; a < c; a++) null != (t = n[a]) && t < i && (i = t);
        else e = d(e, r), h.each(n, function(n, r, t) {
            ((u = e(n, r, t)) < o || u === 1 / 0 && i === 1 / 0) && (i = n, o = u)
        });
        return i
    }, h.shuffle = function(n) {
        return h.sample(n, 1 / 0)
    }, h.sample = function(n, r, t) {
        if (null == r || t) return w(n) || (n = h.values(n)), n[h.random(n.length - 1)];
        var e = w(n) ? h.clone(n) : h.values(n),
            u = A(e);
        r = Math.max(Math.min(r, u), 0);
        for (var i = u - 1, o = 0; o < r; o++) {
            var a = h.random(o, i),
                c = e[o];
            e[o] = e[a], e[a] = c
        }
        return e.slice(0, r)
    }, h.sortBy = function(n, e, r) {
        var u = 0;
        return e = d(e, r), h.pluck(h.map(n, function(n, r, t) {
            return {
                value: n,
                index: u++,
                criteria: e(n, r, t)
            }
        }).sort(function(n, r) {
            var t = n.criteria,
                e = r.criteria;
            if (t !== e) {
                if (e < t || void 0 === t) return 1;
                if (t < e || void 0 === e) return -1
            }
            return n.index - r.index
        }), "value")
    };
    var k = function(o, r) {
        return function(e, u, n) {
            var i = r ? [
                [],
                []
            ] : {};
            return u = d(u, n), h.each(e, function(n, r) {
                var t = u(n, r, e);
                o(i, n, t)
            }), i
        }
    };
    h.groupBy = k(function(n, r, t) {
        j(n, t) ? n[t].push(r) : n[t] = [r]
    }), h.indexBy = k(function(n, r, t) {
        n[t] = r
    }), h.countBy = k(function(n, r, t) {
        j(n, t) ? n[t]++ : n[t] = 1
    });
    var S = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
    h.toArray = function(n) {
        return n ? h.isArray(n) ? c.call(n) : h.isString(n) ? n.match(S) : w(n) ? h.map(n, h.identity) : h.values(n) : []
    }, h.size = function(n) {
        return null == n ? 0 : w(n) ? n.length : h.keys(n).length
    }, h.partition = k(function(n, r, t) {
        n[t ? 0 : 1].push(r)
    }, !0), h.first = h.head = h.take = function(n, r, t) {
        return null == n || n.length < 1 ? null == r ? void 0 : [] : null == r || t ? n[0] : h.initial(n, n.length - r)
    }, h.initial = function(n, r, t) {
        return c.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r)))
    }, h.last = function(n, r, t) {
        return null == n || n.length < 1 ? null == r ? void 0 : [] : null == r || t ? n[n.length - 1] : h.rest(n, Math.max(0, n.length - r))
    }, h.rest = h.tail = h.drop = function(n, r, t) {
        return c.call(n, null == r || t ? 1 : r)
    }, h.compact = function(n) {
        return h.filter(n, Boolean)
    };
    var M = function(n, r, t, e) {
        for (var u = (e = e || []).length, i = 0, o = A(n); i < o; i++) {
            var a = n[i];
            if (w(a) && (h.isArray(a) || h.isArguments(a)))
                if (r)
                    for (var c = 0, l = a.length; c < l;) e[u++] = a[c++];
                else M(a, r, t, e), u = e.length;
            else t || (e[u++] = a)
        }
        return e
    };
    h.flatten = function(n, r) {
        return M(n, r, !1)
    }, h.without = g(function(n, r) {
        return h.difference(n, r)
    }), h.uniq = h.unique = function(n, r, t, e) {
        h.isBoolean(r) || (e = t, t = r, r = !1), null != t && (t = d(t, e));
        for (var u = [], i = [], o = 0, a = A(n); o < a; o++) {
            var c = n[o],
                l = t ? t(c, o, n) : c;
            r && !t ? (o && i === l || u.push(c), i = l) : t ? h.contains(i, l) || (i.push(l), u.push(c)) : h.contains(u, c) || u.push(c)
        }
        return u
    }, h.union = g(function(n) {
        return h.uniq(M(n, !0, !0))
    }), h.intersection = function(n) {
        for (var r = [], t = arguments.length, e = 0, u = A(n); e < u; e++) {
            var i = n[e];
            if (!h.contains(r, i)) {
                var o;
                for (o = 1; o < t && h.contains(arguments[o], i); o++);
                o === t && r.push(i)
            }
        }
        return r
    }, h.difference = g(function(n, r) {
        return r = M(r, !0, !0), h.filter(n, function(n) {
            return !h.contains(r, n)
        })
    }), h.unzip = function(n) {
        for (var r = n && h.max(n, A).length || 0, t = Array(r), e = 0; e < r; e++) t[e] = h.pluck(n, e);
        return t
    }, h.zip = g(h.unzip), h.object = function(n, r) {
        for (var t = {}, e = 0, u = A(n); e < u; e++) r ? t[n[e]] = r[e] : t[n[e][0]] = n[e][1];
        return t
    };
    var F = function(i) {
        return function(n, r, t) {
            r = d(r, t);
            for (var e = A(n), u = 0 < i ? 0 : e - 1; 0 <= u && u < e; u += i)
                if (r(n[u], u, n)) return u;
            return -1
        }
    };
    h.findIndex = F(1), h.findLastIndex = F(-1), h.sortedIndex = function(n, r, t, e) {
        for (var u = (t = d(t, e, 1))(r), i = 0, o = A(n); i < o;) {
            var a = Math.floor((i + o) / 2);
            t(n[a]) < u ? i = a + 1 : o = a
        }
        return i
    };
    var E = function(i, o, a) {
        return function(n, r, t) {
            var e = 0,
                u = A(n);
            if ("number" == typeof t) 0 < i ? e = 0 <= t ? t : Math.max(t + u, e) : u = 0 <= t ? Math.min(t + 1, u) : t + u + 1;
            else if (a && t && u) return n[t = a(n, r)] === r ? t : -1;
            if (r != r) return 0 <= (t = o(c.call(n, e, u), h.isNaN)) ? t + e : -1;
            for (t = 0 < i ? e : u - 1; 0 <= t && t < u; t += i)
                if (n[t] === r) return t;
            return -1
        }
    };
    h.indexOf = E(1, h.findIndex, h.sortedIndex), h.lastIndexOf = E(-1, h.findLastIndex), h.range = function(n, r, t) {
        null == r && (r = n || 0, n = 0), t || (t = r < n ? -1 : 1);
        for (var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), i = 0; i < e; i++, n += t) u[i] = n;
        return u
    }, h.chunk = function(n, r) {
        if (null == r || r < 1) return [];
        for (var t = [], e = 0, u = n.length; e < u;) t.push(c.call(n, e, e += r));
        return t
    };
    var N = function(n, r, t, e, u) {
        if (!(e instanceof r)) return n.apply(t, u);
        var i = m(n.prototype),
            o = n.apply(i, u);
        return h.isObject(o) ? o : i
    };
    h.bind = g(function(r, t, e) {
        if (!h.isFunction(r)) throw new TypeError("Bind must be called on a function");
        var u = g(function(n) {
            return N(r, u, t, this, e.concat(n))
        });
        return u
    }), h.partial = g(function(u, i) {
        var o = h.partial.placeholder,
            a = function() {
                for (var n = 0, r = i.length, t = Array(r), e = 0; e < r; e++) t[e] = i[e] === o ? arguments[n++] : i[e];
                for (; n < arguments.length;) t.push(arguments[n++]);
                return N(u, a, this, this, t)
            };
        return a
    }), (h.partial.placeholder = h).bindAll = g(function(n, r) {
        var t = (r = M(r, !1, !1)).length;
        if (t < 1) throw new Error("bindAll must be passed function names");
        for (; t--;) {
            var e = r[t];
            n[e] = h.bind(n[e], n)
        }
    }), h.memoize = function(e, u) {
        var i = function(n) {
            var r = i.cache,
                t = "" + (u ? u.apply(this, arguments) : n);
            return j(r, t) || (r[t] = e.apply(this, arguments)), r[t]
        };
        return i.cache = {}, i
    }, h.delay = g(function(n, r, t) {
        return setTimeout(function() {
            return n.apply(null, t)
        }, r)
    }), h.defer = h.partial(h.delay, h, 1), h.throttle = function(t, e, u) {
        var i, o, a, c, l = 0;
        u || (u = {});
        var f = function() {
                l = !1 === u.leading ? 0 : h.now(), i = null, c = t.apply(o, a), i || (o = a = null)
            },
            n = function() {
                var n = h.now();
                l || !1 !== u.leading || (l = n);
                var r = e - (n - l);
                return o = this, a = arguments, r <= 0 || e < r ? (i && (clearTimeout(i), i = null), l = n, c = t.apply(o, a), i || (o = a = null)) : i || !1 === u.trailing || (i = setTimeout(f, r)), c
            };
        return n.cancel = function() {
            clearTimeout(i), l = 0, i = o = a = null
        }, n
    }, h.debounce = function(t, e, u) {
        var i, o, a = function(n, r) {
                i = null, r && (o = t.apply(n, r))
            },
            n = g(function(n) {
                if (i && clearTimeout(i), u) {
                    var r = !i;
                    i = setTimeout(a, e), r && (o = t.apply(this, n))
                } else i = h.delay(a, e, this, n);
                return o
            });
        return n.cancel = function() {
            clearTimeout(i), i = null
        }, n
    }, h.wrap = function(n, r) {
        return h.partial(r, n)
    }, h.negate = function(n) {
        return function() {
            return !n.apply(this, arguments)
        }
    }, h.compose = function() {
        var t = arguments,
            e = t.length - 1;
        return function() {
            for (var n = e, r = t[e].apply(this, arguments); n--;) r = t[n].call(this, r);
            return r
        }
    }, h.after = function(n, r) {
        return function() {
            if (--n < 1) return r.apply(this, arguments)
        }
    }, h.before = function(n, r) {
        var t;
        return function() {
            return 0 < --n && (t = r.apply(this, arguments)), n <= 1 && (r = null), t
        }
    }, h.once = h.partial(h.before, 2), h.restArguments = g;
    var I = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        T = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
        B = function(n, r) {
            var t = T.length,
                e = n.constructor,
                u = h.isFunction(e) && e.prototype || o,
                i = "constructor";
            for (j(n, i) && !h.contains(r, i) && r.push(i); t--;)(i = T[t]) in n && n[i] !== u[i] && !h.contains(r, i) && r.push(i)
        };
    h.keys = function(n) {
        if (!h.isObject(n)) return [];
        if (a) return a(n);
        var r = [];
        for (var t in n) j(n, t) && r.push(t);
        return I && B(n, r), r
    }, h.allKeys = function(n) {
        if (!h.isObject(n)) return [];
        var r = [];
        for (var t in n) r.push(t);
        return I && B(n, r), r
    }, h.values = function(n) {
        for (var r = h.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = n[r[u]];
        return e
    }, h.mapObject = function(n, r, t) {
        r = d(r, t);
        for (var e = h.keys(n), u = e.length, i = {}, o = 0; o < u; o++) {
            var a = e[o];
            i[a] = r(n[a], a, n)
        }
        return i
    }, h.pairs = function(n) {
        for (var r = h.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = [r[u], n[r[u]]];
        return e
    }, h.invert = function(n) {
        for (var r = {}, t = h.keys(n), e = 0, u = t.length; e < u; e++) r[n[t[e]]] = t[e];
        return r
    }, h.functions = h.methods = function(n) {
        var r = [];
        for (var t in n) h.isFunction(n[t]) && r.push(t);
        return r.sort()
    };
    var R = function(c, l) {
        return function(n) {
            var r = arguments.length;
            if (l && (n = Object(n)), r < 2 || null == n) return n;
            for (var t = 1; t < r; t++)
                for (var e = arguments[t], u = c(e), i = u.length, o = 0; o < i; o++) {
                    var a = u[o];
                    l && void 0 !== n[a] || (n[a] = e[a])
                }
            return n
        }
    };
    h.extend = R(h.allKeys), h.extendOwn = h.assign = R(h.keys), h.findKey = function(n, r, t) {
        r = d(r, t);
        for (var e, u = h.keys(n), i = 0, o = u.length; i < o; i++)
            if (r(n[e = u[i]], e, n)) return e
    };
    var q, K, z = function(n, r, t) {
        return r in t
    };
    h.pick = g(function(n, r) {
        var t = {},
            e = r[0];
        if (null == n) return t;
        h.isFunction(e) ? (1 < r.length && (e = y(e, r[1])), r = h.allKeys(n)) : (e = z, r = M(r, !1, !1), n = Object(n));
        for (var u = 0, i = r.length; u < i; u++) {
            var o = r[u],
                a = n[o];
            e(a, o, n) && (t[o] = a)
        }
        return t
    }), h.omit = g(function(n, t) {
        var r, e = t[0];
        return h.isFunction(e) ? (e = h.negate(e), 1 < t.length && (r = t[1])) : (t = h.map(M(t, !1, !1), String), e = function(n, r) {
            return !h.contains(t, r)
        }), h.pick(n, e, r)
    }), h.defaults = R(h.allKeys, !0), h.create = function(n, r) {
        var t = m(n);
        return r && h.extendOwn(t, r), t
    }, h.clone = function(n) {
        return h.isObject(n) ? h.isArray(n) ? n.slice() : h.extend({}, n) : n
    }, h.tap = function(n, r) {
        return r(n), n
    }, h.isMatch = function(n, r) {
        var t = h.keys(r),
            e = t.length;
        if (null == n) return !e;
        for (var u = Object(n), i = 0; i < e; i++) {
            var o = t[i];
            if (r[o] !== u[o] || !(o in u)) return !1
        }
        return !0
    }, q = function(n, r, t, e) {
        if (n === r) return 0 !== n || 1 / n == 1 / r;
        if (null == n || null == r) return !1;
        if (n != n) return r != r;
        var u = typeof n;
        return ("function" === u || "object" === u || "object" == typeof r) && K(n, r, t, e)
    }, K = function(n, r, t, e) {
        n instanceof h && (n = n._wrapped), r instanceof h && (r = r._wrapped);
        var u = p.call(n);
        if (u !== p.call(r)) return !1;
        switch (u) {
            case "[object RegExp]":
            case "[object String]":
                return "" + n == "" + r;
            case "[object Number]":
                return +n != +n ? +r != +r : 0 == +n ? 1 / +n == 1 / r : +n == +r;
            case "[object Date]":
            case "[object Boolean]":
                return +n == +r;
            case "[object Symbol]":
                return s.valueOf.call(n) === s.valueOf.call(r)
        }
        var i = "[object Array]" === u;
        if (!i) {
            if ("object" != typeof n || "object" != typeof r) return !1;
            var o = n.constructor,
                a = r.constructor;
            if (o !== a && !(h.isFunction(o) && o instanceof o && h.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in r) return !1
        }
        e = e || [];
        for (var c = (t = t || []).length; c--;)
            if (t[c] === n) return e[c] === r;
        if (t.push(n), e.push(r), i) {
            if ((c = n.length) !== r.length) return !1;
            for (; c--;)
                if (!q(n[c], r[c], t, e)) return !1
        } else {
            var l, f = h.keys(n);
            if (c = f.length, h.keys(r).length !== c) return !1;
            for (; c--;)
                if (l = f[c], !j(r, l) || !q(n[l], r[l], t, e)) return !1
        }
        return t.pop(), e.pop(), !0
    }, h.isEqual = function(n, r) {
        return q(n, r)
    }, h.isEmpty = function(n) {
        return null == n || (w(n) && (h.isArray(n) || h.isString(n) || h.isArguments(n)) ? 0 === n.length : 0 === h.keys(n).length)
    }, h.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }, h.isArray = t || function(n) {
        return "[object Array]" === p.call(n)
    }, h.isObject = function(n) {
        var r = typeof n;
        return "function" === r || "object" === r && !!n
    }, h.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], function(r) {
        h["is" + r] = function(n) {
            return p.call(n) === "[object " + r + "]"
        }
    }), h.isArguments(arguments) || (h.isArguments = function(n) {
        return j(n, "callee")
    });
    var D = n.document && n.document.childNodes;
    "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof D && (h.isFunction = function(n) {
        return "function" == typeof n || !1
    }), h.isFinite = function(n) {
        return !h.isSymbol(n) && isFinite(n) && !isNaN(parseFloat(n))
    }, h.isNaN = function(n) {
        return h.isNumber(n) && isNaN(n)
    }, h.isBoolean = function(n) {
        return !0 === n || !1 === n || "[object Boolean]" === p.call(n)
    }, h.isNull = function(n) {
        return null === n
    }, h.isUndefined = function(n) {
        return void 0 === n
    }, h.has = function(n, r) {
        if (!h.isArray(r)) return j(n, r);
        for (var t = r.length, e = 0; e < t; e++) {
            var u = r[e];
            if (null == n || !i.call(n, u)) return !1;
            n = n[u]
        }
        return !!t
    }, h.noConflict = function() {
        return n._ = r, this
    }, h.identity = function(n) {
        return n
    }, h.constant = function(n) {
        return function() {
            return n
        }
    }, h.noop = function() {}, h.property = function(r) {
        return h.isArray(r) ? function(n) {
            return x(n, r)
        } : b(r)
    }, h.propertyOf = function(r) {
        return null == r ? function() {} : function(n) {
            return h.isArray(n) ? x(r, n) : r[n]
        }
    }, h.matcher = h.matches = function(r) {
        return r = h.extendOwn({}, r),
            function(n) {
                return h.isMatch(n, r)
            }
    }, h.times = function(n, r, t) {
        var e = Array(Math.max(0, n));
        r = y(r, t, 1);
        for (var u = 0; u < n; u++) e[u] = r(u);
        return e
    }, h.random = function(n, r) {
        return null == r && (r = n, n = 0), n + Math.floor(Math.random() * (r - n + 1))
    }, h.now = Date.now || function() {
        return (new Date).getTime()
    };
    var L = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        P = h.invert(L),
        W = function(r) {
            var t = function(n) {
                    return r[n]
                },
                n = "(?:" + h.keys(r).join("|") + ")",
                e = RegExp(n),
                u = RegExp(n, "g");
            return function(n) {
                return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n
            }
        };
    h.escape = W(L), h.unescape = W(P), h.result = function(n, r, t) {
        h.isArray(r) || (r = [r]);
        var e = r.length;
        if (!e) return h.isFunction(t) ? t.call(n) : t;
        for (var u = 0; u < e; u++) {
            var i = null == n ? void 0 : n[r[u]];
            void 0 === i && (i = t, u = e), n = h.isFunction(i) ? i.call(n) : i
        }
        return n
    };
    var C = 0;
    h.uniqueId = function(n) {
        var r = ++C + "";
        return n ? n + r : r
    }, h.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var J = /(.)^/,
        U = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        V = /\\|'|\r|\n|\u2028|\u2029/g,
        $ = function(n) {
            return "\\" + U[n]
        };
    h.template = function(i, n, r) {
        !n && r && (n = r), n = h.defaults({}, n, h.templateSettings);
        var t, e = RegExp([(n.escape || J).source, (n.interpolate || J).source, (n.evaluate || J).source].join("|") + "|$", "g"),
            o = 0,
            a = "__p+='";
        i.replace(e, function(n, r, t, e, u) {
            return a += i.slice(o, u).replace(V, $), o = u + n.length, r ? a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : t ? a += "'+\n((__t=(" + t + "))==null?'':__t)+\n'" : e && (a += "';\n" + e + "\n__p+='"), n
        }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            t = new Function(n.variable || "obj", "_", a)
        } catch (n) {
            throw n.source = a, n
        }
        var u = function(n) {
                return t.call(this, n, h)
            },
            c = n.variable || "obj";
        return u.source = "function(" + c + "){\n" + a + "}", u
    }, h.chain = function(n) {
        var r = h(n);
        return r._chain = !0, r
    };
    var G = function(n, r) {
        return n._chain ? h(r).chain() : r
    };
    h.mixin = function(t) {
        return h.each(h.functions(t), function(n) {
            var r = h[n] = t[n];
            h.prototype[n] = function() {
                var n = [this._wrapped];
                return u.apply(n, arguments), G(this, r.apply(h, n))
            }
        }), h
    }, h.mixin(h), h.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(r) {
        var t = e[r];
        h.prototype[r] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" !== r && "splice" !== r || 0 !== n.length || delete n[0], G(this, n)
        }
    }), h.each(["concat", "join", "slice"], function(n) {
        var r = e[n];
        h.prototype[n] = function() {
            return G(this, r.apply(this._wrapped, arguments))
        }
    }), h.prototype.value = function() {
        return this._wrapped
    }, h.prototype.valueOf = h.prototype.toJSON = h.prototype.value, h.prototype.toString = function() {
        return String(this._wrapped)
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return h
    })
}();;
(function($, Drupal) {
    $.fn.exists = function() {
        return this.length !== 0;
    }
    $.fn.doesntExist = function() {
        return this.length == 0;
    }
    const UA = navigator.userAgent;
    let isAndroid = UA.indexOf('Android');
    if (isAndroid > -1) {
        isAndroid = true
    } else {
        isAndroid = false
    }
    Drupal.behaviors.yourfunctions = {
        attach: function(context, settings) {}
    }
    Drupal.behaviors.chosenSettings = {
        attach: function(context, settings) {}
    }
    Drupal.behaviors.siteReferral = {
        attach: function(context, settings) {
            var siteReferralInitial = document.referrer;
            if (!$.cookie('siteReferralInitial')) {
                $.cookie('siteReferralInitial', siteReferralInitial, {
                    path: '/',
                    domain: '.cappex.com',
                    secure: true,
                    expires: 1,
                    referrer: siteReferralInitial
                });
            }
        }
    };
    Drupal.behaviors.landingParameters = {
        attach: function(context, settings) {
            var landingParamsURL = window.location.href;
            if (!$.cookie('landingParamsURL')) {
                $.cookie('landingParamsURL', landingParamsURL, {
                    path: '/',
                    domain: '.cappex.com',
                    secure: true,
                    expires: 1,
                    referrer: landingParamsURL
                });
            }
        }
    };
    Drupal.behaviors.cappexUTMCookies = {
        attach: function(context, settings) {
            if (context === document) {
                var query = queryToObject();
                var utmObject = {};
                var allowedKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
                var setCookie = false;
                for (var key in query) {
                    if (allowedKeys.includes(key)) {
                        setCookie = true;
                        utmObject[key] = query[key];
                    }
                }
                if (setCookie) {
                    var utmJSON = JSON.stringify(utmObject);
                    $.cookie('utmParamsInitial', utmJSON, {
                        path: '/',
                        domain: '.cappex.com',
                        secure: true,
                        expires: 1
                    });
                }
            }
        }
    };

    function queryToObject() {
        var result = {};
        if (window.location.search !== '') {
            var queryItems = window.location.search.match(/[^?^&]*=[^?^&]*/g);
            queryItems.forEach(function(item) {
                var splitItem = item.split('=');
                result[splitItem[0].toLowerCase()] = splitItem[1];
            });
        }
        return result;
    }
    $(document).ready(function() {
        var adBlockTester = document.createElement('div');
        adBlockTester.innerHTML = '&nbsp;';
        adBlockTester.className = 'adsbox';
        document.body.appendChild(adBlockTester);
        window.setTimeout(function() {
            if (adBlockTester.offsetHeight === 0) {
                if (($('.page-cappex-search-college').length > 0) || ($('.page-cappex-search-scholarship').length > 0)) {
                    $('.cappex-search__results').html("<br/><h1>Disable Adblocker to See Results</h1>");
                }
            } else {}
            document.body.removeChild(adBlockTester);
        }, 60);
        if ($('.page-cappex-search-scholarship').length > 0) {
            $(document).bind('DOMSubtreeModified', function() {
                $('.range-min-amount').keypress(function(e) {
                    e.preventDefault();
                    return false;
                });
            });
        }
        if ($('.rellax').length > 0) {
            var rellax = new Rellax('.rellax');
            setTimeout(function() {
                rellax.refresh();
            }, 2000);
        }
        if ($('.table').length > 0) {
            $('.table').footable();
        }
        if ($('.block-system-breadcrumb-block').length > 0 || $('.block-cappex-seo-college-profile-breadcrumb').length > 0) {
            $('.header').addClass('header-standard');
        }
        if ($('.breadcrumbs').length > 0) {
            $('.header').addClass('header-standard');
        }
        if ($('.header-standard').length < 1) {
            $('.header--spacer').hide();
        }
        if ($('a[href="#webform-submission-order-form-node-182276-add-form"]').length > 0) {
            $('a[href="#webform-submission-order-form-node-182276-add-form"]').on('click', function(e) {
                e.preventDefault();
                $([document.documentElement, document.body]).animate({
                    scrollTop: $('.cappex-advisor--signup').offset().top - 80
                }, 1000);
            });
        }
        if ($('.cappex-advisor--signup #orderform').length > 0) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $('.cappex-advisor--signup').offset().top - 80
            }, 1000);
        }
        var topPos = $(document).scrollTop();
        var noBreadCrumb = $('.block-system-breadcrumb-block').length === 0;
        if ((noBreadCrumb) && (topPos > 1)) {
            $('.header').addClass('header-standard');
        }
        var hasBeenClonedDown = false;
        var hasBeenClonedUp = false;
        var lastScrollTop = 0;
        var flexThrottledScroll = _.throttle(flexPageScroll, 300);
        if ($('.block-system-breadcrumb-block').length === 0) {
            $(window).scroll(flexThrottledScroll);
        }

        function flexPageScroll() {
            var st = $(this).scrollTop();
            var viewportWidth = $(window).width();
            var viewportHeight = $(window).height();
            if (st > lastScrollTop) {
                if (viewportWidth > 1040) {
                    if (hasBeenClonedDown == false) {
                        hasBeenClonedDown = true;
                        $('.header').addClass('header-standard');
                    }
                }
            } else {
                if (viewportWidth > 1040) {
                    if (st < 400) {
                        if (hasBeenClonedUp == false) {
                            $('.header').removeClass('header-standard');
                            hasBeenClonedDown = false;
                        }
                    }
                }
            }
            lastScrollTop = st;
        }

        function getFocus(campo) {
            $(window).bind('resize', function() {
                if ($(window).width() < 1025) {
                    $(campo).focus();
                }
            });
        }
        $('input').click(function() {
            getFocus(this);
        });
        if (($(window).width() >= 1040) && ($('.c-bgd-video video').length > 0)) {
            $('.c-bgd-video video').each(function(index) {
                var theVideo = $(this).attr('data-src');
                $(this).attr('src', theVideo);
            });
        }
        $('.search-toggle--search').on('click', function() {
            searchToggle();
        });

        function searchToggle() {
            var navWidth = $('.main-navigation').width();
            $('.search-toggle--search').toggleClass('search-toggle--close');
            $('.header #edit-keys').css('width', navWidth);
            $('.header .cappex-block-search-input').css('width', navWidth - 60);
            $('.cappex-block-search-wrapper .block__content').toggle();
            $('header input.cappex-block-search-input').focus();
        }
        $('.mobile-hamburger--wrap a').on('click', function(e) {
            e.preventDefault();
            $('body').toggleClass('hamburger-open');
            $('#block-fingerprint-main-menu').toggleClass('menu-open');
            $('.sub-nav-group').hide();
        });
        $(window).on('scroll resize', function() {
            if ($(window).scrollTop() >= 800) {
                $('.back-to-top').addClass('visible');
            } else {
                $('.back-to-top').removeClass('visible');
            }
        });
        $('.back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 800);
        })
        $('[data-equalized]').each(function() {
            var $elements = $(this).find($('[data-equal]'));
            equalHeights($elements);
        })
        resetMenuState();
    });
    var resizeTimer;
    $(window).on('resize', function() {
        if (!isAndroid) {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                resetMenuState();
            }, 250);
        }
    });
    $expandableItems = $('.nav-item').has('div');
    if ($expandableItems.length > 0) {
        $('.nav-menu-toggle').on('click', function() {
            if ($(this).hasClass('nav-item--toggle-down')) {
                $(this).toggleClass('nav-item--toggle-down nav-item--toggle-up');
                if ($(this).parent().children('.sub-nav').length > 0) {
                    $(this).parent().addClass('js-menu-open');
                    $(this).parent().children('.sub-nav').children('.sub-nav-group').slideToggle();
                }
            } else {
                $(this).toggleClass('nav-item--toggle-up nav-item--toggle-down');
                if ($(this).parent().children('.sub-nav').length > 0) {
                    $(this).parent().removeClass('js-menu-open');
                    $(this).parent().children('.sub-nav').children('.sub-nav-group').slideToggle();
                }
            }
        });
    }

    function equalHeights($elements) {
        var maxHeight = 0;
        $elements.each(function() {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        $elements.height(maxHeight);
    }

    function isScrolledIntoView(el) {
        var elemTop = el[0].getBoundingClientRect().top;
        var elemBottom = el[0].getBoundingClientRect().bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    }

    function resetMenuState() {
        $expandableItems = $('.nav-item').has('div');
        if ($expandableItems.length > 0) {
            $expandableItems.each(function() {
                var $this = $(this);
                var $toggle = $this.children('.nav-menu-toggle');
                $toggle.removeClass('nav-item--toggle-up');
                $toggle.addClass('nav-item--toggle-down');
                $this.css({
                    'min-width': 0
                });
                $this.addClass('js-menu-open');
                $this.css({
                    'min-width': $this.outerWidth()
                });
                $this.removeClass('js-menu-open');
                var $subnav = $this.find('.sub-nav-group');
                if ($subnav.is(':visible') === true) {
                    $subnav.slideToggle();
                };
            });
        }
        if ($(window).width() < 1040) {
            $('.footer-social--inner').appendTo('.footer__inner--lastpair');
            var $mobilefooterCollapse = $('.footer__inner > .footer__column:nth-child(-n+5) .field--name-body, .footer__inner--lastpair > .footer__column:nth-child(-n+4) .field--name-body');
            var $mobilefooterHeadings = $('.footer__inner > .footer__column:nth-child(-n+5) .field--name-body, .footer__inner--lastpair > .footer__column:nth-child(-n+4) .field--name-body').closest('.block__content').find('.block-title');
            $('.footer').addClass('footer-mobile');
            if (typeof mobileFold === 'undefined') {
                mobileFold = true;
                $mobilefooterCollapse.slideToggle(0);
                $mobilefooterCollapse.each(function() {
                    $(this).closest('.block__content').find('.block-title').addClass('footer-nav--toggle-down');
                });
                $mobilefooterHeadings.on('click', function() {
                    if ($(this).hasClass('footer-nav--toggle-down')) {
                        $(this).toggleClass('footer-nav--toggle-down footer-nav--toggle-up');
                        $(this).next('.field--name-body').slideToggle();
                    } else {
                        $(this).toggleClass('footer-nav--toggle-up footer-nav--toggle-down');
                        $(this).next('.field--name-body').slideToggle();
                    }
                });
            }
            $('#block-fingerprint-main-menu').detach().insertAfter('.header__logo-nav');
            $('.header .cappex-block-search-wrapper .block__content').css('width', '100vw');
            $('.header #edit-keys').css('width', '100%');
            $('.header .cappex-block-search-wrapper').detach().prependTo('#block-fingerprint-main-menu');
            $('.header .search-toggle--search, .search-toggle--close').hide();
            $('.header .cappex-block-search-wrapper .block__content').show()
            $('#block-fingerprint-main-menu').hide();
            $('#block-fingerprint-main-menu').detach().insertAfter('.header__logo-nav');
            $('#block-fingerprint-main-menu').hide();
            $('.nav-cta--standard').detach().appendTo('#block-fingerprint-main-menu').toggleClass('nav-cta--mobile nav-cta--standard');
        } else {
            $('#block-fingerprint-main-menu').detach().insertAfter('#block-fingerprint-branding');
            $('#block-fingerprint-main-menu').show();
            $('.header .cappex-block-search-wrapper').detach().insertAfter('#block-fingerprint-main-menu');
            $('.header .search-toggle--search, .search-toggle--close').show();
            $('.header .cappex-block-search-wrapper .block__content').hide()
            $('.header .cappex-block-search-wrapper .block__content').css('width', '100%');
            if ($('.nav-cta--mobile').length > 0) {
                $('.nav-cta--mobile').detach().insertAfter('.header .cappex-block-search-wrapper').toggleClass('nav-cta--standard nav-cta--mobile');
            }
            if ($('.header .search-toggle--close').length > 0) {
                $('.header .search-toggle--close').removeClass('search-toggle--close').addClass('search-toggle--search');
                $('.header .cappex-block-search-wrapper .block__content').toggle();
            }
            if ($('.footer-mobile').length > 0) {
                $('.footer-social--inner').appendTo('.footer-logo');
                $('.footer-mobile').removeClass('footer-mobile');
                var $mobilefooterCollapse = $('.footer__inner > .footer__column:nth-child(-n+5) .field--name-body, .footer__inner--lastpair > .footer__column:nth-child(-n+4) .field--name-body');
                var $mobilefooterHeadings = $('.footer__inner > .footer__column:nth-child(-n+5) .field--name-body, .footer__inner--lastpair > .footer__column:nth-child(-n+4) .field--name-body').closest('.block__content').find('.block-title');
                if (typeof mobileUnfold === 'undefined') {
                    mobileUnfold = true;
                    $mobilefooterCollapse.slideToggle(0);
                    $mobilefooterCollapse.each(function() {
                        $(this).closest('.block__content').find('.block-title').removeClass('footer-nav--toggle-down');
                    });
                    $mobilefooterHeadings.off('click').removeClass('footer-nav--toggle-down').removeClass('footer-nav--toggle-down').next('.field--name-body').toggleClass('displayNone displayBlock');
                }
            }
        }
    }
})(jQuery, Drupal);;
/*! sidr - v2.2.1 - 2016-02-17
 * http://www.berriart.com/sidr/
 * Copyright (c) 2013-2016 Alberto Varela; Licensed MIT */
! function() {
    "use strict";

    function a(a, b, c) {
        var d = new o(b);
        switch (a) {
            case "open":
                d.open(c);
                break;
            case "close":
                d.close(c);
                break;
            case "toggle":
                d.toggle(c);
                break;
            default:
                p.error("Method " + a + " does not exist on jQuery.sidr")
        }
    }

    function b(a) {
        return "status" === a ? h : s[a] ? s[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof a && "string" != typeof a && a ? void q.error("Method " + a + " does not exist on jQuery.sidr") : s.toggle.apply(this, arguments)
    }

    function c(a, b) {
        if ("function" == typeof b.source) {
            var c = b.source(name);
            a.html(c)
        } else if ("string" == typeof b.source && i.isUrl(b.source)) u.get(b.source, function(b) {
            a.html(b)
        });
        else if ("string" == typeof b.source) {
            var d = "",
                e = b.source.split(",");
            if (u.each(e, function(a, b) {
                    d += '<div class="sidr-inner">' + u(b).html() + "</div>"
                }), b.renaming) {
                var f = u("<div />").html(d);
                f.find("*").each(function(a, b) {
                    var c = u(b);
                    i.addPrefixes(c)
                }), d = f.html()
            }
            a.html(d)
        } else null !== b.source && u.error("Invalid Sidr Source");
        return a
    }

    function d(a) {
        var d = i.transitions,
            e = u.extend({
                name: "sidr",
                speed: 200,
                side: "left",
                source: null,
                renaming: !0,
                body: "body",
                displace: !0,
                timing: "ease",
                method: "toggle",
                bind: "touchstart click",
                onOpen: function() {},
                onClose: function() {},
                onOpenEnd: function() {},
                onCloseEnd: function() {}
            }, a),
            f = e.name,
            g = u("#" + f);
        return 0 === g.length && (g = u("<div />").attr("id", f).appendTo(u("body"))), d.supported && g.css(d.property, e.side + " " + e.speed / 1e3 + "s " + e.timing), g.addClass("sidr").addClass(e.side).data({
            speed: e.speed,
            side: e.side,
            body: e.body,
            displace: e.displace,
            timing: e.timing,
            method: e.method,
            onOpen: e.onOpen,
            onClose: e.onClose,
            onOpenEnd: e.onOpenEnd,
            onCloseEnd: e.onCloseEnd
        }), g = c(g, e), this.each(function() {
            var a = u(this),
                c = a.data("sidr"),
                d = !1;
            c || (h.moving = !1, h.opened = !1, a.data("sidr", f), a.bind(e.bind, function(a) {
                a.preventDefault(), d || (d = !0, b(e.method, f), setTimeout(function() {
                    d = !1
                }, 100))
            }))
        })
    }
    var e = {};
    e.classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }, e.createClass = function() {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
            }
        }
        return function(b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b
        }
    }();
    var f, g, h = {
            moving: !1,
            opened: !1
        },
        i = {
            isUrl: function(a) {
                var b = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
                return b.test(a) ? !0 : !1
            },
            addPrefixes: function(a) {
                this.addPrefix(a, "id"), this.addPrefix(a, "class"), a.removeAttr("style")
            },
            addPrefix: function(a, b) {
                var c = a.attr(b);
                "string" == typeof c && "" !== c && "sidr-inner" !== c && a.attr(b, c.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-" + b + "-$1"))
            },
            transitions: function() {
                var a = document.body || document.documentElement,
                    b = a.style,
                    c = !1,
                    d = "transition";
                return d in b ? c = !0 : ! function() {
                    var a = ["moz", "webkit", "o", "ms"],
                        e = void 0,
                        f = void 0;
                    d = d.charAt(0).toUpperCase() + d.substr(1), c = function() {
                        for (f = 0; f < a.length; f++)
                            if (e = a[f], e + d in b) return !0;
                        return !1
                    }(), d = c ? "-" + e.toLowerCase() + "-" + d.toLowerCase() : null
                }(), {
                    supported: c,
                    property: d
                }
            }()
        },
        j = jQuery,
        k = "sidr-animating",
        l = "open",
        m = "close",
        n = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        o = function() {
            function a(b) {
                e.classCallCheck(this, a), this.name = b, this.item = j("#" + b), this.openClass = "sidr" === b ? "sidr-open" : "sidr-open " + b + "-open", this.menuWidth = this.item.outerWidth(!0), this.speed = this.item.data("speed"), this.side = this.item.data("side"), this.displace = this.item.data("displace"), this.timing = this.item.data("timing"), this.method = this.item.data("method"), this.onOpenCallback = this.item.data("onOpen"), this.onCloseCallback = this.item.data("onClose"), this.onOpenEndCallback = this.item.data("onOpenEnd"), this.onCloseEndCallback = this.item.data("onCloseEnd"), this.body = j(this.item.data("body"))
            }
            return e.createClass(a, [{
                key: "getAnimation",
                value: function(a, b) {
                    var c = {},
                        d = this.side;
                    return "open" === a && "body" === b ? c[d] = this.menuWidth + "px" : "close" === a && "menu" === b ? c[d] = "-" + this.menuWidth + "px" : c[d] = 0, c
                }
            }, {
                key: "prepareBody",
                value: function(a) {
                    var b = "open" === a ? "hidden" : "";
                    if (this.body.is("body")) {
                        var c = j("html"),
                            d = c.scrollTop();
                        c.css("overflow-x", b).scrollTop(d)
                    }
                }
            }, {
                key: "openBody",
                value: function() {
                    if (this.displace) {
                        var a = i.transitions,
                            b = this.body;
                        if (a.supported) b.css(a.property, this.side + " " + this.speed / 1e3 + "s " + this.timing).css(this.side, 0).css({
                            width: b.width(),
                            position: "absolute"
                        }), b.css(this.side, this.menuWidth + "px");
                        else {
                            var c = this.getAnimation(l, "body");
                            b.css({
                                width: b.width(),
                                position: "absolute"
                            }).animate(c, {
                                queue: !1,
                                duration: this.speed
                            })
                        }
                    }
                }
            }, {
                key: "onCloseBody",
                value: function() {
                    var a = i.transitions,
                        b = {
                            width: "",
                            position: "",
                            right: "",
                            left: ""
                        };
                    a.supported && (b[a.property] = ""), this.body.css(b).unbind(n)
                }
            }, {
                key: "closeBody",
                value: function() {
                    var a = this;
                    if (this.displace)
                        if (i.transitions.supported) this.body.css(this.side, 0).one(n, function() {
                            a.onCloseBody()
                        });
                        else {
                            var b = this.getAnimation(m, "body");
                            this.body.animate(b, {
                                queue: !1,
                                duration: this.speed,
                                complete: function() {
                                    a.onCloseBody()
                                }
                            })
                        }
                }
            }, {
                key: "moveBody",
                value: function(a) {
                    a === l ? this.openBody() : this.closeBody()
                }
            }, {
                key: "onOpenMenu",
                value: function(a) {
                    var b = this.name;
                    h.moving = !1, h.opened = b, this.item.unbind(n), this.body.removeClass(k).addClass(this.openClass), this.onOpenEndCallback(), "function" == typeof a && a(b)
                }
            }, {
                key: "openMenu",
                value: function(a) {
                    var b = this,
                        c = this.item;
                    if (i.transitions.supported) c.css(this.side, 0).one(n, function() {
                        b.onOpenMenu(a)
                    });
                    else {
                        var d = this.getAnimation(l, "menu");
                        c.css("display", "block").animate(d, {
                            queue: !1,
                            duration: this.speed,
                            complete: function() {
                                b.onOpenMenu(a)
                            }
                        })
                    }
                }
            }, {
                key: "onCloseMenu",
                value: function(a) {
                    this.item.css({
                        left: "",
                        right: ""
                    }).unbind(n), j("html").css("overflow-x", ""), h.moving = !1, h.opened = !1, this.body.removeClass(k).removeClass(this.openClass), this.onCloseEndCallback(), "function" == typeof a && a(name)
                }
            }, {
                key: "closeMenu",
                value: function(a) {
                    var b = this,
                        c = this.item;
                    if (i.transitions.supported) c.css(this.side, "").one(n, function() {
                        b.onCloseMenu(a)
                    });
                    else {
                        var d = this.getAnimation(m, "menu");
                        c.animate(d, {
                            queue: !1,
                            duration: this.speed,
                            complete: function() {
                                b.onCloseMenu()
                            }
                        })
                    }
                }
            }, {
                key: "moveMenu",
                value: function(a, b) {
                    this.body.addClass(k), a === l ? this.openMenu(b) : this.closeMenu(b)
                }
            }, {
                key: "move",
                value: function(a, b) {
                    h.moving = !0, this.prepareBody(a), this.moveBody(a), this.moveMenu(a, b)
                }
            }, {
                key: "open",
                value: function(b) {
                    var c = this;
                    if (h.opened !== this.name && !h.moving) {
                        if (h.opened !== !1) {
                            var d = new a(h.opened);
                            return void d.close(function() {
                                c.open(b)
                            })
                        }
                        this.move("open", b), this.onOpenCallback()
                    }
                }
            }, {
                key: "close",
                value: function(a) {
                    h.opened !== this.name || h.moving || (this.move("close", a), this.onCloseCallback())
                }
            }, {
                key: "toggle",
                value: function(a) {
                    h.opened === this.name ? this.close(a) : this.open(a)
                }
            }]), a
        }(),
        p = jQuery,
        q = jQuery,
        r = ["open", "close", "toggle"],
        s = {},
        t = function(b) {
            return function(c, d) {
                "function" == typeof c ? (d = c, c = "sidr") : c || (c = "sidr"), a(b, c, d)
            }
        };
    for (f = 0; f < r.length; f++) g = r[f], s[g] = t(g);
    var u = jQuery;
    jQuery.sidr = b, jQuery.fn.sidr = d
}();;
(function(h, g) {
    "function" === typeof define && define.amd ? define([], g) : "object" === typeof module && module.exports ? module.exports = g() : h.Rellax = g()
})(this, function() {
    var h = function(g, n) {
        var a = Object.create(h.prototype),
            k = 0,
            p = 0,
            l = 0,
            q = 0,
            e = [],
            r = !0,
            z = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(a) {
                setTimeout(a, 1E3 / 60)
            },
            A = window.transformProp || function() {
                var a = document.createElement("div");
                if (null === a.style.transform) {
                    var b = ["Webkit", "Moz", "ms"],
                        d;
                    for (d in b)
                        if (void 0 !== a.style[b[d] + "Transform"]) return b[d] + "Transform"
                }
                return "transform"
            }();
        a.options = {
            speed: -2,
            center: !1,
            wrapper: null,
            round: !0,
            vertical: !0,
            horizontal: !1,
            callback: function() {}
        };
        n && Object.keys(n).forEach(function(c) {
            a.options[c] = n[c]
        });
        g || (g = ".rellax");
        var m = "string" === typeof g ? document.querySelectorAll(g) : [g];
        if (0 < m.length) a.elems = m;
        else throw Error("The elements you're trying to select don't exist.");
        if (a.options.wrapper && !a.options.wrapper.nodeType)
            if (m = document.querySelector(a.options.wrapper)) a.options.wrapper = m;
            else throw Error("The wrapper you're trying to use don't exist.");
        var u = function() {
                for (var c = 0; c < e.length; c++) a.elems[c].style.cssText = e[c].style;
                e = [];
                p = window.innerHeight;
                q = window.innerWidth;
                v();
                for (c = 0; c < a.elems.length; c++) {
                    var b = a.elems[c],
                        d = b.getAttribute("data-rellax-percentage"),
                        t = b.getAttribute("data-rellax-speed"),
                        g = b.getAttribute("data-rellax-zindex") || 0,
                        h = a.options.wrapper ? a.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                        f = a.options.vertical ? d || a.options.center ? h : 0 : 0,
                        k = a.options.horizontal ? d || a.options.center ? window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;
                    h = f + b.getBoundingClientRect().top;
                    var l = b.clientHeight || b.offsetHeight || b.scrollHeight,
                        m = k + b.getBoundingClientRect().left,
                        n = b.clientWidth || b.offsetWidth || b.scrollWidth;
                    f = d ? d : (f - h + p) / (l + p);
                    d = d ? d : (k - m + q) / (n + q);
                    a.options.center && (f = d = .5);
                    t = t ? t : a.options.speed;
                    d = w(d, f, t);
                    b = b.style.cssText;
                    f = "";
                    0 <= b.indexOf("transform") && (f = b.indexOf("transform"), f = b.slice(f), f = (k = f.indexOf(";")) ? " " + f.slice(11, k).replace(/\s/g, "") : " " + f.slice(11).replace(/\s/g, ""));
                    e.push({
                        baseX: d.x,
                        baseY: d.y,
                        top: h,
                        left: m,
                        height: l,
                        width: n,
                        speed: t,
                        style: b,
                        transform: f,
                        zindex: g
                    })
                }
                r && (window.addEventListener("resize", u), r = !1);
                x()
            },
            v = function() {
                var c = k,
                    b = l;
                k = a.options.wrapper ? a.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
                l = a.options.wrapper ? a.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
                return c != k && a.options.vertical || b != l && a.options.horizontal ? !0 : !1
            },
            w = function(c, b, d) {
                var e = {};
                c = 100 * d * (1 - c);
                b = 100 * d * (1 - b);
                e.x = a.options.round ? Math.round(c) : Math.round(100 * c) / 100;
                e.y = a.options.round ? Math.round(b) : Math.round(100 * b) / 100;
                return e
            },
            y = function() {
                v() && !1 === r && x();
                z(y)
            },
            x = function() {
                for (var c, b = 0; b < a.elems.length; b++) {
                    c = w((l - e[b].left + q) / (e[b].width +
                        q), (k - e[b].top + p) / (e[b].height + p), e[b].speed);
                    var d = c.y - e[b].baseY,
                        g = c.x - e[b].baseX;
                    a.elems[b].style[A] = "translate3d(" + (a.options.horizontal ? g : "0") + "px," + (a.options.vertical ? d : "0") + "px," + e[b].zindex + "px) " + e[b].transform
                }
                a.options.callback(c)
            };
        a.destroy = function() {
            for (var c = 0; c < a.elems.length; c++) a.elems[c].style.cssText = e[c].style;
            r || (window.removeEventListener("resize", u), r = !0)
        };
        u();
        y();
        a.refresh = u;
        return a
    };
    return h
});;
(function() {
    var c, f;
    c = window.jQuery;
    f = c(window);
    c.fn.stick_in_parent = function(b) {
        var A, w, J, n, B, K, p, q, L, k, E, t;
        null == b && (b = {});
        t = b.sticky_class;
        B = b.inner_scrolling;
        E = b.recalc_every;
        k = b.parent;
        q = b.offset_top;
        p = b.spacer;
        w = b.bottoming;
        null == q && (q = 0);
        null == k && (k = void 0);
        null == B && (B = !0);
        null == t && (t = "is_stuck");
        A = c(document);
        null == w && (w = !0);
        L = function(a) {
            var b;
            return window.getComputedStyle ? (a = window.getComputedStyle(a[0]), b = parseFloat(a.getPropertyValue("width")) + parseFloat(a.getPropertyValue("margin-left")) +
                parseFloat(a.getPropertyValue("margin-right")), "border-box" !== a.getPropertyValue("box-sizing") && (b += parseFloat(a.getPropertyValue("border-left-width")) + parseFloat(a.getPropertyValue("border-right-width")) + parseFloat(a.getPropertyValue("padding-left")) + parseFloat(a.getPropertyValue("padding-right"))), b) : a.outerWidth(!0)
        };
        J = function(a, b, n, C, F, u, r, G) {
            var v, H, m, D, I, d, g, x, y, z, h, l;
            if (!a.data("sticky_kit")) {
                a.data("sticky_kit", !0);
                I = A.height();
                g = a.parent();
                null != k && (g = g.closest(k));
                if (!g.length) throw "failed to find stick parent";
                v = m = !1;
                (h = null != p ? p && a.closest(p) : c("<div />")) && h.css("position", a.css("position"));
                x = function() {
                    var d, f, e;
                    if (!G && (I = A.height(), d = parseInt(g.css("border-top-width"), 10), f = parseInt(g.css("padding-top"), 10), b = parseInt(g.css("padding-bottom"), 10), n = g.offset().top + d + f, C = g.height(), m && (v = m = !1, null == p && (a.insertAfter(h), h.detach()), a.css({
                            position: "",
                            top: "",
                            width: "",
                            bottom: ""
                        }).removeClass(t), e = !0), F = a.offset().top - (parseInt(a.css("margin-top"), 10) || 0) - q, u = a.outerHeight(!0), r = a.css("float"), h && h.css({
                            width: L(a),
                            height: u,
                            display: a.css("display"),
                            "vertical-align": a.css("vertical-align"),
                            "float": r
                        }), e)) return l()
                };
                x();
                if (u !== C) return D = void 0, d = q, z = E, l = function() {
                    var c, l, e, k;
                    if (!G && (e = !1, null != z && (--z, 0 >= z && (z = E, x(), e = !0)), e || A.height() === I || x(), e = f.scrollTop(), null != D && (l = e - D), D = e, m ? (w && (k = e + u + d > C + n, v && !k && (v = !1, a.css({
                            position: "fixed",
                            bottom: "",
                            top: d
                        }).trigger("sticky_kit:unbottom"))), e < F && (m = !1, d = q, null == p && ("left" !== r && "right" !== r || a.insertAfter(h), h.detach()), c = {
                            position: "",
                            width: "",
                            top: ""
                        }, a.css(c).removeClass(t).trigger("sticky_kit:unstick")), B && (c = f.height(), u + q > c && !v && (d -= l, d = Math.max(c - u, d), d = Math.min(q, d), m && a.css({
                            top: d + "px"
                        })))) : e > F && (m = !0, c = {
                            position: "fixed",
                            top: d
                        }, c.width = "border-box" === a.css("box-sizing") ? a.outerWidth() + "px" : a.width() + "px", a.css(c).addClass(t), null == p && (a.after(h), "left" !== r && "right" !== r || h.append(a)), a.trigger("sticky_kit:stick")), m && w && (null == k && (k = e + u + d > C + n), !v && k))) return v = !0, "static" === g.css("position") && g.css({
                        position: "relative"
                    }), a.css({
                        position: "absolute",
                        bottom: b,
                        top: "auto"
                    }).trigger("sticky_kit:bottom")
                }, y = function() {
                    x();
                    return l()
                }, H = function() {
                    G = !0;
                    f.off("touchmove", l);
                    f.off("scroll", l);
                    f.off("resize", y);
                    c(document.body).off("sticky_kit:recalc", y);
                    a.off("sticky_kit:detach", H);
                    a.removeData("sticky_kit");
                    a.css({
                        position: "",
                        bottom: "",
                        top: "",
                        width: ""
                    });
                    g.position("position", "");
                    if (m) return null == p && ("left" !== r && "right" !== r || a.insertAfter(h), h.remove()), a.removeClass(t)
                }, f.on("touchmove", l), f.on("scroll", l), f.on("resize", y), c(document.body).on("sticky_kit:recalc", y), a.on("sticky_kit:detach", H), setTimeout(l, 0)
            }
        };
        n = 0;
        for (K = this.length; n < K; n++) b = this[n], J(c(b));
        return this
    }
}).call(this);;
(function($, F) {
    window.console = window.console || {
        log: function() {},
        error: function() {}
    };
    $.fn.footable = function(options, ready) {
        options = options || {};
        return this.filter('table').each(function(i, tbl) {
            F.init(tbl, options, ready);
        });
    };
    var debug_defaults = {
        events: []
    };
    F.__debug__ = JSON.parse(localStorage.getItem('footable_debug')) || false;
    F.__debug_options__ = JSON.parse(localStorage.getItem('footable_debug_options')) || debug_defaults;
    F.debug = function(value, options) {
        if (!F.is.boolean(value)) return F.__debug__;
        F.__debug__ = value;
        if (F.__debug__) {
            localStorage.setItem('footable_debug', JSON.stringify(F.__debug__));
            F.__debug_options__ = $.extend(true, {}, debug_defaults, options || {});
            if (F.is.hash(options)) {
                localStorage.setItem('footable_debug_options', JSON.stringify(F.__debug_options__));
            }
        } else {
            localStorage.removeItem('footable_debug');
            localStorage.removeItem('footable_debug_options');
        }
    };
    F.get = function(table) {
        return $(table).first().data('__FooTable__');
    };
    F.init = function(table, options, ready) {
        var ft = F.get(table);
        if (ft instanceof F.Table) ft.destroy();
        return new F.Table(table, options, ready);
    };
    F.getRow = function(element) {
        var $row = $(element).closest('tr');
        if ($row.hasClass('footable-detail-row')) {
            $row = $row.prev();
        }
        return $row.data('__FooTableRow__');
    };
})(jQuery, FooTable = window.FooTable || {});
(function(F) {
    var returnTrue = function() {
        return true;
    };
    F.arr = {};
    F.arr.each = function(array, func) {
        if (!F.is.array(array) || !F.is.fn(func)) return;
        for (var i = 0, len = array.length; i < len; i++) {
            if (func(array[i], i) === false) break;
        }
    };
    F.arr.get = function(array, where) {
        var result = [];
        if (!F.is.array(array)) return result;
        if (!F.is.fn(where)) return array;
        for (var i = 0, len = array.length; i < len; i++) {
            if (where(array[i], i)) result.push(array[i]);
        }
        return result;
    };
    F.arr.any = function(array, where) {
        if (!F.is.array(array)) return false;
        where = F.is.fn(where) ? where : returnTrue;
        for (var i = 0, len = array.length; i < len; i++) {
            if (where(array[i], i)) return true;
        }
        return false;
    };
    F.arr.contains = function(array, value) {
        if (!F.is.array(array) || F.is.undef(value)) return false;
        for (var i = 0, len = array.length; i < len; i++) {
            if (array[i] == value) return true;
        }
        return false;
    };
    F.arr.first = function(array, where) {
        if (!F.is.array(array)) return null;
        where = F.is.fn(where) ? where : returnTrue;
        for (var i = 0, len = array.length; i < len; i++) {
            if (where(array[i], i)) return array[i];
        }
        return null;
    };
    F.arr.map = function(array, getter) {
        var result = [],
            returned = null;
        if (!F.is.array(array) || !F.is.fn(getter)) return result;
        for (var i = 0, len = array.length; i < len; i++) {
            if ((returned = getter(array[i], i)) != null) result.push(returned);
        }
        return result;
    };
    F.arr.remove = function(array, where) {
        var remove = [],
            removed = [];
        if (!F.is.array(array) || !F.is.fn(where)) return removed;
        var i = 0,
            len = array.length;
        for (; i < len; i++) {
            if (where(array[i], i, removed)) {
                remove.push(i);
                removed.push(array[i]);
            }
        }
        remove.sort(function(a, b) {
            return b - a;
        });
        i = 0;
        len = remove.length;
        for (; i < len; i++) {
            var index = remove[i] - i;
            array.splice(index, 1);
        }
        return removed;
    };
    F.arr.delete = function(array, item) {
        var remove = -1,
            removed = null;
        if (!F.is.array(array) || F.is.undef(item)) return removed;
        var i = 0,
            len = array.length;
        for (; i < len; i++) {
            if (array[i] == item) {
                remove = i;
                removed = array[i];
                break;
            }
        }
        if (remove != -1) array.splice(remove, 1);
        return removed;
    };
    F.arr.replace = function(array, oldItem, newItem) {
        var index = array.indexOf(oldItem);
        if (index !== -1) array[index] = newItem;
    };
})(FooTable);
(function(F) {
    F.is = {};
    F.is.type = function(value, type) {
        return typeof value === type;
    };
    F.is.defined = function(value) {
        return typeof value !== 'undefined';
    };
    F.is.undef = function(value) {
        return typeof value === 'undefined';
    };
    F.is.array = function(value) {
        return '[object Array]' === Object.prototype.toString.call(value);
    };
    F.is.date = function(value) {
        return '[object Date]' === Object.prototype.toString.call(value) && !isNaN(value.getTime());
    };
    F.is.boolean = function(value) {
        return '[object Boolean]' === Object.prototype.toString.call(value);
    };
    F.is.string = function(value) {
        return '[object String]' === Object.prototype.toString.call(value);
    };
    F.is.number = function(value) {
        return '[object Number]' === Object.prototype.toString.call(value) && !isNaN(value);
    };
    F.is.fn = function(value) {
        return (F.is.defined(window) && value === window.alert) || '[object Function]' === Object.prototype.toString.call(value);
    };
    F.is.error = function(value) {
        return '[object Error]' === Object.prototype.toString.call(value);
    };
    F.is.object = function(value) {
        return '[object Object]' === Object.prototype.toString.call(value);
    };
    F.is.hash = function(value) {
        return F.is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
    };
    F.is.element = function(obj) {
        return typeof HTMLElement === 'object' ? obj instanceof HTMLElement : obj && typeof obj === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string';
    };
    F.is.promise = function(obj) {
        return F.is.object(obj) && F.is.fn(obj.then) && F.is.fn(obj.promise);
    };
    F.is.jq = function(obj) {
        return F.is.defined(window.jQuery) && obj instanceof jQuery && obj.length > 0;
    };
    F.is.moment = function(obj) {
        return F.is.defined(window.moment) && F.is.object(obj) && F.is.boolean(obj._isAMomentObject)
    };
    F.is.emptyObject = function(value) {
        if (!F.is.hash(value)) return false;
        for (var prop in value) {
            if (value.hasOwnProperty(prop))
                return false;
        }
        return true;
    };
    F.is.emptyArray = function(value) {
        return F.is.array(value) ? value.length === 0 : true;
    };
    F.is.emptyString = function(value) {
        return F.is.string(value) ? value.length === 0 : true;
    };
})(FooTable);
(function(F) {
    F.str = {};
    F.str.contains = function(str, contains, ignoreCase) {
        if (F.is.emptyString(str) || F.is.emptyString(contains)) return false;
        return contains.length <= str.length && (ignoreCase ? str.toUpperCase().indexOf(contains.toUpperCase()) : str.indexOf(contains)) !== -1;
    };
    F.str.containsExact = function(str, contains, ignoreCase) {
        if (F.is.emptyString(str) || F.is.emptyString(contains) || contains.length > str.length) return false;
        return new RegExp('\\b' + F.str.escapeRegExp(contains) + '\\b', ignoreCase ? 'i' : '').test(str);
    };
    F.str.containsWord = function(str, word, ignoreCase) {
        if (F.is.emptyString(str) || F.is.emptyString(word) || str.length < word.length)
            return false;
        var parts = str.split(/\W/);
        for (var i = 0, len = parts.length; i < len; i++) {
            if (ignoreCase ? parts[i].toUpperCase() == word.toUpperCase() : parts[i] == word) return true;
        }
        return false;
    };
    F.str.from = function(str, from) {
        if (F.is.emptyString(str)) return str;
        return F.str.contains(str, from) ? str.substring(str.indexOf(from) + 1) : str;
    };
    F.str.startsWith = function(str, prefix) {
        if (F.is.emptyString(str)) return str == prefix;
        return str.slice(0, prefix.length) == prefix;
    };
    F.str.toCamelCase = function(str) {
        if (F.is.emptyString(str)) return str;
        if (str.toUpperCase() === str) return str.toLowerCase();
        return str.replace(/^([A-Z])|[-\s_](\w)/g, function(match, p1, p2) {
            if (F.is.string(p2)) return p2.toUpperCase();
            return p1.toLowerCase();
        });
    };
    F.str.random = function(prefix) {
        prefix = F.is.emptyString(prefix) ? '' : prefix;
        return prefix + Math.random().toString(36).substr(2, 9);
    };
    F.str.escapeRegExp = function(str) {
        if (F.is.emptyString(str)) return str;
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    };
})(FooTable);
(function(F) {
    "use strict";
    if (!Object.create) {
        Object.create = (function() {
            var Object = function() {};
            return function(prototype) {
                if (arguments.length > 1)
                    throw Error('Second argument not supported');
                if (!F.is.object(prototype))
                    throw TypeError('Argument must be an object');
                Object.prototype = prototype;
                var result = new Object();
                Object.prototype = null;
                return result;
            };
        })();
    }

    function Class() {}
    var __extendable__ = /xyz/.test(function() {
        xyz;
    }) ? /\b_super\b/ : /.*/;
    Class.__extend__ = function(proto, name, func, original) {
        proto[name] = F.is.fn(original) && __extendable__.test(func) ? (function(name, fn) {
            return function() {
                var tmp, ret;
                tmp = this._super;
                this._super = original;
                ret = fn.apply(this, arguments);
                this._super = tmp;
                return ret;
            };
        })(name, func) : func;
    };
    Class.extend = function(arg1, arg2) {
        var args = Array.prototype.slice.call(arguments);
        arg1 = args.shift();
        arg2 = args.shift();

        function __extend__(proto, name, func, original) {
            proto[name] = F.is.fn(original) && __extendable__.test(func) ? (function(name, fn, ofn) {
                return function() {
                    var tmp, ret;
                    tmp = this._super;
                    this._super = ofn;
                    ret = fn.apply(this, arguments);
                    this._super = tmp;
                    return ret;
                };
            })(name, func, original) : func;
        }
        if (F.is.hash(arg1)) {
            var proto = Object.create(this.prototype),
                _super = this.prototype;
            for (var name in arg1) {
                if (name === '__ctor__') continue;
                __extend__(proto, name, arg1[name], _super[name]);
            }
            var obj = F.is.fn(proto.__ctor__) ? proto.__ctor__ : function() {
                if (!F.is.fn(this.construct))
                    throw new SyntaxError('FooTable class objects must be constructed with the "new" keyword.');
                this.construct.apply(this, arguments);
            };
            proto.construct = F.is.fn(proto.construct) ? proto.construct : function() {};
            obj.prototype = proto;
            proto.constructor = obj;
            obj.extend = Class.extend;
            return obj;
        } else if (F.is.string(arg1) && F.is.fn(arg2)) {
            __extend__(this.prototype, arg1, arg2, this.prototype[arg1]);
        }
    };
    F.Class = Class;
    F.ClassFactory = F.Class.extend({
        construct: function() {
            this.registered = {};
        },
        contains: function(name) {
            return F.is.defined(this.registered[name]);
        },
        names: function() {
            var names = [],
                name;
            for (name in this.registered) {
                if (!this.registered.hasOwnProperty(name)) continue;
                names.push(name);
            }
            return names;
        },
        register: function(name, klass, priority) {
            if (!F.is.string(name) || !F.is.fn(klass)) return;
            var current = this.registered[name];
            this.registered[name] = {
                name: name,
                klass: klass,
                priority: F.is.number(priority) ? priority : (F.is.defined(current) ? current.priority : 0)
            };
        },
        load: function(subs, arg1, argN) {
            var self = this,
                args = Array.prototype.slice.call(arguments),
                reg = [],
                loaded = [],
                name, klass;
            subs = args.shift() || {};
            for (name in self.registered) {
                if (!self.registered.hasOwnProperty(name)) continue;
                var component = self.registered[name];
                if (subs.hasOwnProperty(name)) {
                    klass = subs[name];
                    if (F.is.string(klass)) klass = F.getFnPointer(subs[name]);
                    if (F.is.fn(klass)) {
                        component = {
                            name: name,
                            klass: klass,
                            priority: self.registered[name].priority
                        };
                    }
                }
                reg.push(component);
            }
            for (name in subs) {
                if (!subs.hasOwnProperty(name) || self.registered.hasOwnProperty(name)) continue;
                klass = subs[name];
                if (F.is.string(klass)) klass = F.getFnPointer(subs[name]);
                if (F.is.fn(klass)) {
                    reg.push({
                        name: name,
                        klass: klass,
                        priority: 0
                    });
                }
            }
            reg.sort(function(a, b) {
                return b.priority - a.priority;
            });
            F.arr.each(reg, function(r) {
                if (F.is.fn(r.klass)) {
                    loaded.push(self._make(r.klass, args));
                }
            });
            return loaded;
        },
        make: function(name, arg1, argN) {
            var self = this,
                args = Array.prototype.slice.call(arguments),
                reg;
            name = args.shift();
            reg = self.registered[name];
            if (F.is.fn(reg.klass)) {
                return self._make(reg.klass, args);
            }
            return null;
        },
        _make: function(klass, args) {
            function Class() {
                return klass.apply(this, args);
            }
            Class.prototype = klass.prototype;
            return new Class();
        }
    });
})(FooTable);
(function($, F) {
    F.css2json = function(cssText) {
        if (F.is.emptyString(cssText)) return {};
        var json = {},
            props = cssText.split(';'),
            pair, key, value;
        for (var i = 0, i_len = props.length; i < i_len; i++) {
            if (F.is.emptyString(props[i])) continue;
            pair = props[i].split(':');
            if (F.is.emptyString(pair[0]) || F.is.emptyString(pair[1])) continue;
            key = F.str.toCamelCase($.trim(pair[0]));
            value = $.trim(pair[1]);
            json[key] = value;
        }
        return json;
    };
    F.getFnPointer = function(functionName) {
        if (F.is.emptyString(functionName)) return null;
        var pointer = window,
            parts = functionName.split('.');
        F.arr.each(parts, function(part) {
            if (pointer[part]) pointer = pointer[part];
        });
        return F.is.fn(pointer) ? pointer : null;
    };
    F.checkFnValue = function(self, value, def) {
        def = F.is.fn(def) ? def : null;

        function wrap(t, fn, d) {
            if (!F.is.fn(fn)) return d;
            return function() {
                return fn.apply(t, arguments);
            };
        }
        return F.is.fn(value) ? wrap(self, value, def) : (F.is.type(value, 'string') ? wrap(self, F.getFnPointer(value), def) : def);
    };
})(jQuery, FooTable);
(function($, F) {
    F.Cell = F.Class.extend({
        construct: function(table, row, column, valueOrElement) {
            this.ft = table;
            this.row = row;
            this.column = column;
            this.created = false;
            this.define(valueOrElement);
        },
        define: function(valueOrElement) {
            this.$el = F.is.element(valueOrElement) || F.is.jq(valueOrElement) ? $(valueOrElement) : null;
            this.$detail = null;
            var hasOptions = F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options) && F.is.defined(valueOrElement.value);
            this.value = this.column.parser.call(this.column, F.is.jq(this.$el) ? this.$el : (hasOptions ? valueOrElement.value : valueOrElement), this.ft.o);
            this.o = $.extend(true, {
                classes: null,
                style: null
            }, hasOptions ? valueOrElement.options : {});
            this.classes = F.is.jq(this.$el) && this.$el.attr('class') ? this.$el.attr('class').match(/\S+/g) : (F.is.array(this.o.classes) ? this.o.classes : (F.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : []));
            this.style = F.is.jq(this.$el) && this.$el.attr('style') ? F.css2json(this.$el.attr('style')) : (F.is.hash(this.o.style) ? this.o.style : (F.is.string(this.o.style) ? F.css2json(this.o.style) : {}));
        },
        $create: function() {
            if (this.created) return;
            (this.$el = F.is.jq(this.$el) ? this.$el : $('<td/>')).data('value', this.value).contents().detach().end().append(this.format(this.value));
            this._setClasses(this.$el);
            this._setStyle(this.$el);
            this.$detail = $('<tr/>').addClass(this.row.classes.join(' ')).data('__FooTableCell__', this).append($('<th/>')).append($('<td/>'));
            this.created = true;
        },
        collapse: function() {
            if (!this.created) return;
            this.$detail.children('th').html(this.column.title);
            this.$el.clone().attr('id', this.$el.attr('id') ? this.$el.attr('id') + '-detail' : undefined).css('display', 'table-cell').html('').append(this.$el.contents().detach()).replaceAll(this.$detail.children('td').first());
            if (!F.is.jq(this.$detail.parent()))
                this.$detail.appendTo(this.row.$details.find('.footable-details > tbody'));
        },
        restore: function() {
            if (!this.created) return;
            if (F.is.jq(this.$detail.parent())) {
                var $cell = this.$detail.children('td').first();
                this.$el.attr('class', $cell.attr('class')).attr('style', $cell.attr('style')).css('display', (this.column.hidden || !this.column.visible) ? 'none' : 'table-cell').append($cell.contents().detach());
            }
            this.$detail.detach();
        },
        parse: function() {
            return this.column.parser.call(this.column, this.$el, this.ft.o);
        },
        format: function(value) {
            return this.column.formatter.call(this.column, value, this.ft.o, this.row.value);
        },
        val: function(value, redraw, redrawSelf) {
            if (F.is.undef(value)) {
                return this.value;
            }
            var self = this,
                hasOptions = F.is.hash(value) && F.is.hash(value.options) && F.is.defined(value.value);
            this.o = $.extend(true, {
                classes: self.classes,
                style: self.style
            }, hasOptions ? value.options : {});
            this.value = hasOptions ? value.value : value;
            this.classes = F.is.array(this.o.classes) ? this.o.classes : (F.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : []);
            this.style = F.is.hash(this.o.style) ? this.o.style : (F.is.string(this.o.style) ? F.css2json(this.o.style) : {});
            redrawSelf = F.is.boolean(redrawSelf) ? redrawSelf : true;
            if (this.created && redrawSelf) {
                this.$el.data('value', this.value).empty();
                var $detail = this.$detail.children('td').first().empty(),
                    $target = F.is.jq(this.$detail.parent()) ? $detail : this.$el;
                $target.append(this.format(this.value));
                this._setClasses($target);
                this._setStyle($target);
                if (F.is.boolean(redraw) ? redraw : true) this.row.draw();
            }
        },
        _setClasses: function($el) {
            var hasColClasses = !F.is.emptyArray(this.column.classes),
                hasClasses = !F.is.emptyArray(this.classes),
                classes = null;
            $el.removeAttr('class');
            if (!hasColClasses && !hasClasses) return;
            if (hasColClasses && hasClasses) {
                classes = this.classes.concat(this.column.classes).join(' ');
            } else if (hasColClasses) {
                classes = this.column.classes.join(' ');
            } else if (hasClasses) {
                classes = this.classes.join(' ');
            }
            if (!F.is.emptyString(classes)) {
                $el.addClass(classes);
            }
        },
        _setStyle: function($el) {
            var hasColStyle = !F.is.emptyObject(this.column.style),
                hasStyle = !F.is.emptyObject(this.style),
                style = null;
            $el.removeAttr('style');
            if (!hasColStyle && !hasStyle) return;
            if (hasColStyle && hasStyle) {
                style = $.extend({}, this.column.style, this.style);
            } else if (hasColStyle) {
                style = this.column.style;
            } else if (hasStyle) {
                style = this.style;
            }
            if (F.is.hash(style)) {
                $el.css(style);
            }
        }
    });
})(jQuery, FooTable);
(function($, F) {
    F.Column = F.Class.extend({
        construct: function(instance, definition, type) {
            this.ft = instance;
            this.type = F.is.emptyString(type) ? 'text' : type;
            this.virtual = F.is.boolean(definition.virtual) ? definition.virtual : false;
            this.$el = F.is.jq(definition.$el) ? definition.$el : null;
            this.index = F.is.number(definition.index) ? definition.index : -1;
            this.internal = false;
            this.define(definition);
            this.$create();
        },
        define: function(definition) {
            this.hidden = F.is.boolean(definition.hidden) ? definition.hidden : false;
            this.visible = F.is.boolean(definition.visible) ? definition.visible : true;
            this.name = F.is.string(definition.name) ? definition.name : null;
            if (this.name == null) this.name = 'col' + (definition.index + 1);
            this.title = F.is.string(definition.title) ? definition.title : null;
            if (!this.virtual && this.title == null && F.is.jq(this.$el)) this.title = this.$el.html();
            if (this.title == null) this.title = 'Column ' + (definition.index + 1);
            this.style = F.is.hash(definition.style) ? definition.style : (F.is.string(definition.style) ? F.css2json(definition.style) : {});
            this.classes = F.is.array(definition.classes) ? definition.classes : (F.is.string(definition.classes) ? definition.classes.match(/\S+/g) : []);
            this.parser = F.checkFnValue(this, definition.parser, this.parser);
            this.formatter = F.checkFnValue(this, definition.formatter, this.formatter);
        },
        $create: function() {
            (this.$el = !this.virtual && F.is.jq(this.$el) ? this.$el : $('<th/>')).html(this.title).addClass(this.classes.join(' ')).css(this.style);
        },
        parser: function(valueOrElement) {
            if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)) {
                var data = $(valueOrElement).data('value');
                return F.is.defined(data) ? data : $(valueOrElement).html();
            }
            if (F.is.defined(valueOrElement) && valueOrElement != null) return valueOrElement + '';
            return null;
        },
        formatter: function(value, options, rowData) {
            return value == null ? '' : value;
        },
        createCell: function(row) {
            var element = F.is.jq(row.$el) ? row.$el.children('td,th').get(this.index) : null,
                data = F.is.hash(row.value) ? row.value[this.name] : null;
            return new F.Cell(this.ft, row, this, element || data);
        }
    });
    F.columns = new F.ClassFactory();
    F.columns.register('text', F.Column);
})(jQuery, FooTable);
(function($, F) {
    F.Component = F.Class.extend({
        construct: function(instance, enabled) {
            if (!(instance instanceof F.Table))
                throw new TypeError('The instance parameter must be an instance of FooTable.Table.');
            this.ft = instance;
            this.enabled = F.is.boolean(enabled) ? enabled : false;
        },
        preinit: function(data) {},
        init: function() {},
        destroy: function() {},
        predraw: function() {},
        draw: function() {},
        postdraw: function() {}
    });
    F.components = new F.ClassFactory();
})(jQuery, FooTable);
(function($, F) {
    F.Defaults = function() {
        this.stopPropagation = false;
        this.on = null;
    };
    F.defaults = new F.Defaults();
})(jQuery, FooTable);
(function($, F) {
    F.Row = F.Class.extend({
        construct: function(table, columns, dataOrElement) {
            this.ft = table;
            this.columns = columns;
            this.created = false;
            this.define(dataOrElement);
        },
        define: function(dataOrElement) {
            this.$el = F.is.element(dataOrElement) || F.is.jq(dataOrElement) ? $(dataOrElement) : null;
            this.$toggle = $('<span/>', {
                'class': 'footable-toggle fooicon fooicon-plus'
            });
            var isObj = F.is.hash(dataOrElement),
                hasOptions = isObj && F.is.hash(dataOrElement.options) && F.is.hash(dataOrElement.value);
            this.value = isObj ? (hasOptions ? dataOrElement.value : dataOrElement) : null;
            this.o = $.extend(true, {
                expanded: false,
                classes: null,
                style: null
            }, hasOptions ? dataOrElement.options : {});
            this.expanded = F.is.jq(this.$el) ? (this.$el.data('expanded') || this.o.expanded) : this.o.expanded;
            this.classes = F.is.jq(this.$el) && this.$el.attr('class') ? this.$el.attr('class').match(/\S+/g) : (F.is.array(this.o.classes) ? this.o.classes : (F.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : []));
            this.style = F.is.jq(this.$el) && this.$el.attr('style') ? F.css2json(this.$el.attr('style')) : (F.is.hash(this.o.style) ? this.o.style : (F.is.string(this.o.style) ? F.css2json(this.o.style) : {}));
            this.cells = this.createCells();
            var self = this;
            self.value = {};
            F.arr.each(self.cells, function(cell) {
                self.value[cell.column.name] = cell.val();
            });
        },
        $create: function() {
            if (this.created) return;
            (this.$el = F.is.jq(this.$el) ? this.$el : $('<tr/>')).data('__FooTableRow__', this);
            this._setClasses(this.$el);
            this._setStyle(this.$el);
            if (this.ft.rows.toggleColumn == 'last') this.$toggle.addClass('last-column');
            this.$details = $('<tr/>', {
                'class': 'footable-detail-row'
            }).append($('<td/>', {
                colspan: this.ft.columns.visibleColspan
            }).append($('<table/>', {
                'class': 'footable-details ' + this.ft.classes.join(' ')
            }).append('<tbody/>')));
            var self = this;
            F.arr.each(self.cells, function(cell) {
                if (!cell.created) cell.$create();
                self.$el.append(cell.$el);
            });
            self.$el.off('click.ft.row').on('click.ft.row', {
                self: self
            }, self._onToggle);
            this.created = true;
        },
        createCells: function() {
            var self = this;
            return F.arr.map(self.columns, function(col) {
                return col.createCell(self);
            });
        },
        val: function(data, redraw, redrawSelf) {
            var self = this;
            if (!F.is.hash(data)) {
                if (!F.is.hash(this.value) || F.is.emptyObject(this.value)) {
                    this.value = {};
                    F.arr.each(this.cells, function(cell) {
                        if (!cell.column.internal) {
                            self.value[cell.column.name] = cell.val();
                        }
                    });
                }
                return this.value;
            }
            this.collapse(false);
            var isObj = F.is.hash(data),
                hasOptions = isObj && F.is.hash(data.options) && F.is.hash(data.value);
            this.o = $.extend(true, {
                expanded: self.expanded,
                classes: self.classes,
                style: self.style
            }, hasOptions ? data.options : {});
            this.expanded = this.o.expanded;
            this.classes = F.is.array(this.o.classes) ? this.o.classes : (F.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : []);
            this.style = F.is.hash(this.o.style) ? this.o.style : (F.is.string(this.o.style) ? F.css2json(this.o.style) : {});
            if (isObj) {
                if (hasOptions) data = data.value;
                if (F.is.hash(this.value)) {
                    for (var prop in data) {
                        if (!data.hasOwnProperty(prop)) continue;
                        this.value[prop] = data[prop];
                    }
                } else {
                    this.value = data;
                }
            } else {
                this.value = null;
            }
            redrawSelf = F.is.boolean(redrawSelf) ? redrawSelf : true;
            F.arr.each(this.cells, function(cell) {
                if (!cell.column.internal && F.is.defined(self.value[cell.column.name])) {
                    cell.val(self.value[cell.column.name], false, redrawSelf);
                }
            });
            if (this.created && redrawSelf) {
                this._setClasses(this.$el);
                this._setStyle(this.$el);
                if (F.is.boolean(redraw) ? redraw : true) this.draw();
            }
        },
        _setClasses: function($el) {
            var hasClasses = !F.is.emptyArray(this.classes),
                classes = null;
            $el.removeAttr('class');
            if (!hasClasses) return;
            else classes = this.classes.join(' ');
            if (!F.is.emptyString(classes)) {
                $el.addClass(classes);
            }
        },
        _setStyle: function($el) {
            var hasStyle = !F.is.emptyObject(this.style),
                style = null;
            $el.removeAttr('style');
            if (!hasStyle) return;
            else style = this.style;
            if (F.is.hash(style)) {
                $el.css(style);
            }
        },
        expand: function() {
            if (!this.created) return;
            var self = this;
            self.ft.raise('expand.ft.row', [self]).then(function() {
                self.__hidden__ = F.arr.map(self.cells, function(cell) {
                    return cell.column.hidden && cell.column.visible ? cell : null;
                });
                if (self.__hidden__.length > 0) {
                    self.$details.insertAfter(self.$el).children('td').first().attr('colspan', self.ft.columns.visibleColspan);
                    F.arr.each(self.__hidden__, function(cell) {
                        cell.collapse();
                    });
                }
                self.$el.attr('data-expanded', true);
                self.$toggle.removeClass('fooicon-plus').addClass('fooicon-minus');
                self.expanded = true;
                self.ft.raise('expanded.ft.row', [self]);
            });
        },
        collapse: function(setExpanded) {
            if (!this.created) return;
            var self = this;
            self.ft.raise('collapse.ft.row', [self]).then(function() {
                F.arr.each(self.__hidden__, function(cell) {
                    cell.restore();
                });
                self.$details.detach();
                self.$el.removeAttr('data-expanded');
                self.$toggle.removeClass('fooicon-minus').addClass('fooicon-plus');
                if (F.is.boolean(setExpanded) ? setExpanded : true) self.expanded = false;
                self.ft.raise('collapsed.ft.row', [self]);
            });
        },
        predraw: function(detach) {
            if (this.created) {
                if (this.expanded) {
                    this.collapse(false);
                }
                this.$toggle.detach();
                detach = F.is.boolean(detach) ? detach : true;
                if (detach) this.$el.detach();
            }
        },
        draw: function($parent) {
            if (!this.created) this.$create();
            if (F.is.jq($parent)) $parent.append(this.$el);
            var self = this;
            F.arr.each(self.cells, function(cell) {
                cell.$el.css('display', (cell.column.hidden || !cell.column.visible ? 'none' : 'table-cell'));
                if (self.ft.rows.showToggle && self.ft.columns.hasHidden) {
                    if ((self.ft.rows.toggleColumn == 'first' && cell.column.index == self.ft.columns.firstVisibleIndex) || (self.ft.rows.toggleColumn == 'last' && cell.column.index == self.ft.columns.lastVisibleIndex)) {
                        cell.$el.prepend(self.$toggle);
                    }
                }
                cell.$el.add(cell.column.$el).removeClass('footable-first-visible footable-last-visible');
                if (cell.column.index == self.ft.columns.firstVisibleIndex) {
                    cell.$el.add(cell.column.$el).addClass('footable-first-visible');
                }
                if (cell.column.index == self.ft.columns.lastVisibleIndex) {
                    cell.$el.add(cell.column.$el).addClass('footable-last-visible');
                }
            });
            if (this.expanded) {
                this.expand();
            }
        },
        toggle: function() {
            if (this.created && this.ft.columns.hasHidden) {
                if (this.expanded) this.collapse();
                else this.expand();
            }
        },
        _onToggle: function(e) {
            var self = e.data.self;
            if ($(e.target).is(self.ft.rows.toggleSelector)) {
                self.toggle();
            }
        }
    });
})(jQuery, FooTable);
(function($, F) {
    F.instances = [];
    F.Table = F.Class.extend({
        construct: function(element, options, ready) {
            this._resizeTimeout = null;
            this.id = F.instances.push(this);
            this.initialized = false;
            this.$el = (F.is.jq(element) ? element : $(element)).first();
            this.$loader = $('<div/>', {
                'class': 'footable-loader'
            }).append($('<span/>', {
                'class': 'fooicon fooicon-loader'
            }));
            this.o = $.extend(true, {}, F.defaults, options);
            this.data = this.$el.data() || {};
            this.classes = [];
            this.components = F.components.load((F.is.hash(this.data.components) ? this.data.components : this.o.components), this);
            this.breakpoints = this.use(FooTable.Breakpoints);
            this.columns = this.use(FooTable.Columns);
            this.rows = this.use(FooTable.Rows);
            this._construct(ready);
        },
        _construct: function(ready) {
            var self = this;
            return this._preinit().then(function() {
                return self._init().then(function() {
                    return self.raise('ready.ft.table').then(function() {
                        if (F.is.fn(ready)) ready.call(self, self);
                    });
                });
            }).always(function(arg) {
                self.$el.show();
                if (F.is.error(arg)) {
                    console.error('FooTable: unhandled error thrown during initialization.', arg);
                }
            });
        },
        _preinit: function() {
            var self = this;
            return this.raise('preinit.ft.table', [self.data]).then(function() {
                var classes = (self.$el.attr('class') || '').match(/\S+/g) || [];
                self.o.ajax = F.checkFnValue(self, self.data.ajax, self.o.ajax);
                self.o.stopPropagation = F.is.boolean(self.data.stopPropagation) ? self.data.stopPropagation : self.o.stopPropagation;
                for (var i = 0, len = classes.length; i < len; i++) {
                    if (!F.str.startsWith(classes[i], 'footable')) self.classes.push(classes[i]);
                }
                self.$el.hide().after(self.$loader);
                return self.execute(false, false, 'preinit', self.data);
            });
        },
        _init: function() {
            var self = this;
            return self.raise('init.ft.table').then(function() {
                var $thead = self.$el.children('thead'),
                    $tbody = self.$el.children('tbody'),
                    $tfoot = self.$el.children('tfoot');
                self.$el.addClass('footable footable-' + self.id);
                if (F.is.hash(self.o.on)) self.$el.on(self.o.on);
                if ($tfoot.length == 0) self.$el.append($tfoot = $('<tfoot/>'));
                if ($tbody.length == 0) self.$el.append('<tbody/>');
                if ($thead.length == 0) self.$el.prepend($thead = $('<thead/>'));
                return self.execute(false, true, 'init').then(function() {
                    self.$el.data('__FooTable__', self);
                    if ($tfoot.children('tr').length == 0) $tfoot.remove();
                    if ($thead.children('tr').length == 0) $thead.remove();
                    return self.raise('postinit.ft.table').then(function() {
                        return self.draw();
                    }).always(function() {
                        $(window).off('resize.ft' + self.id, self._onWindowResize).on('resize.ft' + self.id, {
                            self: self
                        }, self._onWindowResize);
                        self.initialized = true;
                    });
                });
            });
        },
        destroy: function() {
            var self = this;
            return self.raise('destroy.ft.table').then(function() {
                return self.execute(true, true, 'destroy').then(function() {
                    self.$el.removeData('__FooTable__').removeClass('footable-' + self.id);
                    if (F.is.hash(self.o.on)) self.$el.off(self.o.on);
                    $(window).off('resize.ft' + self.id, self._onWindowResize);
                    self.initialized = false;
                    F.instances[self.id] = null;
                });
            }).fail(function(err) {
                if (F.is.error(err)) {
                    console.error('FooTable: unhandled error thrown while destroying the plugin.', err);
                }
            });
        },
        raise: function(eventName, args) {
            var self = this,
                debug = F.__debug__ && (F.is.emptyArray(F.__debug_options__.events) || F.arr.any(F.__debug_options__.events, function(name) {
                    return F.str.contains(eventName, name);
                }));
            args = args || [];
            args.unshift(this);
            return $.Deferred(function(d) {
                var evt = $.Event(eventName);
                if (self.o.stopPropagation == true) {
                    self.$el.one(eventName, function(e) {
                        e.stopPropagation();
                    });
                }
                if (debug) console.log('FooTable:' + eventName + ': ', args);
                self.$el.trigger(evt, args);
                if (evt.isDefaultPrevented()) {
                    if (debug) console.log('FooTable: default prevented for the "' + eventName + '" event.');
                    d.reject(evt);
                } else d.resolve(evt);
            });
        },
        use: function(type) {
            for (var i = 0, len = this.components.length; i < len; i++) {
                if (this.components[i] instanceof type) return this.components[i];
            }
            return null;
        },
        draw: function() {
            var self = this;
            var $elCopy = self.$el.clone().insertBefore(self.$el);
            self.$el.detach();
            return self.execute(false, true, 'predraw').then(function() {
                return self.raise('predraw.ft.table').then(function() {
                    return self.execute(false, true, 'draw').then(function() {
                        return self.raise('draw.ft.table').then(function() {
                            return self.execute(false, true, 'postdraw').then(function() {
                                return self.raise('postdraw.ft.table');
                            });
                        });
                    });
                });
            }).fail(function(err) {
                if (F.is.error(err)) {
                    console.error('FooTable: unhandled error thrown during a draw operation.', err);
                }
            }).always(function() {
                $elCopy.replaceWith(self.$el);
                self.$loader.remove();
            });
        },
        execute: function(reverse, enabled, methodName, param1, paramN) {
            var self = this,
                args = Array.prototype.slice.call(arguments);
            reverse = args.shift();
            enabled = args.shift();
            var components = enabled ? F.arr.get(self.components, function(c) {
                return c.enabled;
            }) : self.components.slice(0);
            args.unshift(reverse ? components.reverse() : components);
            return self._execute.apply(self, args);
        },
        _execute: function(components, methodName, param1, paramN) {
            if (!components || !components.length) return $.when();
            var self = this,
                args = Array.prototype.slice.call(arguments),
                component;
            components = args.shift();
            methodName = args.shift();
            component = components.shift();
            if (!F.is.fn(component[methodName]))
                return self._execute.apply(self, [components, methodName].concat(args));
            return $.Deferred(function(d) {
                try {
                    var result = component[methodName].apply(component, args);
                    if (F.is.promise(result)) {
                        return result.then(d.resolve, d.reject);
                    } else {
                        d.resolve(result);
                    }
                } catch (err) {
                    d.reject(err);
                }
            }).then(function() {
                return self._execute.apply(self, [components, methodName].concat(args));
            });
        },
        _onWindowResize: function(e) {
            var self = e.data.self;
            if (self._resizeTimeout != null) {
                clearTimeout(self._resizeTimeout);
            }
            self._resizeTimeout = setTimeout(function() {
                self._resizeTimeout = null;
                self.raise('resize.ft.table').then(function() {
                    self.breakpoints.check();
                });
            }, 300);
        }
    });
})(jQuery, FooTable);
(function($, F) {
    F.ArrayColumn = F.Column.extend({
        construct: function(instance, definition) {
            this._super(instance, definition, 'array');
        },
        parser: function(valueOrElement) {
            if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)) {
                var $el = $(valueOrElement),
                    data = $el.data('value');
                if (F.is.array(data)) return data;
                data = $el.html();
                try {
                    data = JSON.parse(data);
                } catch (err) {
                    data = null;
                }
                return F.is.array(data) ? data : null;
            }
            if (F.is.array(valueOrElement)) return valueOrElement;
            return null;
        },
        formatter: function(value, options, rowData) {
            return F.is.array(value) ? JSON.stringify(value) : '';
        }
    });
    F.columns.register('array', F.ArrayColumn);
})(jQuery, FooTable);
(function($, F) {
    if (F.is.undef(window.moment)) {
        return;
    }
    F.DateColumn = F.Column.extend({
        construct: function(instance, definition) {
            this._super(instance, definition, 'date');
            this.formatString = F.is.string(definition.formatString) ? definition.formatString : 'MM-DD-YYYY';
        },
        parser: function(valueOrElement) {
            if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)) {
                var data = $(valueOrElement).data('value');
                valueOrElement = F.is.defined(data) ? data : $(valueOrElement).text();
                if (F.is.string(valueOrElement)) valueOrElement = isNaN(valueOrElement) ? valueOrElement : +valueOrElement;
            }
            if (F.is.date(valueOrElement)) return moment(valueOrElement);
            if (F.is.object(valueOrElement) && F.is.boolean(valueOrElement._isAMomentObject)) return valueOrElement;
            if (F.is.string(valueOrElement)) {
                if (isNaN(valueOrElement)) {
                    return moment(valueOrElement, this.formatString);
                } else {
                    valueOrElement = +valueOrElement;
                }
            }
            if (F.is.number(valueOrElement)) {
                return moment(valueOrElement);
            }
            return null;
        },
        formatter: function(value, options, rowData) {
            return F.is.object(value) && F.is.boolean(value._isAMomentObject) && value.isValid() ? value.format(this.formatString) : '';
        },
        filterValue: function(valueOrElement) {
            if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)) valueOrElement = $(valueOrElement).data('filterValue') || $(valueOrElement).text();
            if (F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options)) {
                if (F.is.string(valueOrElement.options.filterValue)) valueOrElement = valueOrElement.options.filterValue;
                if (F.is.defined(valueOrElement.value)) valueOrElement = valueOrElement.value;
            }
            if (F.is.object(valueOrElement) && F.is.boolean(valueOrElement._isAMomentObject)) return valueOrElement.format(this.formatString);
            if (F.is.string(valueOrElement)) {
                if (isNaN(valueOrElement)) {
                    return valueOrElement;
                } else {
                    valueOrElement = +valueOrElement;
                }
            }
            if (F.is.number(valueOrElement) || F.is.date(valueOrElement)) {
                return moment(valueOrElement).format(this.formatString);
            }
            if (F.is.defined(valueOrElement) && valueOrElement != null) return valueOrElement + '';
            return '';
        }
    });
    F.columns.register('date', F.DateColumn);
})(jQuery, FooTable);
(function($, F) {
    F.HTMLColumn = F.Column.extend({
        construct: function(instance, definition) {
            this._super(instance, definition, 'html');
        },
        parser: function(valueOrElement) {
            if (F.is.string(valueOrElement)) valueOrElement = $($.trim(valueOrElement));
            if (F.is.element(valueOrElement)) valueOrElement = $(valueOrElement);
            if (F.is.jq(valueOrElement)) {
                var tagName = valueOrElement.prop('tagName').toLowerCase();
                if (tagName == 'td' || tagName == 'th') {
                    var data = valueOrElement.data('value');
                    return F.is.defined(data) ? data : valueOrElement.contents();
                }
                return valueOrElement;
            }
            return null;
        }
    });
    F.columns.register('html', F.HTMLColumn);
})(jQuery, FooTable);
(function($, F) {
    F.NumberColumn = F.Column.extend({
        construct: function(instance, definition) {
            this._super(instance, definition, 'number');
            this.decimalSeparator = F.is.string(definition.decimalSeparator) ? definition.decimalSeparator : '.';
            this.thousandSeparator = F.is.string(definition.thousandSeparator) ? definition.thousandSeparator : ',';
            this.decimalSeparatorRegex = new RegExp(F.str.escapeRegExp(this.decimalSeparator), 'g');
            this.thousandSeparatorRegex = new RegExp(F.str.escapeRegExp(this.thousandSeparator), 'g');
            this.cleanRegex = new RegExp('[^\-0-9' + F.str.escapeRegExp(this.decimalSeparator) + ']', 'g');
        },
        parser: function(valueOrElement) {
            if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)) {
                var data = $(valueOrElement).data('value');
                valueOrElement = F.is.defined(data) ? data : $(valueOrElement).text().replace(this.cleanRegex, '');
            }
            if (F.is.string(valueOrElement)) {
                valueOrElement = valueOrElement.replace(this.thousandSeparatorRegex, '').replace(this.decimalSeparatorRegex, '.');
                valueOrElement = parseFloat(valueOrElement);
            }
            if (F.is.number(valueOrElement)) return valueOrElement;
            return null;
        },
        formatter: function(value, options, rowData) {
            if (value == null) return '';
            var s = (value + '').split('.');
            if (s.length == 2 && s[0].length > 3) {
                s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.thousandSeparator);
            }
            return s.join(this.decimalSeparator);
        }
    });
    F.columns.register('number', F.NumberColumn);
})(jQuery, FooTable);
(function($, F) {
    F.ObjectColumn = F.Column.extend({
        construct: function(instance, definition) {
            this._super(instance, definition, 'object');
        },
        parser: function(valueOrElement) {
            if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)) {
                var $el = $(valueOrElement),
                    data = $el.data('value');
                if (F.is.object(data)) return data;
                data = $el.html();
                try {
                    data = JSON.parse(data);
                } catch (err) {
                    data = null;
                }
                return F.is.object(data) ? data : null;
            }
            if (F.is.object(valueOrElement)) return valueOrElement;
            return null;
        },
        formatter: function(value, options, rowData) {
            return F.is.object(value) ? JSON.stringify(value) : '';
        }
    });
    F.columns.register('object', F.ObjectColumn);
})(jQuery, FooTable);
(function($, F) {
    F.Breakpoint = F.Class.extend({
        construct: function(name, width) {
            this.name = name;
            this.width = width;
        }
    });
})(jQuery, FooTable);
(function($, F) {
    F.Breakpoints = F.Component.extend({
        construct: function(table) {
            this._super(table, true);
            this.o = table.o;
            this.current = null;
            this.array = [];
            this.cascade = this.o.cascade;
            this.useParentWidth = this.o.useParentWidth;
            this.hidden = null;
            this._classNames = '';
            this.getWidth = F.checkFnValue(this, this.o.getWidth, this.getWidth);
        },
        preinit: function(data) {
            var self = this;
            return this.ft.raise('preinit.ft.breakpoints', [data]).then(function() {
                self.cascade = F.is.boolean(data.cascade) ? data.cascade : self.cascade;
                self.o.breakpoints = F.is.hash(data.breakpoints) ? data.breakpoints : self.o.breakpoints;
                self.getWidth = F.checkFnValue(self, data.getWidth, self.getWidth);
                if (self.o.breakpoints == null) self.o.breakpoints = {
                    "xs": 480,
                    "sm": 768,
                    "md": 992,
                    "lg": 1200
                };
                for (var name in self.o.breakpoints) {
                    if (!self.o.breakpoints.hasOwnProperty(name)) continue;
                    self.array.push(new F.Breakpoint(name, self.o.breakpoints[name]));
                    self._classNames += 'breakpoint-' + name + ' ';
                }
                self.array.sort(function(a, b) {
                    return b.width - a.width;
                });
            });
        },
        init: function() {
            var self = this;
            return this.ft.raise('init.ft.breakpoints').then(function() {
                self.current = self.get();
            });
        },
        draw: function() {
            this.ft.$el.removeClass(this._classNames).addClass('breakpoint-' + this.current.name);
        },
        calculate: function() {
            var self = this,
                current = null,
                hidden = [],
                breakpoint, prev = null,
                width = self.getWidth();
            for (var i = 0, len = self.array.length; i < len; i++) {
                breakpoint = self.array[i];
                if ((!current && i == len - 1) || (width >= breakpoint.width && (prev instanceof F.Breakpoint ? width < prev.width : true))) {
                    current = breakpoint;
                }
                if (!current) hidden.push(breakpoint.name);
                prev = breakpoint;
            }
            hidden.push(current.name);
            self.hidden = hidden.join(' ');
            return current;
        },
        visible: function(breakpoints) {
            if (F.is.emptyString(breakpoints)) return true;
            if (breakpoints === 'all') return false;
            var parts = breakpoints.split(' '),
                i = 0,
                len = parts.length;
            for (; i < len; i++) {
                if (this.cascade ? F.str.containsWord(this.hidden, parts[i]) : parts[i] == this.current.name) return false;
            }
            return true;
        },
        check: function() {
            var self = this,
                bp = self.get();
            if (!(bp instanceof F.Breakpoint) || bp == self.current)
                return;
            self.ft.raise('before.ft.breakpoints', [self.current, bp]).then(function() {
                var previous = self.current;
                self.current = bp;
                return self.ft.draw().then(function() {
                    self.ft.raise('after.ft.breakpoints', [self.current, previous]);
                });
            });
        },
        get: function(breakpoint) {
            if (F.is.undef(breakpoint)) return this.calculate();
            if (breakpoint instanceof F.Breakpoint) return breakpoint;
            if (F.is.string(breakpoint)) return F.arr.first(this.array, function(bp) {
                return bp.name == breakpoint;
            });
            if (F.is.number(breakpoint)) return breakpoint >= 0 && breakpoint < this.array.length ? this.array[breakpoint] : null;
            return null;
        },
        getWidth: function() {
            if (F.is.fn(this.o.getWidth)) return this.o.getWidth(this.ft);
            if (this.useParentWidth == true) return this.getParentWidth();
            return this.getViewportWidth();
        },
        getParentWidth: function() {
            return this.ft.$el.parent().width();
        },
        getViewportWidth: function() {
            return Math.max(document.documentElement.clientWidth, window.innerWidth, 0);
        }
    });
    F.components.register('breakpoints', F.Breakpoints, 1000);
})(jQuery, FooTable);
(function(F) {
    F.Column.prototype.breakpoints = null;
    F.Column.prototype.__breakpoints_define__ = function(definition) {
        this.breakpoints = F.is.emptyString(definition.breakpoints) ? null : definition.breakpoints;
    };
    F.Column.extend('define', function(definition) {
        this._super(definition);
        this.__breakpoints_define__(definition);
    });
})(FooTable);
(function(F) {
    F.Defaults.prototype.breakpoints = null;
    F.Defaults.prototype.cascade = false;
    F.Defaults.prototype.useParentWidth = false;
    F.Defaults.prototype.getWidth = null;
})(FooTable);
(function($, F) {
    F.Columns = F.Component.extend({
        construct: function(table) {
            this._super(table, true);
            this.o = table.o;
            this.array = [];
            this.$header = null;
            this.showHeader = table.o.showHeader;
            this._fromHTML = F.is.emptyArray(table.o.columns) && !F.is.promise(table.o.columns);
        },
        parse: function(data) {
            var self = this;
            return $.Deferred(function(d) {
                function merge(cols1, cols2) {
                    var merged = [];
                    if (cols1.length == 0 || cols2.length == 0) {
                        merged = cols1.concat(cols2);
                    } else {
                        var highest = 0;
                        F.arr.each(cols1.concat(cols2), function(c) {
                            if (c.index > highest) highest = c.index;
                        });
                        highest++;
                        for (var i = 0, cols1_c, cols2_c; i < highest; i++) {
                            cols1_c = {};
                            F.arr.each(cols1, function(c) {
                                if (c.index == i) {
                                    cols1_c = c;
                                    return false;
                                }
                            });
                            cols2_c = {};
                            F.arr.each(cols2, function(c) {
                                if (c.index == i) {
                                    cols2_c = c;
                                    return false;
                                }
                            });
                            merged.push($.extend(true, {}, cols1_c, cols2_c));
                        }
                    }
                    return merged;
                }
                var json = [],
                    html = [];
                var $header = self.ft.$el.find('tr.footable-header, thead > tr:last:has([data-breakpoints]), tbody > tr:first:has([data-breakpoints]), thead > tr:last, tbody > tr:first').first(),
                    $cell, cdata;
                if ($header.length > 0) {
                    var virtual = $header.parent().is('tbody') && $header.children().length == $header.children('td').length;
                    if (!virtual) self.$header = $header.addClass('footable-header');
                    $header.children('td,th').each(function(i, cell) {
                        $cell = $(cell);
                        cdata = $cell.data();
                        cdata.index = i;
                        cdata.$el = $cell;
                        cdata.virtual = virtual;
                        html.push(cdata);
                    });
                    if (virtual) self.showHeader = false;
                }
                if (F.is.array(self.o.columns) && !F.is.emptyArray(self.o.columns)) {
                    F.arr.each(self.o.columns, function(c, i) {
                        c.index = i;
                        json.push(c);
                    });
                    self.parseFinalize(d, merge(json, html));
                } else if (F.is.promise(self.o.columns)) {
                    self.o.columns.then(function(cols) {
                        F.arr.each(cols, function(c, i) {
                            c.index = i;
                            json.push(c);
                        });
                        self.parseFinalize(d, merge(json, html));
                    }, function(xhr) {
                        d.reject(Error('Columns ajax request error: ' + xhr.status + ' (' + xhr.statusText + ')'));
                    });
                } else {
                    self.parseFinalize(d, merge(json, html));
                }
            });
        },
        parseFinalize: function(deferred, cols) {
            var self = this,
                columns = [],
                column;
            F.arr.each(cols, function(def) {
                if (column = F.columns.contains(def.type) ? F.columns.make(def.type, self.ft, def) : new F.Column(self.ft, def))
                    columns.push(column);
            });
            if (F.is.emptyArray(columns)) {
                deferred.reject(Error("No columns supplied."));
            } else {
                columns.sort(function(a, b) {
                    return a.index - b.index;
                });
                deferred.resolve(columns);
            }
        },
        preinit: function(data) {
            var self = this;
            return self.ft.raise('preinit.ft.columns', [data]).then(function() {
                return self.parse(data).then(function(columns) {
                    self.array = columns;
                    self.showHeader = F.is.boolean(data.showHeader) ? data.showHeader : self.showHeader;
                });
            });
        },
        init: function() {
            var self = this;
            return this.ft.raise('init.ft.columns', [self.array]).then(function() {
                self.$create();
            });
        },
        destroy: function() {
            var self = this;
            this.ft.raise('destroy.ft.columns').then(function() {
                if (!self._fromHTML) self.$header.remove();
            });
        },
        predraw: function() {
            var self = this,
                first = true;
            self.visibleColspan = 0;
            self.firstVisibleIndex = 0;
            self.lastVisibleIndex = 0;
            self.hasHidden = false;
            F.arr.each(self.array, function(col) {
                col.hidden = !self.ft.breakpoints.visible(col.breakpoints);
                if (!col.hidden && col.visible) {
                    if (first) {
                        self.firstVisibleIndex = col.index;
                        first = false;
                    }
                    self.lastVisibleIndex = col.index;
                    self.visibleColspan++;
                }
                if (col.hidden) self.hasHidden = true;
            });
            self.ft.$el.toggleClass('breakpoint', self.hasHidden);
        },
        draw: function() {
            F.arr.each(this.array, function(col) {
                col.$el.css('display', (col.hidden || !col.visible ? 'none' : 'table-cell'));
            });
            if (!this.showHeader && F.is.jq(this.$header.parent())) {
                this.$header.detach();
            }
        },
        $create: function() {
            var self = this;
            self.$header = F.is.jq(self.$header) ? self.$header : $('<tr/>', {
                'class': 'footable-header'
            });
            self.$header.children('th,td').detach();
            F.arr.each(self.array, function(col) {
                self.$header.append(col.$el);
            });
            if (self.showHeader && !F.is.jq(self.$header.parent())) {
                self.ft.$el.children('thead').append(self.$header);
            }
        },
        get: function(column) {
            if (column instanceof F.Column) return column;
            if (F.is.string(column)) return F.arr.first(this.array, function(col) {
                return col.name == column;
            });
            if (F.is.number(column)) return F.arr.first(this.array, function(col) {
                return col.index == column;
            });
            if (F.is.fn(column)) return F.arr.get(this.array, column);
            return null;
        },
        ensure: function(columns) {
            var self = this,
                result = [];
            if (!F.is.array(columns)) return result;
            F.arr.each(columns, function(name) {
                result.push(self.get(name));
            });
            return result;
        }
    });
    F.components.register('columns', F.Columns, 900);
})(jQuery, FooTable);
(function(F) {
    F.Defaults.prototype.columns = [];
    F.Defaults.prototype.showHeader = true;
})(FooTable);
(function($, F) {
    F.Rows = F.Component.extend({
        construct: function(table) {
            this._super(table, true);
            this.o = table.o;
            this.array = [];
            this.all = [];
            this.showToggle = table.o.showToggle;
            this.toggleSelector = table.o.toggleSelector;
            this.toggleColumn = table.o.toggleColumn;
            this.emptyString = table.o.empty;
            this.expandFirst = table.o.expandFirst;
            this.expandAll = table.o.expandAll;
            this.$empty = null;
            this._fromHTML = F.is.emptyArray(table.o.rows) && !F.is.promise(table.o.rows);
        },
        parse: function() {
            var self = this;
            return $.Deferred(function(d) {
                var $rows = self.ft.$el.children('tbody').children('tr');
                if (F.is.array(self.o.rows) && self.o.rows.length > 0) {
                    self.parseFinalize(d, self.o.rows);
                } else if (F.is.promise(self.o.rows)) {
                    self.o.rows.then(function(rows) {
                        self.parseFinalize(d, rows);
                    }, function(xhr) {
                        d.reject(Error('Rows ajax request error: ' + xhr.status + ' (' + xhr.statusText + ')'));
                    });
                } else if (F.is.jq($rows)) {
                    self.parseFinalize(d, $rows);
                    $rows.detach();
                } else {
                    self.parseFinalize(d, []);
                }
            });
        },
        parseFinalize: function(deferred, rows) {
            var self = this,
                result = $.map(rows, function(r) {
                    return new F.Row(self.ft, self.ft.columns.array, r);
                });
            deferred.resolve(result);
        },
        preinit: function(data) {
            var self = this;
            return self.ft.raise('preinit.ft.rows', [data]).then(function() {
                return self.parse().then(function(rows) {
                    self.all = rows;
                    self.array = self.all.slice(0);
                    self.showToggle = F.is.boolean(data.showToggle) ? data.showToggle : self.showToggle;
                    self.toggleSelector = F.is.string(data.toggleSelector) ? data.toggleSelector : self.toggleSelector;
                    self.toggleColumn = F.is.string(data.toggleColumn) ? data.toggleColumn : self.toggleColumn;
                    if (self.toggleColumn != "first" && self.toggleColumn != "last") self.toggleColumn = "first";
                    self.emptyString = F.is.string(data.empty) ? data.empty : self.emptyString;
                    self.expandFirst = F.is.boolean(data.expandFirst) ? data.expandFirst : self.expandFirst;
                    self.expandAll = F.is.boolean(data.expandAll) ? data.expandAll : self.expandAll;
                });
            });
        },
        init: function() {
            var self = this;
            return self.ft.raise('init.ft.rows', [self.all]).then(function() {
                self.$create();
            });
        },
        destroy: function() {
            var self = this;
            this.ft.raise('destroy.ft.rows').then(function() {
                F.arr.each(self.array, function(row) {
                    row.predraw(!self._fromHTML);
                });
                self.all = self.array = [];
            });
        },
        predraw: function() {
            F.arr.each(this.array, function(row) {
                row.predraw();
            });
            this.array = this.all.slice(0);
        },
        $create: function() {
            this.$empty = $('<tr/>', {
                'class': 'footable-empty'
            }).append($('<td/>').text(this.emptyString));
        },
        draw: function() {
            var self = this,
                $tbody = self.ft.$el.children('tbody'),
                first = true;
            if (self.array.length > 0) {
                self.$empty.detach();
                F.arr.each(self.array, function(row) {
                    if ((self.expandFirst && first) || self.expandAll) {
                        row.expanded = true;
                        first = false;
                    }
                    row.draw($tbody);
                });
            } else {
                self.$empty.children('td').attr('colspan', self.ft.columns.visibleColspan);
                $tbody.append(self.$empty);
            }
        },
        load: function(data, append) {
            var self = this,
                rows = $.map(data, function(r) {
                    return new F.Row(self.ft, self.ft.columns.array, r);
                });
            F.arr.each(this.array, function(row) {
                row.predraw();
            });
            this.all = (F.is.boolean(append) ? append : false) ? this.all.concat(rows) : rows;
            this.array = this.all.slice(0);
            this.ft.draw();
        },
        expand: function() {
            F.arr.each(this.array, function(row) {
                row.expand();
            });
        },
        collapse: function() {
            F.arr.each(this.array, function(row) {
                row.collapse();
            });
        }
    });
    F.components.register('rows', F.Rows, 800);
})(jQuery, FooTable);
(function(F) {
    F.Defaults.prototype.rows = [];
    F.Defaults.prototype.empty = 'No results';
    F.Defaults.prototype.showToggle = true;
    F.Defaults.prototype.toggleSelector = 'tr,td,.footable-toggle';
    F.Defaults.prototype.toggleColumn = 'first';
    F.Defaults.prototype.expandFirst = false;
    F.Defaults.prototype.expandAll = false;
})(FooTable);
(function(F) {
    F.Table.prototype.loadRows = function(data, append) {
        this.rows.load(data, append);
    };
})(FooTable);
(function(F) {
    F.Filter = F.Class.extend({
        construct: function(name, query, columns, space, connectors, ignoreCase, hidden) {
            this.name = name;
            this.space = F.is.string(space) && (space == 'OR' || space == 'AND') ? space : 'AND';
            this.connectors = F.is.boolean(connectors) ? connectors : true;
            this.ignoreCase = F.is.boolean(ignoreCase) ? ignoreCase : true;
            this.hidden = F.is.boolean(hidden) ? hidden : false;
            this.query = query instanceof F.Query ? query : new F.Query(query, this.space, this.connectors, this.ignoreCase);
            this.columns = columns;
        },
        match: function(str) {
            if (!F.is.string(str)) return false;
            if (F.is.string(this.query)) {
                this.query = new F.Query(this.query, this.space, this.connectors, this.ignoreCase);
            }
            return this.query instanceof F.Query ? this.query.match(str) : false;
        },
        matchRow: function(row) {
            var self = this,
                text = F.arr.map(row.cells, function(cell) {
                    return F.arr.contains(self.columns, cell.column) ? cell.filterValue : null;
                }).join(' ');
            return self.match(text);
        }
    });
})(FooTable);
(function($, F) {
    F.Filtering = F.Component.extend({
        construct: function(table) {
            this._super(table, table.o.filtering.enabled);
            this.filters = table.o.filtering.filters;
            this.delay = table.o.filtering.delay;
            this.min = table.o.filtering.min;
            this.space = table.o.filtering.space;
            this.connectors = table.o.filtering.connectors;
            this.ignoreCase = table.o.filtering.ignoreCase;
            this.exactMatch = table.o.filtering.exactMatch;
            this.placeholder = table.o.filtering.placeholder;
            this.dropdownTitle = table.o.filtering.dropdownTitle;
            this.position = table.o.filtering.position;
            this.focus = table.o.filtering.focus;
            this.container = table.o.filtering.container;
            this.$container = null;
            this.$row = null;
            this.$cell = null;
            this.$form = null;
            this.$dropdown = null;
            this.$input = null;
            this.$button = null;
            this._filterTimeout = null;
            this._exactRegExp = /^"(.*?)"$/;
        },
        preinit: function(data) {
            var self = this;
            return self.ft.raise('preinit.ft.filtering').then(function() {
                if (self.ft.$el.hasClass('footable-filtering'))
                    self.enabled = true;
                self.enabled = F.is.boolean(data.filtering) ? data.filtering : self.enabled;
                if (!self.enabled) return;
                self.space = F.is.string(data.filterSpace) ? data.filterSpace : self.space;
                self.min = F.is.number(data.filterMin) ? data.filterMin : self.min;
                self.connectors = F.is.boolean(data.filterConnectors) ? data.filterConnectors : self.connectors;
                self.ignoreCase = F.is.boolean(data.filterIgnoreCase) ? data.filterIgnoreCase : self.ignoreCase;
                self.exactMatch = F.is.boolean(data.filterExactMatch) ? data.filterExactMatch : self.exactMatch;
                self.focus = F.is.boolean(data.filterFocus) ? data.filterFocus : self.focus;
                self.delay = F.is.number(data.filterDelay) ? data.filterDelay : self.delay;
                self.placeholder = F.is.string(data.filterPlaceholder) ? data.filterPlaceholder : self.placeholder;
                self.dropdownTitle = F.is.string(data.filterDropdownTitle) ? data.filterDropdownTitle : self.dropdownTitle;
                self.container = F.is.string(data.filterContainer) ? data.filterContainer : self.container;
                self.filters = F.is.array(data.filterFilters) ? self.ensure(data.filterFilters) : self.ensure(self.filters);
                if (self.ft.$el.hasClass('footable-filtering-left'))
                    self.position = 'left';
                if (self.ft.$el.hasClass('footable-filtering-center'))
                    self.position = 'center';
                if (self.ft.$el.hasClass('footable-filtering-right'))
                    self.position = 'right';
                self.position = F.is.string(data.filterPosition) ? data.filterPosition : self.position;
            }, function() {
                self.enabled = false;
            });
        },
        init: function() {
            var self = this;
            return self.ft.raise('init.ft.filtering').then(function() {
                self.$create();
            }, function() {
                self.enabled = false;
            });
        },
        destroy: function() {
            var self = this;
            return self.ft.raise('destroy.ft.filtering').then(function() {
                self.ft.$el.removeClass('footable-filtering').find('thead > tr.footable-filtering').remove();
            });
        },
        $create: function() {
            var self = this;
            var $form_grp = $('<div/>', {
                    'class': 'form-group footable-filtering-search'
                }).append($('<label/>', {
                    'class': 'sr-only',
                    text: 'Search'
                })),
                $input_grp = $('<div/>', {
                    'class': 'input-group'
                }).appendTo($form_grp),
                $input_grp_btn = $('<div/>', {
                    'class': 'input-group-btn'
                }),
                $dropdown_toggle = $('<button/>', {
                    type: 'button',
                    'class': 'btn btn-default dropdown-toggle'
                }).on('click', {
                    self: self
                }, self._onDropdownToggleClicked).append($('<span/>', {
                    'class': 'caret'
                })),
                position;
            switch (self.position) {
                case 'left':
                    position = 'footable-filtering-left';
                    break;
                case 'center':
                    position = 'footable-filtering-center';
                    break;
                default:
                    position = 'footable-filtering-right';
                    break;
            }
            self.ft.$el.addClass('footable-filtering').addClass(position);
            self.$container = self.container === null ? $() : $(self.container).first();
            if (!self.$container.length) {
                self.$row = $('<tr/>', {
                    'class': 'footable-filtering'
                }).prependTo(self.ft.$el.children('thead'));
                self.$cell = $('<th/>').attr('colspan', self.ft.columns.visibleColspan).appendTo(self.$row);
                self.$container = self.$cell;
            } else {
                self.$container.addClass('footable-filtering-external').addClass(position);
            }
            self.$form = $('<form/>', {
                'class': 'form-inline'
            }).append($form_grp).appendTo(self.$container);
            self.$input = $('<input/>', {
                type: 'text',
                'class': 'form-control',
                placeholder: self.placeholder
            });
            self.$button = $('<button/>', {
                type: 'button',
                'class': 'btn btn-primary'
            }).on('click', {
                self: self
            }, self._onSearchButtonClicked).append($('<span/>', {
                'class': 'fooicon fooicon-search'
            }));
            self.$dropdown = $('<ul/>', {
                'class': 'dropdown-menu dropdown-menu-right'
            });
            if (!F.is.emptyString(self.dropdownTitle)) {
                self.$dropdown.append($('<li/>', {
                    'class': 'dropdown-header',
                    'text': self.dropdownTitle
                }));
            }
            self.$dropdown.append(F.arr.map(self.ft.columns.array, function(col) {
                return col.filterable ? $('<li/>').append($('<a/>', {
                    'class': 'checkbox'
                }).append($('<label/>', {
                    html: col.title
                }).prepend($('<input/>', {
                    type: 'checkbox',
                    checked: true
                }).data('__FooTableColumn__', col)))) : null;
            }));
            if (self.delay > 0) {
                self.$input.on('keypress keyup paste', {
                    self: self
                }, self._onSearchInputChanged);
                self.$dropdown.on('click', 'input[type="checkbox"]', {
                    self: self
                }, self._onSearchColumnClicked);
            }
            $input_grp_btn.append(self.$button, $dropdown_toggle, self.$dropdown);
            $input_grp.append(self.$input, $input_grp_btn);
        },
        predraw: function() {
            if (F.is.emptyArray(this.filters))
                return;
            var self = this;
            self.ft.rows.array = $.grep(self.ft.rows.array, function(r) {
                return r.filtered(self.filters);
            });
        },
        draw: function() {
            if (F.is.jq(this.$cell)) {
                this.$cell.attr('colspan', this.ft.columns.visibleColspan);
            }
            var search = this.find('search');
            if (search instanceof F.Filter) {
                var query = search.query.val();
                if (this.exactMatch && this._exactRegExp.test(query)) {
                    query = query.replace(this._exactRegExp, '$1');
                }
                this.$input.val(query);
            } else {
                this.$input.val(null);
            }
            this.setButton(!F.arr.any(this.filters, function(f) {
                return !f.hidden;
            }));
        },
        addFilter: function(nameOrFilter, query, columns, ignoreCase, connectors, space, hidden) {
            var f = this.createFilter(nameOrFilter, query, columns, ignoreCase, connectors, space, hidden);
            if (f instanceof F.Filter) {
                this.removeFilter(f.name);
                this.filters.push(f);
            }
        },
        removeFilter: function(name) {
            F.arr.remove(this.filters, function(f) {
                return f.name == name;
            });
        },
        filter: function(focus) {
            var self = this;
            self.filters = self.ensure(self.filters);
            return self.ft.raise('before.ft.filtering', [self.filters]).then(function() {
                self.filters = self.ensure(self.filters);
                if (focus) {
                    var start = self.$input.prop('selectionStart'),
                        end = self.$input.prop('selectionEnd');
                }
                return self.ft.draw().then(function() {
                    if (focus) {
                        self.$input.focus().prop({
                            selectionStart: start,
                            selectionEnd: end
                        });
                    }
                    self.ft.raise('after.ft.filtering', [self.filters]);
                });
            });
        },
        clear: function() {
            this.filters = F.arr.get(this.filters, function(f) {
                return f.hidden;
            });
            return this.filter(this.focus);
        },
        setButton: function(search) {
            if (!search) {
                this.$button.children('.fooicon').removeClass('fooicon-search').addClass('fooicon-remove');
            } else {
                this.$button.children('.fooicon').removeClass('fooicon-remove').addClass('fooicon-search');
            }
        },
        find: function(name) {
            return F.arr.first(this.filters, function(f) {
                return f.name == name;
            });
        },
        columns: function() {
            if (F.is.jq(this.$dropdown)) {
                return this.$dropdown.find('input:checked').map(function() {
                    return $(this).data('__FooTableColumn__');
                }).get();
            } else {
                return this.ft.columns.get(function(c) {
                    return c.filterable;
                });
            }
        },
        ensure: function(filters) {
            var self = this,
                parsed = [],
                filterable = self.columns();
            if (!F.is.emptyArray(filters)) {
                F.arr.each(filters, function(f) {
                    f = self._ensure(f, filterable);
                    if (f instanceof F.Filter) parsed.push(f);
                });
            }
            return parsed;
        },
        createFilter: function(nameOrObject, query, columns, ignoreCase, connectors, space, hidden) {
            if (F.is.string(nameOrObject)) {
                nameOrObject = {
                    name: nameOrObject,
                    query: query,
                    columns: columns,
                    ignoreCase: ignoreCase,
                    connectors: connectors,
                    space: space,
                    hidden: hidden
                };
            }
            return this._ensure(nameOrObject, this.columns());
        },
        _ensure: function(filter, selectedColumns) {
            if ((F.is.hash(filter) || filter instanceof F.Filter) && !F.is.emptyString(filter.name) && (!F.is.emptyString(filter.query) || filter.query instanceof F.Query)) {
                filter.columns = F.is.emptyArray(filter.columns) ? selectedColumns : this.ft.columns.ensure(filter.columns);
                filter.ignoreCase = F.is.boolean(filter.ignoreCase) ? filter.ignoreCase : this.ignoreCase;
                filter.connectors = F.is.boolean(filter.connectors) ? filter.connectors : this.connectors;
                filter.hidden = F.is.boolean(filter.hidden) ? filter.hidden : false;
                filter.space = F.is.string(filter.space) && (filter.space === 'AND' || filter.space === 'OR') ? filter.space : this.space;
                filter.query = F.is.string(filter.query) ? new F.Query(filter.query, filter.space, filter.connectors, filter.ignoreCase) : filter.query;
                return (filter instanceof F.Filter) ? filter : new F.Filter(filter.name, filter.query, filter.columns, filter.space, filter.connectors, filter.ignoreCase, filter.hidden);
            }
            return null;
        },
        _onSearchInputChanged: function(e) {
            var self = e.data.self;
            var alpha = e.type == 'keypress' && !F.is.emptyString(String.fromCharCode(e.charCode)),
                ctrl = e.type == 'keyup' && (e.which == 8 || e.which == 46),
                paste = e.type == 'paste';
            if (alpha || ctrl || paste) {
                if (e.which == 13) e.preventDefault();
                if (self._filterTimeout != null) clearTimeout(self._filterTimeout);
                self._filterTimeout = setTimeout(function() {
                    self._filterTimeout = null;
                    var query = self.$input.val();
                    if (query.length >= self.min) {
                        if (self.exactMatch && !self._exactRegExp.test(query)) {
                            query = '"' + query + '"';
                        }
                        self.addFilter('search', query);
                        self.filter(self.focus);
                    } else if (F.is.emptyString(query)) {
                        self.clear();
                    }
                }, self.delay);
            }
        },
        _onSearchButtonClicked: function(e) {
            e.preventDefault();
            var self = e.data.self;
            if (self._filterTimeout != null) clearTimeout(self._filterTimeout);
            var $icon = self.$button.children('.fooicon');
            if ($icon.hasClass('fooicon-remove')) self.clear();
            else {
                var query = self.$input.val();
                if (query.length >= self.min) {
                    if (self.exactMatch && !self._exactRegExp.test(query)) {
                        query = '"' + query + '"';
                    }
                    self.addFilter('search', query);
                    self.filter(self.focus);
                }
            }
        },
        _onSearchColumnClicked: function(e) {
            var self = e.data.self;
            if (self._filterTimeout != null) clearTimeout(self._filterTimeout);
            self._filterTimeout = setTimeout(function() {
                self._filterTimeout = null;
                var $icon = self.$button.children('.fooicon');
                if ($icon.hasClass('fooicon-remove')) {
                    $icon.removeClass('fooicon-remove').addClass('fooicon-search');
                    self.addFilter('search', self.$input.val());
                    self.filter();
                }
            }, self.delay);
        },
        _onDropdownToggleClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();
            var self = e.data.self;
            self.$dropdown.parent().toggleClass('open');
            if (self.$dropdown.parent().hasClass('open')) $(document).on('click.footable', {
                self: self
            }, self._onDocumentClicked);
            else $(document).off('click.footable', self._onDocumentClicked);
        },
        _onDocumentClicked: function(e) {
            if ($(e.target).closest('.dropdown-menu').length == 0) {
                e.preventDefault();
                var self = e.data.self;
                self.$dropdown.parent().removeClass('open');
                $(document).off('click.footable', self._onDocumentClicked);
            }
        }
    });
    F.components.register('filtering', F.Filtering, 500);
})(jQuery, FooTable);
(function(F) {
    F.Query = F.Class.extend({
        construct: function(query, space, connectors, ignoreCase) {
            this._original = null;
            this._value = null;
            this.space = F.is.string(space) && (space == 'OR' || space == 'AND') ? space : 'AND';
            this.connectors = F.is.boolean(connectors) ? connectors : true;
            this.ignoreCase = F.is.boolean(ignoreCase) ? ignoreCase : true;
            this.left = null;
            this.right = null;
            this.parts = [];
            this.operator = null;
            this.val(query);
        },
        val: function(value) {
            if (F.is.emptyString(value)) return this._value;
            if (F.is.emptyString(this._original)) this._original = value;
            else if (this._original == value) return;
            this._value = value;
            this._parse();
        },
        match: function(str) {
            if (F.is.emptyString(this.operator) || this.operator === 'OR')
                return this._left(str, false) || this._match(str, false) || this._right(str, false);
            if (this.operator === 'AND')
                return this._left(str, true) && this._match(str, true) && this._right(str, true);
        },
        _match: function(str, def) {
            var self = this,
                result = false,
                empty = F.is.emptyString(str);
            if (F.is.emptyArray(self.parts) && self.left instanceof F.Query) return def;
            if (F.is.emptyArray(self.parts)) return result;
            if (self.space === 'OR') {
                F.arr.each(self.parts, function(p) {
                    if (p.empty && empty) {
                        result = true;
                        if (p.negate) {
                            result = false;
                            return result;
                        }
                    } else {
                        var match = (p.exact ? F.str.containsExact : F.str.contains)(str, p.query, self.ignoreCase);
                        if (match && !p.negate) result = true;
                        if (match && p.negate) {
                            result = false;
                            return result;
                        }
                    }
                });
            } else {
                result = true;
                F.arr.each(self.parts, function(p) {
                    if (p.empty) {
                        if ((!empty && !p.negate) || (empty && p.negate)) result = false;
                        return result;
                    } else {
                        var match = (p.exact ? F.str.containsExact : F.str.contains)(str, p.query, self.ignoreCase);
                        if ((!match && !p.negate) || (match && p.negate)) result = false;
                        return result;
                    }
                });
            }
            return result;
        },
        _left: function(str, def) {
            return (this.left instanceof F.Query) ? this.left.match(str) : def;
        },
        _right: function(str, def) {
            return (this.right instanceof F.Query) ? this.right.match(str) : def;
        },
        _parse: function() {
            if (F.is.emptyString(this._value)) return;
            if (/\sOR\s/.test(this._value)) {
                this.operator = 'OR';
                var or = this._value.split(/(?:\sOR\s)(.*)?/);
                this.left = new F.Query(or[0], this.space, this.connectors, this.ignoreCase);
                this.right = new F.Query(or[1], this.space, this.connectors, this.ignoreCase);
            } else if (/\sAND\s/.test(this._value)) {
                this.operator = 'AND';
                var and = this._value.split(/(?:\sAND\s)(.*)?/);
                this.left = new F.Query(and[0], this.space, this.connectors, this.ignoreCase);
                this.right = new F.Query(and[1], this.space, this.connectors, this.ignoreCase);
            } else {
                var self = this;
                this.parts = F.arr.map(this._value.match(/(?:[^\s"]+|"[^"]*")+/g), function(str) {
                    return self._part(str);
                });
            }
        },
        _part: function(str) {
            var p = {
                query: str,
                negate: false,
                phrase: false,
                exact: false,
                empty: false
            };
            if (F.str.startsWith(p.query, '-')) {
                p.query = F.str.from(p.query, '-');
                p.negate = true;
            }
            if (/^"(.*?)"$/.test(p.query)) {
                p.query = p.query.replace(/^"(.*?)"$/, '$1');
                p.phrase = true;
                p.exact = true;
            } else if (this.connectors && /(?:\w)+?([-_\+\.])(?:\w)+?/.test(p.query)) {
                p.query = p.query.replace(/(?:\w)+?([-_\+\.])(?:\w)+?/g, function(match, p1) {
                    return match.replace(p1, ' ');
                });
                p.phrase = true;
            }
            p.empty = p.phrase && F.is.emptyString(p.query);
            return p;
        }
    });
})(FooTable);
(function(F) {
    F.Cell.prototype.filterValue = null;
    F.Cell.prototype.__filtering_define__ = function(valueOrElement) {
        this.filterValue = this.column.filterValue.call(this.column, valueOrElement);
    };
    F.Cell.prototype.__filtering_val__ = function(value) {
        if (F.is.defined(value)) {
            this.filterValue = this.column.filterValue.call(this.column, value);
        }
    };
    F.Cell.extend('define', function(valueOrElement) {
        this._super(valueOrElement);
        this.__filtering_define__(valueOrElement);
    });
    F.Cell.extend('val', function(value, redraw, redrawSelf) {
        var val = this._super(value, redraw, redrawSelf);
        this.__filtering_val__(value);
        return val;
    });
})(FooTable);
(function($, F) {
    F.Column.prototype.filterable = true;
    F.Column.prototype.filterValue = function(valueOrElement) {
        if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)) {
            var data = $(valueOrElement).data('filterValue');
            return F.is.defined(data) ? '' + data : $(valueOrElement).text();
        }
        if (F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options)) {
            if (F.is.string(valueOrElement.options.filterValue)) return valueOrElement.options.filterValue;
            if (F.is.defined(valueOrElement.value)) valueOrElement = valueOrElement.value;
        }
        if (F.is.defined(valueOrElement) && valueOrElement != null) return valueOrElement + '';
        return '';
    };
    F.Column.prototype.__filtering_define__ = function(definition) {
        this.filterable = F.is.boolean(definition.filterable) ? definition.filterable : this.filterable;
        this.filterValue = F.checkFnValue(this, definition.filterValue, this.filterValue);
    };
    F.Column.extend('define', function(definition) {
        this._super(definition);
        this.__filtering_define__(definition);
    });
})(jQuery, FooTable);
(function(F) {
    F.Defaults.prototype.filtering = {
        enabled: false,
        filters: [],
        delay: 1200,
        min: 1,
        space: 'AND',
        placeholder: 'Search',
        dropdownTitle: null,
        position: 'right',
        connectors: true,
        ignoreCase: true,
        exactMatch: false,
        focus: true,
        container: null
    };
})(FooTable);
(function(F) {
    F.Row.prototype.filtered = function(filters) {
        var result = true,
            self = this;
        F.arr.each(filters, function(f) {
            if ((result = f.matchRow(self)) == false) return false;
        });
        return result;
    };
})(FooTable);
(function($, F) {
    F.Sorter = F.Class.extend({
        construct: function(column, direction) {
            this.column = column;
            this.direction = direction;
        }
    });
})(jQuery, FooTable);
(function($, F) {
    F.Sorting = F.Component.extend({
        construct: function(table) {
            this._super(table, table.o.sorting.enabled);
            this.o = table.o.sorting;
            this.column = null;
            this.allowed = true;
            this.initial = null;
        },
        preinit: function(data) {
            var self = this;
            this.ft.raise('preinit.ft.sorting', [data]).then(function() {
                if (self.ft.$el.hasClass('footable-sorting'))
                    self.enabled = true;
                self.enabled = F.is.boolean(data.sorting) ? data.sorting : self.enabled;
                if (!self.enabled) return;
                self.column = F.arr.first(self.ft.columns.array, function(col) {
                    return col.sorted;
                });
            }, function() {
                self.enabled = false;
            });
        },
        init: function() {
            var self = this;
            this.ft.raise('init.ft.sorting').then(function() {
                if (!self.initial) {
                    var isset = !!self.column;
                    self.initial = {
                        isset: isset,
                        rows: self.ft.rows.all.slice(0),
                        column: isset ? self.column.name : null,
                        direction: isset ? self.column.direction : null
                    }
                }
                F.arr.each(self.ft.columns.array, function(col) {
                    if (col.sortable) {
                        col.$el.addClass('footable-sortable').append($('<span/>', {
                            'class': 'fooicon fooicon-sort'
                        }));
                    }
                });
                self.ft.$el.on('click.footable', '.footable-sortable', {
                    self: self
                }, self._onSortClicked);
            }, function() {
                self.enabled = false;
            });
        },
        destroy: function() {
            var self = this;
            this.ft.raise('destroy.ft.paging').then(function() {
                self.ft.$el.off('click.footable', '.footable-sortable', self._onSortClicked);
                self.ft.$el.children('thead').children('tr.footable-header').children('.footable-sortable').removeClass('footable-sortable footable-asc footable-desc').find('span.fooicon').remove();
            });
        },
        predraw: function() {
            if (!this.column) return;
            var self = this,
                col = self.column;
            self.ft.rows.array.sort(function(a, b) {
                return col.direction == 'DESC' ? col.sorter(b.cells[col.index].sortValue, a.cells[col.index].sortValue) : col.sorter(a.cells[col.index].sortValue, b.cells[col.index].sortValue);
            });
        },
        draw: function() {
            if (!this.column) return;
            var self = this,
                $sortable = self.ft.$el.find('thead > tr > .footable-sortable'),
                $active = self.column.$el;
            $sortable.removeClass('footable-asc footable-desc').children('.fooicon').removeClass('fooicon-sort fooicon-sort-asc fooicon-sort-desc');
            $sortable.not($active).children('.fooicon').addClass('fooicon-sort');
            $active.addClass(self.column.direction == 'DESC' ? 'footable-desc' : 'footable-asc').children('.fooicon').addClass(self.column.direction == 'DESC' ? 'fooicon-sort-desc' : 'fooicon-sort-asc');
        },
        sort: function(column, direction) {
            return this._sort(column, direction);
        },
        toggleAllowed: function(state) {
            state = F.is.boolean(state) ? state : !this.allowed;
            this.allowed = state;
            this.ft.$el.toggleClass('footable-sorting-disabled', !this.allowed);
        },
        hasChanged: function() {
            return !(!this.initial || !this.column || (this.column.name === this.initial.column && (this.column.direction === this.initial.direction || (this.initial.direction === null && this.column.direction === 'ASC'))));
        },
        reset: function() {
            if (!!this.initial) {
                if (this.initial.isset) {
                    this.sort(this.initial.column, this.initial.direction);
                } else {
                    if (!!this.column) {
                        this.column.$el.removeClass('footable-asc footable-desc');
                        this.column = null;
                    }
                    this.ft.rows.all = this.initial.rows;
                    this.ft.draw();
                }
            }
        },
        _sort: function(column, direction) {
            if (!this.allowed) return $.Deferred().reject('sorting disabled');
            var self = this;
            var sorter = new F.Sorter(self.ft.columns.get(column), F.Sorting.dir(direction));
            return self.ft.raise('before.ft.sorting', [sorter]).then(function() {
                F.arr.each(self.ft.columns.array, function(col) {
                    if (col != self.column) col.direction = null;
                });
                self.column = self.ft.columns.get(sorter.column);
                if (self.column) self.column.direction = F.Sorting.dir(sorter.direction);
                return self.ft.draw().then(function() {
                    self.ft.raise('after.ft.sorting', [sorter]);
                });
            });
        },
        _onSortClicked: function(e) {
            var self = e.data.self,
                $header = $(this).closest('th,td'),
                direction = $header.is('.footable-asc, .footable-desc') ? ($header.hasClass('footable-desc') ? 'ASC' : 'DESC') : 'ASC';
            self._sort($header.index(), direction);
        }
    });
    F.Sorting.dir = function(str) {
        return F.is.string(str) && (str == 'ASC' || str == 'DESC') ? str : 'ASC';
    };
    F.components.register('sorting', F.Sorting, 600);
})(jQuery, FooTable);
(function(F) {
    F.Cell.prototype.sortValue = null;
    F.Cell.prototype.__sorting_define__ = function(valueOrElement) {
        this.sortValue = this.column.sortValue.call(this.column, valueOrElement);
    };
    F.Cell.prototype.__sorting_val__ = function(value) {
        if (F.is.defined(value)) {
            this.sortValue = this.column.sortValue.call(this.column, value);
        }
    };
    F.Cell.extend('define', function(valueOrElement) {
        this._super(valueOrElement);
        this.__sorting_define__(valueOrElement);
    });
    F.Cell.extend('val', function(value, redraw, redrawSelf) {
        var val = this._super(value, redraw, redrawSelf);
        this.__sorting_val__(value);
        return val;
    });
})(FooTable);
(function($, F) {
    F.Column.prototype.direction = null;
    F.Column.prototype.sortable = true;
    F.Column.prototype.sorted = false;
    F.Column.prototype.sorter = function(a, b) {
        if (typeof a === 'string') a = a.toLowerCase();
        if (typeof b === 'string') b = b.toLowerCase();
        if (a === b) return 0;
        if (a < b) return -1;
        return 1;
    };
    F.Column.prototype.sortValue = function(valueOrElement) {
        if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)) {
            var data = $(valueOrElement).data('sortValue');
            return F.is.defined(data) ? data : this.parser(valueOrElement);
        }
        if (F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options)) {
            if (F.is.string(valueOrElement.options.sortValue)) return valueOrElement.options.sortValue;
            if (F.is.defined(valueOrElement.value)) valueOrElement = valueOrElement.value;
        }
        if (F.is.defined(valueOrElement) && valueOrElement != null) return valueOrElement;
        return null;
    };
    F.Column.prototype.__sorting_define__ = function(definition) {
        this.sorter = F.checkFnValue(this, definition.sorter, this.sorter);
        this.direction = F.is.type(definition.direction, 'string') ? F.Sorting.dir(definition.direction) : null;
        this.sortable = F.is.boolean(definition.sortable) ? definition.sortable : true;
        this.sorted = F.is.boolean(definition.sorted) ? definition.sorted : false;
        this.sortValue = F.checkFnValue(this, definition.sortValue, this.sortValue);
    };
    F.Column.extend('define', function(definition) {
        this._super(definition);
        this.__sorting_define__(definition);
    });
})(jQuery, FooTable);
(function(F) {
    F.Defaults.prototype.sorting = {
        enabled: false
    };
})(FooTable);
(function($, F) {
    F.HTMLColumn.extend('__sorting_define__', function(definition) {
        this._super(definition);
        this.sortUse = F.is.string(definition.sortUse) && $.inArray(definition.sortUse, ['html', 'text']) !== -1 ? definition.sortUse : 'html';
    });
    F.HTMLColumn.prototype.sortValue = function(valueOrElement) {
        if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)) {
            var data = $(valueOrElement).data('sortValue');
            return F.is.defined(data) ? data : this.parser(valueOrElement);
        }
        if (F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options)) {
            if (F.is.string(valueOrElement.options.sortValue)) return valueOrElement.options.sortValue;
            if (F.is.defined(valueOrElement.value)) valueOrElement = valueOrElement.value;
        }
        if (F.is.defined(valueOrElement) && valueOrElement != null) return valueOrElement;
        return null;
    };
})(jQuery, FooTable);
(function($, F) {
    F.NumberColumn.prototype.sortValue = function(valueOrElement) {
        if (F.is.element(valueOrElement) || F.is.jq(valueOrElement)) {
            var data = $(valueOrElement).data('sortValue');
            return F.is.number(data) ? data : this.parser(valueOrElement);
        }
        if (F.is.hash(valueOrElement) && F.is.hash(valueOrElement.options)) {
            if (F.is.string(valueOrElement.options.sortValue)) return this.parser(valueOrElement);
            if (F.is.number(valueOrElement.options.sortValue)) return valueOrElement.options.sortValue;
            if (F.is.number(valueOrElement.value)) return valueOrElement.value;
        }
        if (F.is.string(valueOrElement)) return this.parser(valueOrElement);
        if (F.is.number(valueOrElement)) return valueOrElement;
        return null;
    };
})(jQuery, FooTable);
(function(F) {
    F.Table.prototype.sort = function(column, direction) {
        return this.use(F.Sorting).sort(column, direction);
    };
})(FooTable);
(function($, F) {
    F.Pager = F.Class.extend({
        construct: function(total, current, size, page, forward) {
            this.total = total;
            this.current = current;
            this.size = size;
            this.page = page;
            this.forward = forward;
        }
    });
})(jQuery, FooTable);
(function($, F) {
    F.Paging = F.Component.extend({
        construct: function(table) {
            this._super(table, table.o.paging.enabled);
            this.strings = table.o.paging.strings;
            this.current = table.o.paging.current;
            this.size = table.o.paging.size;
            this.limit = table.o.paging.limit;
            this.position = table.o.paging.position;
            this.countFormat = table.o.paging.countFormat;
            this.container = table.o.paging.container;
            this.total = -1;
            this.totalRows = 0;
            this.previous = -1;
            this.formattedCount = null;
            this.$container = null;
            this.$wrapper = null;
            this.$row = null;
            this.$cell = null;
            this.$pagination = null;
            this.$count = null;
            this.detached = true;
            this._createdLinks = 0;
        },
        preinit: function(data) {
            var self = this;
            this.ft.raise('preinit.ft.paging', [data]).then(function() {
                if (self.ft.$el.hasClass('footable-paging'))
                    self.enabled = true;
                self.enabled = F.is.boolean(data.paging) ? data.paging : self.enabled;
                if (!self.enabled) return;
                self.size = F.is.number(data.pagingSize) ? data.pagingSize : self.size;
                self.current = F.is.number(data.pagingCurrent) ? data.pagingCurrent : self.current;
                self.limit = F.is.number(data.pagingLimit) ? data.pagingLimit : self.limit;
                if (self.ft.$el.hasClass('footable-paging-left'))
                    self.position = 'left';
                if (self.ft.$el.hasClass('footable-paging-center'))
                    self.position = 'center';
                if (self.ft.$el.hasClass('footable-paging-right'))
                    self.position = 'right';
                self.position = F.is.string(data.pagingPosition) ? data.pagingPosition : self.position;
                self.countFormat = F.is.string(data.pagingCountFormat) ? data.pagingCountFormat : self.countFormat;
                self.container = F.is.string(data.pagingContainer) ? data.pagingContainer : self.container;
                self.total = Math.ceil(self.ft.rows.all.length / self.size);
            }, function() {
                self.enabled = false;
            });
        },
        init: function() {
            var self = this;
            this.ft.raise('init.ft.paging').then(function() {
                self.$create();
            }, function() {
                self.enabled = false;
            });
        },
        destroy: function() {
            var self = this;
            this.ft.raise('destroy.ft.paging').then(function() {
                self.ft.$el.removeClass('footable-paging').find('tfoot > tr.footable-paging').remove();
                self.detached = true;
                self._createdLinks = 0;
            });
        },
        predraw: function() {
            this.total = Math.ceil(this.ft.rows.array.length / this.size);
            this.current = this.current > this.total ? this.total : (this.current < 1 ? 1 : this.current);
            this.totalRows = this.ft.rows.array.length;
            if (this.totalRows > this.size) {
                this.ft.rows.array = this.ft.rows.array.splice((this.current - 1) * this.size, this.size);
            }
            this.formattedCount = this.format(this.countFormat);
        },
        draw: function() {
            if (this.total <= 1) {
                if (!this.detached) {
                    if (this.$row) {
                        this.$row.detach();
                    } else {
                        this.$wrapper.detach();
                    }
                    this.detached = true;
                }
            } else {
                if (this.detached) {
                    if (this.$row) {
                        var $tfoot = this.ft.$el.children('tfoot');
                        if ($tfoot.length == 0) {
                            $tfoot = $('<tfoot/>');
                            this.ft.$el.append($tfoot);
                        }
                        this.$row.appendTo($tfoot);
                    } else {
                        this.$wrapper.appendTo(this.$container);
                    }
                    this.detached = false;
                }
                if (F.is.jq(this.$cell)) {
                    this.$cell.attr('colspan', this.ft.columns.visibleColspan);
                }
                this._createLinks();
                this._setVisible(this.current, this.current > this.previous);
                this._setNavigation(true);
                this.$count.text(this.formattedCount);
            }
        },
        $create: function() {
            this._createdLinks = 0;
            var position = 'footable-paging-center';
            switch (this.position) {
                case 'left':
                    position = 'footable-paging-left';
                    break;
                case 'right':
                    position = 'footable-paging-right';
                    break;
            }
            this.ft.$el.addClass('footable-paging').addClass(position);
            this.$container = this.container === null ? null : $(this.container).first();
            if (!F.is.jq(this.$container)) {
                var $tfoot = this.ft.$el.children('tfoot');
                if ($tfoot.length == 0) {
                    $tfoot = $('<tfoot/>');
                    this.ft.$el.append($tfoot);
                }
                this.$row = $('<tr/>', {
                    'class': 'footable-paging'
                }).prependTo($tfoot);
                this.$container = this.$cell = $('<td/>').attr('colspan', this.ft.columns.visibleColspan).appendTo(this.$row);
            } else {
                this.$container.addClass('footable-paging-external').addClass(position);
            }
            this.$wrapper = $('<div/>', {
                'class': 'footable-pagination-wrapper'
            }).appendTo(this.$container);
            this.$pagination = $('<ul/>', {
                'class': 'pagination'
            }).on('click.footable', 'a.footable-page-link', {
                self: this
            }, this._onPageClicked);
            this.$count = $('<span/>', {
                'class': 'label label-default'
            });
            this.$wrapper.append(this.$pagination, $('<div/>', {
                'class': 'divider'
            }), this.$count);
            this.detached = false;
        },
        format: function(formatString) {
            var firstRow = (this.size * (this.current - 1)) + 1,
                lastRow = this.size * this.current;
            if (this.ft.rows.array.length == 0) {
                firstRow = 0;
                lastRow = 0;
            } else {
                lastRow = lastRow > this.totalRows ? this.totalRows : lastRow;
            }
            return formatString.replace(/\{CP}/g, this.current).replace(/\{TP}/g, this.total).replace(/\{PF}/g, firstRow).replace(/\{PL}/g, lastRow).replace(/\{TR}/g, this.totalRows);
        },
        first: function() {
            return this._set(1);
        },
        prev: function() {
            return this._set(this.current - 1 > 0 ? this.current - 1 : 1);
        },
        next: function() {
            return this._set(this.current + 1 < this.total ? this.current + 1 : this.total);
        },
        last: function() {
            return this._set(this.total);
        },
        goto: function(page) {
            return this._set(page > this.total ? this.total : (page < 1 ? 1 : page));
        },
        prevPages: function() {
            var page = this.$pagination.children('li.footable-page.visible:first').data('page') - 1;
            this._setVisible(page, true);
            this._setNavigation(false);
        },
        nextPages: function() {
            var page = this.$pagination.children('li.footable-page.visible:last').data('page') + 1;
            this._setVisible(page, false);
            this._setNavigation(false);
        },
        pageSize: function(value) {
            value = parseInt(value);
            if (isNaN(value)) {
                return this.size;
            }
            this.size = value;
            this.total = Math.ceil(this.ft.rows.all.length / this.size);
            if (F.is.jq(this.$wrapper)) {
                if (this.$container.is("td")) {
                    this.$row.remove();
                } else {
                    this.$wrapper.remove();
                }
            }
            this.$create();
            this.ft.draw();
        },
        _set: function(page) {
            var self = this,
                pager = new F.Pager(self.total, self.current, self.size, page, page > self.current);
            return self.ft.raise('before.ft.paging', [pager]).then(function() {
                pager.page = pager.page > pager.total ? pager.total : pager.page;
                pager.page = pager.page < 1 ? 1 : pager.page;
                if (self.current == page) return $.when();
                self.previous = self.current;
                self.current = pager.page;
                return self.ft.draw().then(function() {
                    self.ft.raise('after.ft.paging', [pager]);
                });
            });
        },
        _createLinks: function() {
            if (this._createdLinks === this.total) return;
            var self = this,
                multiple = self.total > 1,
                link = function(attr, html, klass) {
                    return $('<li/>', {
                        'class': klass
                    }).attr('data-page', attr).append($('<a/>', {
                        'class': 'footable-page-link',
                        href: '#'
                    }).data('page', attr).html(html));
                };
            self.$pagination.empty();
            if (multiple) {
                self.$pagination.append(link('first', self.strings.first, 'footable-page-nav'));
                self.$pagination.append(link('prev', self.strings.prev, 'footable-page-nav'));
                if (self.limit > 0 && self.limit < self.total) {
                    self.$pagination.append(link('prev-limit', self.strings.prevPages, 'footable-page-nav'));
                }
            }
            for (var i = 0, $li; i < self.total; i++) {
                $li = link(i + 1, i + 1, 'footable-page');
                self.$pagination.append($li);
            }
            if (multiple) {
                if (self.limit > 0 && self.limit < self.total) {
                    self.$pagination.append(link('next-limit', self.strings.nextPages, 'footable-page-nav'));
                }
                self.$pagination.append(link('next', self.strings.next, 'footable-page-nav'));
                self.$pagination.append(link('last', self.strings.last, 'footable-page-nav'));
            }
            self._createdLinks = self.total;
        },
        _setNavigation: function(active) {
            if (this.current == 1) {
                this.$pagination.children('li[data-page="first"],li[data-page="prev"]').addClass('disabled');
            } else {
                this.$pagination.children('li[data-page="first"],li[data-page="prev"]').removeClass('disabled');
            }
            if (this.current == this.total) {
                this.$pagination.children('li[data-page="next"],li[data-page="last"]').addClass('disabled');
            } else {
                this.$pagination.children('li[data-page="next"],li[data-page="last"]').removeClass('disabled');
            }
            if ((this.$pagination.children('li.footable-page.visible:first').data('page') || 1) == 1) {
                this.$pagination.children('li[data-page="prev-limit"]').addClass('disabled');
            } else {
                this.$pagination.children('li[data-page="prev-limit"]').removeClass('disabled');
            }
            if ((this.$pagination.children('li.footable-page.visible:last').data('page') || this.limit) == this.total) {
                this.$pagination.children('li[data-page="next-limit"]').addClass('disabled');
            } else {
                this.$pagination.children('li[data-page="next-limit"]').removeClass('disabled');
            }
            if (this.limit > 0 && this.total < this.limit) {
                this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css('display', 'none');
            } else {
                this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css('display', '');
            }
            if (active) {
                this.$pagination.children('li.footable-page').removeClass('active').filter('li[data-page="' + this.current + '"]').addClass('active');
            }
        },
        _setVisible: function(page, right) {
            if (this.limit > 0 && this.total > this.limit) {
                if (!this.$pagination.children('li.footable-page[data-page="' + page + '"]').hasClass('visible')) {
                    var start = 0,
                        end = 0;
                    if (right == true) {
                        end = page > this.total ? this.total : page;
                        start = end - this.limit;
                    } else {
                        start = page < 1 ? 0 : page - 1;
                        end = start + this.limit;
                    }
                    if (start < 0) {
                        start = 0;
                        end = this.limit > this.total ? this.total : this.limit;
                    }
                    if (end > this.total) {
                        end = this.total;
                        start = this.total - this.limit < 0 ? 0 : this.total - this.limit;
                    }
                    this.$pagination.children('li.footable-page').removeClass('visible').slice(start, end).addClass('visible');
                }
            } else {
                this.$pagination.children('li.footable-page').removeClass('visible').slice(0, this.total).addClass('visible');
            }
        },
        _onPageClicked: function(e) {
            e.preventDefault();
            if ($(e.target).closest('li').is('.active,.disabled')) return;
            var self = e.data.self,
                page = $(this).data('page');
            switch (page) {
                case 'first':
                    self.first();
                    return;
                case 'prev':
                    self.prev();
                    return;
                case 'next':
                    self.next();
                    return;
                case 'last':
                    self.last();
                    return;
                case 'prev-limit':
                    self.prevPages();
                    return;
                case 'next-limit':
                    self.nextPages();
                    return;
                default:
                    self._set(page);
                    return;
            }
        }
    });
    F.components.register('paging', F.Paging, 400);
})(jQuery, FooTable);
(function(F) {
    F.Defaults.prototype.paging = {
        enabled: false,
        countFormat: '{CP} of {TP}',
        current: 1,
        limit: 5,
        position: 'center',
        size: 10,
        container: null,
        strings: {
            first: '&laquo;',
            prev: '&lsaquo;',
            next: '&rsaquo;',
            last: '&raquo;',
            prevPages: '...',
            nextPages: '...'
        }
    };
})(FooTable);
(function(F) {
    F.Table.prototype.gotoPage = function(num) {
        return this.use(F.Paging).goto(num);
    };
    F.Table.prototype.nextPage = function() {
        return this.use(F.Paging).next();
    };
    F.Table.prototype.prevPage = function() {
        return this.use(F.Paging).prev();
    };
    F.Table.prototype.firstPage = function() {
        return this.use(F.Paging).first();
    };
    F.Table.prototype.lastPage = function() {
        return this.use(F.Paging).last();
    };
    F.Table.prototype.nextPages = function() {
        return this.use(F.Paging).nextPages();
    };
    F.Table.prototype.prevPages = function() {
        return this.use(F.Paging).prevPages();
    };
    F.Table.prototype.pageSize = function(value) {
        return this.use(F.Paging).pageSize(value);
    };
})(FooTable);
(function($, F) {
    F.Editing = F.Component.extend({
        construct: function(table) {
            this._super(table, table.o.editing.enabled);
            this.pageToNew = table.o.editing.pageToNew;
            this.alwaysShow = table.o.editing.alwaysShow;
            this.column = $.extend(true, {}, table.o.editing.column, {
                visible: this.alwaysShow
            });
            this.position = table.o.editing.position;
            this.showText = table.o.editing.showText;
            this.hideText = table.o.editing.hideText;
            this.addText = table.o.editing.addText;
            this.editText = table.o.editing.editText;
            this.deleteText = table.o.editing.deleteText;
            this.viewText = table.o.editing.viewText;
            this.allowAdd = table.o.editing.allowAdd;
            this.allowEdit = table.o.editing.allowEdit;
            this.allowDelete = table.o.editing.allowDelete;
            this.allowView = table.o.editing.allowView;
            this._$buttons = null;
            this.callbacks = {
                addRow: F.checkFnValue(this, table.o.editing.addRow),
                editRow: F.checkFnValue(this, table.o.editing.editRow),
                deleteRow: F.checkFnValue(this, table.o.editing.deleteRow),
                viewRow: F.checkFnValue(this, table.o.editing.viewRow)
            };
        },
        preinit: function(data) {
            var self = this;
            this.ft.raise('preinit.ft.editing', [data]).then(function() {
                if (self.ft.$el.hasClass('footable-editing'))
                    self.enabled = true;
                self.enabled = F.is.boolean(data.editing) ? data.editing : self.enabled;
                if (!self.enabled) return;
                self.pageToNew = F.is.boolean(data.editingPageToNew) ? data.editingPageToNew : self.pageToNew;
                self.alwaysShow = F.is.boolean(data.editingAlwaysShow) ? data.editingAlwaysShow : self.alwaysShow;
                self.position = F.is.string(data.editingPosition) ? data.editingPosition : self.position;
                self.showText = F.is.string(data.editingShowText) ? data.editingShowText : self.showText;
                self.hideText = F.is.string(data.editingHideText) ? data.editingHideText : self.hideText;
                self.addText = F.is.string(data.editingAddText) ? data.editingAddText : self.addText;
                self.editText = F.is.string(data.editingEditText) ? data.editingEditText : self.editText;
                self.deleteText = F.is.string(data.editingDeleteText) ? data.editingDeleteText : self.deleteText;
                self.viewText = F.is.string(data.editingViewText) ? data.editingViewText : self.viewText;
                self.allowAdd = F.is.boolean(data.editingAllowAdd) ? data.editingAllowAdd : self.allowAdd;
                self.allowEdit = F.is.boolean(data.editingAllowEdit) ? data.editingAllowEdit : self.allowEdit;
                self.allowDelete = F.is.boolean(data.editingAllowDelete) ? data.editingAllowDelete : self.allowDelete;
                self.allowView = F.is.boolean(data.editingAllowView) ? data.editingAllowView : self.allowView;
                self.column = new F.EditingColumn(self.ft, self, $.extend(true, {}, self.column, data.editingColumn, {
                    visible: self.alwaysShow
                }));
                if (self.ft.$el.hasClass('footable-editing-left'))
                    self.position = 'left';
                if (self.ft.$el.hasClass('footable-editing-right'))
                    self.position = 'right';
                if (self.position === 'right') {
                    self.column.index = self.ft.columns.array.length;
                } else {
                    self.column.index = 0;
                    for (var i = 0, len = self.ft.columns.array.length; i < len; i++) {
                        self.ft.columns.array[i].index += 1;
                    }
                }
                self.ft.columns.array.push(self.column);
                self.ft.columns.array.sort(function(a, b) {
                    return a.index - b.index;
                });
                self.callbacks.addRow = F.checkFnValue(self, data.editingAddRow, self.callbacks.addRow);
                self.callbacks.editRow = F.checkFnValue(self, data.editingEditRow, self.callbacks.editRow);
                self.callbacks.deleteRow = F.checkFnValue(self, data.editingDeleteRow, self.callbacks.deleteRow);
                self.callbacks.viewRow = F.checkFnValue(self, data.editingViewRow, self.callbacks.viewRow);
            }, function() {
                self.enabled = false;
            });
        },
        init: function() {
            var self = this;
            this.ft.raise('init.ft.editing').then(function() {
                self.$create();
            }, function() {
                self.enabled = false;
            });
        },
        destroy: function() {
            var self = this;
            this.ft.raise('destroy.ft.editing').then(function() {
                self.ft.$el.removeClass('footable-editing footable-editing-always-show footable-editing-no-add footable-editing-no-edit footable-editing-no-delete footable-editing-no-view').off('click.ft.editing').find('tfoot > tr.footable-editing').remove();
            });
        },
        $create: function() {
            var self = this,
                position = self.position === 'right' ? 'footable-editing-right' : 'footable-editing-left';
            self.ft.$el.addClass('footable-editing').addClass(position).on('click.ft.editing', '.footable-show', {
                self: self
            }, self._onShowClick).on('click.ft.editing', '.footable-hide', {
                self: self
            }, self._onHideClick).on('click.ft.editing', '.footable-edit', {
                self: self
            }, self._onEditClick).on('click.ft.editing', '.footable-delete', {
                self: self
            }, self._onDeleteClick).on('click.ft.editing', '.footable-view', {
                self: self
            }, self._onViewClick).on('click.ft.editing', '.footable-add', {
                self: self
            }, self._onAddClick);
            self.$cell = $('<td/>').attr('colspan', self.ft.columns.visibleColspan).append(self.$buttonShow());
            if (self.allowAdd) {
                self.$cell.append(self.$buttonAdd());
            }
            self.$cell.append(self.$buttonHide());
            if (self.alwaysShow) {
                self.ft.$el.addClass('footable-editing-always-show');
            }
            if (!self.allowAdd) self.ft.$el.addClass('footable-editing-no-add');
            if (!self.allowEdit) self.ft.$el.addClass('footable-editing-no-edit');
            if (!self.allowDelete) self.ft.$el.addClass('footable-editing-no-delete');
            if (!self.allowView) self.ft.$el.addClass('footable-editing-no-view');
            var $tfoot = self.ft.$el.children('tfoot');
            if ($tfoot.length == 0) {
                $tfoot = $('<tfoot/>');
                self.ft.$el.append($tfoot);
            }
            self.$row = $('<tr/>', {
                'class': 'footable-editing'
            }).append(self.$cell).appendTo($tfoot);
        },
        $buttonShow: function() {
            return '<button type="button" class="btn btn-primary footable-show">' + this.showText + '</button>';
        },
        $buttonHide: function() {
            return '<button type="button" class="btn btn-default footable-hide">' + this.hideText + '</button>';
        },
        $buttonAdd: function() {
            return '<button type="button" class="btn btn-primary footable-add">' + this.addText + '</button> ';
        },
        $buttonEdit: function() {
            return '<button type="button" class="btn btn-default footable-edit">' + this.editText + '</button> ';
        },
        $buttonDelete: function() {
            return '<button type="button" class="btn btn-default footable-delete">' + this.deleteText + '</button>';
        },
        $buttonView: function() {
            return '<button type="button" class="btn btn-default footable-view">' + this.viewText + '</button> ';
        },
        $rowButtons: function() {
            if (F.is.jq(this._$buttons)) return this._$buttons.clone();
            this._$buttons = $('<div class="btn-group btn-group-xs" role="group"></div>');
            if (this.allowView) this._$buttons.append(this.$buttonView());
            if (this.allowEdit) this._$buttons.append(this.$buttonEdit());
            if (this.allowDelete) this._$buttons.append(this.$buttonDelete());
            return this._$buttons;
        },
        draw: function() {
            this.$cell.attr('colspan', this.ft.columns.visibleColspan);
        },
        _onEditClick: function(e) {
            e.preventDefault();
            var self = e.data.self,
                row = $(this).closest('tr').data('__FooTableRow__');
            if (row instanceof F.Row) {
                self.ft.raise('edit.ft.editing', [row]).then(function() {
                    self.callbacks.editRow.call(self.ft, row);
                });
            }
        },
        _onDeleteClick: function(e) {
            e.preventDefault();
            var self = e.data.self,
                row = $(this).closest('tr').data('__FooTableRow__');
            if (row instanceof F.Row) {
                self.ft.raise('delete.ft.editing', [row]).then(function() {
                    self.callbacks.deleteRow.call(self.ft, row);
                });
            }
        },
        _onViewClick: function(e) {
            e.preventDefault();
            var self = e.data.self,
                row = $(this).closest('tr').data('__FooTableRow__');
            if (row instanceof F.Row) {
                self.ft.raise('view.ft.editing', [row]).then(function() {
                    self.callbacks.viewRow.call(self.ft, row);
                });
            }
        },
        _onAddClick: function(e) {
            e.preventDefault();
            var self = e.data.self;
            self.ft.raise('add.ft.editing').then(function() {
                self.callbacks.addRow.call(self.ft);
            });
        },
        _onShowClick: function(e) {
            e.preventDefault();
            var self = e.data.self;
            self.ft.raise('show.ft.editing').then(function() {
                self.ft.$el.addClass('footable-editing-show');
                self.column.visible = true;
                self.ft.draw();
            });
        },
        _onHideClick: function(e) {
            e.preventDefault();
            var self = e.data.self;
            self.ft.raise('hide.ft.editing').then(function() {
                self.ft.$el.removeClass('footable-editing-show');
                self.column.visible = false;
                self.ft.draw();
            });
        }
    });
    F.components.register('editing', F.Editing, 850);
})(jQuery, FooTable);
(function($, F) {
    F.EditingColumn = F.Column.extend({
        construct: function(instance, editing, definition) {
            this._super(instance, definition, 'editing');
            this.editing = editing;
            this.internal = true;
        },
        $create: function() {
            (this.$el = !this.virtual && F.is.jq(this.$el) ? this.$el : $('<th/>', {
                'class': 'footable-editing'
            })).html(this.title);
        },
        parser: function(valueOrElement) {
            if (F.is.string(valueOrElement)) valueOrElement = $($.trim(valueOrElement));
            if (F.is.element(valueOrElement)) valueOrElement = $(valueOrElement);
            if (F.is.jq(valueOrElement)) {
                var tagName = valueOrElement.prop('tagName').toLowerCase();
                if (tagName == 'td' || tagName == 'th') return valueOrElement.data('value') || valueOrElement.contents();
                return valueOrElement;
            }
            return null;
        },
        createCell: function(row) {
            var $buttons = this.editing.$rowButtons(),
                $cell = $('<td/>').append($buttons);
            if (F.is.jq(row.$el)) {
                if (this.index === 0) {
                    $cell.prependTo(row.$el);
                } else {
                    $cell.insertAfter(row.$el.children().eq(this.index - 1));
                }
            }
            return new F.Cell(this.ft, row, this, $cell || $cell.html());
        }
    });
    F.columns.register('editing', F.EditingColumn);
})(jQuery, FooTable);
(function($, F) {
    F.Defaults.prototype.editing = {
        enabled: false,
        pageToNew: true,
        position: 'right',
        alwaysShow: false,
        addRow: function() {},
        editRow: function(row) {},
        deleteRow: function(row) {},
        viewRow: function(row) {},
        showText: '<span class="fooicon fooicon-pencil" aria-hidden="true"></span> Edit rows',
        hideText: 'Cancel',
        addText: 'New row',
        editText: '<span class="fooicon fooicon-pencil" aria-hidden="true"></span>',
        deleteText: '<span class="fooicon fooicon-trash" aria-hidden="true"></span>',
        viewText: '<span class="fooicon fooicon-stats" aria-hidden="true"></span>',
        allowAdd: true,
        allowEdit: true,
        allowDelete: true,
        allowView: false,
        column: {
            classes: 'footable-editing',
            name: 'editing',
            title: '',
            filterable: false,
            sortable: false
        }
    };
})(jQuery, FooTable);
(function($, F) {
    if (F.is.defined(F.Paging)) {
        F.Paging.prototype.unpaged = [];
        F.Paging.extend('predraw', function() {
            this.unpaged = this.ft.rows.array.slice(0);
            this._super();
        });
    }
})(jQuery, FooTable);
(function($, F) {
    F.Row.prototype.add = function(redraw) {
        redraw = F.is.boolean(redraw) ? redraw : true;
        var self = this;
        return $.Deferred(function(d) {
            var index = self.ft.rows.all.push(self) - 1;
            if (redraw) {
                return self.ft.draw().then(function() {
                    d.resolve(index);
                });
            } else {
                d.resolve(index);
            }
        });
    };
    F.Row.prototype.delete = function(redraw) {
        redraw = F.is.boolean(redraw) ? redraw : true;
        var self = this;
        return $.Deferred(function(d) {
            var index = self.ft.rows.all.indexOf(self);
            if (F.is.number(index) && index >= 0 && index < self.ft.rows.all.length) {
                self.ft.rows.all.splice(index, 1);
                if (redraw) {
                    return self.ft.draw().then(function() {
                        d.resolve(self);
                    });
                }
            }
            d.resolve(self);
        });
    };
    if (F.is.defined(F.Paging)) {
        F.Row.extend('add', function(redraw) {
            redraw = F.is.boolean(redraw) ? redraw : true;
            var self = this,
                added = this._super(redraw),
                editing = self.ft.use(F.Editing),
                paging;
            if (editing && editing.pageToNew && (paging = self.ft.use(F.Paging)) && redraw) {
                return added.then(function() {
                    var index = paging.unpaged.indexOf(self);
                    var page = Math.ceil((index + 1) / paging.size);
                    if (paging.current !== page) {
                        return paging.goto(page);
                    }
                });
            }
            return added;
        });
    }
    if (F.is.defined(F.Sorting)) {
        F.Row.extend('val', function(data, redraw) {
            redraw = F.is.boolean(redraw) ? redraw : true;
            var result = this._super(data);
            if (!F.is.hash(data)) {
                return result;
            }
            var self = this;
            if (redraw) {
                self.ft.draw().then(function() {
                    var editing = self.ft.use(F.Editing),
                        paging;
                    if (F.is.defined(F.Paging) && editing && editing.pageToNew && (paging = self.ft.use(F.Paging))) {
                        var index = paging.unpaged.indexOf(self);
                        var page = Math.ceil((index + 1) / paging.size);
                        if (paging.current !== page) {
                            return paging.goto(page);
                        }
                    }
                });
            }
            return result;
        });
    }
})(jQuery, FooTable);
(function(F) {
    F.Rows.prototype.add = function(dataOrRow, redraw) {
        var row = dataOrRow;
        if (F.is.hash(dataOrRow)) {
            row = new FooTable.Row(this.ft, this.ft.columns.array, dataOrRow);
        }
        if (row instanceof FooTable.Row) {
            row.add(redraw);
        }
    };
    F.Rows.prototype.update = function(indexOrRow, data, redraw) {
        var len = this.ft.rows.all.length,
            row = indexOrRow;
        if (F.is.number(indexOrRow) && indexOrRow >= 0 && indexOrRow < len) {
            row = this.ft.rows.all[indexOrRow];
        }
        if (row instanceof FooTable.Row && F.is.hash(data)) {
            row.val(data, redraw);
        }
    };
    F.Rows.prototype.delete = function(indexOrRow, redraw) {
        var len = this.ft.rows.all.length,
            row = indexOrRow;
        if (F.is.number(indexOrRow) && indexOrRow >= 0 && indexOrRow < len) {
            row = this.ft.rows.all[indexOrRow];
        }
        if (row instanceof FooTable.Row) {
            row.delete(redraw);
        }
    };
})(FooTable);
(function($, F) {
    var _uid = 0,
        _url_hash = (function(str) {
            var i, l, hval = 0x811c9dc5;
            for (i = 0, l = str.length; i < l; i++) {
                hval ^= str.charCodeAt(i);
                hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
            }
            return hval >>> 0;
        })(location.origin + location.pathname);
    F.State = F.Component.extend({
        construct: function(table) {
            this._super(table, table.o.state.enabled);
            this._key = '1';
            this.key = this._key + (F.is.string(table.o.state.key) ? table.o.state.key : this._uid());
            this.filtering = F.is.boolean(table.o.state.filtering) ? table.o.state.filtering : true;
            this.paging = F.is.boolean(table.o.state.paging) ? table.o.state.paging : true;
            this.sorting = F.is.boolean(table.o.state.sorting) ? table.o.state.sorting : true;
        },
        preinit: function(data) {
            var self = this;
            this.ft.raise('preinit.ft.state', [data]).then(function() {
                self.enabled = F.is.boolean(data.state) ? data.state : self.enabled;
                if (!self.enabled) return;
                self.key = self._key + (F.is.string(data.stateKey) ? data.stateKey : self.key);
                self.filtering = F.is.boolean(data.stateFiltering) ? data.stateFiltering : self.filtering;
                self.paging = F.is.boolean(data.statePaging) ? data.statePaging : self.paging;
                self.sorting = F.is.boolean(data.stateSorting) ? data.stateSorting : self.sorting;
            }, function() {
                self.enabled = false;
            });
        },
        get: function(key) {
            return JSON.parse(localStorage.getItem(this.key + ':' + key));
        },
        set: function(key, data) {
            localStorage.setItem(this.key + ':' + key, JSON.stringify(data));
        },
        remove: function(key) {
            localStorage.removeItem(this.key + ':' + key);
        },
        read: function() {
            this.ft.execute(false, true, 'readState');
        },
        write: function() {
            this.ft.execute(false, true, 'writeState');
        },
        clear: function() {
            this.ft.execute(false, true, 'clearState');
        },
        _uid: function() {
            var id = this.ft.$el.attr('id');
            return _url_hash + '_' + (F.is.string(id) ? id : ++_uid);
        }
    });
    F.components.register('state', F.State, 700);
})(jQuery, FooTable);
(function(F) {
    F.Component.prototype.readState = function() {};
    F.Component.prototype.writeState = function() {};
    F.Component.prototype.clearState = function() {};
})(FooTable);
(function(F) {
    F.Defaults.prototype.state = {
        enabled: false,
        filtering: true,
        paging: true,
        sorting: true,
        key: null
    };
})(FooTable);
(function(F) {
    if (!F.Filtering) return;
    F.Filtering.prototype.readState = function() {
        if (this.ft.state.filtering) {
            var state = this.ft.state.get('filtering');
            if (F.is.hash(state) && !F.is.emptyArray(state.filters)) {
                this.filters = this.ensure(state.filters);
            }
        }
    };
    F.Filtering.prototype.writeState = function() {
        if (this.ft.state.filtering) {
            var filters = F.arr.map(this.filters, function(f) {
                return {
                    name: f.name,
                    query: f.query instanceof F.Query ? f.query.val() : f.query,
                    columns: F.arr.map(f.columns, function(c) {
                        return c.name;
                    }),
                    hidden: f.hidden,
                    space: f.space,
                    connectors: f.connectors,
                    ignoreCase: f.ignoreCase
                };
            });
            this.ft.state.set('filtering', {
                filters: filters
            });
        }
    };
    F.Filtering.prototype.clearState = function() {
        if (this.ft.state.filtering) {
            this.ft.state.remove('filtering');
        }
    };
})(FooTable);
(function(F) {
    if (!F.Paging) return;
    F.Paging.prototype.readState = function() {
        if (this.ft.state.paging) {
            var state = this.ft.state.get('paging');
            if (F.is.hash(state)) {
                this.current = state.current;
                this.size = state.size;
            }
        }
    };
    F.Paging.prototype.writeState = function() {
        if (this.ft.state.paging) {
            this.ft.state.set('paging', {
                current: this.current,
                size: this.size
            });
        }
    };
    F.Paging.prototype.clearState = function() {
        if (this.ft.state.paging) {
            this.ft.state.remove('paging');
        }
    };
})(FooTable);
(function(F) {
    if (!F.Sorting) return;
    F.Sorting.prototype.readState = function() {
        if (this.ft.state.sorting) {
            var state = this.ft.state.get('sorting');
            if (F.is.hash(state)) {
                var column = this.ft.columns.get(state.column);
                if (column instanceof F.Column) {
                    this.column = column;
                    this.column.direction = state.direction;
                }
            }
        }
    };
    F.Sorting.prototype.writeState = function() {
        if (this.ft.state.sorting && this.column instanceof F.Column) {
            this.ft.state.set('sorting', {
                column: this.column.name,
                direction: this.column.direction
            });
        }
    };
    F.Sorting.prototype.clearState = function() {
        if (this.ft.state.sorting) {
            this.ft.state.remove('sorting');
        }
    };
})(FooTable);
(function(F) {
    F.Table.extend('_construct', function(ready) {
        this.state = this.use(FooTable.State);
        return this._super(ready);
    });
    F.Table.extend('_preinit', function() {
        var self = this;
        return self._super().then(function() {
            if (self.state.enabled) {
                self.state.read();
            }
        });
    });
    F.Table.extend('draw', function() {
        var self = this;
        return self._super().then(function() {
            if (self.state.enabled) {
                self.state.write();
            }
        });
    });
})(FooTable);
(function($, F) {
    F.Export = F.Component.extend({
        construct: function(table) {
            this._super(table, true);
            this.snapshot = [];
        },
        predraw: function() {
            this.snapshot = this.ft.rows.array.slice(0);
        },
        columns: function() {
            var result = [];
            F.arr.each(this.ft.columns.array, function(column) {
                if (!column.internal) {
                    result.push({
                        type: column.type,
                        name: column.name,
                        title: column.title,
                        visible: column.visible,
                        hidden: column.hidden,
                        classes: column.classes,
                        style: column.style
                    });
                }
            });
            return result;
        },
        rows: function(filtered) {
            filtered = F.is.boolean(filtered) ? filtered : false;
            var rows = filtered ? this.ft.rows.all : this.snapshot,
                result = [];
            F.arr.each(rows, function(row) {
                result.push(row.val());
            });
            return result;
        },
        json: function(filtered) {
            return JSON.parse(JSON.stringify({
                columns: this.columns(),
                rows: this.rows(filtered)
            }));
        },
        csv: function(filtered) {
            var csv = "",
                columns = this.columns(),
                value, escaped;
            F.arr.each(columns, function(column, i) {
                escaped = '"' + column.title.replace(/"/g, '""') + '"';
                csv += (i === 0 ? escaped : "," + escaped);
            });
            csv += "\n";
            var rows = filtered ? this.ft.rows.all : this.snapshot;
            F.arr.each(rows, function(row) {
                F.arr.each(row.cells, function(cell, i) {
                    if (!cell.column.internal) {
                        value = cell.column.stringify.call(cell.column, cell.value, cell.ft.o, cell.row.value);
                        escaped = '"' + value.replace(/"/g, '""') + '"';
                        csv += (i === 0 ? escaped : "," + escaped);
                    }
                });
                csv += "\n";
            });
            return csv;
        }
    });
    F.components.register("export", F.Export, 490);
})(jQuery, FooTable);
(function(F) {
    F.Column.prototype.__export_define__ = function(definition) {
        this.stringify = F.checkFnValue(this, definition.stringify, this.stringify);
    };
    F.Column.extend('define', function(definition) {
        this._super(definition);
        this.__export_define__(definition);
    });
    F.Column.prototype.stringify = function(value, options, rowData) {
        return value + "";
    };
    if (F.DateColumn != undefined) {
        F.DateColumn.prototype.stringify = function(value, options, rowData) {
            return F.is.object(value) && F.is.boolean(value._isAMomentObject) && value.isValid() ? value.format(this.formatString) : '';
        };
    }
    F.ObjectColumn.prototype.stringify = function(value, options, rowData) {
        return F.is.object(value) ? JSON.stringify(value) : "";
    };
    F.ArrayColumn.prototype.stringify = function(value, options, rowData) {
        return F.is.array(value) ? JSON.stringify(value) : "";
    };
})(FooTable);
(function(F) {
    F.Table.prototype.toJSON = function(filtered) {
        return this.use(F.Export).json(filtered);
    };
    F.Table.prototype.toCSV = function(filtered) {
        return this.use(F.Export).csv(filtered);
    };
})(FooTable);;
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }
    var config = $.cookie = function(key, value, options) {
        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }
            return (document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
        }
        var result = key ? undefined : {},
            cookies = document.cookie ? document.cookie.split('; ') : [],
            i = 0,
            l = cookies.length;
        for (; i < l; i++) {
            var parts = cookies[i].split('='),
                name = decode(parts.shift()),
                cookie = parts.join('=');
            if (key === name) {
                result = read(cookie, value);
                break;
            }
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }
        return result;
    };
    config.defaults = {};
    $.removeCookie = function(key, options) {
        $.cookie(key, '', $.extend({}, options, {
            expires: -1
        }));
        return !$.cookie(key);
    };
}));;
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0)
    }([function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            },
            r = n(1),
            a = (o(r), n(6)),
            u = o(a),
            c = n(7),
            f = o(c),
            s = n(8),
            d = o(s),
            l = n(9),
            p = o(l),
            m = n(10),
            b = o(m),
            v = n(11),
            y = o(v),
            g = n(14),
            h = o(g),
            w = [],
            k = !1,
            x = document.all && !window.atob,
            j = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded"
            },
            O = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e && (k = !0), k) return w = (0, y.default)(w, j), (0, b.default)(w, j.once), w
            },
            S = function() {
                w = (0, h.default)(), O()
            },
            _ = function() {
                w.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                })
            },
            E = function(e) {
                return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0
            },
            z = function(e) {
                return j = i(j, e), w = (0, h.default)(), E(j.disable) || x ? _() : (document.querySelector("body").setAttribute("data-aos-easing", j.easing), document.querySelector("body").setAttribute("data-aos-duration", j.duration), document.querySelector("body").setAttribute("data-aos-delay", j.delay), "DOMContentLoaded" === j.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? O(!0) : "load" === j.startEvent ? window.addEventListener(j.startEvent, function() {
                    O(!0)
                }) : document.addEventListener(j.startEvent, function() {
                    O(!0)
                }), window.addEventListener("resize", (0, f.default)(O, 50, !0)), window.addEventListener("orientationchange", (0, f.default)(O, 50, !0)), window.addEventListener("scroll", (0, u.default)(function() {
                    (0, b.default)(w, j.once)
                }, 99)), document.addEventListener("DOMNodeRemoved", function(e) {
                    var t = e.target;
                    t && 1 === t.nodeType && t.hasAttribute && t.hasAttribute("data-aos") && (0, f.default)(S, 50, !0)
                }), (0, d.default)("[data-aos]", S), w)
            };
        e.exports = {
            init: z,
            refresh: O,
            refreshHard: S
        }
    }, function(e, t) {}, , , , , function(e, t) {
        (function(t) {
            "use strict";

            function n(e, t, n) {
                function o(t) {
                    var n = b,
                        o = v;
                    return b = v = void 0, k = t, g = e.apply(o, n)
                }

                function r(e) {
                    return k = e, h = setTimeout(s, t), S ? o(e) : g
                }

                function a(e) {
                    var n = e - w,
                        o = e - k,
                        i = t - n;
                    return _ ? j(i, y - o) : i
                }

                function c(e) {
                    var n = e - w,
                        o = e - k;
                    return void 0 === w || n >= t || n < 0 || _ && o >= y
                }

                function s() {
                    var e = O();
                    return c(e) ? d(e) : void(h = setTimeout(s, a(e)))
                }

                function d(e) {
                    return h = void 0, E && b ? o(e) : (b = v = void 0, g)
                }

                function l() {
                    void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0
                }

                function p() {
                    return void 0 === h ? g : d(O())
                }

                function m() {
                    var e = O(),
                        n = c(e);
                    if (b = arguments, v = this, w = e, n) {
                        if (void 0 === h) return r(w);
                        if (_) return h = setTimeout(s, t), o(w)
                    }
                    return void 0 === h && (h = setTimeout(s, t)), g
                }
                var b, v, y, g, h, w, k = 0,
                    S = !1,
                    _ = !1,
                    E = !0;
                if ("function" != typeof e) throw new TypeError(f);
                return t = u(t) || 0, i(n) && (S = !!n.leading, _ = "maxWait" in n, y = _ ? x(u(n.maxWait) || 0, t) : y, E = "trailing" in n ? !!n.trailing : E), m.cancel = l, m.flush = p, m
            }

            function o(e, t, o) {
                var r = !0,
                    a = !0;
                if ("function" != typeof e) throw new TypeError(f);
                return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: a
                })
            }

            function i(e) {
                var t = "undefined" == typeof e ? "undefined" : c(e);
                return !!e && ("object" == t || "function" == t)
            }

            function r(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
            }

            function a(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d
            }

            function u(e) {
                if ("number" == typeof e) return e;
                if (a(e)) return s;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(l, "");
                var n = m.test(e);
                return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e
            }
            var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                f = "Expected a function",
                s = NaN,
                d = "[object Symbol]",
                l = /^\s+|\s+$/g,
                p = /^[-+]0x[0-9a-f]+$/i,
                m = /^0b[01]+$/i,
                b = /^0o[0-7]+$/i,
                v = parseInt,
                y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
                g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
                h = y || g || Function("return this")(),
                w = Object.prototype,
                k = w.toString,
                x = Math.max,
                j = Math.min,
                O = function() {
                    return h.Date.now()
                };
            e.exports = o
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        (function(t) {
            "use strict";

            function n(e, t, n) {
                function i(t) {
                    var n = b,
                        o = v;
                    return b = v = void 0, O = t, g = e.apply(o, n)
                }

                function r(e) {
                    return O = e, h = setTimeout(s, t), S ? i(e) : g
                }

                function u(e) {
                    var n = e - w,
                        o = e - O,
                        i = t - n;
                    return _ ? x(i, y - o) : i
                }

                function f(e) {
                    var n = e - w,
                        o = e - O;
                    return void 0 === w || n >= t || n < 0 || _ && o >= y
                }

                function s() {
                    var e = j();
                    return f(e) ? d(e) : void(h = setTimeout(s, u(e)))
                }

                function d(e) {
                    return h = void 0, E && b ? i(e) : (b = v = void 0, g)
                }

                function l() {
                    void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0
                }

                function p() {
                    return void 0 === h ? g : d(j())
                }

                function m() {
                    var e = j(),
                        n = f(e);
                    if (b = arguments, v = this, w = e, n) {
                        if (void 0 === h) return r(w);
                        if (_) return h = setTimeout(s, t), i(w)
                    }
                    return void 0 === h && (h = setTimeout(s, t)), g
                }
                var b, v, y, g, h, w, O = 0,
                    S = !1,
                    _ = !1,
                    E = !0;
                if ("function" != typeof e) throw new TypeError(c);
                return t = a(t) || 0, o(n) && (S = !!n.leading, _ = "maxWait" in n, y = _ ? k(a(n.maxWait) || 0, t) : y, E = "trailing" in n ? !!n.trailing : E), m.cancel = l, m.flush = p, m
            }

            function o(e) {
                var t = "undefined" == typeof e ? "undefined" : u(e);
                return !!e && ("object" == t || "function" == t)
            }

            function i(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
            }

            function r(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == s
            }

            function a(e) {
                if ("number" == typeof e) return e;
                if (r(e)) return f;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(d, "");
                var n = p.test(e);
                return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e
            }
            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                c = "Expected a function",
                f = NaN,
                s = "[object Symbol]",
                d = /^\s+|\s+$/g,
                l = /^[-+]0x[0-9a-f]+$/i,
                p = /^0b[01]+$/i,
                m = /^0o[0-7]+$/i,
                b = parseInt,
                v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
                y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
                g = v || y || Function("return this")(),
                h = Object.prototype,
                w = h.toString,
                k = Math.max,
                x = Math.min,
                j = function() {
                    return g.Date.now()
                };
            e.exports = n
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            a.push({
                selector: e,
                fn: t
            }), !u && r && (u = new r(o), u.observe(i.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            })), o()
        }

        function o() {
            for (var e, t, n = 0, o = a.length; n < o; n++) {
                e = a[n], t = i.querySelectorAll(e.selector);
                for (var r, u = 0, c = t.length; u < c; u++) r = t[u], r.ready || (r.ready = !0, e.fn.call(r, r))
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = window.document,
            r = window.MutationObserver || window.WebKitMutationObserver,
            a = [],
            u = void 0;
        t.default = n
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            f = function() {
                function e() {
                    n(this, e)
                }
                return i(e, [{
                    key: "phone",
                    value: function() {
                        var e = o();
                        return !(!r.test(e) && !a.test(e.substr(0, 4)))
                    }
                }, {
                    key: "mobile",
                    value: function() {
                        var e = o();
                        return !(!u.test(e) && !c.test(e.substr(0, 4)))
                    }
                }, {
                    key: "tablet",
                    value: function() {
                        return this.mobile() && !this.phone()
                    }
                }]), e
            }();
        t.default = new f
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e, t, n) {
                var o = e.node.getAttribute("data-aos-once");
                t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate")
            },
            o = function(e, t) {
                var o = window.pageYOffset,
                    i = window.innerHeight;
                e.forEach(function(e, r) {
                    n(e, i + o, t)
                })
            };
        t.default = o
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(12),
            r = o(i),
            a = function(e, t) {
                return e.forEach(function(e, n) {
                    e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset)
                }), e
            };
        t.default = a
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(13),
            r = o(i),
            a = function(e, t) {
                var n = 0,
                    o = 0,
                    i = window.innerHeight,
                    a = {
                        offset: e.getAttribute("data-aos-offset"),
                        anchor: e.getAttribute("data-aos-anchor"),
                        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                    };
                switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        n += e.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        n += e.offsetHeight;
                        break;
                    case "top-center":
                        n += i / 2;
                        break;
                    case "bottom-center":
                        n += i / 2 + e.offsetHeight;
                        break;
                    case "center-center":
                        n += i / 2 + e.offsetHeight / 2;
                        break;
                    case "top-top":
                        n += i;
                        break;
                    case "bottom-top":
                        n += e.offsetHeight + i;
                        break;
                    case "center-top":
                        n += e.offsetHeight / 2 + i
                }
                return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o
            };
        t.default = a
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {
                top: n,
                left: t
            }
        };
        t.default = n
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            e = e || document.querySelectorAll("[data-aos]");
            var t = [];
            return [].forEach.call(e, function(e, n) {
                t.push({
                    node: e
                })
            }), t
        };
        t.default = n
    }])
});;
(function($, Drupal) {
    $(document).ready(function() {
        AOS.init();
    });
})(jQuery, Drupal);;
/*!
 * autocomplete.js 0.31.0
 * https://github.com/algolia/autocomplete.js
 * Copyright 2018 Algolia, Inc. and other contributors; Licensed MIT
 */
! function(a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    b.m = a, b.c = c, b.p = "", b(0)
}([function(a, b, c) {
    "use strict";
    a.exports = c(1)
}, function(a, b, c) {
    "use strict";
    var d = c(2),
        e = c(3);
    d.element = e;
    var f = c(4);
    f.isArray = e.isArray, f.isFunction = e.isFunction, f.isObject = e.isPlainObject, f.bind = e.proxy, f.each = function(a, b) {
        function c(a, c) {
            return b(c, a)
        }
        e.each(a, c)
    }, f.map = e.map, f.mixin = e.extend, f.Event = e.Event;
    var g, h, i, j = c(5),
        k = c(6);
    g = e.fn.autocomplete, h = "aaAutocomplete", i = {
        initialize: function(a, b) {
            function c() {
                var c, d = e(this),
                    f = new k({
                        el: d
                    });
                c = new j({
                    input: d,
                    eventBus: f,
                    dropdownMenuContainer: a.dropdownMenuContainer,
                    hint: void 0 === a.hint || !!a.hint,
                    minLength: a.minLength,
                    autoselect: a.autoselect,
                    autoselectOnBlur: a.autoselectOnBlur,
                    openOnFocus: a.openOnFocus,
                    templates: a.templates,
                    debug: a.debug,
                    clearOnSelected: a.clearOnSelected,
                    cssClasses: a.cssClasses,
                    datasets: b,
                    keyboardShortcuts: a.keyboardShortcuts,
                    appendTo: a.appendTo,
                    autoWidth: a.autoWidth
                }), d.data(h, c)
            }
            return b = f.isArray(b) ? b : [].slice.call(arguments, 1), a = a || {}, this.each(c)
        },
        open: function() {
            function a() {
                var a, b = e(this);
                (a = b.data(h)) && a.open()
            }
            return this.each(a)
        },
        close: function() {
            function a() {
                var a, b = e(this);
                (a = b.data(h)) && a.close()
            }
            return this.each(a)
        },
        val: function(a) {
            function b() {
                var b, c = e(this);
                (b = c.data(h)) && b.setVal(a)
            }
            return arguments.length ? this.each(b) : function(a) {
                var b, c;
                return (b = a.data(h)) && (c = b.getVal()), c
            }(this.first())
        },
        destroy: function() {
            function a() {
                var a, b = e(this);
                (a = b.data(h)) && (a.destroy(), b.removeData(h))
            }
            return this.each(a)
        }
    }, e.fn.autocomplete = function(a) {
        var b;
        return i[a] && "initialize" !== a ? (b = this.filter(function() {
            return !!e(this).data(h)
        }), i[a].apply(b, [].slice.call(arguments, 1))) : i.initialize.apply(this, arguments)
    }, e.fn.autocomplete.noConflict = function() {
        return e.fn.autocomplete = g, this
    }, e.fn.autocomplete.sources = j.sources, e.fn.autocomplete.escapeHighlightedString = f.escapeHighlightedString, a.exports = e.fn.autocomplete
}, function(a, b) {
    "use strict";
    a.exports = {
        element: null
    }
}, function(a, b) {
    a.exports = jQuery
}, function(a, b, c) {
    "use strict";

    function d(a) {
        return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }
    var e = c(2);
    a.exports = {
        isArray: null,
        isFunction: null,
        isObject: null,
        bind: null,
        each: null,
        map: null,
        mixin: null,
        isMsie: function(a) {
            if (void 0 === a && (a = navigator.userAgent), /(msie|trident)/i.test(a)) {
                var b = a.match(/(msie |rv:)(\d+(.\d+)?)/i);
                if (b) return b[2]
            }
            return !1
        },
        escapeRegExChars: function(a) {
            return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        },
        isNumber: function(a) {
            return "number" == typeof a
        },
        toStr: function(a) {
            return void 0 === a || null === a ? "" : a + ""
        },
        cloneDeep: function(a) {
            var b = this.mixin({}, a),
                c = this;
            return this.each(b, function(a, d) {
                a && (c.isArray(a) ? b[d] = [].concat(a) : c.isObject(a) && (b[d] = c.cloneDeep(a)))
            }), b
        },
        error: function(a) {
            throw new Error(a)
        },
        every: function(a, b) {
            var c = !0;
            return a ? (this.each(a, function(d, e) {
                if (!(c = b.call(null, d, e, a))) return !1
            }), !!c) : c
        },
        any: function(a, b) {
            var c = !1;
            return a ? (this.each(a, function(d, e) {
                if (b.call(null, d, e, a)) return c = !0, !1
            }), c) : c
        },
        getUniqueId: function() {
            var a = 0;
            return function() {
                return a++
            }
        }(),
        templatify: function(a) {
            if (this.isFunction(a)) return a;
            var b = e.element(a);
            return "SCRIPT" === b.prop("tagName") ? function() {
                return b.text()
            } : function() {
                return String(a)
            }
        },
        defer: function(a) {
            setTimeout(a, 0)
        },
        noop: function() {},
        formatPrefix: function(a, b) {
            return b ? "" : a + "-"
        },
        className: function(a, b, c) {
            return (c ? "" : ".") + a + b
        },
        escapeHighlightedString: function(a, b, c) {
            b = b || "<em>";
            var e = document.createElement("div");
            e.appendChild(document.createTextNode(b)), c = c || "</em>";
            var f = document.createElement("div");
            f.appendChild(document.createTextNode(c));
            var g = document.createElement("div");
            return g.appendChild(document.createTextNode(a)), g.innerHTML.replace(RegExp(d(e.innerHTML), "g"), b).replace(RegExp(d(f.innerHTML), "g"), c)
        }
    }
}, function(a, b, c) {
    "use strict";

    function d(a) {
        var b, c;
        if (a = a || {}, a.input || i.error("missing input"), this.isActivated = !1, this.debug = !!a.debug, this.autoselect = !!a.autoselect, this.autoselectOnBlur = !!a.autoselectOnBlur, this.openOnFocus = !!a.openOnFocus, this.minLength = i.isNumber(a.minLength) ? a.minLength : 1, this.autoWidth = void 0 === a.autoWidth || !!a.autoWidth, this.clearOnSelected = !!a.clearOnSelected, a.hint = !!a.hint, a.hint && a.appendTo) throw new Error("[autocomplete.js] hint and appendTo options can't be used at the same time");
        this.css = a.css = i.mixin({}, o, a.appendTo ? o.appendTo : {}), this.cssClasses = a.cssClasses = i.mixin({}, o.defaultClasses, a.cssClasses || {}), this.cssClasses.prefix = a.cssClasses.formattedPrefix = i.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix), this.listboxId = a.listboxId = [this.cssClasses.root, "listbox", i.getUniqueId()].join("-");
        var f = e(a);
        this.$node = f.wrapper;
        var g = this.$input = f.input;
        b = f.menu, c = f.hint, a.dropdownMenuContainer && j.element(a.dropdownMenuContainer).css("position", "relative").append(b.css("top", "0")), g.on("blur.aa", function(a) {
            var c = document.activeElement;
            i.isMsie() && (b[0] === c || b[0].contains(c)) && (a.preventDefault(), a.stopImmediatePropagation(), i.defer(function() {
                g.focus()
            }))
        }), b.on("mousedown.aa", function(a) {
            a.preventDefault()
        }), this.eventBus = a.eventBus || new k({
            el: g
        }), this.dropdown = new d.Dropdown({
            appendTo: a.appendTo,
            wrapper: this.$node,
            menu: b,
            datasets: a.datasets,
            templates: a.templates,
            cssClasses: a.cssClasses,
            minLength: this.minLength
        }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onSync("shown", this._onShown, this).onSync("empty", this._onEmpty, this).onSync("redrawn", this._onRedrawn, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new d.Input({
            input: g,
            hint: c
        }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._bindKeyboardShortcuts(a), this._setLanguageDirection()
    }

    function e(a) {
        var b, c, d, e;
        b = j.element(a.input), c = j.element(n.wrapper.replace("%ROOT%", a.cssClasses.root)).css(a.css.wrapper), a.appendTo || "block" !== b.css("display") || "table" !== b.parent().css("display") || c.css("display", "table-cell");
        var g = n.dropdown.replace("%PREFIX%", a.cssClasses.prefix).replace("%DROPDOWN_MENU%", a.cssClasses.dropdownMenu);
        d = j.element(g).css(a.css.dropdown).attr({
            role: "listbox",
            id: a.listboxId
        }), a.templates && a.templates.dropdownMenu && d.html(i.templatify(a.templates.dropdownMenu)()), e = b.clone().css(a.css.hint).css(f(b)), e.val("").addClass(i.className(a.cssClasses.prefix, a.cssClasses.hint, !0)).removeAttr("id name placeholder required").prop("readonly", !0).attr({
            "aria-hidden": "true",
            autocomplete: "off",
            spellcheck: "false",
            tabindex: -1
        }), e.removeData && e.removeData(), b.data(h, {
            "aria-autocomplete": b.attr("aria-autocomplete"),
            "aria-expanded": b.attr("aria-expanded"),
            "aria-owns": b.attr("aria-owns"),
            autocomplete: b.attr("autocomplete"),
            dir: b.attr("dir"),
            role: b.attr("role"),
            spellcheck: b.attr("spellcheck"),
            style: b.attr("style"),
            type: b.attr("type")
        }), b.addClass(i.className(a.cssClasses.prefix, a.cssClasses.input, !0)).attr({
            autocomplete: "off",
            spellcheck: !1,
            role: "combobox",
            "aria-autocomplete": a.datasets && a.datasets[0] && a.datasets[0].displayKey ? "both" : "list",
            "aria-expanded": "false",
            "aria-label": a.ariaLabel,
            "aria-owns": a.listboxId
        }).css(a.hint ? a.css.input : a.css.inputWithNoHint);
        try {
            b.attr("dir") || b.attr("dir", "auto")
        } catch (a) {}
        return c = a.appendTo ? c.appendTo(j.element(a.appendTo).eq(0)).eq(0) : b.wrap(c).parent(), c.prepend(a.hint ? e : null).append(d), {
            wrapper: c,
            input: b,
            hint: e,
            menu: d
        }
    }

    function f(a) {
        return {
            backgroundAttachment: a.css("background-attachment"),
            backgroundClip: a.css("background-clip"),
            backgroundColor: a.css("background-color"),
            backgroundImage: a.css("background-image"),
            backgroundOrigin: a.css("background-origin"),
            backgroundPosition: a.css("background-position"),
            backgroundRepeat: a.css("background-repeat"),
            backgroundSize: a.css("background-size")
        }
    }

    function g(a, b) {
        var c = a.find(i.className(b.prefix, b.input));
        i.each(c.data(h), function(a, b) {
            void 0 === a ? c.removeAttr(b) : c.attr(b, a)
        }), c.detach().removeClass(i.className(b.prefix, b.input, !0)).insertAfter(a), c.removeData && c.removeData(h), a.remove()
    }
    var h = "aaAttrs",
        i = c(4),
        j = c(2),
        k = c(6),
        l = c(7),
        m = c(16),
        n = c(18),
        o = c(19);
    i.mixin(d.prototype, {
        _bindKeyboardShortcuts: function(a) {
            if (a.keyboardShortcuts) {
                var b = this.$input,
                    c = [];
                i.each(a.keyboardShortcuts, function(a) {
                    "string" == typeof a && (a = a.toUpperCase().charCodeAt(0)), c.push(a)
                }), j.element(document).keydown(function(a) {
                    var d = a.target || a.srcElement,
                        e = d.tagName;
                    if (!d.isContentEditable && "INPUT" !== e && "SELECT" !== e && "TEXTAREA" !== e) {
                        var f = a.which || a.keyCode;
                        c.indexOf(f) !== -1 && (b.focus(), a.stopPropagation(), a.preventDefault())
                    }
                })
            }
        },
        _onSuggestionClicked: function(a, b) {
            var c;
            (c = this.dropdown.getDatumForSuggestion(b)) && this._select(c)
        },
        _onCursorMoved: function(a, b) {
            var c = this.dropdown.getDatumForCursor(),
                d = this.dropdown.getCurrentCursor().attr("id");
            this.input.setActiveDescendant(d), c && (b && this.input.setInputValue(c.value, !0), this.eventBus.trigger("cursorchanged", c.raw, c.datasetName))
        },
        _onCursorRemoved: function() {
            this.input.resetInputValue(), this._updateHint(), this.eventBus.trigger("cursorremoved")
        },
        _onDatasetRendered: function() {
            this._updateHint(), this.eventBus.trigger("updated")
        },
        _onOpened: function() {
            this._updateHint(), this.input.expand(), this.eventBus.trigger("opened")
        },
        _onEmpty: function() {
            this.eventBus.trigger("empty")
        },
        _onRedrawn: function() {
            this.$node.css("top", "0px"), this.$node.css("left", "0px");
            var a = this.$input[0].getBoundingClientRect();
            this.autoWidth && this.$node.css("width", a.width + "px");
            var b = this.$node[0].getBoundingClientRect(),
                c = a.bottom - b.top;
            this.$node.css("top", c + "px");
            var d = a.left - b.left;
            this.$node.css("left", d + "px"), this.eventBus.trigger("redrawn")
        },
        _onShown: function() {
            this.eventBus.trigger("shown"), this.autoselect && this.dropdown.cursorTopSuggestion()
        },
        _onClosed: function() {
            this.input.clearHint(), this.input.removeActiveDescendant(), this.input.collapse(), this.eventBus.trigger("closed")
        },
        _onFocused: function() {
            if (this.isActivated = !0, this.openOnFocus) {
                var a = this.input.getQuery();
                a.length >= this.minLength ? this.dropdown.update(a) : this.dropdown.empty(), this.dropdown.open()
            }
        },
        _onBlurred: function() {
            var a, b;
            a = this.dropdown.getDatumForCursor(), b = this.dropdown.getDatumForTopSuggestion(), this.debug || (this.autoselectOnBlur && a ? this._select(a) : this.autoselectOnBlur && b ? this._select(b) : (this.isActivated = !1, this.dropdown.empty(), this.dropdown.close()))
        },
        _onEnterKeyed: function(a, b) {
            var c, d;
            c = this.dropdown.getDatumForCursor(), d = this.dropdown.getDatumForTopSuggestion(), c ? (this._select(c), b.preventDefault()) : this.autoselect && d && (this._select(d), b.preventDefault())
        },
        _onTabKeyed: function(a, b) {
            var c;
            (c = this.dropdown.getDatumForCursor()) ? (this._select(c), b.preventDefault()) : this._autocomplete(!0)
        },
        _onEscKeyed: function() {
            this.dropdown.close(), this.input.resetInputValue()
        },
        _onUpKeyed: function() {
            var a = this.input.getQuery();
            this.dropdown.isEmpty && a.length >= this.minLength ? this.dropdown.update(a) : this.dropdown.moveCursorUp(), this.dropdown.open()
        },
        _onDownKeyed: function() {
            var a = this.input.getQuery();
            this.dropdown.isEmpty && a.length >= this.minLength ? this.dropdown.update(a) : this.dropdown.moveCursorDown(), this.dropdown.open()
        },
        _onLeftKeyed: function() {
            "rtl" === this.dir && this._autocomplete()
        },
        _onRightKeyed: function() {
            "ltr" === this.dir && this._autocomplete()
        },
        _onQueryChanged: function(a, b) {
            this.input.clearHintIfInvalid(), b.length >= this.minLength ? this.dropdown.update(b) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection()
        },
        _onWhitespaceChanged: function() {
            this._updateHint(), this.dropdown.open()
        },
        _setLanguageDirection: function() {
            var a = this.input.getLanguageDirection();
            this.dir !== a && (this.dir = a, this.$node.css("direction", a), this.dropdown.setLanguageDirection(a))
        },
        _updateHint: function() {
            var a, b, c, d, e, f;
            a = this.dropdown.getDatumForTopSuggestion(), a && this.dropdown.isVisible() && !this.input.hasOverflow() ? (b = this.input.getInputValue(), c = l.normalizeQuery(b), d = i.escapeRegExChars(c), e = new RegExp("^(?:" + d + ")(.+$)", "i"), f = e.exec(a.value), f ? this.input.setHint(b + f[1]) : this.input.clearHint()) : this.input.clearHint()
        },
        _autocomplete: function(a) {
            var b, c, d, e;
            b = this.input.getHint(), c = this.input.getQuery(), d = a || this.input.isCursorAtEnd(), b && c !== b && d && (e = this.dropdown.getDatumForTopSuggestion(), e && this.input.setInputValue(e.value), this.eventBus.trigger("autocompleted", e.raw, e.datasetName))
        },
        _select: function(a) {
            void 0 !== a.value && this.input.setQuery(a.value), this.clearOnSelected ? this.setVal("") : this.input.setInputValue(a.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", a.raw, a.datasetName).isDefaultPrevented() === !1 && (this.dropdown.close(), i.defer(i.bind(this.dropdown.empty, this.dropdown)))
        },
        open: function() {
            if (!this.isActivated) {
                var a = this.input.getInputValue();
                a.length >= this.minLength ? this.dropdown.update(a) : this.dropdown.empty()
            }
            this.dropdown.open()
        },
        close: function() {
            this.dropdown.close()
        },
        setVal: function(a) {
            a = i.toStr(a), this.isActivated ? this.input.setInputValue(a) : (this.input.setQuery(a), this.input.setInputValue(a, !0)), this._setLanguageDirection()
        },
        getVal: function() {
            return this.input.getQuery()
        },
        destroy: function() {
            this.input.destroy(), this.dropdown.destroy(), g(this.$node, this.cssClasses), this.$node = null
        },
        getWrapper: function() {
            return this.dropdown.$container[0]
        }
    }), d.Dropdown = m, d.Input = l, d.sources = c(20), a.exports = d
}, function(a, b, c) {
    "use strict";

    function d(a) {
        a && a.el || e.error("EventBus initialized without el"), this.$el = f.element(a.el)
    }
    var e = c(4),
        f = c(2);
    e.mixin(d.prototype, {
        trigger: function(a) {
            var b = [].slice.call(arguments, 1),
                c = e.Event("autocomplete:" + a);
            return this.$el.trigger(c, b), c
        }
    }), a.exports = d
}, function(a, b, c) {
    "use strict";

    function d(a) {
        var b, c, d, f, g = this;
        a = a || {}, a.input || i.error("input is missing"), b = i.bind(this._onBlur, this), c = i.bind(this._onFocus, this), d = i.bind(this._onKeydown, this), f = i.bind(this._onInput, this), this.$hint = j.element(a.hint), this.$input = j.element(a.input).on("blur.aa", b).on("focus.aa", c).on("keydown.aa", d), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = i.noop), i.isMsie() ? this.$input.on("keydown.aa keypress.aa cut.aa paste.aa", function(a) {
            h[a.which || a.keyCode] || i.defer(i.bind(g._onInput, g, a))
        }) : this.$input.on("input.aa", f), this.query = this.$input.val(), this.$overflowHelper = e(this.$input)
    }

    function e(a) {
        return j.element('<pre aria-hidden="true"></pre>').css({
            position: "absolute",
            visibility: "hidden",
            whiteSpace: "pre",
            fontFamily: a.css("font-family"),
            fontSize: a.css("font-size"),
            fontStyle: a.css("font-style"),
            fontVariant: a.css("font-variant"),
            fontWeight: a.css("font-weight"),
            wordSpacing: a.css("word-spacing"),
            letterSpacing: a.css("letter-spacing"),
            textIndent: a.css("text-indent"),
            textRendering: a.css("text-rendering"),
            textTransform: a.css("text-transform")
        }).insertAfter(a)
    }

    function f(a, b) {
        return d.normalizeQuery(a) === d.normalizeQuery(b)
    }

    function g(a) {
        return a.altKey || a.ctrlKey || a.metaKey || a.shiftKey
    }
    var h;
    h = {
        9: "tab",
        27: "esc",
        37: "left",
        39: "right",
        13: "enter",
        38: "up",
        40: "down"
    };
    var i = c(4),
        j = c(2),
        k = c(8);
    d.normalizeQuery = function(a) {
        return (a || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
    }, i.mixin(d.prototype, k, {
        _onBlur: function() {
            this.resetInputValue(), this.$input.removeAttr("aria-activedescendant"), this.trigger("blurred")
        },
        _onFocus: function() {
            this.trigger("focused")
        },
        _onKeydown: function(a) {
            var b = h[a.which || a.keyCode];
            this._managePreventDefault(b, a), b && this._shouldTrigger(b, a) && this.trigger(b + "Keyed", a)
        },
        _onInput: function() {
            this._checkInputValue()
        },
        _managePreventDefault: function(a, b) {
            var c, d, e;
            switch (a) {
                case "tab":
                    d = this.getHint(), e = this.getInputValue(), c = d && d !== e && !g(b);
                    break;
                case "up":
                case "down":
                    c = !g(b);
                    break;
                default:
                    c = !1
            }
            c && b.preventDefault()
        },
        _shouldTrigger: function(a, b) {
            var c;
            switch (a) {
                case "tab":
                    c = !g(b);
                    break;
                default:
                    c = !0
            }
            return c
        },
        _checkInputValue: function() {
            var a, b, c;
            a = this.getInputValue(), b = f(a, this.query), c = !(!b || !this.query) && this.query.length !== a.length, this.query = a, b ? c && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
        },
        focus: function() {
            this.$input.focus()
        },
        blur: function() {
            this.$input.blur()
        },
        getQuery: function() {
            return this.query
        },
        setQuery: function(a) {
            this.query = a
        },
        getInputValue: function() {
            return this.$input.val()
        },
        setInputValue: function(a, b) {
            void 0 === a && (a = this.query), this.$input.val(a), b ? this.clearHint() : this._checkInputValue()
        },
        expand: function() {
            this.$input.attr("aria-expanded", "true")
        },
        collapse: function() {
            this.$input.attr("aria-expanded", "false")
        },
        setActiveDescendant: function(a) {
            this.$input.attr("aria-activedescendant", a)
        },
        removeActiveDescendant: function() {
            this.$input.removeAttr("aria-activedescendant")
        },
        resetInputValue: function() {
            this.setInputValue(this.query, !0)
        },
        getHint: function() {
            return this.$hint.val()
        },
        setHint: function(a) {
            this.$hint.val(a)
        },
        clearHint: function() {
            this.setHint("")
        },
        clearHintIfInvalid: function() {
            var a, b, c, d;
            a = this.getInputValue(), b = this.getHint(), c = a !== b && 0 === b.indexOf(a), (d = "" !== a && c && !this.hasOverflow()) || this.clearHint()
        },
        getLanguageDirection: function() {
            return (this.$input.css("direction") || "ltr").toLowerCase()
        },
        hasOverflow: function() {
            var a = this.$input.width() - 2;
            return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= a
        },
        isCursorAtEnd: function() {
            var a, b, c;
            return a = this.$input.val().length, b = this.$input[0].selectionStart, i.isNumber(b) ? b === a : !document.selection || (c = document.selection.createRange(), c.moveStart("character", -a), a === c.text.length)
        },
        destroy: function() {
            this.$hint.off(".aa"), this.$input.off(".aa"), this.$hint = this.$input = this.$overflowHelper = null
        }
    }), a.exports = d
}, function(a, b, c) {
    "use strict";

    function d(a, b, c, d) {
        var e;
        if (!c) return this;
        for (b = b.split(l), c = d ? j(c, d) : c, this._callbacks = this._callbacks || {}; e = b.shift();) this._callbacks[e] = this._callbacks[e] || {
            sync: [],
            async: []
        }, this._callbacks[e][a].push(c);
        return this
    }

    function e(a, b, c) {
        return d.call(this, "async", a, b, c)
    }

    function f(a, b, c) {
        return d.call(this, "sync", a, b, c)
    }

    function g(a) {
        var b;
        if (!this._callbacks) return this;
        for (a = a.split(l); b = a.shift();) delete this._callbacks[b];
        return this
    }

    function h(a) {
        var b, c, d, e, f;
        if (!this._callbacks) return this;
        for (a = a.split(l), d = [].slice.call(arguments, 1);
            (b = a.shift()) && (c = this._callbacks[b]);) e = i(c.sync, this, [b].concat(d)), f = i(c.async, this, [b].concat(d)), e() && k(f);
        return this
    }

    function i(a, b, c) {
        function d() {
            for (var d, e = 0, f = a.length; !d && e < f; e += 1) d = a[e].apply(b, c) === !1;
            return !d
        }
        return d
    }

    function j(a, b) {
        return a.bind ? a.bind(b) : function() {
            a.apply(b, [].slice.call(arguments, 0))
        }
    }
    var k = c(9),
        l = /\s+/;
    a.exports = {
        onSync: f,
        onAsync: e,
        off: g,
        trigger: h
    }
}, function(a, b, c) {
    "use strict";

    function d() {
        h && i && (h = !1, i.length ? m = i.concat(m) : l = -1, m.length && e())
    }

    function e() {
        if (!h) {
            n = !1, h = !0;
            for (var a = m.length, b = setTimeout(d); a;) {
                for (i = m, m = []; i && ++l < a;) i[l].run();
                l = -1, a = m.length
            }
            i = null, l = -1, h = !1, clearTimeout(b)
        }
    }

    function f(a, b) {
        this.fun = a, this.array = b
    }

    function g(a) {
        var b = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
        m.push(new f(a, b)), n || h || (n = !0, j())
    }
    for (var h, i, j, k = [c(10), c(12), c(13), c(14), c(15)], l = -1, m = [], n = !1, o = -1, p = k.length; ++o < p;)
        if (k[o] && k[o].test && k[o].test()) {
            j = k[o].install(e);
            break
        }
    f.prototype.run = function() {
        var a = this.fun,
            b = this.array;
        switch (b.length) {
            case 0:
                return a();
            case 1:
                return a(b[0]);
            case 2:
                return a(b[0], b[1]);
            case 3:
                return a(b[0], b[1], b[2]);
            default:
                return a.apply(null, b)
        }
    }, a.exports = g
}, function(a, b, c) {
    (function(a) {
        "use strict";
        b.test = function() {
            return void 0 !== a && !a.browser
        }, b.install = function(b) {
            return function() {
                a.nextTick(b)
            }
        }
    }).call(b, c(11))
}, function(a, b) {
    function c() {
        throw new Error("setTimeout has not been defined")
    }

    function d() {
        throw new Error("clearTimeout has not been defined")
    }

    function e(a) {
        if (k === setTimeout) return setTimeout(a, 0);
        if ((k === c || !k) && setTimeout) return k = setTimeout, setTimeout(a, 0);
        try {
            return k(a, 0)
        } catch (b) {
            try {
                return k.call(null, a, 0)
            } catch (b) {
                return k.call(this, a, 0)
            }
        }
    }

    function f(a) {
        if (l === clearTimeout) return clearTimeout(a);
        if ((l === d || !l) && clearTimeout) return l = clearTimeout, clearTimeout(a);
        try {
            return l(a)
        } catch (b) {
            try {
                return l.call(null, a)
            } catch (b) {
                return l.call(this, a)
            }
        }
    }

    function g() {
        p && n && (p = !1, n.length ? o = n.concat(o) : q = -1, o.length && h())
    }

    function h() {
        if (!p) {
            var a = e(g);
            p = !0;
            for (var b = o.length; b;) {
                for (n = o, o = []; ++q < b;) n && n[q].run();
                q = -1, b = o.length
            }
            n = null, p = !1, f(a)
        }
    }

    function i(a, b) {
        this.fun = a, this.array = b
    }

    function j() {}
    var k, l, m = a.exports = {};
    ! function() {
        try {
            k = "function" == typeof setTimeout ? setTimeout : c
        } catch (a) {
            k = c
        }
        try {
            l = "function" == typeof clearTimeout ? clearTimeout : d
        } catch (a) {
            l = d
        }
    }();
    var n, o = [],
        p = !1,
        q = -1;
    m.nextTick = function(a) {
        var b = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
        o.push(new i(a, b)), 1 !== o.length || p || e(h)
    }, i.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.version = "", m.versions = {}, m.on = j, m.addListener = j, m.once = j, m.off = j, m.removeListener = j, m.removeAllListeners = j, m.emit = j, m.binding = function(a) {
        throw new Error("process.binding is not supported")
    }, m.cwd = function() {
        return "/"
    }, m.chdir = function(a) {
        throw new Error("process.chdir is not supported")
    }, m.umask = function() {
        return 0
    }
}, function(a, b) {
    (function(a) {
        "use strict";
        var c = a.MutationObserver || a.WebKitMutationObserver;
        b.test = function() {
            return c
        }, b.install = function(b) {
            var d = 0,
                e = new c(b),
                f = a.document.createTextNode("");
            return e.observe(f, {
                    characterData: !0
                }),
                function() {
                    f.data = d = ++d % 2
                }
        }
    }).call(b, function() {
        return this
    }())
}, function(a, b) {
    (function(a) {
        "use strict";
        b.test = function() {
            return !a.setImmediate && void 0 !== a.MessageChannel
        }, b.install = function(b) {
            var c = new a.MessageChannel;
            return c.port1.onmessage = b,
                function() {
                    c.port2.postMessage(0)
                }
        }
    }).call(b, function() {
        return this
    }())
}, function(a, b) {
    (function(a) {
        "use strict";
        b.test = function() {
            return "document" in a && "onreadystatechange" in a.document.createElement("script")
        }, b.install = function(b) {
            return function() {
                var c = a.document.createElement("script");
                return c.onreadystatechange = function() {
                    b(), c.onreadystatechange = null, c.parentNode.removeChild(c), c = null
                }, a.document.documentElement.appendChild(c), b
            }
        }
    }).call(b, function() {
        return this
    }())
}, function(a, b) {
    "use strict";
    b.test = function() {
        return !0
    }, b.install = function(a) {
        return function() {
            setTimeout(a, 0)
        }
    }
}, function(a, b, c) {
    "use strict";

    function d(a) {
        var b, c, d, h = this;
        a = a || {}, a.menu || f.error("menu is required"), f.isArray(a.datasets) || f.isObject(a.datasets) || f.error("1 or more datasets required"), a.datasets || f.error("datasets is required"), this.isOpen = !1, this.isEmpty = !0, this.minLength = a.minLength || 0, this.templates = {}, this.appendTo = a.appendTo || !1, this.css = f.mixin({}, j, a.appendTo ? j.appendTo : {}), this.cssClasses = a.cssClasses = f.mixin({}, j.defaultClasses, a.cssClasses || {}), this.cssClasses.prefix = a.cssClasses.formattedPrefix || f.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix), b = f.bind(this._onSuggestionClick, this), c = f.bind(this._onSuggestionMouseEnter, this), d = f.bind(this._onSuggestionMouseLeave, this);
        var i = f.className(this.cssClasses.prefix, this.cssClasses.suggestion);
        this.$menu = g.element(a.menu).on("mouseenter.aa", i, c).on("mouseleave.aa", i, d).on("click.aa", i, b), this.$container = a.appendTo ? a.wrapper : this.$menu, a.templates && a.templates.header && (this.templates.header = f.templatify(a.templates.header), this.$menu.prepend(this.templates.header())), a.templates && a.templates.empty && (this.templates.empty = f.templatify(a.templates.empty), this.$empty = g.element('<div class="' + f.className(this.cssClasses.prefix, this.cssClasses.empty, !0) + '"></div>'), this.$menu.append(this.$empty), this.$empty.hide()), this.datasets = f.map(a.datasets, function(b) {
            return e(h.$menu, b, a.cssClasses)
        }), f.each(this.datasets, function(a) {
            var b = a.getRoot();
            b && 0 === b.parent().length && h.$menu.append(b), a.onSync("rendered", h._onRendered, h)
        }), a.templates && a.templates.footer && (this.templates.footer = f.templatify(a.templates.footer), this.$menu.append(this.templates.footer()));
        var k = this;
        g.element(window).resize(function() {
            k._redraw()
        })
    }

    function e(a, b, c) {
        return new d.Dataset(f.mixin({
            $menu: a,
            cssClasses: c
        }, b))
    }
    var f = c(4),
        g = c(2),
        h = c(8),
        i = c(17),
        j = c(19);
    f.mixin(d.prototype, h, {
        _onSuggestionClick: function(a) {
            this.trigger("suggestionClicked", g.element(a.currentTarget))
        },
        _onSuggestionMouseEnter: function(a) {
            var b = g.element(a.currentTarget);
            if (!b.hasClass(f.className(this.cssClasses.prefix, this.cssClasses.cursor, !0))) {
                this._removeCursor();
                var c = this;
                setTimeout(function() {
                    c._setCursor(b, !1)
                }, 0)
            }
        },
        _onSuggestionMouseLeave: function(a) {
            if (a.relatedTarget) {
                if (g.element(a.relatedTarget).closest("." + f.className(this.cssClasses.prefix, this.cssClasses.cursor, !0)).length > 0) return
            }
            this._removeCursor(), this.trigger("cursorRemoved")
        },
        _onRendered: function(a, b) {
            function c(a) {
                return a.isEmpty()
            }

            function d(a) {
                return a.templates && a.templates.empty
            }
            if (this.isEmpty = f.every(this.datasets, c), this.isEmpty)
                if (b.length >= this.minLength && this.trigger("empty"), this.$empty)
                    if (b.length < this.minLength) this._hide();
                    else {
                        var e = this.templates.empty({
                            query: this.datasets[0] && this.datasets[0].query
                        });
                        this.$empty.html(e), this.$empty.show(), this._show()
                    }
            else f.any(this.datasets, d) ? b.length < this.minLength ? this._hide() : this._show() : this._hide();
            else this.isOpen && (this.$empty && (this.$empty.empty(), this.$empty.hide()), b.length >= this.minLength ? this._show() : this._hide());
            this.trigger("datasetRendered")
        },
        _hide: function() {
            this.$container.hide()
        },
        _show: function() {
            this.$container.css("display", "block"), this._redraw(), this.trigger("shown")
        },
        _redraw: function() {
            this.isOpen && this.appendTo && this.trigger("redrawn")
        },
        _getSuggestions: function() {
            return this.$menu.find(f.className(this.cssClasses.prefix, this.cssClasses.suggestion))
        },
        _getCursor: function() {
            return this.$menu.find(f.className(this.cssClasses.prefix, this.cssClasses.cursor)).first()
        },
        _setCursor: function(a, b) {
            a.first().addClass(f.className(this.cssClasses.prefix, this.cssClasses.cursor, !0)).attr("aria-selected", "true"), this.trigger("cursorMoved", b)
        },
        _removeCursor: function() {
            this._getCursor().removeClass(f.className(this.cssClasses.prefix, this.cssClasses.cursor, !0)).removeAttr("aria-selected")
        },
        _moveCursor: function(a) {
            var b, c, d, e;
            if (this.isOpen) {
                if (c = this._getCursor(), b = this._getSuggestions(), this._removeCursor(), d = b.index(c) + a, (d = (d + 1) % (b.length + 1) - 1) === -1) return void this.trigger("cursorRemoved");
                d < -1 && (d = b.length - 1), this._setCursor(e = b.eq(d), !0), this._ensureVisible(e)
            }
        },
        _ensureVisible: function(a) {
            var b, c, d, e;
            b = a.position().top, c = b + a.height() + parseInt(a.css("margin-top"), 10) + parseInt(a.css("margin-bottom"), 10), d = this.$menu.scrollTop(), e = this.$menu.height() + parseInt(this.$menu.css("padding-top"), 10) + parseInt(this.$menu.css("padding-bottom"), 10), b < 0 ? this.$menu.scrollTop(d + b) : e < c && this.$menu.scrollTop(d + (c - e))
        },
        close: function() {
            this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"))
        },
        open: function() {
            this.isOpen || (this.isOpen = !0, this.isEmpty || this._show(), this.trigger("opened"))
        },
        setLanguageDirection: function(a) {
            this.$menu.css("ltr" === a ? this.css.ltr : this.css.rtl)
        },
        moveCursorUp: function() {
            this._moveCursor(-1)
        },
        moveCursorDown: function() {
            this._moveCursor(1)
        },
        getDatumForSuggestion: function(a) {
            var b = null;
            return a.length && (b = {
                raw: i.extractDatum(a),
                value: i.extractValue(a),
                datasetName: i.extractDatasetName(a)
            }), b
        },
        getCurrentCursor: function() {
            return this._getCursor().first()
        },
        getDatumForCursor: function() {
            return this.getDatumForSuggestion(this._getCursor().first())
        },
        getDatumForTopSuggestion: function() {
            return this.getDatumForSuggestion(this._getSuggestions().first())
        },
        cursorTopSuggestion: function() {
            this._setCursor(this._getSuggestions().first(), !1)
        },
        update: function(a) {
            function b(b) {
                b.update(a)
            }
            f.each(this.datasets, b)
        },
        empty: function() {
            function a(a) {
                a.clear()
            }
            f.each(this.datasets, a), this.isEmpty = !0
        },
        isVisible: function() {
            return this.isOpen && !this.isEmpty
        },
        destroy: function() {
            function a(a) {
                a.destroy()
            }
            this.$menu.off(".aa"), this.$menu = null, f.each(this.datasets, a)
        }
    }), d.Dataset = i, a.exports = d
}, function(a, b, c) {
    "use strict";

    function d(a) {
        a = a || {}, a.templates = a.templates || {}, a.source || k.error("missing source"), a.name && !g(a.name) && k.error("invalid dataset name: " + a.name), this.query = null, this._isEmpty = !0, this.highlight = !!a.highlight, this.name = void 0 === a.name || null === a.name ? k.getUniqueId() : a.name, this.source = a.source, this.displayFn = e(a.display || a.displayKey), this.debounce = a.debounce, this.templates = f(a.templates, this.displayFn), this.css = k.mixin({}, n, a.appendTo ? n.appendTo : {}), this.cssClasses = a.cssClasses = k.mixin({}, n.defaultClasses, a.cssClasses || {}), this.cssClasses.prefix = a.cssClasses.formattedPrefix || k.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix);
        var b = k.className(this.cssClasses.prefix, this.cssClasses.dataset);
        this.$el = a.$menu && a.$menu.find(b + "-" + this.name).length > 0 ? l.element(a.$menu.find(b + "-" + this.name)[0]) : l.element(m.dataset.replace("%CLASS%", this.name).replace("%PREFIX%", this.cssClasses.prefix).replace("%DATASET%", this.cssClasses.dataset)), this.$menu = a.$menu, this.clearCachedSuggestions()
    }

    function e(a) {
        function b(b) {
            return b[a]
        }
        return a = a || "value", k.isFunction(a) ? a : b
    }

    function f(a, b) {
        function c(a) {
            return "<p>" + b(a) + "</p>"
        }
        return {
            empty: a.empty && k.templatify(a.empty),
            header: a.header && k.templatify(a.header),
            footer: a.footer && k.templatify(a.footer),
            suggestion: a.suggestion || c
        }
    }

    function g(a) {
        return /^[_a-zA-Z0-9-]+$/.test(a)
    }
    var h = "aaDataset",
        i = "aaValue",
        j = "aaDatum",
        k = c(4),
        l = c(2),
        m = c(18),
        n = c(19),
        o = c(8);
    d.extractDatasetName = function(a) {
        return l.element(a).data(h)
    }, d.extractValue = function(a) {
        return l.element(a).data(i)
    }, d.extractDatum = function(a) {
        var b = l.element(a).data(j);
        return "string" == typeof b && (b = JSON.parse(b)), b
    }, k.mixin(d.prototype, o, {
        _render: function(a, b) {
            function c() {
                var b = [].slice.call(arguments, 0);
                return b = [{
                    query: a,
                    isEmpty: !0
                }].concat(b), n.templates.empty.apply(this, b)
            }

            function d() {
                function a(a) {
                    var b, c = m.suggestion.replace("%PREFIX%", f.cssClasses.prefix).replace("%SUGGESTION%", f.cssClasses.suggestion);
                    return b = l.element(c).attr({
                        role: "option",
                        id: ["option", Math.floor(1e8 * Math.random())].join("-")
                    }).append(n.templates.suggestion.apply(this, [a].concat(e))), b.data(h, n.name), b.data(i, n.displayFn(a) || void 0), b.data(j, JSON.stringify(a)), b.children().each(function() {
                        l.element(this).css(f.css.suggestionChild)
                    }), b
                }
                var c, d, e = [].slice.call(arguments, 0),
                    f = this,
                    g = m.suggestions.replace("%PREFIX%", this.cssClasses.prefix).replace("%SUGGESTIONS%", this.cssClasses.suggestions);
                return c = l.element(g).css(this.css.suggestions), d = k.map(b, a), c.append.apply(c, d), c
            }

            function e() {
                var b = [].slice.call(arguments, 0);
                return b = [{
                    query: a,
                    isEmpty: !g
                }].concat(b), n.templates.header.apply(this, b)
            }

            function f() {
                var b = [].slice.call(arguments, 0);
                return b = [{
                    query: a,
                    isEmpty: !g
                }].concat(b), n.templates.footer.apply(this, b)
            }
            if (this.$el) {
                var g, n = this,
                    o = [].slice.call(arguments, 2);
                this.$el.empty(), g = b && b.length, this._isEmpty = !g, !g && this.templates.empty ? this.$el.html(c.apply(this, o)).prepend(n.templates.header ? e.apply(this, o) : null).append(n.templates.footer ? f.apply(this, o) : null) : g && this.$el.html(d.apply(this, o)).prepend(n.templates.header ? e.apply(this, o) : null).append(n.templates.footer ? f.apply(this, o) : null), this.$menu && this.$menu.addClass(this.cssClasses.prefix + (g ? "with" : "without") + "-" + this.name).removeClass(this.cssClasses.prefix + (g ? "without" : "with") + "-" + this.name), this.trigger("rendered", a)
            }
        },
        getRoot: function() {
            return this.$el
        },
        update: function(a) {
            function b(b) {
                if (!this.canceled && a === this.query) {
                    var c = [].slice.call(arguments, 1);
                    this.cacheSuggestions(a, b, c), this._render.apply(this, [a, b].concat(c))
                }
            }
            if (this.query = a, this.canceled = !1, this.shouldFetchFromCache(a)) b.apply(this, [this.cachedSuggestions].concat(this.cachedRenderExtraArgs));
            else {
                var c = this,
                    d = function() {
                        c.canceled || c.source(a, b.bind(c))
                    };
                if (this.debounce) {
                    var e = function() {
                        c.debounceTimeout = null, d()
                    };
                    clearTimeout(this.debounceTimeout), this.debounceTimeout = setTimeout(e, this.debounce)
                } else d()
            }
        },
        cacheSuggestions: function(a, b, c) {
            this.cachedQuery = a, this.cachedSuggestions = b, this.cachedRenderExtraArgs = c
        },
        shouldFetchFromCache: function(a) {
            return this.cachedQuery === a && this.cachedSuggestions && this.cachedSuggestions.length
        },
        clearCachedSuggestions: function() {
            delete this.cachedQuery, delete this.cachedSuggestions, delete this.cachedRenderExtraArgs
        },
        cancel: function() {
            this.canceled = !0
        },
        clear: function() {
            this.cancel(), this.$el.empty(), this.trigger("rendered", "")
        },
        isEmpty: function() {
            return this._isEmpty
        },
        destroy: function() {
            this.clearCachedSuggestions(), this.$el = null
        }
    }), a.exports = d
}, function(a, b) {
    "use strict";
    a.exports = {
        wrapper: '<span class="%ROOT%"></span>',
        dropdown: '<span class="%PREFIX%%DROPDOWN_MENU%"></span>',
        dataset: '<div class="%PREFIX%%DATASET%-%CLASS%"></div>',
        suggestions: '<span class="%PREFIX%%SUGGESTIONS%"></span>',
        suggestion: '<div class="%PREFIX%%SUGGESTION%"></div>'
    }
}, function(a, b, c) {
    "use strict";
    var d = c(4),
        e = {
            wrapper: {
                position: "relative",
                display: "inline-block"
            },
            hint: {
                position: "absolute",
                top: "0",
                left: "0",
                borderColor: "transparent",
                boxShadow: "none",
                opacity: "1"
            },
            input: {
                position: "relative",
                verticalAlign: "top",
                backgroundColor: "transparent"
            },
            inputWithNoHint: {
                position: "relative",
                verticalAlign: "top"
            },
            dropdown: {
                position: "absolute",
                top: "100%",
                left: "0",
                zIndex: "100",
                display: "none"
            },
            suggestions: {
                display: "block"
            },
            suggestion: {
                whiteSpace: "nowrap",
                cursor: "pointer"
            },
            suggestionChild: {
                whiteSpace: "normal"
            },
            ltr: {
                left: "0",
                right: "auto"
            },
            rtl: {
                left: "auto",
                right: "0"
            },
            defaultClasses: {
                root: "algolia-autocomplete",
                prefix: "aa",
                noPrefix: !1,
                dropdownMenu: "dropdown-menu",
                input: "input",
                hint: "hint",
                suggestions: "suggestions",
                suggestion: "suggestion",
                cursor: "cursor",
                dataset: "dataset",
                empty: "empty"
            },
            appendTo: {
                wrapper: {
                    position: "absolute",
                    zIndex: "100",
                    display: "none"
                },
                input: {},
                inputWithNoHint: {},
                dropdown: {
                    display: "block"
                }
            }
        };
    d.isMsie() && d.mixin(e.input, {
        backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
    }), d.isMsie() && d.isMsie() <= 7 && d.mixin(e.input, {
        marginTop: "-1px"
    }), a.exports = e
}, function(a, b, c) {
    "use strict";
    a.exports = {
        hits: c(21),
        popularIn: c(24)
    }
}, function(a, b, c) {
    "use strict";
    var d = c(4),
        e = c(22),
        f = c(23);
    a.exports = function(a, b) {
        function c(c, e) {
            a.search(c, b, function(a, b) {
                if (a) return void d.error(a.message);
                e(b.hits, b)
            })
        }
        var g = f(a.as._ua);
        return g && g[0] >= 3 && g[1] > 20 && (b = b || {}, b.additionalUA = "autocomplete.js " + e), c
    }
}, function(a, b) {
    a.exports = "0.31.0"
}, function(a, b) {
    "use strict";
    a.exports = function(a) {
        var b = a.match(/Algolia for vanilla JavaScript (\d+\.)(\d+\.)(\d+)/);
        if (b) return [b[1], b[2], b[3]]
    }
}, function(a, b, c) {
    "use strict";
    var d = c(4),
        e = c(22),
        f = c(23);
    a.exports = function(a, b, c, g) {
        function h(h, i) {
            a.search(h, b, function(a, h) {
                if (a) return void d.error(a.message);
                if (h.hits.length > 0) {
                    var l = h.hits[0],
                        m = d.mixin({
                            hitsPerPage: 0
                        }, c);
                    delete m.source, delete m.index;
                    var n = f(k.as._ua);
                    return n && n[0] >= 3 && n[1] > 20 && (b.additionalUA = "autocomplete.js " + e), void k.search(j(l), m, function(a, b) {
                        if (a) return void d.error(a.message);
                        var c = [];
                        if (g.includeAll) {
                            var e = g.allTitle || "All departments";
                            c.push(d.mixin({
                                facet: {
                                    value: e,
                                    count: b.nbHits
                                }
                            }, d.cloneDeep(l)))
                        }
                        d.each(b.facets, function(a, b) {
                            d.each(a, function(a, e) {
                                c.push(d.mixin({
                                    facet: {
                                        facet: b,
                                        value: e,
                                        count: a
                                    }
                                }, d.cloneDeep(l)))
                            })
                        });
                        for (var f = 1; f < h.hits.length; ++f) c.push(h.hits[f]);
                        i(c, h)
                    })
                }
                i([])
            })
        }
        var i = f(a.as._ua);
        if (i && i[0] >= 3 && i[1] > 20 && (b = b || {}, b.additionalUA = "autocomplete.js " + e), !c.source) return d.error("Missing 'source' key");
        var j = d.isFunction(c.source) ? c.source : function(a) {
            return a[c.source]
        };
        if (!c.index) return d.error("Missing 'index' key");
        var k = c.index;
        return g = g || {}, h
    }
}]);; /*!algoliasearch 3.27.1 | © 2014, 2015 Algolia SAS | github.com/algolia/algoliasearch-client-js*/
! function(e) {
    var t;
    "undefined" != typeof window ? t = window : "undefined" != typeof self && (t = self), t.ALGOLIA_MIGRATION_LAYER = e()
}(function() {
    return function e(t, r, n) {
        function o(s, a) {
            if (!r[s]) {
                if (!t[s]) {
                    var c = "function" == typeof require && require;
                    if (!a && c) return c(s, !0);
                    if (i) return i(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var l = r[s] = {
                    exports: {}
                };
                t[s][0].call(l.exports, function(e) {
                    var r = t[s][1][e];
                    return o(r ? r : e)
                }, l, l.exports, e, t, r, n)
            }
            return r[s].exports
        }
        for (var i = "function" == typeof require && require, s = 0; s < n.length; s++) o(n[s]);
        return o
    }({
        1: [function(e, t, r) {
            function n(e, t) {
                for (var r in t) e.setAttribute(r, t[r])
            }

            function o(e, t) {
                e.onload = function() {
                    this.onerror = this.onload = null, t(null, e)
                }, e.onerror = function() {
                    this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e)
                }
            }

            function i(e, t) {
                e.onreadystatechange = function() {
                    "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t(null, e))
                }
            }
            t.exports = function(e, t, r) {
                var s = document.head || document.getElementsByTagName("head")[0],
                    a = document.createElement("script");
                "function" == typeof t && (r = t, t = {}), t = t || {}, r = r || function() {}, a.type = t.type || "text/javascript", a.charset = t.charset || "utf8", a.async = !("async" in t) || !!t.async, a.src = e, t.attrs && n(a, t.attrs), t.text && (a.text = "" + t.text);
                var c = "onload" in a ? o : i;
                c(a, r), a.onload || o(a, r), s.appendChild(a)
            }
        }, {}],
        2: [function(e, t, r) {
            "use strict";

            function n(e) {
                for (var t = new RegExp("cdn\\.jsdelivr\\.net/algoliasearch/latest/" + e.replace(".", "\\.") + "(?:\\.min)?\\.js$"), r = document.getElementsByTagName("script"), n = !1, o = 0, i = r.length; o < i; o++)
                    if (r[o].src && t.test(r[o].src)) {
                        n = !0;
                        break
                    }
                return n
            }
            t.exports = n
        }, {}],
        3: [function(e, t, r) {
            "use strict";

            function n(t) {
                var r = e(1),
                    n = "//cdn.jsdelivr.net/algoliasearch/2/" + t + ".min.js",
                    i = "-- AlgoliaSearch `latest` warning --\nWarning, you are using the `latest` version string from jsDelivr to load the AlgoliaSearch library.\nUsing `latest` is no more recommended, you should load //cdn.jsdelivr.net/algoliasearch/2/algoliasearch.min.js\n\nAlso, we updated the AlgoliaSearch JavaScript client to V3. If you want to upgrade,\nplease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch  `latest` warning --";
                window.console && (window.console.warn ? window.console.warn(i) : window.console.log && window.console.log(i));
                try {
                    document.write("<script>window.ALGOLIA_SUPPORTS_DOCWRITE = true</script>"), window.ALGOLIA_SUPPORTS_DOCWRITE === !0 ? (document.write('<script src="' + n + '"></script>'), o("document.write")()) : r(n, o("DOMElement"))
                } catch (s) {
                    r(n, o("DOMElement"))
                }
            }

            function o(e) {
                return function() {
                    var t = "AlgoliaSearch: loaded V2 script using " + e;
                    window.console && window.console.log && window.console.log(t)
                }
            }
            t.exports = n
        }, {
            1: 1
        }],
        4: [function(e, t, r) {
            "use strict";

            function n() {
                var e = "-- AlgoliaSearch V2 => V3 error --\nYou are trying to use a new version of the AlgoliaSearch JavaScript client with an old notation.\nPlease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch V2 => V3 error --";
                window.AlgoliaSearch = function() {
                    throw new Error(e)
                }, window.AlgoliaSearchHelper = function() {
                    throw new Error(e)
                }, window.AlgoliaExplainResults = function() {
                    throw new Error(e)
                }
            }
            t.exports = n
        }, {}],
        5: [function(e, t, r) {
            "use strict";

            function n(t) {
                var r = e(2),
                    n = e(3),
                    o = e(4);
                r(t) ? n(t) : o()
            }
            n("algoliasearch")
        }, {
            2: 2,
            3: 3,
            4: 4
        }]
    }, {}, [5])(5)
}),
function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.algoliasearch = e()
    }
}(function() {
    var e;
    return function t(e, r, n) {
        function o(s, a) {
            if (!r[s]) {
                if (!e[s]) {
                    var c = "function" == typeof require && require;
                    if (!a && c) return c(s, !0);
                    if (i) return i(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var l = r[s] = {
                    exports: {}
                };
                e[s][0].call(l.exports, function(t) {
                    var r = e[s][1][t];
                    return o(r ? r : t)
                }, l, l.exports, t, e, r, n)
            }
            return r[s].exports
        }
        for (var i = "function" == typeof require && require, s = 0; s < n.length; s++) o(n[s]);
        return o
    }({
        1: [function(e, t, r) {
            (function(n) {
                function o() {
                    return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                }

                function i(e) {
                    var t = this.useColors;
                    if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + r.humanize(this.diff), t) {
                        var n = "color: " + this.color;
                        e.splice(1, 0, n, "color: inherit");
                        var o = 0,
                            i = 0;
                        e[0].replace(/%[a-zA-Z%]/g, function(e) {
                            "%%" !== e && (o++, "%c" === e && (i = o))
                        }), e.splice(i, 0, n)
                    }
                }

                function s() {
                    return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                }

                function a(e) {
                    try {
                        null == e ? r.storage.removeItem("debug") : r.storage.debug = e
                    } catch (t) {}
                }

                function c() {
                    var e;
                    try {
                        e = r.storage.debug
                    } catch (t) {}
                    return !e && "undefined" != typeof n && "env" in n && (e = n.env.DEBUG), e
                }

                function u() {
                    try {
                        return window.localStorage
                    } catch (e) {}
                }
                r = t.exports = e(2), r.log = s, r.formatArgs = i, r.save = a, r.load = c, r.useColors = o, r.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u(), r.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], r.formatters.j = function(e) {
                    try {
                        return JSON.stringify(e)
                    } catch (t) {
                        return "[UnexpectedJSONParseError]: " + t.message
                    }
                }, r.enable(c())
            }).call(this, e(12))
        }, {
            12: 12,
            2: 2
        }],
        2: [function(e, t, r) {
            function n(e) {
                var t, n = 0;
                for (t in e) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
                return r.colors[Math.abs(n) % r.colors.length]
            }

            function o(e) {
                function t() {
                    if (t.enabled) {
                        var e = t,
                            n = +new Date,
                            o = n - (u || n);
                        e.diff = o, e.prev = u, e.curr = n, u = n;
                        for (var i = new Array(arguments.length), s = 0; s < i.length; s++) i[s] = arguments[s];
                        i[0] = r.coerce(i[0]), "string" != typeof i[0] && i.unshift("%O");
                        var a = 0;
                        i[0] = i[0].replace(/%([a-zA-Z%])/g, function(t, n) {
                            if ("%%" === t) return t;
                            a++;
                            var o = r.formatters[n];
                            if ("function" == typeof o) {
                                var s = i[a];
                                t = o.call(e, s), i.splice(a, 1), a--
                            }
                            return t
                        }), r.formatArgs.call(e, i);
                        var c = t.log || r.log || console.log.bind(console);
                        c.apply(e, i)
                    }
                }
                return t.namespace = e, t.enabled = r.enabled(e), t.useColors = r.useColors(), t.color = n(e), "function" == typeof r.init && r.init(t), t
            }

            function i(e) {
                r.save(e), r.names = [], r.skips = [];
                for (var t = ("string" == typeof e ? e : "").split(/[\s,]+/), n = t.length, o = 0; o < n; o++) t[o] && (e = t[o].replace(/\*/g, ".*?"), "-" === e[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")))
            }

            function s() {
                r.enable("")
            }

            function a(e) {
                var t, n;
                for (t = 0, n = r.skips.length; t < n; t++)
                    if (r.skips[t].test(e)) return !1;
                for (t = 0, n = r.names.length; t < n; t++)
                    if (r.names[t].test(e)) return !0;
                return !1
            }

            function c(e) {
                return e instanceof Error ? e.stack || e.message : e
            }
            r = t.exports = o.debug = o["default"] = o, r.coerce = c, r.disable = s, r.enable = i, r.enabled = a, r.humanize = e(9), r.names = [], r.skips = [], r.formatters = {};
            var u
        }, {
            9: 9
        }],
        3: [function(t, r, n) {
            (function(o, i) {
                ! function(t, o) {
                    "object" == typeof n && "undefined" != typeof r ? r.exports = o() : "function" == typeof e && e.amd ? e(o) : t.ES6Promise = o()
                }(this, function() {
                    "use strict";

                    function e(e) {
                        var t = typeof e;
                        return null !== e && ("object" === t || "function" === t)
                    }

                    function r(e) {
                        return "function" == typeof e
                    }

                    function n(e) {
                        X = e
                    }

                    function s(e) {
                        W = e
                    }

                    function a() {
                        return function() {
                            return o.nextTick(d)
                        }
                    }

                    function c() {
                        return "undefined" != typeof V ? function() {
                            V(d)
                        } : p()
                    }

                    function u() {
                        var e = 0,
                            t = new Z(d),
                            r = document.createTextNode("");
                        return t.observe(r, {
                                characterData: !0
                            }),
                            function() {
                                r.data = e = ++e % 2
                            }
                    }

                    function l() {
                        var e = new MessageChannel;
                        return e.port1.onmessage = d,
                            function() {
                                return e.port2.postMessage(0)
                            }
                    }

                    function p() {
                        var e = setTimeout;
                        return function() {
                            return e(d, 1)
                        }
                    }

                    function d() {
                        for (var e = 0; e < G; e += 2) {
                            var t = re[e],
                                r = re[e + 1];
                            t(r), re[e] = void 0, re[e + 1] = void 0
                        }
                        G = 0
                    }

                    function h() {
                        try {
                            var e = t,
                                r = e("vertx");
                            return V = r.runOnLoop || r.runOnContext, c()
                        } catch (n) {
                            return p()
                        }
                    }

                    function f(e, t) {
                        var r = arguments,
                            n = this,
                            o = new this.constructor(m);
                        void 0 === o[oe] && C(o);
                        var i = n._state;
                        return i ? ! function() {
                            var e = r[i - 1];
                            W(function() {
                                return E(i, o, e, n._result)
                            })
                        }() : I(n, o, e, t), o
                    }

                    function y(e) {
                        var t = this;
                        if (e && "object" == typeof e && e.constructor === t) return e;
                        var r = new t(m);
                        return A(r, e), r
                    }

                    function m() {}

                    function v() {
                        return new TypeError("You cannot resolve a promise with itself")
                    }

                    function g() {
                        return new TypeError("A promises callback cannot return that same promise.")
                    }

                    function b(e) {
                        try {
                            return e.then
                        } catch (t) {
                            return ce.error = t, ce
                        }
                    }

                    function w(e, t, r, n) {
                        try {
                            e.call(t, r, n)
                        } catch (o) {
                            return o
                        }
                    }

                    function _(e, t, r) {
                        W(function(e) {
                            var n = !1,
                                o = w(r, t, function(r) {
                                    n || (n = !0, t !== r ? A(e, r) : j(e, r))
                                }, function(t) {
                                    n || (n = !0, S(e, t))
                                }, "Settle: " + (e._label || " unknown promise"));
                            !n && o && (n = !0, S(e, o))
                        }, e)
                    }

                    function x(e, t) {
                        t._state === se ? j(e, t._result) : t._state === ae ? S(e, t._result) : I(t, void 0, function(t) {
                            return A(e, t)
                        }, function(t) {
                            return S(e, t)
                        })
                    }

                    function T(e, t, n) {
                        t.constructor === e.constructor && n === f && t.constructor.resolve === y ? x(e, t) : n === ce ? (S(e, ce.error), ce.error = null) : void 0 === n ? j(e, t) : r(n) ? _(e, t, n) : j(e, t)
                    }

                    function A(t, r) {
                        t === r ? S(t, v()) : e(r) ? T(t, r, b(r)) : j(t, r)
                    }

                    function R(e) {
                        e._onerror && e._onerror(e._result), k(e)
                    }

                    function j(e, t) {
                        e._state === ie && (e._result = t, e._state = se, 0 !== e._subscribers.length && W(k, e))
                    }

                    function S(e, t) {
                        e._state === ie && (e._state = ae, e._result = t, W(R, e))
                    }

                    function I(e, t, r, n) {
                        var o = e._subscribers,
                            i = o.length;
                        e._onerror = null, o[i] = t, o[i + se] = r, o[i + ae] = n, 0 === i && e._state && W(k, e)
                    }

                    function k(e) {
                        var t = e._subscribers,
                            r = e._state;
                        if (0 !== t.length) {
                            for (var n = void 0, o = void 0, i = e._result, s = 0; s < t.length; s += 3) n = t[s], o = t[s + r], n ? E(r, n, o, i) : o(i);
                            e._subscribers.length = 0
                        }
                    }

                    function O() {
                        this.error = null
                    }

                    function U(e, t) {
                        try {
                            return e(t)
                        } catch (r) {
                            return ue.error = r, ue
                        }
                    }

                    function E(e, t, n, o) {
                        var i = r(n),
                            s = void 0,
                            a = void 0,
                            c = void 0,
                            u = void 0;
                        if (i) {
                            if (s = U(n, o), s === ue ? (u = !0, a = s.error, s.error = null) : c = !0, t === s) return void S(t, g())
                        } else s = o, c = !0;
                        t._state !== ie || (i && c ? A(t, s) : u ? S(t, a) : e === se ? j(t, s) : e === ae && S(t, s))
                    }

                    function P(e, t) {
                        try {
                            t(function(t) {
                                A(e, t)
                            }, function(t) {
                                S(e, t)
                            })
                        } catch (r) {
                            S(e, r)
                        }
                    }

                    function q() {
                        return le++
                    }

                    function C(e) {
                        e[oe] = le++, e._state = void 0, e._result = void 0, e._subscribers = []
                    }

                    function N(e, t) {
                        this._instanceConstructor = e, this.promise = new e(m), this.promise[oe] || C(this.promise), $(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? j(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && j(this.promise, this._result))) : S(this.promise, D())
                    }

                    function D() {
                        return new Error("Array Methods must be provided an Array")
                    }

                    function K(e) {
                        return new N(this, e).promise
                    }

                    function L(e) {
                        var t = this;
                        return new t($(e) ? function(r, n) {
                            for (var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(r, n)
                        } : function(e, t) {
                            return t(new TypeError("You must pass an array to race."))
                        })
                    }

                    function H(e) {
                        var t = this,
                            r = new t(m);
                        return S(r, e), r
                    }

                    function M() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }

                    function F() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }

                    function J(e) {
                        this[oe] = q(), this._result = this._state = void 0, this._subscribers = [], m !== e && ("function" != typeof e && M(), this instanceof J ? P(this, e) : F())
                    }

                    function B() {
                        var e = void 0;
                        if ("undefined" != typeof i) e = i;
                        else if ("undefined" != typeof self) e = self;
                        else try {
                            e = Function("return this")()
                        } catch (t) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                        var r = e.Promise;
                        if (r) {
                            var n = null;
                            try {
                                n = Object.prototype.toString.call(r.resolve())
                            } catch (t) {}
                            if ("[object Promise]" === n && !r.cast) return
                        }
                        e.Promise = J
                    }
                    var Q = void 0;
                    Q = Array.isArray ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    };
                    var $ = Q,
                        G = 0,
                        V = void 0,
                        X = void 0,
                        W = function(e, t) {
                            re[G] = e, re[G + 1] = t, G += 2, 2 === G && (X ? X(d) : ne())
                        },
                        Y = "undefined" != typeof window ? window : void 0,
                        z = Y || {},
                        Z = z.MutationObserver || z.WebKitMutationObserver,
                        ee = "undefined" == typeof self && "undefined" != typeof o && "[object process]" === {}.toString.call(o),
                        te = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                        re = new Array(1e3),
                        ne = void 0;
                    ne = ee ? a() : Z ? u() : te ? l() : void 0 === Y && "function" == typeof t ? h() : p();
                    var oe = Math.random().toString(36).substring(16),
                        ie = void 0,
                        se = 1,
                        ae = 2,
                        ce = new O,
                        ue = new O,
                        le = 0;
                    return N.prototype._enumerate = function(e) {
                        for (var t = 0; this._state === ie && t < e.length; t++) this._eachEntry(e[t], t)
                    }, N.prototype._eachEntry = function(e, t) {
                        var r = this._instanceConstructor,
                            n = r.resolve;
                        if (n === y) {
                            var o = b(e);
                            if (o === f && e._state !== ie) this._settledAt(e._state, t, e._result);
                            else if ("function" != typeof o) this._remaining--, this._result[t] = e;
                            else if (r === J) {
                                var i = new r(m);
                                T(i, e, o), this._willSettleAt(i, t)
                            } else this._willSettleAt(new r(function(t) {
                                return t(e)
                            }), t)
                        } else this._willSettleAt(n(e), t)
                    }, N.prototype._settledAt = function(e, t, r) {
                        var n = this.promise;
                        n._state === ie && (this._remaining--, e === ae ? S(n, r) : this._result[t] = r), 0 === this._remaining && j(n, this._result)
                    }, N.prototype._willSettleAt = function(e, t) {
                        var r = this;
                        I(e, void 0, function(e) {
                            return r._settledAt(se, t, e)
                        }, function(e) {
                            return r._settledAt(ae, t, e)
                        })
                    }, J.all = K, J.race = L, J.resolve = y, J.reject = H, J._setScheduler = n, J._setAsap = s, J._asap = W, J.prototype = {
                        constructor: J,
                        then: f,
                        "catch": function(e) {
                            return this.then(null, e)
                        }
                    }, J.polyfill = B, J.Promise = J, J
                })
            }).call(this, t(12), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            12: 12
        }],
        4: [function(e, t, r) {
            function n() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
            }

            function o(e) {
                return "function" == typeof e
            }

            function i(e) {
                return "number" == typeof e
            }

            function s(e) {
                return "object" == typeof e && null !== e
            }

            function a(e) {
                return void 0 === e
            }
            t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(e) {
                if (!i(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                return this._maxListeners = e, this
            }, n.prototype.emit = function(e) {
                var t, r, n, i, c, u;
                if (this._events || (this._events = {}), "error" === e && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
                    if (t = arguments[1], t instanceof Error) throw t;
                    var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                    throw l.context = t, l
                }
                if (r = this._events[e], a(r)) return !1;
                if (o(r)) switch (arguments.length) {
                    case 1:
                        r.call(this);
                        break;
                    case 2:
                        r.call(this, arguments[1]);
                        break;
                    case 3:
                        r.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        i = Array.prototype.slice.call(arguments, 1), r.apply(this, i)
                } else if (s(r))
                    for (i = Array.prototype.slice.call(arguments, 1), u = r.slice(), n = u.length, c = 0; c < n; c++) u[c].apply(this, i);
                return !0
            }, n.prototype.addListener = function(e, t) {
                var r;
                if (!o(t)) throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, o(t.listener) ? t.listener : t), this._events[e] ? s(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, s(this._events[e]) && !this._events[e].warned && (r = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, r && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace())), this
            }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e, t) {
                function r() {
                    this.removeListener(e, r), n || (n = !0, t.apply(this, arguments))
                }
                if (!o(t)) throw TypeError("listener must be a function");
                var n = !1;
                return r.listener = t, this.on(e, r), this
            }, n.prototype.removeListener = function(e, t) {
                var r, n, i, a;
                if (!o(t)) throw TypeError("listener must be a function");
                if (!this._events || !this._events[e]) return this;
                if (r = this._events[e], i = r.length, n = -1, r === t || o(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                else if (s(r)) {
                    for (a = i; a-- > 0;)
                        if (r[a] === t || r[a].listener && r[a].listener === t) {
                            n = a;
                            break
                        }
                    if (n < 0) return this;
                    1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(n, 1), this._events.removeListener && this.emit("removeListener", e, t)
                }
                return this
            }, n.prototype.removeAllListeners = function(e) {
                var t, r;
                if (!this._events) return this;
                if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                if (0 === arguments.length) {
                    for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                    return this.removeAllListeners("removeListener"), this._events = {}, this
                }
                if (r = this._events[e], o(r)) this.removeListener(e, r);
                else if (r)
                    for (; r.length;) this.removeListener(e, r[r.length - 1]);
                return delete this._events[e], this
            }, n.prototype.listeners = function(e) {
                var t;
                return t = this._events && this._events[e] ? o(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
            }, n.prototype.listenerCount = function(e) {
                if (this._events) {
                    var t = this._events[e];
                    if (o(t)) return 1;
                    if (t) return t.length
                }
                return 0
            }, n.listenerCount = function(e, t) {
                return e.listenerCount(t)
            }
        }, {}],
        5: [function(e, t, r) {
            var n = Object.prototype.hasOwnProperty,
                o = Object.prototype.toString;
            t.exports = function(e, t, r) {
                if ("[object Function]" !== o.call(t)) throw new TypeError("iterator must be a function");
                var i = e.length;
                if (i === +i)
                    for (var s = 0; s < i; s++) t.call(r, e[s], s, e);
                else
                    for (var a in e) n.call(e, a) && t.call(r, e[a], a, e)
            }
        }, {}],
        6: [function(e, t, r) {
            (function(e) {
                var r;
                r = "undefined" != typeof window ? window : "undefined" != typeof e ? e : "undefined" != typeof self ? self : {}, t.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        7: [function(e, t, r) {
            "function" == typeof Object.create ? t.exports = function(e, t) {
                e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            } : t.exports = function(e, t) {
                e.super_ = t;
                var r = function() {};
                r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
            }
        }, {}],
        8: [function(e, t, r) {
            var n = {}.toString;
            t.exports = Array.isArray || function(e) {
                return "[object Array]" == n.call(e)
            }
        }, {}],
        9: [function(e, t, r) {
            function n(e) {
                if (e = String(e), !(e.length > 100)) {
                    var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                    if (t) {
                        var r = parseFloat(t[1]),
                            n = (t[2] || "ms").toLowerCase();
                        switch (n) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return r * p;
                            case "days":
                            case "day":
                            case "d":
                                return r * l;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return r * u;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return r * c;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return r * a;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return r;
                            default:
                                return
                        }
                    }
                }
            }

            function o(e) {
                return e >= l ? Math.round(e / l) + "d" : e >= u ? Math.round(e / u) + "h" : e >= c ? Math.round(e / c) + "m" : e >= a ? Math.round(e / a) + "s" : e + "ms"
            }

            function i(e) {
                return s(e, l, "day") || s(e, u, "hour") || s(e, c, "minute") || s(e, a, "second") || e + " ms"
            }

            function s(e, t, r) {
                if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + r : Math.ceil(e / t) + " " + r + "s"
            }
            var a = 1e3,
                c = 60 * a,
                u = 60 * c,
                l = 24 * u,
                p = 365.25 * l;
            t.exports = function(e, t) {
                t = t || {};
                var r = typeof e;
                if ("string" === r && e.length > 0) return n(e);
                if ("number" === r && isNaN(e) === !1) return t["long"] ? i(e) : o(e);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
            }
        }, {}],
        10: [function(e, t, r) {
            "use strict";
            var n = Object.prototype.hasOwnProperty,
                o = Object.prototype.toString,
                i = Array.prototype.slice,
                s = e(11),
                a = Object.prototype.propertyIsEnumerable,
                c = !a.call({
                    toString: null
                }, "toString"),
                u = a.call(function() {}, "prototype"),
                l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                p = function(e) {
                    var t = e.constructor;
                    return t && t.prototype === e
                },
                d = {
                    $console: !0,
                    $external: !0,
                    $frame: !0,
                    $frameElement: !0,
                    $frames: !0,
                    $innerHeight: !0,
                    $innerWidth: !0,
                    $outerHeight: !0,
                    $outerWidth: !0,
                    $pageXOffset: !0,
                    $pageYOffset: !0,
                    $parent: !0,
                    $scrollLeft: !0,
                    $scrollTop: !0,
                    $scrollX: !0,
                    $scrollY: !0,
                    $self: !0,
                    $webkitIndexedDB: !0,
                    $webkitStorageInfo: !0,
                    $window: !0
                },
                h = function() {
                    if ("undefined" == typeof window) return !1;
                    for (var e in window) try {
                        if (!d["$" + e] && n.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                            p(window[e])
                        } catch (t) {
                            return !0
                        }
                    } catch (t) {
                        return !0
                    }
                    return !1
                }(),
                f = function(e) {
                    if ("undefined" == typeof window || !h) return p(e);
                    try {
                        return p(e)
                    } catch (t) {
                        return !1
                    }
                },
                y = function(e) {
                    var t = null !== e && "object" == typeof e,
                        r = "[object Function]" === o.call(e),
                        i = s(e),
                        a = t && "[object String]" === o.call(e),
                        p = [];
                    if (!t && !r && !i) throw new TypeError("Object.keys called on a non-object");
                    var d = u && r;
                    if (a && e.length > 0 && !n.call(e, 0))
                        for (var h = 0; h < e.length; ++h) p.push(String(h));
                    if (i && e.length > 0)
                        for (var y = 0; y < e.length; ++y) p.push(String(y));
                    else
                        for (var m in e) d && "prototype" === m || !n.call(e, m) || p.push(String(m));
                    if (c)
                        for (var v = f(e), g = 0; g < l.length; ++g) v && "constructor" === l[g] || !n.call(e, l[g]) || p.push(l[g]);
                    return p
                };
            y.shim = function() {
                if (Object.keys) {
                    var e = function() {
                        return 2 === (Object.keys(arguments) || "").length
                    }(1, 2);
                    if (!e) {
                        var t = Object.keys;
                        Object.keys = function(e) {
                            return t(s(e) ? i.call(e) : e)
                        }
                    }
                } else Object.keys = y;
                return Object.keys || y
            }, t.exports = y
        }, {
            11: 11
        }],
        11: [function(e, t, r) {
            "use strict";
            var n = Object.prototype.toString;
            t.exports = function(e) {
                var t = n.call(e),
                    r = "[object Arguments]" === t;
                return r || (r = "[object Array]" !== t && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === n.call(e.callee)), r
            }
        }, {}],
        12: [function(e, t, r) {
            function n() {
                throw new Error("setTimeout has not been defined")
            }

            function o() {
                throw new Error("clearTimeout has not been defined")
            }

            function i(e) {
                if (p === setTimeout) return setTimeout(e, 0);
                if ((p === n || !p) && setTimeout) return p = setTimeout, setTimeout(e, 0);
                try {
                    return p(e, 0)
                } catch (t) {
                    try {
                        return p.call(null, e, 0)
                    } catch (t) {
                        return p.call(this, e, 0)
                    }
                }
            }

            function s(e) {
                if (d === clearTimeout) return clearTimeout(e);
                if ((d === o || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
                try {
                    return d(e)
                } catch (t) {
                    try {
                        return d.call(null, e)
                    } catch (t) {
                        return d.call(this, e)
                    }
                }
            }

            function a() {
                m && f && (m = !1, f.length ? y = f.concat(y) : v = -1, y.length && c())
            }

            function c() {
                if (!m) {
                    var e = i(a);
                    m = !0;
                    for (var t = y.length; t;) {
                        for (f = y, y = []; ++v < t;) f && f[v].run();
                        v = -1, t = y.length
                    }
                    f = null, m = !1, s(e)
                }
            }

            function u(e, t) {
                this.fun = e, this.array = t
            }

            function l() {}
            var p, d, h = t.exports = {};
            ! function() {
                try {
                    p = "function" == typeof setTimeout ? setTimeout : n
                } catch (e) {
                    p = n
                }
                try {
                    d = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (e) {
                    d = o
                }
            }();
            var f, y = [],
                m = !1,
                v = -1;
            h.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                y.push(new u(e, t)), 1 !== y.length || m || i(c)
            }, u.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = l, h.addListener = l, h.once = l, h.off = l, h.removeListener = l, h.removeAllListeners = l, h.emit = l, h.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, h.cwd = function() {
                return "/"
            }, h.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, h.umask = function() {
                return 0
            }
        }, {}],
        13: [function(e, t, r) {
            "use strict";

            function n(e, t) {
                if (e.map) return e.map(t);
                for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
                return r
            }
            var o = function(e) {
                switch (typeof e) {
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                        return isFinite(e) ? e : "";
                    default:
                        return ""
                }
            };
            t.exports = function(e, t, r, a) {
                return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? n(s(e), function(s) {
                    var a = encodeURIComponent(o(s)) + r;
                    return i(e[s]) ? n(e[s], function(e) {
                        return a + encodeURIComponent(o(e))
                    }).join(t) : a + encodeURIComponent(o(e[s]))
                }).join(t) : a ? encodeURIComponent(o(a)) + r + encodeURIComponent(o(e)) : ""
            };
            var i = Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                s = Object.keys || function(e) {
                    var t = [];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                    return t
                }
        }, {}],
        14: [function(e, t, r) {
            function n() {
                c.apply(this, arguments)
            }

            function o() {
                var e = "Not implemented in this environment.\nIf you feel this is a mistake, write to support@algolia.com";
                throw new l.AlgoliaSearchError(e)
            }
            t.exports = n;
            var i = e(16),
                s = e(25),
                a = e(26),
                c = e(15),
                u = e(7),
                l = e(27);
            u(n, c), n.prototype.deleteIndex = function(e, t) {
                return this._jsonRequest({
                    method: "DELETE",
                    url: "/1/indexes/" + encodeURIComponent(e),
                    hostType: "write",
                    callback: t
                })
            }, n.prototype.moveIndex = function(e, t, r) {
                var n = {
                    operation: "move",
                    destination: t
                };
                return this._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(e) + "/operation",
                    body: n,
                    hostType: "write",
                    callback: r
                })
            }, n.prototype.copyIndex = function(e, t, r, n) {
                var o = {
                        operation: "copy",
                        destination: t
                    },
                    i = n;
                if ("function" == typeof r) i = r;
                else if (Array.isArray(r) && r.length > 0) o.scope = r;
                else if ("undefined" != typeof r) throw new Error("the scope given to `copyIndex` was not an array with settings, synonyms or rules");
                return this._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(e) + "/operation",
                    body: o,
                    hostType: "write",
                    callback: i
                })
            }, n.prototype.getLogs = function(t, r, n) {
                var o = e(24),
                    i = {};
                return "object" == typeof t ? (i = o(t), n = r) : 0 === arguments.length || "function" == typeof t ? n = t : 1 === arguments.length || "function" == typeof r ? (n = r, i.offset = t) : (i.offset = t, i.length = r), void 0 === i.offset && (i.offset = 0), void 0 === i.length && (i.length = 10), this._jsonRequest({
                    method: "GET",
                    url: "/1/logs?" + this._getSearchParams(i, ""),
                    hostType: "read",
                    callback: n
                })
            }, n.prototype.listIndexes = function(e, t) {
                var r = "";
                return void 0 === e || "function" == typeof e ? t = e : r = "?page=" + e, this._jsonRequest({
                    method: "GET",
                    url: "/1/indexes" + r,
                    hostType: "read",
                    callback: t
                })
            }, n.prototype.initIndex = function(e) {
                return new i(this, e)
            }, n.prototype.listUserKeys = s(function(e) {
                return this.listApiKeys(e)
            }, a("client.listUserKeys()", "client.listApiKeys()")), n.prototype.listApiKeys = function(e) {
                return this._jsonRequest({
                    method: "GET",
                    url: "/1/keys",
                    hostType: "read",
                    callback: e
                })
            }, n.prototype.getUserKeyACL = s(function(e, t) {
                return this.getApiKey(e, t)
            }, a("client.getUserKeyACL()", "client.getApiKey()")), n.prototype.getApiKey = function(e, t) {
                return this._jsonRequest({
                    method: "GET",
                    url: "/1/keys/" + e,
                    hostType: "read",
                    callback: t
                })
            }, n.prototype.deleteUserKey = s(function(e, t) {
                return this.deleteApiKey(e, t)
            }, a("client.deleteUserKey()", "client.deleteApiKey()")), n.prototype.deleteApiKey = function(e, t) {
                return this._jsonRequest({
                    method: "DELETE",
                    url: "/1/keys/" + e,
                    hostType: "write",
                    callback: t
                })
            }, n.prototype.addUserKey = s(function(e, t, r) {
                return this.addApiKey(e, t, r)
            }, a("client.addUserKey()", "client.addApiKey()")), n.prototype.addApiKey = function(t, r, n) {
                var o = e(8),
                    i = "Usage: client.addApiKey(arrayOfAcls[, params, callback])";
                if (!o(t)) throw new Error(i);
                1 !== arguments.length && "function" != typeof r || (n = r, r = null);
                var s = {
                    acl: t
                };
                return r && (s.validity = r.validity, s.maxQueriesPerIPPerHour = r.maxQueriesPerIPPerHour, s.maxHitsPerQuery = r.maxHitsPerQuery, s.indexes = r.indexes, s.description = r.description, r.queryParameters && (s.queryParameters = this._getSearchParams(r.queryParameters, "")), s.referers = r.referers), this._jsonRequest({
                    method: "POST",
                    url: "/1/keys",
                    body: s,
                    hostType: "write",
                    callback: n
                })
            }, n.prototype.addUserKeyWithValidity = s(function(e, t, r) {
                return this.addApiKey(e, t, r)
            }, a("client.addUserKeyWithValidity()", "client.addApiKey()")), n.prototype.updateUserKey = s(function(e, t, r, n) {
                return this.updateApiKey(e, t, r, n)
            }, a("client.updateUserKey()", "client.updateApiKey()")), n.prototype.updateApiKey = function(t, r, n, o) {
                var i = e(8),
                    s = "Usage: client.updateApiKey(key, arrayOfAcls[, params, callback])";
                if (!i(r)) throw new Error(s);
                2 !== arguments.length && "function" != typeof n || (o = n, n = null);
                var a = {
                    acl: r
                };
                return n && (a.validity = n.validity, a.maxQueriesPerIPPerHour = n.maxQueriesPerIPPerHour, a.maxHitsPerQuery = n.maxHitsPerQuery, a.indexes = n.indexes, a.description = n.description, n.queryParameters && (a.queryParameters = this._getSearchParams(n.queryParameters, "")), a.referers = n.referers), this._jsonRequest({
                    method: "PUT",
                    url: "/1/keys/" + t,
                    body: a,
                    hostType: "write",
                    callback: o
                })
            }, n.prototype.startQueriesBatch = s(function() {
                this._batch = []
            }, a("client.startQueriesBatch()", "client.search()")), n.prototype.addQueryInBatch = s(function(e, t, r) {
                this._batch.push({
                    indexName: e,
                    query: t,
                    params: r
                })
            }, a("client.addQueryInBatch()", "client.search()")), n.prototype.sendQueriesBatch = s(function(e) {
                return this.search(this._batch, e)
            }, a("client.sendQueriesBatch()", "client.search()")), n.prototype.batch = function(t, r) {
                var n = e(8),
                    o = "Usage: client.batch(operations[, callback])";
                if (!n(t)) throw new Error(o);
                return this._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/*/batch",
                    body: {
                        requests: t
                    },
                    hostType: "write",
                    callback: r
                })
            }, n.prototype.assignUserID = function(e, t) {
                if (!e.userID || !e.cluster) throw new l.AlgoliaSearchError("You have to provide both a userID and cluster", e);
                return this._jsonRequest({
                    method: "POST",
                    url: "/1/clusters/mapping",
                    hostType: "write",
                    body: {
                        cluster: e.cluster
                    },
                    callback: t,
                    headers: {
                        "X-Algolia-User-ID": e.userID
                    }
                })
            }, n.prototype.getTopUserID = function(e) {
                return this._jsonRequest({
                    method: "GET",
                    url: "/1/clusters/mapping/top",
                    hostType: "read",
                    callback: e
                })
            }, n.prototype.getUserID = function(e, t) {
                if (!e.userID) throw new l.AlgoliaSearchError("You have to provide a userID", {
                    debugData: e
                });
                return this._jsonRequest({
                    method: "GET",
                    url: "/1/clusters/mapping/" + e.userID,
                    hostType: "read",
                    callback: t
                })
            }, n.prototype.listClusters = function(e) {
                return this._jsonRequest({
                    method: "GET",
                    url: "/1/clusters",
                    hostType: "read",
                    callback: e
                })
            }, n.prototype.listUserIDs = function(e, t) {
                return this._jsonRequest({
                    method: "GET",
                    url: "/1/clusters/mapping",
                    body: e,
                    hostType: "read",
                    callback: t
                })
            }, n.prototype.removeUserID = function(e, t) {
                if (!e.userID) throw new l.AlgoliaSearchError("You have to provide a userID", {
                    debugData: e
                });
                return this._jsonRequest({
                    method: "DELETE",
                    url: "/1/clusters/mapping",
                    hostType: "write",
                    callback: t,
                    headers: {
                        "X-Algolia-User-ID": e.userID
                    }
                })
            }, n.prototype.searchUserIDs = function(e, t) {
                return this._jsonRequest({
                    method: "POST",
                    url: "/1/clusters/mapping/search",
                    body: e,
                    hostType: "read",
                    callback: t
                })
            }, n.prototype.destroy = o, n.prototype.enableRateLimitForward = o, n.prototype.disableRateLimitForward = o, n.prototype.useSecuredAPIKey = o, n.prototype.disableSecuredAPIKey = o, n.prototype.generateSecuredApiKey = o
        }, {
            15: 15,
            16: 16,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            7: 7,
            8: 8
        }],
        15: [function(e, t, r) {
            (function(r) {
                function n(t, r, n) {
                    var i = e(1)("algoliasearch"),
                        s = e(24),
                        a = e(8),
                        u = e(29),
                        l = "Usage: algoliasearch(applicationID, apiKey, opts)";
                    if (n._allowEmptyCredentials !== !0 && !t) throw new c.AlgoliaSearchError("Please provide an application ID. " + l);
                    if (n._allowEmptyCredentials !== !0 && !r) throw new c.AlgoliaSearchError("Please provide an API key. " + l);
                    this.applicationID = t, this.apiKey = r, this.hosts = {
                        read: [],
                        write: []
                    }, n = n || {}, this._timeouts = n.timeouts || {
                        connect: 1e3,
                        read: 2e3,
                        write: 3e4
                    }, n.timeout && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = n.timeout);
                    var p = n.protocol || "https:";
                    if (/:$/.test(p) || (p += ":"), "http:" !== p && "https:" !== p) throw new c.AlgoliaSearchError("protocol must be `http:` or `https:` (was `" + n.protocol + "`)");
                    if (this._checkAppIdData(), n.hosts) a(n.hosts) ? (this.hosts.read = s(n.hosts), this.hosts.write = s(n.hosts)) : (this.hosts.read = s(n.hosts.read), this.hosts.write = s(n.hosts.write));
                    else {
                        var d = u(this._shuffleResult, function(e) {
                                return t + "-" + e + ".algolianet.com"
                            }),
                            h = (n.dsn === !1 ? "" : "-dsn") + ".algolia.net";
                        this.hosts.read = [this.applicationID + h].concat(d), this.hosts.write = [this.applicationID + ".algolia.net"].concat(d)
                    }
                    this.hosts.read = u(this.hosts.read, o(p)), this.hosts.write = u(this.hosts.write, o(p)), this.extraHeaders = {}, this.cache = n._cache || {}, this._ua = n._ua, this._useCache = !(void 0 !== n._useCache && !n._cache) || n._useCache, this._useFallback = void 0 === n.useFallback || n.useFallback, this._setTimeout = n._setTimeout, i("init done, %j", this)
                }

                function o(e) {
                    return function(t) {
                        return e + "//" + t.toLowerCase()
                    }
                }

                function i(e) {
                    if (void 0 === Array.prototype.toJSON) return JSON.stringify(e);
                    var t = Array.prototype.toJSON;
                    delete Array.prototype.toJSON;
                    var r = JSON.stringify(e);
                    return Array.prototype.toJSON = t, r
                }

                function s(e) {
                    for (var t, r, n = e.length; 0 !== n;) r = Math.floor(Math.random() * n), n -= 1, t = e[n], e[n] = e[r], e[r] = t;
                    return e
                }

                function a(e) {
                    var t = {};
                    for (var r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r)) {
                            var n;
                            n = "x-algolia-api-key" === r || "x-algolia-application-id" === r ? "**hidden for security purposes**" : e[r], t[r] = n
                        }
                    return t
                }
                t.exports = n;
                var c = e(27),
                    u = e(28),
                    l = e(18),
                    p = e(33),
                    d = 500,
                    h = r.env.RESET_APP_DATA_TIMER && parseInt(r.env.RESET_APP_DATA_TIMER, 10) || 12e4;
                n.prototype.initIndex = function(e) {
                    return new l(this, e)
                }, n.prototype.setExtraHeader = function(e, t) {
                    this.extraHeaders[e.toLowerCase()] = t
                }, n.prototype.getExtraHeader = function(e) {
                    return this.extraHeaders[e.toLowerCase()]
                }, n.prototype.unsetExtraHeader = function(e) {
                    delete this.extraHeaders[e.toLowerCase()]
                }, n.prototype.addAlgoliaAgent = function(e) {
                    this._ua.indexOf(";" + e) === -1 && (this._ua += ";" + e)
                }, n.prototype._jsonRequest = function(t) {
                    function r(e, u) {
                        function d(e) {
                            var t = e && e.body && e.body.message && e.body.status || e.statusCode || e && e.body && 200;
                            s("received response: statusCode: %s, computed statusCode: %d, headers: %j", e.statusCode, t, e.headers);
                            var r = 2 === Math.floor(t / 100),
                                i = new Date;
                            if (v.push({
                                    currentHost: T,
                                    headers: a(o),
                                    content: n || null,
                                    contentLength: void 0 !== n ? n.length : null,
                                    method: u.method,
                                    timeouts: u.timeouts,
                                    url: u.url,
                                    startTime: x,
                                    endTime: i,
                                    duration: i - x,
                                    statusCode: t
                                }), r) return h._useCache && p && (p[_] = e.responseText), e.body;
                            var l = 4 !== Math.floor(t / 100);
                            if (l) return f += 1, b();
                            s("unrecoverable error");
                            var d = new c.AlgoliaSearchError(e.body && e.body.message, {
                                debugData: v,
                                statusCode: t
                            });
                            return h._promise.reject(d)
                        }

                        function g(e) {
                            s("error: %s, stack: %s", e.message, e.stack);
                            var r = new Date;
                            return v.push({
                                currentHost: T,
                                headers: a(o),
                                content: n || null,
                                contentLength: void 0 !== n ? n.length : null,
                                method: u.method,
                                timeouts: u.timeouts,
                                url: u.url,
                                startTime: x,
                                endTime: r,
                                duration: r - x
                            }), e instanceof c.AlgoliaSearchError || (e = new c.Unknown(e && e.message, e)), f += 1, e instanceof c.Unknown || e instanceof c.UnparsableJSON || f >= h.hosts[t.hostType].length && (y || !m) ? (e.debugData = v, h._promise.reject(e)) : e instanceof c.RequestTimeout ? w() : b()
                        }

                        function b() {
                            return s("retrying request"), h._incrementHostIndex(t.hostType), r(e, u)
                        }

                        function w() {
                            return s("retrying request with higher timeout"), h._incrementHostIndex(t.hostType), h._incrementTimeoutMultipler(), u.timeouts = h._getTimeoutsForRequest(t.hostType), r(e, u)
                        }
                        h._checkAppIdData();
                        var _, x = new Date;
                        if (h._useCache && (_ = t.url), h._useCache && n && (_ += "_body_" + u.body), h._useCache && p && void 0 !== p[_]) return s("serving response from cache"), h._promise.resolve(JSON.parse(p[_]));
                        if (f >= h.hosts[t.hostType].length) return !m || y ? (s("could not get any response"), h._promise.reject(new c.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: " + h.applicationID, {
                            debugData: v
                        }))) : (s("switching to fallback"), f = 0, u.method = t.fallback.method, u.url = t.fallback.url, u.jsonBody = t.fallback.body, u.jsonBody && (u.body = i(u.jsonBody)), o = h._computeRequestHeaders({
                            additionalUA: l,
                            headers: t.headers
                        }), u.timeouts = h._getTimeoutsForRequest(t.hostType), h._setHostIndexByType(0, t.hostType), y = !0, r(h._request.fallback, u));
                        var T = h._getHostByType(t.hostType),
                            A = T + u.url,
                            R = {
                                body: u.body,
                                jsonBody: u.jsonBody,
                                method: u.method,
                                headers: o,
                                timeouts: u.timeouts,
                                debug: s
                            };
                        return s("method: %s, url: %s, headers: %j, timeouts: %d", R.method, A, R.headers, R.timeouts), e === h._request.fallback && s("using fallback"), e.call(h, A, R).then(d, g)
                    }
                    this._checkAppIdData();
                    var n, o, s = e(1)("algoliasearch:" + t.url),
                        l = t.additionalUA || "",
                        p = t.cache,
                        h = this,
                        f = 0,
                        y = !1,
                        m = h._useFallback && h._request.fallback && t.fallback;
                    this.apiKey.length > d && void 0 !== t.body && (void 0 !== t.body.params || void 0 !== t.body.requests) ? (t.body.apiKey = this.apiKey, o = this._computeRequestHeaders({
                        additionalUA: l,
                        withApiKey: !1,
                        headers: t.headers
                    })) : o = this._computeRequestHeaders({
                        additionalUA: l,
                        headers: t.headers
                    }), void 0 !== t.body && (n = i(t.body)), s("request start");
                    var v = [],
                        g = r(h._request, {
                            url: t.url,
                            method: t.method,
                            body: n,
                            jsonBody: t.body,
                            timeouts: h._getTimeoutsForRequest(t.hostType)
                        });
                    return "function" != typeof t.callback ? g : void g.then(function(e) {
                        u(function() {
                            t.callback(null, e)
                        }, h._setTimeout || setTimeout)
                    }, function(e) {
                        u(function() {
                            t.callback(e)
                        }, h._setTimeout || setTimeout)
                    })
                }, n.prototype._getSearchParams = function(e, t) {
                    if (void 0 === e || null === e) return t;
                    for (var r in e) null !== r && void 0 !== e[r] && e.hasOwnProperty(r) && (t += "" === t ? "" : "&", t += r + "=" + encodeURIComponent("[object Array]" === Object.prototype.toString.call(e[r]) ? i(e[r]) : e[r]));
                    return t
                }, n.prototype._computeRequestHeaders = function(t) {
                    var r = e(5),
                        n = t.additionalUA ? this._ua + ";" + t.additionalUA : this._ua,
                        o = {
                            "x-algolia-agent": n,
                            "x-algolia-application-id": this.applicationID
                        };
                    return t.withApiKey !== !1 && (o["x-algolia-api-key"] = this.apiKey), this.userToken && (o["x-algolia-usertoken"] = this.userToken), this.securityTags && (o["x-algolia-tagfilters"] = this.securityTags), r(this.extraHeaders, function(e, t) {
                        o[t] = e
                    }), t.headers && r(t.headers, function(e, t) {
                        o[t] = e
                    }), o
                }, n.prototype.search = function(t, r, n) {
                    var o = e(8),
                        i = e(29),
                        s = "Usage: client.search(arrayOfQueries[, callback])";
                    if (!o(t)) throw new Error(s);
                    "function" == typeof r ? (n = r, r = {}) : void 0 === r && (r = {});
                    var a = this,
                        c = {
                            requests: i(t, function(e) {
                                var t = "";
                                return void 0 !== e.query && (t += "query=" + encodeURIComponent(e.query)), {
                                    indexName: e.indexName,
                                    params: a._getSearchParams(e.params, t)
                                }
                            })
                        },
                        u = i(c.requests, function(e, t) {
                            return t + "=" + encodeURIComponent("/1/indexes/" + encodeURIComponent(e.indexName) + "?" + e.params)
                        }).join("&"),
                        l = "/1/indexes/*/queries";
                    return void 0 !== r.strategy && (l += "?strategy=" + r.strategy), this._jsonRequest({
                        cache: this.cache,
                        method: "POST",
                        url: l,
                        body: c,
                        hostType: "read",
                        fallback: {
                            method: "GET",
                            url: "/1/indexes/*",
                            body: {
                                params: u
                            }
                        },
                        callback: n
                    })
                }, n.prototype.searchForFacetValues = function(t) {
                    var r = e(8),
                        n = e(29),
                        o = "Usage: client.searchForFacetValues([{indexName, params: {facetName, facetQuery, ...params}}, ...queries])";
                    if (!r(t)) throw new Error(o);
                    var i = this;
                    return i._promise.all(n(t, function(t) {
                        if (!t || void 0 === t.indexName || void 0 === t.params.facetName || void 0 === t.params.facetQuery) throw new Error(o);
                        var r = e(24),
                            n = e(31),
                            s = t.indexName,
                            a = t.params,
                            c = a.facetName,
                            u = n(r(a), function(e) {
                                return "facetName" === e
                            }),
                            l = i._getSearchParams(u, "");
                        return i._jsonRequest({
                            cache: i.cache,
                            method: "POST",
                            url: "/1/indexes/" + encodeURIComponent(s) + "/facets/" + encodeURIComponent(c) + "/query",
                            hostType: "read",
                            body: {
                                params: l
                            }
                        })
                    }))
                }, n.prototype.setSecurityTags = function(e) {
                    if ("[object Array]" === Object.prototype.toString.call(e)) {
                        for (var t = [], r = 0; r < e.length; ++r)
                            if ("[object Array]" === Object.prototype.toString.call(e[r])) {
                                for (var n = [], o = 0; o < e[r].length; ++o) n.push(e[r][o]);
                                t.push("(" + n.join(",") + ")")
                            } else t.push(e[r]);
                        e = t.join(",")
                    }
                    this.securityTags = e
                }, n.prototype.setUserToken = function(e) {
                    this.userToken = e
                }, n.prototype.clearCache = function() {
                    this.cache = {}
                }, n.prototype.setRequestTimeout = function(e) {
                    e && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = e)
                }, n.prototype.setTimeouts = function(e) {
                    this._timeouts = e
                }, n.prototype.getTimeouts = function() {
                    return this._timeouts
                }, n.prototype._getAppIdData = function() {
                    var e = p.get(this.applicationID);
                    return null !== e && this._cacheAppIdData(e), e
                }, n.prototype._setAppIdData = function(e) {
                    return e.lastChange = (new Date).getTime(), this._cacheAppIdData(e), p.set(this.applicationID, e)
                }, n.prototype._checkAppIdData = function() {
                    var e = this._getAppIdData(),
                        t = (new Date).getTime();
                    return null === e || t - e.lastChange > h ? this._resetInitialAppIdData(e) : e
                }, n.prototype._resetInitialAppIdData = function(e) {
                    var t = e || {};
                    return t.hostIndexes = {
                        read: 0,
                        write: 0
                    }, t.timeoutMultiplier = 1, t.shuffleResult = t.shuffleResult || s([1, 2, 3]), this._setAppIdData(t)
                }, n.prototype._cacheAppIdData = function(e) {
                    this._hostIndexes = e.hostIndexes, this._timeoutMultiplier = e.timeoutMultiplier, this._shuffleResult = e.shuffleResult
                }, n.prototype._partialAppIdDataUpdate = function(t) {
                    var r = e(5),
                        n = this._getAppIdData();
                    return r(t, function(e, t) {
                        n[t] = e
                    }), this._setAppIdData(n)
                }, n.prototype._getHostByType = function(e) {
                    return this.hosts[e][this._getHostIndexByType(e)]
                }, n.prototype._getTimeoutMultiplier = function() {
                    return this._timeoutMultiplier
                }, n.prototype._getHostIndexByType = function(e) {
                    return this._hostIndexes[e]
                }, n.prototype._setHostIndexByType = function(t, r) {
                    var n = e(24),
                        o = n(this._hostIndexes);
                    return o[r] = t, this._partialAppIdDataUpdate({
                        hostIndexes: o
                    }), t
                }, n.prototype._incrementHostIndex = function(e) {
                    return this._setHostIndexByType((this._getHostIndexByType(e) + 1) % this.hosts[e].length, e)
                }, n.prototype._incrementTimeoutMultipler = function() {
                    var e = Math.max(this._timeoutMultiplier + 1, 4);
                    return this._partialAppIdDataUpdate({
                        timeoutMultiplier: e
                    })
                }, n.prototype._getTimeoutsForRequest = function(e) {
                    return {
                        connect: this._timeouts.connect * this._timeoutMultiplier,
                        complete: this._timeouts[e] * this._timeoutMultiplier
                    }
                }
            }).call(this, e(12))
        }, {
            1: 1,
            12: 12,
            18: 18,
            24: 24,
            27: 27,
            28: 28,
            29: 29,
            31: 31,
            33: 33,
            5: 5,
            8: 8
        }],
        16: [function(e, t, r) {
            function n() {
                s.apply(this, arguments)
            }

            function o(e, t, r) {
                function n(r, o) {
                    var i = {
                            page: r || 0,
                            hitsPerPage: t || 100
                        },
                        s = o || [];
                    return e(i).then(function(e) {
                        var t = e.hits,
                            r = e.nbHits,
                            o = t.map(function(e) {
                                return delete e._highlightResult, e
                            }),
                            a = s.concat(o);
                        return a.length < r ? n(i.page + 1, a) : a
                    })
                }
                return n().then(function(e) {
                    return "function" == typeof r ? void r(e) : e
                })
            }
            var i = e(7),
                s = e(18),
                a = e(25),
                c = e(26),
                u = e(28),
                l = e(27),
                p = a(function() {}, c("forwardToSlaves", "forwardToReplicas"));
            t.exports = n, i(n, s), n.prototype.addObject = function(e, t, r) {
                var n = this;
                return 1 !== arguments.length && "function" != typeof t || (r = t, t = void 0), this.as._jsonRequest({
                    method: void 0 !== t ? "PUT" : "POST",
                    url: "/1/indexes/" + encodeURIComponent(n.indexName) + (void 0 !== t ? "/" + encodeURIComponent(t) : ""),
                    body: e,
                    hostType: "write",
                    callback: r
                })
            }, n.prototype.addObjects = function(t, r) {
                var n = e(8),
                    o = "Usage: index.addObjects(arrayOfObjects[, callback])";
                if (!n(t)) throw new Error(o);
                for (var i = this, s = {
                        requests: []
                    }, a = 0; a < t.length; ++a) {
                    var c = {
                        action: "addObject",
                        body: t[a]
                    };
                    s.requests.push(c)
                }
                return this.as._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(i.indexName) + "/batch",
                    body: s,
                    hostType: "write",
                    callback: r
                })
            }, n.prototype.partialUpdateObject = function(e, t, r) {
                1 !== arguments.length && "function" != typeof t || (r = t, t = void 0);
                var n = this,
                    o = "/1/indexes/" + encodeURIComponent(n.indexName) + "/" + encodeURIComponent(e.objectID) + "/partial";
                return t === !1 && (o += "?createIfNotExists=false"), this.as._jsonRequest({
                    method: "POST",
                    url: o,
                    body: e,
                    hostType: "write",
                    callback: r
                })
            }, n.prototype.partialUpdateObjects = function(t, r, n) {
                1 !== arguments.length && "function" != typeof r || (n = r, r = !0);
                var o = e(8),
                    i = "Usage: index.partialUpdateObjects(arrayOfObjects[, callback])";
                if (!o(t)) throw new Error(i);
                for (var s = this, a = {
                        requests: []
                    }, c = 0; c < t.length; ++c) {
                    var u = {
                        action: r === !0 ? "partialUpdateObject" : "partialUpdateObjectNoCreate",
                        objectID: t[c].objectID,
                        body: t[c]
                    };
                    a.requests.push(u)
                }
                return this.as._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(s.indexName) + "/batch",
                    body: a,
                    hostType: "write",
                    callback: n
                })
            }, n.prototype.saveObject = function(e, t) {
                var r = this;
                return this.as._jsonRequest({
                    method: "PUT",
                    url: "/1/indexes/" + encodeURIComponent(r.indexName) + "/" + encodeURIComponent(e.objectID),
                    body: e,
                    hostType: "write",
                    callback: t
                })
            }, n.prototype.saveObjects = function(t, r) {
                var n = e(8),
                    o = "Usage: index.saveObjects(arrayOfObjects[, callback])";
                if (!n(t)) throw new Error(o);
                for (var i = this, s = {
                        requests: []
                    }, a = 0; a < t.length; ++a) {
                    var c = {
                        action: "updateObject",
                        objectID: t[a].objectID,
                        body: t[a]
                    };
                    s.requests.push(c)
                }
                return this.as._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(i.indexName) + "/batch",
                    body: s,
                    hostType: "write",
                    callback: r
                })
            }, n.prototype.deleteObject = function(e, t) {
                if ("function" == typeof e || "string" != typeof e && "number" != typeof e) {
                    var r = new l.AlgoliaSearchError("Cannot delete an object without an objectID");
                    return t = e, "function" == typeof t ? t(r) : this.as._promise.reject(r)
                }
                var n = this;
                return this.as._jsonRequest({
                    method: "DELETE",
                    url: "/1/indexes/" + encodeURIComponent(n.indexName) + "/" + encodeURIComponent(e),
                    hostType: "write",
                    callback: t
                })
            }, n.prototype.deleteObjects = function(t, r) {
                var n = e(8),
                    o = e(29),
                    i = "Usage: index.deleteObjects(arrayOfObjectIDs[, callback])";
                if (!n(t)) throw new Error(i);
                var s = this,
                    a = {
                        requests: o(t, function(e) {
                            return {
                                action: "deleteObject",
                                objectID: e,
                                body: {
                                    objectID: e
                                }
                            }
                        })
                    };
                return this.as._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(s.indexName) + "/batch",
                    body: a,
                    hostType: "write",
                    callback: r
                })
            }, n.prototype.deleteByQuery = a(function(t, r, n) {
                function o(e) {
                    if (0 === e.nbHits) return e;
                    var t = p(e.hits, function(e) {
                        return e.objectID
                    });
                    return d.deleteObjects(t).then(i).then(s)
                }

                function i(e) {
                    return d.waitTask(e.taskID)
                }

                function s() {
                    return d.deleteByQuery(t, r)
                }

                function a() {
                    u(function() {
                        n(null)
                    }, h._setTimeout || setTimeout)
                }

                function c(e) {
                    u(function() {
                        n(e)
                    }, h._setTimeout || setTimeout)
                }
                var l = e(24),
                    p = e(29),
                    d = this,
                    h = d.as;
                1 === arguments.length || "function" == typeof r ? (n = r, r = {}) : r = l(r), r.attributesToRetrieve = "objectID", r.hitsPerPage = 1e3, r.distinct = !1, this.clearCache();
                var f = this.search(t, r).then(o);
                return n ? void f.then(a, c) : f
            }, c("index.deleteByQuery()", "index.deleteBy()")), n.prototype.deleteBy = function(e, t) {
                var r = this;
                return this.as._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(r.indexName) + "/deleteByQuery",
                    body: {
                        params: r.as._getSearchParams(e, "")
                    },
                    hostType: "write",
                    callback: t
                })
            }, n.prototype.browseAll = function(t, r) {
                function n(e) {
                    if (!a._stopped) {
                        var t;
                        t = void 0 !== e ? {
                            cursor: e
                        } : {
                            params: l
                        }, c._jsonRequest({
                            method: "POST",
                            url: "/1/indexes/" + encodeURIComponent(u.indexName) + "/browse",
                            hostType: "read",
                            body: t,
                            callback: o
                        })
                    }
                }

                function o(e, t) {
                    if (!a._stopped) return e ? void a._error(e) : (a._result(t), void 0 === t.cursor ? void a._end() : void n(t.cursor))
                }
                "object" == typeof t && (r = t, t = void 0);
                var i = e(30),
                    s = e(17),
                    a = new s,
                    c = this.as,
                    u = this,
                    l = c._getSearchParams(i({}, r || {}, {
                        query: t
                    }), "");
                return n(), a
            }, n.prototype.ttAdapter = a(function(e) {
                var t = this;
                return function(r, n, o) {
                    var i;
                    i = "function" == typeof o ? o : n, t.search(r, e, function(e, t) {
                        return e ? void i(e) : void i(t.hits)
                    })
                }
            }, "ttAdapter is not necessary anymore and will be removed in the next version,\nhave a look at autocomplete.js (https://github.com/algolia/autocomplete.js)"), n.prototype.waitTask = function(e, t) {
                function r() {
                    return l._jsonRequest({
                        method: "GET",
                        hostType: "read",
                        url: "/1/indexes/" + encodeURIComponent(c.indexName) + "/task/" + e
                    }).then(function(e) {
                        a++;
                        var t = i * a * a;
                        return t > s && (t = s), "published" !== e.status ? l._promise.delay(t).then(r) : e
                    })
                }

                function n(e) {
                    u(function() {
                        t(null, e)
                    }, l._setTimeout || setTimeout)
                }

                function o(e) {
                    u(function() {
                        t(e)
                    }, l._setTimeout || setTimeout)
                }
                var i = 100,
                    s = 5e3,
                    a = 0,
                    c = this,
                    l = c.as,
                    p = r();
                return t ? void p.then(n, o) : p
            }, n.prototype.clearIndex = function(e) {
                var t = this;
                return this.as._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(t.indexName) + "/clear",
                    hostType: "write",
                    callback: e
                })
            }, n.prototype.getSettings = function(e, t) {
                1 === arguments.length && "function" == typeof e && (t = e, e = {}), e = e || {};
                var r = encodeURIComponent(this.indexName);
                return this.as._jsonRequest({
                    method: "GET",
                    url: "/1/indexes/" + r + "/settings?getVersion=2" + (e.advanced ? "&advanced=" + e.advanced : ""),
                    hostType: "read",
                    callback: t
                })
            }, n.prototype.searchSynonyms = function(e, t) {
                return "function" == typeof e ? (t = e, e = {}) : void 0 === e && (e = {}), this.as._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/search",
                    body: e,
                    hostType: "read",
                    callback: t
                })
            }, n.prototype.exportSynonyms = function(e, t) {
                return o(this.searchSynonyms.bind(this), e, t)
            }, n.prototype.saveSynonym = function(e, t, r) {
                "function" == typeof t ? (r = t, t = {}) : void 0 === t && (t = {}), void 0 !== t.forwardToSlaves && p();
                var n = t.forwardToSlaves || t.forwardToReplicas ? "true" : "false";
                return this.as._jsonRequest({
                    method: "PUT",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(e.objectID) + "?forwardToReplicas=" + n,
                    body: e,
                    hostType: "write",
                    callback: r
                })
            }, n.prototype.getSynonym = function(e, t) {
                return this.as._jsonRequest({
                    method: "GET",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(e),
                    hostType: "read",
                    callback: t
                })
            }, n.prototype.deleteSynonym = function(e, t, r) {
                "function" == typeof t ? (r = t, t = {}) : void 0 === t && (t = {}), void 0 !== t.forwardToSlaves && p();
                var n = t.forwardToSlaves || t.forwardToReplicas ? "true" : "false";
                return this.as._jsonRequest({
                    method: "DELETE",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(e) + "?forwardToReplicas=" + n,
                    hostType: "write",
                    callback: r
                })
            }, n.prototype.clearSynonyms = function(e, t) {
                "function" == typeof e ? (t = e, e = {}) : void 0 === e && (e = {}), void 0 !== e.forwardToSlaves && p();
                var r = e.forwardToSlaves || e.forwardToReplicas ? "true" : "false";
                return this.as._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/clear?forwardToReplicas=" + r,
                    hostType: "write",
                    callback: t
                })
            }, n.prototype.batchSynonyms = function(e, t, r) {
                "function" == typeof t ? (r = t, t = {}) : void 0 === t && (t = {}), void 0 !== t.forwardToSlaves && p();
                var n = t.forwardToSlaves || t.forwardToReplicas ? "true" : "false";
                return this.as._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/batch?forwardToReplicas=" + n + "&replaceExistingSynonyms=" + (t.replaceExistingSynonyms ? "true" : "false"),
                    hostType: "write",
                    body: e,
                    callback: r
                })
            }, n.prototype.searchRules = function(e, t) {
                return "function" == typeof e ? (t = e, e = {}) : void 0 === e && (e = {}), this.as._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/search",
                    body: e,
                    hostType: "read",
                    callback: t
                })
            }, n.prototype.exportRules = function(e, t) {
                return o(this.searchRules.bind(this), e, t)
            }, n.prototype.saveRule = function(e, t, r) {
                if ("function" == typeof t ? (r = t, t = {}) : void 0 === t && (t = {}), !e.objectID) throw new l.AlgoliaSearchError("Missing or empty objectID field for rule");
                var n = t.forwardToReplicas === !0 ? "true" : "false";
                return this.as._jsonRequest({
                    method: "PUT",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/" + encodeURIComponent(e.objectID) + "?forwardToReplicas=" + n,
                    body: e,
                    hostType: "write",
                    callback: r
                })
            }, n.prototype.getRule = function(e, t) {
                return this.as._jsonRequest({
                    method: "GET",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/" + encodeURIComponent(e),
                    hostType: "read",
                    callback: t
                })
            }, n.prototype.deleteRule = function(e, t, r) {
                "function" == typeof t ? (r = t, t = {}) : void 0 === t && (t = {});
                var n = t.forwardToReplicas === !0 ? "true" : "false";
                return this.as._jsonRequest({
                    method: "DELETE",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/" + encodeURIComponent(e) + "?forwardToReplicas=" + n,
                    hostType: "write",
                    callback: r
                })
            }, n.prototype.clearRules = function(e, t) {
                "function" == typeof e ? (t = e, e = {}) : void 0 === e && (e = {});
                var r = e.forwardToReplicas === !0 ? "true" : "false";
                return this.as._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/clear?forwardToReplicas=" + r,
                    hostType: "write",
                    callback: t
                })
            }, n.prototype.batchRules = function(e, t, r) {
                "function" == typeof t ? (r = t, t = {}) : void 0 === t && (t = {});
                var n = t.forwardToReplicas === !0 ? "true" : "false";
                return this.as._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/batch?forwardToReplicas=" + n + "&clearExistingRules=" + (t.clearExistingRules === !0 ? "true" : "false"),
                    hostType: "write",
                    body: e,
                    callback: r
                })
            }, n.prototype.setSettings = function(e, t, r) {
                1 !== arguments.length && "function" != typeof t || (r = t, t = {}), void 0 !== t.forwardToSlaves && p();
                var n = t.forwardToSlaves || t.forwardToReplicas ? "true" : "false",
                    o = this;
                return this.as._jsonRequest({
                    method: "PUT",
                    url: "/1/indexes/" + encodeURIComponent(o.indexName) + "/settings?forwardToReplicas=" + n,
                    hostType: "write",
                    body: e,
                    callback: r
                })
            }, n.prototype.listUserKeys = a(function(e) {
                return this.listApiKeys(e)
            }, c("index.listUserKeys()", "client.listApiKeys()")), n.prototype.listApiKeys = a(function(e) {
                var t = this;
                return this.as._jsonRequest({
                    method: "GET",
                    url: "/1/indexes/" + encodeURIComponent(t.indexName) + "/keys",
                    hostType: "read",
                    callback: e
                })
            }, c("index.listApiKeys()", "client.listApiKeys()")), n.prototype.getUserKeyACL = a(function(e, t) {
                return this.getApiKey(e, t)
            }, c("index.getUserKeyACL()", "client.getApiKey()")), n.prototype.getApiKey = a(function(e, t) {
                var r = this;
                return this.as._jsonRequest({
                    method: "GET",
                    url: "/1/indexes/" + encodeURIComponent(r.indexName) + "/keys/" + e,
                    hostType: "read",
                    callback: t
                })
            }, c("index.getApiKey()", "client.getApiKey()")), n.prototype.deleteUserKey = a(function(e, t) {
                return this.deleteApiKey(e, t)
            }, c("index.deleteUserKey()", "client.deleteApiKey()")), n.prototype.deleteApiKey = a(function(e, t) {
                var r = this;
                return this.as._jsonRequest({
                    method: "DELETE",
                    url: "/1/indexes/" + encodeURIComponent(r.indexName) + "/keys/" + e,
                    hostType: "write",
                    callback: t
                })
            }, c("index.deleteApiKey()", "client.deleteApiKey()")), n.prototype.addUserKey = a(function(e, t, r) {
                return this.addApiKey(e, t, r)
            }, c("index.addUserKey()", "client.addApiKey()")), n.prototype.addApiKey = a(function(t, r, n) {
                var o = e(8),
                    i = "Usage: index.addApiKey(arrayOfAcls[, params, callback])";
                if (!o(t)) throw new Error(i);
                1 !== arguments.length && "function" != typeof r || (n = r, r = null);
                var s = {
                    acl: t
                };
                return r && (s.validity = r.validity, s.maxQueriesPerIPPerHour = r.maxQueriesPerIPPerHour, s.maxHitsPerQuery = r.maxHitsPerQuery, s.description = r.description, r.queryParameters && (s.queryParameters = this.as._getSearchParams(r.queryParameters, "")), s.referers = r.referers), this.as._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys",
                    body: s,
                    hostType: "write",
                    callback: n
                })
            }, c("index.addApiKey()", "client.addApiKey()")), n.prototype.addUserKeyWithValidity = a(function(e, t, r) {
                return this.addApiKey(e, t, r)
            }, c("index.addUserKeyWithValidity()", "client.addApiKey()")), n.prototype.updateUserKey = a(function(e, t, r, n) {
                return this.updateApiKey(e, t, r, n)
            }, c("index.updateUserKey()", "client.updateApiKey()")), n.prototype.updateApiKey = a(function(t, r, n, o) {
                var i = e(8),
                    s = "Usage: index.updateApiKey(key, arrayOfAcls[, params, callback])";
                if (!i(r)) throw new Error(s);
                2 !== arguments.length && "function" != typeof n || (o = n, n = null);
                var a = {
                    acl: r
                };
                return n && (a.validity = n.validity, a.maxQueriesPerIPPerHour = n.maxQueriesPerIPPerHour, a.maxHitsPerQuery = n.maxHitsPerQuery, a.description = n.description, n.queryParameters && (a.queryParameters = this.as._getSearchParams(n.queryParameters, "")), a.referers = n.referers), this.as._jsonRequest({
                    method: "PUT",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys/" + t,
                    body: a,
                    hostType: "write",
                    callback: o
                })
            }, c("index.updateApiKey()", "client.updateApiKey()"))
        }, {
            17: 17,
            18: 18,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            7: 7,
            8: 8
        }],
        17: [function(e, t, r) {
            "use strict";

            function n() {}
            t.exports = n;
            var o = e(7),
                i = e(4).EventEmitter;
            o(n, i), n.prototype.stop = function() {
                this._stopped = !0, this._clean()
            }, n.prototype._end = function() {
                this.emit("end"), this._clean()
            }, n.prototype._error = function(e) {
                this.emit("error", e), this._clean()
            }, n.prototype._result = function(e) {
                this.emit("result", e)
            }, n.prototype._clean = function() {
                this.removeAllListeners("stop"), this.removeAllListeners("end"), this.removeAllListeners("error"), this.removeAllListeners("result")
            }
        }, {
            4: 4,
            7: 7
        }],
        18: [function(e, t, r) {
            function n(e, t) {
                this.indexName = t, this.as = e, this.typeAheadArgs = null, this.typeAheadValueOption = null, this.cache = {}
            }
            var o = e(23),
                i = e(25),
                s = e(26);
            t.exports = n, n.prototype.clearCache = function() {
                this.cache = {}
            }, n.prototype.search = o("query"), n.prototype.similarSearch = o("similarQuery"), n.prototype.browse = function(t, r, n) {
                var o, i, s = e(30),
                    a = this;
                0 === arguments.length || 1 === arguments.length && "function" == typeof arguments[0] ? (o = 0, n = arguments[0], t = void 0) : "number" == typeof arguments[0] ? (o = arguments[0], "number" == typeof arguments[1] ? i = arguments[1] : "function" == typeof arguments[1] && (n = arguments[1], i = void 0), t = void 0, r = void 0) : "object" == typeof arguments[0] ? ("function" == typeof arguments[1] && (n = arguments[1]), r = arguments[0], t = void 0) : "string" == typeof arguments[0] && "function" == typeof arguments[1] && (n = arguments[1], r = void 0), r = s({}, r || {}, {
                    page: o,
                    hitsPerPage: i,
                    query: t
                });
                var c = this.as._getSearchParams(r, "");
                return this.as._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(a.indexName) + "/browse",
                    body: {
                        params: c
                    },
                    hostType: "read",
                    callback: n
                })
            }, n.prototype.browseFrom = function(e, t) {
                return this.as._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse",
                    body: {
                        cursor: e
                    },
                    hostType: "read",
                    callback: t
                })
            }, n.prototype.searchForFacetValues = function(t, r) {
                var n = e(24),
                    o = e(31),
                    i = "Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])";
                if (void 0 === t.facetName || void 0 === t.facetQuery) throw new Error(i);
                var s = t.facetName,
                    a = o(n(t), function(e) {
                        return "facetName" === e
                    }),
                    c = this.as._getSearchParams(a, "");
                return this.as._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/facets/" + encodeURIComponent(s) + "/query",
                    hostType: "read",
                    body: {
                        params: c
                    },
                    callback: r
                })
            }, n.prototype.searchFacet = i(function(e, t) {
                return this.searchForFacetValues(e, t)
            }, s("index.searchFacet(params[, callback])", "index.searchForFacetValues(params[, callback])")), n.prototype._search = function(e, t, r, n) {
                return this.as._jsonRequest({
                    cache: this.cache,
                    method: "POST",
                    url: t || "/1/indexes/" + encodeURIComponent(this.indexName) + "/query",
                    body: {
                        params: e
                    },
                    hostType: "read",
                    fallback: {
                        method: "GET",
                        url: "/1/indexes/" + encodeURIComponent(this.indexName),
                        body: {
                            params: e
                        }
                    },
                    callback: r,
                    additionalUA: n
                })
            }, n.prototype.getObject = function(e, t, r) {
                var n = this;
                1 !== arguments.length && "function" != typeof t || (r = t, t = void 0);
                var o = "";
                if (void 0 !== t) {
                    o = "?attributes=";
                    for (var i = 0; i < t.length; ++i) 0 !== i && (o += ","), o += t[i]
                }
                return this.as._jsonRequest({
                    method: "GET",
                    url: "/1/indexes/" + encodeURIComponent(n.indexName) + "/" + encodeURIComponent(e) + o,
                    hostType: "read",
                    callback: r
                })
            }, n.prototype.getObjects = function(t, r, n) {
                var o = e(8),
                    i = e(29),
                    s = "Usage: index.getObjects(arrayOfObjectIDs[, callback])";
                if (!o(t)) throw new Error(s);
                var a = this;
                1 !== arguments.length && "function" != typeof r || (n = r, r = void 0);
                var c = {
                    requests: i(t, function(e) {
                        var t = {
                            indexName: a.indexName,
                            objectID: e
                        };
                        return r && (t.attributesToRetrieve = r.join(",")), t
                    })
                };
                return this.as._jsonRequest({
                    method: "POST",
                    url: "/1/indexes/*/objects",
                    hostType: "read",
                    body: c,
                    callback: n
                })
            }, n.prototype.as = null, n.prototype.indexName = null, n.prototype.typeAheadArgs = null, n.prototype.typeAheadValueOption = null
        }, {
            23: 23,
            24: 24,
            25: 25,
            26: 26,
            29: 29,
            30: 30,
            31: 31,
            8: 8
        }],
        19: [function(e, t, r) {
            "use strict";
            var n = e(14),
                o = e(20);
            t.exports = o(n)
        }, {
            14: 14,
            20: 20
        }],
        20: [function(e, t, r) {
            (function(r) {
                "use strict";
                var n = e(6),
                    o = n.Promise || e(3).Promise;
                t.exports = function(t, i) {
                    function s(t, r, n) {
                        var o = e(24);
                        return n = o(n || {}), n._ua = n._ua || s.ua, new a(t, r, n)
                    }

                    function a() {
                        t.apply(this, arguments)
                    }
                    var c = e(7),
                        u = e(27),
                        l = e(21),
                        p = e(22),
                        d = e(32);
                    i = i || "", "debug" === r.env.NODE_ENV && e(1).enable("algoliasearch*"), s.version = e(34), s.ua = "Algolia for vanilla JavaScript " + i + s.version, s.initPlaces = d(s), n.__algolia = {
                        debug: e(1),
                        algoliasearch: s
                    };
                    var h = {
                        hasXMLHttpRequest: "XMLHttpRequest" in n,
                        hasXDomainRequest: "XDomainRequest" in n
                    };
                    return h.hasXMLHttpRequest && (h.cors = "withCredentials" in new XMLHttpRequest), c(a, t), a.prototype._request = function(e, t) {
                        return new o(function(r, n) {
                            function o() {
                                if (!f) {
                                    clearTimeout(d);
                                    var e;
                                    try {
                                        e = {
                                            body: JSON.parse(m.responseText),
                                            responseText: m.responseText,
                                            statusCode: m.status,
                                            headers: m.getAllResponseHeaders && m.getAllResponseHeaders() || {}
                                        }
                                    } catch (t) {
                                        e = new u.UnparsableJSON({
                                            more: m.responseText
                                        })
                                    }
                                    e instanceof u.UnparsableJSON ? n(e) : r(e)
                                }
                            }

                            function i(e) {
                                f || (clearTimeout(d), n(new u.Network({
                                    more: e
                                })))
                            }

                            function s() {
                                f = !0, m.abort(), n(new u.RequestTimeout)
                            }

                            function a() {
                                v = !0, clearTimeout(d), d = setTimeout(s, t.timeouts.complete)
                            }

                            function c() {
                                v || a()
                            }

                            function p() {
                                !v && m.readyState > 1 && a()
                            }
                            if (!h.cors && !h.hasXDomainRequest) return void n(new u.Network("CORS not supported"));
                            e = l(e, t.headers);
                            var d, f, y = t.body,
                                m = h.cors ? new XMLHttpRequest : new XDomainRequest,
                                v = !1;
                            d = setTimeout(s, t.timeouts.connect), m.onprogress = c, "onreadystatechange" in m && (m.onreadystatechange = p), m.onload = o, m.onerror = i, m instanceof XMLHttpRequest ? m.open(t.method, e, !0) : m.open(t.method, e), h.cors && (y && ("POST" === t.method ? m.setRequestHeader("content-type", "application/x-www-form-urlencoded") : m.setRequestHeader("content-type", "application/json")), m.setRequestHeader("accept", "application/json")), m.send(y)
                        })
                    }, a.prototype._request.fallback = function(e, t) {
                        return e = l(e, t.headers), new o(function(r, n) {
                            p(e, t, function(e, t) {
                                return e ? void n(e) : void r(t)
                            })
                        })
                    }, a.prototype._promise = {
                        reject: function(e) {
                            return o.reject(e)
                        },
                        resolve: function(e) {
                            return o.resolve(e)
                        },
                        delay: function(e) {
                            return new o(function(t) {
                                setTimeout(t, e)
                            })
                        },
                        all: function(e) {
                            return o.all(e)
                        }
                    }, s
                }
            }).call(this, e(12))
        }, {
            1: 1,
            12: 12,
            21: 21,
            22: 22,
            24: 24,
            27: 27,
            3: 3,
            32: 32,
            34: 34,
            6: 6,
            7: 7
        }],
        21: [function(e, t, r) {
            "use strict";

            function n(e, t) {
                return e += /\?/.test(e) ? "&" : "?", e + o(t)
            }
            t.exports = n;
            var o = e(13)
        }, {
            13: 13
        }],
        22: [function(e, t, r) {
            "use strict";

            function n(e, t, r) {
                function n() {
                    t.debug("JSONP: success"), m || d || (m = !0, p || (t.debug("JSONP: Fail. Script loaded but did not call the callback"), a(), r(new o.JSONPScriptFail)))
                }

                function s() {
                    "loaded" !== this.readyState && "complete" !== this.readyState || n()
                }

                function a() {
                    clearTimeout(v), f.onload = null, f.onreadystatechange = null, f.onerror = null, h.removeChild(f)
                }

                function c() {
                    try {
                        delete window[y], delete window[y + "_loaded"]
                    } catch (e) {
                        window[y] = window[y + "_loaded"] = void 0
                    }
                }

                function u() {
                    t.debug("JSONP: Script timeout"), d = !0, a(), r(new o.RequestTimeout)
                }

                function l() {
                    t.debug("JSONP: Script error"), m || d || (a(), r(new o.JSONPScriptError))
                }
                if ("GET" !== t.method) return void r(new Error("Method " + t.method + " " + e + " is not supported by JSONP."));
                t.debug("JSONP: start");
                var p = !1,
                    d = !1;
                i += 1;
                var h = document.getElementsByTagName("head")[0],
                    f = document.createElement("script"),
                    y = "algoliaJSONP_" + i,
                    m = !1;
                window[y] = function(e) {
                    return c(), d ? void t.debug("JSONP: Late answer, ignoring") : (p = !0, a(), void r(null, {
                        body: e
                    }))
                }, e += "&callback=" + y, t.jsonBody && t.jsonBody.params && (e += "&" + t.jsonBody.params);
                var v = setTimeout(u, t.timeouts.complete);
                f.onreadystatechange = s, f.onload = n, f.onerror = l, f.async = !0, f.defer = !0, f.src = e, h.appendChild(f)
            }
            t.exports = n;
            var o = e(27),
                i = 0
        }, {
            27: 27
        }],
        23: [function(e, t, r) {
            function n(e, t) {
                return function(r, n, i) {
                    if ("function" == typeof r && "object" == typeof n || "object" == typeof i) throw new o.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");
                    0 === arguments.length || "function" == typeof r ? (i = r, r = "") : 1 !== arguments.length && "function" != typeof n || (i = n, n = void 0), "object" == typeof r && null !== r ? (n = r, r = void 0) : void 0 !== r && null !== r || (r = "");
                    var s = "";
                    void 0 !== r && (s += e + "=" + encodeURIComponent(r));
                    var a;
                    return void 0 !== n && (n.additionalUA && (a = n.additionalUA, delete n.additionalUA), s = this.as._getSearchParams(n, s)), this._search(s, t, i, a)
                }
            }
            t.exports = n;
            var o = e(27)
        }, {
            27: 27
        }],
        24: [function(e, t, r) {
            t.exports = function(e) {
                return JSON.parse(JSON.stringify(e))
            }
        }, {}],
        25: [function(e, t, r) {
            t.exports = function(e, t) {
                function r() {
                    return n || (console.warn(t), n = !0), e.apply(this, arguments)
                }
                var n = !1;
                return r
            }
        }, {}],
        26: [function(e, t, r) {
            t.exports = function(e, t) {
                var r = e.toLowerCase().replace(/[\.\(\)]/g, "");
                return "algoliasearch: `" + e + "` was replaced by `" + t + "`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#" + r
            }
        }, {}],
        27: [function(e, t, r) {
            "use strict";

            function n(t, r) {
                var n = e(5),
                    o = this;
                "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : o.stack = (new Error).stack || "Cannot get a stacktrace, browser is too old", this.name = "AlgoliaSearchError", this.message = t || "Unknown error", r && n(r, function(e, t) {
                    o[t] = e
                })
            }

            function o(e, t) {
                function r() {
                    var r = Array.prototype.slice.call(arguments, 0);
                    "string" != typeof r[0] && r.unshift(t), n.apply(this, r), this.name = "AlgoliaSearch" + e + "Error"
                }
                return i(r, n), r
            }
            var i = e(7);
            i(n, Error), t.exports = {
                AlgoliaSearchError: n,
                UnparsableJSON: o("UnparsableJSON", "Could not parse the incoming response as JSON, see err.more for details"),
                RequestTimeout: o("RequestTimeout", "Request timedout before getting a response"),
                Network: o("Network", "Network issue, see err.more for details"),
                JSONPScriptFail: o("JSONPScriptFail", "<script> was loaded but did not call our provided callback"),
                JSONPScriptError: o("JSONPScriptError", "<script> unable to load due to an `error` event on it"),
                Unknown: o("Unknown", "Unknown error occured")
            }
        }, {
            5: 5,
            7: 7
        }],
        28: [function(e, t, r) {
            t.exports = function(e, t) {
                t(e, 0)
            }
        }, {}],
        29: [function(e, t, r) {
            var n = e(5);
            t.exports = function(e, t) {
                var r = [];
                return n(e, function(n, o) {
                    r.push(t(n, o, e))
                }), r
            }
        }, {
            5: 5
        }],
        30: [function(e, t, r) {
            var n = e(5);
            t.exports = function o(e) {
                var t = Array.prototype.slice.call(arguments);
                return n(t, function(t) {
                    for (var r in t) t.hasOwnProperty(r) && ("object" == typeof e[r] && "object" == typeof t[r] ? e[r] = o({}, e[r], t[r]) : void 0 !== t[r] && (e[r] = t[r]));
                }), e
            }
        }, {
            5: 5
        }],
        31: [function(e, t, r) {
            t.exports = function(t, r) {
                var n = e(10),
                    o = e(5),
                    i = {};
                return o(n(t), function(e) {
                    r(e) !== !0 && (i[e] = t[e])
                }), i
            }
        }, {
            10: 10,
            5: 5
        }],
        32: [function(e, t, r) {
            function n(t) {
                return function(r, n, i) {
                    var s = e(24);
                    i = i && s(i) || {}, i.hosts = i.hosts || ["places-dsn.algolia.net", "places-1.algolianet.com", "places-2.algolianet.com", "places-3.algolianet.com"], 0 !== arguments.length && "object" != typeof r && void 0 !== r || (r = "", n = "", i._allowEmptyCredentials = !0);
                    var a = t(r, n, i),
                        c = a.initIndex("places");
                    return c.search = o("query", "/1/places/query"), c.getObject = function(e, t) {
                        return this.as._jsonRequest({
                            method: "GET",
                            url: "/1/places/" + encodeURIComponent(e),
                            hostType: "read",
                            callback: t
                        })
                    }, c
                }
            }
            t.exports = n;
            var o = e(23)
        }, {
            23: 23,
            24: 24
        }],
        33: [function(e, t, r) {
            (function(r) {
                function n(e, t) {
                    return c("localStorage failed with", t), s(), a = l, a.get(e)
                }

                function o(e, t) {
                    return 1 === arguments.length ? a.get(e) : a.set(e, t)
                }

                function i() {
                    try {
                        return "localStorage" in r && null !== r.localStorage && (r.localStorage[u] || r.localStorage.setItem(u, JSON.stringify({})), !0)
                    } catch (e) {
                        return !1
                    }
                }

                function s() {
                    try {
                        r.localStorage.removeItem(u)
                    } catch (e) {}
                }
                var a, c = e(1)("algoliasearch:src/hostIndexState.js"),
                    u = "algoliasearch-client-js",
                    l = {
                        state: {},
                        set: function(e, t) {
                            return this.state[e] = t, this.state[e]
                        },
                        get: function(e) {
                            return this.state[e] || null
                        }
                    },
                    p = {
                        set: function(e, t) {
                            l.set(e, t);
                            try {
                                var o = JSON.parse(r.localStorage[u]);
                                return o[e] = t, r.localStorage[u] = JSON.stringify(o), o[e]
                            } catch (i) {
                                return n(e, i)
                            }
                        },
                        get: function(e) {
                            try {
                                return JSON.parse(r.localStorage[u])[e] || null
                            } catch (t) {
                                return n(e, t)
                            }
                        }
                    };
                a = i() ? p : l, t.exports = {
                    get: o,
                    set: o,
                    supportsLocalStorage: i
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            1: 1
        }],
        34: [function(e, t, r) {
            "use strict";
            t.exports = "3.27.1"
        }, {}]
    }, {}, [19])(19)
});;
(function($, Drupal, drupalSettings) {
    var client = algoliasearch(drupalSettings.cappexSearchCollegesBlock.algoliaApplicationID, drupalSettings.cappexSearchCollegesBlock.algoliaAPIKey);
    var index = client.initIndex(drupalSettings.cappexSearchCollegesBlock.collegeIndex);
    Drupal.behaviors.cappexSearchBlock = {
        attach: function(context, settings) {
            if (context = document) {
                let autoselectOnBlurBlock
                if ($(window).width() < 1040) {
                    autoselectOnBlurBlock = true;
                } else {
                    autoselectOnBlurBlock = false;
                }
                $('.cappex-block-search-input').autocomplete({
                    hint: false,
                    autoselectOnBlur: autoselectOnBlurBlock,
                }, [{
                    source: $.fn.autocomplete.sources.hits(index, {
                        hitsPerPage: 10
                    }),
                    displayKey: 'name',
                    templates: {
                        suggestion: function(suggestion) {
                            return suggestion._highlightResult.name.value;
                        }
                    }
                }]).on('autocomplete:selected', function(event, suggestion, dataset) {
                    window.location.href = "/college/" + suggestion.objectID;
                });
            }
        }
    }
})(jQuery, Drupal, drupalSettings);;