(function () {
    function l(a, b, c) {
        return Function.prototype.call.apply(Array.prototype.slice, arguments)
    }

    function m(a, b, c) {
        var e = l(arguments, 2);
        return function () {
            return b.apply(a, e)
        }
    }

    function n(a, b) {
        var c = new p(b);
        for (c.h = [a]; c.h.length;) {
            var e = c, d = c.h.shift();
            e.i(d);
            for (d = d.firstChild; d; d = d.nextSibling) 1 == d.nodeType && e.h.push(d)
        }
    }

    function p(a) {
        this.i = a
    }

    function q(a) {
        a.style.display = ""
    }

    function r(a) {
        a.style.display = "none"
    };var t = /\s*;\s*/;

    function u(a, b) {
        this.l.apply(this, arguments)
    }

    u.prototype.l = function (a, b) {
        this.a || (this.a = {});
        if (b) {
            var c = this.a, e = b.a;
            for (d in e) c[d] = e[d]
        } else {
            var d = this.a;
            e = v;
            for (c in e) d[c] = e[c]
        }
        this.a.$this = a;
        this.a.$context = this;
        this.f = "undefined" != typeof a && null != a ? a : "";
        b || (this.a.$top = this.f)
    };
    var v = {$default: null}, w = [];

    function x(a) {
        for (var b in a.a) delete a.a[b];
        a.f = null;
        w.push(a)
    }

    function y(a, b, c) {
        try {
            return b.call(c, a.a, a.f)
        } catch (e) {
            return v.$default
        }
    }

    u.prototype.clone = function (a, b, c) {
        if (0 < w.length) {
            var e = w.pop();
            u.call(e, a, this);
            a = e
        } else a = new u(a, this);
        a.a.$index = b;
        a.a.$count = c;
        return a
    };
    var z;
    window.trustedTypes && (z = trustedTypes.createPolicy("jstemplate", {
        createScript: function (a) {
            return a
        }
    }));
    var A = {};

    function B(a) {
        if (!A[a]) try {
            var b = "(function(a_, b_) { with (a_) with (b_) return " + a + " })",
                c = window.trustedTypes ? z.createScript(b) : b;
            A[a] = window.eval(c)
        } catch (e) {
        }
        return A[a]
    }

    function E(a) {
        var b = [];
        a = a.split(t);
        for (var c = 0, e = a.length; c < e; ++c) {
            var d = a[c].indexOf(":");
            if (!(0 > d)) {
                var g = a[c].substr(0, d).replace(/^\s+/, "").replace(/\s+$/, "");
                d = B(a[c].substr(d + 1));
                b.push(g, d)
            }
        }
        return b
    };

    function F() {
    }

    var G = 0, H = {0: {}}, I = {}, J = {}, K = [];

    function L(a) {
        a.__jstcache || n(a, function (b) {
            M(b)
        })
    }

    var N = [["jsselect", B], ["jsdisplay", B], ["jsvalues", E], ["jsvars", E], ["jseval", function (a) {
        var b = [];
        a = a.split(t);
        for (var c = 0, e = a.length; c < e; ++c) if (a[c]) {
            var d = B(a[c]);
            b.push(d)
        }
        return b
    }], ["transclude", function (a) {
        return a
    }], ["jscontent", B], ["jsskip", B]];

    function M(a) {
        if (a.__jstcache) return a.__jstcache;
        var b = a.getAttribute("jstcache");
        if (null != b) return a.__jstcache = H[b];
        b = K.length = 0;
        for (var c = N.length; b < c; ++b) {
            var e = N[b][0], d = a.getAttribute(e);
            J[e] = d;
            null != d && K.push(e + "=" + d)
        }
        if (0 == K.length) return a.setAttribute("jstcache", "0"), a.__jstcache = H[0];
        var g = K.join("&");
        if (b = I[g]) return a.setAttribute("jstcache", b), a.__jstcache = H[b];
        var h = {};
        b = 0;
        for (c = N.length; b < c; ++b) {
            d = N[b];
            e = d[0];
            var f = d[1];
            d = J[e];
            null != d && (h[e] = f(d))
        }
        b = "" + ++G;
        a.setAttribute("jstcache",
            b);
        H[b] = h;
        I[g] = b;
        return a.__jstcache = h
    }

    function P(a, b) {
        a.j.push(b);
        a.o.push(0)
    }

    function Q(a) {
        return a.c.length ? a.c.pop() : []
    }

    F.prototype.g = function (a, b) {
        var c = R(b), e = c.transclude;
        if (e) (c = S(e)) ? (b.parentNode.replaceChild(c, b), e = Q(this), e.push(this.g, a, c), P(this, e)) : b.parentNode.removeChild(b); else if (c = c.jsselect) {
            c = y(a, c, b);
            var d = b.getAttribute("jsinstance");
            var g = !1;
            d && ("*" == d.charAt(0) ? (d = parseInt(d.substr(1), 10), g = !0) : d = parseInt(d, 10));
            var h = null != c && "object" == typeof c && "number" == typeof c.length;
            e = h ? c.length : 1;
            var f = h && 0 == e;
            if (h) if (f) d ? b.parentNode.removeChild(b) : (b.setAttribute("jsinstance", "*0"), r(b)); else if (q(b),
            null === d || "" === d || g && d < e - 1) {
                g = Q(this);
                d = d || 0;
                for (h = e - 1; d < h; ++d) {
                    var k = b.cloneNode(!0);
                    b.parentNode.insertBefore(k, b);
                    T(k, c, d);
                    f = a.clone(c[d], d, e);
                    g.push(this.b, f, k, x, f, null)
                }
                T(b, c, d);
                f = a.clone(c[d], d, e);
                g.push(this.b, f, b, x, f, null);
                P(this, g)
            } else d < e ? (g = c[d], T(b, c, d), f = a.clone(g, d, e), g = Q(this), g.push(this.b, f, b, x, f, null), P(this, g)) : b.parentNode.removeChild(b); else null == c ? r(b) : (q(b), f = a.clone(c, 0, 1), g = Q(this), g.push(this.b, f, b, x, f, null), P(this, g))
        } else this.b(a, b)
    };
    F.prototype.b = function (a, b) {
        var c = R(b), e = c.jsdisplay;
        if (e) {
            if (!y(a, e, b)) {
                r(b);
                return
            }
            q(b)
        }
        if (e = c.jsvars) for (var d = 0, g = e.length; d < g; d += 2) {
            var h = e[d], f = y(a, e[d + 1], b);
            a.a[h] = f
        }
        if (e = c.jsvalues) for (d = 0, g = e.length; d < g; d += 2) if (f = e[d], h = y(a, e[d + 1], b), "$" == f.charAt(0)) a.a[f] = h; else if ("." == f.charAt(0)) {
            f = f.substr(1).split(".");
            for (var k = b, O = f.length, C = 0, U = O - 1; C < U; ++C) {
                var D = f[C];
                k[D] || (k[D] = {});
                k = k[D]
            }
            k[f[O - 1]] = h
        } else f && ("boolean" == typeof h ? h ? b.setAttribute(f, f) : b.removeAttribute(f) : b.setAttribute(f, "" + h));
        if (e = c.jseval) for (d = 0, g = e.length; d < g; ++d) y(a, e[d], b);
        e = c.jsskip;
        if (!e || !y(a, e, b)) if (c = c.jscontent) {
            if (c = "" + y(a, c, b), b.innerHTML != c) {
                for (; b.firstChild;) e = b.firstChild, e.parentNode.removeChild(e);
                b.appendChild(this.m.createTextNode(c))
            }
        } else {
            c = Q(this);
            for (e = b.firstChild; e; e = e.nextSibling) 1 == e.nodeType && c.push(this.g, a, e);
            c.length && P(this, c)
        }
    };

    function R(a) {
        if (a.__jstcache) return a.__jstcache;
        var b = a.getAttribute("jstcache");
        return b ? a.__jstcache = H[b] : M(a)
    }

    function S(a, b) {
        var c = document;
        if (b) {
            var e = c.getElementById(a);
            if (!e) {
                e = b();
                var d = c.getElementById("jsts");
                d || (d = c.createElement("div"), d.id = "jsts", r(d), d.style.position = "absolute", c.body.appendChild(d));
                var g = c.createElement("div");
                d.appendChild(g);
                g.innerHTML = e;
                e = c.getElementById(a)
            }
            c = e
        } else c = c.getElementById(a);
        return c ? (L(c), c = c.cloneNode(!0), c.removeAttribute("id"), c) : null
    }

    function T(a, b, c) {
        c == b.length - 1 ? a.setAttribute("jsinstance", "*" + c) : a.setAttribute("jsinstance", "" + c)
    };window.jstGetTemplate = S;
    window.JsEvalContext = u;
    window.jstProcess = function (a, b) {
        var c = new F;
        L(b);
        c.m = b ? 9 == b.nodeType ? b : b.ownerDocument || document : document;
        var e = m(c, c.g, a, b), d = c.j = [], g = c.o = [];
        c.c = [];
        e();
        for (var h, f, k; d.length;) h = d[d.length - 1], e = g[g.length - 1], e >= h.length ? (e = c, f = d.pop(), f.length = 0, e.c.push(f), g.pop()) : (f = h[e++], k = h[e++], h = h[e++], g[g.length - 1] = e, f.call(c, k, h))
    };
})()