function URI(t) {
    t || (t = "");
    var e = /^(?:([^:\/?\#]+):)?(?:\/\/([^\/?\#]*))?([^?\#]*)(?:\?([^\#]*))?(?:\#(.*))?/, n = t.match(e);
    this.scheme = n[1] || null, this.authority = n[2] || null, this.path = n[3] || null, this.query = n[4] || null, this.fragment = n[5] || null
}
!function (t) {
    String.prototype.trim === t && (String.prototype.trim = function () {
        return this.replace(/^\s+/, "").replace(/\s+$/, "")
    }), Array.prototype.reduce === t && (Array.prototype.reduce = function (e) {
        if (void 0 === this || null === this)throw new TypeError;
        var n, r = Object(this), o = r.length >>> 0, i = 0;
        if ("function" != typeof e)throw new TypeError;
        if (0 == o && 1 == arguments.length)throw new TypeError;
        if (arguments.length >= 2)n = arguments[1]; else for (; ;) {
            if (i in r) {
                n = r[i++];
                break
            }
            if (++i >= o)throw new TypeError
        }
        for (; o > i;)i in r && (n = e.call(t, n, r[i], i, r)), i++;
        return n
    })
}();
var Zepto = function () {
    function t(t) {
        return"[object Function]" == {}.toString.call(t)
    }

    function e(t) {
        return t instanceof Object
    }

    function n(t) {
        return t instanceof Array
    }

    function r(t) {
        return"number" == typeof t.length
    }

    function o(t) {
        return t.filter(function (t) {
            return t !== b && null !== t
        })
    }

    function i(t) {
        return t.length > 0 ? [].concat.apply([], t) : t
    }

    function s(t) {
        return t.replace(/-+(.)?/g, function (t, e) {
            return e ? e.toUpperCase() : ""
        })
    }

    function a(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function u(t) {
        return t.filter(function (e, n) {
            return t.indexOf(e) == n
        })
    }

    function c(t) {
        return t in z ? z[t] : z[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }

    function p(t, e) {
        return"number" != typeof e || P[a(t)] ? e : e + "px"
    }

    function l(t) {
        var e, n;
        return I[t] || (e = S.createElement(t), S.body.appendChild(e), n = T(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), I[t] = n), I[t]
    }

    function h(t, e) {
        e === b && E.test(t) && RegExp.$1, e in A || (e = "*");
        var n = A[e];
        return n.innerHTML = "" + t, C.call(n.childNodes)
    }

    function d(t, e) {
        return t = t || k, t.__proto__ = d.prototype, t.selector = e || "", t
    }

    function f(e, r) {
        if (!e)return d();
        if (r !== b)return f(r).find(e);
        if (t(e))return f(S).ready(e);
        if (e instanceof d)return e;
        var i;
        return n(e) ? i = o(e) : L.indexOf(e.nodeType) >= 0 || e === window ? (i = [e], e = null) : E.test(e) ? (i = h(e.trim(), RegExp.$1), e = null) : i = e.nodeType && 3 == e.nodeType ? [e] : _(S, e), d(i, e)
    }

    function m(t, e) {
        return e === b ? f(t) : f(t).filter(e)
    }

    function g(e, n, r, o) {
        return t(n) ? n.call(e, r, o) : n
    }

    function y(t, e, n) {
        var r = t % 2 ? e : e.parentNode;
        r && r.insertBefore(n, t ? 1 == t ? r.firstChild : 2 == t ? e : null : e.nextSibling)
    }

    function v(t, e) {
        e(t);
        for (var n in t.childNodes)v(t.childNodes[n], e)
    }

    var b, x, _, w, k = [], C = k.slice, S = window.document, I = {}, z = {}, T = S.defaultView.getComputedStyle, P = {"column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1}, E = /^\s*<(\w+)[^>]*>/, L = [1, 9, 11], N = ["after", "prepend", "before", "append"], M = S.createElement("table"), D = S.createElement("tr"), A = {tr: S.createElement("tbody"), tbody: M, thead: M, tfoot: M, td: D, th: D, "*": S.createElement("div")}, O = /complete|loaded|interactive/, R = /^\.([\w-]+)$/, $ = /^#([\w-]+)$/, j = /^[\w-]+$/;
    return f.extend = function (t) {
        return C.call(arguments, 1).forEach(function (e) {
            for (x in e)t[x] = e[x]
        }), t
    }, f.qsa = _ = function (t, e) {
        var n;
        return t === S && $.test(e) ? (n = t.getElementById(RegExp.$1)) ? [n] : k : C.call(R.test(e) ? t.getElementsByClassName(RegExp.$1) : j.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e))
    }, f.isFunction = t, f.isObject = e, f.isArray = n, f.map = function (t, e) {
        var n, o, s, a = [];
        if (r(t))for (o = 0; o < t.length; o++)n = e(t[o], o), null != n && a.push(n); else for (s in t)n = e(t[s], s), null != n && a.push(n);
        return i(a)
    }, f.each = function (t, e) {
        var n, o;
        if (r(t)) {
            for (n = 0; n < t.length; n++)if (e(n, t[n]) === !1)return t
        } else for (o in t)if (e(o, t[o]) === !1)return t;
        return t
    }, f.fn = {forEach: k.forEach, reduce: k.reduce, push: k.push, indexOf: k.indexOf, concat: k.concat, map: function (t) {
        return f.map(this, function (e, n) {
            return t.call(e, n, e)
        })
    }, slice: function () {
        return f(C.apply(this, arguments))
    }, ready: function (t) {
        return O.test(S.readyState) ? t(f) : S.addEventListener("DOMContentLoaded", function () {
            t(f)
        }, !1), this
    }, get: function (t) {
        return t === b ? this : this[t]
    }, size: function () {
        return this.length
    }, remove: function () {
        return this.each(function () {
            null != this.parentNode && this.parentNode.removeChild(this)
        })
    }, each: function (t) {
        return this.forEach(function (e, n) {
            t.call(e, n, e)
        }), this
    }, filter: function (t) {
        return f([].filter.call(this, function (e) {
            return e.parentNode && _(e.parentNode, t).indexOf(e) >= 0
        }))
    }, end: function () {
        return this.prevObject || f()
    }, andSelf: function () {
        return this.add(this.prevObject || f())
    }, add: function (t, e) {
        return f(u(this.concat(f(t, e))))
    }, is: function (t) {
        return this.length > 0 && f(this[0]).filter(t).length > 0
    }, not: function (e) {
        var n = [];
        if (t(e) && e.call !== b)this.each(function (t) {
            e.call(this, t) || n.push(this)
        }); else {
            var o = "string" == typeof e ? this.filter(e) : r(e) && t(e.item) ? C.call(e) : f(e);
            this.forEach(function (t) {
                o.indexOf(t) < 0 && n.push(t)
            })
        }
        return f(n)
    }, eq: function (t) {
        return-1 === t ? this.slice(t) : this.slice(t, +t + 1)
    }, first: function () {
        var t = this[0];
        return t && !e(t) ? t : f(t)
    }, last: function () {
        var t = this[this.length - 1];
        return t && !e(t) ? t : f(t)
    }, find: function (t) {
        var e;
        return e = 1 == this.length ? _(this[0], t) : this.map(function () {
            return _(this, t)
        }), f(e)
    }, closest: function (t, e) {
        var n = this[0], r = _(e || S, t);
        for (r.length || (n = null); n && r.indexOf(n) < 0;)n = n !== e && n !== S && n.parentNode;
        return f(n)
    }, parents: function (t) {
        for (var e = [], n = this; n.length > 0;)n = f.map(n, function (t) {
            return(t = t.parentNode) && t !== S && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
        });
        return m(e, t)
    }, parent: function (t) {
        return m(u(this.pluck("parentNode")), t)
    }, children: function (t) {
        return m(this.map(function () {
            return C.call(this.children)
        }), t)
    }, siblings: function (t) {
        return m(this.map(function (t, e) {
            return C.call(e.parentNode.children).filter(function (t) {
                return t !== e
            })
        }), t)
    }, empty: function () {
        return this.each(function () {
            this.innerHTML = ""
        })
    }, pluck: function (t) {
        return this.map(function () {
            return this[t]
        })
    }, show: function () {
        return this.each(function () {
            "none" == this.style.display && (this.style.display = null), "none" == T(this, "").getPropertyValue("display") && (this.style.display = l(this.nodeName))
        })
    }, replaceWith: function (t) {
        return this.each(function () {
            f(this).before(t).remove()
        })
    }, wrap: function (t) {
        return this.each(function () {
            f(this).wrapAll(f(t)[0].cloneNode(!1))
        })
    }, wrapAll: function (t) {
        return this[0] && (f(this[0]).before(t = f(t)), t.append(this)), this
    }, unwrap: function () {
        return this.parent().each(function () {
            f(this).replaceWith(f(this).children())
        }), this
    }, hide: function () {
        return this.css("display", "none")
    }, toggle: function (t) {
        return(t === b ? "none" == this.css("display") : t) ? this.show() : this.hide()
    }, prev: function () {
        return f(this.pluck("previousElementSibling"))
    }, next: function () {
        return f(this.pluck("nextElementSibling"))
    }, html: function (t) {
        return t === b ? this.length > 0 ? this[0].innerHTML : null : this.each(function (e) {
            var n = this.innerHTML;
            f(this).empty().append(g(this, t, e, n))
        })
    }, text: function (t) {
        return t === b ? this.length > 0 ? this[0].textContent : null : this.each(function () {
            this.textContent = t
        })
    }, attr: function (t, n) {
        var r;
        return"string" == typeof t && n === b ? 0 == this.length ? b : "value" == t && "INPUT" == this[0].nodeName ? this.val() : !(r = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : r : this.each(function (r) {
            if (e(t))for (x in t)this.setAttribute(x, t[x]); else this.setAttribute(t, g(this, n, r, this.getAttribute(t)))
        })
    }, removeAttr: function (t) {
        return this.each(function () {
            this.removeAttribute(t)
        })
    }, data: function (t, e) {
        return this.attr("data-" + t, e)
    }, val: function (t) {
        return t === b ? this.length > 0 ? this[0].value : null : this.each(function (e) {
            this.value = g(this, t, e, this.value)
        })
    }, offset: function () {
        if (0 == this.length)return null;
        var t = this[0].getBoundingClientRect();
        return{left: t.left + window.pageXOffset, top: t.top + window.pageYOffset, width: t.width, height: t.height}
    }, css: function (t, e) {
        if (e === b && "string" == typeof t)return 0 == this.length ? b : this[0].style[s(t)] || T(this[0], "").getPropertyValue(t);
        var n = "";
        for (x in t)n += a(x) + ":" + p(x, t[x]) + ";";
        return"string" == typeof t && (n = a(t) + ":" + p(t, e)), this.each(function () {
            this.style.cssText += ";" + n
        })
    }, index: function (t) {
        return t ? this.indexOf(f(t)[0]) : this.parent().children().indexOf(this[0])
    }, hasClass: function (t) {
        return this.length < 1 ? !1 : c(t).test(this[0].className)
    }, addClass: function (t) {
        return this.each(function (e) {
            w = [];
            var n = this.className, r = g(this, t, e, n);
            r.split(/\s+/g).forEach(function (t) {
                f(this).hasClass(t) || w.push(t)
            }, this), w.length && (this.className += (n ? " " : "") + w.join(" "))
        })
    }, removeClass: function (t) {
        return this.each(function (e) {
            return t === b ? this.className = "" : (w = this.className, g(this, t, e, w).split(/\s+/g).forEach(function (t) {
                w = w.replace(c(t), " ")
            }), this.className = w.trim(), void 0)
        })
    }, toggleClass: function (t, e) {
        return this.each(function (n) {
            var r = g(this, t, n, this.className);
            (e === b ? !f(this).hasClass(r) : e) ? f(this).addClass(r) : f(this).removeClass(r)
        })
    }}, "filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function (t) {
        var e = f.fn[t];
        f.fn[t] = function () {
            var t = e.apply(this, arguments);
            return t.prevObject = this, t
        }
    }), ["width", "height"].forEach(function (t) {
        f.fn[t] = function (e) {
            var n, r = t.replace(/./, function (t) {
                return t[0].toUpperCase()
            });
            return e === b ? this[0] == window ? window["inner" + r] : this[0] == S ? S.documentElement["offset" + r] : (n = this.offset()) && n[t] : this.each(function (n) {
                var r = f(this);
                r.css(t, g(this, e, n, r[t]()))
            })
        }
    }), N.forEach(function (t, n) {
        f.fn[t] = function (t) {
            var r = e(t) ? t : h(t);
            if ("length"in r && !r.nodeType || (r = [r]), r.length < 1)return this;
            var o = this.length, i = o > 1, s = 2 > n;
            return this.each(function (t, e) {
                for (var a = 0; a < r.length; a++) {
                    var u = r[s ? r.length - a - 1 : a];
                    v(u, function (t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || window.eval.call(window, t.innerHTML)
                    }), i && o - 1 > t && (u = u.cloneNode(!0)), y(n, e, u)
                }
            })
        };
        var r = n % 2 ? t + "To" : "insert" + (n ? "Before" : "After");
        f.fn[r] = function (e) {
            return f(e)[t](this), this
        }
    }), d.prototype = f.fn, f
}();
window.Zepto = Zepto, "$"in window || (window.$ = Zepto), function (t) {
    function e(t) {
        return t._zid || (t._zid = l++)
    }

    function n(t, n, i, s) {
        if (n = r(n), n.ns)var a = o(n.ns);
        return(p[e(t)] || []).filter(function (t) {
            return!(!t || n.e && t.e != n.e || n.ns && !a.test(t.ns) || i && t.fn != i || s && t.sel != s)
        })
    }

    function r(t) {
        var e = ("" + t).split(".");
        return{e: e[0], ns: e.slice(1).sort().join(" ")}
    }

    function o(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }

    function i(e, n, r) {
        t.isObject(e) ? t.each(e, r) : e.split(/\s/).forEach(function (t) {
            r(t, n)
        })
    }

    function s(n, o, s, a, u) {
        var c = e(n), l = p[c] || (p[c] = []);
        i(o, s, function (e, o) {
            var i = u && u(o, e), s = i || o, c = function (t) {
                var e = s.apply(n, [t].concat(t.data));
                return e === !1 && t.preventDefault(), e
            }, p = t.extend(r(e), {fn: o, proxy: c, sel: a, del: i, i: l.length});
            l.push(p), n.addEventListener(p.e, c, !1)
        })
    }

    function a(t, r, o, s) {
        var a = e(t);
        i(r || "", o, function (e, r) {
            n(t, e, r, s).forEach(function (e) {
                delete p[a][e.i], t.removeEventListener(e.e, e.proxy, !1)
            })
        })
    }

    function u(e) {
        var n = t.extend({originalEvent: e}, e);
        return t.each(m, function (t, r) {
            n[t] = function () {
                return this[r] = d, e[t].apply(e, arguments)
            }, n[r] = f
        }), n
    }

    function c(t) {
        if (!("defaultPrevented"in t)) {
            t.defaultPrevented = !1;
            var e = t.preventDefault;
            t.preventDefault = function () {
                this.defaultPrevented = !0, e.call(this)
            }
        }
    }

    var p = (t.qsa, {}), l = 1, h = {};
    h.click = h.mousedown = h.mouseup = h.mousemove = "MouseEvents", t.event = {add: s, remove: a}, t.fn.bind = function (t, e) {
        return this.each(function () {
            s(this, t, e)
        })
    }, t.fn.unbind = function (t, e) {
        return this.each(function () {
            a(this, t, e)
        })
    }, t.fn.one = function (t, e) {
        return this.each(function (n, r) {
            s(this, t, e, null, function (t, e) {
                return function () {
                    var n = t.apply(r, arguments);
                    return a(r, e, t), n
                }
            })
        })
    };
    var d = function () {
        return!0
    }, f = function () {
        return!1
    }, m = {preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped"};
    t.fn.delegate = function (e, n, r) {
        return this.each(function (o, i) {
            s(i, n, r, e, function (n) {
                return function (r) {
                    var o, s = t(r.target).closest(e, i).get(0);
                    return s ? (o = t.extend(u(r), {currentTarget: s, liveFired: i}), n.apply(s, [o].concat([].slice.call(arguments, 1)))) : void 0
                }
            })
        })
    }, t.fn.undelegate = function (t, e, n) {
        return this.each(function () {
            a(this, e, n, t)
        })
    }, t.fn.live = function (e, n) {
        return t(document.body).delegate(this.selector, e, n), this
    }, t.fn.die = function (e, n) {
        return t(document.body).undelegate(this.selector, e, n), this
    }, t.fn.on = function (e, n, r) {
        return void 0 === n || t.isFunction(n) ? this.bind(e, n) : this.delegate(n, e, r)
    }, t.fn.off = function (e, n, r) {
        return void 0 === n || t.isFunction(n) ? this.unbind(e, n) : this.undelegate(n, e, r)
    }, t.fn.trigger = function (e, n) {
        return"string" == typeof e && (e = t.Event(e)), c(e), e.data = n, this.each(function () {
            this.dispatchEvent(e)
        })
    }, t.fn.triggerHandler = function (e, r) {
        var o, i;
        return this.each(function (s, a) {
            o = u("string" == typeof e ? t.Event(e) : e), o.data = r, o.target = a, t.each(n(a, e.type || e), function (t, e) {
                return i = e.proxy(o), o.isImmediatePropagationStopped() ? !1 : void 0
            })
        }), i
    }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function (e) {
        t.fn[e] = function (t) {
            return this.bind(e, t)
        }
    }), ["focus", "blur"].forEach(function (e) {
        t.fn[e] = function (t) {
            if (t)this.bind(e, t); else if (this.length)try {
                this.get(0)[e]()
            } catch (n) {
            }
            return this
        }
    }), t.Event = function (t, e) {
        var n = document.createEvent(h[t] || "Events"), r = !0;
        if (e)for (var o in e)"bubbles" == o ? r = !!e[o] : n[o] = e[o];
        return n.initEvent(t, r, !0, null, null, null, null, null, null, null, null, null, null, null, null), n
    }
}(Zepto), function (t) {
    function e(t) {
        var e = this.os = {}, n = this.browser = {}, r = t.match(/WebKit\/([\d.]+)/), o = t.match(/(Android)\s+([\d.]+)/), i = t.match(/(iPad).*OS\s([\d_]+)/), s = !i && t.match(/(iPhone\sOS)\s([\d_]+)/), a = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/), u = a && t.match(/TouchPad/), c = t.match(/(BlackBerry).*Version\/([\d.]+)/);
        r && (n.version = r[1]), n.webkit = !!r, o && (e.android = !0, e.version = o[2]), s && (e.ios = !0, e.version = s[2].replace(/_/g, "."), e.iphone = !0), i && (e.ios = !0, e.version = i[2].replace(/_/g, "."), e.ipad = !0), a && (e.webos = !0, e.version = a[2]), u && (e.touchpad = !0), c && (e.blackberry = !0, e.version = c[2])
    }

    e.call(t, navigator.userAgent), t.__detect = e
}(Zepto), function (t, e) {
    function n(t) {
        return t.toLowerCase()
    }

    function r(t) {
        return o ? o + t : n(t)
    }

    var o, i = "", s = {Webkit: "webkit", Moz: "", O: "o", ms: "MS"}, a = window.document, u = a.createElement("div"), c = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
    t.each(s, function (t, r) {
        return u.style[t + "TransitionProperty"] !== e ? (i = "-" + n(t) + "-", o = r, !1) : void 0
    }), t.fx = {off: o === e && u.style.transitionProperty === e, cssPrefix: i, transitionEnd: r("TransitionEnd"), animationEnd: r("AnimationEnd")}, t.fn.animate = function (e, n, r, o) {
        return t.isObject(n) && (r = n.easing, o = n.complete, n = n.duration), n && (n /= 1e3), this.anim(e, n, r, o)
    }, t.fn.anim = function (n, r, o, s) {
        var a, u, p, l = {}, h = this, d = t.fx.transitionEnd;
        if (r === e && (r = .4), t.fx.off && (r = 0), "string" == typeof n)l[i + "animation-name"] = n, l[i + "animation-duration"] = r + "s", d = t.fx.animationEnd; else {
            for (u in n)c.test(u) ? (a || (a = []), a.push(u + "(" + n[u] + ")")) : l[u] = n[u];
            a && (l[i + "transform"] = a.join(" ")), t.fx.off || (l[i + "transition"] = "all " + r + "s " + (o || ""))
        }
        return p = function () {
            var e = {};
            e[i + "transition"] = e[i + "animation-name"] = "none", t(this).css(e), s && s.call(this)
        }, r > 0 && this.one(d, p), setTimeout(function () {
            h.css(l), 0 >= r && setTimeout(function () {
                h.each(function () {
                    p.call(this)
                })
            }, 0)
        }, 0), this
    }, u = null
}(Zepto), function (t) {
    function e(e, n, r) {
        var o = t.Event(n);
        return t(e).trigger(o, r), !o.defaultPrevented
    }

    function n(t, n, r, o) {
        return t.global ? e(n || m, r, o) : void 0
    }

    function r(e) {
        e.global && 0 === t.active++ && n(e, null, "ajaxStart")
    }

    function o(e) {
        e.global && !--t.active && n(e, null, "ajaxStop")
    }

    function i(t, e) {
        var r = e.context;
        return e.beforeSend.call(r, t, e) === !1 || n(e, r, "ajaxBeforeSend", [t, e]) === !1 ? !1 : (n(e, r, "ajaxSend", [t, e]), void 0)
    }

    function s(t, e, r) {
        var o = r.context, i = "success";
        r.success.call(o, t, i, e), n(r, o, "ajaxSuccess", [e, r, t]), u(i, e, r)
    }

    function a(t, e, r, o) {
        var i = o.context;
        o.error.call(i, r, e, t), n(o, i, "ajaxError", [r, o, t]), u(e, r, o)
    }

    function u(t, e, r) {
        var i = r.context;
        r.complete.call(i, e, t), n(r, i, "ajaxComplete", [e, r]), o(r)
    }

    function c() {
    }

    function p(e, n, r, o) {
        var i = t.isArray(n);
        t.each(n, function (n, s) {
            o && (n = r ? o : o + "[" + (i ? "" : n) + "]"), !o && i ? e.add(s.name, s.value) : (r ? t.isArray(s) : f(s)) ? p(e, s, r, n) : e.add(n, s)
        })
    }

    var l, h, d = 0, f = t.isObject, m = window.document;
    t.active = 0, t.ajaxJSONP = function (e) {
        var n, r = "jsonp" + ++d, o = m.createElement("script"), i = function () {
            t(o).remove(), r in window && (window[r] = c), u(a, e, "abort")
        }, a = {abort: i};
        return window[r] = function (i) {
            clearTimeout(n), t(o).remove(), delete window[r], s(i, a, e)
        }, o.src = e.url.replace(/=\?/, "=" + r), t("head").append(o), e.timeout > 0 && (n = setTimeout(function () {
            a.abort(), u(a, e, "timeout")
        }, e.timeout)), a
    }, t.ajaxSettings = {type: "GET", beforeSend: c, success: c, error: c, complete: c, context: null, global: !0, xhr: function () {
        return new window.XMLHttpRequest
    }, accepts: {script: "text/javascript, application/javascript", json: "application/json", xml: "application/xml, text/xml", html: "text/html", text: "text/plain"}, crossDomain: !1, timeout: 0}, t.ajax = function (e) {
        var n = t.extend({}, e || {});
        for (l in t.ajaxSettings)void 0 === n[l] && (n[l] = t.ajaxSettings[l]);
        if (r(n), n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host), /=\?/.test(n.url))return t.ajaxJSONP(n);
        if (n.url || (n.url = window.location.toString()), n.data && !n.contentType && (n.contentType = "application/x-www-form-urlencoded"), f(n.data) && (n.data = t.param(n.data)), n.type.match(/get/i) && n.data) {
            var o = n.data;
            n.url.match(/\?.*=/) ? o = "&" + o : "?" != o[0] && (o = "?" + o), n.url += o
        }
        var u, p = n.accepts[n.dataType], d = {}, m = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol, g = t.ajaxSettings.xhr();
        n.crossDomain || (d["X-Requested-With"] = "XMLHttpRequest"), p && (d.Accept = p), n.headers = t.extend(d, n.headers || {}), g.onreadystatechange = function () {
            if (4 == g.readyState) {
                clearTimeout(u);
                var t, e = !1;
                if (g.status >= 200 && g.status < 300 || 0 == g.status && "file:" == m) {
                    if ("application/json" != p || /^\s*$/.test(g.responseText))t = g.responseText; else try {
                        t = JSON.parse(g.responseText)
                    } catch (r) {
                        e = r
                    }
                    e ? a(e, "parsererror", g, n) : s(t, g, n)
                } else a(null, "error", g, n)
            }
        }, g.open(n.type, n.url, !0), n.contentType && (n.headers["Content-Type"] = n.contentType);
        for (h in n.headers)g.setRequestHeader(h, n.headers[h]);
        return i(g, n) === !1 ? (g.abort(), !1) : (n.timeout > 0 && (u = setTimeout(function () {
            g.onreadystatechange = c, g.abort(), a(null, "timeout", g, n)
        }, n.timeout)), g.send(n.data), g)
    }, t.get = function (e, n) {
        return t.ajax({url: e, success: n})
    }, t.post = function (e, n, r, o) {
        return t.isFunction(n) && (o = o || r, r = n, n = null), t.ajax({type: "POST", url: e, data: n, success: r, dataType: o})
    }, t.getJSON = function (e, n) {
        return t.ajax({url: e, success: n, dataType: "json"})
    }, t.fn.load = function (e, n) {
        if (!this.length)return this;
        var r, o = this, i = e.split(/\s/);
        return i.length > 1 && (e = i[0], r = i[1]), t.get(e, function (e) {
            o.html(r ? t(m.createElement("div")).html(e).find(r).html() : e), n && n.call(o)
        }), this
    };
    var g = encodeURIComponent;
    t.param = function (t, e) {
        var n = [];
        return n.add = function (t, e) {
            this.push(g(t) + "=" + g(e))
        }, p(n, t, e), n.join("&").replace("%20", "+")
    }
}(Zepto), function (t) {
    t.fn.serializeArray = function () {
        var e, n = [];
        return t(Array.prototype.slice.call(this.get(0).elements)).each(function () {
            e = t(this);
            var r = e.attr("type");
            !this.disabled && "submit" != r && "reset" != r && "button" != r && ("radio" != r && "checkbox" != r || this.checked) && n.push({name: e.attr("name"), value: e.val()})
        }), n
    }, t.fn.serialize = function () {
        var t = [];
        return this.serializeArray().forEach(function (e) {
            t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
        }), t.join("&")
    }, t.fn.submit = function (e) {
        if (e)this.bind("submit", e); else if (this.length) {
            var n = t.Event("submit");
            this.eq(0).trigger(n), n.defaultPrevented || this.get(0).submit()
        }
        return this
    }
}(Zepto), function (t) {
    function e(t) {
        return"tagName"in t ? t : t.parentNode
    }

    function n(t, e, n, r) {
        var o = Math.abs(t - e), i = Math.abs(n - r);
        return o >= i ? t - e > 0 ? "Left" : "Right" : n - r > 0 ? "Up" : "Down"
    }

    function r() {
        i.last && Date.now() - i.last >= s && (t(i.target).trigger("longTap"), i = {})
    }

    var o, i = {}, s = 750;
    t(document).ready(function () {
        t(document.body).bind("touchstart", function (t) {
            var n = Date.now(), a = n - (i.last || n);
            i.target = e(t.touches[0].target), o && clearTimeout(o), i.x1 = t.touches[0].pageX, i.y1 = t.touches[0].pageY, a > 0 && 250 >= a && (i.isDoubleTap = !0), i.last = n, setTimeout(r, s)
        }).bind("touchmove", function (t) {
            i.x2 = t.touches[0].pageX, i.y2 = t.touches[0].pageY
        }).bind("touchend", function () {
            i.isDoubleTap ? (t(i.target).trigger("doubleTap"), i = {}) : i.x2 > 0 || i.y2 > 0 ? ((Math.abs(i.x1 - i.x2) > 30 || Math.abs(i.y1 - i.y2) > 30) && t(i.target).trigger("swipe") && t(i.target).trigger("swipe" + n(i.x1, i.x2, i.y1, i.y2)), i.x1 = i.x2 = i.y1 = i.y2 = i.last = 0) : "last"in i && (o = setTimeout(function () {
                o = null, t(i.target).trigger("tap"), i = {}
            }, 250))
        }).bind("touchcancel", function () {
            i = {}
        })
    }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "longTap"].forEach(function (e) {
        t.fn[e] = function (t) {
            return this.bind(e, t)
        }
    })
}(Zepto), window.$shutto = Zepto, function () {
    function t(e, n, r) {
        if (e === n)return 0 !== e || 1 / e == 1 / n;
        if (null == e || null == n)return e === n;
        if (e._chain && (e = e._wrapped), n._chain && (n = n._wrapped), e.isEqual && k.isFunction(e.isEqual))return e.isEqual(n);
        if (n.isEqual && k.isFunction(n.isEqual))return n.isEqual(e);
        var o = c.call(e);
        if (o != c.call(n))return!1;
        switch (o) {
            case"[object String]":
                return e == String(n);
            case"[object Number]":
                return e != +e ? n != +n : 0 == e ? 1 / e == 1 / n : e == +n;
            case"[object Date]":
            case"[object Boolean]":
                return+e == +n;
            case"[object RegExp]":
                return e.source == n.source && e.global == n.global && e.multiline == n.multiline && e.ignoreCase == n.ignoreCase
        }
        if ("object" != typeof e || "object" != typeof n)return!1;
        for (var i = r.length; i--;)if (r[i] == e)return!0;
        r.push(e);
        var s = 0, a = !0;
        if ("[object Array]" == o) {
            if (s = e.length, a = s == n.length)for (; s-- && (a = s in e == s in n && t(e[s], n[s], r)););
        } else {
            if ("constructor"in e != "constructor"in n || e.constructor != n.constructor)return!1;
            for (var u in e)if (k.has(e, u) && (s++, !(a = k.has(n, u) && t(e[u], n[u], r))))break;
            if (a) {
                for (u in n)if (k.has(n, u) && !s--)break;
                a = !s
            }
        }
        return r.pop(), a
    }

    var e = this, n = e._, r = {}, o = Array.prototype, i = Object.prototype, s = Function.prototype, a = o.slice, u = o.unshift, c = i.toString, p = i.hasOwnProperty, l = o.forEach, h = o.map, d = o.reduce, f = o.reduceRight, m = o.filter, g = o.every, y = o.some, v = o.indexOf, b = o.lastIndexOf, x = Array.isArray, _ = Object.keys, w = s.bind, k = function (t) {
        return new E(t)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), exports._ = k) : e._ = k, k.VERSION = "1.3.1";
    var C = k.each = k.forEach = function (t, e, n) {
        if (null != t)if (l && t.forEach === l)t.forEach(e, n); else if (t.length === +t.length) {
            for (var o = 0, i = t.length; i > o; o++)if (o in t && e.call(n, t[o], o, t) === r)return
        } else for (var s in t)if (k.has(t, s) && e.call(n, t[s], s, t) === r)return
    };
    k.map = k.collect = function (t, e, n) {
        var r = [];
        return null == t ? r : h && t.map === h ? t.map(e, n) : (C(t, function (t, o, i) {
            r[r.length] = e.call(n, t, o, i)
        }), t.length === +t.length && (r.length = t.length), r)
    }, k.reduce = k.foldl = k.inject = function (t, e, n, r) {
        var o = arguments.length > 2;
        if (null == t && (t = []), d && t.reduce === d)return r && (e = k.bind(e, r)), o ? t.reduce(e, n) : t.reduce(e);
        if (C(t, function (t, i, s) {
            o ? n = e.call(r, n, t, i, s) : (n = t, o = !0)
        }), !o)throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, k.reduceRight = k.foldr = function (t, e, n, r) {
        var o = arguments.length > 2;
        if (null == t && (t = []), f && t.reduceRight === f)return r && (e = k.bind(e, r)), o ? t.reduceRight(e, n) : t.reduceRight(e);
        var i = k.toArray(t).reverse();
        return r && !o && (e = k.bind(e, r)), o ? k.reduce(i, e, n, r) : k.reduce(i, e)
    }, k.find = k.detect = function (t, e, n) {
        var r;
        return S(t, function (t, o, i) {
            return e.call(n, t, o, i) ? (r = t, !0) : void 0
        }), r
    }, k.filter = k.select = function (t, e, n) {
        var r = [];
        return null == t ? r : m && t.filter === m ? t.filter(e, n) : (C(t, function (t, o, i) {
            e.call(n, t, o, i) && (r[r.length] = t)
        }), r)
    }, k.reject = function (t, e, n) {
        var r = [];
        return null == t ? r : (C(t, function (t, o, i) {
            e.call(n, t, o, i) || (r[r.length] = t)
        }), r)
    }, k.every = k.all = function (t, e, n) {
        var o = !0;
        return null == t ? o : g && t.every === g ? t.every(e, n) : (C(t, function (t, i, s) {
            return(o = o && e.call(n, t, i, s)) ? void 0 : r
        }), o)
    };
    var S = k.some = k.any = function (t, e, n) {
        e || (e = k.identity);
        var o = !1;
        return null == t ? o : y && t.some === y ? t.some(e, n) : (C(t, function (t, i, s) {
            return o || (o = e.call(n, t, i, s)) ? r : void 0
        }), !!o)
    };
    k.include = k.contains = function (t, e) {
        var n = !1;
        return null == t ? n : v && t.indexOf === v ? -1 != t.indexOf(e) : n = S(t, function (t) {
            return t === e
        })
    }, k.invoke = function (t, e) {
        var n = a.call(arguments, 2);
        return k.map(t, function (t) {
            return(k.isFunction(e) ? e || t : t[e]).apply(t, n)
        })
    }, k.pluck = function (t, e) {
        return k.map(t, function (t) {
            return t[e]
        })
    }, k.max = function (t, e, n) {
        if (!e && k.isArray(t))return Math.max.apply(Math, t);
        if (!e && k.isEmpty(t))return-1 / 0;
        var r = {computed: -1 / 0};
        return C(t, function (t, o, i) {
            var s = e ? e.call(n, t, o, i) : t;
            s >= r.computed && (r = {value: t, computed: s})
        }), r.value
    }, k.min = function (t, e, n) {
        if (!e && k.isArray(t))return Math.min.apply(Math, t);
        if (!e && k.isEmpty(t))return 1 / 0;
        var r = {computed: 1 / 0};
        return C(t, function (t, o, i) {
            var s = e ? e.call(n, t, o, i) : t;
            s < r.computed && (r = {value: t, computed: s})
        }), r.value
    }, k.shuffle = function (t) {
        var e, n = [];
        return C(t, function (t, r) {
            0 == r ? n[0] = t : (e = Math.floor(Math.random() * (r + 1)), n[r] = n[e], n[e] = t)
        }), n
    }, k.sortBy = function (t, e, n) {
        return k.pluck(k.map(t, function (t, r, o) {
            return{value: t, criteria: e.call(n, t, r, o)}
        }).sort(function (t, e) {
            var n = t.criteria, r = e.criteria;
            return r > n ? -1 : n > r ? 1 : 0
        }), "value")
    }, k.groupBy = function (t, e) {
        var n = {}, r = k.isFunction(e) ? e : function (t) {
            return t[e]
        };
        return C(t, function (t, e) {
            var o = r(t, e);
            (n[o] || (n[o] = [])).push(t)
        }), n
    }, k.sortedIndex = function (t, e, n) {
        n || (n = k.identity);
        for (var r = 0, o = t.length; o > r;) {
            var i = r + o >> 1;
            n(t[i]) < n(e) ? r = i + 1 : o = i
        }
        return r
    }, k.toArray = function (t) {
        return t ? t.toArray ? t.toArray() : k.isArray(t) ? a.call(t) : k.isArguments(t) ? a.call(t) : k.values(t) : []
    }, k.size = function (t) {
        return k.toArray(t).length
    }, k.first = k.head = function (t, e, n) {
        return null == e || n ? t[0] : a.call(t, 0, e)
    }, k.initial = function (t, e, n) {
        return a.call(t, 0, t.length - (null == e || n ? 1 : e))
    }, k.last = function (t, e, n) {
        return null == e || n ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
    }, k.rest = k.tail = function (t, e, n) {
        return a.call(t, null == e || n ? 1 : e)
    }, k.compact = function (t) {
        return k.filter(t, function (t) {
            return!!t
        })
    }, k.flatten = function (t, e) {
        return k.reduce(t, function (t, n) {
            return k.isArray(n) ? t.concat(e ? n : k.flatten(n)) : (t[t.length] = n, t)
        }, [])
    }, k.without = function (t) {
        return k.difference(t, a.call(arguments, 1))
    }, k.uniq = k.unique = function (t, e, n) {
        var r = n ? k.map(t, n) : t, o = [];
        return k.reduce(r, function (n, r, i) {
            return 0 != i && (e === !0 ? k.last(n) == r : k.include(n, r)) || (n[n.length] = r, o[o.length] = t[i]), n
        }, []), o
    }, k.union = function () {
        return k.uniq(k.flatten(arguments, !0))
    }, k.intersection = k.intersect = function (t) {
        var e = a.call(arguments, 1);
        return k.filter(k.uniq(t), function (t) {
            return k.every(e, function (e) {
                return k.indexOf(e, t) >= 0
            })
        })
    }, k.difference = function (t) {
        var e = k.flatten(a.call(arguments, 1));
        return k.filter(t, function (t) {
            return!k.include(e, t)
        })
    }, k.zip = function () {
        for (var t = a.call(arguments), e = k.max(k.pluck(t, "length")), n = new Array(e), r = 0; e > r; r++)n[r] = k.pluck(t, "" + r);
        return n
    }, k.indexOf = function (t, e, n) {
        if (null == t)return-1;
        var r, o;
        if (n)return r = k.sortedIndex(t, e), t[r] === e ? r : -1;
        if (v && t.indexOf === v)return t.indexOf(e);
        for (r = 0, o = t.length; o > r; r++)if (r in t && t[r] === e)return r;
        return-1
    }, k.lastIndexOf = function (t, e) {
        if (null == t)return-1;
        if (b && t.lastIndexOf === b)return t.lastIndexOf(e);
        for (var n = t.length; n--;)if (n in t && t[n] === e)return n;
        return-1
    }, k.range = function (t, e, n) {
        arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((e - t) / n), 0), o = 0, i = new Array(r); r > o;)i[o++] = t, t += n;
        return i
    };
    var I = function () {
    };
    k.bind = function (t, e) {
        var n, r;
        if (t.bind === w && w)return w.apply(t, a.call(arguments, 1));
        if (!k.isFunction(t))throw new TypeError;
        return r = a.call(arguments, 2), n = function () {
            if (!(this instanceof n))return t.apply(e, r.concat(a.call(arguments)));
            I.prototype = t.prototype;
            var o = new I, i = t.apply(o, r.concat(a.call(arguments)));
            return Object(i) === i ? i : o
        }
    }, k.bindAll = function (t) {
        var e = a.call(arguments, 1);
        return 0 == e.length && (e = k.functions(t)), C(e, function (e) {
            t[e] = k.bind(t[e], t)
        }), t
    }, k.memoize = function (t, e) {
        var n = {};
        return e || (e = k.identity), function () {
            var r = e.apply(this, arguments);
            return k.has(n, r) ? n[r] : n[r] = t.apply(this, arguments)
        }
    }, k.delay = function (t, e) {
        var n = a.call(arguments, 2);
        return setTimeout(function () {
            return t.apply(t, n)
        }, e)
    }, k.defer = function (t) {
        return k.delay.apply(k, [t, 1].concat(a.call(arguments, 1)))
    }, k.throttle = function (t, e) {
        var n, r, o, i, s, a = k.debounce(function () {
            s = i = !1
        }, e);
        return function () {
            n = this, r = arguments;
            var u = function () {
                o = null, s && t.apply(n, r), a()
            };
            o || (o = setTimeout(u, e)), i ? s = !0 : t.apply(n, r), a(), i = !0
        }
    }, k.debounce = function (t, e) {
        var n;
        return function () {
            var r = this, o = arguments, i = function () {
                n = null, t.apply(r, o)
            };
            clearTimeout(n), n = setTimeout(i, e)
        }
    }, k.once = function (t) {
        var e, n = !1;
        return function () {
            return n ? e : (n = !0, e = t.apply(this, arguments))
        }
    }, k.wrap = function (t, e) {
        return function () {
            var n = [t].concat(a.call(arguments, 0));
            return e.apply(this, n)
        }
    }, k.compose = function () {
        var t = arguments;
        return function () {
            for (var e = arguments, n = t.length - 1; n >= 0; n--)e = [t[n].apply(this, e)];
            return e[0]
        }
    }, k.after = function (t, e) {
        return 0 >= t ? e() : function () {
            return--t < 1 ? e.apply(this, arguments) : void 0
        }
    }, k.keys = _ || function (t) {
        if (t !== Object(t))throw new TypeError("Invalid object");
        var e = [];
        for (var n in t)k.has(t, n) && (e[e.length] = n);
        return e
    }, k.values = function (t) {
        return k.map(t, k.identity)
    }, k.functions = k.methods = function (t) {
        var e = [];
        for (var n in t)k.isFunction(t[n]) && e.push(n);
        return e.sort()
    }, k.extend = function (t) {
        return C(a.call(arguments, 1), function (e) {
            for (var n in e)t[n] = e[n]
        }), t
    }, k.defaults = function (t) {
        return C(a.call(arguments, 1), function (e) {
            for (var n in e)null == t[n] && (t[n] = e[n])
        }), t
    }, k.clone = function (t) {
        return k.isObject(t) ? k.isArray(t) ? t.slice() : k.extend({}, t) : t
    }, k.tap = function (t, e) {
        return e(t), t
    }, k.isEqual = function (e, n) {
        return t(e, n, [])
    }, k.isEmpty = function (t) {
        if (k.isArray(t) || k.isString(t))return 0 === t.length;
        for (var e in t)if (k.has(t, e))return!1;
        return!0
    }, k.isElement = function (t) {
        return!(!t || 1 != t.nodeType)
    }, k.isArray = x || function (t) {
        return"[object Array]" == c.call(t)
    }, k.isObject = function (t) {
        return t === Object(t)
    }, k.isArguments = function (t) {
        return"[object Arguments]" == c.call(t)
    }, k.isArguments(arguments) || (k.isArguments = function (t) {
        return!(!t || !k.has(t, "callee"))
    }), k.isFunction = function (t) {
        return"[object Function]" == c.call(t)
    }, k.isString = function (t) {
        return"[object String]" == c.call(t)
    }, k.isNumber = function (t) {
        return"[object Number]" == c.call(t)
    }, k.isNaN = function (t) {
        return t !== t
    }, k.isBoolean = function (t) {
        return t === !0 || t === !1 || "[object Boolean]" == c.call(t)
    }, k.isDate = function (t) {
        return"[object Date]" == c.call(t)
    }, k.isRegExp = function (t) {
        return"[object RegExp]" == c.call(t)
    }, k.isNull = function (t) {
        return null === t
    }, k.isUndefined = function (t) {
        return void 0 === t
    }, k.has = function (t, e) {
        return p.call(t, e)
    }, k.noConflict = function () {
        return e._ = n, this
    }, k.identity = function (t) {
        return t
    }, k.times = function (t, e, n) {
        for (var r = 0; t > r; r++)e.call(n, r)
    }, k.escape = function (t) {
        return("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
    }, k.mixin = function (t) {
        C(k.functions(t), function (e) {
            N(e, k[e] = t[e])
        })
    };
    var z = 0;
    k.uniqueId = function (t) {
        var e = z++;
        return t ? t + e : e
    }, k.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var T = /.^/, P = function (t) {
        return t.replace(/\\\\/g, "\\").replace(/\\'/g, "'")
    };
    k.template = function (t, e) {
        var n = k.templateSettings, r = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + t.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(n.escape || T, function (t, e) {
            return"',_.escape(" + P(e) + "),'"
        }).replace(n.interpolate || T, function (t, e) {
            return"'," + P(e) + ",'"
        }).replace(n.evaluate || T, function (t, e) {
            return"');" + P(e).replace(/[\r\n\t]/g, " ") + ";__p.push('"
        }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');", o = new Function("obj", "_", r);
        return e ? o(e, k) : function (t) {
            return o.call(this, t, k)
        }
    }, k.chain = function (t) {
        return k(t).chain()
    };
    var E = function (t) {
        this._wrapped = t
    };
    k.prototype = E.prototype;
    var L = function (t, e) {
        return e ? k(t).chain() : t
    }, N = function (t, e) {
        E.prototype[t] = function () {
            var t = a.call(arguments);
            return u.call(t, this._wrapped), L(e.apply(k, t), this._chain)
        }
    };
    k.mixin(k), C(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
        var e = o[t];
        E.prototype[t] = function () {
            var n = this._wrapped;
            e.apply(n, arguments);
            var r = n.length;
            return"shift" != t && "splice" != t || 0 !== r || delete n[0], L(n, this._chain)
        }
    }), C(["concat", "join", "slice"], function (t) {
        var e = o[t];
        E.prototype[t] = function () {
            return L(e.apply(this._wrapped, arguments), this._chain)
        }
    }), E.prototype.chain = function () {
        return this._chain = !0, this
    }, E.prototype.value = function () {
        return this._wrapped
    }
}.call(this), function () {
    ("undefined" == typeof Zepto || null === Zepto) && $.ajaxSetup({beforeSend: function (t, e) {
        var n, r;
        if (e.global)return n = e.context || document, r = $.Event("ajaxBeforeSend"), $(n).trigger(r, [t, e]), r.isDefaultPrevented() ? !1 : r.result
    }})
}.call(this), function () {
    var t, e, n, r, o;
    "undefined" != typeof Zepto && null !== Zepto ? (t = function (t) {
        var e, n, r, o;
        n = document.createEvent("Events");
        for (r in t)o = t[r], n[r] = o;
        return n.initEvent("" + t.type + ":prepare", !0, !0), e = function (e, r) {
            return function () {
                return e.apply(t), r.apply(n)
            }
        }, n.preventDefault = e(t.preventDefault, n.preventDefault), n.stopPropagation = e(t.stopPropagation, n.stopPropagation), n.stopImmediatePropagation = e(t.stopImmediatePropagation, n.stopImmediatePropagation), t.target.dispatchEvent(n), n.result
    }, window.addEventListener("click", t, !0), window.addEventListener("submit", t, !0)) : (e = null, n = function (t) {
        var n;
        t.timeStamp !== e && (n = t.type, t.type = "" + n + ":prepare", $.event.trigger(t, [], t.target, !1), t.type = n, e = t.timeStamp)
    }, r = function (t) {
        return function () {
            $(this).on("" + t + ".prepare", function () {
            })
        }
    }, o = function (t) {
        return function () {
            $(this).off("" + t + ".prepare", function () {
            })
        }
    }, $.event.special.click = {preDispatch: n}, $.event.special.submit = {preDispatch: n}, $.event.special["click:prepare"] = {setup: r("click"), teardown: o("click")}, $.event.special["submit:prepare"] = {setup: r("submit"), teardown: o("submit")})
}.call(this), function () {
    $(document).on("ajaxBeforeSend", function (t, e, n) {
        return n.dataType ? void 0 : e.setRequestHeader("Accept", "*/*;q=0.5, " + n.accepts.script)
    })
}.call(this), function () {
    $(document).on("click:prepare", "a[data-confirm], button[data-confirm]", function (t) {
        var e;
        (e = $(this).attr("data-confirm")) && (confirm(e) || (t.stopImmediatePropagation(), t.preventDefault()))
    })
}.call(this), function () {
    var t;
    $(document).on("ajaxBeforeSend", function (t, e, n) {
        var r;
        if (!n.crossDomain && "GET" !== n.type)return(r = $('meta[name="csrf-token"]').attr("content")) ? e.setRequestHeader("X-CSRF-Token", r) : void 0
    }), $(document).on("submit:prepare", "form", function () {
        var e, n, r, o;
        e = $(this), e.is("form[data-remote]") || this.method && "GET" !== this.method.toUpperCase() && t(e.attr("action")) && (r = $('meta[name="csrf-param"]').attr("content"), o = $('meta[name="csrf-token"]').attr("content"), null != r && null != o && (e.find("input[name=" + r + "]")[0] || (n = document.createElement("input"), n.setAttribute("type", "hidden"), n.setAttribute("name", r), n.setAttribute("value", o), e.prepend(n))))
    }), t = function (t) {
        var e, n;
        return e = document.createElement("a"), e.href = t, n = e.href.split("/", 3).join("/"), 0 === location.href.indexOf(n)
    }
}.call(this), function () {
    var t;
    (t = navigator.userAgent.match(/MSIE ([\w]+)/)) && parseInt(t[1]) <= 8 && $(document).on("submit:prepare", "form", function () {
        0 === $(this).find("input[name=utf8]").length && $(this).prepend("<input type=hidden name=utf8 value=✓>")
    })
}.call(this), function () {
    $(document).on("submit:prepare", "form", function () {
        var t, e, n, r, o, i, s, a, u;
        for (a = $(this).find("input[type=submit][data-disable-with]"), r = 0, i = a.length; i > r; r++)e = a[r], e = $(e), e.attr("data-enable-with", e.val() || "Submit"), (n = e.attr("data-disable-with")) && e.val(n), e[0].disabled = !0;
        for (u = $(this).find("button[type=submit][data-disable-with]"), o = 0, s = u.length; s > o; o++)t = u[o], t = $(t), t.attr("data-enable-with", t.html() || ""), (n = t.attr("data-disable-with")) && t.html(n), t[0].disabled = !0
    }), $(document).on("ajaxComplete", "form", function () {
        var t, e, n, r, o, i, s, a;
        for (s = $(this).find("input[type=submit][data-enable-with]"), n = 0, o = s.length; o > n; n++)e = s[n], $(e).val($(e).attr("data-enable-with")), e.disabled = !1;
        for (a = $(this).find("button[type=submit][data-enable-with]"), r = 0, i = a.length; i > r; r++)t = a[r], $(t).html($(t).attr("data-enable-with")), t.disabled = !1
    })
}.call(this), function () {
    $(document).on("click", "a[data-method]", function (t) {
        var e, n, r, o;
        return e = $(this), e.is("a[data-remote]") || (o = e.attr("data-method").toLowerCase(), "get" === o) ? void 0 : (n = document.createElement("form"), n.method = "POST", n.action = e.attr("href"), n.style.display = "none", "post" !== o && (r = document.createElement("input"), r.setAttribute("type", "hidden"), r.setAttribute("name", "_method"), r.setAttribute("value", o), n.appendChild(r)), document.body.appendChild(n), $(n).submit(), t.preventDefault(), !1)
    })
}.call(this), function () {
    $(document).on("click", "a[data-remote]", function (t) {
        var e, n, r, o, i;
        return n = $(this), r = {}, r.context = this, (o = n.attr("data-method")) && (r.type = o), (i = this.href) && (r.url = i), (e = n.attr("data-type")) && (r.dataType = e), $.ajax(r), t.preventDefault(), !1
    }), $(document).on("submit", "form[data-remote]", function (t) {
        var e, n, r, o, i, s;
        return r = $(this), o = {}, o.context = this, (i = this.method) && (o.type = i), (s = this.action) && (o.url = s), (e = r.serializeArray()) && (o.data = e), (n = r.attr("data-type")) && (o.dataType = n), $.ajax(o), t.preventDefault(), !1
    })
}.call(this), function () {
    var t;
    t = "form[data-remote] input[type=submit],\nform[data-remote] button[type=submit],\nform[data-remote] button:not([type]),\nform[data-remote-submit] input[type=submit],\nform[data-remote-submit] button[type=submit],\nform[data-remote-submit] button:not([type])", $(document).on("click", t, function () {
        var t, e, n, r, o, i;
        o = $(this), e = o.closest("form"), n = e.find(".js-submit-button-value"), (r = o.attr("name")) ? (t = o.is("input[type=submit]") ? "Submit" : "", i = o.val() || t, n[0] ? (n.attr("name", r), n.attr("value", i)) : (n = document.createElement("input"), n.setAttribute("type", "hidden"), n.setAttribute("name", r), n.setAttribute("value", i), n.setAttribute("class", "js-submit-button-value"), e.prepend(n))) : n.remove()
    })
}.call(this), function () {
    var t, e, n, r = {}.hasOwnProperty;
    t = window.$shutto || window.$, t.extend(t, {require: function () {
        var e, n, r, o, i, s, a, u, c, p, l;
        for (a = t.a.flatten(Array.prototype.slice.apply(arguments)), r = t.func.isFunction(t.a.last(a)) ? a.pop() : function () {
        }, i = [], o = [], u = 0, p = a.length; p > u; u++)s = a[u], s && (s.match(/\.css$/) ? i : o).push(s);
        for (e = function (t, e) {
            var n, r, o;
            r = document.createElement(t);
            for (n in e)o = e[n], r.setAttribute(n, o);
            return r
        }, n = function () {
            var i, s, a;
            return 0 === o.length ? r.call() : (a = e("script", {type: "text/javascript", src: o.shift()}), i = !1, s = function () {
                return i ? void 0 : (i = !0, n())
            }, a.onload = s, a.onreadystatechanage = function () {
                return"complete" === a.readyState || "loaded" === a.readyState ? s() : void 0
            }, t("head").append(a))
        }, c = 0, l = i.length; l > c; c++)s = i[c], t("head").append(e("link", {type: "text/css", rel: "stylesheet", href: s}));
        return n()
    }, a: t.extend(function (t) {
        return t instanceof Array ? t : null != t ? [t] : []
    }, {erase: function (t, e) {
        var n, r, o, i;
        for (i = [], r = 0, o = t.length; o > r; r++)n = t[r], n !== e && i.push(n);
        return i
    }, last: function (t) {
        return t[t.length - 1]
    }, reverse: function (t) {
        var e, n, r, o;
        for (o = [], e = n = r = t.length; 0 >= r ? 0 > n : n > 0; e = 0 >= r ? ++n : --n)o.push(t[e - 1]);
        return o
    }, flatten: function (t) {
        return t.length > 0 ? [].concat.apply([], t) : t
    }, compact: function (t) {
        var e, n, r, o;
        for (o = [], n = 0, r = t.length; r > n; n++)e = t[n], null != e && o.push(e);
        return o
    }, contains: function (t, e) {
        return-1 !== t.indexOf(e)
    }, firstValue: function (t, e) {
        var n, r, o, i, s;
        for (n = i = 0, s = t.length; s > i; n = ++i)if (r = t[n], null != (o = e(r, n)))return o
    }, equals: function (t, e) {
        return t === e || t.length === e.length && t.every(function (t, n) {
            return t === e[n]
        })
    }, callAll: function (t, e, n, r) {
        var o;
        return(o = t.length) || r(t), t.forEach(function (i) {
            return i[e].call(i, function () {
                return n.apply(null, [i].concat(Array.prototype.slice.call(arguments))), --o <= 0 ? r(t) : void 0
            })
        })
    }, uniq: function (t) {
        return t.reduce(function (t, e) {
            return t.indexOf(e) < 0 && t.push(e), t
        }, [])
    }, toHash: function (t, e) {
        var n, r, o, i;
        for (null == e && (e = !0), n = {}, o = 0, i = t.length; i > o; o++)r = t[o], n[r] = e;
        return n
    }, sameValue: function (t, e) {
        var n, r, o, i, s;
        if (t.length) {
            for (o = e(t[0], 0), n = i = 1, s = t.length; s >= 1 ? s > i : i > s; n = s >= 1 ? ++i : --i)if (r = e(t[n], n), r !== o)return void 0;
            return o
        }
        return void 0
    }}), s: {capitalize: function (t) {
        return t.replace(/\b[a-z]/g, function (t) {
            return t.toUpperCase()
        }).replace(/-/g, "")
    }, escapeRegExp: function (t) {
        return t.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1")
    }, escapeHTML: function (e) {
        return t("<div>").text(e).html()
    }, cssValue: function (t) {
        return t && /^[\d\.]+$/.test(t) ? t + "px" : t
    }, parseQuery: function (t) {
        var e, n, r, o, i, s, a, u;
        for (r = {}, a = t.split(/[&;]/), i = 0, s = a.length; s > i; i++)n = a[i], u = n.split("="), e = u[0], o = u[1], r[decodeURIComponent(e)] = decodeURIComponent(o || e);
        return r
    }, parseQueryStrict: function (t) {
        var e, n, r, o, i, s, a, u;
        for (r = {}, a = t.split("&"), i = 0, s = a.length; s > i; i++)n = a[i], u = n.split("="), e = u[0], o = u[1], r[decodeURIComponent(e)] = decodeURIComponent(o || "");
        return r
    }, evalScript: function (t) {
        var e;
        return e = document.createElement("script"), e.type = "text/javascript", e.innerHTML = t, document.body.appendChild(e)
    }, ensureEncodeURI: function (t) {
        var e;
        try {
            return encodeURI(decodeURI(t))
        } catch (n) {
            return e = n, t
        }
    }, parseJSON: function (t) {
        var e;
        try {
            return JSON.parse(t) || {}
        } catch (n) {
            return e = n, {}
        }
    }}, ev: {isMouseInOut: function (e, n) {
        return e.relatedTarget ? !t.a.contains(t(e.relatedTarget).parents(), n) : !1
    }}, geo: {isInside: function (t, e) {
        var n, r;
        return null == e ? !1 : t.left <= (n = e.x) && n < t.left + t.width && t.top <= (r = e.y) && r < t.top + t.height
    }, mergeRect: function (t) {
        var e, n, r, o;
        for (n = {left: Number.POSITIVE_INFINITY, right: Number.NEGATIVE_INFINITY, top: Number.POSITIVE_INFINITY, bottom: Number.NEGATIVE_INFINITY}, r = 0, o = t.length; o > r; r++)e = t[r], n = {left: Math.min(n.left, e.left), right: Math.max(n.right, e.left + e.width), top: Math.min(n.top, e.top), bottom: Math.max(n.bottom, e.top + e.height)};
        return{left: n.left, top: n.top, width: n.right - n.left, height: n.bottom - n.top}
    }}, o: {isNumber: function (t) {
        return"[object Number]" === toString.call(t)
    }, isNaN: function (t) {
        return t !== t
    }, findCommon: function (t, e, n) {
        var r, o, i, s;
        for (s = e, o = e; s;) {
            for (i = n, r = n; i;) {
                if (s === i)return[s, o, r];
                r = i, i = i[t]
            }
            o = s, s = s[t]
        }
        return[]
    }, queryString: function (t) {
        var e, n;
        return function () {
            var r;
            r = [];
            for (e in t)n = t[e], r.push("" + e + "=" + encodeURIComponent(n));
            return r
        }().join("&")
    }, clone: function (e) {
        var n, o, i, s, a, u, c;
        if (t.isArray(e)) {
            for (c = [], a = 0, u = e.length; u > a; a++)o = e[a], c.push(t.o.clone(o));
            return c
        }
        if (t.isObject(e)) {
            n = {};
            for (i in e)r.call(e, i) && (s = e[i], n[i] = t.o.clone(s));
            return n
        }
        return e
    }}, el: {stripLinks: function (e, n) {
        var r, o, i, s, a, u, c, p, l, h, d, f;
        for (null == n && (n = {}), f = e.find("a"), u = 0, l = f.length; l > u; u++) {
            for (r = f[u], s = r.parentNode, i = Array.prototype.slice.call(r.childNodes), c = 0, h = i.length; h > c; c++)o = i[c], r.removeChild(o), s.insertBefore(o, r);
            s.removeChild(r)
        }
        if ("a" === e.tagName()) {
            for (a = ("function" == typeof n.wrapper ? n.wrapper() : void 0) || t("<span>"), i = Array.prototype.slice.call(e[0].childNodes), p = 0, d = i.length; d > p; p++)o = i[p], a.append(o);
            e = a
        }
        return e
    }, scrollTop: function () {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    }, scrollBottom: function () {
        return t.el.scrollTop() + t(window).height()
    }, scrollHeight: function () {
        return t(document).height()
    }, scrollTo: function (t, e) {
        var n, r, o, i, s, a;
        return null == e && (e = 200), i = function (t, e, n) {
            return t + (e - t) * n
        }, r = function (t) {
            return-Math.cos(t * Math.PI) / 2 + .5
        }, a = window.pageYOffset, s = Date.now(), o = s + e, n = function () {
            var u, c;
            return u = +new Date, c = u > o ? 1 : (u - s) / e, window.scrollTo(0, i(a, t, r(c))), u > o || setTimeout(n, 15)
        }, n()
    }, _origins: [], origin: function (e, n) {
        return arguments.length <= 1 ? t(t.el._origins[t(e).attr("data-origin-id")]) : (t.el._origins.push(t(n)[0]), t(e).attr("data-origin-id", t.el._origins.length - 1))
    }, clearOrigins: function () {
        return t.el._origins = []
    }, cloneWithOrigin: function (e) {
        var n, r;
        return e = t(e), n = t(e[0].cloneNode(!0)), r = e.find("*").andSelf(), n.find("*").andSelf().each(function (e, n) {
            return t.el.origin(n, r[e])
        }), n
    }}, func: {callAfter: function (t, e, n) {
        var r;
        return null == n && (n = 20), r = function () {
            return e() ? t() : setTimeout(r, n)
        }, r()
    }, limitInterval: function (t, e) {
        var n, r;
        return n = null, r = !1, function () {
            return n ? (clearTimeout(n), r = !0) : t(), n = setTimeout(function () {
                return r && (t(), r = !1), n = null
            }, e)
        }
    }, wait: function (t, e) {
        var n;
        return n = function () {
            return t() ? e() : setTimeout(n, 100)
        }, n()
    }, isFunction: function (t) {
        return"[object Function]" === {}.toString.call(t)
    }}}), function () {
        var e, n, r, o, i, s;
        return i = /(webkit)[ \/]([\w.]+)/, o = /(opera)(?:.*version)?[ \/]([\w.]+)/, r = /(msie) ([\w.]+)/, n = /(mozilla)(?:.*? rv:([\w.]+))?/, s = navigator.userAgent.toLowerCase(), (e = i.exec(s) || o.exec(s) || r.exec(s) || s.indexOf("compatible") < 0 && n.exec(s)) ? t.browser[e[1]] = !0 : void 0
    }(), (t.os.ios || t.os.android) && (t.os.smp = !0), t.os.touch = "ontouchstart"in document || "createTouch"in document, t.ev.tap = t.os.touch && !navigator.userAgent.match(/Android\s+2/) ? "touchstart" : "click", t.extend(t.fn, {data: function (t, e) {
        var n;
        return n = this.attr("data-" + t, e), arguments.length >= 2 && this.attr("class", this.attr("class") || ""), n
    }, backgroundGradient: function (e) {
        var n, r, o;
        try {
            return r = new t.Color(e), o = r.brightness(Math.max(0, 1.2 * r.brightness() - 30)), t.browser.mozilla ? this.css("background", "-moz-linear-gradient(top, " + r + ", " + o + ") repeat scroll 0 0 " + r) : t.browser.opera ? this.css("background", "-o-linear-gradient(top, " + r + ", " + o + ") repeat scroll 0 0 " + r) : this.css("background", "-webkit-gradient(linear, left top , left bottom, from(" + r + "), to(" + o + ")) repeat scroll 0 0 " + r)
        } catch (i) {
            return n = i, this.css("background", e)
        }
    }, appendChildNodes: function (t) {
        var e, n, r, o, i, s;
        for (o = t[0].childNodes, s = [], n = 0, r = o.length; r > n; n++)e = o[n], s.push(null != (i = this[0]) ? i.appendChild(e) : void 0);
        return s
    }, sanitizeLink: function (t) {
        var e;
        return null == t && (t = "href"), e = this.attr(t), e && e.match(/javascript:/i) && this.attr(t, "#"), this
    }, select: function () {
        var t;
        return t = this[0], t.focus(), t.setSelectionRange(0, this.val().length)
    }, tagName: function () {
        var t, e;
        return null != (t = this[0]) ? null != (e = t.tagName) ? e.toLowerCase() : void 0 : void 0
    }, getAttribute: function (t) {
        return 0 === this.length ? void 0 : this[0].getAttribute(t)
    }, parentsUntil: function (e) {
        var n, r;
        if (!this.length)return t();
        if (n = this[0], e = e[0], n === e)return t();
        for (r = []; (n = n.parentNode) && n !== document && (r.push(n), n !== e););
        return t(r)
    }, commonParent: function (e) {
        var n, r, o, i, s, a, u, c, p, l, h;
        if (this.length <= 1)return this;
        for (a = function () {
            var r, o, i;
            for (i = [], r = 0, o = this.length; o > r; r++)n = this[r], i.push(t.a.reverse(t(n).parentsUntil(e)));
            return i
        }.call(this), r = a[0], i = a.slice(1), u = t(), o = c = 0, l = r.length; l > c; o = ++c) {
            for (s = r[o], p = 0, h = i.length; h > p; p++)if (a = i[p], a[o] !== s)return t(u);
            u = s
        }
        return t(u)
    }, ownerForm: function (e) {
        var n, r, o;
        null == e && (e = t), o = this.attr("form");
        try {
            if ("form" === o.tagName.toLowerCase())return e(o)
        } catch (i) {
            r = i
        }
        if ("string" == typeof o) {
            try {
                if (n = e("#" + o), n.length)return n.first()
            } catch (i) {
                r = i
            }
            try {
                if (n = e(o), n.length)return n.first()
            } catch (i) {
                r = i
            }
        }
        return e()
    }, copyFormValue: function (e, n) {
        return null == n && (n = {}), "input" === this.tagName() && t.a.contains(["radio", "checkbox"], this.attr("type")) ? this[0].checked = void 0 === n.checked ? e[0].checked : n.checked : this.val(e.val()), this
    }, enclosedLink: function () {
        var t, e;
        for (t = this[0]; t;) {
            if ("a" === (null != (e = t.tagName) ? e.toLowerCase() : void 0) && t.href)return t.href;
            t = t !== document && t.parentNode
        }
        return null
    }, isTwitterButton: function () {
        var t, e;
        return"a" === this.tagName() && (null != (t = this.attr("href")) ? t.match(/^https?:\/\/twitter\.com\//) : void 0) && (null != (e = this.attr("class")) ? e.match(/\btwitter-([a-z]+-button|timeline)\b/) : void 0)
    }, isFacebookButton: function () {
        var t;
        return!!(null != (t = this.attr("class")) ? t.match(/\bfb-[a-z\-]+\b/) : void 0)
    }, touchstart: function (e) {
        return this.bind(t.os.smp ? "touchstart" : "mousedown", e)
    }, touchend: function (e) {
        return this.bind(t.os.smp ? "touchend" : "mouseup", e)
    }, isInserted: function () {
        return-1 !== this.parents().indexOf(t("html")[0])
    }, insertedIntoDocument: function (e, n) {
        var r, o = this;
        return null == n && (n = {}), t.browser.webkit ? (r = function () {
            return e(), o.unbind("DOMNodeInsertedIntoDocument", r), "function" == typeof n.completeEvent ? n.completeEvent() : void 0
        }, this.bind("DOMNodeInsertedIntoDocument", r)) : t.func.callAfter(function () {
            return e(), "function" == typeof n.completeTimer ? n.completeTimer() : void 0
        }, function () {
            return o.isInserted()
        })
    }}), n = t.fn.val, t.fn.val = function (e) {
        var r, o, i, s, a, u, c, p, l, h;
        if (null != (c = this[0]) ? c.multiple : void 0) {
            if (void 0 === e) {
                for (p = t(this[0]).find("option"), h = [], i = 0, a = p.length; a > i; i++)r = p[i], r.selected && r.value && h.push(r.value);
                return h
            }
            for (o = e instanceof Array ? e : [e], l = t(this[0]).find("option"), s = 0, u = l.length; u > s; s++)r = l[s], r.selected = t.a.contains(o, r.value);
            return this
        }
        return n.apply(this, arguments)
    }, t.fn.satisfyRequired = function () {
        var t;
        return"checkbox" === this.attr("type") ? !!this[0].checked : this[0].multiple ? !!(null != (t = this.val()) ? t.length : void 0) : !!this.val()
    }, e = t.fn.find, t.fn.find = function (t) {
        return t = (t || "").replace(/(\#|\.)([a-z][a-z0-9-_%]*)\b/gi, function (t, e, n) {
            var r;
            return-1 === n.indexOf("%") ? t : (r = "#" === e ? "id" : "class", "[" + r + '="' + n + '"]')
        }), e.call(this, t)
    }, t.Color = function () {
        function t(t) {
            var e, n;
            if (this.rgb = t, "string" == typeof this.rgb) {
                if (e = this.rgb.match(/^#?([0-9a-f]{1,2})([0-9a-f]{1,2})([0-9a-f]{1,2})$/i), !e)throw new this.constructor.InvalidFormatError;
                this.rgb = function () {
                    var t, r, o, i;
                    for (o = e.slice(1), i = [], t = 0, r = o.length; r > t; t++)n = o[t], 1 === n.length && (n += n), i.push(parseInt(n, 16));
                    return i
                }()
            } else if (!(this.rgb instanceof Array))throw new this.constructor.InvalidFormatError
        }

        return t.InvalidFormatError = function () {
            function t() {
            }

            return t
        }(), t.prototype.hsb = function () {
            var t, e, n, r, o, i, s, a, u, c, p, l;
            return c = this.rgb[0], i = this.rgb[1], t = this.rgb[2], s = 0, a = Math.max(c, i, t), u = Math.min(c, i, t), r = a - u, n = a / 255, l = 0 !== a ? r / a : 0, 0 !== l && (p = (a - c) / r, o = (a - i) / r, e = (a - t) / r, s = c === a ? e - o : i === a ? 2 + p - e : 4 + o - p, s /= 6, 0 > s && s++), [Math.round(360 * s), Math.round(100 * l), Math.round(100 * n)]
        }, t.prototype.hsbToRgb = function (t) {
            var e, n, r, o, i, s;
            if (e = Math.round(t[2] / 100 * 255), 0 === t[1])return[e, e, e];
            switch (r = t[0] % 360, n = r % 60, o = Math.round(t[2] * (100 - t[1]) / 1e4 * 255), i = Math.round(t[2] * (6e3 - t[1] * n) / 6e5 * 255), s = Math.round(t[2] * (6e3 - t[1] * (60 - n)) / 6e5 * 255), Math.floor(r / 60)) {
                case 0:
                    return[e, s, o];
                case 1:
                    return[i, e, o];
                case 2:
                    return[o, e, s];
                case 3:
                    return[o, i, e];
                case 4:
                    return[s, o, e];
                case 5:
                    return[e, o, i]
            }
        }, t.prototype.brightness = function (t) {
            var e;
            return arguments.length ? (e = this.hsb(), e[2] = t, new this.constructor(this.hsbToRgb(e))) : this.hsb()[2]
        }, t.prototype.hex = function () {
            var t, e;
            return this._hex || (this._hex = "#" + function () {
                var n, r, o, i;
                for (o = this.rgb, i = [], n = 0, r = o.length; r > n; n++)e = o[n], 1 === (t = e.toString(16)).length ? i.push("0" + t) : i.push(t);
                return i
            }.call(this).join(""))
        }, t.prototype.toString = function () {
            return"rgb(" + this.rgb + ")"
        }, t
    }(), t.Cookie = function () {
        function e(e, n) {
            this.key = e, null == n && (n = {}), this.options = t.extend({path: "/", domain: !1, duration: !1, secure: !1, document: document, encode: !0}, n)
        }

        return e.prototype.write = function (t) {
            var e;
            return this.options.encode && (t = encodeURIComponent(t)), this.options.domain && (t += "; domain=" + this.options.domain), this.options.path && (t += "; path=" + this.options.path), this.options.duration && (e = new Date, e.setTime(e.getTime() + 24 * this.options.duration * 60 * 60 * 1e3), t += "; expires=" + e.toGMTString()), this.options.secure && (t += "; secure"), this.options.document.cookie = "" + this.key + "=" + t, this
        }, e.prototype.read = function () {
            var e;
            return e = this.options.document.cookie.match("(?:^|;)\\s*" + t.s.escapeRegExp(this.key) + "=([^;]*)"), e ? decodeURIComponent(e[1]) : null
        }, e.write = function (t, e, n) {
            return new this(t, n).write(e)
        }, e.read = function (t) {
            return new this(t).read()
        }, e
    }()
}.call(this), /*
 html5slider - a JS implementation of <input type=range> for Firefox 4 and up
 https://github.com/fryn/html5slider

 Copyright (c) 2010-2011 Frank Yan, <http://frankyan.com>

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
    function () {
        function t(t) {
            function n(t) {
                if (_ = !0, setTimeout(function () {
                    _ = !1
                }, 0), !t.button && T) {
                    var e = parseFloat(getComputedStyle(this, 0).width), n = (e - s.width) / T;
                    if (n) {
                        var o = t.clientX - this.getBoundingClientRect().left - s.width / 2 - (P - S) * n;
                        Math.abs(o) > s.radius && (x = !0, this.value -= -o / n), k = P, C = t.clientX, this.addEventListener("mousemove", r, !0), this.addEventListener("mouseup", p, !0)
                    }
                }
            }

            function r(t) {
                var e = parseFloat(getComputedStyle(this, 0).width), n = (e - s.width) / T;
                n && (k += (t.clientX - C) / n, C = t.clientX, x = !0, this.value = k)
            }

            function p() {
                this.removeEventListener("mousemove", r, !0), this.removeEventListener("mouseup", p, !0)
            }

            function l(t) {
                t.keyCode > 36 && t.keyCode < 41 && (h.call(this), x = !0, this.value = P + (38 == t.keyCode || 39 == t.keyCode ? z : -z))
            }

            function h() {
                _ || (this.style.boxShadow = i ? "0 0 2px 1px -moz-mac-focusring, inset 0 0 1px -moz-mac-focusring" : "0 0 0 2px #fb0")
            }

            function d() {
                this.style.boxShadow = ""
            }

            function f(t) {
                return!isNaN(t) && +t == parseFloat(t)
            }

            function m() {
                S = f(t.min) ? +t.min : 0, I = f(t.max) ? +t.max : 100, S > I && (I = S > 100 ? S : 100), z = f(t.step) && t.step > 0 ? +t.step : 1, T = I - S, y(!0)
            }

            function g() {
                v || b || (P = t.getAttribute("value")), f(P) || (P = (S + I) / 2), P = Math.round((P - S) / z) * z + S, S > P ? P = S : P > I && (P = S + ~~(T / z) * z)
            }

            function y(n) {
                if (g(), x && P != w && t.dispatchEvent(c), x = !1, n || P != w) {
                    w = P;
                    var r = T ? (P - S) / T * 100 : 0, o = "-moz-element(#__sliderthumb__) " + r + "% no-repeat, ";
                    e(t, {background: o + a})
                }
            }

            var v, b, x, _, w, k, C, S, I, z, T, P = t.value;
            o || (o = document.body.appendChild(document.createElement("hr")), e(o, {"-moz-appearance": i ? "scale-horizontal" : "scalethumb-horizontal", display: "block", visibility: "visible", opacity: 1, position: "fixed", top: "-999999px"}), document.mozSetImageElement("__sliderthumb__", o));
            var E = function () {
                return"" + P
            }, L = function N(e) {
                P = "" + e, v = !0, y(), delete t.value, t.value = P, t.__defineGetter__("value", E), t.__defineSetter__("value", N)
            };
            t.__defineGetter__("value", E), t.__defineSetter__("value", L), t.__defineGetter__("type", function () {
                return"range"
            }), ["min", "max", "step"].forEach(function (e) {
                t.hasAttribute(e) && (b = !0), t.__defineGetter__(e, function () {
                    return this.hasAttribute(e) ? this.getAttribute(e) : ""
                }), t.__defineSetter__(e, function (t) {
                    null === t ? this.removeAttribute(e) : this.setAttribute(e, t)
                })
            }), t.readOnly = !0, e(t, u), m(), t.addEventListener("DOMAttrModified", function (t) {
                "value" != t.attrName || v ? ~["min", "max", "step"].indexOf(t.attrName) && (m(), b = !0) : (P = t.newValue, y())
            }, !0), t.addEventListener("mousedown", n, !0), t.addEventListener("keydown", l, !0), t.addEventListener("focus", h, !0), t.addEventListener("blur", d, !0)
        }

        function e(t, e) {
            for (var n in e)t.style.setProperty(n, e[n], "important")
        }

        $.setupRangeInput = function () {
        };
        var n = document.createElement("input");
        try {
            if (n.type = "range", "range" == n.type)return
        } catch (r) {
            return
        }
        if (document.mozSetImageElement && "MozAppearance"in n.style) {
            var o, i = "MacIntel" == navigator.platform, s = {radius: i ? 9 : 6, width: i ? 22 : 12, height: i ? 16 : 20}, a = "-moz-linear-gradient(top, transparent " + (i ? "6px, #999 6px, #999 7px, #ccc 9px, #bbb 11px, #bbb 12px, transparent 12px" : "9px, #999 9px, #bbb 10px, #fff 11px, transparent 11px") + ", transparent)", u = {"min-width": s.width + "px", "min-height": s.height + "px", "max-height": s.height + "px", padding: 0, border: 0, "border-radius": 0, cursor: "default", "text-indent": "-999999px"}, c = document.createEvent("HTMLEvents");
            c.initEvent("change", !0, !1), $.setupRangeInput = function (e) {
                t(e)
            }
        }
    }(), function () {
    var t;
    t = window.$shutto || window.$, t.Repeat = function () {
        function e(t, e, n) {
            this.parent = t, this.units = e, this.options = null != n ? n : {}
        }

        var n, r, o, i, s;
        return e.prototype.length = function () {
            return this.units.length
        }, e.prototype.unitLength = function () {
            return this.units[0].length
        }, e.prototype.equals = function (t) {
            var e, n, r, o, i, s, a, u, c, p;
            if (this.length() === t.length() && this.unitLength() === t.unitLength()) {
                for (p = this.units, n = s = 0, u = p.length; u > s; n = ++s)for (o = p[n], i = t.units[n], r = a = 0, c = o.length; c > a; r = ++a)if (e = o[r], e !== i[r])return!1;
                return!0
            }
            return!1
        }, e.Target = function () {
            function t(t, e) {
                this.repeat = t, this.index = e
            }

            return t.prototype.equals = function (t) {
                return this.repeat === t.repeat && this.index === t.index
            }, t
        }(), e.detect = function (t) {
            var e, n, r, o, i, s, a, u, c, p, l, h, d, f, m, g, y, v, b;
            for (u = [], s = t.length / 2 + 1, p = function () {
                var t, e;
                for (e = [], r = t = 0; s >= 0 ? s > t : t > s; r = s >= 0 ? ++t : --t)e.push([]);
                return e
            }(), n = l = 1; s >= 1 ? s > l : l > s; n = s >= 1 ? ++l : --l)for (c = t.slice(n), r = 0, r = h = 0, d = c.length - n + 1; d >= 0 ? d > h : h > d; r = d >= 0 ? ++h : --h)if (!p[n][r] && function () {
                m = [];
                for (var t = 0; n >= 0 ? n > t : t > n; n >= 0 ? t++ : t--)m.push(t);
                return m
            }.apply(this).every(function (e) {
                return c[r + e] === t[r + e]
            })) {
                for (a = [function () {
                    g = [];
                    for (var t = r, e = r + n; e >= r ? e > t : t > e; e >= r ? t++ : t--)g.push(t);
                    return g
                }.apply(this), function () {
                    y = [];
                    for (var t = f = r + n, e = r + 2 * n; e >= f ? e > t : t > e; e >= f ? t++ : t--)y.push(t);
                    return y
                }.apply(this)], e = n, i = r + n; i >= r && s > e;)p[e][i] = !0, e += n, i -= n;
                for (o = r + 2 * n; o + n <= t.length && function () {
                    v = [];
                    for (var t = 0; n >= 0 ? n > t : t > n; n >= 0 ? t++ : t--)v.push(t);
                    return v
                }.apply(this).every(function (e) {
                    return t[r + e] === t[o + e]
                });) {
                    for (a.push(function () {
                        b = [];
                        for (var t = o, e = o + n; e >= o ? e > t : t > e; e >= o ? t++ : t--)b.push(t);
                        return b
                    }.apply(this)), e = n, i = o; i >= r && s > e;)p[e][i] = !0, e += n, i -= n;
                    o += n
                }
                u.push(a)
            }
            return u
        }, e.create = function (t) {
            return r(i(t, n, {"class": !0}), i(t, o))
        }, r = function (t, e) {
            var n, r, o, i, s, a, u, c;
            for (r = [], i = 0, a = t.length; a > i; i++)n = t[i], (r[c = n.unitLength()] || (r[c] = [])).push(n);
            for (s = 0, u = e.length; u > s; s++)n = e[s], (o = r[n.unitLength()]) && o.some(function (t) {
                return n.equals(t)
            }) || t.push(n);
            return t
        }, i = function (t, n, r) {
            var o, i, s, a, u, c, p, l, h;
            for (null == r && (r = {}), i = t.children, c = e.detect(function () {
                var t, e, r;
                for (r = [], t = 0, e = i.length; e > t; t++)o = i[t], r.push(n(o));
                return r
            }()), h = [], a = p = l = c.length; 0 >= l ? 0 > p : p > 0; a = 0 >= l ? ++p : --p)h.push(new e(t, function () {
                var t, e, n, r;
                for (n = c[a - 1], r = [], t = 0, e = n.length; e > t; t++)s = n[t], r.push(function () {
                    var t, e, n;
                    for (n = [], t = 0, e = s.length; e > t; t++)u = s[t], n.push(i[u]);
                    return n
                }());
                return r
            }(), r));
            return h
        }, o = function (t) {
            return t.tagName.toLowerCase()
        }, n = function (t) {
            var e, n, r, i, s, a;
            if (r = o(t), n = t.className)for (a = n.split(/\s+/), i = 0, s = a.length; s > i; i++)e = a[i], r += "." + e;
            return r
        }, s = 0, e.uid = function (t) {
            return t._repeat_uid || (t._repeat_uid = ++s)
        }, e.targets = {}, e.prepare = function (t) {
            return this.root = t, this._prepare(this.root[0])
        }, e._prepare = function (t) {
            var e, n, r, o, i, s, a, u, c, p, l, h, d, f, m, g, y, v, b;
            for (g = this.create(t), a = 0, l = g.length; l > a; a++)for (o = g[a], y = o.units, r = u = 0, h = y.length; h > u; r = ++u)for (i = y[r], c = 0, d = i.length; d > c; c++)n = i[c], ((s = this.targets)[m = this.uid(n)] || (s[m] = [])).push(new this.Target(o, r));
            for (v = t.children, b = [], p = 0, f = v.length; f > p; p++)e = v[p], e.children.length > 0 && b.push(this._prepare(e));
            return b
        }, e.get = function (e) {
            var n, r, o, i, s, a, u, c, p;
            return e.length ? (n = e.commonParent(this.root), e[0] === n[0] ? u = [] : (p = function () {
                var o, i, u;
                for (u = [], o = 0, i = e.length; i > o; o++)r = e[o], r = t(r), a = r.parentsUntil(n), u.push(t.a.flatten(function () {
                    var t, e, n, o;
                    for (n = r.concat(a.slice(0, a.length - 1)), o = [], t = 0, e = n.length; e > t; t++)s = n[t], (p = this.targets[this.uid(s)]) && o.push(p);
                    return o
                }.call(this)));
                return u
            }.call(this), o = p[0], i = p.slice(1), u = function () {
                var t, e, n;
                for (n = [], t = 0, e = o.length; e > t; t++)c = o[t], i.every(function (t) {
                    return t.some(function (t) {
                        return t.equals(c)
                    })
                }) && n.push(c);
                return n
            }.call(this)), u.concat(t.a.flatten(function () {
                var t, e, r, o;
                for (r = n.concat(n.parentsUntil(this.root)), o = [], t = 0, e = r.length; e > t; t++)s = r[t], (p = this.targets[this.uid(s)]) && o.push(p);
                return o
            }.call(this)))) : []
        }, e
    }()
}.call(this), function () {
    var t, e, n, r, o, i, s = {}.hasOwnProperty;
    t = window.$shutto || window.$, e = {tags: ["a", "abbr", "address", "area", "b", "bdo", "blockquote", "br", "caption", "center", "cite", "code", "col", "colgroup", "dd", "del", "dfn", "div", "dl", "dt", "em", "figcaption", "figure", "font", "h1", "h2", "h3", "h4", "h5", "h6", "hgroup", "i", "img", "ins", "kbd", "label", "li", "map", "mark", "ol", "p", "pre", "q", "rp", "rt", "ruby", "s", "samp", "small", "span", "strike", "strong", "sub", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "wbr", "nobr", "big", "hr", "form", "button", "input", "textarea", "select", "option", "optgroup", "fieldset", "legend", "datalist", "section", "nav", "article", "aside", "hgroup", "header", "footer", "details", "summary", "command", "menu", "video", "audio", "source", "class", "iframe"], attrs: {all: ["dir", "lang", "title", "name", "id", "class", "style", "rel"], a: ["href", "target"], area: ["href", "shape", "alt", "coords"], blockquote: ["cite"], col: ["span"], colgroup: ["span"], del: ["cite", "datetime"], img: ["align", "alt", "height", "src", "width", "usemap"], ins: ["cite", "datetime"], label: ["for"], ol: ["start", "reversed", "type"], q: ["cite"], table: ["summary"], td: ["abbr", "axis", "colspan", "rowspan"], th: ["abbr", "axis", "colspan", "rowspan", "scope"], time: ["datetime", "pubdate"], ul: ["type"], form: ["action", "method", "enctype", "accept-charset", "accept"], button: ["autofocus", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "type", "value"], input: ["accept", "alt", "autocomplete", "autofocus", "checked", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "list", "max", "maxlength", "min", "multiple", "pattern", "placeholder", "readonly", "required", "src", "step", "type", "value"], textarea: ["autofocus", "disabled", "form", "maxlength", "placeholder", "readonly", "required", "wrap"], select: ["autofocus", "disabled", "form", "multiple", "required"], option: ["disabled", "abel", "selected", "value"], optgroup: ["disabled", "label"], fieldset: ["disabled", "form"], command: ["type", "label", "icon", "disabled", "checked", "radiogroup"], menu: ["type", "label"], video: ["src", "poster", "preload", "autoplay", "loop", "controls", "width", "height"], audio: ["src", "preload", "autoplay", "loop", "controls"], source: ["src", "type", "media"], iframe: ["width", "height", "frameborder", "scrolling", "marginheight", "marginwidth", "src", "allowfullscreen"]}, protocols: {a: {href: ["ftp", "http", "https", "mailto", "tel", "shutto", "smp"]}, area: {href: ["ftp", "http", "https", "mailto", "tel", "shutto", "smp"]}, blockquote: {cite: ["http", "https"]}, del: {cite: ["http", "https"]}, img: {src: ["http", "https"]}, ins: {cite: ["http", "https"]}, q: {cite: ["http", "https"]}, input: {src: ["http", "https"]}, command: {icon: ["http", "https"]}, video: {src: ["http", "https"], poster: ["http", "https"]}, audio: {src: ["http", "https"]}, source: {src: ["http", "https"]}}}, n = function (e) {
        var r, o;
        for (r in e)s.call(e, r) && (o = e[r], t.isArray(o) ? e[r] = t.a.toHash(o) : t.isObject(o) && n(o));
        return null
    }, n(e), i = function () {
    }, t.sanitized = function (n, o) {
        var s, a, u, c, p, l;
        if (null == o && (o = i), u = n.tagName(), "body" === u && (u = "div"), !e.tags[u])return t();
        for (a = t(document.createElement(u)), r(n, a), l = n[0].childNodes, c = 0, p = l.length; p > c; c++)switch (s = l[c], s.nodeType) {
            case 1:
                t.sanitized(t(s), o).appendTo(a);
                break;
            case 3:
                a[0].appendChild(document.createTextNode(s.nodeValue))
        }
        return o(n, a), a
    }, r = function (t, n) {
        var r, i, s, a, u, c, p, l, h, d, f, m;
        for (p = t.tagName(), r = e.attrs.all, l = e.attrs[p] || {}, u = e.protocols[p] || {}, m = t[0].attributes, d = 0, f = m.length; f > d; d++)if (i = m[d], i && (s = i.name.toLowerCase(), r[s] || l[s] || 0 === s.indexOf("data-"))) {
            if (h = i.value, (c = u[s]) && (a = o(h), a && !c[a]))continue;
            n.attr(s, h)
        }
        return null
    }, o = function (t) {
        var e;
        return(e = t.match(/^([a-z][a-z0-9+\.\-]*):/i)) ? e[1].toLowerCase() : ""
    }
}.call(this), function () {
    var t, e;
    t = window.$shutto || window.$, e = {t: function (t) {
        return this.translates[this.locale][t] || t
    }, translates: {ja: {"menu.close": "閉じる", "form.empty": "このフィールドを入力してください。", "form.error": "フォームの入力内容にエラーがあります。"}, en: {"menu.close": "Close", "form.empty": "Please enter a value.", "form.error": "A required field was not filled."}, id: {"menu.close": "Tutup", "form.empty": "Please enter a value.", "form.error": "A required field was not filled."}}}, e.locale = function () {
        var t, n;
        return t = (navigator.language || "").slice(0, 2).toLowerCase(), "en" === t && (n = (navigator.userAgent || "").match(/android[^;]*;[^;]*?(\w{2})-(\w{2})[^;]*;/i)) && (t = n[1]), e.translates[t] ? t : "en"
    }(), t.I18n = e
}.call(this), function () {
    var t, e = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t)return e;
        return-1
    };
    t = window.$shutto || window.$, t.browser.touch = !!(e.call(window, "ontouchstart") >= 0) || !!(e.call(window, "onmsgesturechange") >= 0), function () {
        var e, n, r, o, i, s;
        return i = {mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend"}, e = function () {
            function t(t) {
                this.event = t
            }

            return t.prototype.preventDefault = function () {
                return this.event.preventDefault()
            }, t.prototype.stopPropagation = function () {
                return this.event.stopPropagation()
            }, t
        }(), Object.defineProperties(e.prototype, {pageX: {get: function () {
            return this.event.changedTouches[0].pageX
        }}, pageY: {get: function () {
            return this.event.changedTouches[0].pageY
        }}, target: {get: function () {
            return this.event.targetTouches[0]
        }}, button: {get: function () {
            return 0
        }}}), r = {}, n = function (t, n) {
            var o, i = this;
            return o = function (t) {
                return n.call(i, new e(t))
            }, (r[t] || (r[t] = [])).push([o, n]), this.bind(t, o)
        }, s = function (t, e) {
            var n, o, i, s, a, u, c;
            for (u = r[t] || [], i = s = 0, a = u.length; a > s; i = ++s)if (c = u[i], o = c[0], n = c[1], e === n)return this.unbind(t, o), r[t].splice(i, 1), void 0;
            return this.unbind(t, e)
        }, o = function (e, n, r) {
            var o, i, s;
            if (t.isObject(e)) {
                s = [];
                for (i in e)o = e[i], s.push(r(i, o));
                return s
            }
            return r(e, n)
        }, t.fn.bindWithTouch = t.browser.touch ? function (t, e) {
            var r = this;
            return o(t, e, function (t, e) {
                var o;
                return(o = i[t]) ? n.call(r, o, e) : r.bind(t, e)
            })
        } : t.fn.bind, t.fn.unbindWithTouch = t.browser.touch ? function (t, e) {
            var n = this;
            return o(t, e, function (t, e) {
                var r;
                return(r = i[t]) ? s.call(n, r, e) : n.unbind(t, e)
            })
        } : t.fn.unbind
    }()
}.call(this), URI.prototype.toString = function () {
    var t = "";
    return this.scheme && (t += this.scheme + ":"), this.authority && (t += "//" + this.authority), this.path && (t += this.path), this.query && (t += "?" + this.query), this.fragment && (t += "#" + this.fragment), t
}, function () {
    function t(t, e) {
        var n = /^(.*)\//;
        return t.authority && !t.path ? "/" + e : t.path.match(n)[0] + e
    }

    function e(t) {
        if (!t)return"";
        var e = t.replace(/\/\.\//g, "/");
        for (e = e.replace(/\/\.$/, "/"); e.match(n);)e = e.replace(n, "/");
        for (e = e.replace(/\/([^\/]*)\/\.\.$/, "/"); e.match(/\/\.\.\//);)e = e.replace(/\/\.\.\//, "/");
        return e
    }

    var n = /\/((?!\.\.\/)[^\/]*)\/\.\.\//;
    URI.prototype.resolve = function (n) {
        var r = new URI;
        return this.scheme ? (r.scheme = this.scheme, r.authority = this.authority, r.path = e(this.path), r.query = this.query) : (this.authority ? (r.authority = this.authority, r.path = e(this.path), r.query = this.query) : (this.path ? ("/" === this.path.charAt(0) ? r.path = e(this.path) : (r.path = t(n, this.path), r.path = e(r.path)), r.query = this.query) : (r.path = n.path, r.query = this.query ? this.query : n.query), r.authority = n.authority), r.scheme = n.scheme), r.fragment = this.fragment, r
    }
}(), function () {
    var t, e, n, r, o, i, s, a, u, c, p, l, h, d, f, m, g, y, v, b, x, w, k, C, S, I, z, T, P, E, L, N, M, D, A, O, R, $, j, V, B, H, q, U, F, G, X, Y, Z, W, J, K, Q, te, ee, ne, re, oe, ie, se, ae, ue, ce, pe, le, he, de, fe, me, ge, ye, ve, be, xe, _e, we, ke, Ce, Se, Ie, ze, Te, Pe, Ee, Le, Ne, Me, De, Ae, Oe, Re, $e, je, Ve, Be, He, qe = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, Ue = {}.hasOwnProperty, Fe = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var r in e)Ue.call(e, r) && (t[r] = e[r]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, Ge = [].slice;
    t = window.$shutto || window.$, t.el.findBgImage = function (t) {
        var e, n;
        return t[0] ? (e = t[0].ownerDocument, n = function (t) {
            var r, o, i, s, a, u, c;
            if ((o = e.defaultView.getComputedStyle(t).getPropertyValue("background-image")) && (i = o.match(/url\([\"\']?(.+?)[\"\']?\)/)))return i[1].trim();
            for (c = t.childNodes, a = 0, u = c.length; u > a; a++)if (r = c[a], 1 === r.nodeType && (s = n(r)))return s;
            return null
        }, n(t[0])) : null
    }, b = function () {
        function e(e) {
            this.receive = qe(this.receive, this), this.iframe = t(e), this.origin = "https://" + location.host, this.callbacks = {}, t(window).bind("message", this.receive)
        }

        return e.prototype.request = function (t, e, n) {
            var r;
            return((r = this.callbacks)[t] || (r[t] = [])).push(n), this.iframe[0].contentWindow.postMessage(JSON.stringify({action: t, options: e}), this.origin)
        }, e.prototype.receive = function (e) {
            var n, r, o, i, s;
            if (e.origin === this.origin) {
                for (r = t.s.parseJSON(e.data), s = this.callbacks[r.action] || [], o = 0, i = s.length; i > o; o++)n = s[o], n(r.data);
                return delete this.callbacks[r.action]
            }
        }, e
    }(), m = function () {
        function e() {
            this.callbacks = {}
        }

        return e.prototype.bind = function (t, e, n) {
            var r, o, i, s, a, u, c, p, l, h;
            if (1 === arguments.length)for (i in t)r = t[i], t.hasOwnProperty(i) && this.bind(i, r); else for (l = t.split(","), u = 0, c = l.length; c > u; u++)t = l[u], h = t.split("."), t = h[0], o = h[1], ((s = (a = this.callbacks)[t] || (a[t] = {}))[p = o || "_"] || (s[p] = []))[n ? "unshift" : "push"](e);
            return this
        }, e.prototype.unbind = function (e, n) {
            var r, o, i, s, a, u, c, p, l, h, d, f, m;
            if (0 === arguments.length)this.callbacks = {}; else if (1 === arguments.length)if ("object" == typeof e)for (i in e)r = e[i], e.hasOwnProperty(i) && this.unbind(i, r); else for (p = e.split(","), s = 0, u = p.length; u > s; s++)e = p[s], l = e.split("."), e = l[0], o = l[1], o ? (null != (h = this.callbacks[e]) ? h[o] : void 0) && delete this.callbacks[e][o] : this.callbacks[e] && delete this.callbacks[e]; else for (d = e.split(","), a = 0, c = d.length; c > a; a++)e = d[a], f = e.split("."), e = f[0], o = f[1], o || (o = "_"), (null != (m = this.callbacks[e]) ? m[o] : void 0) && (this.callbacks[e][o] = t.a.erase(this.callbacks[e][o], n));
            return this
        }, e.prototype.trigger = function (t, e) {
            var n, r, o, i, s, a, u, c;
            if (null == e && (e = {}), c = t.split("."), t = c[0], o = c[1], e.target || (e.target = this), e.eventTarget = this, e.type || (e.type = t), null != o && (e.subtype || (e.subtype = o)), null != this.callbacks[t]) {
                if (r = this.callbacks[t]._)for (i = 0, a = r.length; a > i; i++)n = r[i], n.call(this, e);
                if (o && (r = this.callbacks[t][o]))for (s = 0, u = r.length; u > s; s++)n = r[s], n.call(this, e)
            }
            return this
        }, e
    }(), h = function () {
        function t() {
        }

        return t
    }(), d = function () {
        function t() {
        }

        return t
    }(), r = function (e) {
        function n(t) {
            null == t && (t = {}), n.__super__.constructor.apply(this, arguments), this.props = {}, S.set(this.template = t.template, this)
        }

        return Fe(n, e), n.observer = new m, n.prototype.trigger = function (t, e, r) {
            return n.__super__.trigger.apply(this, arguments), r && this.parent ? this.parent.trigger(t, e, !0) : this.constructor.observer.trigger(t, e), this
        }, n.prototype.type = function () {
            return this.constructor.type
        }, n.prototype.defaults = {fontsize: "medium", bold: !1, lineheight: "140", italic: !1, underline: !1, textshadow: !1, fontcolor: "#2f3e46", bgcolor: "#ffffff", bgimage: "", bgrepeat: "no", bgpositionx: "left", bgpositiony: "top", bgsizex: "auto", bgsizey: "auto", align: "left", "float": !1, gradation: !0, shadow: !1, imagewidth: "", imageheight: "", agentimagewidth: !1, alttext: !1, button: !0, link: "", linkdisable: !1, linkiconpos: "right", linkicon: "bk1", noborder: !1, pageicon: "", tellink: !0, hidden: "", elementid: "", elementclass: "", css: "", csspane1: "", csspane2: "", js: "", viewport: "width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no", inputname: "", inputlabel: "", inputvalue: "", inputrequired: !1, inputmultiple: !1, inputtype: "text", placeholder: "", textarea: !1, formtype: "", formsendto: "", formaction: "", formconfirm: !1, affiliatetype: "", affiliatetag: "", gridalign: "top", iconpos: "none", iconurl: "https://shutto.s3.amazonaws.com/icons/black/gi20.png", iconsizex: "27", iconsizey: "26", pane2splayout: "top", pane2tablayout: "left", pane2sidewidth: "320", pane2limit: "640"}, n.prototype.accessors = {}, n.prototype.get = function (t) {
            var e, n;
            return n = (e = this.getGetter(t)) ? e.call(this) : this.props[t], null != n ? n : this.defaults[t]
        }, n.prototype.getAll = function () {
            return this.props
        }, n.prototype.set = function (t, e) {
            var n, r, o;
            if (r = this.get(t), e === r)return this;
            try {
                return(o = this.getSetter(t)) ? o.call(this, e) : this.props[t] = e, this.trigger("prop." + t, {key: t, value: e, oldValue: r}, !0)
            } catch (i) {
                if (n = i, !(n instanceof d))throw n
            }
        }, n.prototype.getGetter = function (t) {
            var e;
            return null != (e = this.accessors[t]) ? e.get : void 0
        }, n.prototype.getSetter = function (t) {
            var e;
            return null != (e = this.accessors[t]) ? e.set : void 0
        }, n.prototype.canRemove = function () {
            return!0
        }, n.prototype.canSelect = function () {
            var t;
            return(t = this.symbolParent()) && t.locked ? !1 : !0
        }, n.prototype.getSelectTarget = function () {
            var t;
            return this.canSelect() ? this : null != (t = this.parent) ? t.getSelectTarget() : void 0
        }, n.prototype.traverse = function (t) {
            var e, n, r, o;
            if (t(this) === !1)return!1;
            if (this.children)for (o = this.children, n = 0, r = o.length; r > n; n++)if (e = o[n], e.traverse(t) === !1)return!1
        }, n.prototype.symbolParent = function () {
            var t, e;
            for (t = this; e = t.parent;) {
                if ("symbol" === e.type())return e;
                t = e
            }
            return null
        }, n.prototype.symbolParentOrSelf = function () {
            return"symbol" === this.type() ? this : this.symbolParent()
        }, n.prototype.serialize = function () {
            var e;
            return e = {type: this.type(), attrs: this.props}, "none" === e.attrs.linkiconpos && (e.attrs = t.extend({hidebuttonicon: !0}, e.attrs)), this.template && (e.generator = this.template), e
        }, n.deserialize = function (t) {
            var e, n, r, o, i;
            e = new this(t.options), t.generator && (e.template = t.generator), "string" == typeof t.attrs.float && (t.attrs.align = t.attrs.float, t.attrs.float = !0), t.attrs.hidebuttonicon && (t.attrs.linkiconpos = "none", delete t.attrs.hidebuttonicon), o = t.attrs;
            for (n in o)r = o[n], e.set(n, r), n in e.props || (null != (i = e.through) ? i[n] : void 0) || (e.props[n] = r);
            return e
        }, n.load = function (e) {
            return this[t.s.capitalize(e.type)].deserialize(e)
        }, n
    }(m), r.Line = function (e) {
        function n(t) {
            n.__super__.constructor.apply(this, arguments), this.content = t.content, this.enableStructuredButton = !!t.enableStructuredButton
        }

        return Fe(n, e), n.type = "line", n.prototype.label = function () {
            return this.content.label()
        }, n.prototype.accessors = {imagesrc: {get: function () {
            return this.content.getImage()
        }, set: function (t) {
            if (!this.content.isImage() && "selector" !== this.content.type())throw new d;
            return this.content.image = t
        }}, "float": {set: function (t) {
            return this.props.float = "string" == typeof t ? "none" !== t : t
        }}, textcontent: {get: function () {
            return this.content.getText()
        }, set: function (t) {
            if ("text" !== this.content.type())throw new d;
            return this.content.html = "", this.content.text = t
        }}, htmlcontent: {get: function () {
            return this.content.getHtml()
        }, set: function (t) {
            return this.content.html = t, this.content.text = ""
        }}, link: {get: function () {
            return this.content.getLink()
        }, set: function (t) {
            return this.content.link = t
        }}, button: {get: function () {
            return this.parent ? this.parent.get("button") : this.defaults.button
        }, set: function (t) {
            return this.parent ? this.parent.set("button", t) : void 0
        }}, selector: {get: function () {
            return this.content.selector
        }, set: function (e) {
            if (!t.a.contains(["extract", "selector"], this.content.type()))throw new d;
            return this.content.setSelector(e)
        }}, inputlabel: {get: function () {
            var t;
            return"function" == typeof(t = this.content).inputlabel ? t.inputlabel() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).inputlabel ? e.inputlabel(t) : void 0
        }}, inputvalue: {get: function () {
            var t;
            return"function" == typeof(t = this.content).inputvalue ? t.inputvalue() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).inputvalue ? e.inputvalue(t) : void 0
        }}, inputname: {get: function () {
            var t;
            return"function" == typeof(t = this.content).inputname ? t.inputname() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).inputname ? e.inputname(t) : void 0
        }}, inputrequired: {get: function () {
            var t;
            return"function" == typeof(t = this.content).inputrequired ? t.inputrequired() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).inputrequired ? e.inputrequired(t) : void 0
        }}, inputmultiple: {get: function () {
            var t;
            return"function" == typeof(t = this.content).inputmultiple ? t.inputmultiple() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).inputmultiple ? e.inputmultiple(t) : void 0
        }}, inputtype: {get: function () {
            var t;
            return"function" == typeof(t = this.content).inputtype ? t.inputtype() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).inputtype ? e.inputtype(t) : void 0
        }}, placeholder: {get: function () {
            var t;
            return"function" == typeof(t = this.content).placeholder ? t.placeholder() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).placeholder ? e.placeholder(t) : void 0
        }}, textarea: {get: function () {
            var t;
            return"function" == typeof(t = this.content).textarea ? t.textarea() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).textarea ? e.textarea(t) : void 0
        }}, selectitems: {get: function () {
            var t;
            return"function" == typeof(t = this.content).selectitems ? t.selectitems() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).selectitems ? e.selectitems(t) : void 0
        }}, maplocationmode: {get: function () {
            var t;
            return"function" == typeof(t = this.content).maplocationmode ? t.maplocationmode() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).maplocationmode ? e.maplocationmode(t) : void 0
        }}, mapquery: {get: function () {
            var t;
            return"function" == typeof(t = this.content).mapquery ? t.mapquery() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).mapquery ? e.mapquery(t) : void 0
        }}, maplat: {get: function () {
            var t;
            return"function" == typeof(t = this.content).maplat ? t.maplat() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).maplat ? e.maplat(t) : void 0
        }}, maplon: {get: function () {
            var t;
            return"function" == typeof(t = this.content).maplon ? t.maplon() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).maplon ? e.maplon(t) : void 0
        }}, mapmarker: {get: function () {
            var t;
            return"function" == typeof(t = this.content).mapmarker ? t.mapmarker() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).mapmarker ? e.mapmarker(t) : void 0
        }}, maplabel: {get: function () {
            var t;
            return"function" == typeof(t = this.content).maplabel ? t.maplabel() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).maplabel ? e.maplabel(t) : void 0
        }}, mapzoom: {get: function () {
            var t;
            return"function" == typeof(t = this.content).mapzoom ? t.mapzoom() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).mapzoom ? e.mapzoom(t) : void 0
        }}, mapapikey: {get: function () {
            var t;
            return"function" == typeof(t = this.content).mapapikey ? t.mapapikey() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).mapapikey ? e.mapapikey(t) : void 0
        }}, recommendusername: {get: function () {
            var t;
            return"function" == typeof(t = this.content).recommendusername ? t.recommendusername() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).recommendusername ? e.recommendusername(t) : void 0
        }}, recommendname: {get: function () {
            var t;
            return"function" == typeof(t = this.content).recommendname ? t.recommendname() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).recommendname ? e.recommendname(t) : void 0
        }}, recommendtag: {get: function () {
            var t;
            return"function" == typeof(t = this.content).recommendtag ? t.recommendtag() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).recommendtag ? e.recommendtag(t) : void 0
        }}, menubuttonlabel: {get: function () {
            var t;
            return"function" == typeof(t = this.content).menubuttonlabel ? t.menubuttonlabel() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).menubuttonlabel ? e.menubuttonlabel(t || "MENU") : void 0
        }}, menubuttonbgcolor: {get: function () {
            var t;
            return"function" == typeof(t = this.content).menubuttonbgcolor ? t.menubuttonbgcolor() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).menubuttonbgcolor ? e.menubuttonbgcolor(t) : void 0
        }}, menubuttongradation: {get: function () {
            var t;
            return"function" == typeof(t = this.content).menubuttongradation ? t.menubuttongradation() : void 0
        }, set: function (t) {
            var e;
            return"function" == typeof(e = this.content).menubuttongradation ? e.menubuttongradation(t) : void 0
        }}}, n.prototype.canSelect = function () {
            return n.__super__.canSelect.apply(this, arguments) ? this.parent ? "slider" === this.parent.type() ? !0 : 1 !== this.parent.children.length : !1 : !1
        }, n.prototype.serialize = function () {
            return t.extend(n.__super__.serialize.apply(this, arguments), {content: this.content.serialize(), esb: !0})
        }, n.deserialize = function (e) {
            return r.deserialize.call(this, t.extend({options: {content: r.Line.Content.load(e.content), enableStructuredButton: e.esb}}, e))
        }, n
    }(r), r.Line.Content = function () {
        function e() {
        }

        return e.prototype.getImage = function () {
            return this.image
        }, e.prototype.getText = function () {
            return this.text
        }, e.prototype.getHtml = function () {
            return this.html
        }, e.prototype.getLink = function () {
            return this.link
        }, e.prototype.isImage = function () {
            return!1
        }, e.prototype.serialize = function () {
            var e, n, r, o, i;
            for (e = {type: this.type()}, i = ["text", "html", "image", "link"], r = 0, o = i.length; o > r; r++)n = i[r], this[n] && this[n] !== this["origin" + t.s.capitalize(n)] && (e[n] = this[n]);
            return e
        }, e.deserialize = function (t) {
            var e, n, r, o, i;
            for (e = new this, i = ["text", "html", "image", "link"], r = 0, o = i.length; o > r; r++)n = i[r], t[n] && (e[n] = t[n]);
            return e
        }, e.load = function (e) {
            return this[t.s.capitalize(e.type)].deserialize(e)
        }, e
    }(), r.Line.Content.Text = function (t) {
        function e(t) {
            this.text = t
        }

        return Fe(e, t), e.prototype.type = function () {
            return"text"
        }, e.prototype.label = function () {
            return"テキスト"
        }, e
    }(r.Line.Content), r.Line.Content.Menu = function (e) {
        function n(e, n) {
            this.button = e, this.menu = n, this.button = t.extend({label: "MENU", bgcolor: "#ffffff", gradation: !0}, this.button || {}), this.menu || (this.menu = new r.Menu({template: "menu"}))
        }

        return Fe(n, e), n.prototype.type = function () {
            return"menu"
        }, n.prototype.label = function () {
            return"メニューボタン"
        }, n.prototype.getText = function () {
            return this.button.label
        }, n.prototype.menubuttonlabel = function (t) {
            return arguments.length ? this.button.label = t || "" : this.button.label
        }, n.prototype.menubuttonbgcolor = function (t) {
            return arguments.length ? this.button.bgcolor = t || "#ffffff" : this.button.bgcolor
        }, n.prototype.menubuttongradation = function (t) {
            return arguments.length ? this.button.gradation = t : this.button.gradation
        }, n.prototype.serialize = function () {
            var t;
            return t = n.__super__.serialize.apply(this, arguments), t.button = this.button, t.menu = this.menu.serialize(), t
        }, n.deserialize = function (t) {
            return new this(t.button, r.Menu.deserialize(t.menu))
        }, n
    }(r.Line.Content), r.Line.Content.Image = function (t) {
        function e(t) {
            this.image = t
        }

        return Fe(e, t), e.prototype.type = function () {
            return"image"
        }, e.prototype.label = function () {
            return"画像"
        }, e.prototype.isImage = function () {
            return!0
        }, e
    }(r.Line.Content), r.Line.Content.Map = function (e) {
        function n(t) {
            this.map = null != t ? t : {}
        }

        return Fe(n, e), n.prototype.type = function () {
            return"map"
        }, n.prototype.label = function () {
            return"マップ"
        }, n.prototype.maplocationmode = function (t) {
            return arguments.length ? this.map.locationmode = t : this.map.locationmode || "query"
        }, n.prototype.mapquery = function (t) {
            return arguments.length ? this.map.query = t : this.map.query || ""
        }, n.prototype.maplat = function (t) {
            return arguments.length ? this.map.lat = t : this.map.lat
        }, n.prototype.maplon = function (t) {
            return arguments.length ? this.map.lon = t : this.map.lon
        }, n.prototype.mapmarker = function (t) {
            return arguments.length ? this.map.marker = t : !!this.map.marker
        }, n.prototype.mapzoom = function (t) {
            return arguments.length ? this.map.zoom = t : this.map.zoom || 0
        }, n.prototype.maplabel = function (t) {
            return arguments.length ? this.map.label = t : this.map.label || ""
        }, n.prototype.mapapikey = function (t) {
            return arguments.length ? this.map.apikey = t : this.map.apikey || ""
        }, n.prototype.serialize = function () {
            return t.extend(n.__super__.serialize.apply(this, arguments), {map: this.map})
        }, n.deserialize = function (t) {
            return new this(t.map)
        }, n
    }(r.Line.Content), r.Line.Content.Recommend = function (e) {
        function n(t) {
            this.recommend = null != t ? t : {}
        }

        return Fe(n, e), n.prototype.type = function () {
            return"recommend"
        }, n.prototype.label = function () {
            return"さぶみっと！レコメンド"
        }, n.prototype.recommendusername = function (t) {
            return arguments.length ? this.recommend.username = t : this.recommend.username || ""
        }, n.prototype.recommendname = function (t) {
            return arguments.length ? this.recommend.name = t : this.recommend.name || ""
        }, n.prototype.recommendtag = function (t) {
            return arguments.length ? this.recommend.tag = t : this.recommend.tag || ""
        }, n.prototype.serialize = function () {
            return t.extend(n.__super__.serialize.apply(this, arguments), {recommend: this.recommend})
        }, n.deserialize = function (t) {
            return new this(t.recommend)
        }, n
    }(r.Line.Content), r.Line.Content.Extract = function (e) {
        function n(t, e) {
            this.source = t, this.selector = e, this.setup()
        }

        return Fe(n, e), n.prototype.type = function () {
            return"extract"
        }, n.prototype.label = function () {
            return this.isForm() ? "フォーム(抽出)" : this.text ? "テキスト(抽出)" : this.image ? "画像(抽出)" : "抽出"
        }, n.prototype.getImage = function () {
            return this.image || this.originImage
        }, n.prototype.getLink = function () {
            return this.link || this.originLink
        }, n.prototype.isImage = function () {
            return!!this.originImage
        }, n.prototype.isForm = function () {
            return!!this.form
        }, n.prototype.getText = function (t) {
            var e, n, r;
            return null == t && (t = {}), this.image ? t.alttext ? (e = "img" === this.source.tagName() ? this.source : this.source.find("img").first(), e.attr("alt") || " ") : null : (n = t.hidden) ? this.source.length ? (r = app.source.$(this.source[0].cloneNode(!0)), app.source.find(n, r).remove(), r.text()) : "" : this.text
        }, n.prototype.setSelector = function (t) {
            var e, n;
            try {
                n = app.source.find(t)
            } catch (r) {
                throw e = r, new d
            }
            return this.source = n, this.selector = t, this.setup()
        }, n.prototype.setup = function () {
            var e, n, r;
            return null == this.selector && (this.selector = app.source.selector(this.source)), t.a.contains(["button", "input", "textarea", "select"], this.source.tagName()) ? this.form = !0 : this.source.isTwitterButton() || this.source.isFacebookButton() || ("img" === this.source.tagName() && (n = this.source.attr("src")), "a" === this.source.tagName() ? (r = this.source.attr("href"), e = this.source.children(), 1 === e.length && "img" === e.tagName() && (n = e.attr("src"))) : r = this.source.enclosedLink() || this.source.find("a[href]").attr("href")), this.originImage = this.image = n, this.originLink = this.link = r, this.image ? void 0 : this.text = "iframe" === this.source.tagName() ? "iframe [" + this.source.attr("src").replace(/^\w+:\/\/([^\/]+)\/.*$/, "$1") + "]" : this.source.text()
        }, n.prototype.serialize = function () {
            var e;
            return e = t.extend(n.__super__.serialize.apply(this, arguments), {selector: this.selector}), this.alttext && (e.alttext = !0), delete e.text, e
        }, n.deserialize = function (t) {
            var e, n, r, o, i;
            for (e = new this(app.source.find(t.selector).first(), t.selector), i = ["image", "link"], r = 0, o = i.length; o > r; r++)n = i[r], t[n] && (e[n] = t[n]);
            return e
        }, n
    }(r.Line.Content), r.Line.Content.Selector = function (e) {
        function n(t, e) {
            this.selector = t, this.origin = null != e ? e : ""
        }

        return Fe(n, e), n.prototype.type = function () {
            return"selector"
        }, n.prototype.setRoot = function (t) {
            return this.root = t, this.source = app.source.find(this.selector, this.root), this.setup()
        }, n.prototype.setSelector = function (t) {
            this.selector = t
        }, n.prototype.serialize = function () {
            return t.extend(n.__super__.serialize.apply(this, arguments), {origin: this.origin})
        }, n.deserialize = function (t) {
            var e, n, r, o, i;
            for (e = new this(t.selector, t.origin || ""), i = ["image", "link"], r = 0, o = i.length; o > r; r++)n = i[r], t[n] && (e[n] = t[n]);
            return e
        }, n
    }(r.Line.Content.Extract), r.Line.Content.Input = function (e) {
        function n(t) {
            this.input = null != t ? t : {}
        }

        return Fe(n, e), n.prototype.inputlabel = function (t) {
            return arguments.length ? this.input.label = t : this.input.label || ""
        }, n.prototype.inputvalue = function (t) {
            return arguments.length ? this.input.value = t : null != this.input.value ? this.input.value : ""
        }, n.prototype.inputname = function (t) {
            return arguments.length ? this.input.name = t : this.input.name || ""
        }, n.prototype.inputrequired = function (t) {
            return arguments.length ? this.input.required = t : !!this.input.required
        }, n.prototype.inputmultiple = function (t) {
            return arguments.length ? this.input.multiple = t : !!this.input.multiple
        }, n.prototype.serialize = function () {
            return t.extend(n.__super__.serialize.apply(this, arguments), {input: this.input})
        }, n.deserialize = function (t) {
            return new this(t.input)
        }, n
    }(r.Line.Content), r.Line.Content.Textfield = function (t) {
        function e(t) {
            var e;
            this.input = null != t ? t : {}, (e = this.input).type || (e.type = "text")
        }

        return Fe(e, t), e.prototype.type = function () {
            return"textfield"
        }, e.prototype.label = function () {
            return"テキスト入力"
        }, e.prototype.placeholder = function (t) {
            return arguments.length ? this.input.placeholder = t : this.input.placeholder || ""
        }, e.prototype.textarea = function (t) {
            return arguments.length ? this.input.textarea = t : !!this.input.textarea
        }, e.prototype.inputtype = function (t) {
            return arguments.length ? this.input.type = t : this.input.type || "text"
        }, e
    }(r.Line.Content.Input), r.Line.Content.Checkbox = function (t) {
        function e(t) {
            var e;
            this.input = null != t ? t : {}, (e = this.input).label || (e.label = "チェック項目")
        }

        return Fe(e, t), e.prototype.type = function () {
            return"checkbox"
        }, e.prototype.label = function () {
            return"チェックボックス"
        }, e
    }(r.Line.Content.Input), r.Line.Content.Button = function (t) {
        function e(t) {
            var e;
            this.input = null != t ? t : {}, (e = this.input).label || (e.label = "送信")
        }

        return Fe(e, t), e.prototype.type = function () {
            return"button"
        }, e.prototype.label = function () {
            return"ボタン"
        }, e
    }(r.Line.Content.Input), r.Line.Content.Select = function (t) {
        function e(t) {
            var e;
            this.input = null != t ? t : {}, (e = this.input).items || (e.items = "選択してください\n項目1\n項目2\n")
        }

        return Fe(e, t), e.prototype.type = function () {
            return"select"
        }, e.prototype.label = function () {
            return"セレクト"
        }, e.prototype.selectitems = function (t) {
            return arguments.length >= 1 ? this.input.items = t : this.input.items
        }, e
    }(r.Line.Content.Input), r.Node = function (e) {
        function n(t) {
            null == t && (t = {}), this.children = [], n.__super__.constructor.apply(this, arguments), t.children && this.addChild(t.children)
        }

        return Fe(n, e), n.prototype.addChild = function (t, e) {
            return this.insertChild(t, this.children.length, e)
        }, n.prototype.insertChild = function (e, n, r) {
            var o, i, s, a, u, c, p, l, h;
            if (o = t.a(e), !o.length)return[];
            for (o = t.a(this.validateInsertedChildren(o)), a = 0, c = o.length; c > a; a++)e = o[a], e.parent && e.parent.removeChild(e);
            for (n > this.children.length && (n = this.children.length), [].splice.apply(this.children, [n, 0].concat(o)), u = 0, p = o.length; p > u; u++)if (e = o[u], e.parent = this, e.trigger("dom.insert"), !r && "menu" !== (null != (l = e.content) ? l.type() : void 0)) {
                h = this.props;
                for (i in h)s = h[i], this.keep[i] || e.set(i, s)
            }
            return this.trigger("child.insert", {children: o, index: n}, !0), o
        }, n.prototype.validateInsertedChildren = function (t) {
            var e, n, o, i, s;
            if (this.symbolParentOrSelf() && this.symbolDescendant(t))throw new h;
            if ("line" === t[0].type())return n = new r.Group, n.addChild(t), n;
            if (r.skipDammySymbol) {
                for (s = [], o = 0, i = t.length; i > o; o++)e = t[o], "symbol" === e.type() && e.isDammy() || s.push(e);
                return s
            }
            return t
        }, n.prototype.removeChild = function (e) {
            var n, r, o, i, s, a, u;
            for (i = [], u = r = t.a(e), s = 0, a = u.length; a > s; s++)n = u[s], -1 !== (o = this.children.indexOf(n)) && (this.removeChildAtIndex(n, o), delete n.parent, n.trigger("dom.remove"), i.push({index: o, child: n}));
            return this.trigger("child.remove", {children: r, removals: t.a.reverse(i)}, !0), r
        }, n.prototype.removeChildAtIndex = function (t, e) {
            return this.children.splice(e, 1)
        }, n.prototype.symbolDescendant = function (t) {
            var e, n, r, o, i;
            for (r = 0, o = t.length; o > r; r++) {
                if (e = t[r], "symbol" === e.type())return e;
                if ((null != (i = e.children) ? i.length : void 0) && "group" !== e.type() && (n = this.symbolDescendant(e.children)))return n
            }
            return null
        }, n.prototype.keep = t.a.toHash(["css", "csspane1", "csspane2", "js", "jsbefore", "elementid", "elementclass", "margintop", "marginright", "marginbottom", "marginleft", "paddingtop", "paddingright", "paddingbottom", "paddingleft", "round", "shadow", "linkiconpos", "linkicon", "blanklink"]), n.prototype.through = t.a.toHash(["imagewidth", "imageheight", "float", "textcontent", "htmlcontent", "imagesrc", "structured", "enableevents", "istyle", "selector", "linkdisable", "hidden", "inputlabel", "inputname", "inputvalue", "inputtype", "inputrequired", "inputmultiple", "placeholder", "textarea", "selectitems", "alttext", "maplocationmode", "mapquery", "maplat", "maplon", "mapmarker", "maplabel", "mapzoom", "mapapikey", "menubuttonlabel", "menubuttonbgcolor", "menubuttongradation", "recommendname", "recommendusername", "recommendtag"]), n.prototype.unsaved = t.a.toHash(["fontsize", "lineheight", "bold", "italic", "underline", "textshadow", "fontcolor", "align"]), n.prototype.getGetter = function (e) {
            var r;
            return null != (r = n.__super__.getGetter.apply(this, arguments)) ? r : function () {
                return!this.children.length || this.keep[e] ? null != this.props[e] ? this.props[e] : this.defaults[e] : t.a.sameValue(this.children, function (t) {
                    return t.get(e)
                })
            }
        }, n.prototype.getSetter = function (t) {
            var e;
            return null != (e = n.__super__.getSetter.apply(this, arguments)) ? e : function (e) {
                var n, r, o, i;
                if (this.through[t] || (this.props[t] = e), !this.keep[t])for (i = this.children, r = 0, o = i.length; o > r; r++)n = i[r], n.set(t, e)
            }
        }, n.prototype.serialize = function () {
            var e, r, o;
            r = t.extend(n.__super__.serialize.apply(this, arguments), {children: function () {
                var t, n, r, o;
                for (r = this.children, o = [], t = 0, n = r.length; n > t; t++)e = r[t], "menu" !== e.type() && o.push(e.serialize());
                return o
            }.call(this)});
            for (o in r.attrs)this.unsaved[o] && delete r.attrs[o];
            return r
        }, n.deserialize = function (e) {
            var n, o;
            return o = r.deserialize.call(this, e), o.addChild(t.a.flatten(function () {
                var t, o, i, s;
                for (i = e.children, s = [], t = 0, o = i.length; o > t; t++)n = i[t], s.push(r.load(n));
                return s
            }()), !0), o
        }, n
    }(r), r.Page = function (e) {
        function n() {
            this.onMenuRemove = qe(this.onMenuRemove, this), this.onMenuInsert = qe(this.onMenuInsert, this), this.onChangeChild = qe(this.onChangeChild, this), n.__super__.constructor.apply(this, arguments), this.bind("child", this.onChangeChild)
        }

        return Fe(n, e), n.type = "page", n.prototype.canSelect = function () {
            return!1
        }, n.prototype.label = function () {
            return"ページ"
        }, n.prototype.defaults = t.extend({}, r.prototype.defaults, {gradation: !1}), n.prototype.keep = t.extend(t.a.toHash(["pageicon", "tellink", "viewport", "gradation", "bgcolor", "bgimage", "bgrepeat", "bgpositionx", "bgpositiony", "bgsizex", "bgsizey", "shadow"]), r.Node.prototype.keep), n.prototype.onChangeChild = function (e) {
            var n, r, o, i, s, a;
            if (e.type = "child") {
                for (s = this.findMenuDescendants(e.children), a = [], r = 0, o = s.length; o > r; r++)n = s[r], a.push("function" == typeof this[i = "onMenu" + t.s.capitalize(e.subtype)] ? this[i](n) : void 0);
                return a
            }
        }, n.prototype.findMenuDescendants = function (t) {
            var e, n, r, o, i;
            for (n = [], i = t || [], r = 0, o = i.length; o > r; r++)e = i[r], "line" === e.type() ? "menu" === e.content.type() && n.push(e) : n = n.concat(this.findMenuDescendants(e.children));
            return n
        }, n.prototype.onMenuInsert = function (t) {
            var e, n;
            return n = t.content.menu, n.parent ? void 0 : (e = this.menuInsertion(t)) ? e.parent.insertChild(n, e.index, !0) : void 0
        }, n.prototype.onMenuRemove = function (t) {
            var e;
            return e = t.content.menu, e.parent ? e.parent.removeChild(e) : void 0
        }, n.prototype.menuInsertion = function (t) {
            return t.parent ? t.parent === this ? {parent: this, index: this.children.indexOf(t) + 1} : "symbol" === t.parent.type() ? {parent: t.parent, index: t.parent.children.indexOf(t) + 1} : this.menuInsertion(t.parent) : null
        }, n
    }(r.Node), r.Group = function (e) {
        function n() {
            return $ = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.type = "group", n.prototype.validateInsertedChildren = function (e, n) {
            var r, o, i;
            if (n && this.get("agentimagewidth"))throw new h;
            return t.a.flatten(function () {
                var t, s, a, u, c, p;
                for (p = [], t = 0, a = e.length; a > t; t++)switch (o = e[t], o.type()) {
                    case"line":
                        p.push(o);
                        break;
                    case"group":
                        if (!n && (i = o.get("link")))for (c = o.children, s = 0, u = c.length; u > s; s++)r = c[s], r.set("link", i);
                        p.push(o.children);
                        break;
                    default:
                        throw new h
                }
                return p
            }())
        }, n.prototype.keep = t.extend(t.a.toHash(["gradation", "bgcolor", "bgimage", "bgrepeat", "bgpositionx", "bgpositiony", "bgsizex", "bgsizey", "agentimagewidth", "link", "button", "noborder", "shadow", "iconpos", "iconurl", "iconsizex", "iconsizey"]), r.Node.prototype.keep), n.prototype.label = function () {
            return"ブロック"
        }, n.prototype.insertChild = function (e) {
            var r, o, i, s, a, u, c;
            if (i = !!this.children.length, r = n.__super__.insertChild.apply(this, arguments), !i && "grid" === (null != (u = this.parent) ? u.type() : void 0) && (o = t.a(e)[0], "group" === (null != o ? o.type() : void 0))) {
                c = o.props;
                for (s in c)a = c[s], this.set(s, a)
            }
            return r
        }, n.prototype.replaceChild = function (e, n) {
            var r, o, i, s, a, u, c;
            for (r = t.a(this.validateInsertedChildren(t.a(e))), a = 0, u = r.length; u > a; a++) {
                e = r[a], c = n.props;
                for (i in c)s = c[i], e.set(i, s)
            }
            return o = this.children.indexOf(n), this.removeChild(n), this.insertChild(r, o, !0)
        }, n.deserialize = function (t) {
            var e, n, o, i, s;
            for (e = r.Node.deserialize.call(this, t), s = e.children, o = 0, i = s.length; i > o; o++)if (n = s[o], n.get("structured") && !n.enableStructuredButton) {
                e.set("button", !1);
                break
            }
            return e
        }, n
    }(r.Node), r.Box = function (t) {
        function e() {
            return j = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.type = "box", e.prototype.label = function () {
            return"ボックス"
        }, e
    }(r.Node), r.Menu = function (e) {
        function n() {
            return W = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.type = "menu", n.prototype.label = function () {
            return"メニュー"
        }, n.prototype.canRemove = function () {
            return!1
        }, n.prototype.defaults = t.extend({menuclose: !0, menuclosefontcolor: "#2f3e46", menuclosefontsize: "small", menucloselineheight: "140", menuclosebgcolor: "#ffffff", menuclosegradation: !0, menucloseborder: !0}, r.Node.prototype.defaults), n.prototype.keep = t.extend(t.a.toHash(["menuclose", "menuclosefontcolor", "menuclosefontsize", "menucloselineheight", "menuclosebgcolor", "menuclosegradation", "menucloseborder"]), r.Node.prototype.keep), n.prototype.unsaved = t.extend(t.extend({}, r.Node.prototype.unsaved), {fontcolor: !1}), n.prototype.accessors = {fontcolor: {get: function () {
            return this.props.fontcolor || this.defaults.fontcolor
        }, set: function (t) {
            var e, n, r, o, i;
            for (this.props.fontcolor = t, o = this.children, i = [], n = 0, r = o.length; r > n; n++)e = o[n], i.push(e.set("fontcolor", t));
            return i
        }}, bgcolor: {get: function () {
            return this.props.bgcolor || this.defaults.bgcolor
        }, set: function (t) {
            var e, n, r, o, i;
            for (this.props.bgcolor = t, o = this.children, i = [], n = 0, r = o.length; r > n; n++)e = o[n], i.push(e.set("bgcolor", t));
            return i
        }}}, n.prototype.findButton = function () {
            var t, e = this;
            return t = null, app.page.traverse(function (n) {
                var r;
                return(null != (r = n.content) ? r.menu : void 0) === e ? (t = n, !1) : void 0
            }), t
        }, n
    }(r.Node), r.Grid = function (e) {
        function n(t) {
            var e, r, o, i, s, a;
            for (null == t && (t = {}), n.__super__.constructor.apply(this, arguments), this.sizeX = t.sizeX || 3, this.sizeY = t.sizeY || 2, r = o = 0, s = this.sizeY; s >= 0 ? s > o : o > s; r = s >= 0 ? ++o : --o)for (e = i = 0, a = this.sizeX; a >= 0 ? a > i : i > a; e = a >= 0 ? ++i : --i)this.addChild(this.createCell())
        }

        return Fe(n, e), n.type = "grid", n.prototype.label = function () {
            return"セル"
        }, n.prototype.createCell = function () {
            return new r.Group({template: "cell"})
        }, n.prototype.cell = function (t, e) {
            return this.children[e * this.sizeX + t]
        }, n.prototype.removeChildAtIndex = function (t, e) {
            return n.__super__.removeChildAtIndex.apply(this, arguments), this.sizeChanging ? void 0 : this.insertChild(this.createCell(), e)
        }, n.prototype.insertChild = function (t) {
            var e, r, o;
            for (e = n.__super__.insertChild.apply(this, arguments), r = 0, o = e.length; o > r; r++)t = e[r], "linkiconpos"in t.props || t.set("linkiconpos", "none");
            return e
        }, n.prototype.keep = t.extend(t.extend({}, r.Node.prototype.keep), {round: !1, gridalign: !0}), n.prototype.through = t.extend(t.a.toHash(["bgcolor", "bgimage", "bgrepeat", "bgpositionx", "bgpositiony", "bgsizex", "bgsizey"]), r.Node.prototype.through), n.prototype.accessors = {gridsizex: {get: function () {
            return this.sizeX
        }, set: function (e) {
            var n, r, o, i;
            if (this.sizeChanging = !0, e < this.sizeX)this.removeChild(t.a.flatten(function () {
                var t, n, o;
                for (o = [], r = t = 0, n = this.sizeY; n >= 0 ? n > t : t > n; r = n >= 0 ? ++t : --t)o.push(this.children.slice(r * this.sizeX + e, (r + 1) * this.sizeX));
                return o
            }.call(this))); else if (e > this.sizeX)for (r = o = i = this.sizeY; 0 >= i ? 0 > o : o > 0; r = 0 >= i ? ++o : --o)this.insertChild(function () {
                var t, r, o;
                for (o = [], n = t = r = this.sizeX; e >= r ? e > t : t > e; n = e >= r ? ++t : --t)o.push(this.createCell());
                return o
            }.call(this), r * this.sizeX);
            return this.sizeChanging = !1, this.sizeX = e
        }}, gridsizey: {get: function () {
            return this.sizeY
        }, set: function (e) {
            var n, r, o, i;
            if (this.sizeChanging = !0, e < this.sizeY)this.removeChild(t.a.flatten(function () {
                var t, n, o;
                for (o = [], r = t = e, n = this.sizeY; n >= e ? n > t : t > n; r = n >= e ? ++t : --t)o.push(this.children.slice(r * this.sizeX, (r + 1) * this.sizeX));
                return o
            }.call(this))); else if (e > this.sizeY)for (r = o = i = this.sizeY; e >= i ? e > o : o > e; r = e >= i ? ++o : --o)this.insertChild(function () {
                var t, e, r;
                for (r = [], n = t = 0, e = this.sizeX; e >= 0 ? e > t : t > e; n = e >= 0 ? ++t : --t)r.push(this.createCell());
                return r
            }.call(this), r * this.sizeX);
            return this.sizeChanging = !1, this.sizeY = e
        }}}, n.prototype.serialize = function () {
            return t.extend(n.__super__.serialize.apply(this, arguments), {size_x: this.sizeX, size_y: this.sizeY})
        }, n.deserialize = function (e) {
            var n, o, i;
            return i = r.deserialize.call(this, t.extend({options: {sizeX: e.size_x, sizeY: e.size_y}}, e)), i.sizeChanging = !0, i.removeChild(i.children.slice(0)), i.addChild(function () {
                var t, i, s, a;
                for (s = e.children, a = [], t = 0, i = s.length; i > t; t++)o = s[t], n = r.load(o), n.props.linkiconpos = o.attrs.linkiconpos || (o.attrs.hidebuttonicon === !1 ? "right" : "none"), a.push(n);
                return a
            }(), !0), i.sizeChanging = !1, i
        }, n
    }(r.Node), r.Tab = function (e) {
        function n(t) {
            var e, o, i, s, a;
            for (null == t && (t = {}), n.__super__.constructor.apply(this, arguments), this.currentIndex = 0, this.numTabs = t.numTabs || 3, e = o = 0, s = this.numTabs; s >= 0 ? s > o : o > s; e = s >= 0 ? ++o : --o)this.addChild(new r.Tab.Tab({index: e, template: "tablabel"}));
            for (e = i = 0, a = this.numTabs; a >= 0 ? a > i : i > a; e = a >= 0 ? ++i : --i)this.addChild(new r.Tab.Pane({index: e, template: "tabpane"}))
        }

        return Fe(n, e), n.type = "tab", n.prototype.label = function () {
            return"タブ"
        }, n.prototype.tab = function (t) {
            return this.children[t]
        }, n.prototype.pane = function (t) {
            return this.children[this.numTabs + t]
        }, n.prototype.selectTab = function (t) {
            return this.currentIndex = t, this.trigger("selecttab", {index: t})
        }, n.prototype.keep = t.extend(t.a.toHash(["gradation", "bgcolor", "shadow"]), r.Node.prototype.keep), n.prototype.accessors = {tabcount: {get: function () {
            return this.numTabs
        }, set: function (t) {
            var e;
            return t < this.numTabs ? (this.removeChild(this.children.slice(this.numTabs + t, this.children.length)), this.removeChild(this.children.slice(t, this.numTabs)), this.currentIndex >= t && this.selectTab(t - 1)) : t > this.numTabs && (this.addChild(function () {
                var n, o, i;
                for (i = [], e = n = o = this.numTabs; t >= o ? t > n : n > t; e = t >= o ? ++n : --n)i.push(new r.Tab.Pane({index: e, template: "tabpane"}));
                return i
            }.call(this)), this.insertChild(function () {
                var n, o, i;
                for (i = [], e = n = o = this.numTabs; t >= o ? t > n : n > t; e = t >= o ? ++n : --n)i.push(new r.Tab.Tab({index: e, template: "tablabel"}));
                return i
            }.call(this), this.numTabs)), this.numTabs = t
        }}}, n.prototype.serialize = function () {
            var e;
            return t.extend(r.prototype.serialize.call(this), {tabs: function () {
                var t, n, r;
                for (r = [], e = t = 0, n = this.numTabs; n >= 0 ? n > t : t > n; e = n >= 0 ? ++t : --t)r.push(this.tab(e).serialize());
                return r
            }.call(this), panes: function () {
                var t, n, r;
                for (r = [], e = t = 0, n = this.numTabs; n >= 0 ? n > t : t > n; e = n >= 0 ? ++t : --t)r.push(this.pane(e).serialize());
                return r
            }.call(this)})
        }, n.deserialize = function (e) {
            var n, o, i;
            return o = r.deserialize.call(this, t.extend({options: {numTabs: e.tabs.length}}, e)), o.removeChild(o.children.slice(0)), o.addChild(function () {
                var o, s, a, u;
                for (a = e.tabs, u = [], i = o = 0, s = a.length; s > o; i = ++o)n = a[i], u.push(r.Tab.Tab.deserialize(t.extend({index: i}, n)));
                return u
            }(), !0), o.addChild(function () {
                var o, s, a, u;
                for (a = e.panes, u = [], i = o = 0, s = a.length; s > o; i = ++o)n = a[i], u.push(r.Tab.Pane.deserialize(t.extend({index: i}, n)));
                return u
            }(), !0), o
        }, n
    }(r.Node), r.Tab.Tab = function (e) {
        function n(t) {
            null == t && (t = {}), n.__super__.constructor.apply(this, arguments), this.index = t.index, this.text = t.text || "タブ" + (this.index + 1)
        }

        return Fe(n, e), n.type = "tab-tab", n.prototype.label = function () {
            return"ラベル"
        }, n.prototype.defaults = t.extend({}, r.prototype.defaults, {fontsize: "large"}), n.prototype.accessors = {gradation: {get: function () {
            var t;
            return null != (t = this.parent) ? t.get("gradation") : void 0
        }, set: function (t) {
            var e;
            return null != (e = this.parent) ? e.set("gradation", t) : void 0
        }}, bgcolor: {get: function () {
            var t;
            return null != (t = this.parent) ? t.get("bgcolor") : void 0
        }, set: function (t) {
            var e;
            return null != (e = this.parent) ? e.set("bgcolor", t) : void 0
        }}, tablabel: {get: function () {
            return this.text
        }, set: function (t) {
            return this.text = t
        }}}, n.prototype.canRemove = function () {
            return!1
        }, n.prototype.serialize = function () {
            return t.extend(n.__super__.serialize.apply(this, arguments), {type: "tablabel", label: this.text})
        }, n.deserialize = function (e) {
            return r.deserialize.call(this, t.extend({options: {index: e.index, text: e.label}}, e))
        }, n
    }(r), r.Tab.Pane = function (e) {
        function n(t) {
            null == t && (t = {}), n.__super__.constructor.apply(this, arguments), this.index = t.index
        }

        return Fe(n, e), n.type = "tab-pane", n.prototype.canRemove = function () {
            return!1
        }, n.prototype.canSelect = function () {
            return!1
        }, n.prototype.serialize = function () {
            return t.extend(n.__super__.serialize.apply(this, arguments), {type: "tabpane"})
        }, n.deserialize = function (e) {
            return r.Node.deserialize.call(this, t.extend({options: {index: e.index}}, e))
        }, n
    }(r.Node), r.Accordion = function (e) {
        function n(t) {
            var e, o, i;
            for (null == t && (t = {}), n.__super__.constructor.apply(this, arguments), this.size = t.size || 3, e = o = 0, i = this.size; i >= 0 ? i > o : o > i; e = i >= 0 ? ++o : --o)this.addChild(new r.Accordion.Header({template: "accordionheader", text: "ラベル" + (e + 1)})), this.addChild(new r.Accordion.Pane({template: "accordionpane"}))
        }

        return Fe(n, e), n.type = "accordion", n.prototype.keep = t.extend(t.a.toHash(["accordionanimate", "accordioniconpos", "accordionicon"]), r.Node.prototype.keep), n.prototype.label = function () {
            return"アコーディオン"
        }, n.prototype.defaults = t.extend({}, r.Node.prototype.defaults, {accordioniconpos: "left", accordionicon: "bk1"}), n.prototype.header = function (t) {
            return this.children[2 * t]
        }, n.prototype.pane = function (t) {
            return this.children[2 * t + 1]
        }, n.prototype.accessors = {accordionsize: {get: function () {
            return this.size
        }, set: function (t) {
            var e, n, o;
            if (t < this.size)this.removeChild(this.children.slice(2 * t, this.children.length)); else if (t > this.size)for (e = n = o = this.size; t >= o ? t > n : n > t; e = t >= o ? ++n : --n)this.addChild(new r.Accordion.Header({template: "accordionheader", text: "ラベル" + (e + 1)})), this.addChild(new r.Accordion.Pane({template: "accordionpane"}));
            return this.size = t
        }}}, n.prototype.serialize = function () {
            var e;
            return t.extend(r.prototype.serialize.call(this), {headers: function () {
                var t, n, r;
                for (r = [], e = t = 0, n = this.size; n >= 0 ? n > t : t > n; e = n >= 0 ? ++t : --t)r.push(this.header(e).serialize());
                return r
            }.call(this), panes: function () {
                var t, n, r;
                for (r = [], e = t = 0, n = this.size; n >= 0 ? n > t : t > n; e = n >= 0 ? ++t : --t)r.push(this.pane(e).serialize());
                return r
            }.call(this)})
        }, n.deserialize = function (e) {
            var n, o, i, s;
            for (n = r.deserialize.call(this, t.extend({options: {size: e.headers.length}}, e)), n.removeChild(n.children.slice(0)), o = i = 0, s = n.size; s >= 0 ? s > i : i > s; o = s >= 0 ? ++i : --i)n.addChild(r.Accordion.Header.deserialize(e.headers[o]), !0), n.addChild(r.Accordion.Pane.deserialize(e.panes[o]), !0);
            return n
        }, n
    }(r.Node), r.Accordion.Header = function (e) {
        function n(t) {
            null == t && (t = {}), t.text && (t.children = new r.Line({content: new r.Line.Content.Text(t.text || "ラベル")})), n.__super__.constructor.call(this, t)
        }

        return Fe(n, e), n.type = "accordion-header", n.prototype.label = function () {
            return"ラベル"
        }, n.prototype.canRemove = function () {
            return!1
        }, n.prototype.index = function () {
            return Math.floor(this.parent.children.indexOf(this) / 2)
        }, n.prototype.insertChild = function (t, e, r) {
            var o, i, s;
            if (o = n.__super__.insertChild.apply(this, arguments), !r)for (i = 0, s = o.length; s > i; i++)t = o[i], t.set("linkdisable", !0), t.set("button", !1);
            return o
        }, n.prototype.serialize = function () {
            return t.extend(n.__super__.serialize.apply(this, arguments), {type: "accordionheader"})
        }, n.deserialize = function (e) {
            return r.Group.deserialize.call(this, t.extend({options: {text: e.label}, children: []}, e))
        }, n
    }(r.Group), r.Accordion.Pane = function (e) {
        function n() {
            return ae = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.type = "accordion-pane", n.prototype.canRemove = function () {
            return!1
        }, n.prototype.canSelect = function () {
            return!1
        }, n.prototype.through = t.extend(t.a.toHash(["gradation", "bgcolor", "fontcolor", "fontsize", "lineheight", "bold", "italic", "underline", "textshadow"]), r.Node.prototype.through), n.prototype.serialize = function () {
            return t.extend(n.__super__.serialize.apply(this, arguments), {type: "accordionpane"})
        }, n.deserialize = function (t) {
            return r.Node.deserialize.call(this, t)
        }, n
    }(r.Node), r.Repeat = function (e) {
        function n() {
            return ve = n.__super__.constructor.apply(this, arguments)
        }

        var o, i;
        return Fe(n, e), n.deserialize = function (t) {
            var e, n, r, s, a;
            for (s = i(app.source.find(t.selector), t.range || ""), a = [], n = 0, r = s.length; r > n; n++)e = s[n], a.push(o(t.template, e));
            return a
        }, i = function (t, e) {
            var n;
            return(n = e.match(/^(\d+)-(\d+)$/)) ? t.slice(parseInt(n[1], 10) - 1, parseInt(n[2], 10)) : (n = e.match(/^(\d+)$/)) ? t.slice(parseInt(n[1], 10) - 1, parseInt(n[1], 10)) : (n = e.match(/^(\d+)-$/)) ? t.slice(parseInt(n[1], 10) - 1) : (n = e.match(/^-(\d+)$/)) ? t.slice(0, parseInt(n[1], 10)) : t
        }, o = function (e, n) {
            var o, i, s;
            return n = app.source.$(n), s = t.extend({}, e), s.children = function () {
                var e, r, a, u;
                for (a = s.children, u = [], e = 0, r = a.length; r > e; e++)i = a[e], "selector" === i.content.type ? (o = i.content.selector ? app.source.find(i.content.selector, n) : n, u.push(t.extend(t.extend({}, i), {content: {type: "extract", selector: o.length ? app.source.selector(o) : "empty"}}))) : u.push(i);
                return u
            }(), r.Group.deserialize(s)
        }, n
    }(r), r.Repeat2 = function (e) {
        function n(t) {
            var e = this;
            null == t && (t = {}), n.__super__.constructor.apply(this, arguments), this.reversible = !!t.reversible, this.root = t.root, this.start = t.start, this.repeat = t.repeat, this.mock = t.mock, this.range = t.range || "", this.targetIndex = t.targetIndex, this.createUnits(), this.mock.bind("prop.selector", function (t) {
                return t.target.content ? e.refresh() : void 0
            })
        }

        return Fe(n, e), n.type = "repeat2", n.prototype.label = function () {
            return"リピート"
        }, n.prototype.accessors = {repeatrange: {get: function () {
            return this.range
        }, set: function (t) {
            return this.range = t, this.refresh()
        }}, repeatroot: {get: function () {
            return this.root
        }, set: function (t) {
            return this.root = t, this.refresh()
        }}, repeatstart: {get: function () {
            return this.start
        }, set: function (t) {
            return this.start = t, this.refresh()
        }}, repeatrepeat: {get: function () {
            return this.repeat.join(", ")
        }, set: function (t) {
            return this.repeat = t.split(/\s*,\s*/), this.refresh()
        }}}, n.prototype.refresh = function () {
            return this.removeChild(this.children.slice(0)), this.createUnits()
        }, n.prototype.createUnits = function () {
            var t, e, n, r, o, i, s, a, u, c, p;
            if (n = app.source.find(this.root), n.length && (o = app.source.find(this.start, n)[0])) {
                for (a = this.splitContents(n, o), t = a[0], r = a[1], null != this.targetIndex && (this.extractToSelector(n, t, r, this.targetIndex), delete this.targetIndex), u = this.filter(function () {
                    p = [];
                    for (var t = 0, e = r.length; e >= 0 ? e > t : t > e; e >= 0 ? t++ : t--)p.push(t);
                    return p
                }.apply(this)), c = [], i = 0, s = u.length; s > i; i++)e = u[i], c.push(this.addChild(new this.constructor.Unit({mock: this.mock, root: r[e]})));
                return c
            }
        }, n.prototype.splitContents = function (t, e) {
            var n, r, o, i, s, a, u, c, p, l, h, d, f, m, g;
            for (r = t.children(), s = r.indexOf(e), o = app.source.$("<div>"), m = r.slice(0, s), l = 0, d = m.length; d > l; l++)n = m[l], o.append(n.cloneNode(!0));
            for (u = []; p = r.slice(s, s + this.repeat.length);) {
                for (a = app.source.$("<div>"), g = this.repeat, i = h = 0, f = g.length; f > h; i = ++h) {
                    if (c = g[i], !this.matchRepeat(p[i], c))return[o, u];
                    a.append(p[i].cloneNode(!0))
                }
                u.push(a), s += this.repeat.length
            }
            return[o, u]
        }, n.prototype.matchRepeat = function (t, e) {
            var n, r, o;
            return t ? (o = e.split("."), r = o[0], n = 2 <= o.length ? Ge.call(o, 1) : [], t.tagName.toLowerCase() !== r ? !1 : 0 === n.length ? !0 : 1 === n.length && "" === n[0] ? !t.className : n.join(".") === (t.className || "").split(/\s+/).join(".")) : !1
        }, n.prototype.extractToSelector = function (t, e, n, o) {
            var i, s, a, u, c, p, l, h, d, f, m, g, y, v, b, x, _, w, k, C, S, I, z, T;
            for (a = t.children(), l = app.source.$("<div>").attr("id", "prev"), k = e.children(), m = 0, b = k.length; b > m; m++)s = k[m], l.append(s.cloneNode(!0));
            for (C = n.slice(0, o), g = 0, x = C.length; x > g; g++)for (h = C[g], S = h.children(), y = 0, _ = S.length; _ > y; y++)s = S[y], l.append(s.cloneNode(!0));
            for (I = this.mock.children, T = [], v = 0, w = I.length; w > v; v++)c = I[v], "extract" === (null != (z = c.content) ? z.type() : void 0) && (f = app.source.selector(c.content.source, t), (p = f.match(/^(.*)\[(\d+)\]\s*$/)) && (d = p[0], i = p[1], u = p[2], u -= app.source.find(i, l).length, f = "" + i + "[" + u + "]"), (p = f.match(/^\s*(>\s*[\w\.]+)\#[^\s\.]+(.*)$/)) && (f = p[1] + p[2]), this.withUnitRootClass() || (p = f.match(/^\s*(>\s*[\w\#]+)\.[^\s\#]+(.*)$/)) && (f = p[1] + p[2]), T.push(c.content = new r.Line.Content.Selector(f, c.content.selector)));
            return T
        }, n.prototype.withUnitRootClass = function () {
            return!!this.repeat[0].match(/\./)
        }, n.prototype.filter = function (t) {
            var e;
            return(e = this.range.match(/^(\d+)-(\d+)$/)) ? t.slice(parseInt(e[1], 10) - 1, parseInt(e[2], 10)) : (e = this.range.match(/^(\d+)$/)) ? t.slice(parseInt(e[1], 10) - 1, parseInt(e[1], 10)) : (e = this.range.match(/^(\d+)-$/)) ? t.slice(parseInt(e[1], 10) - 1) : (e = this.range.match(/^-(\d+)$/)) ? t.slice(0, parseInt(e[1], 10)) : t
        }, n.prototype.getSetter = function (t) {
            var e, n;
            return null != (e = null != (n = this.accessors[t]) ? n.set : void 0) ? e : function (e) {
                return this.mock.set(t, e)
            }
        }, n.prototype.getGetter = function (t) {
            var e, n;
            return null != (e = null != (n = this.accessors[t]) ? n.get : void 0) ? e : function () {
                return this.mock.get(t)
            }
        }, n.prototype.reverse = function () {
            var e, n, r, o, i, s, a, u, c;
            for (i = this.mock.serialize(), u = i.children, s = 0, a = u.length; a > s; s++)r = u[s], "selector" === (null != (c = r.content) ? c.type : void 0) && t.extend(r.content, {type: "extract", selector: r.content.origin});
            return e = this.mock.constructor.deserialize(i), (o = this.parent) && (n = o.children.indexOf(this), o.removeChild(this), o.insertChild(e, n, !0)), e
        }, n.prototype.serialize = function () {
            var e;
            return e = t.extend(n.__super__.serialize.apply(this, arguments), {root: this.root, start: this.start, mock: this.mock.serialize(), repeat: this.repeat, range: this.range, reversible: this.reversible}), delete e.children, e
        }, n.deserialize = function (t) {
            return new this({root: t.root, start: t.start, mock: r.load(t.mock), repeat: t.repeat, range: t.range, reversible: t.reversible})
        }, n
    }(r.Node), r.Repeat2.Unit = function (e) {
        function n(e) {
            var o, i, s = this;
            n.__super__.constructor.apply(this, arguments), this.root = e.root, this.mock = e.mock, this.template = this.mock.template, this.addChild(function () {
                var t, e, n, s, a;
                for (n = this.mock.children, a = [], t = 0, e = n.length; e > t; t++)o = n[t], i = r.Repeat2.Line.deserialize(o.serialize()), i.setMock(o), "selector" === (null != (s = i.content) ? s.type() : void 0) && i.content.setRoot(this.root), a.push(i);
                return a
            }.call(this), !0), this.mock.bind("prop", function (e) {
                return e.target === s.mock ? (e = t.extend(t.extend({}, e), {target: s}), s.trigger("prop." + e.subtype, e)) : void 0
            })
        }

        return Fe(n, e), n.prototype.insertChild = function (t) {
            var e, r, o, i;
            for (o = n.__super__.insertChild.apply(this, arguments), i = [], e = 0, r = o.length; r > e; e++)t = o[e], t.canRemove = function () {
                return!1
            }, i.push(t);
            return i
        }, n.prototype.set = function (t, e) {
            var n;
            return null != (n = this.mock) ? n.set(t, e) : void 0
        }, n.prototype.get = function (t) {
            var e;
            return null != (e = this.mock) ? e.get(t) : void 0
        }, n.prototype.getAll = function () {
            var t, e;
            return null != (t = null != (e = this.mock) ? e.getAll() : void 0) ? t : {}
        }, n.prototype.canSelect = function () {
            return!1
        }, n.prototype.canRemove = function () {
            return!1
        }, n.prototype.getSelectTarget = function () {
            return this.parent
        }, n
    }(r.Group), r.Repeat2.Line = function (e) {
        function n() {
            return Pe = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.prototype.getAll = function () {
            var t, e;
            return null != (t = null != (e = this.mock) ? e.getAll() : void 0) ? t : {}
        }, n.prototype.getGetter = function (e) {
            var r, o;
            if (t.a.contains(["imagesrc", "textcontent", "link"], e)) {
                if ("selector" === (null != (r = this.mock) ? null != (o = r.content) ? o.type() : void 0 : void 0)) {
                    if ("imagesrc" === e && this.mock.content.image)return function () {
                        return this.mock.content.image
                    };
                    if ("link" === e && this.mock.content.link)return function () {
                        return this.mock.content.link
                    }
                }
                return n.__super__.getGetter.apply(this, arguments)
            }
            return function () {
                var t;
                return null != (t = this.mock) ? t.get(e) : void 0
            }
        }, n.prototype.getSetter = function (t) {
            return function (e) {
                var n;
                return null != (n = this.mock) ? n.set(t, e) : void 0
            }
        }, n.prototype.setMock = function (e) {
            var n = this;
            return this.mock = e, this.mock.bind("prop", function (e) {
                return e.target === n.mock ? (e = t.extend(t.extend({}, e), {target: n}), n.trigger("prop." + e.subtype, e)) : void 0
            })
        }, n
    }(r.Line), r.Form = function (e) {
        function n() {
            return je = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.type = "form", n.prototype.keep = t.extend(t.a.toHash(["formtype", "formsendto", "formaction", "formconfirm", "formcompletemessage", "formcv"]), r.Node.prototype.keep), n.prototype.label = function () {
            return"フォーム"
        }, n
    }(r.Node), r.Symbol = function (t) {
        function e(t) {
            null == t && (t = {}), this.onInserted = qe(this.onInserted, this), this.onModelRemove = qe(this.onModelRemove, this), this.onModelUpdate = qe(this.onModelUpdate, this), this.onChangeChild = qe(this.onChangeChild, this), this.onChange = qe(this.onChange, this), e.__super__.constructor.apply(this, arguments), this.model = t.model || new this.constructor.Model(t.id, t.name || ""), this.bind("prop", this.onChange), this.bind("child", this.onChangeChild), this.bind("dom.insert", this.onInserted), t.model || this.model.update(this), this.model.bind("update", this.onModelUpdate), this.model.bind("remove", this.onModelRemove), this.locked = !0
        }

        return Fe(e, t), e.type = "symbol", e.prototype.label = function () {
            return"シンボル"
        }, e.prototype.lock = function () {
            return this.locked = !0, this.trigger("locked")
        }, e.prototype.unlock = function () {
            return this.locked = !1, this.trigger("unlocked")
        }, e.prototype.isDammy = function () {
            return this.model.isDammy()
        }, e.prototype.onChange = function () {
            return this.parent ? this.model.update(this) : void 0
        }, e.prototype.onChangeChild = function (t) {
            var e;
            if (this.parent && ("child" !== t.type || "insert" !== t.subtype || "menu" !== (null != (e = t.children[0]) ? e.type() : void 0)))return this.model.isDammy() && this.model.realize(), this.onChange()
        }, e.prototype.onModelUpdate = function (t) {
            var e;
            if (this.parent && t.symbol !== this)return e = this.parent.children.indexOf(this), this.parent.insertChild(this.model.createSymbol(), e, !0), this.parent.removeChild(this)
        }, e.prototype.onModelRemove = function () {
            return this.parent ? this.parent.removeChild(this) : void 0
        }, e.prototype.onInserted = function () {
            return this.model.register()
        }, e.prototype.accessors = {symbolname: {get: function () {
            return this.model.name
        }, set: function (t) {
            if (!t)throw new d;
            return this.model.name = t
        }}}, e.prototype.serializeAsNode = function () {
            return r.Node.prototype.serialize.call(this)
        }, e.deserializeAsNode = function (t) {
            return r.Node.deserialize.call(this, t)
        }, e.prototype.serialize = function () {
            return{type: this.type(), id: this.model.id, name: this.model.name}
        }, e.deserialize = function (t) {
            var e;
            return(e = this.Model.get(t.id)) ? e.createSymbol() : new this({id: this.Model.getNewDammyID(), name: t.name})
        }, e.skipDammy = function (t) {
            var e;
            return r.skipDammySymbol = !0, e = t(), r.skipDammySymbol = !1, e
        }, e
    }(r.Node), r.Symbol.Model = function (t) {
        function e(t, n, r) {
            this.id = null != t ? t : this.constructor.getNewID(), this.name = null != n ? n : "", this.content = null != r ? r : "", e.__super__.constructor.apply(this, arguments), this.name || (this.name = "シンボル" + this.id)
        }

        return Fe(e, t), e.prototype.update = function (t) {
            return this.content = t, this.trigger("update", {symbol: t, model: this})
        }, e.prototype.getContent = function () {
            return this.content instanceof r.Symbol ? this.content = this.content.serializeAsNode() : this.content
        }, e.prototype.createSymbol = function () {
            var t;
            return t = this.getContent(), t.options = {model: this}, r.Symbol.deserializeAsNode(t)
        }, e.prototype.isDammy = function () {
            return this.id < 0
        }, e.prototype.realize = function () {
            return this.id = this.constructor.getNewID()
        }, e.prototype.remove = function () {
            return this.constructor.remove(this), this.trigger("remove")
        }, e.prototype.register = function () {
            return this.constructor.add(this)
        }, e.models = [], e.id_replaces = {}, e.get = function (t) {
            var e, n, r, o, i;
            for (t = null != (o = this.id_replaces[t]) ? o : t, i = this.models, n = 0, r = i.length; r > n; n++)if (e = i[n], e.id === t)return e;
            return null
        }, e.replace = function (t) {
            return this.id_replaces = t || {}
        }, e.add = function (t) {
            return this.get(t.id) ? void 0 : this.models.push(t)
        }, e.remove = function (t) {
            var e;
            return this.models = function () {
                var n, r, o, i;
                for (o = this.models, i = [], n = 0, r = o.length; r > n; n++)e = o[n], e !== t && i.push(e);
                return i
            }.call(this)
        }, e.getNewID = function () {
            var t, e, n, r, o;
            for (t = this.models.length + 1, o = this.models, n = 0, r = o.length; r > n; n++)e = o[n], t = Math.max(t, e.id + 1);
            return t
        }, e.getNewDammyID = function () {
            var t, e, n, r, o;
            for (t = -1, o = this.models, n = 0, r = o.length; r > n; n++)e = o[n], t = Math.min(t, e.id - 1);
            return t
        }, e.getRealModels = function () {
            var t, e, n, r, o;
            for (r = this.models, o = [], e = 0, n = r.length; n > e; e++)t = r[e], t.isDammy() || o.push(t);
            return o
        }, e.serialize = function () {
            var t, e, n, r, o, i;
            for (o = this.models, i = [], n = 0, r = o.length; r > n; n++)e = o[n], e.isDammy() || (t = {id: e.id, name: e.name, content: e.getContent()}, delete t.content.options, i.push(t));
            return i
        }, e.deserialize = function (t) {
            var e;
            return this.models = function () {
                var n, o, i;
                for (i = [], n = 0, o = t.length; o > n; n++)e = t[n], i.push(new r.Symbol.Model(e.id, e.name, e.content));
                return i
            }()
        }, e
    }(m), r.Slider = function (e) {
        function n() {
            return Ve = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.type = "slider", n.prototype.label = function () {
            return"スライドショー"
        }, n.prototype.defaults = t.extend({}, r.prototype.defaults, {button: !1, sliderbutton: !1, sliderauto: !0, sliderstart: 1, sliderposnav: !0, sliderdelay: 6, sliderspeed: .3, sliderpauseonaction: !0}), n.prototype.keep = t.extend(t.a.toHash(["sliderbutton", "sliderauto", "sliderstart", "sliderposnav", "sliderdelay", "sliderspeed", "sliderpauseonaction"]), r.Group.prototype.keep), n.prototype.validateInsertedChildren = function (e, n) {
            var r, o;
            if (o = _.filter(t.a.flatten(function () {
                var t, n, o;
                for (o = [], t = 0, n = e.length; n > t; t++)switch (r = e[t], r.type()) {
                    case"line":
                        o.push(r);
                        break;
                    case"group":
                        o.push(r.children);
                        break;
                    default:
                        throw new h
                }
                return o
            }()), function (t) {
                return t.get("imagesrc")
            }), n && !o.length)throw new h;
            return o
        }, n
    }(r.Group), r.Affiliate = function (t) {
        function e() {
            return Be = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.type = "affiliate", e.prototype.label = function () {
            return"アフィリエイト"
        }, e
    }(r), r.Pane2 = function (e) {
        function n(t) {
            null == t && (t = {}), n.__super__.constructor.apply(this, arguments), this.addChild(this.side = t.side || new r.Pane2.Side), this.addChild(this.main = t.main || new r.Pane2.Main)
        }

        return Fe(n, e), n.type = "pane2", n.description = "画面の大きい端末（タブレット）では2カラム、小さい端末（スマートフォン）では1カラムで表示されます。", n.prototype.label = function () {
            return"2カラム"
        }, n.prototype.keep = t.extend(t.a.toHash(["pane2splayout", "pane2tablayout", "pane2sidewidth", "pane2limit", "noborder"]), r.Node.prototype.keep), n.prototype.serialize = function () {
            return t.extend(r.prototype.serialize.call(this), {main: this.main.serialize(), side: this.side.serialize()})
        }, n.deserialize = function (e) {
            return r.deserialize.call(this, t.extend({options: {main: r.Pane2.Main.deserialize(e.main), side: r.Pane2.Side.deserialize(e.side)}}, e))
        }, n
    }(r.Node), r.Pane2.Pane = function (e) {
        function n() {
            return He = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.description = "画面の大きい端末（タブレット）では2カラム、小さい端末（スマートフォン）では1カラムで表示されます。", n.prototype.canRemove = function () {
            return!1
        }, n.prototype.accessors = {pane2splayout: {get: function () {
            var t;
            return null != (t = this.parent) ? t.get("pane2splayout") : void 0
        }, set: function (t) {
            return this.parent.set("pane2splayout", t)
        }}, pane2tablayout: {get: function () {
            var t;
            return null != (t = this.parent) ? t.get("pane2tablayout") : void 0
        }, set: function (t) {
            return this.parent.set("pane2tablayout", t)
        }}, pane2sidewidth: {get: function () {
            var t;
            return null != (t = this.parent) ? t.get("pane2sidewidth") : void 0
        }, set: function (t) {
            return this.parent.set("pane2sidewidth", t)
        }}, pane2limit: {get: function () {
            var t;
            return null != (t = this.parent) ? t.get("pane2limit") : void 0
        }, set: function (t) {
            return this.parent.set("pane2limit", t)
        }}}, n.prototype.serialize = function () {
            return t.extend(n.__super__.serialize.apply(this, arguments), {type: this.type().replace(/-/, "")})
        }, n.deserialize = function (t) {
            return r.Node.deserialize.call(this, t)
        }, n
    }(r.Node), r.Pane2.Main = function (t) {
        function e() {
            return V = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.type = "pane2-main", e.prototype.label = function () {
            return"メイン"
        }, e
    }(r.Pane2.Pane), r.Pane2.Side = function (t) {
        function e() {
            return B = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.type = "pane2-side", e.prototype.label = function () {
            return"サイドバー"
        }, e
    }(r.Pane2.Pane), T = function (e) {
        function n(t) {
            this.component = t, this.onPropChange = qe(this.onPropChange, this), this.onCommit = qe(this.onCommit, this), n.__super__.constructor.apply(this, arguments), this.component.bind("prop", this.onPropChange)
        }

        return Fe(n, e), n.uid = 1, n.instances = {}, n.get = function (e, n) {
            var r, o;
            if (e)return(r = this.instances)[o = e.uid || (e.uid = this.uid++)] || (r[o] = new (this[t.s.capitalize(e.type())])(e, n))
        }, r.observer.bind({"child.remove": function (t) {
            var e, r, o, i, s;
            for (i = t.children, s = [], r = 0, o = i.length; o > r; r++)e = i[r], s.push(n.destroy(e));
            return s
        }}), n.destroy = function (t) {
            var e, n, r, o, i;
            if (t.uid && this.instances[t.uid] && (this.instances[t.uid].destroy(), delete this.instances[t.uid], delete t.uid), t.children) {
                for (o = t.children, i = [], n = 0, r = o.length; r > n; n++)e = o[n], i.push(this.destroy(e));
                return i
            }
        }, n.fromElement = function (t) {
            for (; ;) {
                if (t.component)return this.get(t.component);
                if (t = t.parentNode, !t)break
            }
        }, n.styleSheet = function () {
            return this._styleSheet || (this._styleSheet = t("<style>").prependTo(t("head"))[0].sheet)
        }, n.prototype.trigger = function (t, e, r) {
            return n.__super__.trigger.apply(this, arguments), r && this.component.parent && n.get(this.component.parent).trigger(t, e, !0), this
        }, n.prototype.destroy = function () {
            return this.element && delete this.element[0].component, this.component.unbind("prop", this.onPropChange), this.dirty && app.history.unbind("commit,undo,redo", this.onCommit), this.unbind()
        }, n.prototype.getElement = function () {
            return this.element || this.construction(function () {
                var t, e, n;
                this.element = this.createElement(), this.element.addClass("shutto-component"), n = this.component.getAll();
                for (t in n)e = n[t], this.setProperty(t, e);
                return this.element[0].component = this.component
            }), this.element
        }, n.prototype.createElement = function () {
            return t("<div>")
        }, n.prototype.construction = function (t) {
            var e;
            return this.dirty = this.constructing = !0, e = t.call(this), this.dirty = this.constructing = !1, e
        }, n.prototype.setDirty = function () {
            return!this.element || this.dirty || this.constructing ? void 0 : (this.dirty = !0, app.history.bind("commit,undo,redo", this.onCommit, 10))
        }, n.prototype.onCommit = function () {
            return this.refresh(), app.history.unbind("commit,undo,redo", this.onCommit), this.dirty = !1
        }, n.prototype.get = function (t) {
            return this.component.get(t)
        }, n.prototype.onPropChange = function (t) {
            return t.target === this.component ? this.setProperty(t.key, t.value, t.oldValue) : void 0
        }, n.prototype.setProperty = function (t, e, n) {
            var r;
            if (this.element)return(r = this.getPropertySetter(t)) ? r.call(this, e, n) : this.setPropertyClass(t, e)
        }, n.prototype.setPropertyClass = function (e, n) {
            var r;
            return r = (this.element.attr("class") || "").replace(new RegExp("(\\s|^)shutto-prop-" + t.s.escapeRegExp(e) + "(-[a-z0-9_]+)?(\\s|$)"), " ").trim(), "boolean" == typeof n ? n && (r += " shutto-prop-" + e) : r += " shutto-prop-" + e + "-" + n, this.element.attr("class", r)
        }, n.prototype.defaultPropertySetters = {css: function (t) {
            return this.setCssText("css", t)
        }, elementid: function (t) {
            return t && !/^[_a-zA-Z]+[_a-zA-Z0-9-]*$/.test(t) || this.element.attr("id") === t ? void 0 : (this.element.attr("id", t), this.resetStyles())
        }, elementclass: function (t) {
            var e, n;
            if (!t || /^[_a-zA-Z]+[_a-zA-Z0-9-]*$/.test(t))return n = function () {
                var t, n, r, o;
                for (r = (this.element.attr("class") || "").split(/\s+/g), o = [], t = 0, n = r.length; n > t; t++)e = r[t], e && e.match(/shutto/) && o.push(e);
                return o
            }.call(this), n = n.concat((t || "").split(/\s+/g)), this.element.attr("class", n.join(" "))
        }, margintop: function (t) {
            return this.setSpace("margin-top", t)
        }, marginright: function (t) {
            return this.setSpace("margin-right", t)
        }, marginbottom: function (t) {
            return this.setSpace("margin-bottom", t)
        }, marginleft: function (t) {
            return this.setSpace("margin-left", t)
        }, paddingtop: function (t) {
            return this.setSpace("padding-top", t)
        }, paddingright: function (t) {
            return this.setSpace("padding-right", t)
        }, paddingbottom: function (t) {
            return this.setSpace("padding-bottom", t)
        }, paddingleft: function (t) {
            return this.setSpace("padding-left", t)
        }}, n.prototype.setSpace = function (t, e) {
            return e = parseFloat(e, 10), this.setStyles(t, "", _.isNumber(e) && !_.isNaN(e) ? [
                [t, "" + e + "px"]
            ] : [])
        }, n.prototype.normalizeCss = function (t) {
            return t.replace(/@current/g, "#" + this.elementId()).replace(/url\(([\"\'])?(.+?)([\"\'])?\)/gi, function (t, e, n, r) {
                return"url(" + (e || "") + A(n) + (r || "") + ")"
            })
        }, n.prototype.propertySetters = {}, n.prototype.getPropertySetter = function (t) {
            return this.propertySetters[t] || this.defaultPropertySetters[t]
        }, n.prototype.elementId = function () {
            var t;
            return t = this.element.attr("id"), t || (t = this.get("elementid") || "shutto-component-" + this.component.uid, this.element.attr("id", t)), t
        }, n.prototype.setStyles = function (t, e, r) {
            var o, i, s, a;
            this.insertedStyles || (this.insertedStyles = {}), a = n.styleSheet(), (s = this.insertedStyles[t]) ? (a.deleteRule(s.index), delete this.insertedStyles[t]) : s = {index: a.cssRules.length}, _.extend(s, {selector: e, styles: r}), o = this.buildCssText(e, r);
            try {
                return s.index = a.insertRule(o, s.index), this.insertedStyles[t] = s
            } catch (u) {
                return i = u, console.log("Invalid CSS: " + o)
            }
        }, n.prototype.buildCssText = function (t, e) {
            var n, r, o;
            return/@current/.test(t) || (t = "@current " + (t || "")), n = function () {
                var t, n, i, s;
                for (s = [], t = 0, n = e.length; n > t; t++)i = e[t], r = i[0], o = i[1], s.push("" + r + ": " + o);
                return s
            }().join("; "), this.normalizeCss("" + t + " { " + n + " }")
        }, n.prototype.setCssText = function (e, n) {
            var r, o;
            if (this.insertedCssTexts || (this.insertedCssTexts = {}), (o = this.insertedCssTexts[e]) && (o.el.remove(), delete this.insertedCssTexts[e]), n)try {
                return this.insertedCssTexts[e] = {el: t("<style>").html(this.normalizeCss(n)).appendTo(document.body), css: n}
            } catch (i) {
                r = i
            }
        }, n.prototype.resetStyles = function () {
            var t, e, r, o, i, s;
            if (this.insertedStyles) {
                r = n.styleSheet(), o = this.insertedStyles;
                for (e in o)t = o[e], r.deleteRule(t.index), r.insertRule(this.buildCssText(t.selector, t.styles), t.index)
            }
            if (this.insertedCssTexts) {
                i = this.insertedCssTexts, s = [];
                for (e in i)t = i[e], s.push(t.el.html(this.normalizeCss(t.css)));
                return s
            }
        }, n.prototype.gradientStyles = function (e) {
            var n, r, o;
            try {
                return r = new t.Color(e), o = r.brightness(Math.max(0, 1.2 * r.brightness() - 30)), [
                    ["background", "-moz-linear-gradient(top, " + r + ", " + o + ") repeat scroll 0 0 " + r],
                    ["background", "-o-linear-gradient(top, " + r + ", " + o + ") repeat scroll 0 0 " + r],
                    ["background", "-webkit-gradient(linear, left top , left bottom, from(" + r + "), to(" + o + ")) repeat scroll 0 0 " + r]
                ]
            } catch (i) {
                return n = i, [
                    ["background", e]
                ]
            }
        }, n.prototype.getInsertion = function (t, e) {
            var n;
            return n = this.element.offset(), {parent: this.component.parent, index: this.component.parent.children.indexOf(this.component) + (e.y < n.top + n.height / 2 ? 0 : 1)}
        }, n
    }.call(this, m), R = function (t, e) {
        var n, r, o;
        if (!t)return void 0;
        if (!(r = t.match(/^xpath:(.*)$/)))return(r = t.match(/^js:(.*)$/)) ? "#" : t;
        t = r[1].replace(/@on([a-z]+)/gi, "@data-on$1");
        try {
            return o = app.source.window, String(o.document.evaluate(t, (null != e ? e[0] : void 0) || o.document, null, XPathResult.STRING_TYPE, null).stringValue || "").trim()
        } catch (i) {
            return n = i, "#"
        }
    }, D = function (t) {
        var e, n, r;
        try {
            return e = new URI(app.source.url()), r = new URI(t).resolve(e), r.authority === e.authority && (r.scheme = r.authority = null), r.toString()
        } catch (o) {
            return n = o, t
        }
    }, A = function (t) {
        return t ? app.source.toAbsoluteUrl(t) || t : t
    }, T.Line = function (e) {
        function n() {
            this.setMapSrc = qe(this.setMapSrc, this), this.setParentDirty = qe(this.setParentDirty, this), this.updateRecommend = qe(this.updateRecommend, this), n.__super__.constructor.apply(this, arguments), this.setMapSrc = t.func.limitInterval(this.setMapSrc, 1e3), this.updateRecommend = t.func.limitInterval(this.updateRecommend, 2e3)
        }

        return Fe(n, e), n.prototype.createElement = function () {
            return this.createContent(this.element = t("<div>").attr("class", "shutto-component-line")), this.element.attr("data-content-type", this.component.content.type()), this.element
        }, n.prototype.createContent = function () {
            var e, n, r, o, i, s, a, u, c, p, l, h, d, f, m, g, y, v, b, x, _, w, k, C, S, I, z = this;
            if (this.element.removeAttr("style"), "function" == typeof(y = this.component.content).isForm ? y.isForm() : void 0)this.sanitizeExtracted(this.component.content.source).appendTo(this.element); else if ("map" === this.component.content.type())t("<a>").attr({"class": "shutto-line-content-maplink"}).append(t("<img>").attr({"class": "shutto-line-content-mapimage"}).bind({load: function () {
                return z.trigger("resize", {}, !0)
            }})).append(t('<div class="shutto-line-content-mapnavi">').text("大きな地図で見る")).appendTo(this.element), this.setMapSrc(); else if ("recommend" === this.component.content.type())this.createRecommendContent(this.element, this.component.content.recommend); else if (null != (w = this.component.content.source) ? w.isTwitterButton() : void 0)l = this.component.content.source, m = t("<a>").attr({href: l.attr("href"), "class": l.attr("class")}).text(l.text() || "Tweet"), this.bindAsTweetButton(m, l), m.appendTo(this.element); else if (null != (k = this.component.content.source) ? k.isFacebookButton() : void 0)o = t.sanitized(this.component.content.source), this.bindAsFacebookButton(o), o.appendTo(this.element); else if (t.a.contains(["extract", "selector"], this.component.content.type()) && this.get("structured"))l = this.component.content.source, (i = this.get("hidden")) && (null != l ? l.length : void 0) && (l = app.source.$(l[0].cloneNode(!0)), app.source.find(i, l).remove()), c = T.get(this.component.parent), r = this.get("linkdisable") || (null != c ? c.get("button") : void 0) && (null != c ? c.getLink() : void 0), this.sanitizeExtracted(l, {disableLink: r}).appendTo(this.element); else {
                if (e = (a = this.getLink()) ? t("<a>").attr({"class": "shutto-line-content-link", href: a}).sanitizeLink().appendTo(this.element) : this.element, "textfield" === this.component.content.type())t("<div>").attr({"class": "shutto-input shutto-input-" + this.get("inputtype")}).append(("text" === this.get("inputtype") && this.get("textarea") ? t("<textarea>") : t("<input>").attr({type: this.get("inputtype")})).val(this.get("inputvalue")).attr({placeholder: this.get("placeholder")})).appendTo(e); else if ("checkbox" === this.component.content.type())t("<div>").attr({"class": "shutto-checkbox"}).append(t("<input>").attr({type: "checkbox"})).append(t("<label>").append(t("<span>").attr({"class": "shutto-checkbox-icon"}).toggleClass("shutto-on", !!this.get("inputvalue"))).append(t("<span>").attr({"class": "shutto-checkbox-label"}).text(this.get("inputlabel")))).appendTo(e); else if ("select" === this.component.content.type()) {
                    for (p = t("<select>"), this.get("inputmultiple") && p.attr("multiple", "multiple"), C = (this.get("selectitems") || "").split("\n"), v = 0, x = C.length; x > v; v++)s = C[v], (s = s.replace(/^\s+|\s+$/g, "")) && (u = t("<option>").text(s), "選択してください" === s && u.attr({disabled: "disabled", selected: "selected"}), p.append(u));
                    t("<div>").attr({"class": "shutto-select"}).append(p).appendTo(e)
                } else if ("button" === this.component.content.type())t("<input>").attr({type: "submit"}).val(this.get("inputlabel")).appendTo(e); else if (f = this.component.content.getText({hidden: this.get("hidden"), alttext: this.get("alttext")}))t("<div>").attr("class", "shutto-line-content").html(this.textHtml(f)).appendTo(e); else if (f = this.component.content.getHtml())t("<div>").attr("class", "shutto-line-content").append(this.sanitizeHtml(f)).appendTo(e); else if (this.component.get("imagesrc")) {
                    for (this.image = t("<img>").bind({load: function () {
                        return z.trigger("resize", {}, !0)
                    }, error: function () {
                        return z.trigger("resize", {}, !0)
                    }}).attr("src", this.getImagesrc()).sanitizeLink("src").appendTo(e), S = ["width", "height"], b = 0, _ = S.length; _ > b; b++)n = S[b], null != (g = this.get("image" + n)) && this.image.attr(n, g);
                    setTimeout(function () {
                        return z.trigger("resize", {}, !0)
                    }, 50)
                }
                t.a.contains(["selector", "extract"], this.component.content.type()) && this.get("istyle") && (h = null != (I = this.component.content.source) ? I.attr("style") : void 0) && this.element.attr("style", h)
            }
            return t.a.contains(["selector", "extract"], this.component.content.type()) || t("<div>").attr({"class": "shutto-static-marker", title: "静的コンテンツ"}).prependTo(this.element), "menu" === this.component.content.type() ? (this.element.find(".shutto-static-marker").remove(), this.element.addClass("shutto-menu"), d = this.get("menubuttongradation") ? this.gradientStyles(this.get("menubuttonbgcolor") || "#fff") : [
                ["background", this.get("menubuttonbgcolor") || "#fff"]
            ], this.setStyles("background", "", d)) : void 0
        }, n.prototype.updateRecommend = function () {
            var t;
            return(t = this.component.content.recommend) ? (this.element.empty(), this.createRecommendContent(this.element, t)) : void 0
        }, n.prototype.createRecommendContent = function (e, n) {
            var r, o;
            return r = function () {
                return t.extend(_rcmdjp, {_displayHistory: _rcmdjp._displayRecommend, _trackRecommend: function () {
                }, _trackRanking: function () {
                }, _trackConversion: function () {
                }, _setUser: function () {
                }, _setItemData: function () {
                }, _displayedRecommends: [], _displayedRankings: [], _displayedHistories: [], _historyRequests: [], _historyItems: [], _historyLoadedItemNum: 0, _state: "wait", _writeElement: function () {
                    return t("<div>").attr({id: "shutto-recommend-" + Math.floor(2147483647 * Math.random())}).appendTo(e).attr("id")
                }, _getItemCodeByURL: function () {
                    return _rcmdjp._getItemCodeForURL(app.source.url()) || "__dammy"
                }}), t.s.evalScript(R(n.tag) + "; _rcmdjp._trigger();")
            }, o = "//d.rcmd.jp/" + n.username + "/" + n.name + "/recommend.js", t('script[src^="//d.rcmd.jp"]').remove(), t.require(o, r)
        }, n.prototype.bindAsTweetButton = function (t, e) {
            var n, r, o, i, s = this;
            if (e)for (i = e[0].attributes, r = 0, o = i.length; o > r; r++)n = i[r], n && n.name.match(/^data-/) && t.attr(n.name, n.value);
            return t.insertedIntoDocument(function () {
                return twttr.widgets.load()
            }, {completeTimer: function () {
                return s.trigger("resize", {}, !0)
            }})
        }, n.prototype.bindAsFacebookButton = function (t) {
            var e = this;
            return t.text(""), t.insertedIntoDocument(function () {
                return setTimeout(function () {
                    return FB.XFBML.parse(t.parent()[0])
                }, 100)
            }, {completeTimer: function () {
                return e.trigger("resize", {}, !0)
            }})
        }, n.prototype.textHtml = function (e) {
            var n;
            return function () {
                var r, o, i, s;
                for (i = e.trim().split(/(\r)?\n/), s = [], r = 0, o = i.length; o > r; r++)n = i[r], (n = t.s.escapeHTML((n || "").trim())) && s.push(n);
                return s
            }().join("<br/>")
        }, n.prototype.sanitizeExtracted = function (e, n) {
            var r, o = this;
            return null == n && (n = {}), r = t.sanitized(e, function (t, e) {
                return o.get("istyle") || e.removeAttr("style"), t.isTwitterButton() ? o.bindAsTweetButton(e, t) : t.isFacebookButton() ? o.bindAsFacebookButton(e) : void 0
            }), n.disableLink && (r = t.el.stripLinks(r, function () {
                return t("<span>").attr({"class": "shutto-replace-link"})
            })), r
        }, n.prototype.sanitizeHtml = function (e) {
            var n, r = this;
            try {
                return t.sanitized(t("<div>").attr({"class": "shutto-html-content"}).html(e), function (t, e) {
                    var n, o, i, s, a, u;
                    if (e.removeAttr("style"), t.isTwitterButton())return r.bindAsTweetButton(e, t);
                    if (t.isFacebookButton())return r.bindAsFacebookButton(e);
                    for (a = ["src", "action", "href"], u = [], i = 0, s = a.length; s > i; i++)n = a[i], (o = e.attr(n)) ? u.push(e.attr(n, app.source.toAbsoluteUrl(o) || o)) : u.push(void 0);
                    return u
                })
            } catch (o) {
                return n = o, ""
            }
        }, n.prototype.refresh = function () {
            return this.construction(function () {
                return this.element.empty(), this.createContent()
            })
        }, n.prototype.propertySetters = {fontcolor: function (t) {
            var e;
            return e = t && "#" !== t ? t : "transparent", this.setStyles("fontcolor", "", [
                ["color", e]
            ])
        }, textcontent: function (t) {
            return this.element.find(".shutto-line-content").html(this.textHtml(t))
        }, htmlcontent: function (t) {
            return this.element.find(".shutto-line-content").html(this.sanitizeHtml(t))
        }, imagesrc: function () {
            var t, e = this;
            return null != (t = this.image) && t.attr("src", this.getImagesrc()), setTimeout(function () {
                return e.trigger("resize", {}, !0)
            }, 50)
        }, imagewidth: function (t) {
            var e;
            return null != (e = this.image) ? e.attr("width", t) : void 0
        }, imageheight: function (t) {
            var e;
            return null != (e = this.image) ? e.attr("height", t) : void 0
        }, alttext: function () {
            return this.setDirty()
        }, align: function (t) {
            return this.setPropertyClass("align", t), this.get("float") && this.setPropertyClass("float", t), null != this.component.content.image ? this.propertySetters.float.call(this, this.component.get("float")) : void 0
        }, "float": function (t) {
            return this.setPropertyClass("float", t ? this.component.get("align") : "none")
        }, link: function () {
            return this.setParentDirty()
        }, linkdisable: function () {
            return this.setParentDirty()
        }, selector: function () {
            return this.setParentDirty()
        }, structured: function (t) {
            return this.setPropertyClass("structured", t), this.setParentDirty()
        }, enebleevents: function () {
            return this.setDirty()
        }, istyle: function () {
            return this.setDirty()
        }, hidden: function () {
            return this.setParentDirty()
        }, inputvalue: function (t) {
            return this.element.find("input,textarea").val(t), this.element.find(".shutto-checkbox-icon").toggleClass("shutto-on", !!t)
        }, inputlabel: function (t) {
            return this.element.find(".shutto-checkbox-label").text(t || ""), this.element.find('input[type="submit"]').val(t || " ")
        }, inputtype: function () {
            return this.setDirty()
        }, inputmultiple: function (t) {
            return t ? this.element.find("select").attr("multiple", "multiple") : this.element.find("select").removeAttr("multiple")
        }, textarea: function () {
            return this.setDirty()
        }, placeholder: function (t) {
            return this.element.find("input,textarea").attr("placeholder", t)
        }, selectitems: function () {
            return this.setDirty()
        }, maplocationmode: function () {
            return this.setMapSrc()
        }, mapquery: function () {
            return this.setMapSrc()
        }, maplabel: function () {
            return this.setMapSrc()
        }, maplat: function () {
            return this.setMapSrc()
        }, maplon: function () {
            return this.setMapSrc()
        }, mapmarker: function () {
            return this.setMapSrc()
        }, mapzoom: function () {
            return this.setMapSrc()
        }, mapapikey: function () {
            return this.setMapSrc()
        }, recommendname: function () {
            return this.updateRecommend()
        }, recommendusername: function () {
            return this.updateRecommend()
        }, recommendtag: function () {
            return this.updateRecommend()
        }, menubuttonlabel: function () {
            return this.setDirty()
        }, menubuttonbgcolor: function () {
            return this.setDirty()
        }, menubuttongradation: function () {
            return this.setDirty()
        }}, n.prototype.getImagesrc = function () {
            var t;
            return t = R(this.component.get("imagesrc"), this.component.content.source), t && "#" !== t || (t = "http://shutto.com/images/sample.png"), A(t)
        }, n.prototype.getLink = function () {
            var t;
            return this.get("button") ? void 0 : (null != (t = T.get(this.component.parent)) ? t.getSelfLink() : void 0) || this.getSelfLink()
        }, n.prototype.getSelfLink = function () {
            return this.get("linkdisable") ? void 0 : A(R(this.get("link"), this.component.content.source))
        }, n.prototype.setParentDirty = function () {
            return this.component.parent && !this.constructing ? T.get(this.component.parent).setDirty(!0) : void 0
        }, n.prototype.setMapSrc = function () {
            var e, n, r, o, i;
            return i = {zoom: this.get("mapzoom") || 0, size: "320x200", scale: 2, sensor: "false"}, r = this.get("mapmarker") ? "markers" : "center", i[r] = "latlon" === this.get("maplocationmode") ? "" + (R(this.get("maplat")) || 0) + "," + (R(this.get("maplon")) || 0) : R(this.get("mapquery")) || "", this.get("mapapikey") && (i.key = this.get("mapapikey")), n = this.element.find("a.shutto-line-content-maplink"), n.attr("href", "http://maps.google.co.jp/maps?" + t.param(t.extend({z: i.zoom}, "latlon" !== this.get("maplocationmode") || this.get("mapmarker") ? (o = i[r], "latlon" === this.get("maplocationmode") && this.get("mapmarker") ? (e = R(this.get("maplabel"))) ? o += " (" + e + ")" : void 0 : void 0, {q: o}) : {ll: i[r]}))), n.find("img").attr("src", "//maps.googleapis.com/maps/api/staticmap?" + t.param(i))
        }, n
    }(T), T.Node = function (e) {
        function n() {
            this.onChangeChild = qe(this.onChangeChild, this), n.__super__.constructor.apply(this, arguments), this.component.bind("child", this.onChangeChild)
        }

        return Fe(n, e), n.prototype.destroy = function () {
            return n.__super__.destroy.apply(this, arguments), this.component.unbind("child", this.onChangeChild)
        }, n.prototype.tagName = function () {
            return"div"
        }, n.prototype.createElement = function () {
            return this.element = t("<" + this.tagName() + ">").attr({"class": "shutto-component-" + this.component.type()}), this.createChildElements(), this.element
        }, n.prototype.createChildElements = function () {
            var t, e, n, r, o;
            for (r = this.component.children, o = [], e = 0, n = r.length; n > e; e++)t = r[e], o.push(this.element.append(T.get(t).getElement()));
            return o
        }, n.prototype.clearChildElements = function () {
            return this.element.empty()
        }, n.prototype.onChangeChild = function (t) {
            return t.target === t.eventTarget ? this.setDirty() : void 0
        }, n.prototype.setDirty = function (t) {
            var e, r, o, i, s;
            if (n.__super__.setDirty.apply(this, arguments), t && !this.constructing) {
                for (i = this.component.children, s = [], r = 0, o = i.length; o > r; r++)e = i[r], s.push(T.get(e).setDirty(!0));
                return s
            }
        }, n.prototype.refresh = function () {
            return this.construction(function () {
                return this.clearChildElements(), this.createChildElements()
            })
        }, n.prototype.ignore = t.a.toHash(["fontsize", "lineheight", "bold", "italic", "underline", "textshadow", "fontcolor", "align", "gradation", "pageicon", "tellink", "textcontent", "htmlcontent", "imagewidth", "imageheight", "float", "imagesrc", "structured", "enableevents", "istyle", "selector", "linkdisable", "hidden", "inputlabel", "inputname", "inputvalue", "inputtype", "inputrequired", "inputmultiple", "placeholder", "textarea", "selectitems", "alttext", "formtype", "formsendto", "formaction", "formconfirm", "formcompletemessage", "formcv", "maplocationmode", "mapquery", "maplat", "maplon", "mapmarker", "maplabel", "mapzoom", "mapapikey", "menubuttonlabel", "menubuttonbgcolor", "menubuttongradation", "js", "jsbefore", "recommendname", "recommendusername", "recommendtag"]), n.prototype.getPropertySetter = function (t) {
            var e, n;
            return null != (e = null != (n = this.propertySetters[t]) ? n : this.defaultPropertySetters[t]) ? e : function (e) {
                return this.ignore[t] ? void 0 : this.setPropertyClass(t, e)
            }
        }, n.prototype.getInsertion = function (t, e) {
            var r, o, i, s, a;
            if (i = this.component.children.length ? (r = this.getChildAt(e)) ? r.getInsertion(t, e) : (s = this.element.offset(), s.top + 10 < (a = e.y) && a < s.top + s.height - 10 ? {parent: this.component, index: e.y < s.top + s.height / 2 ? 0 : this.component.children.length} : null) : {parent: this.component, index: 0}) {
                if (i.parent !== this.component)return i;
                try {
                    return this.component.validateInsertedChildren(t, !0), i
                } catch (u) {
                    if (o = u, !(o instanceof h))throw o
                }
            }
            return n.__super__.getInsertion.apply(this, arguments)
        }, n.prototype.getChildAt = function (e) {
            var n, r, o, i, s;
            for (s = this.component.children, o = 0, i = s.length; i > o; o++)if (n = s[o], r = T.get(n), t.geo.isInside(r.getElement().offset(), e))return r
        }, n
    }(T), T.Page = function (e) {
        function n(e, r) {
            n.__super__.constructor.apply(this, arguments), this.element = t(r.element), this.element[0].component = e, this.refresh(), this.setProperty("css", e.get("css") || "")
        }

        return Fe(n, e), n.prototype.propertySetters = {bgcolor: function () {
            return this.updateBackground()
        }, gradation: function () {
            return this.updateBackground()
        }, bgimage: function () {
            return this.updateBackground()
        }, bgrepeat: function () {
            return this.updateBackground()
        }, bgpositionx: function () {
            return this.updateBackground()
        }, bgpositiony: function () {
            return this.updateBackground()
        }, bgsizex: function () {
            return this.updateBackground()
        }, bgsizey: function () {
            return this.updateBackground()
        }, css: function (t) {
            var e, n;
            return e = function () {
                var e, r, o, i;
                for (o = [window.global_css, t], i = [], e = 0, r = o.length; r > e; e++)n = o[e], n && i.push(n);
                return i
            }().join("\n"), this.setCssText("css", e)
        }}, n.prototype.clearChildElements = function () {
            return this.element.children(":not(.shutto-editor-ui)").remove()
        }, n.prototype.createChildElements = function () {
            return n.__super__.createChildElements.apply(this, arguments), t("<div>").attr("class", "shutto-page-padding").appendTo(this.element), this.updateBackground()
        }, n.prototype.updateBackground = function () {
            return T.Group.prototype.updateBackground.call(this)
        }, n.prototype.getInsertion = function (e, n) {
            var r, o, i, s, a, u, c;
            for (c = this.component.children, o = a = 0, u = c.length; u > a; o = ++a) {
                if (r = c[o], s = T.get(r), i = s.getElement().offset(), t.geo.isInside(i, n))return s.getInsertion(e, n);
                if (n.y < i.top)break
            }
            return{parent: this.component, index: o}
        }, n
    }(T.Node), T.Group = function (e) {
        function n() {
            return this.onPropChange = qe(this.onPropChange, this), H = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.prototype.onPropChange = function (t) {
            return n.__super__.onPropChange.apply(this, arguments), "link" === t.key ? this.setDirty(!0) : void 0
        }, n.prototype.setDirty = function (t) {
            var e, r, o, i, s;
            if (n.__super__.setDirty.apply(this, arguments), t) {
                for (i = this.component.children, s = [], r = 0, o = i.length; o > r; r++)e = i[r], s.push(T.get(e).setDirty(!0));
                return s
            }
        }, n.prototype.propertySetters = {bgcolor: function () {
            return this.updateBackground()
        }, gradation: function () {
            return this.updateBackground()
        }, bgimage: function () {
            return this.updateBackground()
        }, bgrepeat: function () {
            return this.updateBackground()
        }, bgpositionx: function () {
            return this.updateBackground()
        }, bgpositiony: function () {
            return this.updateBackground()
        }, bgsizex: function () {
            return this.updateBackground()
        }, bgsizey: function () {
            return this.updateBackground()
        }, link: function () {
            return this.setDirty(!0)
        }, button: function () {
            return this.setDirty(!0)
        }, linkicon: function (t) {
            return this.element.attr("data-linkicon", t)
        }, linkiconpos: function (t) {
            return this.setPropertyClass("linkiconpos", t), this.setDirty()
        }, blanklink: function () {
        }, iconpos: function (t) {
            return this.setPropertyClass("iconpos", t), this.setDirty()
        }, iconurl: function () {
            return this.setDirty()
        }, iconsizex: function () {
            return this.setDirty()
        }, iconsizey: function () {
            return this.setDirty()
        }}, n.prototype.updateBackground = function () {
            var e, n, r, o, i, s, a, u, c;
            if (a = (e = this.get("bgcolor")) ? this.get("gradation") ? this.gradientStyles(e) : [
                ["background", e]
            ] : [
                ["background", "transparent"]
            ], n = this.get("bgimage")) {
                for (i = function () {
                    switch (this.get("bgrepeat")) {
                        case"x":
                            return"repeat-x";
                        case"y":
                            return"repeat-y";
                        case"xy":
                            return"repeat";
                        default:
                            return"no-repeat"
                    }
                }.call(this), o = "" + t.s.cssValue(this.get("bgpositionx")) + " " + t.s.cssValue(this.get("bgpositiony")), r = "url('" + R(n) + "') " + i + " scroll " + o, u = 0, c = a.length; c > u; u++)s = a[u], s[1] = r + ", " + s[1];
                a.push(["background-size", "" + t.s.cssValue(this.get("bgsizex")) + " " + t.s.cssValue(this.get("bgsizey")) + ", auto"])
            }
            return this.setStyles("background", "", a)
        }, n.prototype.getLink = function () {
            return this.getSelfLink() || this.getChildLink()
        }, n.prototype.getSelfLink = function () {
            var t;
            return(t = this.get("link")) ? A(R(t, this.getLinkSource())) : !1
        }, n.prototype.getLinkSource = function () {
            return t.a.firstValue(this.component.children, function (t) {
                var e;
                return(null != (e = t.content) ? e.source : void 0) || void 0
            })
        }, n.prototype.getChildLink = function () {
            return t.a.firstValue(this.component.children, function (t) {
                return T.get(t).getSelfLink() || void 0
            })
        }, n.prototype.createElement = function () {
            return n.__super__.createElement.apply(this, arguments), this.updateBackground(), this.element
        }, n.prototype.createChildElements = function () {
            var e, n, r, o, i, s, a, u, c, p, l;
            for (a = this.getLink(), u = !(!a || !this.get("button")), n = this.element.toggleClass("shutto-link-button", u), u && (n = t("<a>").attr({href: a, "class": "shutto-group-button-link"}).sanitizeLink().appendTo(this.element)), l = this.component.children, c = 0, p = l.length; p > c; c++)e = l[c], n.append(T.get(e).getElement());
            return u && (t("<span>").attr("class", "shutto-link-icon").appendTo(n), t("<div>").attr("class", "shutto-clearfix").appendTo(n)), this.element.removeClass("shutto-icon-container"), this.get("iconpos") && "none" !== this.get("iconpos") && (s = this.get("iconurl")) ? (o = this.get("iconsizex") || 24, i = this.get("iconsizey") || 24, r = t("<span>").attr({"class": "shutto-group-icon"}).append(t("<img>").attr({src: s}).css({width: "" + o + "px", height: "" + i + "px"})).prependTo(n), "center" !== this.get("iconpos") && r.css({"margin-top": "" + -i / 2 + "px"}), n.addClass("shutto-icon-container")) : void 0
        }, n
    }(T.Node), T.Box = function (t) {
        function e() {
            return q = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e
    }(T.Node), T.Menu = function (e) {
        function n() {
            return U = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.prototype.propertySetters = {bgcolor: function () {
            return this.updateBackground()
        }, menuclose: function () {
            return this.setDirty()
        }, menuclosebgcolor: function () {
            return this.updateCloseBackground()
        }, menuclosegradation: function () {
            return this.updateCloseBackground()
        }, menuclosefontcolor: function (t) {
            var e;
            return e = t && "#" !== t ? t : "transparent", this.setStyles("menuclosefontcolor", ".shutto-menu-close-button", [
                ["color", e]
            ])
        }}, n.prototype.updateBackground = function () {
            return this.setStyles("background", "", [
                ["background", this.get("bgcolor") || "transparent"]
            ])
        }, n.prototype.updateCloseBackground = function () {
            return this.setStyles("menuclosebackground", ".shutto-menu-close-button", this.get("menuclosegradation") ? this.gradientStyles(this.get("menuclosebgcolor") || "#fff") : [
                ["background", this.get("menuclosebgcolor") || "transparent"]
            ])
        }, n.prototype.createChildElements = function () {
            return n.__super__.createChildElements.apply(this, arguments), this.get("menuclose") && this.element.append(t('<div class="shutto-menu-navi">').append(t('<span class="shutto-menu-close-button">').text(t.I18n.t("menu.close")))).append(t("<div>")), this.updateBackground(), this.updateCloseBackground(), this.setPropertyClass("menucloseborder", !!this.get("menucloseborder"))
        }, n
    }(T.Node), T.Grid = function (e) {
        function n() {
            this.adjustHeight = qe(this.adjustHeight, this), this.adjustHeight = t.func.limitInterval(this.adjustHeight, 1e3), n.__super__.constructor.apply(this, arguments), this.bind("dom,resize", this.adjustHeight), this.component.bind("dom,child,prop", this.adjustHeight)
        }

        return Fe(n, e), n.prototype.propertySetters = {gridsizex: function () {
            return this.setDirty()
        }, gridsizey: function () {
            return this.setDirty()
        }, round: function (t) {
            return this.setPropertyClass("noborder", !!this.get("noborder") || !!t)
        }, noborder: function (t) {
            return this.setPropertyClass("noborder", !!t || !!this.get("round"))
        }, bgcolor: function () {
        }, bgimage: function () {
        }, bgrepeat: function () {
        }, bgpositionx: function () {
        }, bgpositiony: function () {
        }, bgsizex: function () {
        }, bgsizey: function () {
        }}, n.prototype.tagName = function () {
            return"table"
        }, n.prototype.createChildElements = function () {
            var e, n, r, o, i, s, a, u;
            for (this.element.attr("class", (this.element.attr("class") || "").replace(/(\s|^)shutto-lines-\d+/, "")).addClass("shutto-lines-" + this.component.sizeX), e = t("<tbody>").appendTo(this.element), o = i = 0, a = this.component.sizeY; a >= 0 ? a > i : i > a; o = a >= 0 ? ++i : --i)for (n = t("<tr>").appendTo(e), r = s = 0, u = this.component.sizeX; u >= 0 ? u > s : s > u; r = u >= 0 ? ++s : --s)t("<td>").css("width", this.component.sizeX >= 10 ? Math.floor(100 / this.component.sizeX) + "%" : "").appendTo(n).append(T.get(this.component.cell(r, o)).getElement());
            return setTimeout(this.adjustHeight, 10)
        }, n.prototype.getInsertion = function () {
            var t;
            return t = n.__super__.getInsertion.apply(this, arguments), t.parent === this.component ? T.prototype.getInsertion.apply(this, arguments) : t
        }, n.prototype.destroy = function () {
            return n.__super__.destroy.apply(this, arguments), this.unbind("dom,resize", this.adjustHeight), this.component.unbind("dom,child,prop", this.adjustHeight)
        }, n.prototype.adjustHeight = function () {
            var t = this;
            return setTimeout(function () {
                return t.constructor.setupCellsHeight(t.element), app.selectView.refresh()
            }, 0)
        }, n.callAfterLoadImages = function (e, n) {
            var r, o = this;
            return e = function () {
                var t, n, o;
                for (o = [], t = 0, n = e.length; n > t; t++)r = e[t], r.complete || o.push(r);
                return o
            }(), e.length ? (r = e.pop(), t(r).bind("load error", function () {
                return o.callAfterLoadImages(e, n)
            })) : n()
        }, n.setupCellsHeight = function (e) {
            var n, r, o, i, s, a = this;
            for (null == e && (e = {}), i = t(e.element || document.body).find("table.shutto-component-grid tr"), s = [], r = 0, o = i.length; o > r; r++)n = i[r], s.push(function (e) {
                var n, r, o;
                return r = !1, n = t(e).find("td > div.shutto-component-group"), o = function () {
                    var e, r, o, i, s, a, u, c, p;
                    for (o = 0, a = n.length; a > o; o++)e = n[o], t(e).css("height", "auto");
                    for (r = 0, i = 0, u = n.length; u > i; i++)e = n[i], r = Math.max(r, t(e).offset().height);
                    if (r > 0) {
                        for (p = [], s = 0, c = n.length; c > s; s++)e = n[s], e = t(e), p.push(e.css("height", "" + (r - parseInt(e.css("border-top-width")) - parseInt(e.css("border-bottom-width")) - parseInt(e.css("padding-top")) - parseInt(e.css("padding-bottom"))) + "px"));
                        return p
                    }
                }, a.callAfterLoadImages(t(e).find("img"), o)
            }(n));
            return s
        }, n
    }(T.Node), T.Tab = function (e) {
        function n() {
            return this.setTabsHeight = qe(this.setTabsHeight, this), F = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.prototype.propertySetters = {tabcount: function () {
            return this.setDirty()
        }, gradation: function () {
            return this.updateBackground()
        }, bgcolor: function () {
            return this.updateBackground()
        }}, n.prototype.createChildElements = function () {
            var e, n, r, o, i, s, a;
            for (this.head = t("<div>").attr("class", "shutto-tab-header").appendTo(this.element), e = t("<div>").attr("class", "shutto-tab-body").appendTo(this.element), n = s = 0, a = this.component.numTabs; a >= 0 ? a > s : s > a; n = a >= 0 ? ++s : --s)i = T.get(this.component.tab(n)), i.bind("sizeChanged", this.setTabsHeight), o = i.getElement().appendTo(this.head), r = T.get(this.component.pane(n)).getElement().appendTo(e), n === this.component.currentIndex && (o.addClass("shutto-active"), r.addClass("shutto-active"));
            return this.updateBackground(), setTimeout(this.setTabsHeight, 10)
        }, n.prototype.updateBackground = function () {
            var t, e;
            return e = (t = this.get("bgcolor")) ? this.get("gradation") ? this.gradientStyles(t) : [
                ["background", t]
            ] : [
                ["background", "transparent"]
            ], this.setStyles("head-background", ".shutto-tab-header", e)
        }, n.prototype.setTabsHeight = function () {
            var e, n, r, o, i, s, a, u, c, p, l, h, d, f, m;
            for (i = this.getElement().find(".shutto-tab-label > span"), s = 0, p = i.length; p > s; s++)o = i[s], t(o).css({height: "auto"});
            for (n = 0, a = 0, l = i.length; l > a; a++)o = i[a], n = Math.max(n, o.clientHeight);
            if (n && !(0 > n)) {
                for (m = [], u = 0, h = i.length; h > u; u++) {
                    for (o = i[u], o = t(o), e = n, f = ["padding-top", "padding-bottom"], c = 0, d = f.length; d > c; c++)r = f[c], e -= parseFloat(o.css(r));
                    m.push(o.css({height: "" + e + "px"}))
                }
                return m
            }
        }, n.prototype.getInsertion = function (e, r) {
            return t.geo.isInside(this.head.offset(), r) ? {parent: this.component.parent, index: this.component.parent.children.indexOf(this.component)} : n.__super__.getInsertion.apply(this, arguments)
        }, n
    }(T.Node), T.TabTab = function (e) {
        function n() {
            this.onPropChange = qe(this.onPropChange, this), this.onSelectTab = qe(this.onSelectTab, this);
            var t = this;
            n.__super__.constructor.apply(this, arguments), this.component.parent.bind("selecttab", this.onSelectTab), this.bind({select: function (e) {
                var n;
                return 1 === e.components.length ? null != (n = t.component.parent) ? n.selectTab(t.component.index) : void 0 : void 0
            }})
        }

        return Fe(n, e), n.prototype.destroy = function () {
            return n.__super__.destroy.apply(this, arguments), this.component.unbind("selecttab", this.onSelectTab)
        }, n.prototype.onSelectTab = function (t) {
            return this.element.toggleClass("shutto-active", t.index === this.component.index)
        }, n.prototype.createElement = function () {
            return this.element = t("<div>").attr("class", "shutto-tab-label").append(t("<div>").attr({"class": "shutto-static-marker", title: "静的コンテンツ"})).append(t("<span>").html(T.Line.prototype.textHtml(this.component.text) || "　")), this.setProperty("fontsize", this.component.get("fontsize")), this.element
        }, n.prototype.refresh = function () {
        }, n.prototype.propertySetters = {fontcolor: function (t) {
            var e;
            return e = t && "#" !== t ? t : "transparent", this.setStyles("fontcolor", "", [
                ["color", e]
            ])
        }, tablabel: function () {
            return this.element.find("span").html(T.Line.prototype.textHtml(this.component.text) || "　")
        }}, n.prototype.sizeChangableProps = t.a.toHash(["fontsize", "tablabel"]), n.prototype.onPropChange = function (t) {
            return n.__super__.onPropChange.apply(this, arguments), this.sizeChangableProps[t.key] ? this.trigger("sizeChanged", {tab: this}) : void 0
        }, n
    }(T), T.TabPane = function (e) {
        function n() {
            this.onSelectTab = qe(this.onSelectTab, this), n.__super__.constructor.apply(this, arguments), this.component.parent.bind("selecttab", this.onSelectTab)
        }

        return Fe(n, e), n.prototype.destroy = function () {
            return n.__super__.destroy.apply(this, arguments), this.component.unbind("selecttab", this.onSelectTab)
        }, n.prototype.onSelectTab = function (t) {
            var e;
            return e = t.index === this.component.index, this.element.toggleClass("shutto-active", e), e ? T.Grid.setupCellsHeight({element: this.element}) : void 0
        }, n.prototype.createChildElements = function () {
            return n.__super__.createChildElements.apply(this, arguments), this.footer = t("<div>").attr({"class": "shutto-dropstub shutto-component", title: "この領域にタブの内容をドロップしてください。公開時にはこの余白は表示されません。"}).text("タブ").appendTo(this.element)
        }, n.prototype.getInsertion = function (e, r) {
            return t.geo.isInside(this.footer.offset(), r) ? {parent: this.component, index: this.component.children.length} : n.__super__.getInsertion.apply(this, arguments)
        }, n
    }(T.Node), T.Accordion = function (t) {
        function e() {
            return G = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.propertySetters = {accordionanimate: function () {
        }, accordionsize: function () {
            return this.setDirty()
        }, accordionicon: function (t) {
            return this.element.attr("data-accordionicon", t)
        }}, e
    }(T.Node), T.AccordionHeader = function (e) {
        function n() {
            return X = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.prototype.createChildElements = function () {
            return n.__super__.createChildElements.apply(this, arguments), t("<span>").attr("class", "shutto-accordion-header-icon").appendTo(this.element), this.element.addClass("shutto-open")
        }, n.prototype.getInsertion = function (t, e) {
            return T.Page.prototype.getInsertion.call(this, t, e)
        }, n
    }(T.Group), T.AccordionPane = function (e) {
        function n() {
            return Y = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.prototype.createChildElements = function () {
            return n.__super__.createChildElements.apply(this, arguments), this.element.addClass("shutto-open"), this.footer = t("<div>").attr({"class": "shutto-dropstub shutto-component", title: "この領域にセクションの内容をドロップしてください。公開時にはこの余白は表示されません。"}).appendTo(this.element)
        }, n.prototype.getInsertion = function (e, r) {
            return t.geo.isInside(this.footer.offset(), r) ? {parent: this.component, index: this.component.children.length} : n.__super__.getInsertion.apply(this, arguments)
        }, n
    }(T.Node), T.Pane2 = function (e) {
        function n() {
            this.onResize = qe(this.onResize, this), n.__super__.constructor.apply(this, arguments), app.bind("resizePreview", this.onResize)
        }

        return Fe(n, e), n.prototype.propertySetters = {pane2splayout: function (t) {
            return this.setPropertyClass("pane2splayout", t), this.setDirty()
        }, pane2limit: function () {
            return this.onResize()
        }, pane2sidewidth: function (t) {
            return this.setStyles("pane2sidewidth", "@current.shutto-tablet > .shutto-component-pane2-side", [
                ["width", "" + (t || 320) + "px"]
            ])
        }, csspane1: function (t) {
            return this.setCssText("csspane1", (t || "").replace(/@current/g, "@current:not(.shutto-tablet)"))
        }, csspane2: function (t) {
            return this.setCssText("csspane2", (t || "").replace(/@current/g, "@current.shutto-tablet"))
        }}, n.prototype.destroy = function () {
            return n.__super__.destroy.apply(this, arguments), app.unbind("resizePreview", this.onResize)
        }, n.prototype.onResize = function () {
            var e;
            return null != (e = this.element) ? e.toggleClass("shutto-tablet", parseInt(t("body").data("preview-width")) >= (parseInt(this.get("pane2limit")) || 640)) : void 0
        }, n.prototype.createChildElements = function () {
            return n.__super__.createChildElements.apply(this, arguments), "bottom" === this.get("pane2splayout") && T.get(this.component.main).element.after(T.get(this.component.side).element), this.onResize()
        }, n
    }(T.Node), T.Pane2Pane = function (e) {
        function n() {
            return Z = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.prototype.ignore = t.extend(t.a.toHash(["pane2splayout", "pane2tablayout", "pane2limit", "pane2sidewidth"]), T.Node.prototype.ignore), n.prototype.propertySetters = {csspane1: function (t) {
            return this.setCssText("csspane1", (t || "").replace(/@current/g, ":not(.shutto-tablet) > @current"))
        }, csspane2: function (t) {
            return this.setCssText("csspane2", (t || "").replace(/@current/g, ".shutto-tablet > @current"))
        }}, n.prototype.createChildElements = function () {
            return n.__super__.createChildElements.apply(this, arguments), this.footer = t("<div>").attr({"class": "shutto-dropstub shutto-component", title: "この領域に" + this.sublabel + "の内容をドロップしてください。"}).text("2カラム: " + this.sublabel).appendTo(this.element)
        }, n.prototype.getInsertion = function (e, r) {
            var o;
            return t.geo.isInside(this.footer.offset(), r) ? {parent: this.component, index: this.component.children.length} : (o = n.__super__.getInsertion.apply(this, arguments), o.parent === this.component.parent ? {parent: this.component, index: this.component.children.length} : o)
        }, n
    }(T.Node), T.Pane2Main = function (t) {
        function e() {
            return J = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.sublabel = "メイン", e
    }(T.Pane2Pane), T.Pane2Side = function (t) {
        function e() {
            return K = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.sublabel = "サイドバー", e
    }(T.Pane2Pane), T.Repeat2 = function (t) {
        function e() {
            return Q = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.propertySetters = {repeatrange: function () {
            return this.setDirty()
        }, repeatroot: function () {
            return this.setDirty()
        }, repeatstart: function () {
            return this.setDirty()
        }, repeatrepeat: function () {
            return this.setDirty()
        }, bgcolor: function () {
        }, bgimage: function () {
        }, bgrepeat: function () {
        }, bgpositionx: function () {
        }, bgpositiony: function () {
        }, bgsizex: function () {
        }, bgsizey: function () {
        }}, e.prototype.getInsertion = function () {
            return T.prototype.getInsertion.apply(this, arguments)
        }, e
    }(T.Node), T.Form = function (e) {
        function n() {
            return te = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.prototype.tagName = function () {
            return"form"
        }, n.prototype.createChildElements = function () {
            return n.__super__.createChildElements.apply(this, arguments), this.footer = t("<div>").attr({"class": "shutto-dropstub shutto-component", title: "この領域にフォームの内容をドロップしてください。公開時にはこの余白は表示されません。"}).text("フォーム").appendTo(this.element)
        }, n.prototype.getInsertion = function (e, r) {
            return t.geo.isInside(this.footer.offset(), r) ? {parent: this.component, index: this.component.children.length} : n.__super__.getInsertion.apply(this, arguments)
        }, n
    }(T.Node), T.Symbol = function (e) {
        function n() {
            this.setupLocked = qe(this.setupLocked, this), n.__super__.constructor.apply(this, arguments), this.component.bind("locked", this.setupLocked), this.component.bind("unlocked", this.setupLocked)
        }

        return Fe(n, e), n.prototype.destroy = function () {
            return n.__super__.destroy.apply(this, arguments), this.component.unbind("locked", this.setupLocked), this.component.unbind("unlocked", this.setupLocked)
        }, n.prototype.setupLocked = function () {
            return this.element.toggleClass("shutto-locked", !!this.component.locked)
        }, n.prototype.propertySetters = {symbolname: function (t) {
            return this.element.children(".shutto-dropstub").text(t)
        }}, n.prototype.createChildElements = function () {
            return n.__super__.createChildElements.apply(this, arguments), this.footer = t("<div>").attr({"class": "shutto-dropstub shutto-component"}).text(this.component.get("symbolname")).appendTo(this.element), this.setupLocked()
        }, n.prototype.getInsertion = function (e, r) {
            return this.component.locked ? T.prototype.getInsertion.apply(this, arguments) : t.geo.isInside(this.footer.offset(), r) ? this.component.symbolDescendant(e) ? T.prototype.getInsertion.apply(this, arguments) : {parent: this.component, index: this.component.children.length} : n.__super__.getInsertion.apply(this, arguments)
        }, n
    }(T.Node), T.Slider = function (e) {
        function n() {
            this.onChangeImage = qe(this.onChangeImage, this), this.setupSelectedImage = qe(this.setupSelectedImage, this), n.__super__.constructor.apply(this, arguments), this.component.bind("prop.imagesrc", this.onChangeImage)
        }

        return Fe(n, e), n.prototype.destroy = function () {
            return n.__super__.destroy.apply(this, arguments), this.component.unbind("prop.imagesrc", this.onChangeImage)
        }, n.prototype.setupSelectedImage = function () {
            var t, e, n, r, o, i;
            for (o = (null != (r = app.select) ? r.components : void 0) || [], e = 0, n = o.length; n > e; e++)if (t = o[e], t.parent === this.component) {
                this.selectedLine = t;
                break
            }
            return(null != (i = this.selectedLine) ? i.parent : void 0) !== this.component && (this.selectedLine = this.component.children[0]), this.selectedLine ? this.updateSelectedImage() : void 0
        }, n.prototype.onChangeImage = function (t) {
            return t.target === this.selectedLine ? this.updateSelectedImage() : void 0
        }, n.prototype.updateSelectedImage = function () {
            return this.element.find("img.shutto-selected-image").attr({src: T.get(this.selectedLine).getImagesrc()})
        }, n.prototype.createChildElements = function () {
            var e, r, o, i, s;
            if (this.component.children.length) {
                for (t('<div class="shutto-slider">').append(t('<img class="shutto-selected-image">')).append(t('<div class="shutto-prev">').append("<span>")).append(t('<div class="shutto-next">').append("<span>")).appendTo(this.element), this.setupSelectedImage(), n.__super__.createChildElements.apply(this, arguments), t("<div>").attr({"class": "shutto-lines-footer"}).appendTo(this.element), i = this.component.children, s = [], r = 0, o = i.length; o > r; r++)e = i[r], s.push(T.get(e).bind("select", this.setupSelectedImage));
                return s
            }
            return this.createEmptyChildElements()
        }, n.prototype.createEmptyChildElements = function () {
            var e, n, r, o, i;
            for (n = t("<div>").attr({"class": "shutto-images"}).append(t("<span>").text("スライドショーで使う画像をドロップ")).appendTo(this.element), r = t("<div>").attr({"class": "shutto-positions"}).appendTo(this.element), i = [], e = o = 1; 3 >= o; e = ++o)i.push(t("<span>").text(e).appendTo(r));
            return i
        }, n.prototype.getInsertion = function (t, e) {
            var n, r, o, i;
            return i = this.element.offset(), e.y <= i.top + 10 || i.top + i.height - 10 <= e.y ? T.prototype.getInsertion.call(this, t, e) : (n = this.getChildAt(e)) ? (o = this.component.children.indexOf(n.component), r = n.getElement().offset(), e.x > r.left + r.width / 2 && (o += 1), {parent: this.component, index: o}) : {parent: this.component, index: e.x < i.left + i.width / 2 ? 0 : this.component.children.length}
        }, n
    }(T.Group), T.Affiliate = function (e) {
        function n() {
            return ee = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.prototype.propertySetters = {affiliatetype: function () {
            return this.setupImage()
        }, affiliatetag: function () {
        }}, n.prototype.createElement = function () {
            var e;
            return e = t("<div>").attr("class", "shutto-component-affiliate shutto-stub"), this.imageElement = t("<img>").appendTo(e), this.setupImage(), e
        }, n.prototype.setupImage = function () {
            return this.imageElement.attr("src", "/images/affiliate/" + (this.get("affiliatetype") || "blank") + ".png")
        }, n
    }(T), c = function (t) {
        function e() {
            e.__super__.constructor.apply(this, arguments), this.actions = [], this.currentIndex = -1, this.bindToComponents({"child.insert": this.onChildInsert, "child.remove": this.onChildRemove, prop: this.onPropChange})
        }

        return Fe(e, t), e.prototype.limit = 1e3, e.prototype.bindToComponents = function (t) {
            var e, n;
            for (n in t)e = t[n], t[n] = this.handler(e);
            return r.observer.bind(t)
        }, e.prototype.push = function (t) {
            return this.actions[++this.currentIndex] = t, this.currentIndex >= this.limit ? (this.actions = this.actions.slice(this.currentIndex - this.limit + 1, this.currentIndex + 1), this.currentIndex -= this.limit) : this.actions = this.actions.slice(0, this.currentIndex + 1)
        }, e.prototype.clear = function () {
            return this.actions = [], this.currentIndex = -1
        }, e.prototype.commit = function () {
            return this.currentIndex >= 0 && (this.actions[this.currentIndex].commit = !0), this.trigger("commit")
        }, e.prototype.undo = function () {
            var t;
            if (t = this.actions[this.currentIndex]) {
                for (; ;)if (this.run(t.undo), t = this.actions[--this.currentIndex], !t || t.commit)break;
                return this.trigger("undo")
            }
        }, e.prototype.redo = function () {
            for (var t; (t = this.actions[this.currentIndex + 1]) && (this.currentIndex++, this.run(t.redo), !t.commit););
            return this.trigger("redo")
        }, e.prototype.canUndo = function () {
            return this.currentIndex >= 0
        }, e.prototype.canRedo = function () {
            return!!this.actions[this.currentIndex + 1]
        }, e.prototype.run = function (t) {
            return this.running = !0, t(), this.running = !1
        }, e.prototype.handler = function (t) {
            var e = this;
            return function (n) {
                return e.running ? void 0 : t.call(e, n)
            }
        }, e.prototype.onChildInsert = function (t) {
            return this.push({undo: function () {
                return t.target.removeChild(t.children)
            }, redo: function () {
                return t.target.insertChild(t.children, t.index)
            }})
        }, e.prototype.onChildRemove = function (t) {
            return this.push({undo: function () {
                var e, n, r, o, i;
                for (o = t.removals, i = [], n = 0, r = o.length; r > n; n++)e = o[n], i.push(t.target.insertChild(e.child, e.index));
                return i
            }, redo: function () {
                return t.target.removeChild(t.children)
            }})
        }, e.prototype.onPropChange = function (t) {
            return this.push({undo: function () {
                return t.target.set(t.key, t.oldValue)
            }, redo: function () {
                return t.target.set(t.key, t.value)
            }})
        }, e
    }(m), a = function (e) {
        function n() {
            n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.prototype.storageKey = "copiedComponents", n.prototype.enable = function () {
            return!!window.localStorage
        }, n.prototype.canCopy = function () {
            var e, n, o, i, s;
            if (this.enable() && !app.select.empty()) {
                for (i = app.select.components, n = 0, o = i.length; o > n; n++)if (e = i[n], !(null != (s = r[t.s.capitalize(e.type())]) ? s.deserialize : void 0))return!1;
                return!0
            }
        }, n.prototype.canPaste = function () {
            return this.enable() && !!this.encodedCopiedComponents()
        }, n.prototype.encodedCopiedComponents = function () {
            return window.localStorage[this.storageKey]
        }, n.prototype.encodeComponents = function (t) {
            var e, n;
            return t = 1 === t.length && "menu" === t[0].type() ? (e = t[0].findButton()) ? [e] : [] : t, JSON.stringify(function () {
                var e, r, o;
                for (o = [], e = 0, r = t.length; r > e; e++)n = t[e], "menu" !== n.type() && o.push(n.serialize());
                return o
            }())
        }, n.prototype.copy = function () {
            return window.localStorage[this.storageKey] = this.encodeComponents(app.select.components)
        }, n.prototype.paste = function () {
            var t, e, n, o;
            return e = function () {
                var e, n, o, i;
                for (o = JSON.parse(this.encodedCopiedComponents()), i = [], e = 0, n = o.length; n > e; e++)t = o[e], i.push(r.load(t));
                return i
            }.call(this), n = this.getInsertionAfter(_.last(app.select.components), e), e = n.parent.insertChild(e, null != (o = n.index) ? o : n.parent.children.length, !1), app.history.commit(), app.select.set(e)
        }, n.prototype.getInsertionAfter = function (t, e) {
            var n, r;
            if (!t)return{parent: app.page};
            switch (t.type()) {
                case"tab-tab":
                    return{parent: t.parent.pane(t.index)};
                case"box":
                    return{parent: t};
                case"accordion-header":
                    return{parent: t.parent.pane(t.index())};
                default:
                    if (r = t.parent, "grid" === r.type())return{parent: t, index: t.children.length};
                    try {
                        return r.validateInsertedChildren(e, !0), {parent: r, index: r.children.indexOf(t) + 1}
                    } catch (o) {
                        return n = o, this.getInsertionAfter(r, e)
                    }
            }
        }, n
    }(m), u = function (e) {
        function n(e) {
            this.checkTarget = qe(this.checkTarget, this), this.stop = qe(this.stop, this), this.drag = qe(this.drag, this), this.cancel = qe(this.cancel, this), this.check = qe(this.check, this), n.__super__.constructor.apply(this, arguments), this.mouse = {}, this.value = {}, e.offset && (this.value.now = {x: e.offset.left, y: e.offset.top}), this.background = t("<div>").attr("class", "shutto-drag-bg").appendTo(document.body), this.element = e.element.css("visibility", "hidden").appendTo(document.body), this.components = t.a(e.components), this.target = app.view.getElement().parent(), this.document = t(e.document || document)
        }

        return Fe(n, e), n.snap = 6, n.prototype.start = function (t) {
            var e;
            return t.preventDefault(), this.mouse.start = this.mouse.now = {x: t.pageX, y: t.pageY}, (e = this.value).now || (e.now = {x: parseInt(this.element.css("left")), y: parseInt(this.element.css("top"))}), this.mouse.pos = {x: this.mouse.start.x - this.value.now.x, y: this.mouse.start.y - this.value.now.y}, this.document.bindWithTouch({mousemove: this.check, mouseup: this.cancel})
        }, n.prototype.check = function (t) {
            return Math.round(Math.sqrt(Math.pow(t.pageX - this.mouse.start.x, 2) + Math.pow(t.pageY - this.mouse.start.y, 2))) > this.constructor.snap ? (this.cancel(), this.document.bindWithTouch({mousemove: this.drag, mouseup: this.stop}), this.trigger("snap", {event: t})) : void 0
        }, n.prototype.cancel = function (t) {
            return this.document.unbindWithTouch({mousemove: this.check, mouseup: this.cancel}), t ? (this.dispose(), this.trigger("cancel", {event: t})) : void 0
        }, n.prototype.drag = function (t) {
            return this.mouse.now = {x: t.pageX, y: t.pageY}, this.value.now = {x: this.mouse.now.x - this.mouse.pos.x, y: this.mouse.now.y - this.mouse.pos.y}, this.element.css({visibility: "visible", left: this.value.now.x, top: this.value.now.y}), this.checkTarget(), this.trigger("drag", {event: t})
        }, n.prototype.stop = function (t) {
            return this.checkTarget(), this.trigger(this.targeting ? "drop" : "dropout", {event: t}), this.document.unbindWithTouch({mousemove: this.drag, mouseup: this.stop}), t ? (this.dispose(), this.trigger("complete", {event: t})) : void 0
        }, n.prototype.checkTarget = function (e) {
            var n;
            return n = t.geo.isInside(this.target.offset(), this.getPosition()), n ? (this.targeting || this.trigger("dragin", {event: e}), this.trigger("dragover", {event: e})) : this.targeting && this.trigger("dragout", {event: e}), this.targeting = n
        }, n.prototype.dispose = function () {
            return this.element.remove(), this.background.remove()
        }, n.prototype.alive = !1, n.prototype.getPosition = function () {
            return this.mouse.now
        }, n
    }(m), u.Component = function (e) {
        function n(e) {
            var r, o, i, s, a, u, c;
            for (o = t("<div>").attr("class", "shutto-floating"), "line" === e[0].type() && o.addClass("shutto-floating-component-line"), u = 0, c = e.length; c > u; u++)r = e[u], a = T.get(r).getElement(), i = t(a[0].cloneNode(!0)), s = a.offset(), i.css({width: s.width - parseFloat(i.css("padding-left")) - parseFloat(i.css("padding-right")), height: s.height - parseFloat(i.css("padding-top")) - parseFloat(i.css("padding-bottom"))}).appendTo(o);
            s = T.get(e[0]).getElement().offset(), o.css({left: s.left, top: s.top, width: s.width}), n.__super__.constructor.call(this, {element: o, components: e})
        }

        return Fe(n, e), n.prototype.alive = !0, n
    }(u), u.Template = function (e) {
        function n(e, r, o) {
            n.__super__.constructor.call(this, {components: r, offset: o, element: t("<div>").attr("class", "shutto-floating shutto-floating-" + e)})
        }

        return Fe(n, e), n
    }(u), u.Extract = function (e) {
        function n(e, o, i) {
            var s, a, u, c, p, l, h, d;
            a = new r.Line.Content.Extract(e), c = ((p = a.getImage()) ? t("<img>").attr("src", p).sanitizeLink("src") : t("<div>").html(T.Line.prototype.textHtml(a.getText()))).attr("class", "shutto-floating shutto-floating-extract"), s = new r.Group({template: "text"}), s.addChild(new r.Line({content: a})), l = {left: o.pageX - this.handle.x, top: o.pageY - this.handle.y}, u = document, this.diff = {left: 0, top: 0}, !i && t.browser.mozilla && (u = e[0].ownerDocument, h = app.source.iframe.offset(), d = app.source.window, this.diff = {left: h.left - d.pageXOffset, top: h.top - d.pageYOffset}, l.left += this.diff.left, l.top += this.diff.top), n.__super__.constructor.call(this, {element: c, offset: l, components: s, document: u})
        }

        return Fe(n, e), n.prototype.handle = {x: 20, y: 10}, n.prototype.dispose = function () {
            return n.__super__.dispose.apply(this, arguments), app.source.$.events.trigger("dragcomplete")
        }, n.prototype.getPosition = function () {
            return{x: this.mouse.now.x + this.diff.left, y: this.mouse.now.y + this.diff.top}
        }, n
    }(u), u.Navigation = function (t) {
        function e(t, n) {
            e.__super__.constructor.call(this, t, n, !0)
        }

        return Fe(e, t), e.prototype.dispose = function () {
            return u.prototype.dispose.apply(this, arguments)
        }, e
    }(u.Extract), S = function () {
        function e(t, e) {
            this.name = t, this.props = null != e ? e : {}
        }

        var n, r, o;
        e.prototype.set = function (t) {
            var e, n, r, o;
            t.template = this.name, r = this.props;
            for (e in r)n = r[e], t.set(e, null != (o = "function" == typeof n ? n() : void 0) ? o : n);
            return t
        }, e.prototype.update = function (t, e) {
            return this.constructor.keys[t] ? this.props[t] = e : void 0
        }, e.keys = t.a.toHash(["bgcolor", "fontcolor", "bold", "fontsize", "align", "textshadow", "noborder", "gradation", "italic", "underline", "button", "accordionanimate", "formsendto", "lineheight", "linkiconpos", "linkicon"]), o = {heading: {gradation: !0, bgcolor: "#81a8ce", fontcolor: "#ffffff", bold: !0, fontsize: "large", align: "center", textshadow: !0}, text: {gradation: !0, bgcolor: "#ffffff"}, menubutton: {gradation: !0, bgcolor: "#ffffff", align: "right", fontsize: "small"}, menu: {gradation: !1, bgcolor: "#ffffff", round: !0}, image: {}, box: {}, grid: {gradation: !1}, cell: {}, tab: {}, tablabel: {bold: !0, fontsize: "medium"}, tabpane: {gradation: !1}, accordion: {accordionanimate: !0}, accordionheader: {gradation: !0, bold: !0}, accordionpane: {gradation: !1}, form: {formsendto: function () {
            return window.user.email
        }}, textfield: {}, button: {}, checkbox: {}, select: {}, slider: {}};
        for (n in o)r = o[n], e[n] = new e(n, r);
        return e.set = function (t, e) {
            var n;
            return null != (n = this[t]) ? n.set(e) : void 0
        }, e
    }(), I = function () {
        function e(e) {
            var n = this;
            e = t(e), e.bindWithTouch({mousedown: function (t) {
                var e;
                return e = new u.Template(n.name, n.createComponent(), {left: t.pageX - 30, top: t.pageY - 25}), e.bind("cancel", function () {
                    var t;
                    return t = app.page.addChild(e.components), app.history.commit(), app.select.set(t)
                }), app.acceptDrop(e), e.start(t)
            }})
        }

        return e
    }(), I.Heading = function (t) {
        function e() {
            return ne = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "heading", e.prototype.createComponent = function () {
            return new r.Group({children: new r.Line({content: new r.Line.Content.Text("タイトル")}), template: "heading"})
        }, e
    }(I), I.Text = function (t) {
        function e() {
            return re = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "text", e.prototype.createComponent = function () {
            return new r.Group({children: new r.Line({content: new r.Line.Content.Text("テキスト")}), template: "text"})
        }, e
    }(I), I.Image = function (t) {
        function e() {
            return oe = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "image", e.prototype.createComponent = function () {
            return new r.Group({children: new r.Line({content: new r.Line.Content.Image("" + location.protocol + "//" + location.host + "/images/sample.png")}), template: "image"})
        }, e
    }(I), I.Box = function (t) {
        function e() {
            return ie = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "box", e.prototype.createComponent = function () {
            return new r.Box({template: "box"})
        }, e
    }(I), I.Grid = function (t) {
        function e() {
            return se = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "grid", e.prototype.createComponent = function () {
            return new r.Grid({sizeX: 3, sizeY: 2, template: "grid"})
        }, e
    }(I), I.Tab = function (t) {
        function e() {
            return ue = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "tab", e.prototype.createComponent = function () {
            return new r.Tab({numTabs: 3, template: "tab"})
        }, e
    }(I), I.Accordion = function (t) {
        function e() {
            return ce = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "accordion", e.prototype.createComponent = function () {
            return new r.Accordion({size: 3, template: "accordion"})
        }, e
    }(I), I.Slider = function (t) {
        function e() {
            return pe = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "slider", e.prototype.createComponent = function () {
            return new r.Slider({template: "slider"})
        }, e
    }(I), I.Form = function (t) {
        function e() {
            return le = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "form", e.prototype.createComponent = function () {
            return new r.Form({template: "form", children: new r.Group({children: [new r.Line({content: new r.Line.Content.Textfield}).set("placeholder", "お名前").set("inputlabel", "お名前").set("inputrequired", !0).set("inputtype", "text"), new r.Line({content: new r.Line.Content.Button})]})}).set("formcompletemessage", "送信しました。").set("formtype", "email").set("formconfirm", !0)
        }, e
    }(I), I.Textfield = function (t) {
        function e() {
            return he = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "textfield", e.prototype.createComponent = function () {
            return new r.Group({children: new r.Line({content: new r.Line.Content.Textfield}), template: "text"})
        }, e
    }(I), I.Button = function (t) {
        function e() {
            return de = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "button", e.prototype.createComponent = function () {
            return new r.Group({children: new r.Line({content: new r.Line.Content.Button}), template: "text"})
        }, e
    }(I), I.Checkbox = function (t) {
        function e() {
            return fe = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "checkbox", e.prototype.createComponent = function () {
            return new r.Group({children: new r.Line({content: new r.Line.Content.Checkbox}), template: "text"})
        }, e
    }(I), I.Select = function (t) {
        function e() {
            return me = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "select", e.prototype.createComponent = function () {
            return new r.Group({children: new r.Line({content: new r.Line.Content.Select}), template: "text"})
        }, e
    }(I), I.Map = function (t) {
        function e() {
            return ge = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "map", e.prototype.createComponent = function () {
            return new r.Group({children: new r.Line({content: new r.Line.Content.Map({locationmode: "query", query: "京都駅", zoom: 14, marker: !0})}), template: "text"})
        }, e
    }(I), I.Recommend = function (t) {
        function e() {
            return ye = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "recommend", e.prototype.createComponent = function () {
            return new r.Group({children: new r.Line({content: new r.Line.Content.Recommend({username: app.source.url().match(/\/\/([^\/]+)/)[1], name: "item", tag: "_rcmdjp._displayRecommend({\n  template: 'recommend_smp'\n});".trim()})}), template: "text"})
        }, e
    }(I), I.Affiliate = function (t) {
        function e() {
            return be = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "affiliate", e.prototype.createComponent = function () {
            return new r.Affiliate({template: "affiliate"})
        }, e
    }(I), I.Menu = function (t) {
        function e() {
            return xe = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "menu", e.prototype.createComponent = function () {
            var t, e;
            return e = new r.Line({content: new r.Line.Content.Menu, template: "menubutton"}), e.set("float", !0), t = new r.Group({children: e, template: "text"})
        }, e
    }(I), I.Pc = function (e) {
        function n() {
            return _e = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.prototype.name = "pc", n.prototype.createComponent = function () {
            var e;
            return e = new r.Group({children: [new r.Line({content: new r.Line.Content.Text("PC向けページを表示")})], template: "text"}), e.set("round", !0), e.set("link", (t("#shutto-property-group-pclink").data("service-name") || "shutto") + ":view('pc')"), e.set("bold", !0), e.set("align", "center"), e
        }, n
    }(I), I.Pane2 = function (t) {
        function e() {
            return we = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.name = "pane2", e.prototype.createComponent = function () {
            return new r.Pane2
        }, e
    }(I), C = function () {
        function e(e) {
            var n = this;
            this.iframe = t(e), this.window = this.iframe[0].contentWindow, this.$ = this.window.$shutto, this.root = this.$("html"), this.iframe.bind({mouseover: function (e) {
                return t.ev.isMouseInOut(e, n.iframe[0]) ? n.$.events.trigger("documentmouseenter", e) : void 0
            }, mouseout: function (e) {
                return t.ev.isMouseInOut(e, n.iframe[0]) ? n.$.events.trigger("documentmouseleave", e) : void 0
            }}), this.$.events.bind({dragelement: function (t) {
                var e;
                return e = new u.Extract(n.$(n.$.selectedElement), t), e.start(t), app.acceptDrop(e)
            }})
        }

        return e.prototype.url = function () {
            return t.s.parseQuery(this.iframe.attr("src").split("?")[1]).url
        }, e.prototype.domain = function () {
            return new URI(this.url()).authority
        }, e.prototype.toAbsoluteUrl = function (t) {
            var e;
            try {
                return new URI(t).resolve(new URI(this.url())).toString()
            } catch (n) {
                return e = n, ""
            }
        }, e.prototype.find = function (t, e) {
            var n, r, o, i, s, a, u, c;
            if (null == e && (e = this.root), !t)return e;
            try {
                return t.match(/^\s*>/) && ((o = e.attr("id")) || e.attr("id", o = c = "_shutto_tmp_id"), t = "#" + o + " " + t, u = e, e = e.parent(), e.length || (a = !0, e = this.$("<div>").append(u))), (s = t.match(/^(.+)\[(\d+)\]\s*$/)) ? (n = s[1], i = parseInt(s[2], 10), null != i ? this.$(e.find(n)[i - 1]) : this.$()) : e.find(t)
            } catch (p) {
                return r = p, this.$()
            } finally {
                a && u.remove(), c && u.removeAttr("id")
            }
        }, e.prototype.selector = function (t, e) {
            var n, r, o, i, s, a;
            if ("html" === t.tagName())return"";
            for (s = "", n = t; (null != n ? n.length : void 0) && n[0] !== (null != e ? e[0] : void 0) && (i = n.tagName(), !s || "body" !== i) && ((r = n.getAttribute("id")) ? (r = r.trim()) && (i += "#" + r) : (o = n.attr("class")) && (o = o.trim()) && (i += "." + o.split(/\s+/).join(".")), s = s ? "" + i + " > " + s : i, !r) && "body" !== n.tagName();)n = n.parent();
            return s && e && (s = "> " + s), a = this.find(s, e), a.length <= 1 ? s : "" + s + "[" + (a.indexOf(t[0]) + 1) + "]"
        }, e
    }(),o = function (e) {
        function n() {
            n.__super__.constructor.apply(this, arguments), this.components = []
        }

        return Fe(n, e), n.prototype.set = function (e, n) {
            var r, o, i, s, a, u, c, p, l;
            return null == n && (n = {}), o = t.a.compact(function () {
                var n, o, i, s;
                for (i = t.a(e), s = [], n = 0, o = i.length; o > n; n++)r = i[n], r.canSelect() ? s.push(r) : r.parent ? s.push(r.parent) : s.push(void 0);
                return s
            }()), "slider" !== (null != (a = o[0]) ? null != (u = a.parent) ? u.type() : void 0 : void 0) && "line" === (null != (c = o[0]) ? c.type() : void 0) && (null != (p = o[0].parent) ? p.children.length : void 0) === o.length && (o = [o[0].parent]), n.force && (i = t.a(e), 1 !== i.length || i[0].canSelect() || "line" !== i[0].type() || (o = i)), t.a.equals(this.components, o) ? this.trigger("reselect", t.extend({components: o}, n)) : (l = [o, this.components], this.components = l[0], s = l[1], this.trigger("select", t.extend({components: o, oldComponents: s}, n))), this.trigger("set")
        }, n.prototype.setTo = function (t) {
            return this.components.length ? this.setBetween(this.components[0], t) : this.set(t)
        }, n.prototype.setBetween = function (e, n) {
            var r, o, i, s, a, u, c, p, l, h, d;
            if (h = t.o.findCommon("parent", e, n), a = h[0], u = 2 <= h.length ? Ge.call(h, 1) : [], a === e || a === n)return this.set(a);
            for (d = a.children, o = p = 0, l = d.length; l > p; o = ++p)if (r = d[o], -1 !== (i = u.indexOf(r))) {
                s = u[1 - i];
                break
            }
            for (c = []; (r = a.children[o++]) && (c.push(r), r !== s););
            return this.set(c)
        }, n.prototype.clear = function () {
            return this.set()
        }, n.prototype.parent = function () {
            return this.components.length ? this.components[0].parent : void 0
        }, n.prototype.empty = function () {
            return 0 === this.components.length
        }, n.prototype.isSelected = function (t, e) {
            if (!t)return!1;
            if (this.components.indexOf(t) >= 0)return!0;
            if (e)for (; t = t.parent;)if (this.components.indexOf(t) >= 0)return!0;
            return!1
        }, n.prototype.lines = function () {
            var e, n, r, o;
            try {
                return t.a.flatten(function () {
                    var r, i, s, a;
                    for (s = this.components, a = [], r = 0, i = s.length; i > r; r++)switch (e = s[r], e.type()) {
                        case"group":
                            a.push(function () {
                                var t, r, o, i;
                                for (o = e.children, i = [], t = 0, r = o.length; r > t; t++)n = o[t], i.push(n);
                                return i
                            }());
                            break;
                        case"accordion-header":
                            a.push(function () {
                                var t, r, o, i;
                                for (o = e.children, i = [], t = 0, r = o.length; r > t; t++)n = o[t], i.push(n);
                                return i
                            }());
                            break;
                        case"repeat2":
                            a.push(t.a.flatten(function () {
                                var t, r, i, s;
                                for (i = e.children, s = [], t = 0, r = i.length; r > t; t++)o = i[t], s.push(function () {
                                    var t, e, r, i;
                                    for (r = o.children, i = [], t = 0, e = r.length; e > t; t++)n = r[t], i.push(n);
                                    return i
                                }());
                                return s
                            }()));
                            break;
                        case"line":
                            a.push(e);
                            break;
                        default:
                            throw{}
                    }
                    return a
                }.call(this))
            } catch (i) {
                return r = i, null
            }
        }, n.prototype.contents = function () {
            var t, e, n, r, o;
            if (e = this.lines()) {
                for (o = [], n = 0, r = e.length; r > n; n++)t = e[n], o.push(t.content);
                return o
            }
            return null
        }, n.prototype.repeat = function () {
            var t, e;
            for (t = null != (e = this.components) ? e[0] : void 0; t;) {
                if ("repeat2" === t.type())return t;
                t = t.parent
            }
            return null
        }, n.prototype.next = function (e) {
            var n, r, o, i;
            return n = t.a.last(t.a(null != e ? e : this.components)), (o = null != n ? n.parent : void 0) ? "tab-tab" === n.type() ? (r = null != (i = o.pane(o.currentIndex)) ? i.children[0] : void 0) ? this.set(r) : this.next(o) : (r = o.children[o.children.indexOf(n) + 1]) ? this.set(r) : "tab-pane" === o.type() ? this.next(o.parent) : this.next(o) : this.set(app.page.children[0])
        }, n.prototype.previous = function (e) {
            var n, r, o;
            return n = t.a(null != e ? e : this.components)[0], (r = null != n ? n.parent : void 0) ? "tab-tab" === n.type() ? this.previous(r) : (o = r.children[r.children.indexOf(n) - 1]) ? this.set(o) : "tab-pane" === r.type() ? this.set(r.parent.tab(r.parent.currentIndex)) : this.previous(r) : this.set(t.a.last(app.page.children))
        }, n.prototype.inner = function () {
            var t, e, n;
            if (!this.empty())return t = this.components[0], this.components.length > 1 ? this.set(t) : (null != (e = t.children) ? null != (n = e[0]) ? n.canSelect() : void 0 : void 0) ? this.set(t.children[0]) : void 0
        }, n.prototype.outer = function () {
            var t;
            return this.empty() || "page" === this.parent().type() ? this.set(app.page.children) : (t = this.components[0].parent, this.set(t.canSelect() ? t : t.parent))
        }, n
    }(m),o.Selection = function (e) {
        function n() {
            this.onPropertyChange = qe(this.onPropertyChange, this);
            var t = this;
            n.__super__.constructor.apply(this, arguments), this.bind({select: function (e) {
                var n, r, o, i, s, a, u, c;
                for (a = e.oldComponents, r = 0, i = a.length; i > r; r++)n = a[r], n.unbind("prop", t.onPropertyChange);
                for (u = e.components, c = [], o = 0, s = u.length; s > o; o++)n = u[o], n.bind("prop", t.onPropertyChange), c.push(T.get(n).trigger("select", {components: e.components}));
                return c
            }})
        }

        return Fe(n, e), n.prototype.onPropertyChange = function (t) {
            return this.trigger("prop." + t.key, t)
        }, n.prototype.setProperty = function (t, e) {
            var n, r, o, i, s;
            for (i = this.components, s = [], r = 0, o = i.length; o > r; r++)n = i[r], s.push(n.set(t, e));
            return s
        }, n.prototype.getProperty = function (e) {
            return t.a.sameValue(this.components, function (t) {
                return t.get(e)
            })
        }, n
    }(o),i = function () {
        function e(e, n) {
            this.selection = e, this.bindResize = qe(this.bindResize, this), this.refresh = qe(this.refresh, this), this.container = n.container, this.element = t("<div>").attr("class", "shutto-editor-ui shutto-" + n.name + "-frame").hide().appendTo(this.container), this.padding = n.padding || [0, 0, 0, 0], this.selection.bind({select: this.bindResize, set: this.refresh})
        }

        return e.prototype.refresh = function () {
            var e, n;
            if (this.selection.components.length) {
                if (n = t.geo.mergeRect(function () {
                    var t, n, r, o;
                    for (r = this.selection.components, o = [], t = 0, n = r.length; n > t; t++)e = r[t], o.push(this.getOffset(e));
                    return o
                }.call(this)), 0 === n.width || 0 === n.height)return;
                return this.setOffset(app.globalToLocal({left: n.left + this.padding[3], width: n.width - this.padding[3] - this.padding[1], top: n.top + this.padding[0], height: n.height - this.padding[0] - this.padding[2]})), this.element.show()
            }
            return this.element.hide()
        }, e.prototype.setOffset = function (t) {
            return this.element.css(t)
        }, e.prototype.bindResize = function (t) {
            var e, n, r, o, i, s, a, u;
            for (s = t.oldComponents, n = 0, o = s.length; o > n; n++)e = s[n], null != e.uid && T.get(e).unbind("resize", this.refresh);
            for (a = t.components, u = [], r = 0, i = a.length; i > r; r++)e = a[r], u.push(T.get(e).bind("resize", this.refresh));
            return u
        }, e.prototype.getOffset = function (t) {
            var e;
            return"slider" === (null != (e = t.parent) ? e.type() : void 0) ? T.get(t).getElement().find("img").offset() : T.get(t).getElement().offset()
        }, e
    }(),i.Selection = function (t) {
        function e() {
            e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.setOffset = function (t) {
            var n, r, o, i, s;
            return e.__super__.setOffset.apply(this, arguments), o = this.container.parent()[0], i = o.scrollTop, n = o.offsetHeight, r = 20, t.top === i || t.height > n ? void 0 : t.top < i ? (o.scrollTop = t.top, void 0) : (t.bottom = t.top + t.height, t.bottom > i + n ? (s = o.scrollHeight, o.scrollTop = t.bottom >= s - r - 1 ? s : t.bottom - n) : void 0)
        }, e
    }(i),y = function (n) {
        function r(n, o, i) {
            var s = this;
            this.select = i, this.handleStop = qe(this.handleStop, this), this.handleDrag = qe(this.handleDrag, this), this.handleStart = qe(this.handleStart, this), this.handleUp = qe(this.handleUp, this), this.handleCheck = qe(this.handleCheck, this), this.onHandleDown = qe(this.onHandleDown, this), this.onClickHtml = qe(this.onClickHtml, this), this.visible = qe(this.visible, this), this.show = qe(this.show, this), this.hide = qe(this.hide, this), this.onReselect = qe(this.onReselect, this), this.onSelect = qe(this.onSelect, this), r.__super__.constructor.apply(this, arguments), this.element = t(n), this.baloonStyle = t(o), this.groups = this.createGroups(), this.select.bind({select: this.onSelect, reselect: this.onReselect}), this.element.find('header input[type="button"]').bind("click", e.remove), this.element.find(".shutto-property-close").bind("click", this.hide), this.element.find(".shutto-property-handle").bindWithTouch("mousedown", this.onHandleDown), this.bindResize(), app.bind({snap: function () {
                return s.hide({noeffect: !0})
            }, drop: function () {
                var t;
                return(null != (t = s.select.components) ? t.length : void 0) ? (s.setBaloonStyle(s.select.components), s.show()) : void 0
            }, "contextmenu.open": this.hide}), app.source.$.events.bind({documentmousedown: function (t) {
                return 0 === t.button ? s.hide() : void 0
            }, scroll: this.hide}), t("html").on("click", this.onClickHtml)
        }

        return Fe(r, n), r.prototype.createGroups = function () {
            var e, n, r, o, i, s = this;
            for (e = [], i = ["font", "content", "background", "link", "css", "align", "space", "image", "grid", "tab", "tablabel", "accordion", "accordionheader", "repeat", "extract", "page", "textfield", "checkbox", "button", "select", "form", "map", "recommend", "affiliate", "symbol", "js", "attribute", "slider", "icon", "menubutton", "menuclose", "pclink", "pane2"], r = 0, o = i.length; o > r; r++)n = i[r], e[n] = new (v[t.s.capitalize(n)])("#shutto-property-group-" + n, this.select).bind({prop: function (t) {
                return s.trigger("prop", t)
            }});
            return e
        }, r.prototype.onSelect = function (e) {
            return e.contextmenu ? this.hide() : e.navigator && 0 === e.components.length ? this.update(t.a(app.page)) : this.update(t.a(e.components))
        }, r.prototype.onReselect = function (e) {
            return 0 === e.components.length ? e.navigator ? this.update(t.a(app.page)) : this.hide() : this.show()
        }, r.prototype.update = function (e) {
            return 0 === e.length ? (this.hide(), void 0) : (this.element.find(":focus").blur(), this.setBaloonStyle(e), this.setGroupsVisible(e), this.setTitle(e), this.element.find('header input[type="button"]').toggleClass("shutto-disabled", !s.prototype.enabled.remove()), this.element.find("header .shutto-description").text(t.a.sameValue(e, function (t) {
                return t.type()
            }) ? e[0].constructor.description || "" : ""), this.show())
        }, r.prototype.hide = function (t) {
            return null == t && (t = {}), this.visible() ? (this.element.removeClass("shutto-on"), t.noeffect || this.element.addClass("shutto-off"), this.element.find(":focus").blur()) : void 0
        }, r.prototype.show = function () {
            return this.visible() ? void 0 : (this.element.removeClass("shutto-off"), this.element.addClass("shutto-on"))
        }, r.prototype.visible = function () {
            return this.element.hasClass("shutto-on")
        }, r.prototype.bindResize = function () {
            var e, n, r, o, i, s, a, u, c = this;
            return(n = t.Cookie.read("prop.bottom")) && this.element.css("bottom", n + "px"), a = null, e = t('<div class="shutto-property-dragbg">'), u = function (t, n) {
                return a = {x: t, y: n, bottom: parseInt(c.element.css("bottom"))}, e.appendTo(document.body)
            }, s = function (t, e) {
                return c.element.css("bottom", Math.max(0, a.bottom - e + a.y)), c.setBaloonStyle(c.select.components)
            }, o = function () {
                return e.remove(), n = parseInt(c.element.css("bottom")), t.Cookie.write("prop.bottom", n, {duration: 365})
            }, i = t(".shutto-property-resize-bottom"), r = {mousemove: function (t) {
                return s(t.pageX, t.pageY)
            }, mouseup: function () {
                return o(), t(document).off(r)
            }}, i.on({mousedown: function (e) {
                return e.preventDefault(), u(e.pageX, e.pageY), t(document).on(r)
            }})
        }, r.prototype.setBaloonStyle = function (t) {
            var e, n, r = this;
            return e = T.get(t[0]).getElement(), n = function () {
                var t, n;
                return n = e.offset().top, n > 0 ? (t = r.element.offset(), n += -t.top, n = Math.max(18, Math.min(n, t.height - 40)), r.baloonStyle.html(r.baloonStyle.html().replace(/top\:.*px/, "top:" + n + "px"))) : void 0
            }, e.parent().length ? n() : setTimeout(n, 50)
        }, r.prototype.setTitle = function (t) {
            var e, n;
            return n = t[0].label(), t.length > 1 ? n += " ..." : "ブロック" === n && (-1 !== (t[0].get("link") || "").indexOf(":view('pc')") ? n = "PC表示ボタン" : 1 === t[0].children.length && (n = t[0].children[0].label())), (e = t[0].symbolParent()) && (n = "" + e.get("symbolname") + " ≫ " + n), this.element.find("header h1").text(n)
        }, r.prototype.setGroupsVisible = function (e) {
            var n, r, o, i, s;
            s = this.groups;
            for (i in s)o = s[i], o.hide();
            if ("page" === e[0].type())return this.groups.page.show(), this.groups.background.show(), this.groups.css.show(), this.groups.js.show(), this.groups.attribute.show(), void 0;
            if ("slider" === e[0].type())return this.groups.slider.show(), this.groups.background.show(), this.groups.space.show(), this.groups.attribute.show(), this.groups.css.show(), void 0;
            if ("affiliate" === e[0].type())return this.groups.affiliate.show(), this.groups.background.show(), this.groups.space.show(), this.groups.attribute.show(), this.groups.css.show(), void 0;
            switch (/(shutto|smp)\:view\(\'pc\'\)/.test(e[0].get("link")) && this.groups.pclink.show(), r = this.select.contents(), r && (n = t.a.sameValue(r, function (t) {
                return t.type()
            })), "textfield" === n ? this.groups.textfield.show() : "checkbox" === n ? this.groups.checkbox.show() : "select" === n ? this.groups.select.show() : "button" === n ? this.groups.button.show() : "map" === n ? this.groups.map.show() : "recommend" === n ? this.groups.recommend.show() : "menu" === n && this.groups.menubutton.show(), t.a.contains(["extract", "selector"], n) && this.groups.extract.show(), (null != r ? r.length : void 0) && (null != r ? r.every(function (t) {
                return t.isImage()
            }) : void 0) ? (this.groups.image.show(), "extract" === n && this.groups.font.show()) : ("text" === n && this.groups.content.show(), this.groups.font.show()), "line" !== e[0].type() && this.groups.background.show(), e.every(function (e) {
                return t.a.contains(["repeat2", "group", "line"], e.type())
            }) && "menu" !== n && this.groups.link.show(), this.groups.align.show(), this.groups.space.show(), t.a.sameValue(e, function (t) {
                return t.type()
            })) {
                case"form":
                    this.groups.form.show();
                    break;
                case"grid":
                    this.groups.grid.show();
                    break;
                case"tab":
                    this.groups.tab.show();
                    break;
                case"tab-tab":
                    this.groups.tablabel.show();
                    break;
                case"accordion":
                    this.groups.accordion.show();
                    break;
                case"accordion-header":
                    this.groups.accordionheader.show();
                    break;
                case"repeat2":
                    this.groups.repeat.show();
                    break;
                case"symbol":
                    this.groups.symbol.show();
                    break;
                case"group":
                    this.groups.icon.show();
                    break;
                case"menu":
                    this.groups.menuclose.show();
                    break;
                case"pane2":
                case"pane2-main":
                case"pane2-side":
                    this.groups.pane2.show()
            }
            return this.groups.attribute.show(), this.groups.css.show()
        }, r.prototype.onClickHtml = function (e) {
            var n, r;
            return n = t(e.target), r = "#shutto-property,#shutto-preview-container,.shutto-color-panel", n.is(r) || n.parents(r).length ? void 0 : this.hide()
        }, r.prototype.onHandleDown = function (e) {
            return 0 === e.button ? (e.preventDefault(), e.stopPropagation(), this.handleDownEvent = e, t(document).bindWithTouch({mousemove: this.handleCheck, mouseup: this.handleUp})) : void 0
        }, r.prototype.handleCheck = function (e) {
            return Math.max(Math.abs(this.handleDownEvent.pageX - e.pageX), Math.abs(this.handleDownEvent.pageY - e.pageY)) >= 1 ? (t(document).unbindWithTouch("mousemove", this.handleCheck), this.handleStarted = !0, this.handleStart(e), t(document).bindWithTouch("mousemove", this.handleDrag), t("iframe").css("pointer-events", "none")) : void 0
        }, r.prototype.handleUp = function () {
            return this.unbindHandleEvents(), this.handleStarted ? (this.handleStarted = !1, this.handleStop()) : void 0
        }, r.prototype.handleStart = function () {
            var e, n, r;
            return r = t("html").offset(), n = t(this.element[0].offsetParent).offset(), e = this.element.offset(), this.dragLimits = {left: -n.left - e.width + 40, right: r.width - n.left - 20, top: -n.top + 4, bottom: e.top + e.height - n.top - 62}, this.originOffset = {top: parseInt(this.element.css("top")), left: parseInt(this.element.css("left"))}
        }, r.prototype.handleDrag = function (t) {
            return this.element.css({left: Math.min(Math.max(this.originOffset.left + t.pageX - this.handleDownEvent.pageX, this.dragLimits.left), this.dragLimits.right), top: Math.min(Math.max(this.originOffset.top + t.pageY - this.handleDownEvent.pageY, this.dragLimits.top), this.dragLimits.bottom)}), this.setBaloonStyle(this.select.components)
        }, r.prototype.handleStop = function () {
        }, r.prototype.unbindHandleEvents = function () {
            return t(document).unbindWithTouch({mousemove: this.handleCheck, mousemove: this.handleDrag, mouseup: this.handleUp}), t("iframe").css("pointer-events", "auto")
        }, r
    }(m),v = function (e) {
        function n(e, r) {
            var o, i, s, a, u, c, p, l, h = this;
            this.select = r, this.onUIChange = qe(this.onUIChange, this), n.__super__.constructor.apply(this, arguments), this.element = t(e), this.uis = {}, this.panels = {}, this.binds = {}, this.uploaders = {}, p = this.ui;
            for (s in p)for (i = p[s], l = t.a(i), a = function (e) {
                var n, r, o;
                return r = new (z[t.s.capitalize(s)])(e).bind("change", h.onUIChange), e = r.key, h.uis[e] = r, n = (null != (o = h.modifiers[e]) ? o.key : void 0) ? h.modifiers[e].key : e, h.binds["prop." + n] = h.propertyChangeHandler(h.uis[e])
            }, u = 0, c = l.length; c > u; u++)o = l[u], a(o);
            this.element.hasClass("shutto-toggle") && this.element.find("h1").bind("click", function (e) {
                return t(e.target).closest(".shutto-subgroup").length ? void 0 : (h.element.toggleClass("shutto-open"), h.element.hasClass("shutto-open") ? h.trigger("open") : h.trigger("close"))
            }), this.element.delegate(".shutto-subgroup.shutto-toggle h1", "click", function (e) {
                return t(e.target).closest(".shutto-subgroup").toggleClass("shutto-open")
            })
        }

        return Fe(n, e), n.prototype.ui = {}, n.prototype.modifiers = {}, n.prototype.setProperty = function (t, e) {
            var n;
            return n = this.modifiers[t], (null != n ? n.key : void 0) && (t = n.key), null != e && (null != n ? n.value : void 0) && (e = n.value.call(this, e)), this.setSelectionProperty(t, e), this.trigger("prop." + t, {key: t, value: e})
        }, n.prototype.setSelectionProperty = function (t, e) {
            return this.select.setProperty(t, e)
        }, n.prototype.getProperty = function (t) {
            var e, n;
            return e = this.modifiers[t], (null != e ? e.key : void 0) && (t = e.key), n = this.getSelectionProperty(t), null != n && (null != e ? e.value : void 0) && (n = e.value.call(this, n)), n
        }, n.prototype.getSelectionProperty = function (t) {
            return this.select.getProperty(t)
        }, n.prototype.onUIChange = function (t) {
            return this.editing = t.target, this.setProperty(t.key, t.value), delete this.editing, app.history.commit()
        }, n.prototype.propertyChangeHandler = function (t) {
            var e = this;
            return function (n) {
                return e.editing !== t ? t.setValue(e.getProperty(n.key)) : void 0
            }
        }, n.prototype.show = function () {
            var t, e, n;
            this.element.addClass("shutto-on"), n = this.uis;
            for (t in n)e = n[t], e.setValue(this.getProperty(t));
            return this.select.bind(this.binds), this.trigger("show")
        }, n.prototype.hide = function () {
            var t, e, n, r;
            if (this.visible()) {
                this.element.removeClass("shutto-on"), this.select.unbind(this.binds), r = this.uploaders;
                for (e in r) {
                    n = r[e];
                    try {
                        n.cancelUpload()
                    } catch (o) {
                        t = o
                    }
                }
                return this.trigger("hide")
            }
        }, n.prototype.visible = function () {
            return this.element.hasClass("shutto-on")
        }, n.prototype.uploader = function (e, n) {
            var r, o, i, s, a, u, c = this;
            if (n = t(n), r = t("#shutto-property-" + e + "-file").attr("name", "Filedata"), r.length) {
                s = "" + e + "-upload-target", o = t("<form>").attr({action: "/convert/upload", method: "post", enctype: "multipart/form-data", target: s, "class": "shutto-image-upload-form"}).bind("submit", function () {
                    return o.addClass("shutto-loading")
                }), r.parent()[0].replaceChild(o[0], r[0]), o.append(r[0]), u = N();
                for (i in u)a = u[i], t("<input>").attr({type: "hidden", name: i, value: a}).appendTo(o);
                return t("<input>").attr({type: "hidden", name: "domain", value: app.source.domain()}).appendTo(o), r.bind("change", function () {
                    var n;
                    return n = t("<iframe>").attr({name: s, "class": "shutto-ui-helper-hidden-accessible"}).appendTo(document.body).bind("load", function () {
                        return o.removeClass("shutto-loading"), c.uis[e].element.val(n[0].contentWindow.imageUrl), c.uis[e].onChange()
                    }), o.submit()
                }).bind("click", function () {
                    return r[0].value = null
                })
            }
        }, n
    }(m),v.Font = function (e) {
        function n() {
            return ke = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.prototype.ui = {button: ["bold", "italic", "underline", "textshadow"], select: ["fontsize", "lineheight"], color: "fontcolor"}, n.prototype.show = function () {
            var e, r;
            return this.element.find(".shutto-not-for-input").toggle(!t.a.contains(["textfield", "select", "button"], null != (e = this.select.components[0]) ? null != (r = e.content) ? r.type() : void 0 : void 0)), n.__super__.show.apply(this, arguments)
        }, n
    }(v),v.Align = function (e) {
        function n() {
            return Ce = n.__super__.constructor.apply(this, arguments)
        }

        return Fe(n, e), n.prototype.ui = {radio: "align", checkbox: "float"}, n.prototype.show = function () {
            var e;
            return n.__super__.show.apply(this, arguments), t("#shutto-property-float").parent().toggle("line" === (null != (e = this.select.components[0]) ? e.type() : void 0))
        }, n
    }(v),v.Icon = function (e) {
        function n() {
            this.onSelectColor = qe(this.onSelectColor, this), this.onSelectItem = qe(this.onSelectItem, this), this.toggleLibrary = qe(this.toggleLibrary, this), n.__super__.constructor.apply(this, arguments), this.uis.iconpos = new z.Plainradio(this.element.find('input[name="iconpos"]')).bind("change", this.onUIChange), this.element.delegate(".shutto-icon-sample", "click", this.toggleLibrary), this.element.delegate('[data-action="toggleLibrary"]', "click", this.toggleLibrary), this.element.delegate(".shutto-page div", "click", this.onSelectItem), this.element.delegate("[data-color]", "click", this.onSelectColor)
        }

        return Fe(n, e), n.prototype.iconSizes = ["24x24", "24x25", "26x25", "23x22", "22x22", "26x22", "28x22", "26x22", "22x26", "24x24", "24x16", "26x20", "24x22", "24x24", "20x26", "24x24", "20x28", "21x25", "18x25", "24x22", "27x26", "28x28", "21x26", "21x23", "32x22", "24x24", "28x24", "24x24", "36x25", "20x27", "24x24", "32x25", "26x26", "20x27", "23x24", "22x22", "19x24", "26x24", "24x25", "20x25", "26x25", "27x24", "26x25", "35x22", "24x26", "23x24", "27x26", "22x24", "25x24", "25x24", "21x23", "31x17", "31x24", "27x25", "24x24", "23x27", "28x25", "25x26", "32x27", "25x26", "24x24", "20x30", "26x24", "22x24", "20x26", "24x24", "30x24", "24x25", "27x14", "24x25", "26x28", "22x24", "15x24", "31x23", "22x24", "25x26", "24x24", "24x28", "29x24", "24x24", "28x15", "25x26", "26x26", "28x20", "29x25", "23x26", "28x24", "22x24", "22x24", "24x26", "24x24", "26x26", "24x25", "26x26", "24x24", "24x24", "26x25", "24x24", "24x24", "24x24", "27x23", "14x24", "19x24", "20x24", "20x22", "26x24", "22x24", "26x26", "24x22", "24x22", "24x21", "24x21", "24x21", "24x21", "24x21", "22x16", "24x22", "30x14", "30x24", "24x24", "24x28", "24x28", "24x28", "24x28", "29x23", "29x23", "29x23", "27x23", "28x24", "28x22", "24x23", "27x27", "27x27", "26x28", "24x26", "24x26", "24x24", "34x27", "24x20", "23x24", "26x28", "27x27", "27x27", "26x27", "30x22", "29x25", "29x25", "28x26", "27x25", "28x24", "24x21", "26x22", "22x18", "18x18", "23x23", "22x22", "22x22", "24x15", "24x15", "29x24", "26x22", "28x15", "22x27", "14x24", "29x24", "29x24", "14x22", "15x13", "20x24", "15x25", "14x18", "25x18", "23x18", "16x18", "10x16", "14x14", "23x18", "25x18", "14x18", "18x17", "24x16", "24x24", "22x15", "16x15", "24x26", "27x27", "24x24", "22x6", "20x20", "24x24", "26x26", "26x26", "26x26", "26x26", "26x26", "26x26", "26x26", "26x26", "26x26", "26x26", "26x26", "26x26", "26x23", "21x26", "21x26", "11x24", "25x19", "18x18", "26x25", "26x24", "20x18", "20x18", "18x20", "18x20", "24x24", "24x24", "26x26", "26x26", "26x26", "26x26", "26x26", "24x18", "24x18", "15x22", "15x22", "14x24", "22x23", "17x26", "17x24", "33x21", "21x24", "24x24", "27x17", "25x26", "25x22", "23x23", "25x25", "25x25", "10x24", "28x18", "27x24", "14x24", "16x24", "24x25", "25x18", "24x19", "22x22", "16x27", "20x20", "18x16", "27x25", "27x24", "22x27", "31x27", "28x30", "24x24", "26x17", "24x26", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "22x24", "18x25", "21x26", "26x19", "27x19", "27x25", "22x24", "21x24", "22x24", "23x24", "23x24", "28x24", "13x24", "26x29", "26x29", "25x25", "24x24", "27x23", "25x26", "28x23", "19x24", "29x24", "27x22", "23x24", "24x27", "27x25", "22x24", "24x25", "26x23", "23x25", "25x19", "27x22", "18x24", "23x24", "24x24", "24x24", "17x24", "19x24", "24x25", "25x24", "24x24", "28x22", "33x21", "24x24", "22x22", "24x23", "19x25", "25x26", "23x24", "27x24", "24x24", "24x24", "21x24", "20x25", "21x24", "25x25", "20x24", "27x19", "27x23", "21x24", "11x26", "25x20", "23x24", "27x22", "28x21", "25x25", "21x23", "24x24", "17x25", "24x24", "20x25", "23x23", "24x24", "30x22", "28x16", "26x22", "24x24", "24x21", "24x21", "24x21", "24x21", "26x19", "26x19", "19x26", "19x27", "24x24", "23x26", "24x22", "24x21", "24x22", "24x24", "25x20", "26x16", "24x22", "22x24", "23x24", "22x24", "26x25", "28x28", "27x20", "27x22", "25x25", "24x24", "19x19", "19x19", "19x19", "24x24", "24x24", "22x27", "22x26", "27x26", "25x26", "26x26", "25x25", "23x23", "23x23", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "24x24", "23x24", "24x24", "24x20", "28x18"], n.prototype.ui = {}, n.prototype.show = function () {
            return n.__super__.show.apply(this, arguments), this.element.removeClass("shutto-open"), this.updateSampleImage()
        }, n.prototype.toggleLibrary = function () {
            return this.element.hasClass("shutto-open") || this.isLibraryReady || (this.setupLibrary(), this.isLibraryReady = !0), this.element.toggleClass("shutto-open")
        }, n.prototype.onSelectItem = function (e) {
            var n, r, o, i, s, a;
            return(o = t(e.target).closest("div").find("img")) ? (a = o.data("size").split("x"), s = a[0], n = a[1], i = o.attr("src"), this.setProperty("iconurl", i), this.setProperty("iconsizex", s), this.setProperty("iconsizey", n), r = this.getProperty("iconpos"), r && "none" !== r || (this.setProperty("iconpos", "left"), this.uis.iconpos.setValue("left")), app.history.commit(), this.updateSampleImage()) : void 0
        }, n.prototype.onSelectColor = function (e) {
            var n, r, o;
            return o = t(e.target), o.hasClass("shutto-selected") ? void 0 : (n = o.data("color")) ? ((r = this.getProperty("iconurl")) && (this.setProperty("iconurl", r.replace(/\/icons\/[^\/]+\//, "/icons/" + n + "/")), app.history.commit()), this.setLibraryColor(n), this.updateSampleImage()) : void 0
        }, n.prototype.updateSampleImage = function () {
            var t, e, n, r, o;
            return r = this.element.find(".shutto-icon-sample img"), (o = this.getProperty("iconurl")) ? (n = parseInt(this.getProperty("iconsizey")) || 0, r.attr("src", o).css({display: "inline", "margin-top": "" + (30 - n) / 2 + "px"}), this.element.find(".shutto-icon-library div.shutto-page div.shutto-selected").removeClass("shutto-selected"), this.element.find('.shutto-icon-library img[src="' + o + '"]').parent().addClass("shutto-selected"), (e = o.match(/\/icons\/([^\/]+)\//)) ? (t = e[1], this.element.find(".shutto-icon-sample").data("icon-color", t), this.setLibraryColor(t)) : void 0) : r.css({display: "none"})
        }, n.prototype.setupLibrary = function () {
            var e, n, r, o, i, s, a, u, c, p, l, h;
            for (n = this.element.find(".shutto-icon-library").data("icon-color"), console.log("setup lib", this.element.find(".shutto-category-body")), p = this.element.find(".shutto-category-body"), h = [], s = 0, u = p.length; u > s; s++) {
                for (e = p[s], r = "", l = t(e).attr("data-icons").split(","), a = 0, c = l.length; c > a; a++)o = l[a], i = this.iconSizes[o], r += '<div class="shutto-icon"><img src="https://shutto.s3.amazonaws.com/icons/' + n + "/gi" + o + '.png" data-size="' + i + '"></div>';
                h.push(t(e).html(r))
            }
            return h
        }, n.prototype.setLibraryColor = function (t) {
            var e, n, r, o, i, s;
            if (e = this.element.find(".shutto-icon-library"), e.data("color") !== t) {
                for (e.data("icon-color", t), e.find(".shutto-colors .shutto-selected").removeClass("shutto-selected"), e.find('.shutto-colors [data-color="' + t + '"]').addClass("shutto-selected"), i = e.find(".shutto-page img"), s = [], r = 0, o = i.length; o > r; r++)n = i[r], s.push(n.src = (n.src || "").replace(/\/icons\/[^\/]+\//, "/icons/" + t + "/"));
                return s
            }
        }, n
    }(v),v.Space = function (e) {
        function n() {
            this.setupPlaceholders = qe(this.setupPlaceholders, this), n.__super__.constructor.apply(this, arguments), this.bind("open", this.setupPlaceholders)
        }

        return Fe(n, e), n.prototype.ui = {textfield: ["margintop", "marginright", "marginbottom", "marginleft", "paddingtop", "paddingright", "paddingbottom", "paddingleft"]}, n.prototype.show = function () {
            var t;
            return n.__super__.show.apply(this, arguments), t = this.hasProperty(), this.element.toggleClass("shutto-open", t), t ? this.setupPlaceholders() : void 0
        }, n.prototype.setupPlaceholders = function () {
            var e, n, r, o, i, s, a, u, c;
            for (n = function () {
                var t, n, r, o;
                for (r = this.select.components, o = [], t = 0, n = r.length; n > t; t++)e = r[t], o.push(T.get(e).getElement());
                return o
            }.call(this), u = ["margin", "padding"], c = [], s = 0, a = u.length; a > s; s++)o = u[s], c.push(function () {
                var e, s, a, u;
                for (a = ["top", "right", "bottom", "left"], u = [], e = 0, s = a.length; s > e; e++)r = a[e], i = t.a.sameValue(n, function (t) {
                    return Math.round(10 * parseFloat(t.css("" + o + "-" + r))) / 10
                }), u.push(this.uis["" + o + r].element.attr("placeholder", _.isNumber(i) && !_.isNaN(i) ? i : ""));
                return u
            }.call(this));
            return c
        }, n.prototype.hasProperty = function () {
            var t, e, n, r, o, i, s, a;
            for (s = this.select.components, n = 0, o = s.length; o > n; n++)for (t = s[n], a = this.ui.textfield, r = 0, i = a.length; i > r; r++)if (e = a[r], t.get(e))return!0;
            return!1
        }, n
    }(v),v.Image = function (e) {
        function n() {
            this.openLibrary = qe(this.openLibrary, this), this.updateImagePropsDisabled = qe(this.updateImagePropsDisabled, this), n.__super__.constructor.apply(this, arguments), this.uploader("imagesrc", "#shutto-image-upload"), this.element.delegate("#shutto-property-alttext", "change", this.updateImagePropsDisabled), this.element.delegate('[data-action="open-library"]', "click", this.openLibrary)
        }

        return Fe(n, e), n.prototype.ui = {checkbox: ["agentimagewidth", "alttext"], textfield: ["imagesrc", "imagewidth", "imageheight"]}, n.prototype.show = function () {
            return n.__super__.show.apply(this, arguments), t("#shutto-property-agentimagewidth").parent().toggle(this.select.components.every(function (e) {
                return t.a.contains(["group", "repeat2"], e.type())
            })), t("#shutto-property-alttext-line").toggle(this.select.contents().every(function (t) {
                return"extract" === t.type()
            })), this.updateImagePropsDisabled()
        }, n.prototype.updateImagePropsDisabled = function () {
            return this.element.find("p:not(#shutto-property-alttext-line)").toggleClass("shutto-disabled", t("#shutto-property-alttext")[0].checked), this.element.find(".shutto-disable-for-extract").toggleClass("shutto-disabled", this.select.contents().every(function (t) {
                return"extract" === t.type()
            }))
        }, n.prototype.openLibrary = function () {
            var t, e = this;
            return t = function () {
                return setTimeout(function () {
                    return e.select.set(e.select.components)
                }, 0)
            }, app.imageLibrary.show({select: function (n) {
                return e.uis.imagesrc.element.val(n.url), e.uis.imagesrc.onChange(), t()
            }, cancel: t})
        }, n
    }(v),v.Content = function (e) {
        function n() {
            var e = this;
            n.__super__.constructor.apply(this, arguments), this.currentType = "text", this.bind("show", function () {
                var t;
                return e.setType((null != (t = e.select.contents()) ? t[0].getHtml() : void 0) ? "html" : "text")
            }), t("#shutto-property-textcontent-label").bind("click", function () {
                return"text" !== e.currentType ? (e.onUIChange({key: "textcontent", value: e.uis.htmlcontent.getValue()}), e.setType("text")) : void 0
            }), t("#shutto-property-htmlcontent-label").bind("click", function () {
                return"html" !== e.currentType ? (e.onUIChange({key: "htmlcontent", value: e.uis.textcontent.getValue()}), e.setType("html")) : void 0
            })
        }

        return Fe(n, e), n.prototype.ui = {textfield: ["textcontent", "htmlcontent"]}, n.prototype.setType = function (t) {
            return t !== this.currentType ? this.element.data("mode", this.currentType = t) : void 0
        }, n
    }(v),v.Link = function (e) {
        function n() {
            this.updateOrigin = qe(this.updateOrigin, this), this.setupOrigin = qe(this.setupOrigin, this), this.updateDisabled = qe(this.updateDisabled, this), this.onSelectColor = qe(this.onSelectColor, this), this.onSelectIcon = qe(this.onSelectIcon, this), this.toggleLibrary = qe(this.toggleLibrary, this), n.__super__.constructor.apply(this, arguments), this.uis.linkiconpos = new z.Plainradio(this.element.find('input[name="linkiconpos"]')).bind("change", this.onUIChange), this.element.delegate('[data-action="toggleLibrary"]', "click", this.toggleLibrary), this.element.delegate(".shutto-icon-library [data-icon]", "click", this.onSelectIcon), this.element.delegate(".shutto-icon-library .shutto-colors [data-color]", "click", this.onSelectColor), this.element.delegate("#shutto-property-button, #shutto-property-linkdisable", "change", this.updateDisabled), this.uis.link.bind("change", this.updateOrigin), this.uis.button.bind("change", this.setupOrigin)
        }

        return Fe(n, e), n.prototype.ui = {textfield: "link", checkbox: ["button", "linkdisable", "blanklink"]}, n.prototype.show = function () {
            return n.__super__.show.apply(this, arguments), t("#shutto-property-linkdisable").parent().toggle(this.useDisabled()), this.element.find('input[name="linkicon"]').closest("p").toggle(this.isGroupProperty()), t("#shutto-property-blanklink").closest("p").find("label.disable-if-disable").toggle(this.isGroupProperty()), this.element.find('input[name="linkiconpos"]').closest("p").toggle(this.isGroupProperty()), this.updateSample(), this.updateDisabled(), this.element.removeClass("shutto-open"), this.setupOrigin()
        }, n.prototype.useDisabled = function () {
            var t;
            return null != (t = this.select.contents()) ? t.some(function (t) {
                return"extract" === t.type()
            }) : void 0
        }, n.prototype.isGroupProperty = function () {
            var t, e;
            return(null != (t = this.select.components) ? t.every(function (t) {
                return"group" === t.type()
            }) : void 0) || (null != (e = this.select.components) ? e.every(function (t) {
                return"repeat2" === t.type()
            }) : void 0)
        }, n.prototype.toggleLibrary = function () {
            return this.element.toggleClass("shutto-open")
        }, n.prototype.onSelectIcon = function (e) {
            var n;
            if (n = t(e.target).data("icon"))return this.setProperty("linkicon", n), "none" === this.getProperty("linkiconpos") && (this.setProperty("linkiconpos", "right"), this.uis.linkiconpos.setValue("right")), app.history.commit(), this.updateSample()
        }, n.prototype.onSelectColor = function (e) {
            var n;
            if (n = t(e.target).data("color"))return this.setProperty("linkicon", (this.getProperty("linkicon") || "bk1").replace(/^[a-z]+/, n)), this.updateSample()
        }, n.prototype.updateSample = function () {
            var t, e;
            return e = this.getProperty("linkicon") || "bk1", this.element.find(".shutto-icon-sample-image").data("icon", e), this.element.find(".shutto-page .shutto-selected").removeClass("shutto-selected"), this.element.find('.shutto-page [data-icon="' + e + '"]').addClass("shutto-selected"), t = e.replace(/\d+$/, ""), this.element.find(".shutto-icon-library").data("icon-color", t), this.element.find(".shutto-icon-sample").data("icon-color", t)
        }, n.prototype.updateDisabled = function () {
            var e, n, r, o;
            return e = t("#shutto-property-button")[0].checked, n = t("#shutto-property-linkdisable")[0].checked, this.element.find(".disable-if-button").toggleClass("shutto-disabled", !e), this.element.find(".disable-if-disable").toggleClass("shutto-disabled", n), this.element.find(".disable-if-button.disable-if-disable").toggleClass("shutto-disabled", n || !e), this.element.find("h1 + div").toggleClass("shutto-disabled-inner-link", "line" === (null != (r = this.select.components) ? r[0].type() : void 0) && !!(null != (o = this.select.components) ? o[0].parent.get("link") : void 0))
        }, n.prototype.setupOrigin = function () {
            var t, e;
            return this.uis.link.element.removeAttr("data-has-origin").removeClass("origin").attr("placeholder", "http://"), t = this.select.components[0], "line" === (null != t ? t.type() : void 0) && t.content.originLink ? (this.uis.link.element.attr("data-has-origin", !0), this.updateOrigin(), void 0) : "group" === (null != t ? t.type() : void 0) && t.get("button") && (e = T.get(t).getChildLink()) ? this.uis.link.element.attr("placeholder", e) : void 0
        }, n.prototype.updateOrigin = function () {
            return this.uis.link.element.attr("data-has-origin") ? this.uis.link.element.toggleClass("origin", this.uis.link.getValue() === this.select.components[0].content.originLink) : void 0
        }, n
    }(v),v.Background = function (e) {
        function n() {
            this.openLibrary = qe(this.openLibrary, this);
            var e = this;
            n.__super__.constructor.apply(this, arguments), this.uploader("bgimage"), this.element.delegate(".shutto-pulldown", "click", function (e) {
                var n, r;
                return r = t(e.target).closest(".shutto-pulldown"), r.hasClass("shutto-open") ? void 0 : (r.addClass("shutto-open"), n = function () {
                    return r.removeClass("shutto-open"), t(document).unbind("click", n)
                }, setTimeout(function () {
                    return t(document).bind("click", n)
                }, 10))
            }), this.element.delegate(".shutto-pulldown li", "click", function (n) {
                var r, o;
                return r = t(n.target).closest(".shutto-pulldown").data("input-for"), o = t(n.target).data("value") || "", e.uis[r].element.val(o), e.uis[r].onChange(), o ? void 0 : e.uis[r].element.focus()
            }), this.element.delegate(".shutto-subgroup .shutto-extract-image", "click", function (n) {
                var r;
                return(r = t(n.target).data("image")) ? (e.uis.bgimage.element.val(r), e.uis.bgimage.onChange()) : void 0
            }), this.element.delegate('[data-action="open-library"]', "click", this.openLibrary)
        }

        return Fe(n, e), n.prototype.ui = {color: "bgcolor", checkbox: ["border", "gradation", "round", "shadow"], textfield: ["bgimage", "bgpositionx", "bgpositiony", "bgsizex", "bgsizey"], select: ["bgrepeat"]}, n.prototype.modifiers = {border: {key: "noborder", value: function (t) {
            return!t
        }}}, n.prototype.show = function () {
            var e, r, o;
            return this.select.empty() ? this.element.find(".shutto-property-background-checks").hide() : this.element.find(".shutto-property-background-checks").toggle(null != (r = this.select.components) ? r.every(function (t) {
                return"menu" !== t.type()
            }) : void 0), this.element.find(".shutto-subgroup").toggleClass("shutto-open", !!this.getProperty("bgimage")), this.element.find(".shutto-subgroup").toggle(null != (o = this.select.components) ? o.every(function (e) {
                return t.a.contains(["group", "repeat2", "accordion-header", "grid"], e.type())
            }) : void 0), e = this.findImage(), this.element.find(".shutto-subgroup .shutto-extract-image").data("image", e || "").toggle(!!e), n.__super__.show.apply(this, arguments)
        }, n.prototype.findImage = function () {
            var e, n, r, o, i;
            for (i = this.select.contents() || [], r = 0, o = i.length; o > r; r++)if (e = i[r], e.source && (n = t.el.findBgImage(e.source)))return D(n);
            return null
        }, n.prototype.hide = function () {
            return n.__super__.hide.apply(this, arguments), this.element.find(".shutto-pulldown").removeClass("shutto-open")
        }, n.prototype.setSelectionProperty = function (t, e) {
            return this.select.empty() ? app.page.set(t, e) : n.__super__.setSelectionProperty.apply(this, arguments)
        }, n.prototype.getSelectionProperty = function (t) {
            return this.select.empty() ? app.page.get(t) : n.__super__.getSelectionProperty.apply(this, arguments)
        }, n.prototype.openLibrary = function () {
            var t, e = this;
            return t = function () {
                return setTimeout(function () {
                    return e.select.set(e.select.components)
                }, 0)
            }, app.imageLibrary.show({select: function (n) {
                return e.uis.bgimage.element.val(n.url), e.uis.bgimage.onChange(), t()
            }, cancel: t})
        }, n
    }(v),v.Grid = function (t) {
        function e() {
            return Se = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.ui = {stepper: ["gridsizex", "gridsizey"], select: ["gridalign"]}, e
    }(v),v.Symbol = function (t) {
        function e() {
            this.toggleLock = qe(this.toggleLock, this), this.removeModel = qe(this.removeModel, this), e.__super__.constructor.apply(this, arguments), this.element.delegate("#shutto-property-symboldelete", "click", this.removeModel), this.element.delegate("#shutto-property-lock", "click", this.toggleLock)
        }

        return Fe(e, t), e.prototype.ui = {textfield: "symbolname"}, e.prototype.show = function () {
            return this.setupLock(), this.setupId(), e.__super__.show.apply(this, arguments)
        }, e.prototype.removeModel = function () {
            var t, e, n, r, o;
            if (confirm("他のページで使われているシンボル「" + app.select.components[0].model.name + "」も削除されます。よろしいですか？")) {
                for (o = _.uniq(function () {
                    var t, n, r, o;
                    for (r = app.select.components, o = [], t = 0, n = r.length; n > t; t++)e = r[t], o.push(e.model);
                    return o
                }()), n = 0, r = o.length; r > n; n++)t = o[n], t.remove();
                return app.history.commit(), app.select.clear()
            }
        }, e.prototype.toggleLock = function () {
            var t;
            return t = this.select.components[0], t.locked ? t.unlock() : t.lock(), this.setupLock()
        }, e.prototype.setupLock = function () {
            return this.element.find("#shutto-property-lock").toggleClass("shutto-locked", !!this.select.components[0].locked)
        }, e.prototype.setupId = function () {
            var t;
            return t = this.select.components[0], t.isDammy() ? this.element.find(".shutto-property-id").removeClass("shutto-on") : (this.element.find(".shutto-property-id").addClass("shutto-on"), this.element.find(".shutto-property-id .shutto-value").text(t.model.id))
        }, e
    }(v),v.Tab = function (t) {
        function e() {
            return Ie = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.ui = {stepper: "tabcount"}, e
    }(v),v.Tablabel = function (t) {
        function e() {
            return ze = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.ui = {textfield: "tablabel"}, e
    }(v),v.Accordion = function (e) {
        function n() {
            this.onSelectColor = qe(this.onSelectColor, this), this.onSelectIcon = qe(this.onSelectIcon, this), this.toggleLibrary = qe(this.toggleLibrary, this), n.__super__.constructor.apply(this, arguments), this.uis.accordioniconpos = new z.Plainradio(this.element.find('input[name="accordioniconpos"]')).bind("change", this.onUIChange), this.element.delegate('[data-action="toggleLibrary"]', "click", this.toggleLibrary), this.element.delegate(".shutto-icon-library .shutto-colors [data-color]", "click", this.onSelectColor), this.element.delegate(".shutto-icon-library [data-icon]", "click", this.onSelectIcon)
        }

        return Fe(n, e), n.prototype.ui = {stepper: "accordionsize", checkbox: ["accordionexclusive", "accordionanimate"]}, n.prototype.show = function () {
            return n.__super__.show.apply(this, arguments), this.updateSample()
        }, n.prototype.toggleLibrary = function () {
            return this.element.toggleClass("shutto-open")
        }, n.prototype.onSelectIcon = function (e) {
            var n;
            if (n = t(e.target).closest("[data-icon]").data("icon"))return this.setProperty("accordionicon", n), "none" === this.getProperty("accordioniconpos") && (this.setProperty("accordioniconpos", "left"), this.uis.accordioniconpos.setValue("left")), app.history.commit(), this.updateSample()
        }, n.prototype.onSelectColor = function (e) {
            var n;
            if (n = t(e.target).data("color"))return this.setProperty("accordionicon", (this.getProperty("accordionicon") || "bk1").replace(/^[a-z]+/, n)), this.updateSample()
        }, n.prototype.updateSample = function () {
            var t, e;
            return e = this.getProperty("accordionicon") || "bk1", this.element.find(".shutto-icon-sample").data("icon", e), this.element.find(".shutto-page .shutto-selected").removeClass("shutto-selected"), this.element.find('.shutto-page [data-icon="' + e + '"]').addClass("shutto-selected"), t = e.replace(/\d+$/, ""), this.element.find(".shutto-icon-library").data("icon-color", t), this.element.find(".shutto-icon-sample").data("icon-color", t)
        }, n
    }(v),v.Accordionheader = function (e) {
        function n() {
            this.onSelectIcon = qe(this.onSelectIcon, this), this.onSelectColor = qe(this.onSelectColor, this), this.toggleLibrary = qe(this.toggleLibrary, this), n.__super__.constructor.apply(this, arguments), this.uis.accordioniconpos = new z.Plainradio(this.element.find('input[name="accordioniconpos"]')).bind("change", this.onUIChange), this.element.delegate('[data-action="toggleLibrary"]', "click", this.toggleLibrary), this.element.delegate(".shutto-icon-library .shutto-colors [data-color]", "click", this.onSelectColor), this.element.delegate(".shutto-icon-library [data-icon]", "click", this.onSelectIcon)
        }

        return Fe(n, e), n.prototype.ui = {checkbox: "accordionheaderopen"}, n.prototype.show = function () {
            return n.__super__.show.apply(this, arguments), this.updateSample()
        }, n.prototype.toggleLibrary = function () {
            return this.element.toggleClass("shutto-open")
        }, n.prototype.onSelectColor = function (e) {
            var n;
            if (n = t(e.target).data("color"))return this.setProperty("accordionicon", (this.getProperty("accordionicon") || "bk1").replace(/^[a-z]+/, n)), this.updateSample()
        }, n.prototype.onSelectIcon = function (e) {
            var n;
            if (n = t(e.target).closest("[data-icon]").data("icon"))return this.setProperty("accordionicon", n), "none" === this.getProperty("accordioniconpos") && (this.setProperty("accordioniconpos", "left"), this.uis.accordioniconpos.setValue("left")), app.history.commit(), this.updateSample()
        }, n.prototype.updateSample = function () {
            var t, e;
            return e = this.getProperty("accordionicon") || "bk1", this.element.find(".shutto-icon-sample").data("icon", e), this.element.find(".shutto-page .shutto-selected").removeClass("shutto-selected"), this.element.find('.shutto-page [data-icon="' + e + '"]').addClass("shutto-selected"), t = e.replace(/\d+$/, ""), this.element.find(".shutto-icon-library").data("icon-color", t), this.element.find(".shutto-icon-sample").data("icon-color", t)
        }, n.prototype.setSelectionProperty = function (t, e) {
            var r;
            return"accordionicon" === t || "accordioniconpos" === t ? null != (r = this.accordion()) ? r.set(t, e) : void 0 : n.__super__.setSelectionProperty.apply(this, arguments)
        }, n.prototype.getSelectionProperty = function (t) {
            var e;
            return"accordionicon" === t || "accordioniconpos" === t ? null != (e = this.accordion()) ? e.get(t) : void 0 : n.__super__.getSelectionProperty.apply(this, arguments)
        }, n.prototype.accordion = function () {
            var t, e;
            return t = null != (e = this.select.components[0]) ? e.parent : void 0, "accordion" === t.type() ? t : null
        }, n
    }(v),v.Slider = function (e) {
        function n() {
            this.updateAutoConfigDisabled = qe(this.updateAutoConfigDisabled, this), n.__super__.constructor.apply(this, arguments), this.element.delegate("#shutto-property-sliderauto", "change", this.updateAutoConfigDisabled)
        }

        return Fe(n, e), n.prototype.ui = {checkbox: ["sliderauto", "sliderbutton", "sliderposnav", "sliderpauseonaction"], textfield: ["sliderdelay", "sliderspeed"]}, n.prototype.show = function () {
            return n.__super__.show.apply(this, arguments), this.updateAutoConfigDisabled()
        }, n.prototype.updateAutoConfigDisabled = function () {
            return this.element.find(".shutto-subgroup").toggleClass("shutto-disabled", !t("#shutto-property-sliderauto")[0].checked)
        }, n
    }(v),v.Page = function (t) {
        function e() {
            e.__super__.constructor.apply(this, arguments), this.uploader("pageicon", "#shutto-pageicon-upload")
        }

        return Fe(e, t), e.prototype.ui = {textfield: ["pageicon", "viewport"], checkbox: "disabletellink"}, e.prototype.modifiers = {disabletellink: {key: "tellink", value: function (t) {
            return!t
        }}}, e.prototype.setSelectionProperty = function (t, e) {
            return app.page.set(t, e)
        }, e.prototype.getSelectionProperty = function (t) {
            return app.page.get(t)
        }, e
    }(v),v.Extract = function (t) {
        function e() {
            return Te = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.ui = {textfield: ["selector", "hidden"], checkbox: ["structured", "enableevents", "istyle"]}, e
    }(v),v.Repeat = function (e) {
        function n() {
            this.undoRepeat = qe(this.undoRepeat, this), n.__super__.constructor.apply(this, arguments), this.element.delegate("#shutto-property-repeatundo", "click", this.undoRepeat)
        }

        return Fe(n, e), n.prototype.ui = {textfield: ["repeatrange", "repeatroot", "repeatstart", "repeatrepeat"]}, n.prototype.undoRepeat = function () {
            var t, e;
            return t = function () {
                var t, n, r, o;
                for (r = app.select.components, o = [], t = 0, n = r.length; n > t; t++)e = r[t], o.push(e.reverse());
                return o
            }(), app.history.commit(), app.select.set(t)
        }, n.prototype.show = function () {
            return n.__super__.show.apply(this, arguments), t("#shutto-property-repeatundo").parent().toggle(!!t.a.sameValue(app.select.components, function (t) {
                return!!t.reversible
            }))
        }, n
    }(v),v.Attribute = function (t) {
        function e() {
            var t = this;
            e.__super__.constructor.apply(this, arguments), _.each(this.uis, function (e) {
                return e.bind("change", function () {
                    return t.updateValidity(e)
                })
            })
        }

        return Fe(e, t), e.prototype.ui = {textfield: ["elementid", "elementclass"]}, e.prototype.show = function () {
            var t, n, r, o;
            e.__super__.show.apply(this, arguments), this.element.toggleClass("shutto-open", this.hasProperty()), r = this.uis, o = [];
            for (t in r)n = r[t], o.push(this.updateValidity(n));
            return o
        }, e.prototype.setProperty = function (t, n) {
            return this.select.empty() ? (app.page.set(t, n), this.trigger("prop." + t, {key: t, value: n})) : e.__super__.setProperty.apply(this, arguments)
        }, e.prototype.getProperty = function (t) {
            return this.select.empty() ? app.page.get(t) : e.__super__.getProperty.apply(this, arguments)
        }, e.prototype.hasProperty = function () {
            var t, e, n, r, o, i, s, a;
            for (s = this.select.empty() ? [app.page] : this.select.components, n = 0, o = s.length; o > n; n++)for (t = s[n], a = this.ui.textfield, r = 0, i = a.length; i > r; r++)if (e = a[r], t.get(e))return!0;
            return!1
        }, e.prototype.updateValidity = function (t) {
            var e;
            return e = t.getValue(), t.element.closest("p").toggleClass("shutto-invalid", e && !/^[_a-zA-Z]+[_a-zA-Z0-9-]*$/.test(e))
        }, e
    }(v),v.Css = function (t) {
        function e() {
            return Ee = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.ui = {textfield: ["css", "csspane1", "csspane2"]}, e.prototype["default"] = "@current {\n  \n}", e.prototype.show = function () {
            var t, n, r, o, i, s, a, u;
            for (e.__super__.show.apply(this, arguments), this.element.removeClass("shutto-open"), a = ["css", "csspane1", "csspane2"], r = 0, i = a.length; i > r; r++)t = a[r], n = this.uis[t].getValue(), n ? n !== this["default"] && this.element.addClass("shutto-open") : this.uis[t].setValue(this["default"]);
            for (u = ["csspane1", "csspane2"], o = 0, s = u.length; s > o; o++)t = u[o], this.uis[t].element.closest("section").toggleClass("shutto-open", this.uis[t].getValue() !== this["default"]);
            return this.element.find(".shutto-subgroup").toggleClass("shutto-on", this.select.components.length && this.select.components.every(function (t) {
                return t.type().match(/^pane2/)
            }))
        }, e.prototype.setProperty = function (t, n) {
            return this.select.empty() ? (app.page.set(t, n), this.trigger("prop." + t, {key: t, value: n})) : e.__super__.setProperty.apply(this, arguments)
        }, e.prototype.getProperty = function (t) {
            return this.select.empty() ? app.page.get(t) : e.__super__.getProperty.apply(this, arguments)
        }, e
    }(v),v.Js = function (t) {
        function e() {
            return Le = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.ui = {textfield: ["js", "jsbefore"]}, e.prototype.show = function () {
            return e.__super__.show.apply(this, arguments), this.element.find("#shutto-property-group-js-after").toggleClass("shutto-open", !!app.page.get("js")), this.element.find("#shutto-property-group-js-before").toggleClass("shutto-open", !!app.page.get("jsbefore"))
        }, e.prototype.setProperty = function (t, n) {
            return this.select.empty() ? (app.page.set(t, n), this.trigger("prop." + t, {key: t, value: n})) : e.__super__.setProperty.apply(this, arguments)
        }, e.prototype.getProperty = function (t) {
            return this.select.empty() ? app.page.get(t) : e.__super__.getProperty.apply(this, arguments)
        }, e
    }(v),v.Input = function (t) {
        function e() {
            return Ne = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.show = function () {
            return e.__super__.show.apply(this, arguments), this.setupInputNameVisible()
        }, e.prototype.setupInputNameVisible = function () {
            return this.element.find(".shutto-property-inputname").toggle("email" !== this.getFormType())
        }, e.prototype.getForm = function () {
            var t;
            for (t = this.select.components[0]; t && "form" !== t.type();)t = t.parent;
            return t
        }, e.prototype.getFormType = function () {
            var t;
            return(null != (t = this.getForm()) ? t.get("formtype") : void 0) || r.prototype.defaults.formtype
        }, e
    }(v),v.Textfield = function (t) {
        function e() {
            this.setTextareaEnabled = qe(this.setTextareaEnabled, this), e.__super__.constructor.apply(this, arguments), this.uis.inputtype.bind("change", this.setTextareaEnabled)
        }

        return Fe(e, t), e.prototype.ui = {textfield: ["textfieldinputname", "textfieldinputlabel", "textfieldinputvalue", "placeholder"], checkbox: ["textarea", "textfieldinputrequired"], select: "inputtype"}, e.prototype.show = function () {
            return e.__super__.show.apply(this, arguments), this.setTextareaEnabled()
        }, e.prototype.setTextareaEnabled = function () {
            return"text" === this.select.getProperty("inputtype") ? this.element.find("#shutto-property-textarea").removeAttr("disabled").parent().removeClass("shutto-disabled") : this.element.find("#shutto-property-textarea").attr("disabled", "disabled").parent().addClass("shutto-disabled")
        }, e
    }(v.Input),v.Checkbox = function (t) {
        function e() {
            return Me = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.ui = {textfield: ["checkboxinputname", "checkboxinputlabel"], checkbox: ["checkboxinputvalue", "checkboxinputrequired"]}, e
    }(v.Input),v.Select = function (e) {
        function n() {
            var t = this;
            n.__super__.constructor.apply(this, arguments), this.element.delegate("#shutto-add-select-item", "click", function () {
                return t.element.find(".shutto-property-select-item").last().after(t.itemElement()), t.setupRemoveButtonVisible()
            })
        }

        return Fe(n, e), n.prototype.ui = {textfield: ["selectinputname", "selectinputlabel", "selectitems"], checkbox: ["selectinputrequired", "selectinputmultiple"]}, n.prototype.show = function () {
            return n.__super__.show.apply(this, arguments), this.setupRemoveButtonVisible()
        }, n.prototype.itemElement = function () {
            var e, n, r, o, i;
            for (n = t(this.element.find(".shutto-property-select-item").last()[0].cloneNode(!0)), n.find('input[type="text"]').val(""), i = n.find('input[type="checkbox"]'), r = 0, o = i.length; o > r; r++)e = i[r], e.checked = !1;
            return n
        }, n.prototype.setupRemoveButtonVisible = function () {
            var e, n, r, o, i, s;
            for (n = this.element.find(".shutto-property-select-item").length >= 2, i = this.element.find(".shutto-remove"), s = [], r = 0, o = i.length; o > r; r++)e = i[r], s.push(t(e).toggleClass("shutto-on", n));
            return s
        }, n
    }(v.Input),v.Button = function (t) {
        function e() {
            return De = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.ui = {textfield: "buttoninputlabel"}, e
    }(v.Input),v.Form = function (t) {
        function e() {
            this.setupPropertiesVisible = qe(this.setupPropertiesVisible, this), e.__super__.constructor.apply(this, arguments), this.uis.formtype.bind("change", this.setupPropertiesVisible)
        }

        return Fe(e, t), e.prototype.ui = {textfield: ["formsendto", "formcompletemessage", "formaction", "formcv"], checkbox: "formconfirm", select: "formtype"}, e.prototype.show = function () {
            return e.__super__.show.apply(this, arguments), this.setupPropertiesVisible()
        }, e.prototype.setupPropertiesVisible = function () {
            var t;
            return t = "email" === this.select.getProperty("formtype"), this.element.find("#shutto-property-formtype-email").toggle(t), this.element.find("#shutto-property-formtype-http").toggle(!t)
        }, e
    }(v),v.Map = function (t) {
        function e() {
            this.setupLabelVisible = qe(this.setupLabelVisible, this), e.__super__.constructor.apply(this, arguments), this.uis.maplocationmode = new z.Plainradio(this.element.find('input[name="maplocationmode"]')).bind("change", this.onUIChange), this.binds["prop.maplocationmode"] = this.propertyChangeHandler(this.uis.maplocationmode), this.uis.maplocationmode.bind("change", this.setupLabelVisible), this.uis.mapmarker.bind("change", this.setupLabelVisible)
        }

        return Fe(e, t), e.prototype.ui = {textfield: ["mapquery", "maplat", "maplon", "mapapikey", "maplabel"], checkbox: "mapmarker", slider: "mapzoom"}, e.prototype.show = function () {
            return e.__super__.show.apply(this, arguments), this.setupLabelVisible()
        }, e.prototype.setupLabelVisible = function () {
            return this.element.find("#shutto-property-maplabel-label").toggleClass("shutto-disabled", !("latlon" === this.select.getProperty("maplocationmode") && this.select.getProperty("mapmarker")))
        }, e
    }(v),v.Recommend = function (t) {
        function e() {
            return Ae = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.ui = {textfield: ["recommendusername", "recommendname", "recommendtag"]}, e
    }(v),v.Affiliate = function (t) {
        function e() {
            this.updateType = qe(this.updateType, this), e.__super__.constructor.apply(this, arguments), this.element.find("#shutto-property-affiliatetype").change(this.updateType)
        }

        return Fe(e, t), e.prototype.ui = {select: ["affiliatetype"], textfield: ["affiliatetag"]}, e.prototype.show = function () {
            return e.__super__.show.apply(this, arguments), this.updateType()
        }, e.prototype.updateType = function () {
            return this.element.data("affiliate-type", this.element.find("#shutto-property-affiliatetype").val() || "blank")
        }, e
    }(v),v.Menubutton = function (t) {
        function e() {
            return Oe = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e.prototype.ui = {color: "menubuttonbgcolor", textfield: "menubuttonlabel", checkbox: "menubuttongradation"}, e
    }(v),v.Menuclose = function (e) {
        function n() {
            this.setupDisabled = qe(this.setupDisabled, this), n.__super__.constructor.apply(this, arguments), this.element.delegate("#shutto-property-menuclose", "change", this.setupDisabled)
        }

        return Fe(n, e), n.prototype.ui = {color: ["menuclosefontcolor", "menuclosebgcolor"], select: ["menuclosefontsize", "menucloselineheight"], checkbox: ["menuclose", "menuclosegradation", "menucloseborder"]}, n.prototype.show = function () {
            return n.__super__.show.apply(this, arguments), this.setupDisabled()
        }, n.prototype.setupDisabled = function () {
            return this.element.toggleClass("shutto-disabled", !t("#shutto-property-menuclose")[0].checked)
        }, n
    }(v),v.Pclink = function (t) {
        function e() {
            return Re = e.__super__.constructor.apply(this, arguments)
        }

        return Fe(e, t), e
    }(v),v.Pane2 = function (e) {
        function n() {
            var e = this;
            n.__super__.constructor.apply(this, arguments), this.uis.pane2splayout = new z.Plainradio(this.element.find('input[name="pane2splayout"]')).bind("change", this.onUIChange), this.uis.pane2tablayout = new z.Plainradio(this.element.find('input[name="pane2tablayout"]')).bind("change", this.onUIChange), this.element.delegate('select[name="pane2sidewidth"]', "change", function (n) {
                var o;
                return o = t(n.target).val(), e.element.find("p.shutto-input").toggleClass("shutto-on", !o), o ? (e.uis.pane2limit.element.val(r.Pane2.prototype.defaults.pane2limit), e.uis.pane2limit.onChange(), e.uis.pane2sidewidth.element.val(o), e.uis.pane2sidewidth.onChange(), e.uis.pane2sidewidth.element.focus()) : void 0
            })
        }

        return Fe(n, e), n.prototype.ui = {textfield: ["pane2sidewidth", "pane2limit"]}, n.prototype.show = function () {
            var e, o;
            return n.__super__.show.apply(this, arguments), e = this.element.find('select[name="pane2sidewidth"]'), (o = this.getProperty("pane2sidewidth")) && t.a.contains(e.find("option").map(function (t, e) {
                return e.value
            }), o) && this.getProperty("pane2limit") === r.Pane2.prototype.defaults.pane2limit ? (e.val(o), this.element.find("p.shutto-input").removeClass("shutto-on")) : (e.val(""), this.element.find("p.shutto-input").addClass("shutto-on"))
        }, n
    }(v),z = function (e) {
        function n(e) {
            var r;
            this.key = e, this.onChange = qe(this.onChange, this), n.__super__.constructor.apply(this, arguments), "string" == typeof this.key ? (this.element = t("#shutto-property-" + this.key), (r = this.element.attr("name")) && (this.key = r.replace(/^(shutto-)?property-/, ""))) : (this.element = this.key, this.key = (this.element.attr("id") || this.element.attr("name")).replace(/^(shutto-)?property-/, ""))
        }

        return Fe(n, e), n.prototype.onChange = function () {
            var t;
            return t = this.getValue(), t !== this.oldValue ? (this.element.removeClass("shutto-undefined"), this.trigger("change." + this.key, {key: this.key, value: t, oldValue: this.oldValue}), this.oldValue = t) : void 0
        }, n.prototype.getValue = function () {
            return this.element.val()
        }, n.prototype.setValue = function (t) {
            var e;
            return void 0 === t ? (this.element.addClass("shutto-undefined"), this.element.val(null != (e = r.prototype.defaults[this.key]) ? e : "")) : (this.element.removeClass("shutto-undefined"), this.element.val(t)), this.oldValue = t
        }, n
    }(m),z.Button = function (t) {
        function e() {
            var t = this;
            e.__super__.constructor.apply(this, arguments), this.element.addClass("shutto-ui-helper-hidden-accessible"), this.label = this.element.next("label").addClass("shutto-u-button"), this.setValue(!1), this.label.bind({mousedown: function (t) {
                return t.preventDefault()
            }, click: function (e) {
                return e.preventDefault(), t.toggle()
            }})
        }

        return Fe(e, t), e.prototype.toggle = function () {
            var t, e;
            return t = this.getValue(), this.setValue(e = !t), this.trigger("change." + this.key, {value: e, oldValue: t, key: this.key})
        }, e.prototype.getValue = function () {
            return this.element[0].checked
        }, e.prototype.setValue = function (t) {
            return void 0 === t ? (this.label.addClass("shutto-undefined"), t = r.prototype.defaults[this.key]) : this.label.removeClass("shutto-undefined"), this.element[0].checked = !!t, this.label.toggleClass("shutto-u-button-active", !!t)
        }, e.prototype.getInputValue = function () {
            return this.element.val()
        }, e
    }(z),z.Radio = function (e) {
        function n() {
            var e, r;
            n.__super__.constructor.apply(this, arguments), this.element.addClass("shutto-u-buttongroup"), this.buttons = function () {
                var n, o, i, s, a, u = this;
                for (s = this.element.find("input"), n = function (t) {
                    return t.label.unbind("click").bind({click: function () {
                        var e, n;
                        return e = u.getValue(), u.select(t), n = u.getValue(), n !== e ? u.trigger("change." + u.key, {key: u.key, value: n, oldValue: e}) : void 0
                    }})
                }, a = [], o = 0, i = s.length; i > o; o++)r = s[o], e = new z.Button(t(r)), n(e), a.push(e);
                return a
            }.call(this)
        }

        return Fe(n, e), n.prototype.select = function (t) {
            var e, n, r, o, i;
            for (o = this.buttons, i = [], n = 0, r = o.length; r > n; n++)e = o[n], i.push(e.setValue(e === t));
            return i
        }, n.prototype.getValue = function () {
            var t, e, n, r;
            for (r = this.buttons, e = 0, n = r.length; n > e; e++)if (t = r[e], t.getValue())return t.getInputValue();
            return void 0
        }, n.prototype.setValue = function (t) {
            var e, n, r, o, i;
            for (o = this.buttons, i = [], n = 0, r = o.length; r > n; n++)e = o[n], i.push(e.setValue(e.getInputValue() === t));
            return i
        }, n
    }(z),z.Plainradio = function (t) {
        function e() {
            e.__super__.constructor.apply(this, arguments), this.element.bind("change", this.onChange)
        }

        return Fe(e, t), e.prototype.getValue = function () {
            var t, e, n, r;
            for (r = this.element, e = 0, n = r.length; n > e; e++)if (t = r[e], t.checked)return t.value;
            return void 0
        }, e.prototype.setValue = function (t) {
            var e, n, r, o;
            for (o = this.element, n = 0, r = o.length; r > n; n++)e = o[n], e.checked = e.value === t;
            return this.oldValue = t
        }, e
    }(z),z.Select = function (t) {
        function e() {
            e.__super__.constructor.apply(this, arguments), this.element.bind("change", this.onChange)
        }

        return Fe(e, t), e
    }(z),z.Textfield = function (t) {
        function e() {
            e.__super__.constructor.apply(this, arguments), this.element.bind("keyup", this.onChange)
        }

        return Fe(e, t), e
    }(z),z.Checkbox = function (t) {
        function e() {
            e.__super__.constructor.apply(this, arguments), this.element.bind("change", this.onChange)
        }

        return Fe(e, t), e.prototype.getValue = function () {
            return this.element[0].checked
        }, e.prototype.setValue = function (t) {
            return this.element.toggleClass("shutto-undefined", void 0 === t), this.element[0].checked = !!t, this.oldValue = t
        }, e
    }(z),z.Stepper = function (e) {
        function n() {
            var e = this;
            n.__super__.constructor.apply(this, arguments), this.element.bind("change", this.onChange), this.element.wrapAll(t("<div>").attr("class", "shutto-ui-stepper").append(t("<button>").attr({"class": "shutto-ui-stepper-up", type: "button"}).html("&#x25b2;").bind("click", function () {
                return e.step(1)
            })).append(t("<button>").attr({"class": "shutto-ui-stepper-down", type: "button"}).html("&#x25bc;").bind("click", function () {
                return e.step(-1)
            })))
        }

        return Fe(n, e), n.prototype.step = function (t) {
            var e, n;
            return this.element.find("button").blur(), e = this.getValue(), n = Math.max(1, e + t), n !== e ? (this.setValue(n), this.trigger("change." + this.key, {key: this.key, value: n, oldValue: e})) : void 0
        }, n.prototype.getValue = function () {
            return Math.max(1, parseInt(n.__super__.getValue.apply(this, arguments)))
        }, n
    }(z),z.Slider = function (e) {
        function n() {
            n.__super__.constructor.apply(this, arguments), t.setupRangeInput(this.element[0]), this.element.bind("change", this.onChange)
        }

        return Fe(n, e), n
    }(z),z.Color = function (e) {
        function n() {
            this.onClickColor = qe(this.onClickColor, this), this.onClickTab = qe(this.onClickTab, this), this.hidePalette = qe(this.hidePalette, this), this.showPalette = qe(this.showPalette, this), this.onKeyUp = qe(this.onKeyUp, this);
            var e = this;
            n.__super__.constructor.apply(this, arguments), this.element.bind({keyup: this.onKeyUp, focus: this.showPalette, click: this.showPalette, blur: this.hidePalette}), this.palette = t(t("#shutto-color-panel-template")[0].cloneNode(!0)).removeAttr("id").show(), this.palette.delegate("li[data-type]", {click: this.onClickTab}).delegate("[data-color]", {click: this.onClickColor, dblclick: function (t) {
                return e.onClickColor(t), e.hidePalette()
            }}).bind({mousedown: function (t) {
                return t.preventDefault()
            }})
        }

        return Fe(n, e), n.prototype.onKeyUp = function (e) {
            var n, r, o;
            try {
                o = this.element.val(), "" !== o && (n = new t.Color(o), o = n.hex()), o !== this.oldValue && (this.trigger("change." + this.key, {key: this.key, value: o, oldValue: this.oldValue}), this.oldValue = o, this.updatePalletFocus(o))
            } catch (i) {
                if (r = i, !(r instanceof t.Color.InvalidFormatError))throw r
            }
            return this.updateInputColor(), 13 === e.keyCode ? this.hidePalette() : void 0
        }, n.prototype.getValue = function () {
            var t;
            return(t = this.element.val()) ? "#" + t : void 0
        }, n.prototype.setValue = function (t) {
            return this.element.toggleClass("shutto-undefined", void 0 === t), this.element.val((t || "").replace(/^#/, "")), this.updateInputColor(), this.updatePalletFocus(t), this.oldValue = t
        }, n.prototype.updateInputColor = function () {
            var e, n;
            try {
                return e = new t.Color(this.getValue()), this.element.css({"background-color": e.toString(), color: .213 * e.rgb[0] + .715 * e.rgb[1] + .072 * e.rgb[2] < 128 ? "#fff" : "#000"})
            } catch (r) {
                if (n = r, !(n instanceof t.Color.InvalidFormatError))throw n;
                return this.element.css({"background-color": "#fff", color: "#333"})
            }
        }, n.prototype.showPalette = function () {
            var e;
            if (!this.palette.parent().length)return e = this.element.offset(), this.palette.css({left: e.left, top: e.top + e.height}).appendTo(t("body"))
        }, n.prototype.hidePalette = function () {
            return this.palette.remove()
        }, n.prototype.preventBlur = function (t) {
            return t.preventDefault()
        }, n.prototype.onClickTab = function (e) {
            var n;
            return(n = t(e.target).data("type")) ? this.palette.data("type", n) : void 0
        }, n.prototype.onClickColor = function (e) {
            var n, r, o;
            return n = t(e.target).data("color") || "", r = this.getValue(), o = n ? "#" + n : "", o !== r ? (this.setValue(o), this.trigger("change." + this.key, {key: this.key, value: o, oldValue: r})) : void 0
        }, n.prototype.updatePalletFocus = function (t) {
            var e, n;
            if (this.palette.find(".shutto-focused").removeClass("shutto-focused"), (t || (t = this.getValue())) && (t = t.replace(/^#/, ""), (e = this.palette.find("[data-color='" + t + "']")).length && (e.addClass("shutto-focused"), e.is("td")))) {
                for (n = e.parent(); !n.is("table");)n = n.parent();
                return this.palette.data("type", n.data("type"))
            }
        }, n
    }(z),f = function (n) {
        function r(e) {
            var n, o = this;
            null == e && (e = {}), this.handler = qe(this.handler, this), r.__super__.constructor.apply(this, arguments), this.eventType = null != (n = e.eventType) ? n : "keydown", this.activate(), t("input,textarea").bind({focus: function () {
                return o.inactivate()
            }, blur: function () {
                return o.activate()
            }})
        }

        return Fe(r, n), r.keys = {13: "enter", 38: "up", 40: "down", 37: "left", 39: "right", 27: "esc", 32: "space", 8: "backspace", 9: "tab", 46: "delete"}, r.modifiers = ["shift", "ctrl", "alt", "meta"], r.prototype.bind = function (t, n, o) {
            return"string" == typeof n ? (n = e[n], r.__super__.bind.call(this, t, n, o)) : r.__super__.bind.apply(this, arguments)
        }, r.prototype.activate = function () {
            return t(document).bind(this.eventType, this.handler)
        }, r.prototype.inactivate = function () {
            return t(document).unbind(this.eventType, this.handler)
        }, r.prototype.handler = function (t) {
            var e, n, r, o;
            return e = t.wicth || t.keyCode, r = this.constructor.keys[e], "keydown" === this.eventType && (n = e - 111, n > 0 && 13 > n && (r = "f" + n)), r || (r = String.fromCharCode(e).toLowerCase(), r.match(/^[0-9a-z]$/)) ? ((o = this.constructor.modifiers.filter(function (e) {
                return t["" + e + "Key"]
            }).join("+")) && (r = "" + o + "+" + r), this.trigger(r, t)) : void 0
        }, r
    }(m),l = function () {
        function e(e) {
            this.element = t("<div>").attr("class", "shutto-editor-ui shutto-insertion-frame").hide().appendTo(e.container)
        }

        return e.prototype.hide = function () {
            return this.element.hide()
        }, e.prototype.set = function (e) {
            var n, r;
            return e ? (r = "top", n = null, e.replace ? (n = e.replace, r = "replace") : e.parent.children.length ? (n = e.parent.children[e.index]) || (n = t.a.last(e.parent.children), r = "bottom") : (n = e.parent, r = "inner"), this.element.css(app.globalToLocal(t.extend({height: 2}, this.getRect(n, r)))).toggleClass("shutto-replace", "replace" === r).show()) : this.hide()
        }, e.prototype.getRect = function (t, e) {
            var n, r, o, i, s;
            return"replace" === e ? o = T.get(t).getElement().offset() : "inner" === e ? (n = T.get(t).getElement(), o = n.offset(), "slider" === t.type() ? {top: o.top + 6, left: o.left + 10, width: o.width - 20} : {top: o.top, left: o.left, width: o.width}) : "slider" === (null != (s = t.parent) ? s.type() : void 0) ? (n = T.get(t).getElement().find("img"), o = n.offset(), {top: o.top, height: o.height, left: "top" === e ? o.left - 5 : o.left + o.width + 5, width: 2}) : (n = T.get(t).getElement(), o = n.offset(), r = function () {
                var t, e, r, o;
                for (r = ["top", "right", "bottom", "left"], o = [], t = 0, e = r.length; e > t; t++)i = r[t], o.push(parseInt(n.css("margin-" + i) || 0));
                return o
            }(), {top: "top" === e ? o.top - r[0] : o.top + o.height - 1 + r[2], left: o.left - r[3], width: o.width + r[1] + r[3]})
        }, e
    }(),w = function () {
        function e(e, n, r, o) {
            this.root = n, this.select = r, this.focus = o, this.onSelect = qe(this.onSelect, this), this.onFocus = qe(this.onFocus, this), this.element = t(e), this.setNavigation(), this.select.bind("select", this.onSelect), this.focus.bind("select", this.onFocus)
        }

        return e.prototype.onFocus = function (t) {
            return this.operating ? void 0 : this.setNavigation(t.components.length ? t.components : this.select.components)
        }, e.prototype.onSelect = function (t) {
            return this.operating ? void 0 : this.setNavigation(t.components)
        }, e.prototype.setNavigation = function (e) {
            var n;
            for (this.element.empty(), n = t.a(e), n.length || (n = [this.root]), 1 === n.length && t.a.contains(["group", "accordion-header"], n[0].type()) && 1 === n[0].children.length && this.addNavigationItem(t.a(n[0].children[0]), {force: !0}); n.length;)this.addNavigationItem(n), n = t.a(n[0].parent);
            return this.element.children().last().remove()
        }, e.prototype.addNavigationItem = function (e, n) {
            var r, o, i, s = this;
            return null == n && (n = {}), i = e[0], i.canSelect() || i === this.root || n.force ? (o = i.label(), e.length > 1 && (o += "..."), r = t("<span>").text(o).appendTo(this.element).bind({mouseover: function (n) {
                return t.ev.isMouseInOut(n, r[0]) ? s.operate(function () {
                    return this.focus.set(e, {force: !0})
                }) : void 0
            }, mouseout: function (e) {
                return t.ev.isMouseInOut(e, r[0]) ? s.operate(function () {
                    return this.focus.clear()
                }) : void 0
            }, click: function () {
                return s.operate(function () {
                    return this.select.set(e, {navigator: !0, force: !0})
                }), s.element.find("span.shutto-selected").removeClass("shutto-selected"), r.addClass("shutto-selected")
            }}), (this.select.isSelected(i) || i === this.root && 0 === this.select.components.length) && r.attr("class", "shutto-selected"), t("<span>").attr("class", "shutto-separator").text("<").appendTo(this.element)) : void 0
        }, e.prototype.operate = function (t) {
            return this.operating = !0, t.call(this), this.operating = !1
        }, e
    }(),k = function () {
        function e(e, n) {
            var r = this;
            this.source = n, this.element = t(e), this.setNavigation(), this.source.$.events.bind({select: function (t) {
                return r.operating ? void 0 : r.setNavigation(t.target)
            }, focus: function (t) {
                return r.operating ? void 0 : r.setNavigation(t.target)
            }, unfocus: function () {
                return r.operating ? void 0 : r.setNavigation(r.source.$.selectedElement)
            }})
        }

        return e.prototype.setNavigation = function (e) {
            var n = this;
            if (this.element.empty(), e) {
                for (e = this.source.$(e); (null != e ? e.length : void 0) && (function (e) {
                    var r;
                    return r = t("<span>").text(n.label(e)).appendTo(n.element).bind({mouseover: function (o) {
                        return t.ev.isMouseInOut(o, r[0]) ? n.operate(function () {
                            return this.source.$.focus(e[0])
                        }) : void 0
                    }, mouseout: function (e) {
                        return t.ev.isMouseInOut(e, r[0]) ? n.operate(function () {
                            return this.source.$.unfocus()
                        }) : void 0
                    }, mousedown: function (t) {
                        var o;
                        return n.operate(function () {
                            return this.source.$.select(e[0])
                        }), n.element.find("span.shutto-selected").removeClass("shutto-selected"), r.addClass("shutto-selected"), o = new u.Navigation(e, t), app.acceptDrop(o), o.start(t)
                    }}), e[0] === n.source.$.selectedElement && r.attr("class", "shutto-selected"), t("<span>").attr("class", "shutto-separator").text("<").appendTo(n.element)
                }(e), "body" !== e.tagName());)e = e.parent();
                return this.element.children().last().remove()
            }
        }, e.prototype.label = function (t) {
            var e, n, r;
            return r = t.tagName(), (n = (t.getAttribute("id") || "").trim()) && (r += "#" + n), (e = (t.attr("class") || "").trim()) && (r += "." + e.replace(/\s+/g, ".")), r
        }, e.prototype.operate = function (t) {
            return this.operating = !0, t.call(this), this.operating = !1
        }, e
    }(),x = function () {
        function n(n) {
            var r = this;
            this.element = t(n).bind("click", e.save), this.message = t("#shutto-save-message"), app.bind({"save.before": function () {
                return r.element.removeClass("shutto-error").text("保存 ...")
            }, "save.complete": function () {
                return r.element.text(r.element.text().replace(/\s+...$/, ""))
            }, "save.error": function () {
                return r.element.text("保存に失敗しました").addClass("shutto-error")
            }, "save.success": function () {
                return r.element.text("保存しました")
            }}), app.history.bind({"commit,undo,redo": function () {
                return r.element.text("保存")
            }})
        }

        return n
    }(),E = function () {
        function e() {
            this.onChange = qe(this.onChange, this), this.hide = qe(this.hide, this), this.show = qe(this.show, this);
            var e, n = this;
            this.panel = t("#shutto-source-zoom-panel"), this.label = t("#shutto-source-zoom"), this.panel.click(function (t) {
                return t.stopPropagation()
            }), this.label.click(function (t) {
                return t.stopPropagation(), n.panel.hasClass("shutto-on") ? n.hide() : n.show()
            }), app.source.$.events.bind({documentmousedown: this.hide}), this.panel.delegate("input", "change", this.onChange), (e = t.Cookie.read("pc.zoom")) && (this.setZoom(e), this.panel.find("input").val(parseInt(e)))
        }

        return e.prototype.show = function () {
            return this.panel.addClass("shutto-on"), t(document).on({click: this.hide})
        }, e.prototype.hide = function () {
            return this.panel.removeClass("shutto-on"), t(document).off({click: this.hide})
        }, e.prototype.onChange = function (e) {
            return this.setZoom(parseInt(t(e.target).val()) + "%")
        }, e.prototype.setZoom = function (e) {
            return this.label.find("span").text(e), app.source.root.css({"-webkit-transform-origin": "0 0", "-moz-transform-origin": "0 0", "-webkit-transform": "scale(" + parseInt(e) / 100 + ")", "-moz-transform": "scale(" + parseInt(e) / 100 + ")"}), t.Cookie.write("pc.zoom", e)
        }, e
    }(),P = function () {
        function e() {
            this.adjustPosition = qe(this.adjustPosition, this), this.onClickBody = qe(this.onClickBody, this), this.toggle = qe(this.toggle, this);
            var e = this;
            this.button = t("#shutto-preview-button-width"), this.menu = t("#shutto-width-context-menu"), this.button.length && this.menu.length && (this.button.on({mousedown: this.stop, click: this.toggle}), this.menu.delegate("li[data-width]", {mousedown: this.stop, click: function (n) {
                return e.setValue(t(n.target).data("width")), e.hide()
            }}), this.setValue(t.Cookie.read("edit.preview_width") || "320"), t(window).on("resize", this.adjustPosition))
        }

        return e.prototype.isShown = function () {
            return this.button.hasClass("shutto-on")
        }, e.prototype.toggle = function () {
            return this.isShown() ? this.hide() : this.show()
        }, e.prototype.show = function () {
            return this.button.addClass("shutto-on"), this.menu.addClass("shutto-on"), t(document).bind("mousedown", this.onClickBody), app.source.$(app.source.window.document).bind("mousedown", this.onClickBody)
        }, e.prototype.hide = function () {
            return this.button.removeClass("shutto-on"), this.menu.removeClass("shutto-on"), t(document).unbind("mousedown", this.onClickBody), app.source.$(app.source.window.document).unbind("mousedown", this.onClickBody)
        }, e.prototype.onClickBody = function () {
            return this.hide()
        }, e.prototype.adjustPosition = function () {
            var e, n, r, o, i, s, a, u, c, p;
            return s = t("#shutto-preview-container"), i = t("#shutto-preview"), c = t("#shutto-source-container"), s[0].style.width = "", c[0].style.left = "", i[0].style.width = "", this.menu[0].style.left = "", s.removeClass("shutto-shrink"), "320" !== t("body").data("preview-width") && (o = s.offset(), a = o.left + o.width, n = 400, r = 347, u = t(document).width() - a, n > u) ? (e = n - u, p = parseInt(s.css("width")) - e, r > p && (e -= r - p, p = r), i.css("width", i.width()), s.css("width", p), c.css("left", parseInt(c.css("left")) - e), this.menu.css("left", parseInt(this.menu.css("left")) - e), s.addClass("shutto-shrink")) : void 0
        }, e.prototype.stop = function (t) {
            return t.preventDefault(), t.stopPropagation()
        }, e.prototype.setValue = function (e) {
            var n, r, o, i, s, a;
            return r = t("#shutto-preview-container").width(), this.menu.find("li").removeAttr("data-checked"), i = this.menu.find("li[data-width='" + e + "']"), i.data("checked", "true"), this.button.text("幅" + i.text()), t("body").data("preview-width", e), this.adjustPosition(), (o = null != (s = app.propertyEditor) ? s.element : void 0) && (n = t("#shutto-preview-container").width(), r !== n && o.css("left", parseInt(o.css("left")) + n - r)), t.Cookie.write("edit.preview_width", e, {duration: 365}), app.trigger("resizePreview"), null != (a = app.selectView) ? a.refresh() : void 0
        }, e
    }(),p = function () {
        function e() {
            this.deleteImage = qe(this.deleteImage, this), this.upload = qe(this.upload, this), this.onSelectImage = qe(this.onSelectImage, this), this.hideOnClickBackground = qe(this.hideOnClickBackground, this), this.hide = qe(this.hide, this), this.show = qe(this.show, this);
            var e = this;
            this.el = t("#shutto-image-library"), this.el.delegate(".shutto-close", "click", this.hide), this.el.delegate(".shutto-menu li", "click", function (n) {
                return e.setType(t(n.target).data("type"))
            }), this.el.click(this.hideOnClickBackground), this.el.delegate('input[type="file"]', "change", this.upload), this.el.delegate(".shutto-images li", "click", this.onSelectImage), this.el.delegate(".shutto-images li .shutto-delete", "click", this.deleteImage), this.el.find('input[name="domain"]').val(app.source.domain())
        }

        return e.prototype.show = function (t) {
            return null == t && (t = {}), this.setType("pc"), this.setupImages(), this.el.addClass("shutto-on"), this.callbacks = {select: t.select || function () {
            }, cancel: t.cancel || function () {
            }}
        }, e.prototype.hide = function () {
            var t;
            return this.el.removeClass("shutto-on"), null != (t = this.callbacks) && "function" == typeof t.cancel && t.cancel({}), delete this.callbacks
        }, e.prototype.setType = function (t) {
            return this.el.find(".shutto-dialog-content").data("type", t)
        }, e.prototype.hideOnClickBackground = function (e) {
            return t(e.target).closest(".shutto-dialog").length ? void 0 : this.hide()
        }, e.prototype.onSelectImage = function (e) {
            var n, r;
            if (!t(e.target).is(".shutto-delete"))return n = t(e.target).closest("li").find("img").attr("src"), null != (r = this.callbacks) && "function" == typeof r.select && r.select({url: n}), delete this.callbacks, this.hide()
        }, e.prototype.upload = function (e) {
            var n, r, o, i, s = this;
            return n = t(e.target), r = this.el.find("form"), i = r.find("a"), i.text(i.text() + "...").addClass("shutto-disabled"), o = t("<iframe>").attr({name: r.attr("target"), "class": "shutto-ui-helper-hidden-accessible"}).appendTo(document.body).bind("load", function () {
                return n[0].value = null, i.text(i.text().replace(/...$/, "")).removeClass("shutto-disabled"), s.addUploadedImage(o[0].contentWindow.imageUrl), o.remove()
            }), r.submit()
        }, e.prototype.addUploadedImage = function (e) {
            var n;
            return n = this.el.find('ul.shutto-images[data-type="upload"]'), t("<li>").append(t("<img>").attr("src", e)).prependTo(n), this.setType("upload")
        }, e.prototype.setupImages = function () {
            return this.setupUploadedImages(), this._setup ? void 0 : (this._setup = !0, this.setupPCImages())
        }, e.prototype.setupUploadedImages = function () {
            var e;
            return e = this.el.find('ul.shutto-images[data-type="upload"]').empty(), e.addClass("shutto-loading"), t.getJSON("/convert/uploaded_images?domain=" + encodeURIComponent(app.source.domain()), function (n) {
                var r, o, i, s;
                for (e.removeClass("shutto-loading"), s = [], o = 0, i = n.length; i > o; o++)r = n[o], s.push(t("<li>").append(t("<img>").attr("src", r.url)).append(t("<span>").addClass("shutto-delete")).appendTo(e));
                return s
            })
        }, e.prototype.setupPCImages = function () {
            var e, n, r, o, i, s;
            for (n = this.el.find('ul.shutto-images[data-type="pc"]'), i = this.extractPCImages(), s = [], r = 0, o = i.length; o > r; r++)e = i[r], s.push(t("<li>").append(t("<img>").attr("src", e)).appendTo(n));
            return s
        }, e.prototype.extractPCImages = function () {
            var e, n, r, o, i, s, a, u;
            for (i = [], u = app.source.find("*"), s = 0, a = u.length; a > s; s++)n = u[s], "img" === n.tagName.toLowerCase() && i.push(n.src), (r = t(n).css("background-image")) && (o = r.match(/url\([\"\']?(.*)[\"\']?\)/)) && (e = app.source.toAbsoluteUrl(o[1])) && i.push(e);
            return _.uniq(i)
        }, e.prototype.deleteImage = function (e) {
            var n, r;
            return n = t(e.target).closest("li"), r = n.find("img").attr("src"), window.confirm("この画像を一覧から削除します。よろしいですか？") ? (t.post("/convert/uploaded_images", {_method: "delete", domain: app.source.domain(), url: r, authenticity_token: this.el.find('input[name="authenticity_token"]').val()}), setTimeout(function () {
                return n.remove()
            }, 0)) : void 0
        }, e
    }(),s = function () {
        function n(e) {
            this.onClickBody = qe(this.onClickBody, this), this.onClick = qe(this.onClick, this);
            var n, r, o, i, s;
            for (this.element = t(e).bind("mousedown", this.onClick).bind("click", this.onClick), s = this.element.find("li"), o = 0, i = s.length; i > o; o++)r = s[o], r = t(r), (n = r.attr("data:action")) && r.bind("click", this.actionHandler(n))
        }

        return n.prototype.enabled = {copy: function () {
            return app.copy.canCopy()
        }, paste: function () {
            return app.copy.canPaste()
        }, undo: function () {
            return app.history.canUndo()
        }, redo: function () {
            return app.history.canRedo()
        }, save: function () {
            return app.isSignedIn()
        }, preview: function () {
            return t("#shutto-open-preview").attr("href") || !app.isSignedIn()
        }, remove: function () {
            return!app.select.empty() && app.select.components.every(function (t) {
                return t.canRemove()
            })
        }, symbolize: function () {
            return!app.select.empty() && !this.selectedSymbol() && app.select.components.every(function (t) {
                var e;
                return t.canRemove() && "line" !== t.type() && "grid" !== (null != (e = t.parent) ? e.type() : void 0)
            })
        }, unsymbolize: function () {
            return!!this.selectedSymbol()
        }, repeatundo: function () {
            var t;
            return!!(null != (t = app.select.repeat()) ? t.reversible : void 0)
        }, search: function () {
            return!0
        }}, n.prototype.selectedSymbol = function () {
            var t;
            if (t = app.select.components[0])for (; t;) {
                if ("symbol" === t.type())return t;
                t = t.parent
            }
            return!1
        }, n.prototype.show = function (e) {
            var n, r, o, i, s, a, u, c;
            for (e.preventDefault(), this.setEnabled(), this.setRepeat(), this.setInsertSymbol(), t(document).bind("mousedown", this.onClickBody), app.source.$(app.source.window.document).bind("mousedown", this.onClickBody), n = t("#shutto-contents").offset(), this.element.css({left: e.pageX - n.left, top: e.pageY - n.top}).show(), i = this.element.offset(), r = window.innerHeight - (i.top + i.height), 10 > r && this.element.css("top", e.pageY - n.top - (10 - r)), u = this.element.find("li.shutto-repeat, li.shutto-insert-symbol"), c = [], s = 0, a = u.length; a > s; s++)o = u[s], o = t(o), c.push(function (t) {
                var e;
                return t.find("ul").css("top", -1), e = function () {
                    var n;
                    return n = t.find("ul"), i = n.offset(), r = window.innerHeight - (i.top + i.height), n.css("top", 0 > r ? Math.max(r - 10, -i.top + 1) : -1), t.unbind("mouseover", e)
                }, t.bind("mouseover", e)
            }(o));
            return c
        }, n.prototype.setEnabled = function () {
            var e, n, r, o, i, s, a;
            for (i = this.element.find("li"), a = [], r = 0, o = i.length; o > r; r++)n = i[r], n = t(n), (e = n.attr("data:action")) ? a.push(n.toggleClass("shutto-disabled", !(null != (s = this.enabled[e]) ? s.call(this) : void 0))) : a.push(void 0);
            return a
        }, n.prototype.hide = function () {
            return t(document).unbind("mousedown", this.onClickBody), app.source.$(app.source.window.document).unbind("mousedown", this.onClickBody), this.element.hide(), t("#shutto-preview-button-menu").removeClass("shutto-on")
        }, n.prototype.onClick = function (t) {
            return t.stopPropagation()
        }, n.prototype.onClickBody = function () {
            return this.hide()
        }, n.prototype.actionHandler = function (t) {
            var n = this;
            return function () {
                var r;
                return(null != (r = n.enabled[t]) ? r.call(n) : void 0) ? (e[t](), n.hide()) : void 0
            }
        }, n.prototype.setRepeat = function () {
            var e, n, r, o, i, s, a;
            if (n = this.element.find("li.shutto-repeat"), r = n.find("ul").empty(), i = this.repeatTargets(app.select.components))for (s = 0, a = i.length; a > s; s++)o = i[s], e = t("<li>").text(this.repeatLabel(o.repeat)).appendTo(r), e.bind({mouseover: this.repeatMouseOverHandler(e, o.repeat), mouseout: this.repeatMouseOutHandler(e, o.repeat), click: this.repeatClickHandler(o)});
            return n.toggleClass("shutto-disabled", !i)
        }, n.prototype.repeatTargets = function (e) {
            var n, r, o, i, s;
            if (1 === e.length && "group" === (o = e[0]).type() && (r = function () {
                var t, e, n, r;
                for (n = o.children, r = [], t = 0, e = n.length; e > t; t++)i = n[t], "extract" === i.content.type() && r.push(i.content);
                return r
            }(), r.length))return n = r.reduce(function (t, e) {
                return t.add(e.source)
            }, app.source.$()), s = t.Repeat.get(n), s.length ? s : null
        }, n.prototype.repeatLabel = function (t) {
            var e;
            return this.elementLabel(t.parent) + " > " + function () {
                var n, r, o, i;
                for (o = t.units[0], i = [], n = 0, r = o.length; r > n; n++)e = o[n], i.push(this.elementLabel(e));
                return i
            }.call(this).join(", ")
        }, n.prototype.elementLabel = function (t) {
            var e, n, r;
            return t = app.source.$(t), r = t.tagName(), (e = t.attr("id")) ? r += "#" + e : (n = t.attr("class")) && (r += "." + n.split(/\s+/).join(".")), r
        }, n.prototype.repeatMouseOverHandler = function (e, n) {
            return function (r) {
                var o, i, s, a, u;
                if (t.ev.isMouseInOut(r, e[0])) {
                    for (a = n.units, u = [], i = 0, s = a.length; s > i; i++)o = a[i], u.push(app.source.$.highlight(o));
                    return u
                }
            }
        }, n.prototype.repeatMouseOutHandler = function (e) {
            return function (n) {
                return t.ev.isMouseInOut(n, e[0]) ? app.source.$.clearHightlight() : void 0
            }
        }, n.prototype.repeatClickHandler = function (t) {
            var e = this;
            return function () {
                var n, o, i, s, a, u, c, p, l, h;
                return p = app.select.components[0], s = p.parent.children.indexOf(p), o = p.parent, o.removeChild(p), h = t.repeat, l = app.source.$(h.parent), n = new r.Repeat2({reversible: !0, targetIndex: t.index, range: "" + (t.index + 1) + "-", mock: p.constructor.deserialize(p.serialize()), root: app.source.selector(l), start: app.source.selector(app.source.$(h.units[0][0]), l), repeat: function () {
                    var e, n, r, o;
                    for (r = h.units[0], o = [], e = 0, n = r.length; n > e; e++)i = r[e], c = i.tagName.toLowerCase(), t.repeat.options["class"] && (c += ".", (u = i.className) && (c += function () {
                        var t, e, n, r;
                        for (n = u.split(/\s+/), r = [], t = 0, e = n.length; e > t; t++)a = n[t], r.push(a);
                        return r
                    }().join("."))), o.push(c);
                    return o
                }()}), o.insertChild(n, s), app.history.commit(), app.select.set(n), e.hide()
            }
        }, n.prototype.setInsertSymbol = function () {
            var e, n, o, i, s, a, u;
            if (n = this.element.find("li.shutto-insert-symbol"), n.length) {
                for (i = n.find("ul").empty(), u = r.Symbol.Model.models, s = 0, a = u.length; a > s; s++)o = u[s], o.isDammy() || (e = t("<li>").text("" + o.name + " (ID:" + o.id + ")").appendTo(i), e.bind({click: this.insertSymbolClickHandler(o)}));
                return n.toggleClass("shutto-disabled", !r.Symbol.Model.getRealModels().length || !app.select.empty() && _.last(app.select.components).symbolParent())
            }
        }, n.prototype.insertSymbolClickHandler = function (t) {
            var e = this;
            return function () {
                var n, r, o;
                return n = [t.createSymbol()], r = app.copy.getInsertionAfter(_.last(app.select.components), n), n = r.parent.insertChild(n, null != (o = r.index) ? o : r.parent.children.length, !0), app.history.commit(), app.select.set(n), e.hide()
            }
        }, n
    }(),n = function (n) {
        function h() {
            return this.onClickMenu = qe(this.onClickMenu, this), this.onContextMenu = qe(this.onContextMenu, this), this.onDoubleClick = qe(this.onDoubleClick, this), this.onMouseDown = qe(this.onMouseDown, this), this.onMouseOut = qe(this.onMouseOut, this), this.onMouseOver = qe(this.onMouseOver, this), this.previewName = qe(this.previewName, this), $e = h.__super__.constructor.apply(this, arguments)
        }

        return Fe(h, n), h.prototype.initialize = function (t) {
            var e = this;
            return(new h.Setup).bind({success: function () {
                return e.setup(t)
            }})
        }, h.prototype.setup = function (n) {
            var u, h, d, m, g, v, _ = this;
            for (null == n && (n = {}), this.keyboard = (new f).bind({s: "save", p: "preview", a: "selectAll", d: "unselect", z: "undo", "y,shift+z": "redo", "delete": "remove", "down,j": "selectNext", "up,k": "selectPrevious", "right,i": "selectInner", "left,o": "selectOuter"}), this.proxy = new b("#shutto-proxy"), this.source = new C("#shutto-source"), t.Repeat.prepare(this.source.$("body")), window.symbols && r.Symbol.Model.deserialize(window.symbols), r.Symbol.Model.replace(window.symbol_replaces), this.page = n.rule ? r.Symbol.skipDammy(function () {
                return r.load(n.rule)
            }) : new r.Page, r.Symbol.Model.replace(), this.history = (new c).bind({"undo,redo": function () {
                var t;
                return _.select.set(function () {
                    var e, n, r, o;
                    for (r = this.select.components, o = [], e = 0, n = r.length; n > e; e++)t = r[e], t.parent && o.push(t.getSelectTarget());
                    return o
                }.call(_)), _.focus.clear()
            }, commit: function () {
                return _.selectView.refresh()
            }}), this.copy = new a, this.view = T.get(this.page, {element: "#shutto-preview"}), this.view.getElement().bind({mouseover: this.onMouseOver, mouseout: this.onMouseOut, mousedown: this.onMouseDown, contextmenu: this.onContextMenu, click: this.onClick, dblclick: this.onDoubleClick}), t("#shutto-preview-button-menu").bind({mousedown: function (t) {
                return t.stopPropagation(), t.preventDefault()
            }, click: this.onClickMenu}), this.focus = new o, this.focusView = new i(this.focus, {name: "focus", container: this.view.element, padding: [0, 3, 2, 1]}), this.select = new o.Selection, this.selectView = new i.Selection(this.select, {name: "select", container: this.view.element}), this.insertionView = new l({container: this.view.element}), this.selectionNavigator = new w("#shutto-selection", this.page, this.select, this.focus), this.selectorNavigator = new k("#shutto-selectors", this.source), this.focus.bind({select: function () {
                var t, e, n, r;
                return(t = null != (n = _.focus.contents()) ? n[0] : void 0) && (e = null != (r = t.source) ? r[0] : void 0) ? (_.source.$.focus(e), void 0) : _.source.$.unfocus()
            }}), this.saveView = new x("#shutto-save"), t("#shutto-open-preview-guest").bind("click", e.preview), this.contextMenu = new s("#shutto-preview-context-menu"), v = ["heading", "text", "image", "grid", "tab", "box", "accordion", "slider", "menu", "pc", "form", "textfield", "button", "checkbox", "select", "map", "recommend", "affiliate", "pane2"], m = 0, g = v.length; g > m; m++)d = v[m], (u = t("#shutto-component_" + d + ":not(.shutto-disabled)")).length && new (I[t.s.capitalize(d)])(u);
            return this.propertyEditor = new y("#shutto-property", "#shutto-property-baloon", this.select).bind({prop: function (t) {
                var e, n, r, o, i;
                for (o = _.select.components, i = [], n = 0, r = o.length; r > n; n++)e = o[n], (d = S[e.template]) ? i.push(d.update(t.key, t.value)) : i.push(void 0);
                return i
            }}), this.widthView = new P, this.imageLibrary = new p, t(window).on("beforeunload", function (t) {
                return _.isSignedIn() && !_.previewName() && _.history.canUndo() ? t.returnValue = "保存していない変更は破棄されます。" : void 0
            }), this.bind("save.success", function (t) {
                return _.previewName(t.rule.name)
            }), this.history.bind("commit,undo,redo", function () {
                return _.previewName("")
            }), (h = t("#shutto-open-preview").attr("href")) && t("#shutto-source-used a").attr("href", h.replace("/view/", "/used/")), t("#shutto-source-reload").on("click", function () {
                return location.hash = "#reload", location.reload()
            }), t("#shutto-source-cssswitch span").on("click", function () {
                return u = t("#shutto-source-cssswitch span"), u.hasClass("shutto-on") ? (u.removeClass("shutto-on"), _.source.$.setCSSEnabled(!1)) : (u.addClass("shutto-on"), _.source.$.setCSSEnabled(!0))
            }), new E, this.trigger("load")
        }, h.prototype.save = function () {
            var e = this;
            if (window.alert_user_before_save) {
                if (!confirm("アカウント「" + window.user.name + "」にページ設定を保存します。よろしいですか？"))return;
                delete window.alert_user_before_save
            }
            return this.trigger("save.before"), app.proxy.request("save", {data: t.extend(N(), {url: this.source.url(), rule: JSON.stringify(this.page.serialize()), route_id: window.route_id || "", rule_id: window.rule_id || "", symbols: JSON.stringify(r.Symbol.Model.serialize())})}, function (t) {
                return t.success ? e.trigger("save.success", {rule: t.rule}) : e.trigger("save.error"), e.trigger("save.complete")
            })
        }, h.prototype.previewName = function (e) {
            return 0 === arguments.length ? (t("#shutto-open-preview").attr("href") || "").replace(/^\/view\//, "") : e ? (t("#shutto-open-preview").attr("href", "/view/" + e), t("#shutto-source-used a").attr("href", "/used/" + e)) : (t("#shutto-open-preview").removeAttr("href"), t("#shutto-source-used a").removeAttr("href"))
        }, h.prototype.getSelectTarget = function (t) {
            var e, n;
            return(e = null != (n = T.fromElement(t)) ? n.component : void 0) && /shutto-component-pane2-main|shutto-component-pane2-side/.test(t.className) && (e = e.parent), null != e ? e.getSelectTarget() : void 0
        }, h.prototype.onMouseOver = function (t) {
            return this.focus.set(this.getSelectTarget(t.target))
        }, h.prototype.onMouseOut = function (e) {
            return t.ev.isMouseInOut(e, this.view.element[0]) ? this.focus.clear() : void 0
        }, h.prototype.onMouseDown = function (e) {
            var n, r, o, i, s = this;
            if (0 === e.button)return(n = this.getSelectTarget(e.target)) ? ((i = this.select.isSelected(n, !0)) ? this.select.trigger("reselect", {components: this.select.components}) : e.shiftKey ? this.select.setTo(n) : this.select.set(n), r = t.a.uniq(this.select.components.map(function (e) {
                return t.a.contains(["pane2-main", "pane2-side"], e.type()) ? e.parent : e
            })), r.every(function (t) {
                return t.canRemove()
            }) ? (o = new u.Component(r), i && o.bind("cancel", function () {
                return s.select.set(n), 2 === e.detail ? s.select.outer() : void 0
            }), this.acceptDrop(o), o.start(e)) : i && this.select.set(n)) : this.select.clear(), e.preventDefault()
        }, h.prototype.onDoubleClick = function () {
            return this.select.outer()
        }, h.prototype.onContextMenu = function (t) {
            var e;
            return e = this.getSelectTarget(t.target), this.select.isSelected(e, !0) || this.select.set(e, {contextmenu: !0}), this.contextMenu.show(t), this.trigger("contextmenu.open")
        }, h.prototype.onClick = function (t) {
            return t.preventDefault()
        }, h.prototype.onClickMenu = function (e) {
            var n;
            return"none" === this.contextMenu.element.css("display") ? (n = t("#shutto-preview-button-menu").offset(), this.contextMenu.show({preventDefault: function () {
            }, pageX: n.left, pageY: n.top + n.height}), t(e.target).addClass("shutto-on"), this.trigger("contextmenu.open")) : this.contextMenu.hide()
        }, h.prototype.acceptDrop = function (t) {
            var e = this;
            return t.bind({snap: function (t) {
                return e.trigger("snap", t)
            }, dragover: function (n) {
                return e.checkScroll(n.target.getPosition()), e.insertionView.set(e.getInsertionOrReplace(t))
            }, dragout: function () {
                return e.stopScroll(), e.insertionView.hide()
            }, complete: function () {
                return e.stopScroll(), e.insertionView.hide()
            }, drop: function (n) {
                var r, o, i;
                return(i = e.getInsertionOrReplace(t)) && (t.alive && (o = t.components[0], i.parent === o.parent && o.parent.children.indexOf(o) < i.index && (i.index -= t.components.length), o.parent.removeChild(t.components)), r = i.replace ? i.replace.parent.replaceChild(t.components, i.replace) : i.parent.insertChild(t.components, i.index), e.select.set(r), e.history.commit()), e.trigger("drop", n)
            }, dropout: function () {
                return t.alive ? (t.components[0].parent.removeChild(t.components), e.history.commit(), e.select.clear()) : void 0
            }})
        }, h.prototype.getInsertionOrReplace = function (t) {
            var e, n;
            return e = this.getInsertion(t), (n = this.getReplace(t, e)) ? n : e
        }, h.prototype.getInsertion = function (e) {
            var n, r, o, i, s, a, u, c, p;
            if (e.alive)for (c = e.components, a = 0, u = c.length; u > a; a++)if (n = c[a], t.geo.isInside(T.get(n).getElement().offset(), e.getPosition()))return;
            if (s = this.view.getInsertion(e.components, e.getPosition()), !(e.alive && (i = e.components[0]).parent === (null != s ? s.parent : void 0) && (r = i.parent.children.indexOf(i), r <= (p = s.index) && p <= r + e.components.length))) {
                if (s)try {
                    s.parent.validateInsertedChildren(e.components, !0)
                } catch (l) {
                    return o = l, null
                }
                return s
            }
        }, h.prototype.getReplace = function (t, e) {
            var n, r, o, i, s, a, u, c, p, l;
            if (e && "slider" !== e.parent.type()) {
                for (p = [e.index - 1, e.index], u = 0, c = p.length; c > u; u++)if (r = p[u], a = e.parent.children[r]) {
                    if ("line" !== a.type())continue;
                    if (o = T.get(a).getElement().offset(), n = o.top + o.height / 2, s = .5 * o.height, i = t.getPosition(), n - s / 2 <= (l = i.y) && n + s / 2 >= l)return{replace: a}
                }
                return null
            }
        }, h.prototype.globalToLocal = function (t) {
            var e, n;
            return e = this.view.element.offset(), n = {top: this.view.element[0].scrollTop, left: this.view.element[0].scrollLeft}, t.left += -e.left + n.left, t.top += -e.top + n.top, t
        }, h.prototype.scrollMargin = 20, h.prototype.scrollDelta = 20, h.prototype.scrollInterval = 50, h.prototype.checkScroll = function (t) {
            var e;
            return t ? (e = this.view.getElement().parent().offset(), t.y < e.top + this.scrollMargin ? this.startScroll(-this.scrollDelta) : t.y > e.top + e.height - this.scrollMargin ? this.startScroll(this.scrollDelta) : this.stopScroll()) : this.stopScroll
        }, h.prototype.startScroll = function (t) {
            var e;
            if (this.scrollTimerId) {
                if (t === this.currentScrollDelta)return;
                this.stopScroll()
            }
            return this.currentScrollDelta = t, e = this.view.getElement().parent()[0], this.scrollTimerId = setInterval(function () {
                return e.scrollTop += t
            }, this.scrollInterval)
        }, h.prototype.stopScroll = function () {
            return clearInterval(this.scrollTimerId), delete this.scrollTimerId
        }, h.prototype.isSignedIn = function () {
            return"guest" !== window.user.role
        }, h
    }(m),n.Setup = function (e) {
        function n() {
            this.check = qe(this.check, this);
            var e;
            n.__super__.constructor.apply(this, arguments), this.iframe = t("#shutto-source"), e = t("#shutto-source").attr("data-src"), "#reload" === location.hash && (e += "&reload=1"), t("#shutto-source").attr("src", e), setTimeout(this.check, this.checkInterval)
        }

        return Fe(n, e), n.prototype.checkInterval = 100, n.prototype.check = function () {
            var t, e;
            return(null != (t = this.iframe[0].contentWindow) ? t._shutto_ready : void 0) ? this.loaded() : (null != (e = this.iframe[0].contentWindow) ? e._shutto_error : void 0) ? this.loaderror() : setTimeout(this.check, this.checkInterval)
        }, n.prototype.loaded = function () {
            return this.success()
        }, n.prototype.success = function () {
            var e;
            t("#shutto-loading, .shutto-before-load").hide(), t(".shutto-after-load").css("visibility", "visible");
            try {
                return this.trigger("success")
            } catch (n) {
                return e = n, this.error()
            }
        }, n.prototype.error = function () {
            var e = this;
            return t("#shutto-loading").hide(), t(".shutto-after-load").css("visibility", "hidden"), t("#shutto-application-error").show(), t("#shutto-clear-reload").bind("click", function () {
                return e.reload()
            }), this.trigger("error")
        }, n.prototype.loaderror = function () {
            return t("#shutto-loading").hide(), t("#shutto-load-error").css("display", "block")
        }, n.prototype.reload = function () {
            return t.post("/convert/save.json", t.extend({url: t.s.parseQuery(this.iframe.attr("src").split("?")[1]).url, rule: JSON.stringify((new r.Page).serialize())}, N), function (t) {
                return location.href = t.url.replace("/view/", "/edit/")
            }, "json")
        }, n
    }(m),N = function () {
        var e;
        return e = {}, e[t("meta[name=csrf-param]").attr("content")] = t("meta[name=csrf-token]").attr("content"), e
    },e = {selectAll: function () {
        return app.select.set(app.page.children)
    }, selectNext: function () {
        return app.select.next()
    }, selectPrevious: function () {
        return app.select.previous()
    }, selectInner: function () {
        return app.select.inner()
    }, selectOuter: function () {
        return app.select.outer()
    }, unselect: function () {
        return app.select.clear()
    }, undo: function () {
        return app.history.undo()
    }, redo: function () {
        return app.history.redo()
    }, copy: function () {
        return app.copy.copy()
    }, paste: function () {
        return app.copy.paste()
    }, remove: function () {
        var e, n;
        return!app.select.empty() && app.select.components.every(function (t) {
            return t.canRemove()
        }) ? (e = app.select.components, t.a.last(e) === t.a.last(app.page.children) ? app.select.previous() : app.select.next(), n = app.select.components, e[0].parent.removeChild(e), app.history.commit(), n.some(function (n) {
            return t.a.contains(e, n)
        }) && app.select.clear(), app.focus.clear()) : void 0
    }, save: function () {
        return app.isSignedIn() ? app.save() : void 0
    }, preview: function () {
        var e;
        return app.isSignedIn() ? (e = t("#shutto-open-preview").attr("href")) ? window.open(e, "_blank") : void 0 : (app.bind("save.success", _.once(function (t) {
            return window.open("/view/" + t.rule.name)
        })), app.save())
    }, symbolize: function () {
        var t, e, n, o;
        return t = app.select.components, n = t[0].parent, e = n.children.indexOf(t[0]), o = new r.Symbol({children: t}), n.insertChild(o, e, !0), app.history.commit(), app.select.set(o)
    }, unsymbolize: function () {
        var t, e, n, o, i;
        return i = app.contextMenu.selectedSymbol(), o = i.parent, n = o.children.indexOf(i), o.removeChild(i), e = o.insertChild(function () {
            var e, n, o, s;
            for (o = i.model.getContent().children || [], s = [], e = 0, n = o.length; n > e; e++)t = o[e], s.push(r.load(t));
            return s
        }(), n, !0), app.history.commit(), app.select.set(e)
    }, repeatundo: function () {
        var t, e;
        return e = app.select.repeat(), (null != e ? e.reversible : void 0) ? (t = e.reverse(), app.history.commit(), app.select.set(t)) : void 0
    }, search: function () {
        var t = this;
        return setTimeout(function () {
            var e;
            return(e = (window.prompt("検索語を入力") || "").trim()) ? t._search(e) : void 0
        }, 0)
    }, _search: function (t) {
        var e;
        return app.select.clear(), e = this._componentsContainWord(t), window.alert(e.length ? '"' + t + '"を含む要素が' + e.length + "件見つかりました。" : '"' + t + '"を含む要素は見つかりませんでした。'), e.length ? app.select.set(e[0]) : void 0
    }, _componentsContainWord: function (t) {
        var e;
        return e = [], app.page.traverse(function (n) {
            var r, o, i;
            i = n.mock ? n.mock.props : n.props;
            for (r in i)if (o = i[r], String(o).indexOf(t) >= 0)return e.push(n), void 0;
            return"line" === n.type() && JSON.stringify(n.content.serialize()).indexOf(t) >= 0 ? e.push(n) : void 0
        }), e
    }},O = function () {
        return t("<form>").attr({action: "https://" + location.host + "/logout", method: "POST"}).append(t('<input type="hidden" name="_method" value="DELETE">')).appendTo(document.body).submit()
    },window.app = new n,M = function () {
        var n, r, o;
        return("guest" === t("body").data("userrole") || "0" === t("body").data("sites-count") && "0" !== t.Cookie.read("guide")) && (o = t("#shutto-start-guide").delegate("[data-target]", "click", function (e) {
            return o.data("page", t(e.target).data("target"))
        }).delegate(".shutto-close", "click", function () {
            return t("body").data("guide", !1), t.Cookie.write("guide", "0", {duration: 14})
        }), app.bind("load", function () {
            return t("body").data("guide", "true")
        })), window.route_over_capacity && (t("#shutto-route-over-capacity").delegate(".shutto-close", "click", function () {
            return t("body").data("route-over-capacity", !1)
        }), s.prototype.enabled.save = function () {
            return!1
        }, e.save = function () {
        }, app.bind("load", function () {
            return t("body").data("route-over-capacity", "true"), t("#shutto-save").addClass("shutto-disabled")
        })), app.bind("load", function () {
            return app.proxy.request("user", {}, function (t) {
                return window.user.name === t.name ? window.user = t : O()
            }), app.proxy.request("csrf", {}, function (e) {
                return t("head").append(t("<meta name='csrf-param' content='" + e.param + "'>")).append(t("<meta name='csrf-token' content='" + e.token + "'>"))
            }), app.source.$.setCSSEnabled(!1), setTimeout(function () {
                return app.source.$.setCSSEnabled(!0)
            }, 0)
        }), app.initialize({rule: window.rule}), t(".shutto-account > span").on("click", function (e) {
            var n;
            return e.stopPropagation(), n = function () {
                return t(".shutto-account > ul").toggleClass("on")
            }, t("html").on("click", _.once(n)), n()
        }), (n = t("#shutto-components-form-upgrade")).length && (r = t("#shutto-components-forms > ul").bind({mouseover: function (e) {
            return t.ev.isMouseInOut(e, r[0]) ? n.addClass("shutto-on").css("top", t("#shutto-components-forms").offset().top - t("#shutto-body").offset().top + 30 + "px") : void 0
        }, mouseout: function (e) {
            return t.ev.isMouseInOut(e, r[0]) ? n.removeClass("shutto-on") : void 0
        }})), t("#shutto-components section.shutto-closable h1").click(function (e) {
            return t(e.target).closest(".shutto-closable").toggleClass("shutto-close")
        }), t(document.body).attr("data-shutto-lang", t.I18n.locale)
    },L = function (e) {
        var n, r, o, i;
        return n = function () {
            return t(".shutto-confirm").hide(), t(".shutto-before-load").show(), e()
        }, o = t(".shutto-confirm"), o.length ? (r = o.attr("data-creator") || "", i = o.attr("data-url"), g.has(r, i) ? n() : t(".shutto-confirm .shutto-submit-button").click(function (t) {
            return t.preventDefault(), g.add(r, i), n()
        })) : n()
    },g = {key: "editPermission", getData: function () {
        try {
            return JSON.parse(window.localStorage[this.key])
        } catch (t) {
            return{}
        }
    }, setData: function (t) {
        try {
            return window.localStorage[this.key] = JSON.stringify(t)
        } catch (e) {
        }
    }, has: function (t, e) {
        var n, r;
        try {
            return r = this.getData()[t][e], _.isNumber(r) && r > (new Date).getTime()
        } catch (o) {
            return n = o, !1
        }
    }, add: function (t, e) {
        var n;
        return n = this.expire(this.getData()), (n[t] || (n[t] = {}))[e] = (new Date).getTime() + 12096e5, this.setData(n)
    }, expire: function (t) {
        var e, n, r, o, i, s, a;
        r = (new Date).getTime(), o = {};
        for (a in t) {
            s = t[a], n = {};
            for (i in s)e = s[i], e > r && (n[i] = e);
            _.isEmpty(n) || (o[a] = n)
        }
        return o
    }},t(function () {
        return L(M)
    })
}.call(this);