/**
 * Minified by jsDelivr using Terser v5.39.0.
 * Original file: /npm/@tailwindcss/browser@4.1.2/dist/index.global.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
"use strict";
(() => {
  var e = 10;
  function t(t) {
    "\ufeff" === t[0] && (t = t.slice(1)), (t = t.replaceAll("\r\n", "\n"));
    let o,
      a = [],
      i = [],
      l = [],
      s = null,
      c = null,
      u = "",
      d = "";
    for (let f = 0; f < t.length; f++) {
      let p = t.charCodeAt(f);
      if (92 === p) (u += t.slice(f, f + 2)), (f += 1);
      else if (47 === p && 42 === t.charCodeAt(f + 1)) {
        let e = f;
        for (let e = f + 2; e < t.length; e++)
          if (((o = t.charCodeAt(e)), 92 === o)) e += 1;
          else if (42 === o && 47 === t.charCodeAt(e + 1)) {
            f = e + 1;
            break;
          }
        let r = t.slice(e, f + 1);
        33 === r.charCodeAt(2) && i.push(x(r.slice(2, -2)));
      } else if (39 === p || 34 === p) {
        let r = f;
        for (let n = f + 1; n < t.length; n++)
          if (((o = t.charCodeAt(n)), 92 === o)) n += 1;
          else {
            if (o === p) {
              f = n;
              break;
            }
            if (59 === o && t.charCodeAt(n + 1) === e)
              throw new Error(
                `Unterminated string: ${t.slice(r, n + 1) + String.fromCharCode(p)}`,
              );
            if (o === e)
              throw new Error(
                `Unterminated string: ${t.slice(r, n) + String.fromCharCode(p)}`,
              );
          }
        u += t.slice(r, f + 1);
      } else {
        if (
          (32 === p || p === e || 9 === p) &&
          (o = t.charCodeAt(f + 1)) &&
          (32 === o || o === e || 9 === o)
        )
          continue;
        if (p === e) {
          if (0 === u.length) continue;
          (o = u.charCodeAt(u.length - 1)),
            32 !== o && o !== e && 9 !== o && (u += " ");
        } else if (45 === p && 45 === t.charCodeAt(f + 1) && 0 === u.length) {
          let e = "",
            r = f,
            i = -1;
          for (let n = f + 2; n < t.length; n++)
            if (((o = t.charCodeAt(n)), 92 === o)) n += 1;
            else if (47 === o && 42 === t.charCodeAt(n + 1)) {
              for (let e = n + 2; e < t.length; e++)
                if (((o = t.charCodeAt(e)), 92 === o)) e += 1;
                else if (42 === o && 47 === t.charCodeAt(e + 1)) {
                  n = e + 1;
                  break;
                }
            } else if (-1 === i && 58 === o) i = u.length + n - r;
            else {
              if (59 === o && 0 === e.length) {
                (u += t.slice(r, n)), (f = n);
                break;
              }
              if (40 === o) e += ")";
              else if (91 === o) e += "]";
              else if (123 === o) e += "}";
              else {
                if ((125 === o || t.length - 1 === n) && 0 === e.length) {
                  (f = n - 1), (u += t.slice(r, n));
                  break;
                }
                (41 === o || 93 === o || 125 === o) &&
                  e.length > 0 &&
                  t[n] === e[e.length - 1] &&
                  (e = e.slice(0, -1));
              }
            }
          let l = n(u, i);
          if (!l) throw new Error("Invalid custom property, expected a value");
          s ? s.nodes.push(l) : a.push(l), (u = "");
        } else if (59 === p && 64 === u.charCodeAt(0))
          (c = r(u)), s ? s.nodes.push(c) : a.push(c), (u = ""), (c = null);
        else if (59 === p && ")" !== d[d.length - 1]) {
          let e = n(u);
          if (!e)
            throw 0 === u.length
              ? new Error("Unexpected semicolon")
              : new Error(`Invalid declaration: \`${u.trim()}\``);
          s ? s.nodes.push(e) : a.push(e), (u = "");
        } else if (123 === p && ")" !== d[d.length - 1])
          (d += "}"),
            (c = b(u.trim())),
            s && s.nodes.push(c),
            l.push(s),
            (s = c),
            (u = ""),
            (c = null);
        else if (125 === p && ")" !== d[d.length - 1]) {
          if ("" === d) throw new Error("Missing opening {");
          if (((d = d.slice(0, -1)), u.length > 0))
            if (64 === u.charCodeAt(0))
              (c = r(u)), s ? s.nodes.push(c) : a.push(c), (u = ""), (c = null);
            else {
              let e = u.indexOf(":");
              if (s) {
                let t = n(u, e);
                if (!t) throw new Error(`Invalid declaration: \`${u.trim()}\``);
                s.nodes.push(t);
              }
            }
          let e = l.pop() ?? null;
          null === e && s && a.push(s), (s = e), (u = ""), (c = null);
        } else if (40 === p) (d += ")"), (u += "(");
        else if (41 === p) {
          if (")" !== d[d.length - 1]) throw new Error("Missing opening (");
          (d = d.slice(0, -1)), (u += ")");
        } else {
          if (0 === u.length && (32 === p || p === e || 9 === p)) continue;
          u += String.fromCharCode(p);
        }
      }
    }
    if ((64 === u.charCodeAt(0) && a.push(r(u)), d.length > 0 && s)) {
      if ("rule" === s.kind)
        throw new Error(`Missing closing } at ${s.selector}`);
      if ("at-rule" === s.kind)
        throw new Error(`Missing closing } at ${s.name} ${s.params}`);
    }
    return i.length > 0 ? i.concat(a) : a;
  }
  function r(e, t = []) {
    for (let r = 5; r < e.length; r++) {
      let n = e.charCodeAt(r);
      if (32 === n || 40 === n) {
        return k(e.slice(0, r).trim(), e.slice(r).trim(), t);
      }
    }
    return k(e.trim(), "", t);
  }
  function n(e, t = e.indexOf(":")) {
    if (-1 === t) return null;
    let r = e.indexOf("!important", t + 1);
    return y(
      e.slice(0, t).trim(),
      e.slice(t + 1, -1 === r ? e.length : r).trim(),
      -1 !== r,
    );
  }
  function o(e) {
    if (0 === arguments.length)
      throw new TypeError("`CSS.escape` requires an argument.");
    let t,
      r = String(e),
      n = r.length,
      o = -1,
      a = "",
      i = r.charCodeAt(0);
    if (1 === n && 45 === i) return "\\" + r;
    for (; ++o < n; )
      (t = r.charCodeAt(o)),
        (a +=
          0 !== t
            ? (t >= 1 && t <= 31) ||
              127 === t ||
              (0 === o && t >= 48 && t <= 57) ||
              (1 === o && t >= 48 && t <= 57 && 45 === i)
              ? "\\" + t.toString(16) + " "
              : t >= 128 ||
                  45 === t ||
                  95 === t ||
                  (t >= 48 && t <= 57) ||
                  (t >= 65 && t <= 90) ||
                  (t >= 97 && t <= 122)
                ? r.charAt(o)
                : "\\" + r.charAt(o)
            : "�");
    return a;
  }
  function a(e) {
    return e.replace(/\\([\dA-Fa-f]{1,6}[\t\n\f\r ]?|[\S\s])/g, (e) =>
      e.length > 2
        ? String.fromCodePoint(Number.parseInt(e.slice(1).trim(), 16))
        : e[1],
    );
  }
  var i = new Map([
    ["--font", ["--font-weight", "--font-size"]],
    ["--inset", ["--inset-shadow", "--inset-ring"]],
    [
      "--text",
      [
        "--text-color",
        "--text-decoration-color",
        "--text-decoration-thickness",
        "--text-indent",
        "--text-shadow",
        "--text-underline-offset",
      ],
    ],
  ]);
  function l(e, t) {
    return (i.get(t) ?? []).some((t) => e === t || e.startsWith(`${t}-`));
  }
  var s = class {
      constructor(e = new Map(), t = new Set([])) {
        (this.values = e), (this.keyframes = t);
      }
      prefix = null;
      add(e, t, r = 0) {
        if (e.endsWith("-*")) {
          if ("initial" !== t)
            throw new Error(
              `Invalid theme value \`${t}\` for namespace \`${e}\``,
            );
          "--*" === e
            ? this.values.clear()
            : this.clearNamespace(e.slice(0, -2), 0);
        }
        if (4 & r) {
          let t = this.values.get(e);
          if (t && !(4 & t.options)) return;
        }
        "initial" === t
          ? this.values.delete(e)
          : this.values.set(e, { value: t, options: r });
      }
      keysInNamespaces(e) {
        let t = [];
        for (let r of e) {
          let e = `${r}-`;
          for (let n of this.values.keys())
            n.startsWith(e) &&
              -1 === n.indexOf("--", 2) &&
              (l(n, r) || t.push(n.slice(e.length)));
        }
        return t;
      }
      get(e) {
        for (let t of e) {
          let e = this.values.get(t);
          if (e) return e.value;
        }
        return null;
      }
      hasDefault(e) {
        return !(4 & ~this.getOptions(e));
      }
      getOptions(e) {
        return (e = a(this.#e(e))), this.values.get(e)?.options ?? 0;
      }
      entries() {
        return this.prefix
          ? Array.from(this.values, (e) => ((e[0] = this.prefixKey(e[0])), e))
          : this.values.entries();
      }
      prefixKey(e) {
        return this.prefix ? `--${this.prefix}-${e.slice(2)}` : e;
      }
      #e(e) {
        return this.prefix ? `--${e.slice(3 + this.prefix.length)}` : e;
      }
      clearNamespace(e, t) {
        let r = i.get(e) ?? [];
        e: for (let n of this.values.keys())
          if (n.startsWith(e)) {
            if (0 !== t && (this.getOptions(n) & t) !== t) continue;
            for (let e of r) if (n.startsWith(e)) continue e;
            this.values.delete(n);
          }
      }
      #t(e, t) {
        for (let r of t) {
          let t = null !== e ? `${r}-${e}` : r;
          if (!this.values.has(t)) {
            if (null === e || !e.includes(".")) continue;
            if (((t = `${r}-${e.replaceAll(".", "_")}`), !this.values.has(t)))
              continue;
          }
          if (!l(t, r)) return t;
        }
        return null;
      }
      #r(e) {
        let t = this.values.get(e);
        if (!t) return null;
        let r = null;
        return (
          2 & t.options && (r = t.value),
          `var(${o(this.prefixKey(e))}${r ? `, ${r}` : ""})`
        );
      }
      markUsedVariable(e) {
        let t = a(this.#e(e)),
          r = this.values.get(t);
        if (!r) return !1;
        let n = 16 & r.options;
        return (r.options |= 16), !n;
      }
      resolve(e, t, r = 0) {
        let n = this.#t(e, t);
        if (!n) return null;
        let o = this.values.get(n);
        return 1 & (r | o.options) ? o.value : this.#r(n);
      }
      resolveValue(e, t) {
        let r = this.#t(e, t);
        return r ? this.values.get(r).value : null;
      }
      resolveWith(e, t, r = []) {
        let n = this.#t(e, t);
        if (!n) return null;
        let o = {};
        for (let e of r) {
          let t = `${n}${e}`,
            r = this.values.get(t);
          r && (1 & r.options ? (o[e] = r.value) : (o[e] = this.#r(t)));
        }
        let a = this.values.get(n);
        return 1 & a.options ? [a.value, o] : [this.#r(n), o];
      }
      namespace(e) {
        let t = new Map(),
          r = `${e}-`;
        for (let [n, o] of this.values)
          n === e
            ? t.set(null, o.value)
            : n.startsWith(`${r}-`)
              ? t.set(n.slice(e.length), o.value)
              : n.startsWith(r) && t.set(n.slice(r.length), o.value);
        return t;
      }
      addKeyframes(e) {
        this.keyframes.add(e);
      }
      getKeyframes() {
        return Array.from(this.keyframes);
      }
    },
    c = class extends Map {
      constructor(e) {
        super(), (this.factory = e);
      }
      get(e) {
        let t = super.get(e);
        return void 0 === t && ((t = this.factory(e, this)), this.set(e, t)), t;
      }
    };
  function u(e) {
    return { kind: "word", value: e };
  }
  function d(e, t) {
    return { kind: "function", value: e, nodes: t };
  }
  function f(e) {
    return { kind: "separator", value: e };
  }
  function p(e, t, r = null) {
    for (let n = 0; n < e.length; n++) {
      let o = e[n],
        a = !1,
        i = 0,
        l =
          t(o, {
            parent: r,
            replaceWith(t) {
              a ||
                ((a = !0),
                Array.isArray(t)
                  ? 0 === t.length
                    ? (e.splice(n, 1), (i = 0))
                    : 1 === t.length
                      ? ((e[n] = t[0]), (i = 1))
                      : (e.splice(n, 1, ...t), (i = t.length))
                  : (e[n] = t));
            },
          }) ?? 0;
      if (a) 0 === l ? n-- : (n += i - 1);
      else {
        if (2 === l) return 2;
        if (1 !== l && "function" === o.kind && 2 === p(o.nodes, t, o))
          return 2;
      }
    }
  }
  function h(e) {
    let t = "";
    for (let r of e)
      switch (r.kind) {
        case "word":
        case "separator":
          t += r.value;
          break;
        case "function":
          t += r.value + "(" + h(r.nodes) + ")";
      }
    return t;
  }
  function m(e) {
    e = e.replaceAll("\r\n", "\n");
    let t,
      r = [],
      n = [],
      o = null,
      a = "";
    for (let i = 0; i < e.length; i++) {
      let l = e.charCodeAt(i);
      switch (l) {
        case 92:
          (a += e[i] + e[i + 1]), i++;
          break;
        case 58:
        case 44:
        case 61:
        case 62:
        case 60:
        case 10:
        case 47:
        case 32:
        case 9: {
          if (a.length > 0) {
            let e = u(a);
            o ? o.nodes.push(e) : r.push(e), (a = "");
          }
          let n = i,
            l = i + 1;
          for (
            ;
            l < e.length &&
            ((t = e.charCodeAt(l)),
            58 === t ||
              44 === t ||
              61 === t ||
              62 === t ||
              60 === t ||
              10 === t ||
              47 === t ||
              32 === t ||
              9 === t);
            l++
          );
          i = l - 1;
          let s = f(e.slice(n, l));
          o ? o.nodes.push(s) : r.push(s);
          break;
        }
        case 39:
        case 34: {
          let r = i;
          for (let r = i + 1; r < e.length; r++)
            if (((t = e.charCodeAt(r)), 92 === t)) r += 1;
            else if (t === l) {
              i = r;
              break;
            }
          a += e.slice(r, i + 1);
          break;
        }
        case 40: {
          let e = d(a, []);
          (a = ""), o ? o.nodes.push(e) : r.push(e), n.push(e), (o = e);
          break;
        }
        case 41: {
          let e = n.pop();
          if (a.length > 0) {
            let t = u(a);
            e.nodes.push(t), (a = "");
          }
          o = n.length > 0 ? n[n.length - 1] : null;
          break;
        }
        default:
          a += String.fromCharCode(l);
      }
    }
    return a.length > 0 && r.push(u(a)), r;
  }
  function g(e) {
    let t = [];
    return (
      p(m(e), (e) => {
        if ("function" === e.kind && "var" === e.value)
          return (
            p(e.nodes, (e) => {
              "word" !== e.kind ||
                "-" !== e.value[0] ||
                "-" !== e.value[1] ||
                t.push(e.value);
            }),
            1
          );
      }),
      t
    );
  }
  var v = 64;
  function w(e, t = []) {
    return { kind: "rule", selector: e, nodes: t };
  }
  function k(e, t = "", r = []) {
    return { kind: "at-rule", name: e, params: t, nodes: r };
  }
  function b(e, t = []) {
    return e.charCodeAt(0) === v ? r(e, t) : w(e, t);
  }
  function y(e, t, r = !1) {
    return { kind: "declaration", property: e, value: t, important: r };
  }
  function x(e) {
    return { kind: "comment", value: e };
  }
  function $(e, t) {
    return { kind: "context", context: e, nodes: t };
  }
  function z(e) {
    return { kind: "at-root", nodes: e };
  }
  function A(e, t, r = [], n = {}) {
    for (let o = 0; o < e.length; o++) {
      let a = e[o],
        i = r[r.length - 1] ?? null;
      if ("context" === a.kind) {
        if (2 === A(a.nodes, t, r, { ...n, ...a.context })) return 2;
        continue;
      }
      r.push(a);
      let l = !1,
        s = 0,
        c =
          t(a, {
            parent: i,
            context: n,
            path: r,
            replaceWith(t) {
              l ||
                ((l = !0),
                Array.isArray(t)
                  ? 0 === t.length
                    ? (e.splice(o, 1), (s = 0))
                    : 1 === t.length
                      ? ((e[o] = t[0]), (s = 1))
                      : (e.splice(o, 1, ...t), (s = t.length))
                  : ((e[o] = t), (s = 1)));
            },
          }) ?? 0;
      if ((r.pop(), l)) 0 === c ? o-- : (o += s - 1);
      else {
        if (2 === c) return 2;
        if (1 !== c && "nodes" in a) {
          r.push(a);
          let e = A(a.nodes, t, r, n);
          if ((r.pop(), 2 === e)) return 2;
        }
      }
    }
  }
  function T(e, t, r = [], n = {}) {
    for (let o = 0; o < e.length; o++) {
      let a = e[o],
        i = r[r.length - 1] ?? null;
      if ("rule" === a.kind || "at-rule" === a.kind)
        r.push(a), T(a.nodes, t, r, n), r.pop();
      else if ("context" === a.kind) {
        T(a.nodes, t, r, { ...n, ...a.context });
        continue;
      }
      r.push(a),
        t(a, {
          parent: i,
          context: n,
          path: r,
          replaceWith(t) {
            Array.isArray(t)
              ? 0 === t.length
                ? e.splice(o, 1)
                : 1 === t.length
                  ? (e[o] = t[0])
                  : e.splice(o, 1, ...t)
              : (e[o] = t),
              (o += t.length - 1);
          },
        }),
        r.pop();
    }
  }
  function j(e, t, r = 3) {
    let n = [],
      o = new Set(),
      a = new c(() => new Set()),
      i = new Set(),
      l = new Set(),
      s = [],
      u = [],
      d = new c(() => new Set());
    function f(e, c, v = {}, w = 0) {
      if ("declaration" === e.kind) {
        if (
          "--tw-sort" === e.property ||
          void 0 === e.value ||
          null === e.value
        )
          return;
        if (v.theme && "-" === e.property[0] && "-" === e.property[1]) {
          if ("initial" === e.value) return void (e.value = void 0);
          v.keyframes || a.get(c).add(e);
        }
        if (e.value.includes("var("))
          if (v.theme && "-" === e.property[0] && "-" === e.property[1])
            for (let t of g(e.value)) d.get(t).add(e.property);
          else t.trackUsedVariables(e.value);
        if ("animation" === e.property) for (let t of E(e.value)) l.add(t);
        if (2 & r && e.value.includes("color-mix(")) {
          let r = m(e.value),
            n = !1;
          if (
            (p(r, (e, { replaceWith: r }) => {
              if ("function" !== e.kind || "color-mix" !== e.value) return;
              let o = !1,
                a = !1;
              if (
                (p(e.nodes, (e, { replaceWith: r }) => {
                  if (
                    "word" == e.kind &&
                    "currentcolor" === e.value.toLowerCase()
                  )
                    return (a = !0), void (n = !0);
                  if ("function" !== e.kind || "var" !== e.value) return;
                  let i = e.nodes[0];
                  if (!i || "word" !== i.kind) return;
                  n = !0;
                  let l = t.theme.resolveValue(null, [i.value]);
                  l ? r({ kind: "word", value: l }) : (o = !0);
                }),
                o || a)
              ) {
                let t = e.nodes.findIndex(
                  (e) => "separator" === e.kind && e.value.trim().includes(","),
                );
                if (-1 === t) return;
                let n = e.nodes.length > t ? e.nodes[t + 1] : null;
                if (!n) return;
                r(n);
              } else if (n) {
                let t = e.nodes[2];
                "word" === t.kind &&
                  ("oklab" === t.value ||
                    "oklch" === t.value ||
                    "lab" === t.value ||
                    "lch" === t.value) &&
                  (t.value = "srgb");
              }
            }),
            n)
          ) {
            let t = { ...e, value: h(r) },
              n = b("@supports (color: color-mix(in lab, red, red))", [e]);
            return void c.push(t, n);
          }
        }
        c.push(e);
      } else if ("rule" === e.kind)
        if ("&" === e.selector)
          for (let t of e.nodes) {
            let e = [];
            f(t, e, v, w + 1), e.length > 0 && c.push(...e);
          }
        else {
          let t = { ...e, nodes: [] };
          for (let r of e.nodes) f(r, t.nodes, v, w + 1);
          t.nodes.length > 0 && c.push(t);
        }
      else if ("at-rule" === e.kind && "@property" === e.name && 0 === w) {
        if (o.has(e.params)) return;
        if (1 & r) {
          let t = e.params,
            r = null,
            n = !1;
          for (let t of e.nodes)
            "declaration" === t.kind &&
              ("initial-value" === t.property
                ? (r = t.value)
                : "inherits" === t.property && (n = "true" === t.value));
          n ? s.push(y(t, r ?? "initial")) : u.push(y(t, r ?? "initial"));
        }
        o.add(e.params);
        let t = { ...e, nodes: [] };
        for (let r of e.nodes) f(r, t.nodes, v, w + 1);
        c.push(t);
      } else if ("at-rule" === e.kind) {
        "@keyframes" === e.name && (v = { ...v, keyframes: !0 });
        let t = { ...e, nodes: [] };
        for (let r of e.nodes) f(r, t.nodes, v, w + 1);
        "@keyframes" === e.name && v.theme && i.add(t),
          (t.nodes.length > 0 ||
            "@layer" === t.name ||
            "@charset" === t.name ||
            "@custom-media" === t.name ||
            "@namespace" === t.name ||
            "@import" === t.name) &&
            c.push(t);
      } else if ("at-root" === e.kind)
        for (let t of e.nodes) {
          let e = [];
          f(t, e, v, 0);
          for (let t of e) n.push(t);
        }
      else if ("context" === e.kind) {
        if (e.context.reference) return;
        for (let t of e.nodes) f(t, c, { ...v, ...e.context }, w);
      } else "comment" === e.kind && c.push(e);
    }
    let v = [];
    for (let t of e) f(t, v, {}, 0);
    e: for (let [e, r] of a)
      for (let n of r) {
        if (K(n.property, t.theme, d)) {
          if (n.property.startsWith(t.theme.prefixKey("--animate-")))
            for (let e of E(n.value)) l.add(e);
          continue;
        }
        let r = e.indexOf(n);
        if ((e.splice(r, 1), 0 === e.length)) {
          let t = S(v, (t) => "rule" === t.kind && t.nodes === e);
          if (!t || 0 === t.length) continue e;
          for (t.unshift({ kind: "at-root", nodes: v }); ; ) {
            let e = t.pop();
            if (!e) break;
            let r = t[t.length - 1];
            if (!r || ("at-root" !== r.kind && "at-rule" !== r.kind)) break;
            let n = r.nodes.indexOf(e);
            if (-1 === n) break;
            r.nodes.splice(n, 1);
          }
          continue e;
        }
      }
    for (let e of i)
      if (!l.has(e.params)) {
        let t = n.indexOf(e);
        n.splice(t, 1);
      }
    if (((v = v.concat(n)), 1 & r)) {
      let e = [];
      if (
        (s.length > 0 && e.push(b(":root, :host", s)),
        u.length > 0 && e.push(b("*, ::before, ::after, ::backdrop", u)),
        e.length > 0)
      ) {
        let t = v.findIndex(
          (e) =>
            !(
              "comment" === e.kind ||
              ("at-rule" === e.kind &&
                ("@charset" === e.name || "@import" === e.name))
            ),
        );
        v.splice(t < 0 ? v.length : t, 0, k("@layer", "properties", [])),
          v.push(
            b("@layer properties", [
              k(
                "@supports",
                "((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b))))",
                e,
              ),
            ]),
          );
      }
    }
    return v;
  }
  function C(e) {
    function t(e, r = 0) {
      let n = "",
        o = "  ".repeat(r);
      if ("declaration" === e.kind)
        n += `${o}${e.property}: ${e.value}${e.important ? " !important" : ""};\n`;
      else if ("rule" === e.kind) {
        n += `${o}${e.selector} {\n`;
        for (let o of e.nodes) n += t(o, r + 1);
        n += `${o}}\n`;
      } else if ("at-rule" === e.kind) {
        if (0 === e.nodes.length) return `${o}${e.name} ${e.params};\n`;
        n += `${o}${e.name}${e.params ? ` ${e.params} ` : " "}{\n`;
        for (let o of e.nodes) n += t(o, r + 1);
        n += `${o}}\n`;
      } else if ("comment" === e.kind) n += `${o}/*${e.value}*/\n`;
      else if ("context" === e.kind || "at-root" === e.kind) return "";
      return n;
    }
    let r = "";
    for (let n of e) {
      let e = t(n);
      "" !== e && (r += e);
    }
    return r;
  }
  function S(e, t) {
    let r = [];
    return (
      A(e, (e, { path: n }) => {
        if (t(e)) return (r = [...n]), 2;
      }),
      r
    );
  }
  function K(e, t, r, n = new Set()) {
    if (n.has(e) || (n.add(e), 24 & t.getOptions(e))) return !0;
    {
      let o = r.get(e) ?? [];
      for (let e of o) if (K(e, t, r, n)) return !0;
    }
    return !1;
  }
  function E(e) {
    return e.split(/[\s,]+/);
  }
  var V = [
      "calc",
      "min",
      "max",
      "clamp",
      "mod",
      "rem",
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "atan2",
      "pow",
      "sqrt",
      "hypot",
      "log",
      "exp",
      "round",
    ],
    N = ["anchor-size"],
    O = new RegExp(`(${N.join("|")})\\(`, "g");
  function F(e) {
    return -1 !== e.indexOf("(") && V.some((t) => e.includes(`${t}(`));
  }
  function W(e) {
    if (-1 === e.indexOf("(")) return U(e);
    let t = m(e);
    return (
      D(t),
      (e = (function (e) {
        if (!V.some((t) => e.includes(t))) return e;
        let t = !1;
        N.some((t) => e.includes(t)) &&
          ((O.lastIndex = 0),
          (e = e.replace(O, (e, r) => ((t = !0), `$${N.indexOf(r)}$(`))));
        let r = "",
          n = [];
        for (let t = 0; t < e.length; t++) {
          let o = e[t];
          if ("(" !== o)
            if (")" === o) (r += o), n.shift();
            else {
              if ("," === o && n[0]) {
                r += ", ";
                continue;
              }
              if (" " === o && n[0] && " " === r[r.length - 1]) continue;
              if (("+" !== o && "*" !== o && "/" !== o && "-" !== o) || !n[0])
                if (n[0] && e.startsWith("to-zero", t)) {
                  let n = t;
                  (t += 7), (r += e.slice(n, t + 1));
                } else r += o;
              else {
                let n = r.trimEnd(),
                  a = n[n.length - 1];
                if ("+" === a || "*" === a || "/" === a || "-" === a) {
                  r += o;
                  continue;
                }
                if ("(" === a || "," === a) {
                  r += o;
                  continue;
                }
                " " === e[t - 1] ? (r += `${o} `) : (r += ` ${o} `);
              }
            }
          else {
            r += o;
            let a = t;
            for (let r = t - 1; r >= 0; r--) {
              let t = e.charCodeAt(r);
              if (t >= 48 && t <= 57) a = r;
              else {
                if (!(t >= 97 && t <= 122)) break;
                a = r;
              }
            }
            let i = e.slice(a, t);
            if (V.includes(i)) {
              n.unshift(!0);
              continue;
            }
            if (n[0] && "" === i) {
              n.unshift(!0);
              continue;
            }
            n.unshift(!1);
          }
        }
        return t ? r.replace(/\$(\d+)\$/g, (e, t) => N[t] ?? e) : r;
      })((e = h(t)))),
      e
    );
  }
  function U(e, t = !1) {
    let r = "";
    for (let n = 0; n < e.length; n++) {
      let o = e[n];
      "\\" === o && "_" === e[n + 1]
        ? ((r += "_"), (n += 1))
        : (r += "_" !== o || t ? o : " ");
    }
    return r;
  }
  function D(e) {
    for (let t of e)
      switch (t.kind) {
        case "function":
          if ("url" === t.value || t.value.endsWith("_url")) {
            t.value = U(t.value);
            break;
          }
          if (
            "var" === t.value ||
            t.value.endsWith("_var") ||
            "theme" === t.value ||
            t.value.endsWith("_theme")
          ) {
            t.value = U(t.value);
            for (let e = 0; e < t.nodes.length; e++)
              0 != e || "word" !== t.nodes[e].kind
                ? D([t.nodes[e]])
                : (t.nodes[e].value = U(t.nodes[e].value, !0));
            break;
          }
          (t.value = U(t.value)), D(t.nodes);
          break;
        case "separator":
        case "word":
          t.value = U(t.value);
          break;
        default:
          B(t);
      }
  }
  function B(e) {
    throw new Error(`Unexpected value: ${e}`);
  }
  var _ = new Uint8Array(256);
  function L(e) {
    let t = 0,
      r = e.length;
    for (let n = 0; n < r; n++) {
      let o = e.charCodeAt(n);
      switch (o) {
        case 92:
          n += 1;
          break;
        case 39:
        case 34:
          for (; ++n < r; ) {
            let t = e.charCodeAt(n);
            if (92 !== t) {
              if (t === o) break;
            } else n += 1;
          }
          break;
        case 40:
          (_[t] = 41), t++;
          break;
        case 91:
          (_[t] = 93), t++;
          break;
        case 123:
          break;
        case 93:
        case 125:
        case 41:
          if (0 === t) return !1;
          t > 0 && o === _[t - 1] && t--;
          break;
        case 59:
          if (0 === t) return !1;
      }
    }
    return !0;
  }
  var M = new Uint8Array(256);
  function R(e, t) {
    let r = 0,
      n = [],
      o = 0,
      a = e.length,
      i = t.charCodeAt(0);
    for (let t = 0; t < a; t++) {
      let l = e.charCodeAt(t);
      if (0 !== r || l !== i)
        switch (l) {
          case 92:
            t += 1;
            break;
          case 39:
          case 34:
            for (; ++t < a; ) {
              let r = e.charCodeAt(t);
              if (92 !== r) {
                if (r === l) break;
              } else t += 1;
            }
            break;
          case 40:
            (M[r] = 41), r++;
            break;
          case 91:
            (M[r] = 93), r++;
            break;
          case 123:
            (M[r] = 125), r++;
            break;
          case 93:
          case 125:
          case 41:
            r > 0 && l === M[r - 1] && r--;
        }
      else n.push(e.slice(o, t)), (o = t + 1);
    }
    return n.push(e.slice(o)), n;
  }
  function I(e) {
    if ("[" === e[0] && "]" === e[e.length - 1]) {
      let t = W(e.slice(1, -1));
      return L(t) && 0 !== t.length && 0 !== t.trim().length
        ? { kind: "arbitrary", value: t }
        : null;
    }
    if ("(" === e[0] && ")" === e[e.length - 1]) {
      let t = W(e.slice(1, -1));
      return !L(t) ||
        0 === t.length ||
        0 === t.trim().length ||
        ("-" !== t[0] && "-" !== t[1])
        ? null
        : { kind: "arbitrary", value: `var(${t})` };
    }
    return { kind: "named", value: e };
  }
  function* q(e, t) {
    t(e) && (yield [e, null]);
    let r = e.lastIndexOf("-");
    if (-1 !== r)
      do {
        let n = e.slice(0, r);
        if (t(n)) {
          let t = [n, e.slice(r + 1)];
          if ("" === t[1]) break;
          yield t;
        }
        r = e.lastIndexOf("-", r - 1);
      } while (r > 0);
    else "@" === e[0] && t("@") && (yield ["@", e.slice(1)]);
  }
  function P(e, t, r) {
    if (e === t) return 0;
    let n = e.indexOf("("),
      o = t.indexOf("("),
      a = -1 === n ? e.replace(/[\d.]+/g, "") : e.slice(0, n),
      i = -1 === o ? t.replace(/[\d.]+/g, "") : t.slice(0, o),
      l =
        (a === i ? 0 : a < i ? -1 : 1) ||
        ("asc" === r ? parseInt(e) - parseInt(t) : parseInt(t) - parseInt(e));
    return Number.isNaN(l) ? (e < t ? -1 : 1) : l;
  }
  var H = new Set([
      "black",
      "silver",
      "gray",
      "white",
      "maroon",
      "red",
      "purple",
      "fuchsia",
      "green",
      "lime",
      "olive",
      "yellow",
      "navy",
      "blue",
      "teal",
      "aqua",
      "aliceblue",
      "antiquewhite",
      "aqua",
      "aquamarine",
      "azure",
      "beige",
      "bisque",
      "black",
      "blanchedalmond",
      "blue",
      "blueviolet",
      "brown",
      "burlywood",
      "cadetblue",
      "chartreuse",
      "chocolate",
      "coral",
      "cornflowerblue",
      "cornsilk",
      "crimson",
      "cyan",
      "darkblue",
      "darkcyan",
      "darkgoldenrod",
      "darkgray",
      "darkgreen",
      "darkgrey",
      "darkkhaki",
      "darkmagenta",
      "darkolivegreen",
      "darkorange",
      "darkorchid",
      "darkred",
      "darksalmon",
      "darkseagreen",
      "darkslateblue",
      "darkslategray",
      "darkslategrey",
      "darkturquoise",
      "darkviolet",
      "deeppink",
      "deepskyblue",
      "dimgray",
      "dimgrey",
      "dodgerblue",
      "firebrick",
      "floralwhite",
      "forestgreen",
      "fuchsia",
      "gainsboro",
      "ghostwhite",
      "gold",
      "goldenrod",
      "gray",
      "green",
      "greenyellow",
      "grey",
      "honeydew",
      "hotpink",
      "indianred",
      "indigo",
      "ivory",
      "khaki",
      "lavender",
      "lavenderblush",
      "lawngreen",
      "lemonchiffon",
      "lightblue",
      "lightcoral",
      "lightcyan",
      "lightgoldenrodyellow",
      "lightgray",
      "lightgreen",
      "lightgrey",
      "lightpink",
      "lightsalmon",
      "lightseagreen",
      "lightskyblue",
      "lightslategray",
      "lightslategrey",
      "lightsteelblue",
      "lightyellow",
      "lime",
      "limegreen",
      "linen",
      "magenta",
      "maroon",
      "mediumaquamarine",
      "mediumblue",
      "mediumorchid",
      "mediumpurple",
      "mediumseagreen",
      "mediumslateblue",
      "mediumspringgreen",
      "mediumturquoise",
      "mediumvioletred",
      "midnightblue",
      "mintcream",
      "mistyrose",
      "moccasin",
      "navajowhite",
      "navy",
      "oldlace",
      "olive",
      "olivedrab",
      "orange",
      "orangered",
      "orchid",
      "palegoldenrod",
      "palegreen",
      "paleturquoise",
      "palevioletred",
      "papayawhip",
      "peachpuff",
      "peru",
      "pink",
      "plum",
      "powderblue",
      "purple",
      "rebeccapurple",
      "red",
      "rosybrown",
      "royalblue",
      "saddlebrown",
      "salmon",
      "sandybrown",
      "seagreen",
      "seashell",
      "sienna",
      "silver",
      "skyblue",
      "slateblue",
      "slategray",
      "slategrey",
      "snow",
      "springgreen",
      "steelblue",
      "tan",
      "teal",
      "thistle",
      "tomato",
      "turquoise",
      "violet",
      "wheat",
      "white",
      "whitesmoke",
      "yellow",
      "yellowgreen",
      "transparent",
      "currentcolor",
      "canvas",
      "canvastext",
      "linktext",
      "visitedtext",
      "activetext",
      "buttonface",
      "buttontext",
      "buttonborder",
      "field",
      "fieldtext",
      "highlight",
      "highlighttext",
      "selecteditem",
      "selecteditemtext",
      "mark",
      "marktext",
      "graytext",
      "accentcolor",
      "accentcolortext",
    ]),
    Y = /^(rgba?|hsla?|hwb|color|(ok)?(lab|lch)|light-dark|color-mix)\(/i;
  var Z = {
    color: function (e) {
      return 35 === e.charCodeAt(0) || Y.test(e) || H.has(e.toLowerCase());
    },
    length: se,
    percentage: ae,
    ratio: function (e) {
      return ie.test(e) || F(e);
    },
    number: ne,
    integer: de,
    url: J,
    position: function (e) {
      let t = 0;
      for (let r of R(e, " "))
        if (
          "center" !== r &&
          "top" !== r &&
          "right" !== r &&
          "bottom" !== r &&
          "left" !== r
        ) {
          if (!r.startsWith("var(")) {
            if (se(r) || ae(r)) {
              t += 1;
              continue;
            }
            return !1;
          }
        } else t += 1;
      return t > 0;
    },
    "bg-size": function (e) {
      let t = 0;
      for (let r of R(e, ",")) {
        if ("cover" === r || "contain" === r) {
          t += 1;
          continue;
        }
        let e = R(r, " ");
        if (1 !== e.length && 2 !== e.length) return !1;
        e.every((e) => "auto" === e || se(e) || ae(e)) && (t += 1);
      }
      return t > 0;
    },
    "line-width": function (e) {
      return R(e, " ").every(
        (e) =>
          se(e) || ne(e) || "thin" === e || "medium" === e || "thick" === e,
      );
    },
    image: function (e) {
      let t = 0;
      for (let r of R(e, ","))
        if (!r.startsWith("var(")) {
          if (J(r)) {
            t += 1;
            continue;
          }
          if (ee.test(r)) {
            t += 1;
            continue;
          }
          if (Q.test(r)) {
            t += 1;
            continue;
          }
          return !1;
        }
      return t > 0;
    },
    "family-name": function (e) {
      let t = 0;
      for (let r of R(e, ",")) {
        let e = r.charCodeAt(0);
        if (e >= 48 && e <= 57) return !1;
        r.startsWith("var(") || (t += 1);
      }
      return t > 0;
    },
    "generic-name": function (e) {
      return (
        "serif" === e ||
        "sans-serif" === e ||
        "monospace" === e ||
        "cursive" === e ||
        "fantasy" === e ||
        "system-ui" === e ||
        "ui-serif" === e ||
        "ui-sans-serif" === e ||
        "ui-monospace" === e ||
        "ui-rounded" === e ||
        "math" === e ||
        "emoji" === e ||
        "fangsong" === e
      );
    },
    "absolute-size": function (e) {
      return (
        "xx-small" === e ||
        "x-small" === e ||
        "small" === e ||
        "medium" === e ||
        "large" === e ||
        "x-large" === e ||
        "xx-large" === e ||
        "xxx-large" === e
      );
    },
    "relative-size": function (e) {
      return "larger" === e || "smaller" === e;
    },
    angle: function (e) {
      return ce.test(e);
    },
    vector: function (e) {
      return ue.test(e);
    },
  };
  function G(e, t) {
    if (e.startsWith("var(")) return null;
    for (let r of t) if (Z[r]?.(e)) return r;
    return null;
  }
  var X = /^url\(.*\)$/;
  function J(e) {
    return X.test(e);
  }
  var Q = /^(?:element|image|cross-fade|image-set)\(/,
    ee = /^(repeating-)?(conic|linear|radial)-gradient\(/;
  var te = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/,
    re = new RegExp(`^${te.source}$`);
  function ne(e) {
    return re.test(e) || F(e);
  }
  var oe = new RegExp(`^${te.source}%$`);
  function ae(e) {
    return oe.test(e) || F(e);
  }
  var ie = new RegExp(`^${te.source}s*/s*${te.source}$`);
  var le = new RegExp(
    `^${te.source}(${["cm", "mm", "Q", "in", "pc", "pt", "px", "em", "ex", "ch", "rem", "lh", "rlh", "vw", "vh", "vmin", "vmax", "vb", "vi", "svw", "svh", "lvw", "lvh", "dvw", "dvh", "cqw", "cqh", "cqi", "cqb", "cqmin", "cqmax"].join("|")})$`,
  );
  function se(e) {
    return le.test(e) || F(e);
  }
  var ce = new RegExp(
    `^${te.source}(${["deg", "rad", "grad", "turn"].join("|")})$`,
  );
  var ue = new RegExp(`^${te.source} +${te.source} +${te.source}$`);
  function de(e) {
    let t = Number(e);
    return Number.isInteger(t) && t >= 0 && String(t) === String(e);
  }
  function fe(e) {
    let t = Number(e);
    return Number.isInteger(t) && t > 0 && String(t) === String(e);
  }
  function pe(e) {
    return me(e, 0.25);
  }
  function he(e) {
    return me(e, 0.25);
  }
  function me(e, t) {
    let r = Number(e);
    return r >= 0 && r % t == 0 && String(r) === String(e);
  }
  var ge = new Set(["inset", "inherit", "initial", "revert", "unset"]),
    ve = /^-?(\d+|\.\d+)(.*?)$/g;
  function we(e, t) {
    return R(e, ",")
      .map((e) => {
        let r = R((e = e.trim()), " ").filter((e) => "" !== e.trim()),
          n = null,
          o = null,
          a = null;
        for (let e of r)
          ge.has(e) ||
            (ve.test(e)
              ? (null === o ? (o = e) : null === a && (a = e),
                (ve.lastIndex = 0))
              : null === n && (n = e));
        if (null === o || null === a) return e;
        let i = t(n ?? "currentcolor");
        return null !== n ? e.replace(n, i) : `${e} ${i}`;
      })
      .join(", ");
  }
  var ke = /^-?[a-z][a-zA-Z0-9/%._-]*$/,
    be = /^-?[a-z][a-zA-Z0-9/%._-]*-\*$/,
    ye = [
      "0",
      "0.5",
      "1",
      "1.5",
      "2",
      "2.5",
      "3",
      "3.5",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "14",
      "16",
      "20",
      "24",
      "28",
      "32",
      "36",
      "40",
      "44",
      "48",
      "52",
      "56",
      "60",
      "64",
      "72",
      "80",
      "96",
    ],
    xe = class {
      utilities = new c(() => []);
      completions = new Map();
      static(e, t) {
        this.utilities.get(e).push({ kind: "static", compileFn: t });
      }
      functional(e, t, r) {
        this.utilities
          .get(e)
          .push({ kind: "functional", compileFn: t, options: r });
      }
      has(e, t) {
        return (
          this.utilities.has(e) &&
          this.utilities.get(e).some((e) => e.kind === t)
        );
      }
      get(e) {
        return this.utilities.has(e) ? this.utilities.get(e) : [];
      }
      getCompletions(e) {
        return this.completions.get(e)?.() ?? [];
      }
      suggest(e, t) {
        this.completions.set(e, t);
      }
      keys(e) {
        let t = [];
        for (let [r, n] of this.utilities.entries())
          for (let o of n)
            if (o.kind === e) {
              t.push(r);
              break;
            }
        return t;
      }
    };
  function $e(e, t, r) {
    return k("@property", e, [
      y("syntax", r ? `"${r}"` : '"*"'),
      y("inherits", "false"),
      ...(t ? [y("initial-value", t)] : []),
    ]);
  }
  function ze(e, t) {
    if (null === t) return e;
    let r = Number(t);
    return (
      Number.isNaN(r) || (t = 100 * r + "%"),
      `color-mix(in oklab, ${e} ${t}, transparent)`
    );
  }
  function Ae(e, t) {
    let r = Number(t);
    return (
      Number.isNaN(r) || (t = 100 * r + "%"), `oklab(from ${e} l a b / ${t})`
    );
  }
  function Te(e, t, r) {
    if (!t) return e;
    if ("arbitrary" === t.kind) return ze(e, t.value);
    let n = r.resolve(t.value, ["--opacity"]);
    return n ? ze(e, n) : he(t.value) ? ze(e, `${t.value}%`) : null;
  }
  function je(e, t, r) {
    let n = null;
    switch (e.value.value) {
      case "inherit":
        n = "inherit";
        break;
      case "transparent":
        n = "transparent";
        break;
      case "current":
        n = "currentcolor";
        break;
      default:
        n = t.resolve(e.value.value, r);
    }
    return n ? Te(n, e.modifier, t) : null;
  }
  function Ce(e, t, r) {
    for (let n of t.nodes) {
      if (
        "named" === e.kind &&
        "word" === n.kind &&
        ("'" === n.value[0] || '"' === n.value[0]) &&
        n.value[n.value.length - 1] === n.value[0] &&
        n.value.slice(1, -1) === e.value
      )
        return { nodes: m(e.value) };
      if (
        "named" === e.kind &&
        "word" === n.kind &&
        "-" === n.value[0] &&
        "-" === n.value[1]
      ) {
        let t = n.value;
        if (t.endsWith("-*")) {
          t = t.slice(0, -2);
          let n = r.theme.resolve(e.value, [t]);
          if (n) return { nodes: m(n) };
        } else {
          let n = t.split("-*");
          if (n.length <= 1) continue;
          let o = [n.shift()],
            a = r.theme.resolveWith(e.value, o, n);
          if (a) {
            let [, e = {}] = a;
            {
              let t = e[n.pop()];
              if (t) return { nodes: m(t) };
            }
          }
        }
      } else {
        if ("named" === e.kind && "word" === n.kind) {
          if (
            "number" !== n.value &&
            "integer" !== n.value &&
            "ratio" !== n.value &&
            "percentage" !== n.value
          )
            continue;
          let t = "ratio" === n.value && "fraction" in e ? e.fraction : e.value;
          if (!t) continue;
          let r = G(t, [n.value]);
          if (null === r) continue;
          if ("ratio" === r) {
            let [e, r] = R(t, "/");
            if (!de(e) || !de(r)) continue;
          } else {
            if ("number" === r && !pe(t)) continue;
            if ("percentage" === r && !de(t.slice(0, -1))) continue;
          }
          return { nodes: m(t), ratio: "ratio" === r };
        }
        if (
          "arbitrary" === e.kind &&
          "word" === n.kind &&
          "[" === n.value[0] &&
          "]" === n.value[n.value.length - 1]
        ) {
          let t = n.value.slice(1, -1);
          if ("*" === t) return { nodes: m(e.value) };
          if ("dataType" in e && e.dataType && e.dataType !== t) continue;
          if ("dataType" in e && e.dataType) return { nodes: m(e.value) };
          if (null !== G(e.value, [t])) return { nodes: m(e.value) };
        }
      }
    }
  }
  function Se(e, t, r, n, o = "") {
    let a = !1,
      i = we(t, (e) =>
        null == r
          ? n(e)
          : e.startsWith("current")
            ? n(ze(e, r))
            : ((e.startsWith("var(") || r.startsWith("var(")) && (a = !0),
              n(Ae(e, r))),
      );
    function l(e) {
      return o
        ? R(e, ",")
            .map((e) => o + e)
            .join(",")
        : e;
    }
    return a
      ? [
          y(e, l(we(t, n))),
          b("@supports (color: lab(from red l a b))", [y(e, l(i))]),
        ]
      : [y(e, l(i))];
  }
  function Ke(e, t, r, n, o = "") {
    let a = !1,
      i = R(t, ",")
        .map((e) =>
          we(e, (e) =>
            null == r
              ? n(e)
              : e.startsWith("current")
                ? n(ze(e, r))
                : ((e.startsWith("var(") || r.startsWith("var(")) && (a = !0),
                  n(Ae(e, r))),
          ),
        )
        .map((e) => `drop-shadow(${e})`)
        .join(" ");
    return a
      ? [
          y(
            e,
            o +
              R(t, ",")
                .map((e) => `drop-shadow(${we(e, n)})`)
                .join(" "),
          ),
          b("@supports (color: lab(from red l a b))", [y(e, o + i)]),
        ]
      : [y(e, o + i)];
  }
  var Ee = {
    "--alpha": function (e, t, r, ...n) {
      let [o, a] = R(r, "/").map((e) => e.trim());
      if (!o || !a)
        throw new Error(
          `The --alpha(…) function requires a color and an alpha value, e.g.: \`--alpha(${o || "var(--my-color)"} / ${a || "50%"})\``,
        );
      if (n.length > 0)
        throw new Error(
          `The --alpha(…) function only accepts one argument, e.g.: \`--alpha(${o || "var(--my-color)"} / ${a || "50%"})\``,
        );
      return ze(o, a);
    },
    "--spacing": function (e, t, r, ...n) {
      if (!r)
        throw new Error(
          "The --spacing(…) function requires an argument, but received none.",
        );
      if (n.length > 0)
        throw new Error(
          `The --spacing(…) function only accepts a single argument, but received ${n.length + 1}.`,
        );
      let o = e.theme.resolve(null, ["--spacing"]);
      if (!o)
        throw new Error(
          "The --spacing(…) function requires that the `--spacing` theme variable exists, but it was not found.",
        );
      return `calc(${o} * ${r})`;
    },
    "--theme": function (e, t, r, ...n) {
      if (!r.startsWith("--"))
        throw new Error(
          "The --theme(…) function can only be used with CSS variables from your theme.",
        );
      let o = !1;
      r.endsWith(" inline") && ((o = !0), (r = r.slice(0, -7))),
        "at-rule" === t.kind && (o = !0);
      let a = e.resolveThemeValue(r, o);
      if (!a) {
        if (n.length > 0) return n.join(", ");
        throw new Error(
          `Could not resolve value for theme function: \`theme(${r})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`,
        );
      }
      if (0 === n.length) return a;
      let i = n.join(", ");
      if ("initial" === i) return a;
      if ("initial" === a) return i;
      if (
        a.startsWith("var(") ||
        a.startsWith("theme(") ||
        a.startsWith("--theme(")
      ) {
        let e = m(a);
        return (
          (function (e, t) {
            p(e, (e) => {
              if (
                "function" === e.kind &&
                ("var" === e.value ||
                  "theme" === e.value ||
                  "--theme" === e.value)
              )
                if (1 === e.nodes.length)
                  e.nodes.push({ kind: "word", value: `, ${t}` });
                else {
                  let r = e.nodes[e.nodes.length - 1];
                  "word" === r.kind && "initial" === r.value && (r.value = t);
                }
            });
          })(e, i),
          h(e)
        );
      }
      return a;
    },
    theme: function (e, t, r, ...n) {
      r = (function (e) {
        if ("'" !== e[0] && '"' !== e[0]) return e;
        let t = "",
          r = e[0];
        for (let n = 1; n < e.length - 1; n++) {
          let o = e[n],
            a = e[n + 1];
          "\\" !== o || (a !== r && "\\" !== a) ? (t += o) : ((t += a), n++);
        }
        return t;
      })(r);
      let o = e.resolveThemeValue(r);
      if (!o && n.length > 0) return n.join(", ");
      if (!o)
        throw new Error(
          `Could not resolve value for theme function: \`theme(${r})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`,
        );
      return o;
    },
  };
  var Ve = new RegExp(
    Object.keys(Ee)
      .map((e) => `${e}\\(`)
      .join("|"),
  );
  function Ne(e, t) {
    let r = 0;
    return (
      A(e, (e) => {
        if ("declaration" === e.kind && e.value && Ve.test(e.value))
          return (r |= 8), void (e.value = Oe(e.value, e, t));
        "at-rule" === e.kind &&
          ("@media" === e.name ||
            "@custom-media" === e.name ||
            "@container" === e.name ||
            "@supports" === e.name) &&
          Ve.test(e.params) &&
          ((r |= 8), (e.params = Oe(e.params, e, t)));
      }),
      r
    );
  }
  function Oe(e, t, r) {
    let n = m(e);
    return (
      p(n, (e, { replaceWith: n }) => {
        if ("function" === e.kind && e.value in Ee) {
          let o = R(h(e.nodes).trim(), ",").map((e) => e.trim());
          return n(m(Ee[e.value](r, t, ...o)));
        }
      }),
      h(n)
    );
  }
  function Fe(e, t) {
    let r = e.length,
      n = t.length,
      o = r < n ? r : n;
    for (let r = 0; r < o; r++) {
      let n = e.charCodeAt(r),
        o = t.charCodeAt(r);
      if (n >= 48 && n <= 57 && o >= 48 && o <= 57) {
        let a = r,
          i = r + 1,
          l = r,
          s = r + 1;
        for (n = e.charCodeAt(i); n >= 48 && n <= 57; ) n = e.charCodeAt(++i);
        for (o = t.charCodeAt(s); o >= 48 && o <= 57; ) o = t.charCodeAt(++s);
        let c = e.slice(a, i),
          u = t.slice(l, s),
          d = Number(c) - Number(u);
        if (d) return d;
        if (c < u) return -1;
        if (c > u) return 1;
      } else if (n !== o) return n - o;
    }
    return e.length - t.length;
  }
  var We = /^\d+\/\d+$/;
  function Ue(e) {
    let t = [];
    for (let r of e.utilities.keys("static"))
      t.push({ name: r, utility: r, fraction: !1, modifiers: [] });
    for (let r of e.utilities.keys("functional")) {
      let n = e.utilities.getCompletions(r);
      for (let e of n)
        for (let n of e.values) {
          let o = null !== n && We.test(n),
            a = null === n ? r : `${r}-${n}`;
          t.push({ name: a, utility: r, fraction: o, modifiers: e.modifiers }),
            e.supportsNegative &&
              t.push({
                name: `-${a}`,
                utility: `-${r}`,
                fraction: o,
                modifiers: e.modifiers,
              });
        }
    }
    return 0 === t.length
      ? []
      : (t.sort((e, t) => Fe(e.name, t.name)),
        (function (e) {
          let t = [],
            r = null,
            n = new Map(),
            o = new c(() => []);
          for (let a of e) {
            let { utility: e, fraction: i } = a;
            r || ((r = { utility: e, items: [] }), n.set(e, r)),
              e !== r.utility &&
                (t.push(r), (r = { utility: e, items: [] }), n.set(e, r)),
              i ? o.get(e).push(a) : r.items.push(a);
          }
          r && t[t.length - 1] !== r && t.push(r);
          for (let [e, t] of o) {
            let r = n.get(e);
            r && r.items.push(...t);
          }
          let a = [];
          for (let e of t)
            for (let t of e.items) a.push([t.name, { modifiers: t.modifiers }]);
          return a;
        })(t));
  }
  var De = /^@?[a-zA-Z0-9_-]*$/,
    Be = class {
      compareFns = new Map();
      variants = new Map();
      completions = new Map();
      groupOrder = null;
      lastOrder = 0;
      static(e, t, { compounds: r, order: n } = {}) {
        this.set(e, {
          kind: "static",
          applyFn: t,
          compoundsWith: 0,
          compounds: r ?? 2,
          order: n,
        });
      }
      fromAst(e, t) {
        let r = [];
        A(t, (e) => {
          "rule" === e.kind
            ? r.push(e.selector)
            : "at-rule" === e.kind &&
              "@slot" !== e.name &&
              r.push(`${e.name} ${e.params}`);
        }),
          this.static(
            e,
            (e) => {
              let r = structuredClone(t);
              Me(r, e.nodes), (e.nodes = r);
            },
            { compounds: _e(r) },
          );
      }
      functional(e, t, { compounds: r, order: n } = {}) {
        this.set(e, {
          kind: "functional",
          applyFn: t,
          compoundsWith: 0,
          compounds: r ?? 2,
          order: n,
        });
      }
      compound(e, t, r, { compounds: n, order: o } = {}) {
        this.set(e, {
          kind: "compound",
          applyFn: r,
          compoundsWith: t,
          compounds: n ?? 2,
          order: o,
        });
      }
      group(e, t) {
        (this.groupOrder = this.nextOrder()),
          t && this.compareFns.set(this.groupOrder, t),
          e(),
          (this.groupOrder = null);
      }
      has(e) {
        return this.variants.has(e);
      }
      get(e) {
        return this.variants.get(e);
      }
      kind(e) {
        return this.variants.get(e)?.kind;
      }
      compoundsWith(e, t) {
        let r = this.variants.get(e),
          n =
            "string" == typeof t
              ? this.variants.get(t)
              : "arbitrary" === t.kind
                ? { compounds: _e([t.selector]) }
                : this.variants.get(t.root);
        return !!(
          r &&
          n &&
          "compound" === r.kind &&
          0 !== n.compounds &&
          0 !== r.compoundsWith &&
          r.compoundsWith & n.compounds
        );
      }
      suggest(e, t) {
        this.completions.set(e, t);
      }
      getCompletions(e) {
        return this.completions.get(e)?.() ?? [];
      }
      compare(e, t) {
        if (e === t) return 0;
        if (null === e) return -1;
        if (null === t) return 1;
        if ("arbitrary" === e.kind && "arbitrary" === t.kind)
          return e.selector < t.selector ? -1 : 1;
        if ("arbitrary" === e.kind) return 1;
        if ("arbitrary" === t.kind) return -1;
        let r = this.variants.get(e.root).order,
          n = r - this.variants.get(t.root).order;
        if (0 !== n) return n;
        if ("compound" === e.kind && "compound" === t.kind) {
          let r = this.compare(e.variant, t.variant);
          return 0 !== r
            ? r
            : e.modifier && t.modifier
              ? e.modifier.value < t.modifier.value
                ? -1
                : 1
              : e.modifier
                ? 1
                : t.modifier
                  ? -1
                  : 0;
        }
        let o = this.compareFns.get(r);
        if (void 0 !== o) return o(e, t);
        if (e.root !== t.root) return e.root < t.root ? -1 : 1;
        let a = e.value,
          i = t.value;
        return null === a
          ? -1
          : null === i || ("arbitrary" === a.kind && "arbitrary" !== i.kind)
            ? 1
            : ("arbitrary" !== a.kind && "arbitrary" === i.kind) ||
                a.value < i.value
              ? -1
              : 1;
      }
      keys() {
        return this.variants.keys();
      }
      entries() {
        return this.variants.entries();
      }
      set(
        e,
        { kind: t, applyFn: r, compounds: n, compoundsWith: o, order: a },
      ) {
        let i = this.variants.get(e);
        i
          ? Object.assign(i, { kind: t, applyFn: r, compounds: n })
          : (void 0 === a &&
              ((this.lastOrder = this.nextOrder()), (a = this.lastOrder)),
            this.variants.set(e, {
              kind: t,
              applyFn: r,
              order: a,
              compoundsWith: o,
              compounds: n,
            }));
      }
      nextOrder() {
        return this.groupOrder ?? this.lastOrder + 1;
      }
    };
  function _e(e) {
    let t = 0;
    for (let r of e)
      if ("@" !== r[0]) {
        if (r.includes("::")) return 0;
        t |= 2;
      } else {
        if (
          !r.startsWith("@media") &&
          !r.startsWith("@supports") &&
          !r.startsWith("@container")
        )
          return 0;
        t |= 1;
      }
    return t;
  }
  function Le(e) {
    if (e.includes("=")) {
      let [t, ...r] = R(e, "="),
        n = r.join("=").trim();
      if ("'" === n[0] || '"' === n[0]) return e;
      if (n.length > 1) {
        let e = n[n.length - 1];
        if (
          " " === n[n.length - 2] &&
          ("i" === e || "I" === e || "s" === e || "S" === e)
        )
          return `${t}="${n.slice(0, -2)}" ${e}`;
      }
      return `${t}="${n}"`;
    }
    return e;
  }
  function Me(e, t) {
    A(e, (e, { replaceWith: r }) => {
      if ("at-rule" === e.kind && "@slot" === e.name) r(t);
      else if (
        "at-rule" === e.kind &&
        ("@keyframes" === e.name || "@property" === e.name)
      )
        return Object.assign(e, z([k(e.name, e.params, e.nodes)])), 1;
    });
  }
  function Re(e) {
    let t = (function (e) {
        let t = new xe();
        function r(r, n) {
          let o = /(\d+)_(\d+)/g;
          function* a(t) {
            for (let r of e.keysInNamespaces(t))
              yield r.replace(o, (e, t, r) => `${t}.${r}`);
          }
          let i = [
            "1/2",
            "1/3",
            "2/3",
            "1/4",
            "2/4",
            "3/4",
            "1/5",
            "2/5",
            "3/5",
            "4/5",
            "1/6",
            "2/6",
            "3/6",
            "4/6",
            "5/6",
            "1/12",
            "2/12",
            "3/12",
            "4/12",
            "5/12",
            "6/12",
            "7/12",
            "8/12",
            "9/12",
            "10/12",
            "11/12",
          ];
          t.suggest(r, () => {
            let e = [];
            for (let t of n()) {
              if ("string" == typeof t) {
                e.push({ values: [t], modifiers: [] });
                continue;
              }
              let r = [...(t.values ?? []), ...a(t.valueThemeKeys ?? [])],
                n = [...(t.modifiers ?? []), ...a(t.modifierThemeKeys ?? [])];
              t.supportsFractions && r.push(...i),
                t.hasDefaultValue && r.unshift(null),
                e.push({
                  supportsNegative: t.supportsNegative,
                  values: r,
                  modifiers: n,
                });
            }
            return e;
          });
        }
        function n(e, r) {
          t.static(e, () =>
            r.map((e) => ("function" == typeof e ? e() : y(e[0], e[1]))),
          );
        }
        function o(n, o) {
          function a({ negative: t }) {
            return (r) => {
              let n = null,
                a = null;
              if (r.value)
                if ("arbitrary" === r.value.kind) {
                  if (r.modifier) return;
                  (n = r.value.value), (a = r.value.dataType);
                } else {
                  if (
                    ((n = e.resolve(
                      r.value.fraction ?? r.value.value,
                      o.themeKeys ?? [],
                    )),
                    null === n && o.supportsFractions && r.value.fraction)
                  ) {
                    let [e, t] = R(r.value.fraction, "/");
                    if (!de(e) || !de(t)) return;
                    n = `calc(${r.value.fraction} * 100%)`;
                  }
                  if (null === n && t && o.handleNegativeBareValue) {
                    if (
                      ((n = o.handleNegativeBareValue(r.value)),
                      !n?.includes("/") && r.modifier)
                    )
                      return;
                    if (null !== n) return o.handle(n, null);
                  }
                  if (
                    null === n &&
                    o.handleBareValue &&
                    ((n = o.handleBareValue(r.value)),
                    !n?.includes("/") && r.modifier)
                  )
                    return;
                }
              else {
                if (r.modifier) return;
                n =
                  void 0 !== o.defaultValue
                    ? o.defaultValue
                    : e.resolve(null, o.themeKeys ?? []);
              }
              if (null !== n) return o.handle(t ? `calc(${n} * -1)` : n, a);
            };
          }
          o.supportsNegative && t.functional(`-${n}`, a({ negative: !0 })),
            t.functional(n, a({ negative: !1 })),
            r(n, () => [
              {
                supportsNegative: o.supportsNegative,
                valueThemeKeys: o.themeKeys ?? [],
                hasDefaultValue:
                  void 0 !== o.defaultValue && null !== o.defaultValue,
                supportsFractions: o.supportsFractions,
              },
            ]);
        }
        function a(n, o) {
          t.functional(n, (t) => {
            if (!t.value) return;
            let r = null;
            return (
              "arbitrary" === t.value.kind
                ? ((r = t.value.value), (r = Te(r, t.modifier, e)))
                : (r = je(t, e, o.themeKeys)),
              null !== r ? o.handle(r) : void 0
            );
          }),
            r(n, () => [
              {
                values: ["current", "inherit", "transparent"],
                valueThemeKeys: o.themeKeys,
                modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
              },
            ]);
        }
        function i(
          n,
          a,
          i,
          { supportsNegative: l = !1, supportsFractions: s = !1 } = {},
        ) {
          l && t.static(`-${n}-px`, () => i("-1px")),
            t.static(`${n}-px`, () => i("1px")),
            o(n, {
              themeKeys: a,
              supportsFractions: s,
              supportsNegative: l,
              defaultValue: null,
              handleBareValue: ({ value: t }) => {
                let r = e.resolve(null, ["--spacing"]);
                return r && pe(t) ? `calc(${r} * ${t})` : null;
              },
              handleNegativeBareValue: ({ value: t }) => {
                let r = e.resolve(null, ["--spacing"]);
                return r && pe(t) ? `calc(${r} * -${t})` : null;
              },
              handle: i,
            }),
            r(n, () => [
              {
                values: e.get(["--spacing"]) ? ye : [],
                supportsNegative: l,
                supportsFractions: s,
                valueThemeKeys: a,
              },
            ]);
        }
        n("sr-only", [
          ["position", "absolute"],
          ["width", "1px"],
          ["height", "1px"],
          ["padding", "0"],
          ["margin", "-1px"],
          ["overflow", "hidden"],
          ["clip", "rect(0, 0, 0, 0)"],
          ["white-space", "nowrap"],
          ["border-width", "0"],
        ]),
          n("not-sr-only", [
            ["position", "static"],
            ["width", "auto"],
            ["height", "auto"],
            ["padding", "0"],
            ["margin", "0"],
            ["overflow", "visible"],
            ["clip", "auto"],
            ["white-space", "normal"],
          ]),
          n("pointer-events-none", [["pointer-events", "none"]]),
          n("pointer-events-auto", [["pointer-events", "auto"]]),
          n("visible", [["visibility", "visible"]]),
          n("invisible", [["visibility", "hidden"]]),
          n("collapse", [["visibility", "collapse"]]),
          n("static", [["position", "static"]]),
          n("fixed", [["position", "fixed"]]),
          n("absolute", [["position", "absolute"]]),
          n("relative", [["position", "relative"]]),
          n("sticky", [["position", "sticky"]]);
        for (let [e, t] of [
          ["inset", "inset"],
          ["inset-x", "inset-inline"],
          ["inset-y", "inset-block"],
          ["start", "inset-inline-start"],
          ["end", "inset-inline-end"],
          ["top", "top"],
          ["right", "right"],
          ["bottom", "bottom"],
          ["left", "left"],
        ])
          n(`${e}-auto`, [[t, "auto"]]),
            n(`${e}-full`, [[t, "100%"]]),
            n(`-${e}-full`, [[t, "-100%"]]),
            i(e, ["--inset", "--spacing"], (e) => [y(t, e)], {
              supportsNegative: !0,
              supportsFractions: !0,
            });
        n("isolate", [["isolation", "isolate"]]),
          n("isolation-auto", [["isolation", "auto"]]),
          n("z-auto", [["z-index", "auto"]]),
          o("z", {
            supportsNegative: !0,
            handleBareValue: ({ value: e }) => (de(e) ? e : null),
            themeKeys: ["--z-index"],
            handle: (e) => [y("z-index", e)],
          }),
          r("z", () => [
            {
              supportsNegative: !0,
              values: ["0", "10", "20", "30", "40", "50"],
              valueThemeKeys: ["--z-index"],
            },
          ]),
          n("order-first", [["order", "-9999"]]),
          n("order-last", [["order", "9999"]]),
          n("order-none", [["order", "0"]]),
          o("order", {
            supportsNegative: !0,
            handleBareValue: ({ value: e }) => (de(e) ? e : null),
            themeKeys: ["--order"],
            handle: (e) => [y("order", e)],
          }),
          r("order", () => [
            {
              supportsNegative: !0,
              values: Array.from({ length: 12 }, (e, t) => `${t + 1}`),
              valueThemeKeys: ["--order"],
            },
          ]),
          n("col-auto", [["grid-column", "auto"]]),
          o("col", {
            supportsNegative: !0,
            handleBareValue: ({ value: e }) => (de(e) ? e : null),
            themeKeys: ["--grid-column"],
            handle: (e) => [y("grid-column", e)],
          }),
          n("col-span-full", [["grid-column", "1 / -1"]]),
          o("col-span", {
            handleBareValue: ({ value: e }) => (de(e) ? e : null),
            handle: (e) => [y("grid-column", `span ${e} / span ${e}`)],
          }),
          n("col-start-auto", [["grid-column-start", "auto"]]),
          o("col-start", {
            supportsNegative: !0,
            handleBareValue: ({ value: e }) => (de(e) ? e : null),
            themeKeys: ["--grid-column-start"],
            handle: (e) => [y("grid-column-start", e)],
          }),
          n("col-end-auto", [["grid-column-end", "auto"]]),
          o("col-end", {
            supportsNegative: !0,
            handleBareValue: ({ value: e }) => (de(e) ? e : null),
            themeKeys: ["--grid-column-end"],
            handle: (e) => [y("grid-column-end", e)],
          }),
          r("col-span", () => [
            {
              values: Array.from({ length: 12 }, (e, t) => `${t + 1}`),
              valueThemeKeys: [],
            },
          ]),
          r("col-start", () => [
            {
              supportsNegative: !0,
              values: Array.from({ length: 13 }, (e, t) => `${t + 1}`),
              valueThemeKeys: ["--grid-column-start"],
            },
          ]),
          r("col-end", () => [
            {
              supportsNegative: !0,
              values: Array.from({ length: 13 }, (e, t) => `${t + 1}`),
              valueThemeKeys: ["--grid-column-end"],
            },
          ]),
          n("row-auto", [["grid-row", "auto"]]),
          o("row", {
            supportsNegative: !0,
            handleBareValue: ({ value: e }) => (de(e) ? e : null),
            themeKeys: ["--grid-row"],
            handle: (e) => [y("grid-row", e)],
          }),
          n("row-span-full", [["grid-row", "1 / -1"]]),
          o("row-span", {
            themeKeys: [],
            handleBareValue: ({ value: e }) => (de(e) ? e : null),
            handle: (e) => [y("grid-row", `span ${e} / span ${e}`)],
          }),
          n("row-start-auto", [["grid-row-start", "auto"]]),
          o("row-start", {
            supportsNegative: !0,
            handleBareValue: ({ value: e }) => (de(e) ? e : null),
            themeKeys: ["--grid-row-start"],
            handle: (e) => [y("grid-row-start", e)],
          }),
          n("row-end-auto", [["grid-row-end", "auto"]]),
          o("row-end", {
            supportsNegative: !0,
            handleBareValue: ({ value: e }) => (de(e) ? e : null),
            themeKeys: ["--grid-row-end"],
            handle: (e) => [y("grid-row-end", e)],
          }),
          r("row-span", () => [
            {
              values: Array.from({ length: 12 }, (e, t) => `${t + 1}`),
              valueThemeKeys: [],
            },
          ]),
          r("row-start", () => [
            {
              supportsNegative: !0,
              values: Array.from({ length: 13 }, (e, t) => `${t + 1}`),
              valueThemeKeys: ["--grid-row-start"],
            },
          ]),
          r("row-end", () => [
            {
              supportsNegative: !0,
              values: Array.from({ length: 13 }, (e, t) => `${t + 1}`),
              valueThemeKeys: ["--grid-row-end"],
            },
          ]),
          n("float-start", [["float", "inline-start"]]),
          n("float-end", [["float", "inline-end"]]),
          n("float-right", [["float", "right"]]),
          n("float-left", [["float", "left"]]),
          n("float-none", [["float", "none"]]),
          n("clear-start", [["clear", "inline-start"]]),
          n("clear-end", [["clear", "inline-end"]]),
          n("clear-right", [["clear", "right"]]),
          n("clear-left", [["clear", "left"]]),
          n("clear-both", [["clear", "both"]]),
          n("clear-none", [["clear", "none"]]);
        for (let [e, t] of [
          ["m", "margin"],
          ["mx", "margin-inline"],
          ["my", "margin-block"],
          ["ms", "margin-inline-start"],
          ["me", "margin-inline-end"],
          ["mt", "margin-top"],
          ["mr", "margin-right"],
          ["mb", "margin-bottom"],
          ["ml", "margin-left"],
        ])
          n(`${e}-auto`, [[t, "auto"]]),
            i(e, ["--margin", "--spacing"], (e) => [y(t, e)], {
              supportsNegative: !0,
            });
        n("box-border", [["box-sizing", "border-box"]]),
          n("box-content", [["box-sizing", "content-box"]]),
          n("line-clamp-none", [
            ["overflow", "visible"],
            ["display", "block"],
            ["-webkit-box-orient", "horizontal"],
            ["-webkit-line-clamp", "unset"],
          ]),
          o("line-clamp", {
            themeKeys: ["--line-clamp"],
            handleBareValue: ({ value: e }) => (de(e) ? e : null),
            handle: (e) => [
              y("overflow", "hidden"),
              y("display", "-webkit-box"),
              y("-webkit-box-orient", "vertical"),
              y("-webkit-line-clamp", e),
            ],
          }),
          r("line-clamp", () => [
            {
              values: ["1", "2", "3", "4", "5", "6"],
              valueThemeKeys: ["--line-clamp"],
            },
          ]),
          n("block", [["display", "block"]]),
          n("inline-block", [["display", "inline-block"]]),
          n("inline", [["display", "inline"]]),
          n("hidden", [["display", "none"]]),
          n("inline-flex", [["display", "inline-flex"]]),
          n("table", [["display", "table"]]),
          n("inline-table", [["display", "inline-table"]]),
          n("table-caption", [["display", "table-caption"]]),
          n("table-cell", [["display", "table-cell"]]),
          n("table-column", [["display", "table-column"]]),
          n("table-column-group", [["display", "table-column-group"]]),
          n("table-footer-group", [["display", "table-footer-group"]]),
          n("table-header-group", [["display", "table-header-group"]]),
          n("table-row-group", [["display", "table-row-group"]]),
          n("table-row", [["display", "table-row"]]),
          n("flow-root", [["display", "flow-root"]]),
          n("flex", [["display", "flex"]]),
          n("grid", [["display", "grid"]]),
          n("inline-grid", [["display", "inline-grid"]]),
          n("contents", [["display", "contents"]]),
          n("list-item", [["display", "list-item"]]),
          n("field-sizing-content", [["field-sizing", "content"]]),
          n("field-sizing-fixed", [["field-sizing", "fixed"]]),
          n("aspect-auto", [["aspect-ratio", "auto"]]),
          n("aspect-square", [["aspect-ratio", "1 / 1"]]),
          o("aspect", {
            themeKeys: ["--aspect"],
            handleBareValue: ({ fraction: e }) => {
              if (null === e) return null;
              let [t, r] = R(e, "/");
              return de(t) && de(r) ? e : null;
            },
            handle: (e) => [y("aspect-ratio", e)],
          });
        for (let [e, t] of [
          ["auto", "auto"],
          ["full", "100%"],
          ["svw", "100svw"],
          ["lvw", "100lvw"],
          ["dvw", "100dvw"],
          ["svh", "100svh"],
          ["lvh", "100lvh"],
          ["dvh", "100dvh"],
          ["min", "min-content"],
          ["max", "max-content"],
          ["fit", "fit-content"],
        ])
          n(`size-${e}`, [
            ["--tw-sort", "size"],
            ["width", t],
            ["height", t],
          ]),
            n(`w-${e}`, [["width", t]]),
            n(`h-${e}`, [["height", t]]),
            n(`min-w-${e}`, [["min-width", t]]),
            n(`min-h-${e}`, [["min-height", t]]),
            "auto" !== e &&
              (n(`max-w-${e}`, [["max-width", t]]),
              n(`max-h-${e}`, [["max-height", t]]));
        n("w-screen", [["width", "100vw"]]),
          n("min-w-screen", [["min-width", "100vw"]]),
          n("max-w-screen", [["max-width", "100vw"]]),
          n("h-screen", [["height", "100vh"]]),
          n("min-h-screen", [["min-height", "100vh"]]),
          n("max-h-screen", [["max-height", "100vh"]]),
          n("max-w-none", [["max-width", "none"]]),
          n("max-h-none", [["max-height", "none"]]),
          i(
            "size",
            ["--size", "--spacing"],
            (e) => [y("--tw-sort", "size"), y("width", e), y("height", e)],
            { supportsFractions: !0 },
          );
        for (let [e, t, r] of [
          ["w", ["--width", "--spacing", "--container"], "width"],
          ["min-w", ["--min-width", "--spacing", "--container"], "min-width"],
          ["max-w", ["--max-width", "--spacing", "--container"], "max-width"],
          ["h", ["--height", "--spacing"], "height"],
          ["min-h", ["--min-height", "--height", "--spacing"], "min-height"],
          ["max-h", ["--max-height", "--height", "--spacing"], "max-height"],
        ])
          i(e, t, (e) => [y(r, e)], { supportsFractions: !0 });
        t.static("container", () => {
          let t = [...e.namespace("--breakpoint").values()];
          t.sort((e, t) => P(e, t, "asc"));
          let r = [
            y("--tw-sort", "--tw-container-component"),
            y("width", "100%"),
          ];
          for (let e of t)
            r.push(k("@media", `(width >= ${e})`, [y("max-width", e)]));
          return r;
        }),
          n("flex-auto", [["flex", "auto"]]),
          n("flex-initial", [["flex", "0 auto"]]),
          n("flex-none", [["flex", "none"]]),
          t.functional("flex", (e) => {
            if (e.value) {
              if ("arbitrary" === e.value.kind)
                return e.modifier ? void 0 : [y("flex", e.value.value)];
              if (e.value.fraction) {
                let [t, r] = R(e.value.fraction, "/");
                return de(t) && de(r)
                  ? [y("flex", `calc(${e.value.fraction} * 100%)`)]
                  : void 0;
              }
              if (de(e.value.value))
                return e.modifier ? void 0 : [y("flex", e.value.value)];
            }
          }),
          r("flex", () => [{ supportsFractions: !0 }]),
          o("shrink", {
            defaultValue: "1",
            handleBareValue: ({ value: e }) => (de(e) ? e : null),
            handle: (e) => [y("flex-shrink", e)],
          }),
          o("grow", {
            defaultValue: "1",
            handleBareValue: ({ value: e }) => (de(e) ? e : null),
            handle: (e) => [y("flex-grow", e)],
          }),
          r("shrink", () => [
            { values: ["0"], valueThemeKeys: [], hasDefaultValue: !0 },
          ]),
          r("grow", () => [
            { values: ["0"], valueThemeKeys: [], hasDefaultValue: !0 },
          ]),
          n("basis-auto", [["flex-basis", "auto"]]),
          n("basis-full", [["flex-basis", "100%"]]),
          i(
            "basis",
            ["--flex-basis", "--spacing", "--container"],
            (e) => [y("flex-basis", e)],
            { supportsFractions: !0 },
          ),
          n("table-auto", [["table-layout", "auto"]]),
          n("table-fixed", [["table-layout", "fixed"]]),
          n("caption-top", [["caption-side", "top"]]),
          n("caption-bottom", [["caption-side", "bottom"]]),
          n("border-collapse", [["border-collapse", "collapse"]]),
          n("border-separate", [["border-collapse", "separate"]]);
        let l = () =>
          z([
            $e("--tw-border-spacing-x", "0", "<length>"),
            $e("--tw-border-spacing-y", "0", "<length>"),
          ]);
        i("border-spacing", ["--border-spacing", "--spacing"], (e) => [
          l(),
          y("--tw-border-spacing-x", e),
          y("--tw-border-spacing-y", e),
          y(
            "border-spacing",
            "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
          ),
        ]),
          i("border-spacing-x", ["--border-spacing", "--spacing"], (e) => [
            l(),
            y("--tw-border-spacing-x", e),
            y(
              "border-spacing",
              "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
            ),
          ]),
          i("border-spacing-y", ["--border-spacing", "--spacing"], (e) => [
            l(),
            y("--tw-border-spacing-y", e),
            y(
              "border-spacing",
              "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
            ),
          ]),
          n("origin-center", [["transform-origin", "center"]]),
          n("origin-top", [["transform-origin", "top"]]),
          n("origin-top-right", [["transform-origin", "top right"]]),
          n("origin-right", [["transform-origin", "right"]]),
          n("origin-bottom-right", [["transform-origin", "bottom right"]]),
          n("origin-bottom", [["transform-origin", "bottom"]]),
          n("origin-bottom-left", [["transform-origin", "bottom left"]]),
          n("origin-left", [["transform-origin", "left"]]),
          n("origin-top-left", [["transform-origin", "top left"]]),
          o("origin", {
            themeKeys: ["--transform-origin"],
            handle: (e) => [y("transform-origin", e)],
          }),
          n("perspective-origin-center", [["perspective-origin", "center"]]),
          n("perspective-origin-top", [["perspective-origin", "top"]]),
          n("perspective-origin-top-right", [
            ["perspective-origin", "top right"],
          ]),
          n("perspective-origin-right", [["perspective-origin", "right"]]),
          n("perspective-origin-bottom-right", [
            ["perspective-origin", "bottom right"],
          ]),
          n("perspective-origin-bottom", [["perspective-origin", "bottom"]]),
          n("perspective-origin-bottom-left", [
            ["perspective-origin", "bottom left"],
          ]),
          n("perspective-origin-left", [["perspective-origin", "left"]]),
          n("perspective-origin-top-left", [
            ["perspective-origin", "top left"],
          ]),
          o("perspective-origin", {
            themeKeys: ["--perspective-origin"],
            handle: (e) => [y("perspective-origin", e)],
          }),
          n("perspective-none", [["perspective", "none"]]),
          o("perspective", {
            themeKeys: ["--perspective"],
            handle: (e) => [y("perspective", e)],
          });
        let s = () =>
          z([
            $e("--tw-translate-x", "0"),
            $e("--tw-translate-y", "0"),
            $e("--tw-translate-z", "0"),
          ]);
        n("translate-none", [["translate", "none"]]),
          n("-translate-full", [
            s,
            ["--tw-translate-x", "-100%"],
            ["--tw-translate-y", "-100%"],
            ["translate", "var(--tw-translate-x) var(--tw-translate-y)"],
          ]),
          n("translate-full", [
            s,
            ["--tw-translate-x", "100%"],
            ["--tw-translate-y", "100%"],
            ["translate", "var(--tw-translate-x) var(--tw-translate-y)"],
          ]),
          i(
            "translate",
            ["--translate", "--spacing"],
            (e) => [
              s(),
              y("--tw-translate-x", e),
              y("--tw-translate-y", e),
              y("translate", "var(--tw-translate-x) var(--tw-translate-y)"),
            ],
            { supportsNegative: !0, supportsFractions: !0 },
          );
        for (let e of ["x", "y"])
          n(`-translate-${e}-full`, [
            s,
            [`--tw-translate-${e}`, "-100%"],
            ["translate", "var(--tw-translate-x) var(--tw-translate-y)"],
          ]),
            n(`translate-${e}-full`, [
              s,
              [`--tw-translate-${e}`, "100%"],
              ["translate", "var(--tw-translate-x) var(--tw-translate-y)"],
            ]),
            i(
              `translate-${e}`,
              ["--translate", "--spacing"],
              (t) => [
                s(),
                y(`--tw-translate-${e}`, t),
                y("translate", "var(--tw-translate-x) var(--tw-translate-y)"),
              ],
              { supportsNegative: !0, supportsFractions: !0 },
            );
        i(
          "translate-z",
          ["--translate", "--spacing"],
          (e) => [
            s(),
            y("--tw-translate-z", e),
            y(
              "translate",
              "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)",
            ),
          ],
          { supportsNegative: !0 },
        ),
          n("translate-3d", [
            s,
            [
              "translate",
              "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)",
            ],
          ]);
        let c = () =>
          z([
            $e("--tw-scale-x", "1"),
            $e("--tw-scale-y", "1"),
            $e("--tw-scale-z", "1"),
          ]);
        function u({ negative: t }) {
          return (r) => {
            if (!r.value || r.modifier) return;
            let n;
            return "arbitrary" === r.value.kind
              ? ((n = r.value.value), [y("scale", n)])
              : ((n = e.resolve(r.value.value, ["--scale"])),
                !n && de(r.value.value) && (n = `${r.value.value}%`),
                n
                  ? ((n = t ? `calc(${n} * -1)` : n),
                    [
                      c(),
                      y("--tw-scale-x", n),
                      y("--tw-scale-y", n),
                      y("--tw-scale-z", n),
                      y("scale", "var(--tw-scale-x) var(--tw-scale-y)"),
                    ])
                  : void 0);
          };
        }
        n("scale-none", [["scale", "none"]]),
          t.functional("-scale", u({ negative: !0 })),
          t.functional("scale", u({ negative: !1 })),
          r("scale", () => [
            {
              supportsNegative: !0,
              values: [
                "0",
                "50",
                "75",
                "90",
                "95",
                "100",
                "105",
                "110",
                "125",
                "150",
                "200",
              ],
              valueThemeKeys: ["--scale"],
            },
          ]);
        for (let e of ["x", "y", "z"])
          o(`scale-${e}`, {
            supportsNegative: !0,
            themeKeys: ["--scale"],
            handleBareValue: ({ value: e }) => (de(e) ? `${e}%` : null),
            handle: (t) => [
              c(),
              y(`--tw-scale-${e}`, t),
              y(
                "scale",
                "var(--tw-scale-x) var(--tw-scale-y)" +
                  ("z" === e ? " var(--tw-scale-z)" : ""),
              ),
            ],
          }),
            r(`scale-${e}`, () => [
              {
                supportsNegative: !0,
                values: [
                  "0",
                  "50",
                  "75",
                  "90",
                  "95",
                  "100",
                  "105",
                  "110",
                  "125",
                  "150",
                  "200",
                ],
                valueThemeKeys: ["--scale"],
              },
            ]);
        function d({ negative: t }) {
          return (r) => {
            if (!r.value || r.modifier) return;
            let n;
            if ("arbitrary" === r.value.kind) {
              n = r.value.value;
              let e = r.value.dataType ?? G(n, ["angle", "vector"]);
              if ("vector" === e) return [y("rotate", `${n} var(--tw-rotate)`)];
              if ("angle" !== e) return [y("rotate", n)];
            } else if (
              ((n = e.resolve(r.value.value, ["--rotate"])),
              !n && de(r.value.value) && (n = `${r.value.value}deg`),
              !n)
            )
              return;
            return [y("rotate", t ? `calc(${n} * -1)` : n)];
          };
        }
        n("scale-3d", [
          c,
          ["scale", "var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)"],
        ]),
          n("rotate-none", [["rotate", "none"]]),
          t.functional("-rotate", d({ negative: !0 })),
          t.functional("rotate", d({ negative: !1 })),
          r("rotate", () => [
            {
              supportsNegative: !0,
              values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"],
              valueThemeKeys: ["--rotate"],
            },
          ]);
        {
          let e = [
              "var(--tw-rotate-x)",
              "var(--tw-rotate-y)",
              "var(--tw-rotate-z)",
              "var(--tw-skew-x)",
              "var(--tw-skew-y)",
            ].join(" "),
            a = () =>
              z([
                $e("--tw-rotate-x", "rotateX(0)"),
                $e("--tw-rotate-y", "rotateY(0)"),
                $e("--tw-rotate-z", "rotateZ(0)"),
                $e("--tw-skew-x", "skewX(0)"),
                $e("--tw-skew-y", "skewY(0)"),
              ]);
          for (let t of ["x", "y", "z"])
            o(`rotate-${t}`, {
              supportsNegative: !0,
              themeKeys: ["--rotate"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}deg` : null),
              handle: (r) => [
                a(),
                y(`--tw-rotate-${t}`, `rotate${t.toUpperCase()}(${r})`),
                y("transform", e),
              ],
            }),
              r(`rotate-${t}`, () => [
                {
                  supportsNegative: !0,
                  values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"],
                  valueThemeKeys: ["--rotate"],
                },
              ]);
          o("skew", {
            supportsNegative: !0,
            themeKeys: ["--skew"],
            handleBareValue: ({ value: e }) => (de(e) ? `${e}deg` : null),
            handle: (t) => [
              a(),
              y("--tw-skew-x", `skewX(${t})`),
              y("--tw-skew-y", `skewY(${t})`),
              y("transform", e),
            ],
          }),
            o("skew-x", {
              supportsNegative: !0,
              themeKeys: ["--skew"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}deg` : null),
              handle: (t) => [
                a(),
                y("--tw-skew-x", `skewX(${t})`),
                y("transform", e),
              ],
            }),
            o("skew-y", {
              supportsNegative: !0,
              themeKeys: ["--skew"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}deg` : null),
              handle: (t) => [
                a(),
                y("--tw-skew-y", `skewY(${t})`),
                y("transform", e),
              ],
            }),
            r("skew", () => [
              {
                supportsNegative: !0,
                values: ["0", "1", "2", "3", "6", "12"],
                valueThemeKeys: ["--skew"],
              },
            ]),
            r("skew-x", () => [
              {
                supportsNegative: !0,
                values: ["0", "1", "2", "3", "6", "12"],
                valueThemeKeys: ["--skew"],
              },
            ]),
            r("skew-y", () => [
              {
                supportsNegative: !0,
                values: ["0", "1", "2", "3", "6", "12"],
                valueThemeKeys: ["--skew"],
              },
            ]),
            t.functional("transform", (t) => {
              if (t.modifier) return;
              let r = null;
              return (
                t.value
                  ? "arbitrary" === t.value.kind && (r = t.value.value)
                  : (r = e),
                null !== r ? [a(), y("transform", r)] : void 0
              );
            }),
            r("transform", () => [{ hasDefaultValue: !0 }]),
            n("transform-cpu", [["transform", e]]),
            n("transform-gpu", [["transform", `translateZ(0) ${e}`]]),
            n("transform-none", [["transform", "none"]]);
        }
        n("transform-flat", [["transform-style", "flat"]]),
          n("transform-3d", [["transform-style", "preserve-3d"]]),
          n("transform-content", [["transform-box", "content-box"]]),
          n("transform-border", [["transform-box", "border-box"]]),
          n("transform-fill", [["transform-box", "fill-box"]]),
          n("transform-stroke", [["transform-box", "stroke-box"]]),
          n("transform-view", [["transform-box", "view-box"]]),
          n("backface-visible", [["backface-visibility", "visible"]]),
          n("backface-hidden", [["backface-visibility", "hidden"]]);
        for (let e of [
          "auto",
          "default",
          "pointer",
          "wait",
          "text",
          "move",
          "help",
          "not-allowed",
          "none",
          "context-menu",
          "progress",
          "cell",
          "crosshair",
          "vertical-text",
          "alias",
          "copy",
          "no-drop",
          "grab",
          "grabbing",
          "all-scroll",
          "col-resize",
          "row-resize",
          "n-resize",
          "e-resize",
          "s-resize",
          "w-resize",
          "ne-resize",
          "nw-resize",
          "se-resize",
          "sw-resize",
          "ew-resize",
          "ns-resize",
          "nesw-resize",
          "nwse-resize",
          "zoom-in",
          "zoom-out",
        ])
          n(`cursor-${e}`, [["cursor", e]]);
        o("cursor", {
          themeKeys: ["--cursor"],
          handle: (e) => [y("cursor", e)],
        });
        for (let e of ["auto", "none", "manipulation"])
          n(`touch-${e}`, [["touch-action", e]]);
        let f = () =>
          z([$e("--tw-pan-x"), $e("--tw-pan-y"), $e("--tw-pinch-zoom")]);
        for (let e of ["x", "left", "right"])
          n(`touch-pan-${e}`, [
            f,
            ["--tw-pan-x", `pan-${e}`],
            [
              "touch-action",
              "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)",
            ],
          ]);
        for (let e of ["y", "up", "down"])
          n(`touch-pan-${e}`, [
            f,
            ["--tw-pan-y", `pan-${e}`],
            [
              "touch-action",
              "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)",
            ],
          ]);
        n("touch-pinch-zoom", [
          f,
          ["--tw-pinch-zoom", "pinch-zoom"],
          [
            "touch-action",
            "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)",
          ],
        ]);
        for (let e of ["none", "text", "all", "auto"])
          n(`select-${e}`, [
            ["-webkit-user-select", e],
            ["user-select", e],
          ]);
        n("resize-none", [["resize", "none"]]),
          n("resize-x", [["resize", "horizontal"]]),
          n("resize-y", [["resize", "vertical"]]),
          n("resize", [["resize", "both"]]),
          n("snap-none", [["scroll-snap-type", "none"]]);
        let p = () => z([$e("--tw-scroll-snap-strictness", "proximity", "*")]);
        for (let e of ["x", "y", "both"])
          n(`snap-${e}`, [
            p,
            ["scroll-snap-type", `${e} var(--tw-scroll-snap-strictness)`],
          ]);
        n("snap-mandatory", [p, ["--tw-scroll-snap-strictness", "mandatory"]]),
          n("snap-proximity", [
            p,
            ["--tw-scroll-snap-strictness", "proximity"],
          ]),
          n("snap-align-none", [["scroll-snap-align", "none"]]),
          n("snap-start", [["scroll-snap-align", "start"]]),
          n("snap-end", [["scroll-snap-align", "end"]]),
          n("snap-center", [["scroll-snap-align", "center"]]),
          n("snap-normal", [["scroll-snap-stop", "normal"]]),
          n("snap-always", [["scroll-snap-stop", "always"]]);
        for (let [e, t] of [
          ["scroll-m", "scroll-margin"],
          ["scroll-mx", "scroll-margin-inline"],
          ["scroll-my", "scroll-margin-block"],
          ["scroll-ms", "scroll-margin-inline-start"],
          ["scroll-me", "scroll-margin-inline-end"],
          ["scroll-mt", "scroll-margin-top"],
          ["scroll-mr", "scroll-margin-right"],
          ["scroll-mb", "scroll-margin-bottom"],
          ["scroll-ml", "scroll-margin-left"],
        ])
          i(e, ["--scroll-margin", "--spacing"], (e) => [y(t, e)], {
            supportsNegative: !0,
          });
        for (let [e, t] of [
          ["scroll-p", "scroll-padding"],
          ["scroll-px", "scroll-padding-inline"],
          ["scroll-py", "scroll-padding-block"],
          ["scroll-ps", "scroll-padding-inline-start"],
          ["scroll-pe", "scroll-padding-inline-end"],
          ["scroll-pt", "scroll-padding-top"],
          ["scroll-pr", "scroll-padding-right"],
          ["scroll-pb", "scroll-padding-bottom"],
          ["scroll-pl", "scroll-padding-left"],
        ])
          i(e, ["--scroll-padding", "--spacing"], (e) => [y(t, e)]);
        n("list-inside", [["list-style-position", "inside"]]),
          n("list-outside", [["list-style-position", "outside"]]),
          n("list-none", [["list-style-type", "none"]]),
          n("list-disc", [["list-style-type", "disc"]]),
          n("list-decimal", [["list-style-type", "decimal"]]),
          o("list", {
            themeKeys: ["--list-style-type"],
            handle: (e) => [y("list-style-type", e)],
          }),
          n("list-image-none", [["list-style-image", "none"]]),
          o("list-image", {
            themeKeys: ["--list-style-image"],
            handle: (e) => [y("list-style-image", e)],
          }),
          n("appearance-none", [["appearance", "none"]]),
          n("appearance-auto", [["appearance", "auto"]]),
          n("scheme-normal", [["color-scheme", "normal"]]),
          n("scheme-dark", [["color-scheme", "dark"]]),
          n("scheme-light", [["color-scheme", "light"]]),
          n("scheme-light-dark", [["color-scheme", "light dark"]]),
          n("scheme-only-dark", [["color-scheme", "only dark"]]),
          n("scheme-only-light", [["color-scheme", "only light"]]),
          n("columns-auto", [["columns", "auto"]]),
          o("columns", {
            themeKeys: ["--columns", "--container"],
            handleBareValue: ({ value: e }) => (de(e) ? e : null),
            handle: (e) => [y("columns", e)],
          }),
          r("columns", () => [
            {
              values: Array.from({ length: 12 }, (e, t) => `${t + 1}`),
              valueThemeKeys: ["--columns", "--container"],
            },
          ]);
        for (let e of [
          "auto",
          "avoid",
          "all",
          "avoid-page",
          "page",
          "left",
          "right",
          "column",
        ])
          n(`break-before-${e}`, [["break-before", e]]);
        for (let e of ["auto", "avoid", "avoid-page", "avoid-column"])
          n(`break-inside-${e}`, [["break-inside", e]]);
        for (let e of [
          "auto",
          "avoid",
          "all",
          "avoid-page",
          "page",
          "left",
          "right",
          "column",
        ])
          n(`break-after-${e}`, [["break-after", e]]);
        n("grid-flow-row", [["grid-auto-flow", "row"]]),
          n("grid-flow-col", [["grid-auto-flow", "column"]]),
          n("grid-flow-dense", [["grid-auto-flow", "dense"]]),
          n("grid-flow-row-dense", [["grid-auto-flow", "row dense"]]),
          n("grid-flow-col-dense", [["grid-auto-flow", "column dense"]]),
          n("auto-cols-auto", [["grid-auto-columns", "auto"]]),
          n("auto-cols-min", [["grid-auto-columns", "min-content"]]),
          n("auto-cols-max", [["grid-auto-columns", "max-content"]]),
          n("auto-cols-fr", [["grid-auto-columns", "minmax(0, 1fr)"]]),
          o("auto-cols", {
            themeKeys: ["--grid-auto-columns"],
            handle: (e) => [y("grid-auto-columns", e)],
          }),
          n("auto-rows-auto", [["grid-auto-rows", "auto"]]),
          n("auto-rows-min", [["grid-auto-rows", "min-content"]]),
          n("auto-rows-max", [["grid-auto-rows", "max-content"]]),
          n("auto-rows-fr", [["grid-auto-rows", "minmax(0, 1fr)"]]),
          o("auto-rows", {
            themeKeys: ["--grid-auto-rows"],
            handle: (e) => [y("grid-auto-rows", e)],
          }),
          n("grid-cols-none", [["grid-template-columns", "none"]]),
          n("grid-cols-subgrid", [["grid-template-columns", "subgrid"]]),
          o("grid-cols", {
            themeKeys: ["--grid-template-columns"],
            handleBareValue: ({ value: e }) =>
              fe(e) ? `repeat(${e}, minmax(0, 1fr))` : null,
            handle: (e) => [y("grid-template-columns", e)],
          }),
          n("grid-rows-none", [["grid-template-rows", "none"]]),
          n("grid-rows-subgrid", [["grid-template-rows", "subgrid"]]),
          o("grid-rows", {
            themeKeys: ["--grid-template-rows"],
            handleBareValue: ({ value: e }) =>
              fe(e) ? `repeat(${e}, minmax(0, 1fr))` : null,
            handle: (e) => [y("grid-template-rows", e)],
          }),
          r("grid-cols", () => [
            {
              values: Array.from({ length: 12 }, (e, t) => `${t + 1}`),
              valueThemeKeys: ["--grid-template-columns"],
            },
          ]),
          r("grid-rows", () => [
            {
              values: Array.from({ length: 12 }, (e, t) => `${t + 1}`),
              valueThemeKeys: ["--grid-template-rows"],
            },
          ]),
          n("flex-row", [["flex-direction", "row"]]),
          n("flex-row-reverse", [["flex-direction", "row-reverse"]]),
          n("flex-col", [["flex-direction", "column"]]),
          n("flex-col-reverse", [["flex-direction", "column-reverse"]]),
          n("flex-wrap", [["flex-wrap", "wrap"]]),
          n("flex-nowrap", [["flex-wrap", "nowrap"]]),
          n("flex-wrap-reverse", [["flex-wrap", "wrap-reverse"]]),
          n("place-content-center", [["place-content", "center"]]),
          n("place-content-start", [["place-content", "start"]]),
          n("place-content-end", [["place-content", "end"]]),
          n("place-content-center-safe", [["place-content", "safe center"]]),
          n("place-content-end-safe", [["place-content", "safe end"]]),
          n("place-content-between", [["place-content", "space-between"]]),
          n("place-content-around", [["place-content", "space-around"]]),
          n("place-content-evenly", [["place-content", "space-evenly"]]),
          n("place-content-baseline", [["place-content", "baseline"]]),
          n("place-content-stretch", [["place-content", "stretch"]]),
          n("place-items-center", [["place-items", "center"]]),
          n("place-items-start", [["place-items", "start"]]),
          n("place-items-end", [["place-items", "end"]]),
          n("place-items-center-safe", [["place-items", "safe center"]]),
          n("place-items-end-safe", [["place-items", "safe end"]]),
          n("place-items-baseline", [["place-items", "baseline"]]),
          n("place-items-stretch", [["place-items", "stretch"]]),
          n("content-normal", [["align-content", "normal"]]),
          n("content-center", [["align-content", "center"]]),
          n("content-start", [["align-content", "flex-start"]]),
          n("content-end", [["align-content", "flex-end"]]),
          n("content-center-safe", [["align-content", "safe center"]]),
          n("content-end-safe", [["align-content", "safe flex-end"]]),
          n("content-between", [["align-content", "space-between"]]),
          n("content-around", [["align-content", "space-around"]]),
          n("content-evenly", [["align-content", "space-evenly"]]),
          n("content-baseline", [["align-content", "baseline"]]),
          n("content-stretch", [["align-content", "stretch"]]),
          n("items-center", [["align-items", "center"]]),
          n("items-start", [["align-items", "flex-start"]]),
          n("items-end", [["align-items", "flex-end"]]),
          n("items-center-safe", [["align-items", "safe center"]]),
          n("items-end-safe", [["align-items", "safe flex-end"]]),
          n("items-baseline", [["align-items", "baseline"]]),
          n("items-baseline-last", [["align-items", "last baseline"]]),
          n("items-stretch", [["align-items", "stretch"]]),
          n("justify-normal", [["justify-content", "normal"]]),
          n("justify-center", [["justify-content", "center"]]),
          n("justify-start", [["justify-content", "flex-start"]]),
          n("justify-end", [["justify-content", "flex-end"]]),
          n("justify-center-safe", [["justify-content", "safe center"]]),
          n("justify-end-safe", [["justify-content", "safe flex-end"]]),
          n("justify-between", [["justify-content", "space-between"]]),
          n("justify-around", [["justify-content", "space-around"]]),
          n("justify-evenly", [["justify-content", "space-evenly"]]),
          n("justify-baseline", [["justify-content", "baseline"]]),
          n("justify-stretch", [["justify-content", "stretch"]]),
          n("justify-items-normal", [["justify-items", "normal"]]),
          n("justify-items-center", [["justify-items", "center"]]),
          n("justify-items-start", [["justify-items", "start"]]),
          n("justify-items-end", [["justify-items", "end"]]),
          n("justify-items-center-safe", [["justify-items", "safe center"]]),
          n("justify-items-end-safe", [["justify-items", "safe end"]]),
          n("justify-items-stretch", [["justify-items", "stretch"]]),
          i("gap", ["--gap", "--spacing"], (e) => [y("gap", e)]),
          i("gap-x", ["--gap", "--spacing"], (e) => [y("column-gap", e)]),
          i("gap-y", ["--gap", "--spacing"], (e) => [y("row-gap", e)]),
          i(
            "space-x",
            ["--space", "--spacing"],
            (e) => [
              z([$e("--tw-space-x-reverse", "0")]),
              w(":where(& > :not(:last-child))", [
                y("--tw-sort", "row-gap"),
                y("--tw-space-x-reverse", "0"),
                y(
                  "margin-inline-start",
                  `calc(${e} * var(--tw-space-x-reverse))`,
                ),
                y(
                  "margin-inline-end",
                  `calc(${e} * calc(1 - var(--tw-space-x-reverse)))`,
                ),
              ]),
            ],
            { supportsNegative: !0 },
          ),
          i(
            "space-y",
            ["--space", "--spacing"],
            (e) => [
              z([$e("--tw-space-y-reverse", "0")]),
              w(":where(& > :not(:last-child))", [
                y("--tw-sort", "column-gap"),
                y("--tw-space-y-reverse", "0"),
                y(
                  "margin-block-start",
                  `calc(${e} * var(--tw-space-y-reverse))`,
                ),
                y(
                  "margin-block-end",
                  `calc(${e} * calc(1 - var(--tw-space-y-reverse)))`,
                ),
              ]),
            ],
            { supportsNegative: !0 },
          ),
          n("space-x-reverse", [
            () => z([$e("--tw-space-x-reverse", "0")]),
            () =>
              w(":where(& > :not(:last-child))", [
                y("--tw-sort", "row-gap"),
                y("--tw-space-x-reverse", "1"),
              ]),
          ]),
          n("space-y-reverse", [
            () => z([$e("--tw-space-y-reverse", "0")]),
            () =>
              w(":where(& > :not(:last-child))", [
                y("--tw-sort", "column-gap"),
                y("--tw-space-y-reverse", "1"),
              ]),
          ]),
          n("accent-auto", [["accent-color", "auto"]]),
          a("accent", {
            themeKeys: ["--accent-color", "--color"],
            handle: (e) => [y("accent-color", e)],
          }),
          a("caret", {
            themeKeys: ["--caret-color", "--color"],
            handle: (e) => [y("caret-color", e)],
          }),
          a("divide", {
            themeKeys: ["--divide-color", "--color"],
            handle: (e) => [
              w(":where(& > :not(:last-child))", [
                y("--tw-sort", "divide-color"),
                y("border-color", e),
              ]),
            ],
          }),
          n("place-self-auto", [["place-self", "auto"]]),
          n("place-self-start", [["place-self", "start"]]),
          n("place-self-end", [["place-self", "end"]]),
          n("place-self-center", [["place-self", "center"]]),
          n("place-self-end-safe", [["place-self", "safe end"]]),
          n("place-self-center-safe", [["place-self", "safe center"]]),
          n("place-self-stretch", [["place-self", "stretch"]]),
          n("self-auto", [["align-self", "auto"]]),
          n("self-start", [["align-self", "flex-start"]]),
          n("self-end", [["align-self", "flex-end"]]),
          n("self-center", [["align-self", "center"]]),
          n("self-end-safe", [["align-self", "safe flex-end"]]),
          n("self-center-safe", [["align-self", "safe center"]]),
          n("self-stretch", [["align-self", "stretch"]]),
          n("self-baseline", [["align-self", "baseline"]]),
          n("self-baseline-last", [["align-self", "last baseline"]]),
          n("justify-self-auto", [["justify-self", "auto"]]),
          n("justify-self-start", [["justify-self", "flex-start"]]),
          n("justify-self-end", [["justify-self", "flex-end"]]),
          n("justify-self-center", [["justify-self", "center"]]),
          n("justify-self-end-safe", [["justify-self", "safe flex-end"]]),
          n("justify-self-center-safe", [["justify-self", "safe center"]]),
          n("justify-self-stretch", [["justify-self", "stretch"]]);
        for (let e of ["auto", "hidden", "clip", "visible", "scroll"])
          n(`overflow-${e}`, [["overflow", e]]),
            n(`overflow-x-${e}`, [["overflow-x", e]]),
            n(`overflow-y-${e}`, [["overflow-y", e]]);
        for (let e of ["auto", "contain", "none"])
          n(`overscroll-${e}`, [["overscroll-behavior", e]]),
            n(`overscroll-x-${e}`, [["overscroll-behavior-x", e]]),
            n(`overscroll-y-${e}`, [["overscroll-behavior-y", e]]);
        n("scroll-auto", [["scroll-behavior", "auto"]]),
          n("scroll-smooth", [["scroll-behavior", "smooth"]]),
          n("truncate", [
            ["overflow", "hidden"],
            ["text-overflow", "ellipsis"],
            ["white-space", "nowrap"],
          ]),
          n("text-ellipsis", [["text-overflow", "ellipsis"]]),
          n("text-clip", [["text-overflow", "clip"]]),
          n("hyphens-none", [
            ["-webkit-hyphens", "none"],
            ["hyphens", "none"],
          ]),
          n("hyphens-manual", [
            ["-webkit-hyphens", "manual"],
            ["hyphens", "manual"],
          ]),
          n("hyphens-auto", [
            ["-webkit-hyphens", "auto"],
            ["hyphens", "auto"],
          ]),
          n("whitespace-normal", [["white-space", "normal"]]),
          n("whitespace-nowrap", [["white-space", "nowrap"]]),
          n("whitespace-pre", [["white-space", "pre"]]),
          n("whitespace-pre-line", [["white-space", "pre-line"]]),
          n("whitespace-pre-wrap", [["white-space", "pre-wrap"]]),
          n("whitespace-break-spaces", [["white-space", "break-spaces"]]),
          n("text-wrap", [["text-wrap", "wrap"]]),
          n("text-nowrap", [["text-wrap", "nowrap"]]),
          n("text-balance", [["text-wrap", "balance"]]),
          n("text-pretty", [["text-wrap", "pretty"]]),
          n("break-normal", [
            ["overflow-wrap", "normal"],
            ["word-break", "normal"],
          ]),
          n("break-words", [["overflow-wrap", "break-word"]]),
          n("break-all", [["word-break", "break-all"]]),
          n("break-keep", [["word-break", "keep-all"]]),
          n("wrap-anywhere", [["overflow-wrap", "anywhere"]]),
          n("wrap-break-word", [["overflow-wrap", "break-word"]]),
          n("wrap-normal", [["overflow-wrap", "normal"]]);
        for (let [e, t] of [
          ["rounded", ["border-radius"]],
          [
            "rounded-s",
            ["border-start-start-radius", "border-end-start-radius"],
          ],
          ["rounded-e", ["border-start-end-radius", "border-end-end-radius"]],
          ["rounded-t", ["border-top-left-radius", "border-top-right-radius"]],
          [
            "rounded-r",
            ["border-top-right-radius", "border-bottom-right-radius"],
          ],
          [
            "rounded-b",
            ["border-bottom-right-radius", "border-bottom-left-radius"],
          ],
          [
            "rounded-l",
            ["border-top-left-radius", "border-bottom-left-radius"],
          ],
          ["rounded-ss", ["border-start-start-radius"]],
          ["rounded-se", ["border-start-end-radius"]],
          ["rounded-ee", ["border-end-end-radius"]],
          ["rounded-es", ["border-end-start-radius"]],
          ["rounded-tl", ["border-top-left-radius"]],
          ["rounded-tr", ["border-top-right-radius"]],
          ["rounded-br", ["border-bottom-right-radius"]],
          ["rounded-bl", ["border-bottom-left-radius"]],
        ])
          n(
            `${e}-none`,
            t.map((e) => [e, "0"]),
          ),
            n(
              `${e}-full`,
              t.map((e) => [e, "calc(infinity * 1px)"]),
            ),
            o(e, {
              themeKeys: ["--radius"],
              handle: (e) => t.map((t) => y(t, e)),
            });
        n("border-solid", [
          ["--tw-border-style", "solid"],
          ["border-style", "solid"],
        ]),
          n("border-dashed", [
            ["--tw-border-style", "dashed"],
            ["border-style", "dashed"],
          ]),
          n("border-dotted", [
            ["--tw-border-style", "dotted"],
            ["border-style", "dotted"],
          ]),
          n("border-double", [
            ["--tw-border-style", "double"],
            ["border-style", "double"],
          ]),
          n("border-hidden", [
            ["--tw-border-style", "hidden"],
            ["border-style", "hidden"],
          ]),
          n("border-none", [
            ["--tw-border-style", "none"],
            ["border-style", "none"],
          ]);
        {
          let a = function (n, o) {
              t.functional(n, (t) => {
                if (!t.value) {
                  if (t.modifier) return;
                  let r = e.get(["--default-border-width"]) ?? "1px",
                    n = o.width(r);
                  return n ? [i(), ...n] : void 0;
                }
                if ("arbitrary" === t.value.kind) {
                  let r = t.value.value;
                  switch (
                    t.value.dataType ??
                    G(r, ["color", "line-width", "length"])
                  ) {
                    case "line-width":
                    case "length": {
                      if (t.modifier) return;
                      let e = o.width(r);
                      return e ? [i(), ...e] : void 0;
                    }
                    default:
                      return (
                        (r = Te(r, t.modifier, e)),
                        null === r ? void 0 : o.color(r)
                      );
                  }
                }
                {
                  let r = je(t, e, ["--border-color", "--color"]);
                  if (r) return o.color(r);
                }
                {
                  if (t.modifier) return;
                  let r = e.resolve(t.value.value, ["--border-width"]);
                  if (r) {
                    let e = o.width(r);
                    return e ? [i(), ...e] : void 0;
                  }
                  if (de(t.value.value)) {
                    let e = o.width(`${t.value.value}px`);
                    return e ? [i(), ...e] : void 0;
                  }
                }
              }),
                r(n, () => [
                  {
                    values: ["current", "inherit", "transparent"],
                    valueThemeKeys: ["--border-color", "--color"],
                    modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
                    hasDefaultValue: !0,
                  },
                  {
                    values: ["0", "2", "4", "8"],
                    valueThemeKeys: ["--border-width"],
                  },
                ]);
            },
            i = () => z([$e("--tw-border-style", "solid")]);
          a("border", {
            width: (e) => [
              y("border-style", "var(--tw-border-style)"),
              y("border-width", e),
            ],
            color: (e) => [y("border-color", e)],
          }),
            a("border-x", {
              width: (e) => [
                y("border-inline-style", "var(--tw-border-style)"),
                y("border-inline-width", e),
              ],
              color: (e) => [y("border-inline-color", e)],
            }),
            a("border-y", {
              width: (e) => [
                y("border-block-style", "var(--tw-border-style)"),
                y("border-block-width", e),
              ],
              color: (e) => [y("border-block-color", e)],
            }),
            a("border-s", {
              width: (e) => [
                y("border-inline-start-style", "var(--tw-border-style)"),
                y("border-inline-start-width", e),
              ],
              color: (e) => [y("border-inline-start-color", e)],
            }),
            a("border-e", {
              width: (e) => [
                y("border-inline-end-style", "var(--tw-border-style)"),
                y("border-inline-end-width", e),
              ],
              color: (e) => [y("border-inline-end-color", e)],
            }),
            a("border-t", {
              width: (e) => [
                y("border-top-style", "var(--tw-border-style)"),
                y("border-top-width", e),
              ],
              color: (e) => [y("border-top-color", e)],
            }),
            a("border-r", {
              width: (e) => [
                y("border-right-style", "var(--tw-border-style)"),
                y("border-right-width", e),
              ],
              color: (e) => [y("border-right-color", e)],
            }),
            a("border-b", {
              width: (e) => [
                y("border-bottom-style", "var(--tw-border-style)"),
                y("border-bottom-width", e),
              ],
              color: (e) => [y("border-bottom-color", e)],
            }),
            a("border-l", {
              width: (e) => [
                y("border-left-style", "var(--tw-border-style)"),
                y("border-left-width", e),
              ],
              color: (e) => [y("border-left-color", e)],
            }),
            o("divide-x", {
              defaultValue: e.get(["--default-border-width"]) ?? "1px",
              themeKeys: ["--divide-width", "--border-width"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}px` : null),
              handle: (e) => [
                z([$e("--tw-divide-x-reverse", "0")]),
                w(":where(& > :not(:last-child))", [
                  y("--tw-sort", "divide-x-width"),
                  i(),
                  y("--tw-divide-x-reverse", "0"),
                  y("border-inline-style", "var(--tw-border-style)"),
                  y(
                    "border-inline-start-width",
                    `calc(${e} * var(--tw-divide-x-reverse))`,
                  ),
                  y(
                    "border-inline-end-width",
                    `calc(${e} * calc(1 - var(--tw-divide-x-reverse)))`,
                  ),
                ]),
              ],
            }),
            o("divide-y", {
              defaultValue: e.get(["--default-border-width"]) ?? "1px",
              themeKeys: ["--divide-width", "--border-width"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}px` : null),
              handle: (e) => [
                z([$e("--tw-divide-y-reverse", "0")]),
                w(":where(& > :not(:last-child))", [
                  y("--tw-sort", "divide-y-width"),
                  i(),
                  y("--tw-divide-y-reverse", "0"),
                  y("border-bottom-style", "var(--tw-border-style)"),
                  y("border-top-style", "var(--tw-border-style)"),
                  y(
                    "border-top-width",
                    `calc(${e} * var(--tw-divide-y-reverse))`,
                  ),
                  y(
                    "border-bottom-width",
                    `calc(${e} * calc(1 - var(--tw-divide-y-reverse)))`,
                  ),
                ]),
              ],
            }),
            r("divide-x", () => [
              {
                values: ["0", "2", "4", "8"],
                valueThemeKeys: ["--divide-width", "--border-width"],
                hasDefaultValue: !0,
              },
            ]),
            r("divide-y", () => [
              {
                values: ["0", "2", "4", "8"],
                valueThemeKeys: ["--divide-width", "--border-width"],
                hasDefaultValue: !0,
              },
            ]),
            n("divide-x-reverse", [
              () => z([$e("--tw-divide-x-reverse", "0")]),
              () =>
                w(":where(& > :not(:last-child))", [
                  y("--tw-divide-x-reverse", "1"),
                ]),
            ]),
            n("divide-y-reverse", [
              () => z([$e("--tw-divide-y-reverse", "0")]),
              () =>
                w(":where(& > :not(:last-child))", [
                  y("--tw-divide-y-reverse", "1"),
                ]),
            ]);
          for (let e of ["solid", "dashed", "dotted", "double", "none"])
            n(`divide-${e}`, [
              () =>
                w(":where(& > :not(:last-child))", [
                  y("--tw-sort", "divide-style"),
                  y("--tw-border-style", e),
                  y("border-style", e),
                ]),
            ]);
        }
        n("bg-auto", [["background-size", "auto"]]),
          n("bg-cover", [["background-size", "cover"]]),
          n("bg-contain", [["background-size", "contain"]]),
          o("bg-size", {
            handle(e) {
              if (e) return [y("background-size", e)];
            },
          }),
          n("bg-fixed", [["background-attachment", "fixed"]]),
          n("bg-local", [["background-attachment", "local"]]),
          n("bg-scroll", [["background-attachment", "scroll"]]),
          n("bg-top", [["background-position", "top"]]),
          n("bg-top-left", [["background-position", "left top"]]),
          n("bg-top-right", [["background-position", "right top"]]),
          n("bg-bottom", [["background-position", "bottom"]]),
          n("bg-bottom-left", [["background-position", "left bottom"]]),
          n("bg-bottom-right", [["background-position", "right bottom"]]),
          n("bg-left", [["background-position", "left"]]),
          n("bg-right", [["background-position", "right"]]),
          n("bg-center", [["background-position", "center"]]),
          o("bg-position", {
            handle(e) {
              if (e) return [y("background-position", e)];
            },
          }),
          n("bg-repeat", [["background-repeat", "repeat"]]),
          n("bg-no-repeat", [["background-repeat", "no-repeat"]]),
          n("bg-repeat-x", [["background-repeat", "repeat-x"]]),
          n("bg-repeat-y", [["background-repeat", "repeat-y"]]),
          n("bg-repeat-round", [["background-repeat", "round"]]),
          n("bg-repeat-space", [["background-repeat", "space"]]),
          n("bg-none", [["background-image", "none"]]);
        {
          let e = function (e) {
              let t = "in oklab";
              if ("named" === e?.kind)
                switch (e.value) {
                  case "longer":
                  case "shorter":
                  case "increasing":
                  case "decreasing":
                    t = `in oklch ${e.value} hue`;
                    break;
                  default:
                    t = `in ${e.value}`;
                }
              else "arbitrary" === e?.kind && (t = e.value);
              return t;
            },
            n = function ({ negative: t }) {
              return (r) => {
                if (!r.value) return;
                if ("arbitrary" === r.value.kind) {
                  if (r.modifier) return;
                  let e = r.value.value;
                  return "angle" === (r.value.dataType ?? G(e, ["angle"]))
                    ? ((e = t ? `calc(${e} * -1)` : `${e}`),
                      [
                        y("--tw-gradient-position", e),
                        y(
                          "background-image",
                          `linear-gradient(var(--tw-gradient-stops,${e}))`,
                        ),
                      ])
                    : t
                      ? void 0
                      : [
                          y("--tw-gradient-position", e),
                          y(
                            "background-image",
                            `linear-gradient(var(--tw-gradient-stops,${e}))`,
                          ),
                        ];
                }
                let n = r.value.value;
                if (!t && i.has(n)) n = i.get(n);
                else {
                  if (!de(n)) return;
                  n = t ? `calc(${n}deg * -1)` : `${n}deg`;
                }
                let o = e(r.modifier);
                return [
                  y("--tw-gradient-position", `${n}`),
                  b(
                    "@supports (background-image: linear-gradient(in lab, red, red))",
                    [y("--tw-gradient-position", `${n} ${o}`)],
                  ),
                  y(
                    "background-image",
                    "linear-gradient(var(--tw-gradient-stops))",
                  ),
                ];
              };
            },
            o = function ({ negative: t }) {
              return (r) => {
                if ("arbitrary" === r.value?.kind) {
                  if (r.modifier) return;
                  let e = r.value.value;
                  return [
                    y("--tw-gradient-position", e),
                    y(
                      "background-image",
                      `conic-gradient(var(--tw-gradient-stops,${e}))`,
                    ),
                  ];
                }
                let n = e(r.modifier);
                if (!r.value)
                  return [
                    y("--tw-gradient-position", n),
                    y(
                      "background-image",
                      "conic-gradient(var(--tw-gradient-stops))",
                    ),
                  ];
                let o = r.value.value;
                return de(o)
                  ? ((o = t ? `calc(${o}deg * -1)` : `${o}deg`),
                    [
                      y("--tw-gradient-position", `from ${o} ${n}`),
                      y(
                        "background-image",
                        "conic-gradient(var(--tw-gradient-stops))",
                      ),
                    ])
                  : void 0;
              };
            },
            a = [
              "oklab",
              "oklch",
              "srgb",
              "hsl",
              "longer",
              "shorter",
              "increasing",
              "decreasing",
            ],
            i = new Map([
              ["to-t", "to top"],
              ["to-tr", "to top right"],
              ["to-r", "to right"],
              ["to-br", "to bottom right"],
              ["to-b", "to bottom"],
              ["to-bl", "to bottom left"],
              ["to-l", "to left"],
              ["to-tl", "to top left"],
            ]);
          t.functional("-bg-linear", n({ negative: !0 })),
            t.functional("bg-linear", n({ negative: !1 })),
            r("bg-linear", () => [
              { values: [...i.keys()], modifiers: a },
              {
                values: [
                  "0",
                  "30",
                  "60",
                  "90",
                  "120",
                  "150",
                  "180",
                  "210",
                  "240",
                  "270",
                  "300",
                  "330",
                ],
                supportsNegative: !0,
                modifiers: a,
              },
            ]),
            t.functional("-bg-conic", o({ negative: !0 })),
            t.functional("bg-conic", o({ negative: !1 })),
            r("bg-conic", () => [
              { hasDefaultValue: !0, modifiers: a },
              {
                values: [
                  "0",
                  "30",
                  "60",
                  "90",
                  "120",
                  "150",
                  "180",
                  "210",
                  "240",
                  "270",
                  "300",
                  "330",
                ],
                supportsNegative: !0,
                modifiers: a,
              },
            ]),
            t.functional("bg-radial", (t) => {
              if (!t.value)
                return [
                  y("--tw-gradient-position", e(t.modifier)),
                  y(
                    "background-image",
                    "radial-gradient(var(--tw-gradient-stops))",
                  ),
                ];
              if ("arbitrary" === t.value.kind) {
                if (t.modifier) return;
                let e = t.value.value;
                return [
                  y("--tw-gradient-position", e),
                  y(
                    "background-image",
                    `radial-gradient(var(--tw-gradient-stops,${e}))`,
                  ),
                ];
              }
            }),
            r("bg-radial", () => [{ hasDefaultValue: !0, modifiers: a }]);
        }
        t.functional("bg", (t) => {
          if (t.value) {
            if ("arbitrary" === t.value.kind) {
              let r = t.value.value;
              switch (
                t.value.dataType ??
                G(r, [
                  "image",
                  "color",
                  "percentage",
                  "position",
                  "bg-size",
                  "length",
                  "url",
                ])
              ) {
                case "percentage":
                case "position":
                  return t.modifier ? void 0 : [y("background-position", r)];
                case "bg-size":
                case "length":
                case "size":
                  return t.modifier ? void 0 : [y("background-size", r)];
                case "image":
                case "url":
                  return t.modifier ? void 0 : [y("background-image", r)];
                default:
                  return (
                    (r = Te(r, t.modifier, e)),
                    null === r ? void 0 : [y("background-color", r)]
                  );
              }
            }
            {
              let r = je(t, e, ["--background-color", "--color"]);
              if (r) return [y("background-color", r)];
            }
            {
              if (t.modifier) return;
              let r = e.resolve(t.value.value, ["--background-image"]);
              if (r) return [y("background-image", r)];
            }
          }
        }),
          r("bg", () => [
            {
              values: ["current", "inherit", "transparent"],
              valueThemeKeys: ["--background-color", "--color"],
              modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
            },
            { values: [], valueThemeKeys: ["--background-image"] },
          ]);
        let h = () =>
          z([
            $e("--tw-gradient-position"),
            $e("--tw-gradient-from", "#0000", "<color>"),
            $e("--tw-gradient-via", "#0000", "<color>"),
            $e("--tw-gradient-to", "#0000", "<color>"),
            $e("--tw-gradient-stops"),
            $e("--tw-gradient-via-stops"),
            $e("--tw-gradient-from-position", "0%", "<length-percentage>"),
            $e("--tw-gradient-via-position", "50%", "<length-percentage>"),
            $e("--tw-gradient-to-position", "100%", "<length-percentage>"),
          ]);
        function m(n, o) {
          t.functional(n, (t) => {
            if (t.value) {
              if ("arbitrary" === t.value.kind) {
                let r = t.value.value;
                switch (
                  t.value.dataType ??
                  G(r, ["color", "length", "percentage"])
                ) {
                  case "length":
                  case "percentage":
                    return t.modifier ? void 0 : o.position(r);
                  default:
                    return (
                      (r = Te(r, t.modifier, e)),
                      null === r ? void 0 : o.color(r)
                    );
                }
              }
              {
                let r = je(t, e, ["--background-color", "--color"]);
                if (r) return o.color(r);
              }
              {
                if (t.modifier) return;
                let r = e.resolve(t.value.value, [
                  "--gradient-color-stop-positions",
                ]);
                if (r) return o.position(r);
                if (
                  "%" === t.value.value[t.value.value.length - 1] &&
                  de(t.value.value.slice(0, -1))
                )
                  return o.position(t.value.value);
              }
            }
          }),
            r(n, () => [
              {
                values: ["current", "inherit", "transparent"],
                valueThemeKeys: ["--background-color", "--color"],
                modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
              },
              {
                values: Array.from({ length: 21 }, (e, t) => 5 * t + "%"),
                valueThemeKeys: ["--gradient-color-stop-positions"],
              },
            ]);
        }
        m("from", {
          color: (e) => [
            h(),
            y("--tw-sort", "--tw-gradient-from"),
            y("--tw-gradient-from", e),
            y(
              "--tw-gradient-stops",
              "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))",
            ),
          ],
          position: (e) => [h(), y("--tw-gradient-from-position", e)],
        }),
          n("via-none", [["--tw-gradient-via-stops", "initial"]]),
          m("via", {
            color: (e) => [
              h(),
              y("--tw-sort", "--tw-gradient-via"),
              y("--tw-gradient-via", e),
              y(
                "--tw-gradient-via-stops",
                "var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)",
              ),
              y("--tw-gradient-stops", "var(--tw-gradient-via-stops)"),
            ],
            position: (e) => [h(), y("--tw-gradient-via-position", e)],
          }),
          m("to", {
            color: (e) => [
              h(),
              y("--tw-sort", "--tw-gradient-to"),
              y("--tw-gradient-to", e),
              y(
                "--tw-gradient-stops",
                "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))",
              ),
            ],
            position: (e) => [h(), y("--tw-gradient-to-position", e)],
          }),
          n("mask-none", [["mask-image", "none"]]),
          t.functional("mask", (e) => {
            if (!e.value || e.modifier || "arbitrary" !== e.value.kind) return;
            let t = e.value.value;
            switch (
              e.value.dataType ??
              G(t, [
                "image",
                "percentage",
                "position",
                "bg-size",
                "length",
                "url",
              ])
            ) {
              case "percentage":
              case "position":
                return e.modifier ? void 0 : [y("mask-position", t)];
              case "bg-size":
              case "length":
              case "size":
                return [y("mask-size", t)];
              default:
                return [y("mask-image", t)];
            }
          }),
          n("mask-add", [["mask-composite", "add"]]),
          n("mask-subtract", [["mask-composite", "subtract"]]),
          n("mask-intersect", [["mask-composite", "intersect"]]),
          n("mask-exclude", [["mask-composite", "exclude"]]),
          n("mask-alpha", [["mask-mode", "alpha"]]),
          n("mask-luminance", [["mask-mode", "luminance"]]),
          n("mask-match", [["mask-mode", "match-source"]]),
          n("mask-type-alpha", [["mask-type", "alpha"]]),
          n("mask-type-luminance", [["mask-type", "luminance"]]),
          n("mask-auto", [["mask-size", "auto"]]),
          n("mask-cover", [["mask-size", "cover"]]),
          n("mask-contain", [["mask-size", "contain"]]),
          o("mask-size", {
            handle(e) {
              if (e) return [y("mask-size", e)];
            },
          }),
          n("mask-top", [["mask-position", "top"]]),
          n("mask-top-left", [["mask-position", "left top"]]),
          n("mask-top-right", [["mask-position", "right top"]]),
          n("mask-bottom", [["mask-position", "bottom"]]),
          n("mask-bottom-left", [["mask-position", "left bottom"]]),
          n("mask-bottom-right", [["mask-position", "right bottom"]]),
          n("mask-left", [["mask-position", "left"]]),
          n("mask-right", [["mask-position", "right"]]),
          n("mask-center", [["mask-position", "center"]]),
          o("mask-position", {
            handle(e) {
              if (e) return [y("mask-position", e)];
            },
          }),
          n("mask-repeat", [["mask-repeat", "repeat"]]),
          n("mask-no-repeat", [["mask-repeat", "no-repeat"]]),
          n("mask-repeat-x", [["mask-repeat", "repeat-x"]]),
          n("mask-repeat-y", [["mask-repeat", "repeat-y"]]),
          n("mask-repeat-round", [["mask-repeat", "round"]]),
          n("mask-repeat-space", [["mask-repeat", "space"]]),
          n("mask-clip-border", [["mask-clip", "border-box"]]),
          n("mask-clip-padding", [["mask-clip", "padding-box"]]),
          n("mask-clip-content", [["mask-clip", "content-box"]]),
          n("mask-clip-fill", [["mask-clip", "fill-box"]]),
          n("mask-clip-stroke", [["mask-clip", "stroke-box"]]),
          n("mask-clip-view", [["mask-clip", "view-box"]]),
          n("mask-no-clip", [["mask-clip", "no-clip"]]),
          n("mask-origin-border", [["mask-origin", "border-box"]]),
          n("mask-origin-padding", [["mask-origin", "padding-box"]]),
          n("mask-origin-content", [["mask-origin", "content-box"]]),
          n("mask-origin-fill", [["mask-origin", "fill-box"]]),
          n("mask-origin-stroke", [["mask-origin", "stroke-box"]]),
          n("mask-origin-view", [["mask-origin", "view-box"]]);
        let g = () =>
          z([
            $e("--tw-mask-linear", "linear-gradient(#fff, #fff)"),
            $e("--tw-mask-radial", "linear-gradient(#fff, #fff)"),
            $e("--tw-mask-conic", "linear-gradient(#fff, #fff)"),
          ]);
        function v(n, o) {
          t.functional(n, (t) => {
            if (t.value) {
              if ("arbitrary" === t.value.kind) {
                let r = t.value.value;
                switch (
                  t.value.dataType ??
                  G(r, ["length", "percentage", "color"])
                ) {
                  case "color":
                    return (
                      (r = Te(r, t.modifier, e)),
                      null === r ? void 0 : o.color(r)
                    );
                  case "percentage":
                    return t.modifier || !de(r.slice(0, -1))
                      ? void 0
                      : o.position(r);
                  default:
                    return t.modifier ? void 0 : o.position(r);
                }
              }
              {
                let r = je(t, e, ["--background-color", "--color"]);
                if (r) return o.color(r);
              }
              {
                if (t.modifier) return;
                let r = G(t.value.value, ["number", "percentage"]);
                if (!r) return;
                switch (r) {
                  case "number": {
                    let r = e.resolve(null, ["--spacing"]);
                    return r && pe(t.value.value)
                      ? o.position(`calc(${r} * ${t.value.value})`)
                      : void 0;
                  }
                  case "percentage":
                    return de(t.value.value.slice(0, -1))
                      ? o.position(t.value.value)
                      : void 0;
                  default:
                    return;
                }
              }
            }
          }),
            r(n, () => [
              {
                values: ["current", "inherit", "transparent"],
                valueThemeKeys: ["--background-color", "--color"],
                modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
              },
              {
                values: Array.from({ length: 21 }, (e, t) => 5 * t + "%"),
                valueThemeKeys: ["--gradient-color-stop-positions"],
              },
            ]),
            r(n, () => [
              { values: Array.from({ length: 21 }, (e, t) => 5 * t + "%") },
              { values: e.get(["--spacing"]) ? ye : [] },
              {
                values: ["current", "inherit", "transparent"],
                valueThemeKeys: ["--background-color", "--color"],
                modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
              },
            ]);
        }
        let x = () =>
          z([
            $e("--tw-mask-left", "linear-gradient(#fff, #fff)"),
            $e("--tw-mask-right", "linear-gradient(#fff, #fff)"),
            $e("--tw-mask-bottom", "linear-gradient(#fff, #fff)"),
            $e("--tw-mask-top", "linear-gradient(#fff, #fff)"),
          ]);
        function $(e, t, r) {
          v(e, {
            color(e) {
              let n = [
                g(),
                x(),
                y(
                  "mask-image",
                  "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)",
                ),
                y("mask-composite", "intersect"),
                y(
                  "--tw-mask-linear",
                  "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)",
                ),
              ];
              for (let o of ["top", "right", "bottom", "left"])
                r[o] &&
                  (n.push(
                    y(
                      `--tw-mask-${o}`,
                      `linear-gradient(to ${o}, var(--tw-mask-${o}-from-color) var(--tw-mask-${o}-from-position), var(--tw-mask-${o}-to-color) var(--tw-mask-${o}-to-position))`,
                    ),
                  ),
                  n.push(
                    z([
                      $e(`--tw-mask-${o}-from-position`, "0%"),
                      $e(`--tw-mask-${o}-to-position`, "100%"),
                      $e(`--tw-mask-${o}-from-color`, "black"),
                      $e(`--tw-mask-${o}-to-color`, "transparent"),
                    ]),
                  ),
                  n.push(y(`--tw-mask-${o}-${t}-color`, e)));
              return n;
            },
            position(e) {
              let n = [
                g(),
                x(),
                y(
                  "mask-image",
                  "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)",
                ),
                y("mask-composite", "intersect"),
                y(
                  "--tw-mask-linear",
                  "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)",
                ),
              ];
              for (let o of ["top", "right", "bottom", "left"])
                r[o] &&
                  (n.push(
                    y(
                      `--tw-mask-${o}`,
                      `linear-gradient(to ${o}, var(--tw-mask-${o}-from-color) var(--tw-mask-${o}-from-position), var(--tw-mask-${o}-to-color) var(--tw-mask-${o}-to-position))`,
                    ),
                  ),
                  n.push(
                    z([
                      $e(`--tw-mask-${o}-from-position`, "0%"),
                      $e(`--tw-mask-${o}-to-position`, "100%"),
                      $e(`--tw-mask-${o}-from-color`, "black"),
                      $e(`--tw-mask-${o}-to-color`, "transparent"),
                    ]),
                  ),
                  n.push(y(`--tw-mask-${o}-${t}-position`, e)));
              return n;
            },
          });
        }
        $("mask-x-from", "from", { top: !1, right: !0, bottom: !1, left: !0 }),
          $("mask-x-to", "to", { top: !1, right: !0, bottom: !1, left: !0 }),
          $("mask-y-from", "from", {
            top: !0,
            right: !1,
            bottom: !0,
            left: !1,
          }),
          $("mask-y-to", "to", { top: !0, right: !1, bottom: !0, left: !1 }),
          $("mask-t-from", "from", {
            top: !0,
            right: !1,
            bottom: !1,
            left: !1,
          }),
          $("mask-t-to", "to", { top: !0, right: !1, bottom: !1, left: !1 }),
          $("mask-r-from", "from", {
            top: !1,
            right: !0,
            bottom: !1,
            left: !1,
          }),
          $("mask-r-to", "to", { top: !1, right: !0, bottom: !1, left: !1 }),
          $("mask-b-from", "from", {
            top: !1,
            right: !1,
            bottom: !0,
            left: !1,
          }),
          $("mask-b-to", "to", { top: !1, right: !1, bottom: !0, left: !1 }),
          $("mask-l-from", "from", {
            top: !1,
            right: !1,
            bottom: !1,
            left: !0,
          }),
          $("mask-l-to", "to", { top: !1, right: !1, bottom: !1, left: !0 });
        let A = () =>
          z([
            $e("--tw-mask-linear-position", "0deg"),
            $e("--tw-mask-linear-from-position", "0%"),
            $e("--tw-mask-linear-to-position", "100%"),
            $e("--tw-mask-linear-from-color", "black"),
            $e("--tw-mask-linear-to-color", "transparent"),
          ]);
        o("mask-linear", {
          defaultValue: null,
          supportsNegative: !0,
          supportsFractions: !1,
          handleBareValue: (e) =>
            de(e.value) ? `calc(1deg * ${e.value})` : null,
          handleNegativeBareValue: (e) =>
            de(e.value) ? `calc(1deg * -${e.value})` : null,
          handle: (e) => [
            g(),
            A(),
            y(
              "mask-image",
              "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)",
            ),
            y("mask-composite", "intersect"),
            y(
              "--tw-mask-linear",
              "linear-gradient(var(--tw-mask-linear-stops, var(--tw-mask-linear-position)))",
            ),
            y("--tw-mask-linear-position", e),
          ],
        }),
          r("mask-linear", () => [
            {
              supportsNegative: !0,
              values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"],
            },
          ]),
          v("mask-linear-from", {
            color: (e) => [
              g(),
              A(),
              y(
                "mask-image",
                "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)",
              ),
              y("mask-composite", "intersect"),
              y(
                "--tw-mask-linear-stops",
                "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)",
              ),
              y(
                "--tw-mask-linear",
                "linear-gradient(var(--tw-mask-linear-stops))",
              ),
              y("--tw-mask-linear-from-color", e),
            ],
            position: (e) => [
              g(),
              A(),
              y(
                "mask-image",
                "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)",
              ),
              y("mask-composite", "intersect"),
              y(
                "--tw-mask-linear-stops",
                "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)",
              ),
              y(
                "--tw-mask-linear",
                "linear-gradient(var(--tw-mask-linear-stops))",
              ),
              y("--tw-mask-linear-from-position", e),
            ],
          }),
          v("mask-linear-to", {
            color: (e) => [
              g(),
              A(),
              y(
                "mask-image",
                "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)",
              ),
              y("mask-composite", "intersect"),
              y(
                "--tw-mask-linear-stops",
                "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)",
              ),
              y(
                "--tw-mask-linear",
                "linear-gradient(var(--tw-mask-linear-stops))",
              ),
              y("--tw-mask-linear-to-color", e),
            ],
            position: (e) => [
              g(),
              A(),
              y(
                "mask-image",
                "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)",
              ),
              y("mask-composite", "intersect"),
              y(
                "--tw-mask-linear-stops",
                "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)",
              ),
              y(
                "--tw-mask-linear",
                "linear-gradient(var(--tw-mask-linear-stops))",
              ),
              y("--tw-mask-linear-to-position", e),
            ],
          });
        let T = () =>
          z([
            $e("--tw-mask-radial-from-position", "0%"),
            $e("--tw-mask-radial-to-position", "100%"),
            $e("--tw-mask-radial-from-color", "black"),
            $e("--tw-mask-radial-to-color", "transparent"),
            $e("--tw-mask-radial-shape", "ellipse"),
            $e("--tw-mask-radial-size", "farthest-corner"),
            $e("--tw-mask-radial-position", "center"),
          ]);
        n("mask-circle", [["--tw-mask-radial-shape", "circle"]]),
          n("mask-ellipse", [["--tw-mask-radial-shape", "ellipse"]]),
          n("mask-radial-closest-side", [
            ["--tw-mask-radial-size", "closest-side"],
          ]),
          n("mask-radial-farthest-side", [
            ["--tw-mask-radial-size", "farthest-side"],
          ]),
          n("mask-radial-closest-corner", [
            ["--tw-mask-radial-size", "closest-corner"],
          ]),
          n("mask-radial-farthest-corner", [
            ["--tw-mask-radial-size", "farthest-corner"],
          ]),
          n("mask-radial-at-top", [["--tw-mask-radial-position", "top"]]),
          n("mask-radial-at-top-left", [
            ["--tw-mask-radial-position", "top left"],
          ]),
          n("mask-radial-at-top-right", [
            ["--tw-mask-radial-position", "top right"],
          ]),
          n("mask-radial-at-bottom", [["--tw-mask-radial-position", "bottom"]]),
          n("mask-radial-at-bottom-left", [
            ["--tw-mask-radial-position", "bottom left"],
          ]),
          n("mask-radial-at-bottom-right", [
            ["--tw-mask-radial-position", "bottom right"],
          ]),
          n("mask-radial-at-left", [["--tw-mask-radial-position", "left"]]),
          n("mask-radial-at-right", [["--tw-mask-radial-position", "right"]]),
          n("mask-radial-at-center", [["--tw-mask-radial-position", "center"]]),
          o("mask-radial-at", {
            defaultValue: null,
            supportsNegative: !1,
            supportsFractions: !1,
            handle: (e) => [y("--tw-mask-radial-position", e)],
          }),
          o("mask-radial", {
            defaultValue: null,
            supportsNegative: !1,
            supportsFractions: !1,
            handle: (e) => [
              g(),
              T(),
              y(
                "mask-image",
                "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)",
              ),
              y("mask-composite", "intersect"),
              y(
                "--tw-mask-radial",
                "radial-gradient(var(--tw-mask-radial-stops, var(--tw-mask-radial-size)))",
              ),
              y("--tw-mask-radial-size", e),
            ],
          }),
          v("mask-radial-from", {
            color: (e) => [
              g(),
              T(),
              y(
                "mask-image",
                "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)",
              ),
              y("mask-composite", "intersect"),
              y(
                "--tw-mask-radial-stops",
                "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)",
              ),
              y(
                "--tw-mask-radial",
                "radial-gradient(var(--tw-mask-radial-stops))",
              ),
              y("--tw-mask-radial-from-color", e),
            ],
            position: (e) => [
              g(),
              T(),
              y(
                "mask-image",
                "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)",
              ),
              y("mask-composite", "intersect"),
              y(
                "--tw-mask-radial-stops",
                "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)",
              ),
              y(
                "--tw-mask-radial",
                "radial-gradient(var(--tw-mask-radial-stops))",
              ),
              y("--tw-mask-radial-from-position", e),
            ],
          }),
          v("mask-radial-to", {
            color: (e) => [
              g(),
              T(),
              y(
                "mask-image",
                "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)",
              ),
              y("mask-composite", "intersect"),
              y(
                "--tw-mask-radial-stops",
                "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)",
              ),
              y(
                "--tw-mask-radial",
                "radial-gradient(var(--tw-mask-radial-stops))",
              ),
              y("--tw-mask-radial-to-color", e),
            ],
            position: (e) => [
              g(),
              T(),
              y(
                "mask-image",
                "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)",
              ),
              y("mask-composite", "intersect"),
              y(
                "--tw-mask-radial-stops",
                "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)",
              ),
              y(
                "--tw-mask-radial",
                "radial-gradient(var(--tw-mask-radial-stops))",
              ),
              y("--tw-mask-radial-to-position", e),
            ],
          });
        let j = () =>
          z([
            $e("--tw-mask-conic-position", "0deg"),
            $e("--tw-mask-conic-from-position", "0%"),
            $e("--tw-mask-conic-to-position", "100%"),
            $e("--tw-mask-conic-from-color", "black"),
            $e("--tw-mask-conic-to-color", "transparent"),
          ]);
        o("mask-conic", {
          defaultValue: null,
          supportsNegative: !0,
          supportsFractions: !1,
          handleBareValue: (e) =>
            de(e.value) ? `calc(1deg * ${e.value})` : null,
          handleNegativeBareValue: (e) =>
            de(e.value) ? `calc(1deg * -${e.value})` : null,
          handle: (e) => [
            g(),
            j(),
            y(
              "mask-image",
              "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)",
            ),
            y("mask-composite", "intersect"),
            y(
              "--tw-mask-conic",
              "conic-gradient(var(--tw-mask-conic-stops, var(--tw-mask-conic-position)))",
            ),
            y("--tw-mask-conic-position", e),
          ],
        }),
          r("mask-conic", () => [
            {
              supportsNegative: !0,
              values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"],
            },
          ]),
          v("mask-conic-from", {
            color: (e) => [
              g(),
              j(),
              y(
                "mask-image",
                "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)",
              ),
              y("mask-composite", "intersect"),
              y(
                "--tw-mask-conic-stops",
                "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)",
              ),
              y(
                "--tw-mask-conic",
                "conic-gradient(var(--tw-mask-conic-stops))",
              ),
              y("--tw-mask-conic-from-color", e),
            ],
            position: (e) => [
              g(),
              j(),
              y(
                "mask-image",
                "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)",
              ),
              y("mask-composite", "intersect"),
              y(
                "--tw-mask-conic-stops",
                "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)",
              ),
              y(
                "--tw-mask-conic",
                "conic-gradient(var(--tw-mask-conic-stops))",
              ),
              y("--tw-mask-conic-from-position", e),
            ],
          }),
          v("mask-conic-to", {
            color: (e) => [
              g(),
              j(),
              y(
                "mask-image",
                "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)",
              ),
              y("mask-composite", "intersect"),
              y(
                "--tw-mask-conic-stops",
                "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)",
              ),
              y(
                "--tw-mask-conic",
                "conic-gradient(var(--tw-mask-conic-stops))",
              ),
              y("--tw-mask-conic-to-color", e),
            ],
            position: (e) => [
              g(),
              j(),
              y(
                "mask-image",
                "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)",
              ),
              y("mask-composite", "intersect"),
              y(
                "--tw-mask-conic-stops",
                "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)",
              ),
              y(
                "--tw-mask-conic",
                "conic-gradient(var(--tw-mask-conic-stops))",
              ),
              y("--tw-mask-conic-to-position", e),
            ],
          }),
          n("box-decoration-slice", [
            ["-webkit-box-decoration-break", "slice"],
            ["box-decoration-break", "slice"],
          ]),
          n("box-decoration-clone", [
            ["-webkit-box-decoration-break", "clone"],
            ["box-decoration-break", "clone"],
          ]),
          n("bg-clip-text", [["background-clip", "text"]]),
          n("bg-clip-border", [["background-clip", "border-box"]]),
          n("bg-clip-padding", [["background-clip", "padding-box"]]),
          n("bg-clip-content", [["background-clip", "content-box"]]),
          n("bg-origin-border", [["background-origin", "border-box"]]),
          n("bg-origin-padding", [["background-origin", "padding-box"]]),
          n("bg-origin-content", [["background-origin", "content-box"]]);
        for (let e of [
          "normal",
          "multiply",
          "screen",
          "overlay",
          "darken",
          "lighten",
          "color-dodge",
          "color-burn",
          "hard-light",
          "soft-light",
          "difference",
          "exclusion",
          "hue",
          "saturation",
          "color",
          "luminosity",
        ])
          n(`bg-blend-${e}`, [["background-blend-mode", e]]),
            n(`mix-blend-${e}`, [["mix-blend-mode", e]]);
        n("mix-blend-plus-darker", [["mix-blend-mode", "plus-darker"]]),
          n("mix-blend-plus-lighter", [["mix-blend-mode", "plus-lighter"]]),
          n("fill-none", [["fill", "none"]]),
          t.functional("fill", (t) => {
            if (!t.value) return;
            if ("arbitrary" === t.value.kind) {
              let r = Te(t.value.value, t.modifier, e);
              return null === r ? void 0 : [y("fill", r)];
            }
            let r = je(t, e, ["--fill", "--color"]);
            return r ? [y("fill", r)] : void 0;
          }),
          r("fill", () => [
            {
              values: ["current", "inherit", "transparent"],
              valueThemeKeys: ["--fill", "--color"],
              modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
            },
          ]),
          n("stroke-none", [["stroke", "none"]]),
          t.functional("stroke", (t) => {
            if (t.value) {
              if ("arbitrary" === t.value.kind) {
                let r = t.value.value;
                switch (
                  t.value.dataType ??
                  G(r, ["color", "number", "length", "percentage"])
                ) {
                  case "number":
                  case "length":
                  case "percentage":
                    return t.modifier ? void 0 : [y("stroke-width", r)];
                  default:
                    return (
                      (r = Te(t.value.value, t.modifier, e)),
                      null === r ? void 0 : [y("stroke", r)]
                    );
                }
              }
              {
                let r = je(t, e, ["--stroke", "--color"]);
                if (r) return [y("stroke", r)];
              }
              {
                let r = e.resolve(t.value.value, ["--stroke-width"]);
                if (r) return [y("stroke-width", r)];
                if (de(t.value.value))
                  return [y("stroke-width", t.value.value)];
              }
            }
          }),
          r("stroke", () => [
            {
              values: ["current", "inherit", "transparent"],
              valueThemeKeys: ["--stroke", "--color"],
              modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
            },
            {
              values: ["0", "1", "2", "3"],
              valueThemeKeys: ["--stroke-width"],
            },
          ]),
          n("object-contain", [["object-fit", "contain"]]),
          n("object-cover", [["object-fit", "cover"]]),
          n("object-fill", [["object-fit", "fill"]]),
          n("object-none", [["object-fit", "none"]]),
          n("object-scale-down", [["object-fit", "scale-down"]]),
          n("object-top", [["object-position", "top"]]),
          n("object-top-left", [["object-position", "left top"]]),
          n("object-top-right", [["object-position", "right top"]]),
          n("object-bottom", [["object-position", "bottom"]]),
          n("object-bottom-left", [["object-position", "left bottom"]]),
          n("object-bottom-right", [["object-position", "right bottom"]]),
          n("object-left", [["object-position", "left"]]),
          n("object-right", [["object-position", "right"]]),
          n("object-center", [["object-position", "center"]]),
          o("object", {
            themeKeys: ["--object-position"],
            handle: (e) => [y("object-position", e)],
          });
        for (let [e, t] of [
          ["p", "padding"],
          ["px", "padding-inline"],
          ["py", "padding-block"],
          ["ps", "padding-inline-start"],
          ["pe", "padding-inline-end"],
          ["pt", "padding-top"],
          ["pr", "padding-right"],
          ["pb", "padding-bottom"],
          ["pl", "padding-left"],
        ])
          i(e, ["--padding", "--spacing"], (e) => [y(t, e)]);
        n("text-left", [["text-align", "left"]]),
          n("text-center", [["text-align", "center"]]),
          n("text-right", [["text-align", "right"]]),
          n("text-justify", [["text-align", "justify"]]),
          n("text-start", [["text-align", "start"]]),
          n("text-end", [["text-align", "end"]]),
          i(
            "indent",
            ["--text-indent", "--spacing"],
            (e) => [y("text-indent", e)],
            { supportsNegative: !0 },
          ),
          n("align-baseline", [["vertical-align", "baseline"]]),
          n("align-top", [["vertical-align", "top"]]),
          n("align-middle", [["vertical-align", "middle"]]),
          n("align-bottom", [["vertical-align", "bottom"]]),
          n("align-text-top", [["vertical-align", "text-top"]]),
          n("align-text-bottom", [["vertical-align", "text-bottom"]]),
          n("align-sub", [["vertical-align", "sub"]]),
          n("align-super", [["vertical-align", "super"]]),
          o("align", {
            themeKeys: [],
            handle: (e) => [y("vertical-align", e)],
          }),
          t.functional("font", (t) => {
            if (t.value && !t.modifier) {
              if ("arbitrary" === t.value.kind) {
                let e = t.value.value;
                switch (
                  t.value.dataType ??
                  G(e, ["number", "generic-name", "family-name"])
                ) {
                  case "generic-name":
                  case "family-name":
                    return [y("font-family", e)];
                  default:
                    return [
                      z([$e("--tw-font-weight")]),
                      y("--tw-font-weight", e),
                      y("font-weight", e),
                    ];
                }
              }
              {
                let r = e.resolveWith(
                  t.value.value,
                  ["--font"],
                  ["--font-feature-settings", "--font-variation-settings"],
                );
                if (r) {
                  let [e, t = {}] = r;
                  return [
                    y("font-family", e),
                    y("font-feature-settings", t["--font-feature-settings"]),
                    y(
                      "font-variation-settings",
                      t["--font-variation-settings"],
                    ),
                  ];
                }
              }
              {
                let r = e.resolve(t.value.value, ["--font-weight"]);
                if (r)
                  return [
                    z([$e("--tw-font-weight")]),
                    y("--tw-font-weight", r),
                    y("font-weight", r),
                  ];
              }
            }
          }),
          r("font", () => [
            { values: [], valueThemeKeys: ["--font"] },
            { values: [], valueThemeKeys: ["--font-weight"] },
          ]),
          n("uppercase", [["text-transform", "uppercase"]]),
          n("lowercase", [["text-transform", "lowercase"]]),
          n("capitalize", [["text-transform", "capitalize"]]),
          n("normal-case", [["text-transform", "none"]]),
          n("italic", [["font-style", "italic"]]),
          n("not-italic", [["font-style", "normal"]]),
          n("underline", [["text-decoration-line", "underline"]]),
          n("overline", [["text-decoration-line", "overline"]]),
          n("line-through", [["text-decoration-line", "line-through"]]),
          n("no-underline", [["text-decoration-line", "none"]]),
          n("font-stretch-normal", [["font-stretch", "normal"]]),
          n("font-stretch-ultra-condensed", [
            ["font-stretch", "ultra-condensed"],
          ]),
          n("font-stretch-extra-condensed", [
            ["font-stretch", "extra-condensed"],
          ]),
          n("font-stretch-condensed", [["font-stretch", "condensed"]]),
          n("font-stretch-semi-condensed", [
            ["font-stretch", "semi-condensed"],
          ]),
          n("font-stretch-semi-expanded", [["font-stretch", "semi-expanded"]]),
          n("font-stretch-expanded", [["font-stretch", "expanded"]]),
          n("font-stretch-extra-expanded", [
            ["font-stretch", "extra-expanded"],
          ]),
          n("font-stretch-ultra-expanded", [
            ["font-stretch", "ultra-expanded"],
          ]),
          o("font-stretch", {
            handleBareValue: ({ value: e }) => {
              if (!e.endsWith("%")) return null;
              let t = Number(e.slice(0, -1));
              return !de(t) || Number.isNaN(t) || t < 50 || t > 200 ? null : e;
            },
            handle: (e) => [y("font-stretch", e)],
          }),
          r("font-stretch", () => [
            {
              values: [
                "50%",
                "75%",
                "90%",
                "95%",
                "100%",
                "105%",
                "110%",
                "125%",
                "150%",
                "200%",
              ],
            },
          ]),
          a("placeholder", {
            themeKeys: ["--background-color", "--color"],
            handle: (e) => [
              w("&::placeholder", [
                y("--tw-sort", "placeholder-color"),
                y("color", e),
              ]),
            ],
          }),
          n("decoration-solid", [["text-decoration-style", "solid"]]),
          n("decoration-double", [["text-decoration-style", "double"]]),
          n("decoration-dotted", [["text-decoration-style", "dotted"]]),
          n("decoration-dashed", [["text-decoration-style", "dashed"]]),
          n("decoration-wavy", [["text-decoration-style", "wavy"]]),
          n("decoration-auto", [["text-decoration-thickness", "auto"]]),
          n("decoration-from-font", [
            ["text-decoration-thickness", "from-font"],
          ]),
          t.functional("decoration", (t) => {
            if (t.value) {
              if ("arbitrary" === t.value.kind) {
                let r = t.value.value;
                switch (
                  t.value.dataType ??
                  G(r, ["color", "length", "percentage"])
                ) {
                  case "length":
                  case "percentage":
                    return t.modifier
                      ? void 0
                      : [y("text-decoration-thickness", r)];
                  default:
                    return (
                      (r = Te(r, t.modifier, e)),
                      null === r ? void 0 : [y("text-decoration-color", r)]
                    );
                }
              }
              {
                let r = e.resolve(t.value.value, [
                  "--text-decoration-thickness",
                ]);
                if (r)
                  return t.modifier
                    ? void 0
                    : [y("text-decoration-thickness", r)];
                if (de(t.value.value))
                  return t.modifier
                    ? void 0
                    : [y("text-decoration-thickness", `${t.value.value}px`)];
              }
              {
                let r = je(t, e, ["--text-decoration-color", "--color"]);
                if (r) return [y("text-decoration-color", r)];
              }
            }
          }),
          r("decoration", () => [
            {
              values: ["current", "inherit", "transparent"],
              valueThemeKeys: ["--text-decoration-color", "--color"],
              modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
            },
            {
              values: ["0", "1", "2"],
              valueThemeKeys: ["--text-decoration-thickness"],
            },
          ]),
          n("animate-none", [["animation", "none"]]),
          o("animate", {
            themeKeys: ["--animate"],
            handle: (e) => [y("animation", e)],
          });
        {
          let a = [
              "var(--tw-blur,)",
              "var(--tw-brightness,)",
              "var(--tw-contrast,)",
              "var(--tw-grayscale,)",
              "var(--tw-hue-rotate,)",
              "var(--tw-invert,)",
              "var(--tw-saturate,)",
              "var(--tw-sepia,)",
              "var(--tw-drop-shadow,)",
            ].join(" "),
            i = [
              "var(--tw-backdrop-blur,)",
              "var(--tw-backdrop-brightness,)",
              "var(--tw-backdrop-contrast,)",
              "var(--tw-backdrop-grayscale,)",
              "var(--tw-backdrop-hue-rotate,)",
              "var(--tw-backdrop-invert,)",
              "var(--tw-backdrop-opacity,)",
              "var(--tw-backdrop-saturate,)",
              "var(--tw-backdrop-sepia,)",
            ].join(" "),
            l = () =>
              z([
                $e("--tw-blur"),
                $e("--tw-brightness"),
                $e("--tw-contrast"),
                $e("--tw-grayscale"),
                $e("--tw-hue-rotate"),
                $e("--tw-invert"),
                $e("--tw-opacity"),
                $e("--tw-saturate"),
                $e("--tw-sepia"),
                $e("--tw-drop-shadow"),
                $e("--tw-drop-shadow-color"),
                $e("--tw-drop-shadow-alpha", "100%", "<percentage>"),
                $e("--tw-drop-shadow-size"),
              ]),
            s = () =>
              z([
                $e("--tw-backdrop-blur"),
                $e("--tw-backdrop-brightness"),
                $e("--tw-backdrop-contrast"),
                $e("--tw-backdrop-grayscale"),
                $e("--tw-backdrop-hue-rotate"),
                $e("--tw-backdrop-invert"),
                $e("--tw-backdrop-opacity"),
                $e("--tw-backdrop-saturate"),
                $e("--tw-backdrop-sepia"),
              ]);
          t.functional("filter", (e) => {
            if (!e.modifier) {
              if (null === e.value) return [l(), y("filter", a)];
              if ("arbitrary" === e.value.kind)
                return [y("filter", e.value.value)];
              if ("none" === e.value.value) return [y("filter", "none")];
            }
          }),
            t.functional("backdrop-filter", (e) => {
              if (!e.modifier) {
                if (null === e.value)
                  return [
                    s(),
                    y("-webkit-backdrop-filter", i),
                    y("backdrop-filter", i),
                  ];
                if ("arbitrary" === e.value.kind)
                  return [
                    y("-webkit-backdrop-filter", e.value.value),
                    y("backdrop-filter", e.value.value),
                  ];
                if ("none" === e.value.value)
                  return [
                    y("-webkit-backdrop-filter", "none"),
                    y("backdrop-filter", "none"),
                  ];
              }
            }),
            o("blur", {
              themeKeys: ["--blur"],
              handle: (e) => [
                l(),
                y("--tw-blur", `blur(${e})`),
                y("filter", a),
              ],
            }),
            n("blur-none", [l, ["--tw-blur", " "], ["filter", a]]),
            o("backdrop-blur", {
              themeKeys: ["--backdrop-blur", "--blur"],
              handle: (e) => [
                s(),
                y("--tw-backdrop-blur", `blur(${e})`),
                y("-webkit-backdrop-filter", i),
                y("backdrop-filter", i),
              ],
            }),
            n("backdrop-blur-none", [
              s,
              ["--tw-backdrop-blur", " "],
              ["-webkit-backdrop-filter", i],
              ["backdrop-filter", i],
            ]),
            o("brightness", {
              themeKeys: ["--brightness"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}%` : null),
              handle: (e) => [
                l(),
                y("--tw-brightness", `brightness(${e})`),
                y("filter", a),
              ],
            }),
            o("backdrop-brightness", {
              themeKeys: ["--backdrop-brightness", "--brightness"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}%` : null),
              handle: (e) => [
                s(),
                y("--tw-backdrop-brightness", `brightness(${e})`),
                y("-webkit-backdrop-filter", i),
                y("backdrop-filter", i),
              ],
            }),
            r("brightness", () => [
              {
                values: [
                  "0",
                  "50",
                  "75",
                  "90",
                  "95",
                  "100",
                  "105",
                  "110",
                  "125",
                  "150",
                  "200",
                ],
                valueThemeKeys: ["--brightness"],
              },
            ]),
            r("backdrop-brightness", () => [
              {
                values: [
                  "0",
                  "50",
                  "75",
                  "90",
                  "95",
                  "100",
                  "105",
                  "110",
                  "125",
                  "150",
                  "200",
                ],
                valueThemeKeys: ["--backdrop-brightness", "--brightness"],
              },
            ]),
            o("contrast", {
              themeKeys: ["--contrast"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}%` : null),
              handle: (e) => [
                l(),
                y("--tw-contrast", `contrast(${e})`),
                y("filter", a),
              ],
            }),
            o("backdrop-contrast", {
              themeKeys: ["--backdrop-contrast", "--contrast"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}%` : null),
              handle: (e) => [
                s(),
                y("--tw-backdrop-contrast", `contrast(${e})`),
                y("-webkit-backdrop-filter", i),
                y("backdrop-filter", i),
              ],
            }),
            r("contrast", () => [
              {
                values: ["0", "50", "75", "100", "125", "150", "200"],
                valueThemeKeys: ["--contrast"],
              },
            ]),
            r("backdrop-contrast", () => [
              {
                values: ["0", "50", "75", "100", "125", "150", "200"],
                valueThemeKeys: ["--backdrop-contrast", "--contrast"],
              },
            ]),
            o("grayscale", {
              themeKeys: ["--grayscale"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}%` : null),
              defaultValue: "100%",
              handle: (e) => [
                l(),
                y("--tw-grayscale", `grayscale(${e})`),
                y("filter", a),
              ],
            }),
            o("backdrop-grayscale", {
              themeKeys: ["--backdrop-grayscale", "--grayscale"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}%` : null),
              defaultValue: "100%",
              handle: (e) => [
                s(),
                y("--tw-backdrop-grayscale", `grayscale(${e})`),
                y("-webkit-backdrop-filter", i),
                y("backdrop-filter", i),
              ],
            }),
            r("grayscale", () => [
              {
                values: ["0", "25", "50", "75", "100"],
                valueThemeKeys: ["--grayscale"],
                hasDefaultValue: !0,
              },
            ]),
            r("backdrop-grayscale", () => [
              {
                values: ["0", "25", "50", "75", "100"],
                valueThemeKeys: ["--backdrop-grayscale", "--grayscale"],
                hasDefaultValue: !0,
              },
            ]),
            o("hue-rotate", {
              supportsNegative: !0,
              themeKeys: ["--hue-rotate"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}deg` : null),
              handle: (e) => [
                l(),
                y("--tw-hue-rotate", `hue-rotate(${e})`),
                y("filter", a),
              ],
            }),
            o("backdrop-hue-rotate", {
              supportsNegative: !0,
              themeKeys: ["--backdrop-hue-rotate", "--hue-rotate"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}deg` : null),
              handle: (e) => [
                s(),
                y("--tw-backdrop-hue-rotate", `hue-rotate(${e})`),
                y("-webkit-backdrop-filter", i),
                y("backdrop-filter", i),
              ],
            }),
            r("hue-rotate", () => [
              {
                values: ["0", "15", "30", "60", "90", "180"],
                valueThemeKeys: ["--hue-rotate"],
              },
            ]),
            r("backdrop-hue-rotate", () => [
              {
                values: ["0", "15", "30", "60", "90", "180"],
                valueThemeKeys: ["--backdrop-hue-rotate", "--hue-rotate"],
              },
            ]),
            o("invert", {
              themeKeys: ["--invert"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}%` : null),
              defaultValue: "100%",
              handle: (e) => [
                l(),
                y("--tw-invert", `invert(${e})`),
                y("filter", a),
              ],
            }),
            o("backdrop-invert", {
              themeKeys: ["--backdrop-invert", "--invert"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}%` : null),
              defaultValue: "100%",
              handle: (e) => [
                s(),
                y("--tw-backdrop-invert", `invert(${e})`),
                y("-webkit-backdrop-filter", i),
                y("backdrop-filter", i),
              ],
            }),
            r("invert", () => [
              {
                values: ["0", "25", "50", "75", "100"],
                valueThemeKeys: ["--invert"],
                hasDefaultValue: !0,
              },
            ]),
            r("backdrop-invert", () => [
              {
                values: ["0", "25", "50", "75", "100"],
                valueThemeKeys: ["--backdrop-invert", "--invert"],
                hasDefaultValue: !0,
              },
            ]),
            o("saturate", {
              themeKeys: ["--saturate"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}%` : null),
              handle: (e) => [
                l(),
                y("--tw-saturate", `saturate(${e})`),
                y("filter", a),
              ],
            }),
            o("backdrop-saturate", {
              themeKeys: ["--backdrop-saturate", "--saturate"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}%` : null),
              handle: (e) => [
                s(),
                y("--tw-backdrop-saturate", `saturate(${e})`),
                y("-webkit-backdrop-filter", i),
                y("backdrop-filter", i),
              ],
            }),
            r("saturate", () => [
              {
                values: ["0", "50", "100", "150", "200"],
                valueThemeKeys: ["--saturate"],
              },
            ]),
            r("backdrop-saturate", () => [
              {
                values: ["0", "50", "100", "150", "200"],
                valueThemeKeys: ["--backdrop-saturate", "--saturate"],
              },
            ]),
            o("sepia", {
              themeKeys: ["--sepia"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}%` : null),
              defaultValue: "100%",
              handle: (e) => [
                l(),
                y("--tw-sepia", `sepia(${e})`),
                y("filter", a),
              ],
            }),
            o("backdrop-sepia", {
              themeKeys: ["--backdrop-sepia", "--sepia"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}%` : null),
              defaultValue: "100%",
              handle: (e) => [
                s(),
                y("--tw-backdrop-sepia", `sepia(${e})`),
                y("-webkit-backdrop-filter", i),
                y("backdrop-filter", i),
              ],
            }),
            r("sepia", () => [
              {
                values: ["0", "50", "100"],
                valueThemeKeys: ["--sepia"],
                hasDefaultValue: !0,
              },
            ]),
            r("backdrop-sepia", () => [
              {
                values: ["0", "50", "100"],
                valueThemeKeys: ["--backdrop-sepia", "--sepia"],
                hasDefaultValue: !0,
              },
            ]),
            n("drop-shadow-none", [
              l,
              ["--tw-drop-shadow", " "],
              ["filter", a],
            ]),
            t.functional("drop-shadow", (t) => {
              let r;
              if (
                (t.modifier &&
                  ("arbitrary" === t.modifier.kind
                    ? (r = t.modifier.value)
                    : de(t.modifier.value) && (r = `${t.modifier.value}%`)),
                !t.value)
              ) {
                let t = e.get(["--drop-shadow"]),
                  n = e.resolve(null, ["--drop-shadow"]);
                return null === t || null === n
                  ? void 0
                  : [
                      l(),
                      y("--tw-drop-shadow-alpha", r),
                      ...Ke(
                        "--tw-drop-shadow-size",
                        t,
                        r,
                        (e) => `var(--tw-drop-shadow-color, ${e})`,
                      ),
                      y(
                        "--tw-drop-shadow",
                        R(n, ",")
                          .map((e) => `drop-shadow(${e})`)
                          .join(" "),
                      ),
                      y("filter", a),
                    ];
              }
              if ("arbitrary" === t.value.kind) {
                let n = t.value.value;
                return "color" === (t.value.dataType ?? G(n, ["color"]))
                  ? ((n = Te(n, t.modifier, e)),
                    null === n
                      ? void 0
                      : [
                          l(),
                          y(
                            "--tw-drop-shadow-color",
                            ze(n, "var(--tw-drop-shadow-alpha)"),
                          ),
                          y("--tw-drop-shadow", "var(--tw-drop-shadow-size)"),
                        ])
                  : t.modifier && !r
                    ? void 0
                    : [
                        l(),
                        y("--tw-drop-shadow-alpha", r),
                        ...Ke(
                          "--tw-drop-shadow-size",
                          n,
                          r,
                          (e) => `var(--tw-drop-shadow-color, ${e})`,
                        ),
                        y("--tw-drop-shadow", "var(--tw-drop-shadow-size)"),
                        y("filter", a),
                      ];
              }
              {
                let n = e.get([`--drop-shadow-${t.value.value}`]),
                  o = e.resolve(t.value.value, ["--drop-shadow"]);
                if (n && o)
                  return t.modifier && !r
                    ? void 0
                    : r
                      ? [
                          l(),
                          y("--tw-drop-shadow-alpha", r),
                          ...Ke(
                            "--tw-drop-shadow-size",
                            n,
                            r,
                            (e) => `var(--tw-drop-shadow-color, ${e})`,
                          ),
                          y("--tw-drop-shadow", "var(--tw-drop-shadow-size)"),
                          y("filter", a),
                        ]
                      : [
                          l(),
                          y("--tw-drop-shadow-alpha", r),
                          ...Ke(
                            "--tw-drop-shadow-size",
                            n,
                            r,
                            (e) => `var(--tw-drop-shadow-color, ${e})`,
                          ),
                          y(
                            "--tw-drop-shadow",
                            R(o, ",")
                              .map((e) => `drop-shadow(${e})`)
                              .join(" "),
                          ),
                          y("filter", a),
                        ];
              }
              {
                let r = je(t, e, ["--drop-shadow-color", "--color"]);
                if (r)
                  return [
                    l(),
                    y(
                      "--tw-drop-shadow-color",
                      ze(r, "var(--tw-drop-shadow-alpha)"),
                    ),
                    y("--tw-drop-shadow", "var(--tw-drop-shadow-size)"),
                  ];
              }
            }),
            r("drop-shadow", () => [
              {
                values: ["current", "inherit", "transparent"],
                valueThemeKeys: ["--drop-shadow-color", "--color"],
                modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
              },
              { valueThemeKeys: ["--drop-shadow"] },
            ]),
            o("backdrop-opacity", {
              themeKeys: ["--backdrop-opacity", "--opacity"],
              handleBareValue: ({ value: e }) => (he(e) ? `${e}%` : null),
              handle: (e) => [
                s(),
                y("--tw-backdrop-opacity", `opacity(${e})`),
                y("-webkit-backdrop-filter", i),
                y("backdrop-filter", i),
              ],
            }),
            r("backdrop-opacity", () => [
              {
                values: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
                valueThemeKeys: ["--backdrop-opacity", "--opacity"],
              },
            ]);
        }
        {
          let a = `var(--tw-ease, ${e.resolve(null, ["--default-transition-timing-function"]) ?? "ease"})`,
            i = `var(--tw-duration, ${e.resolve(null, ["--default-transition-duration"]) ?? "0s"})`;
          n("transition-none", [["transition-property", "none"]]),
            n("transition-all", [
              ["transition-property", "all"],
              ["transition-timing-function", a],
              ["transition-duration", i],
            ]),
            n("transition-colors", [
              [
                "transition-property",
                "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to",
              ],
              ["transition-timing-function", a],
              ["transition-duration", i],
            ]),
            n("transition-opacity", [
              ["transition-property", "opacity"],
              ["transition-timing-function", a],
              ["transition-duration", i],
            ]),
            n("transition-shadow", [
              ["transition-property", "box-shadow"],
              ["transition-timing-function", a],
              ["transition-duration", i],
            ]),
            n("transition-transform", [
              ["transition-property", "transform, translate, scale, rotate"],
              ["transition-timing-function", a],
              ["transition-duration", i],
            ]),
            o("transition", {
              defaultValue:
                "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter",
              themeKeys: ["--transition-property"],
              handle: (e) => [
                y("transition-property", e),
                y("transition-timing-function", a),
                y("transition-duration", i),
              ],
            }),
            n("transition-discrete", [
              ["transition-behavior", "allow-discrete"],
            ]),
            n("transition-normal", [["transition-behavior", "normal"]]),
            o("delay", {
              handleBareValue: ({ value: e }) => (de(e) ? `${e}ms` : null),
              themeKeys: ["--transition-delay"],
              handle: (e) => [y("transition-delay", e)],
            });
          {
            let r = () => z([$e("--tw-duration")]);
            n("duration-initial", [r, ["--tw-duration", "initial"]]),
              t.functional("duration", (t) => {
                if (t.modifier || !t.value) return;
                let n = null;
                return (
                  "arbitrary" === t.value.kind
                    ? (n = t.value.value)
                    : ((n = e.resolve(t.value.fraction ?? t.value.value, [
                        "--transition-duration",
                      ])),
                      null === n &&
                        de(t.value.value) &&
                        (n = `${t.value.value}ms`)),
                  null !== n
                    ? [r(), y("--tw-duration", n), y("transition-duration", n)]
                    : void 0
                );
              });
          }
          r("delay", () => [
            {
              values: ["75", "100", "150", "200", "300", "500", "700", "1000"],
              valueThemeKeys: ["--transition-delay"],
            },
          ]),
            r("duration", () => [
              {
                values: [
                  "75",
                  "100",
                  "150",
                  "200",
                  "300",
                  "500",
                  "700",
                  "1000",
                ],
                valueThemeKeys: ["--transition-duration"],
              },
            ]);
        }
        {
          let e = () => z([$e("--tw-ease")]);
          n("ease-initial", [e, ["--tw-ease", "initial"]]),
            n("ease-linear", [
              e,
              ["--tw-ease", "linear"],
              ["transition-timing-function", "linear"],
            ]),
            o("ease", {
              themeKeys: ["--ease"],
              handle: (t) => [
                e(),
                y("--tw-ease", t),
                y("transition-timing-function", t),
              ],
            });
        }
        n("will-change-auto", [["will-change", "auto"]]),
          n("will-change-scroll", [["will-change", "scroll-position"]]),
          n("will-change-contents", [["will-change", "contents"]]),
          n("will-change-transform", [["will-change", "transform"]]),
          o("will-change", {
            themeKeys: [],
            handle: (e) => [y("will-change", e)],
          }),
          n("content-none", [
            ["--tw-content", "none"],
            ["content", "none"],
          ]),
          o("content", {
            themeKeys: [],
            handle: (e) => [
              z([$e("--tw-content", '""')]),
              y("--tw-content", e),
              y("content", "var(--tw-content)"),
            ],
          });
        {
          let e =
              "var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,)",
            t = () =>
              z([
                $e("--tw-contain-size"),
                $e("--tw-contain-layout"),
                $e("--tw-contain-paint"),
                $e("--tw-contain-style"),
              ]);
          n("contain-none", [["contain", "none"]]),
            n("contain-content", [["contain", "content"]]),
            n("contain-strict", [["contain", "strict"]]),
            n("contain-size", [
              t,
              ["--tw-contain-size", "size"],
              ["contain", e],
            ]),
            n("contain-inline-size", [
              t,
              ["--tw-contain-size", "inline-size"],
              ["contain", e],
            ]),
            n("contain-layout", [
              t,
              ["--tw-contain-layout", "layout"],
              ["contain", e],
            ]),
            n("contain-paint", [
              t,
              ["--tw-contain-paint", "paint"],
              ["contain", e],
            ]),
            n("contain-style", [
              t,
              ["--tw-contain-style", "style"],
              ["contain", e],
            ]),
            o("contain", { themeKeys: [], handle: (e) => [y("contain", e)] });
        }
        n("forced-color-adjust-none", [["forced-color-adjust", "none"]]),
          n("forced-color-adjust-auto", [["forced-color-adjust", "auto"]]),
          n("leading-none", [
            () => z([$e("--tw-leading")]),
            ["--tw-leading", "1"],
            ["line-height", "1"],
          ]),
          i("leading", ["--leading", "--spacing"], (e) => [
            z([$e("--tw-leading")]),
            y("--tw-leading", e),
            y("line-height", e),
          ]),
          o("tracking", {
            supportsNegative: !0,
            themeKeys: ["--tracking"],
            handle: (e) => [
              z([$e("--tw-tracking")]),
              y("--tw-tracking", e),
              y("letter-spacing", e),
            ],
          }),
          n("antialiased", [
            ["-webkit-font-smoothing", "antialiased"],
            ["-moz-osx-font-smoothing", "grayscale"],
          ]),
          n("subpixel-antialiased", [
            ["-webkit-font-smoothing", "auto"],
            ["-moz-osx-font-smoothing", "auto"],
          ]);
        {
          let e =
              "var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)",
            t = () =>
              z([
                $e("--tw-ordinal"),
                $e("--tw-slashed-zero"),
                $e("--tw-numeric-figure"),
                $e("--tw-numeric-spacing"),
                $e("--tw-numeric-fraction"),
              ]);
          n("normal-nums", [["font-variant-numeric", "normal"]]),
            n("ordinal", [
              t,
              ["--tw-ordinal", "ordinal"],
              ["font-variant-numeric", e],
            ]),
            n("slashed-zero", [
              t,
              ["--tw-slashed-zero", "slashed-zero"],
              ["font-variant-numeric", e],
            ]),
            n("lining-nums", [
              t,
              ["--tw-numeric-figure", "lining-nums"],
              ["font-variant-numeric", e],
            ]),
            n("oldstyle-nums", [
              t,
              ["--tw-numeric-figure", "oldstyle-nums"],
              ["font-variant-numeric", e],
            ]),
            n("proportional-nums", [
              t,
              ["--tw-numeric-spacing", "proportional-nums"],
              ["font-variant-numeric", e],
            ]),
            n("tabular-nums", [
              t,
              ["--tw-numeric-spacing", "tabular-nums"],
              ["font-variant-numeric", e],
            ]),
            n("diagonal-fractions", [
              t,
              ["--tw-numeric-fraction", "diagonal-fractions"],
              ["font-variant-numeric", e],
            ]),
            n("stacked-fractions", [
              t,
              ["--tw-numeric-fraction", "stacked-fractions"],
              ["font-variant-numeric", e],
            ]);
        }
        {
          let a = () => z([$e("--tw-outline-style", "solid")]);
          t.static("outline-hidden", () => [
            y("--tw-outline-style", "none"),
            y("outline-style", "none"),
            k("@media", "(forced-colors: active)", [
              y("outline", "2px solid transparent"),
              y("outline-offset", "2px"),
            ]),
          ]),
            n("outline-none", [
              ["--tw-outline-style", "none"],
              ["outline-style", "none"],
            ]),
            n("outline-solid", [
              ["--tw-outline-style", "solid"],
              ["outline-style", "solid"],
            ]),
            n("outline-dashed", [
              ["--tw-outline-style", "dashed"],
              ["outline-style", "dashed"],
            ]),
            n("outline-dotted", [
              ["--tw-outline-style", "dotted"],
              ["outline-style", "dotted"],
            ]),
            n("outline-double", [
              ["--tw-outline-style", "double"],
              ["outline-style", "double"],
            ]),
            t.functional("outline", (t) => {
              if (null === t.value) {
                if (t.modifier) return;
                let r = e.get(["--default-outline-width"]) ?? "1px";
                return [
                  a(),
                  y("outline-style", "var(--tw-outline-style)"),
                  y("outline-width", r),
                ];
              }
              if ("arbitrary" === t.value.kind) {
                let r = t.value.value;
                switch (
                  t.value.dataType ??
                  G(r, ["color", "length", "number", "percentage"])
                ) {
                  case "length":
                  case "number":
                  case "percentage":
                    return t.modifier
                      ? void 0
                      : [
                          a(),
                          y("outline-style", "var(--tw-outline-style)"),
                          y("outline-width", r),
                        ];
                  default:
                    return (
                      (r = Te(r, t.modifier, e)),
                      null === r ? void 0 : [y("outline-color", r)]
                    );
                }
              }
              {
                let r = je(t, e, ["--outline-color", "--color"]);
                if (r) return [y("outline-color", r)];
              }
              {
                if (t.modifier) return;
                let r = e.resolve(t.value.value, ["--outline-width"]);
                if (r)
                  return [
                    a(),
                    y("outline-style", "var(--tw-outline-style)"),
                    y("outline-width", r),
                  ];
                if (de(t.value.value))
                  return [
                    a(),
                    y("outline-style", "var(--tw-outline-style)"),
                    y("outline-width", `${t.value.value}px`),
                  ];
              }
            }),
            r("outline", () => [
              {
                values: ["current", "inherit", "transparent"],
                valueThemeKeys: ["--outline-color", "--color"],
                modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
                hasDefaultValue: !0,
              },
              {
                values: ["0", "1", "2", "4", "8"],
                valueThemeKeys: ["--outline-width"],
              },
            ]),
            o("outline-offset", {
              supportsNegative: !0,
              themeKeys: ["--outline-offset"],
              handleBareValue: ({ value: e }) => (de(e) ? `${e}px` : null),
              handle: (e) => [y("outline-offset", e)],
            }),
            r("outline-offset", () => [
              {
                supportsNegative: !0,
                values: ["0", "1", "2", "4", "8"],
                valueThemeKeys: ["--outline-offset"],
              },
            ]);
        }
        o("opacity", {
          themeKeys: ["--opacity"],
          handleBareValue: ({ value: e }) => (he(e) ? `${e}%` : null),
          handle: (e) => [y("opacity", e)],
        }),
          r("opacity", () => [
            {
              values: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
              valueThemeKeys: ["--opacity"],
            },
          ]),
          n("underline-offset-auto", [["text-underline-offset", "auto"]]),
          o("underline-offset", {
            supportsNegative: !0,
            themeKeys: ["--text-underline-offset"],
            handleBareValue: ({ value: e }) => (de(e) ? `${e}px` : null),
            handle: (e) => [y("text-underline-offset", e)],
          }),
          r("underline-offset", () => [
            {
              supportsNegative: !0,
              values: ["0", "1", "2", "4", "8"],
              valueThemeKeys: ["--text-underline-offset"],
            },
          ]),
          t.functional("text", (t) => {
            if (t.value) {
              if ("arbitrary" === t.value.kind) {
                let r = t.value.value;
                switch (
                  t.value.dataType ??
                  G(r, [
                    "color",
                    "length",
                    "percentage",
                    "absolute-size",
                    "relative-size",
                  ])
                ) {
                  case "size":
                  case "length":
                  case "percentage":
                  case "absolute-size":
                  case "relative-size":
                    if (t.modifier) {
                      let n =
                        "arbitrary" === t.modifier.kind
                          ? t.modifier.value
                          : e.resolve(t.modifier.value, ["--leading"]);
                      if (!n && pe(t.modifier.value)) {
                        let r = e.resolve(null, ["--spacing"]);
                        if (!r) return null;
                        n = `calc(${r} * ${t.modifier.value})`;
                      }
                      return (
                        !n && "none" === t.modifier.value && (n = "1"),
                        n ? [y("font-size", r), y("line-height", n)] : null
                      );
                    }
                    return [y("font-size", r)];
                  default:
                    return (
                      (r = Te(r, t.modifier, e)),
                      null === r ? void 0 : [y("color", r)]
                    );
                }
              }
              {
                let r = je(t, e, ["--text-color", "--color"]);
                if (r) return [y("color", r)];
              }
              {
                let r = e.resolveWith(
                  t.value.value,
                  ["--text"],
                  ["--line-height", "--letter-spacing", "--font-weight"],
                );
                if (r) {
                  let [n, o = {}] = Array.isArray(r) ? r : [r];
                  if (t.modifier) {
                    let r =
                      "arbitrary" === t.modifier.kind
                        ? t.modifier.value
                        : e.resolve(t.modifier.value, ["--leading"]);
                    if (!r && pe(t.modifier.value)) {
                      let n = e.resolve(null, ["--spacing"]);
                      if (!n) return null;
                      r = `calc(${n} * ${t.modifier.value})`;
                    }
                    if ((!r && "none" === t.modifier.value && (r = "1"), !r))
                      return null;
                    let o = [y("font-size", n)];
                    return r && o.push(y("line-height", r)), o;
                  }
                  return "string" == typeof o
                    ? [y("font-size", n), y("line-height", o)]
                    : [
                        y("font-size", n),
                        y(
                          "line-height",
                          o["--line-height"]
                            ? `var(--tw-leading, ${o["--line-height"]})`
                            : void 0,
                        ),
                        y(
                          "letter-spacing",
                          o["--letter-spacing"]
                            ? `var(--tw-tracking, ${o["--letter-spacing"]})`
                            : void 0,
                        ),
                        y(
                          "font-weight",
                          o["--font-weight"]
                            ? `var(--tw-font-weight, ${o["--font-weight"]})`
                            : void 0,
                        ),
                      ];
                }
              }
            }
          }),
          r("text", () => [
            {
              values: ["current", "inherit", "transparent"],
              valueThemeKeys: ["--text-color", "--color"],
              modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
            },
            {
              values: [],
              valueThemeKeys: ["--text"],
              modifiers: [],
              modifierThemeKeys: ["--leading"],
            },
          ]);
        let C = () =>
          z([
            $e("--tw-text-shadow-color"),
            $e("--tw-text-shadow-alpha", "100%", "<percentage>"),
          ]);
        n("text-shadow-initial", [C, ["--tw-text-shadow-color", "initial"]]),
          t.functional("text-shadow", (t) => {
            let r;
            if (
              (t.modifier &&
                ("arbitrary" === t.modifier.kind
                  ? (r = t.modifier.value)
                  : de(t.modifier.value) && (r = `${t.modifier.value}%`)),
              !t.value)
            ) {
              let t = e.get(["--text-shadow"]);
              return null === t
                ? void 0
                : [
                    C(),
                    y("--tw-text-shadow-alpha", r),
                    ...Se(
                      "text-shadow",
                      t,
                      r,
                      (e) => `var(--tw-text-shadow-color, ${e})`,
                    ),
                  ];
            }
            if ("arbitrary" === t.value.kind) {
              let n = t.value.value;
              return "color" === (t.value.dataType ?? G(n, ["color"]))
                ? ((n = Te(n, t.modifier, e)),
                  null === n
                    ? void 0
                    : [
                        C(),
                        y(
                          "--tw-text-shadow-color",
                          ze(n, "var(--tw-text-shadow-alpha)"),
                        ),
                      ])
                : [
                    C(),
                    y("--tw-text-shadow-alpha", r),
                    ...Se(
                      "text-shadow",
                      n,
                      r,
                      (e) => `var(--tw-text-shadow-color, ${e})`,
                    ),
                  ];
            }
            if ("none" === t.value.value)
              return t.modifier ? void 0 : [C(), y("text-shadow", "none")];
            {
              let n = e.get([`--text-shadow-${t.value.value}`]);
              if (n)
                return [
                  C(),
                  y("--tw-text-shadow-alpha", r),
                  ...Se(
                    "text-shadow",
                    n,
                    r,
                    (e) => `var(--tw-text-shadow-color, ${e})`,
                  ),
                ];
            }
            {
              let r = je(t, e, ["--text-shadow-color", "--color"]);
              if (r)
                return [
                  C(),
                  y(
                    "--tw-text-shadow-color",
                    ze(r, "var(--tw-text-shadow-alpha)"),
                  ),
                ];
            }
          }),
          r("text-shadow", () => [
            {
              values: ["current", "inherit", "transparent"],
              valueThemeKeys: ["--text-shadow-color", "--color"],
              modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
            },
            { values: ["none"] },
            {
              valueThemeKeys: ["--text-shadow"],
              modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
              hasDefaultValue: !0,
            },
          ]);
        {
          let o = function (e) {
              return `var(--tw-ring-inset,) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color, ${c})`;
            },
            a = function (e) {
              return `inset 0 0 0 ${e} var(--tw-inset-ring-color, currentcolor)`;
            },
            i = [
              "var(--tw-inset-shadow)",
              "var(--tw-inset-ring-shadow)",
              "var(--tw-ring-offset-shadow)",
              "var(--tw-ring-shadow)",
              "var(--tw-shadow)",
            ].join(", "),
            l = "0 0 #0000",
            s = () =>
              z([
                $e("--tw-shadow", l),
                $e("--tw-shadow-color"),
                $e("--tw-shadow-alpha", "100%", "<percentage>"),
                $e("--tw-inset-shadow", l),
                $e("--tw-inset-shadow-color"),
                $e("--tw-inset-shadow-alpha", "100%", "<percentage>"),
                $e("--tw-ring-color"),
                $e("--tw-ring-shadow", l),
                $e("--tw-inset-ring-color"),
                $e("--tw-inset-ring-shadow", l),
                $e("--tw-ring-inset"),
                $e("--tw-ring-offset-width", "0px", "<length>"),
                $e("--tw-ring-offset-color", "#fff"),
                $e("--tw-ring-offset-shadow", l),
              ]);
          n("shadow-initial", [s, ["--tw-shadow-color", "initial"]]),
            t.functional("shadow", (t) => {
              let r;
              if (
                (t.modifier &&
                  ("arbitrary" === t.modifier.kind
                    ? (r = t.modifier.value)
                    : de(t.modifier.value) && (r = `${t.modifier.value}%`)),
                !t.value)
              ) {
                let t = e.get(["--shadow"]);
                return null === t
                  ? void 0
                  : [
                      s(),
                      y("--tw-shadow-alpha", r),
                      ...Se(
                        "--tw-shadow",
                        t,
                        r,
                        (e) => `var(--tw-shadow-color, ${e})`,
                      ),
                      y("box-shadow", i),
                    ];
              }
              if ("arbitrary" === t.value.kind) {
                let n = t.value.value;
                return "color" === (t.value.dataType ?? G(n, ["color"]))
                  ? ((n = Te(n, t.modifier, e)),
                    null === n
                      ? void 0
                      : [
                          s(),
                          y(
                            "--tw-shadow-color",
                            ze(n, "var(--tw-shadow-alpha)"),
                          ),
                        ])
                  : [
                      s(),
                      y("--tw-shadow-alpha", r),
                      ...Se(
                        "--tw-shadow",
                        n,
                        r,
                        (e) => `var(--tw-shadow-color, ${e})`,
                      ),
                      y("box-shadow", i),
                    ];
              }
              if ("none" === t.value.value)
                return t.modifier
                  ? void 0
                  : [s(), y("--tw-shadow", l), y("box-shadow", i)];
              {
                let n = e.get([`--shadow-${t.value.value}`]);
                if (n)
                  return [
                    s(),
                    y("--tw-shadow-alpha", r),
                    ...Se(
                      "--tw-shadow",
                      n,
                      r,
                      (e) => `var(--tw-shadow-color, ${e})`,
                    ),
                    y("box-shadow", i),
                  ];
              }
              {
                let r = je(t, e, ["--box-shadow-color", "--color"]);
                if (r)
                  return [
                    s(),
                    y("--tw-shadow-color", ze(r, "var(--tw-shadow-alpha)")),
                  ];
              }
            }),
            r("shadow", () => [
              {
                values: ["current", "inherit", "transparent"],
                valueThemeKeys: ["--box-shadow-color", "--color"],
                modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
              },
              { values: ["none"] },
              {
                valueThemeKeys: ["--shadow"],
                modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
                hasDefaultValue: !0,
              },
            ]),
            n("inset-shadow-initial", [
              s,
              ["--tw-inset-shadow-color", "initial"],
            ]),
            t.functional("inset-shadow", (t) => {
              let r;
              if (
                (t.modifier &&
                  ("arbitrary" === t.modifier.kind
                    ? (r = t.modifier.value)
                    : de(t.modifier.value) && (r = `${t.modifier.value}%`)),
                !t.value)
              ) {
                let t = e.get(["--inset-shadow"]);
                return null === t
                  ? void 0
                  : [
                      s(),
                      y("--tw-inset-shadow-alpha", r),
                      ...Se(
                        "--tw-inset-shadow",
                        t,
                        r,
                        (e) => `var(--tw-inset-shadow-color, ${e})`,
                      ),
                      y("box-shadow", i),
                    ];
              }
              if ("arbitrary" === t.value.kind) {
                let n = t.value.value;
                return "color" === (t.value.dataType ?? G(n, ["color"]))
                  ? ((n = Te(n, t.modifier, e)),
                    null === n
                      ? void 0
                      : [
                          s(),
                          y(
                            "--tw-inset-shadow-color",
                            ze(n, "var(--tw-inset-shadow-alpha)"),
                          ),
                        ])
                  : [
                      s(),
                      y("--tw-inset-shadow-alpha", r),
                      ...Se(
                        "--tw-inset-shadow",
                        n,
                        r,
                        (e) => `var(--tw-inset-shadow-color, ${e})`,
                        "inset ",
                      ),
                      y("box-shadow", i),
                    ];
              }
              if ("none" === t.value.value)
                return t.modifier
                  ? void 0
                  : [s(), y("--tw-inset-shadow", l), y("box-shadow", i)];
              {
                let n = e.get([`--inset-shadow-${t.value.value}`]);
                if (n)
                  return [
                    s(),
                    y("--tw-inset-shadow-alpha", r),
                    ...Se(
                      "--tw-inset-shadow",
                      n,
                      r,
                      (e) => `var(--tw-inset-shadow-color, ${e})`,
                    ),
                    y("box-shadow", i),
                  ];
              }
              {
                let r = je(t, e, ["--box-shadow-color", "--color"]);
                if (r)
                  return [
                    s(),
                    y(
                      "--tw-inset-shadow-color",
                      ze(r, "var(--tw-inset-shadow-alpha)"),
                    ),
                  ];
              }
            }),
            r("inset-shadow", () => [
              {
                values: ["current", "inherit", "transparent"],
                valueThemeKeys: ["--box-shadow-color", "--color"],
                modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
              },
              { values: ["none"] },
              {
                valueThemeKeys: ["--inset-shadow"],
                modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
                hasDefaultValue: !0,
              },
            ]),
            n("ring-inset", [s, ["--tw-ring-inset", "inset"]]);
          let c = e.get(["--default-ring-color"]) ?? "currentcolor";
          t.functional("ring", (t) => {
            if (!t.value) {
              if (t.modifier) return;
              let r = e.get(["--default-ring-width"]) ?? "1px";
              return [s(), y("--tw-ring-shadow", o(r)), y("box-shadow", i)];
            }
            if ("arbitrary" === t.value.kind) {
              let r = t.value.value;
              return "length" ===
                (t.value.dataType ?? G(r, ["color", "length"]))
                ? t.modifier
                  ? void 0
                  : [s(), y("--tw-ring-shadow", o(r)), y("box-shadow", i)]
                : ((r = Te(r, t.modifier, e)),
                  null === r ? void 0 : [y("--tw-ring-color", r)]);
            }
            {
              let r = je(t, e, ["--ring-color", "--color"]);
              if (r) return [y("--tw-ring-color", r)];
            }
            {
              if (t.modifier) return;
              let r = e.resolve(t.value.value, ["--ring-width"]);
              if (
                (null === r && de(t.value.value) && (r = `${t.value.value}px`),
                r)
              )
                return [s(), y("--tw-ring-shadow", o(r)), y("box-shadow", i)];
            }
          }),
            r("ring", () => [
              {
                values: ["current", "inherit", "transparent"],
                valueThemeKeys: ["--ring-color", "--color"],
                modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
              },
              {
                values: ["0", "1", "2", "4", "8"],
                valueThemeKeys: ["--ring-width"],
                hasDefaultValue: !0,
              },
            ]),
            t.functional("inset-ring", (t) => {
              if (!t.value)
                return t.modifier
                  ? void 0
                  : [
                      s(),
                      y("--tw-inset-ring-shadow", a("1px")),
                      y("box-shadow", i),
                    ];
              if ("arbitrary" === t.value.kind) {
                let r = t.value.value;
                return "length" ===
                  (t.value.dataType ?? G(r, ["color", "length"]))
                  ? t.modifier
                    ? void 0
                    : [
                        s(),
                        y("--tw-inset-ring-shadow", a(r)),
                        y("box-shadow", i),
                      ]
                  : ((r = Te(r, t.modifier, e)),
                    null === r ? void 0 : [y("--tw-inset-ring-color", r)]);
              }
              {
                let r = je(t, e, ["--ring-color", "--color"]);
                if (r) return [y("--tw-inset-ring-color", r)];
              }
              {
                if (t.modifier) return;
                let r = e.resolve(t.value.value, ["--ring-width"]);
                if (
                  (null === r &&
                    de(t.value.value) &&
                    (r = `${t.value.value}px`),
                  r)
                )
                  return [
                    s(),
                    y("--tw-inset-ring-shadow", a(r)),
                    y("box-shadow", i),
                  ];
              }
            }),
            r("inset-ring", () => [
              {
                values: ["current", "inherit", "transparent"],
                valueThemeKeys: ["--ring-color", "--color"],
                modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
              },
              {
                values: ["0", "1", "2", "4", "8"],
                valueThemeKeys: ["--ring-width"],
                hasDefaultValue: !0,
              },
            ]);
          let u =
            "var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)";
          t.functional("ring-offset", (t) => {
            if (t.value) {
              if ("arbitrary" === t.value.kind) {
                let r = t.value.value;
                return "length" ===
                  (t.value.dataType ?? G(r, ["color", "length"]))
                  ? t.modifier
                    ? void 0
                    : [
                        y("--tw-ring-offset-width", r),
                        y("--tw-ring-offset-shadow", u),
                      ]
                  : ((r = Te(r, t.modifier, e)),
                    null === r ? void 0 : [y("--tw-ring-offset-color", r)]);
              }
              {
                let r = e.resolve(t.value.value, ["--ring-offset-width"]);
                if (r)
                  return t.modifier
                    ? void 0
                    : [
                        y("--tw-ring-offset-width", r),
                        y("--tw-ring-offset-shadow", u),
                      ];
                if (de(t.value.value))
                  return t.modifier
                    ? void 0
                    : [
                        y("--tw-ring-offset-width", `${t.value.value}px`),
                        y("--tw-ring-offset-shadow", u),
                      ];
              }
              {
                let r = je(t, e, ["--ring-offset-color", "--color"]);
                if (r) return [y("--tw-ring-offset-color", r)];
              }
            }
          });
        }
        return (
          r("ring-offset", () => [
            {
              values: ["current", "inherit", "transparent"],
              valueThemeKeys: ["--ring-offset-color", "--color"],
              modifiers: Array.from({ length: 21 }, (e, t) => "" + 5 * t),
            },
            {
              values: ["0", "1", "2", "4", "8"],
              valueThemeKeys: ["--ring-offset-width"],
            },
          ]),
          t.functional("@container", (e) => {
            let t = null;
            if (
              (null === e.value
                ? (t = "inline-size")
                : "arbitrary" === e.value.kind
                  ? (t = e.value.value)
                  : "named" === e.value.kind &&
                    "normal" === e.value.value &&
                    (t = "normal"),
              null !== t)
            )
              return e.modifier
                ? [
                    y("container-type", t),
                    y("container-name", e.modifier.value),
                  ]
                : [y("container-type", t)];
          }),
          r("@container", () => [
            { values: ["normal"], valueThemeKeys: [], hasDefaultValue: !0 },
          ]),
          t
        );
      })(e),
      r = (function (e) {
        let t = new Be();
        function r(e, r, { compounds: n } = {}) {
          (n = n ?? _e(r)),
            t.static(
              e,
              (e) => {
                e.nodes = r.map((t) => b(t, e.nodes));
              },
              { compounds: n },
            );
        }
        function n(e, t) {
          return t.map((t) => {
            let r = R((t = t.trim()), " ");
            return "not" === r[0]
              ? r.slice(1).join(" ")
              : "@container" === e
                ? "(" === r[0][0]
                  ? `not ${t}`
                  : "not" === r[1]
                    ? `${r[0]} ${r.slice(2).join(" ")}`
                    : `${r[0]} not ${r.slice(1).join(" ")}`
                : `not ${t}`;
          });
        }
        r("*", [":is(& > *)"], { compounds: 0 }),
          r("**", [":is(& *)"], { compounds: 0 });
        let o = ["@media", "@supports", "@container"];
        function a(e) {
          for (let t of o) {
            if (t !== e.name) continue;
            let r = R(e.params, ",");
            return r.length > 1
              ? null
              : ((r = n(e.name, r)), k(e.name, r.join(", ")));
          }
          return null;
        }
        function i(e) {
          return e.includes("::")
            ? null
            : `&:not(${R(e, ",")
                .map((e) => e.replaceAll("&", "*"))
                .join(", ")})`;
        }
        t.compound("not", 3, (e, t) => {
          if (
            ("arbitrary" === t.variant.kind && t.variant.relative) ||
            t.modifier
          )
            return null;
          let r = !1;
          return (
            A([e], (t, { path: n }) => {
              if ("rule" !== t.kind && "at-rule" !== t.kind) return 0;
              if (t.nodes.length > 0) return 0;
              let o = [],
                l = [];
              for (let e of n)
                "at-rule" === e.kind
                  ? o.push(e)
                  : "rule" === e.kind && l.push(e);
              if (o.length > 1) return 2;
              if (l.length > 1) return 2;
              let s = [];
              for (let e of l) {
                let t = i(e.selector);
                if (!t) return (r = !1), 2;
                s.push(w(t, []));
              }
              for (let e of o) {
                let t = a(e);
                if (!t) return (r = !1), 2;
                s.push(t);
              }
              return Object.assign(e, w("&", s)), (r = !0), 1;
            }),
            "rule" === e.kind &&
              "&" === e.selector &&
              1 === e.nodes.length &&
              Object.assign(e, e.nodes[0]),
            r ? void 0 : null
          );
        }),
          t.suggest("not", () =>
            Array.from(t.keys()).filter((e) => t.compoundsWith("not", e)),
          ),
          t.compound("group", 2, (t, r) => {
            if ("arbitrary" === r.variant.kind && r.variant.relative)
              return null;
            let n = r.modifier
                ? `:where(.${e.prefix ? `${e.prefix}\\:` : ""}group\\/${r.modifier.value})`
                : `:where(.${e.prefix ? `${e.prefix}\\:` : ""}group)`,
              o = !1;
            return (
              A([t], (e, { path: t }) => {
                if ("rule" !== e.kind) return 0;
                for (let e of t.slice(0, -1))
                  if ("rule" === e.kind) return (o = !1), 2;
                let r = e.selector.replaceAll("&", n);
                R(r, ",").length > 1 && (r = `:is(${r})`),
                  (e.selector = `&:is(${r} *)`),
                  (o = !0);
              }),
              o ? void 0 : null
            );
          }),
          t.suggest("group", () =>
            Array.from(t.keys()).filter((e) => t.compoundsWith("group", e)),
          ),
          t.compound("peer", 2, (t, r) => {
            if ("arbitrary" === r.variant.kind && r.variant.relative)
              return null;
            let n = r.modifier
                ? `:where(.${e.prefix ? `${e.prefix}\\:` : ""}peer\\/${r.modifier.value})`
                : `:where(.${e.prefix ? `${e.prefix}\\:` : ""}peer)`,
              o = !1;
            return (
              A([t], (e, { path: t }) => {
                if ("rule" !== e.kind) return 0;
                for (let e of t.slice(0, -1))
                  if ("rule" === e.kind) return (o = !1), 2;
                let r = e.selector.replaceAll("&", n);
                R(r, ",").length > 1 && (r = `:is(${r})`),
                  (e.selector = `&:is(${r} ~ *)`),
                  (o = !0);
              }),
              o ? void 0 : null
            );
          }),
          t.suggest("peer", () =>
            Array.from(t.keys()).filter((e) => t.compoundsWith("peer", e)),
          ),
          r("first-letter", ["&::first-letter"]),
          r("first-line", ["&::first-line"]),
          r("marker", [
            "& *::marker",
            "&::marker",
            "& *::-webkit-details-marker",
            "&::-webkit-details-marker",
          ]),
          r("selection", ["& *::selection", "&::selection"]),
          r("file", ["&::file-selector-button"]),
          r("placeholder", ["&::placeholder"]),
          r("backdrop", ["&::backdrop"]),
          r("details-content", ["&::details-content"]);
        {
          let e = function () {
            return z([
              k("@property", "--tw-content", [
                y("syntax", '"*"'),
                y("initial-value", '""'),
                y("inherits", "false"),
              ]),
            ]);
          };
          t.static(
            "before",
            (t) => {
              t.nodes = [
                w("&::before", [
                  e(),
                  y("content", "var(--tw-content)"),
                  ...t.nodes,
                ]),
              ];
            },
            { compounds: 0 },
          ),
            t.static(
              "after",
              (t) => {
                t.nodes = [
                  w("&::after", [
                    e(),
                    y("content", "var(--tw-content)"),
                    ...t.nodes,
                  ]),
                ];
              },
              { compounds: 0 },
            );
        }
        r("first", ["&:first-child"]),
          r("last", ["&:last-child"]),
          r("only", ["&:only-child"]),
          r("odd", ["&:nth-child(odd)"]),
          r("even", ["&:nth-child(even)"]),
          r("first-of-type", ["&:first-of-type"]),
          r("last-of-type", ["&:last-of-type"]),
          r("only-of-type", ["&:only-of-type"]),
          r("visited", ["&:visited"]),
          r("target", ["&:target"]),
          r("open", ["&:is([open], :popover-open, :open)"]),
          r("default", ["&:default"]),
          r("checked", ["&:checked"]),
          r("indeterminate", ["&:indeterminate"]),
          r("placeholder-shown", ["&:placeholder-shown"]),
          r("autofill", ["&:autofill"]),
          r("optional", ["&:optional"]),
          r("required", ["&:required"]),
          r("valid", ["&:valid"]),
          r("invalid", ["&:invalid"]),
          r("user-valid", ["&:user-valid"]),
          r("user-invalid", ["&:user-invalid"]),
          r("in-range", ["&:in-range"]),
          r("out-of-range", ["&:out-of-range"]),
          r("read-only", ["&:read-only"]),
          r("empty", ["&:empty"]),
          r("focus-within", ["&:focus-within"]),
          t.static("hover", (e) => {
            e.nodes = [w("&:hover", [k("@media", "(hover: hover)", e.nodes)])];
          }),
          r("focus", ["&:focus"]),
          r("focus-visible", ["&:focus-visible"]),
          r("active", ["&:active"]),
          r("enabled", ["&:enabled"]),
          r("disabled", ["&:disabled"]),
          r("inert", ["&:is([inert], [inert] *)"]),
          t.compound("in", 2, (e, t) => {
            if (t.modifier) return null;
            let r = !1;
            return (
              A([e], (e, { path: t }) => {
                if ("rule" !== e.kind) return 0;
                for (let e of t.slice(0, -1))
                  if ("rule" === e.kind) return (r = !1), 2;
                (e.selector = `:where(${e.selector.replaceAll("&", "*")}) &`),
                  (r = !0);
              }),
              r ? void 0 : null
            );
          }),
          t.suggest("in", () =>
            Array.from(t.keys()).filter((e) => t.compoundsWith("in", e)),
          ),
          t.compound("has", 2, (e, t) => {
            if (t.modifier) return null;
            let r = !1;
            return (
              A([e], (e, { path: t }) => {
                if ("rule" !== e.kind) return 0;
                for (let e of t.slice(0, -1))
                  if ("rule" === e.kind) return (r = !1), 2;
                (e.selector = `&:has(${e.selector.replaceAll("&", "*")})`),
                  (r = !0);
              }),
              r ? void 0 : null
            );
          }),
          t.suggest("has", () =>
            Array.from(t.keys()).filter((e) => t.compoundsWith("has", e)),
          ),
          t.functional("aria", (e, t) => {
            if (!t.value || t.modifier) return null;
            "arbitrary" === t.value.kind
              ? (e.nodes = [w(`&[aria-${Le(t.value.value)}]`, e.nodes)])
              : (e.nodes = [w(`&[aria-${t.value.value}="true"]`, e.nodes)]);
          }),
          t.suggest("aria", () => [
            "busy",
            "checked",
            "disabled",
            "expanded",
            "hidden",
            "pressed",
            "readonly",
            "required",
            "selected",
          ]),
          t.functional("data", (e, t) => {
            if (!t.value || t.modifier) return null;
            e.nodes = [w(`&[data-${Le(t.value.value)}]`, e.nodes)];
          }),
          t.functional("nth", (e, t) => {
            if (
              !t.value ||
              t.modifier ||
              ("named" === t.value.kind && !de(t.value.value))
            )
              return null;
            e.nodes = [w(`&:nth-child(${t.value.value})`, e.nodes)];
          }),
          t.functional("nth-last", (e, t) => {
            if (
              !t.value ||
              t.modifier ||
              ("named" === t.value.kind && !de(t.value.value))
            )
              return null;
            e.nodes = [w(`&:nth-last-child(${t.value.value})`, e.nodes)];
          }),
          t.functional("nth-of-type", (e, t) => {
            if (
              !t.value ||
              t.modifier ||
              ("named" === t.value.kind && !de(t.value.value))
            )
              return null;
            e.nodes = [w(`&:nth-of-type(${t.value.value})`, e.nodes)];
          }),
          t.functional("nth-last-of-type", (e, t) => {
            if (
              !t.value ||
              t.modifier ||
              ("named" === t.value.kind && !de(t.value.value))
            )
              return null;
            e.nodes = [w(`&:nth-last-of-type(${t.value.value})`, e.nodes)];
          }),
          t.functional(
            "supports",
            (e, t) => {
              if (!t.value || t.modifier) return null;
              let r = t.value.value;
              if (null === r) return null;
              if (/^[\w-]*\s*\(/.test(r)) {
                let t = r.replace(/\b(and|or|not)\b/g, " $1 ");
                e.nodes = [k("@supports", t, e.nodes)];
              } else
                r.includes(":") || (r = `${r}: var(--tw)`),
                  ("(" !== r[0] || ")" !== r[r.length - 1]) && (r = `(${r})`),
                  (e.nodes = [k("@supports", r, e.nodes)]);
            },
            { compounds: 1 },
          ),
          r("motion-safe", ["@media (prefers-reduced-motion: no-preference)"]),
          r("motion-reduce", ["@media (prefers-reduced-motion: reduce)"]),
          r("contrast-more", ["@media (prefers-contrast: more)"]),
          r("contrast-less", ["@media (prefers-contrast: less)"]);
        {
          let r = function (e, t, r, n) {
            if (e === t) return 0;
            let o = n.get(e);
            if (null === o) return "asc" === r ? -1 : 1;
            let a = n.get(t);
            return null === a ? ("asc" === r ? 1 : -1) : P(o, a, r);
          };
          {
            let n = e.namespace("--breakpoint"),
              o = new c((t) => {
                switch (t.kind) {
                  case "static":
                    return e.resolveValue(t.root, ["--breakpoint"]) ?? null;
                  case "functional": {
                    if (!t.value || t.modifier) return null;
                    let r = null;
                    return (
                      "arbitrary" === t.value.kind
                        ? (r = t.value.value)
                        : "named" === t.value.kind &&
                          (r = e.resolveValue(t.value.value, ["--breakpoint"])),
                      !r || r.includes("var(") ? null : r
                    );
                  }
                  case "arbitrary":
                  case "compound":
                    return null;
                }
              });
            t.group(
              () => {
                t.functional(
                  "max",
                  (e, t) => {
                    if (t.modifier) return null;
                    let r = o.get(t);
                    if (null === r) return null;
                    e.nodes = [k("@media", `(width < ${r})`, e.nodes)];
                  },
                  { compounds: 1 },
                );
              },
              (e, t) => r(e, t, "desc", o),
            ),
              t.suggest("max", () =>
                Array.from(n.keys()).filter((e) => null !== e),
              ),
              t.group(
                () => {
                  for (let [r, n] of e.namespace("--breakpoint"))
                    null !== r &&
                      t.static(
                        r,
                        (e) => {
                          e.nodes = [k("@media", `(width >= ${n})`, e.nodes)];
                        },
                        { compounds: 1 },
                      );
                  t.functional(
                    "min",
                    (e, t) => {
                      if (t.modifier) return null;
                      let r = o.get(t);
                      if (null === r) return null;
                      e.nodes = [k("@media", `(width >= ${r})`, e.nodes)];
                    },
                    { compounds: 1 },
                  );
                },
                (e, t) => r(e, t, "asc", o),
              ),
              t.suggest("min", () =>
                Array.from(n.keys()).filter((e) => null !== e),
              );
          }
          {
            let n = e.namespace("--container"),
              o = new c((t) => {
                switch (t.kind) {
                  case "functional": {
                    if (null === t.value) return null;
                    let r = null;
                    return (
                      "arbitrary" === t.value.kind
                        ? (r = t.value.value)
                        : "named" === t.value.kind &&
                          (r = e.resolveValue(t.value.value, ["--container"])),
                      !r || r.includes("var(") ? null : r
                    );
                  }
                  case "static":
                  case "arbitrary":
                  case "compound":
                    return null;
                }
              });
            t.group(
              () => {
                t.functional(
                  "@max",
                  (e, t) => {
                    let r = o.get(t);
                    if (null === r) return null;
                    e.nodes = [
                      k(
                        "@container",
                        t.modifier
                          ? `${t.modifier.value} (width < ${r})`
                          : `(width < ${r})`,
                        e.nodes,
                      ),
                    ];
                  },
                  { compounds: 1 },
                );
              },
              (e, t) => r(e, t, "desc", o),
            ),
              t.suggest("@max", () =>
                Array.from(n.keys()).filter((e) => null !== e),
              ),
              t.group(
                () => {
                  t.functional(
                    "@",
                    (e, t) => {
                      let r = o.get(t);
                      if (null === r) return null;
                      e.nodes = [
                        k(
                          "@container",
                          t.modifier
                            ? `${t.modifier.value} (width >= ${r})`
                            : `(width >= ${r})`,
                          e.nodes,
                        ),
                      ];
                    },
                    { compounds: 1 },
                  ),
                    t.functional(
                      "@min",
                      (e, t) => {
                        let r = o.get(t);
                        if (null === r) return null;
                        e.nodes = [
                          k(
                            "@container",
                            t.modifier
                              ? `${t.modifier.value} (width >= ${r})`
                              : `(width >= ${r})`,
                            e.nodes,
                          ),
                        ];
                      },
                      { compounds: 1 },
                    );
                },
                (e, t) => r(e, t, "asc", o),
              ),
              t.suggest("@min", () =>
                Array.from(n.keys()).filter((e) => null !== e),
              ),
              t.suggest("@", () =>
                Array.from(n.keys()).filter((e) => null !== e),
              );
          }
        }
        return (
          r("portrait", ["@media (orientation: portrait)"]),
          r("landscape", ["@media (orientation: landscape)"]),
          r("ltr", ['&:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)']),
          r("rtl", ['&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)']),
          r("dark", ["@media (prefers-color-scheme: dark)"]),
          r("starting", ["@starting-style"]),
          r("print", ["@media print"]),
          r("forced-colors", ["@media (forced-colors: active)"]),
          r("inverted-colors", ["@media (inverted-colors: inverted)"]),
          r("pointer-none", ["@media (pointer: none)"]),
          r("pointer-coarse", ["@media (pointer: coarse)"]),
          r("pointer-fine", ["@media (pointer: fine)"]),
          r("any-pointer-none", ["@media (any-pointer: none)"]),
          r("any-pointer-coarse", ["@media (any-pointer: coarse)"]),
          r("any-pointer-fine", ["@media (any-pointer: fine)"]),
          r("noscript", ["@media (scripting: none)"]),
          t
        );
      })(e),
      n = new c((e) =>
        (function (e, t) {
          if ("[" === e[0] && "]" === e[e.length - 1]) {
            if ("@" === e[1] && e.includes("&")) return null;
            let t = W(e.slice(1, -1));
            if (!L(t) || 0 === t.length || 0 === t.trim().length) return null;
            let r = ">" === t[0] || "+" === t[0] || "~" === t[0];
            return (
              !r && "@" !== t[0] && !t.includes("&") && (t = `&:is(${t})`),
              { kind: "arbitrary", selector: t, relative: r }
            );
          }
          {
            let [r, n = null, o] = R(e, "/");
            if (o) return null;
            let a = q(r, (e) => t.variants.has(e));
            for (let [e, r] of a)
              switch (t.variants.kind(e)) {
                case "static":
                  return null !== r || null !== n
                    ? null
                    : { kind: "static", root: e };
                case "functional": {
                  let t = null === n ? null : I(n);
                  if (null !== n && null === t) return null;
                  if (null === r)
                    return {
                      kind: "functional",
                      root: e,
                      modifier: t,
                      value: null,
                    };
                  if ("]" === r[r.length - 1]) {
                    if ("[" !== r[0]) continue;
                    let n = W(r.slice(1, -1));
                    return L(n) && 0 !== n.length && 0 !== n.trim().length
                      ? {
                          kind: "functional",
                          root: e,
                          modifier: t,
                          value: { kind: "arbitrary", value: n },
                        }
                      : null;
                  }
                  if (")" === r[r.length - 1]) {
                    if ("(" !== r[0]) continue;
                    let n = W(r.slice(1, -1));
                    return !L(n) ||
                      0 === n.length ||
                      0 === n.trim().length ||
                      ("-" !== n[0] && "-" !== n[1])
                      ? null
                      : {
                          kind: "functional",
                          root: e,
                          modifier: t,
                          value: { kind: "arbitrary", value: `var(${n})` },
                        };
                  }
                  return {
                    kind: "functional",
                    root: e,
                    modifier: t,
                    value: { kind: "named", value: r },
                  };
                }
                case "compound": {
                  if (null === r) return null;
                  let o = t.parseVariant(r);
                  if (null === o || !t.variants.compoundsWith(e, o))
                    return null;
                  let a = null === n ? null : I(n);
                  return null !== n && null === a
                    ? null
                    : { kind: "compound", root: e, modifier: a, variant: o };
                }
              }
          }
          return null;
        })(e, s),
      ),
      a = new c((e) =>
        Array.from(
          (function* (e, t) {
            let r = R(e, ":");
            if (t.theme.prefix) {
              if (1 === r.length || r[0] !== t.theme.prefix) return null;
              r.shift();
            }
            let n = r.pop(),
              o = [];
            for (let e = r.length - 1; e >= 0; --e) {
              let n = t.parseVariant(r[e]);
              if (null === n) return;
              o.push(n);
            }
            let a = !1;
            "!" === n[n.length - 1]
              ? ((a = !0), (n = n.slice(0, -1)))
              : "!" === n[0] && ((a = !0), (n = n.slice(1))),
              t.utilities.has(n, "static") &&
                !n.includes("[") &&
                (yield {
                  kind: "static",
                  root: n,
                  variants: o,
                  important: a,
                  raw: e,
                });
            let [i, l = null, s] = R(n, "/");
            if (s) return;
            let c,
              u = null === l ? null : I(l);
            if (null === l || null !== u)
              if ("[" !== i[0]) {
                if ("]" === i[i.length - 1]) {
                  let e = i.indexOf("-[");
                  if (-1 === e) return;
                  let r = i.slice(0, e);
                  if (!t.utilities.has(r, "functional")) return;
                  c = [[r, i.slice(e + 1)]];
                } else if (")" === i[i.length - 1]) {
                  let e = i.indexOf("-(");
                  if (-1 === e) return;
                  let r = i.slice(0, e);
                  if (!t.utilities.has(r, "functional")) return;
                  let n = i.slice(e + 2, -1),
                    o = R(n, ":"),
                    a = null;
                  if (
                    (2 === o.length && ((a = o[0]), (n = o[1])),
                    "-" !== n[0] && "-" !== n[1])
                  )
                    return;
                  c = [[r, null === a ? `[var(${n})]` : `[${a}:var(${n})]`]];
                } else c = q(i, (e) => t.utilities.has(e, "functional"));
                for (let [t, r] of c) {
                  let n = {
                    kind: "functional",
                    root: t,
                    modifier: u,
                    value: null,
                    variants: o,
                    important: a,
                    raw: e,
                  };
                  if (null !== r) {
                    {
                      let e = r.indexOf("[");
                      if (-1 !== e) {
                        if ("]" !== r[r.length - 1]) return;
                        let t = W(r.slice(e + 1, -1));
                        if (!L(t)) continue;
                        let o = "";
                        for (let e = 0; e < t.length; e++) {
                          let r = t.charCodeAt(e);
                          if (58 === r) {
                            (o = t.slice(0, e)), (t = t.slice(e + 1));
                            break;
                          }
                          if (!(45 === r || (r >= 97 && r <= 122))) break;
                        }
                        if (0 === t.length || 0 === t.trim().length) continue;
                        n.value = {
                          kind: "arbitrary",
                          dataType: o || null,
                          value: t,
                        };
                      } else {
                        let e =
                          null === l || "arbitrary" === n.modifier?.kind
                            ? null
                            : `${r}/${l}`;
                        n.value = { kind: "named", value: r, fraction: e };
                      }
                    }
                    yield n;
                  } else yield n;
                }
              } else {
                if ("]" !== i[i.length - 1]) return;
                let t = i.charCodeAt(1);
                if (45 !== t && !(t >= 97 && t <= 122)) return;
                i = i.slice(1, -1);
                let r = i.indexOf(":");
                if (-1 === r || 0 === r || r === i.length - 1) return;
                let n = i.slice(0, r),
                  l = W(i.slice(r + 1));
                if (!L(l)) return;
                yield {
                  kind: "arbitrary",
                  property: n,
                  value: l,
                  modifier: u,
                  variants: o,
                  important: a,
                  raw: e,
                };
              }
          })(e, s),
        ),
      ),
      i = new c((e) => {
        let t = (function (e, t) {
          let r = (function (e, t) {
            if ("arbitrary" === e.kind) {
              let r = e.value;
              return (
                e.modifier && (r = Te(r, e.modifier, t.theme)),
                null === r ? [] : [[y(e.property, r)]]
              );
            }
            let r = t.utilities.get(e.root) ?? [],
              n = [],
              o = r.filter((e) => !He(e));
            for (let t of o) {
              if (t.kind !== e.kind) continue;
              let r = t.compileFn(e);
              if (void 0 !== r) {
                if (null === r) return n;
                n.push(r);
              }
            }
            if (n.length > 0) return n;
            let a = r.filter((e) => He(e));
            for (let t of a) {
              if (t.kind !== e.kind) continue;
              let r = t.compileFn(e);
              if (void 0 !== r) {
                if (null === r) return n;
                n.push(r);
              }
            }
            return n;
          })(e, t);
          if (0 === r.length) return [];
          let n = [],
            a = `.${o(e.raw)}`;
          for (let o of r) {
            let r = Ze(o);
            (e.important || t.important) && Ye(o);
            let i = { kind: "rule", selector: a, nodes: o };
            for (let r of e.variants)
              if (null === Pe(i, r, t.variants)) return [];
            n.push({ node: i, propertySort: r });
          }
          return n;
        })(e, s);
        try {
          Ne(
            t.map(({ node: e }) => e),
            s,
          );
        } catch {
          return [];
        }
        return t;
      }),
      l = new c((t) => {
        for (let r of g(t)) e.markUsedVariable(r);
      }),
      s = {
        theme: e,
        utilities: t,
        variants: r,
        invalidCandidates: new Set(),
        important: !1,
        candidatesToCss(e) {
          let t = [];
          for (let r of e) {
            let e = !1,
              { astNodes: n } = qe([r], this, {
                onInvalidCandidate() {
                  e = !0;
                },
              });
            (n = j(n, s, 0)), 0 === n.length || e ? t.push(null) : t.push(C(n));
          }
          return t;
        },
        getClassOrder(e) {
          return (function (e, t) {
            let { astNodes: r, nodeSorting: n } = qe(Array.from(t), e),
              o = new Map(t.map((e) => [e, null])),
              a = 0n;
            for (let e of r) {
              let t = n.get(e)?.candidate;
              t && o.set(t, o.get(t) ?? a++);
            }
            return t.map((e) => [e, o.get(e) ?? null]);
          })(this, e);
        },
        getClassList() {
          return Ue(this);
        },
        getVariants() {
          return (function (e) {
            let t = [];
            for (let [r, n] of e.variants.entries()) {
              let o = function ({ value: t, modifier: n } = {}) {
                let o = r;
                t && (o += a ? `-${t}` : t), n && (o += `/${n}`);
                let i = e.parseVariant(o);
                if (!i) return [];
                let l = w(".__placeholder__", []);
                if (null === Pe(l, i, e.variants)) return [];
                let s = [];
                return (
                  T(l.nodes, (e, { path: t }) => {
                    if (
                      ("rule" !== e.kind && "at-rule" !== e.kind) ||
                      e.nodes.length > 0
                    )
                      return;
                    t.sort((e, t) => {
                      let r = "at-rule" === e.kind,
                        n = "at-rule" === t.kind;
                      return r && !n ? -1 : !r && n ? 1 : 0;
                    });
                    let r = t.flatMap((e) =>
                        "rule" === e.kind
                          ? "&" === e.selector
                            ? []
                            : [e.selector]
                          : "at-rule" === e.kind
                            ? [`${e.name} ${e.params}`]
                            : [],
                      ),
                      n = "";
                    for (let e = r.length - 1; e >= 0; e--)
                      n = "" === n ? r[e] : `${r[e]} { ${n} }`;
                    s.push(n);
                  }),
                  s
                );
              };
              if ("arbitrary" === n.kind) continue;
              let a = "@" !== r,
                i = e.variants.getCompletions(r);
              switch (n.kind) {
                case "static":
                  t.push({
                    name: r,
                    values: i,
                    isArbitrary: !1,
                    hasDash: a,
                    selectors: o,
                  });
                  break;
                case "functional":
                case "compound":
                  t.push({
                    name: r,
                    values: i,
                    isArbitrary: !0,
                    hasDash: a,
                    selectors: o,
                  });
              }
            }
            return t;
          })(this);
        },
        parseCandidate: (e) => a.get(e),
        parseVariant: (e) => n.get(e),
        compileAstNodes: (e) => i.get(e),
        getVariantOrder() {
          let e = Array.from(n.values());
          e.sort((e, t) => this.variants.compare(e, t));
          let t,
            r = new Map(),
            o = 0;
          for (let n of e)
            null !== n &&
              (void 0 !== t && 0 !== this.variants.compare(t, n) && o++,
              r.set(n, o),
              (t = n));
          return r;
        },
        resolveThemeValue(t, r = !0) {
          let n = t.lastIndexOf("/"),
            o = null;
          -1 !== n && ((o = t.slice(n + 1).trim()), (t = t.slice(0, n).trim()));
          let a = e.resolve(null, [t], r ? 1 : 0) ?? void 0;
          return o && a ? ze(a, o) : a;
        },
        trackUsedVariables(e) {
          l.get(e);
        },
      };
    return s;
  }
  var Ie = [
    "container-type",
    "pointer-events",
    "visibility",
    "position",
    "inset",
    "inset-inline",
    "inset-block",
    "inset-inline-start",
    "inset-inline-end",
    "top",
    "right",
    "bottom",
    "left",
    "isolation",
    "z-index",
    "order",
    "grid-column",
    "grid-column-start",
    "grid-column-end",
    "grid-row",
    "grid-row-start",
    "grid-row-end",
    "float",
    "clear",
    "--tw-container-component",
    "margin",
    "margin-inline",
    "margin-block",
    "margin-inline-start",
    "margin-inline-end",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left",
    "box-sizing",
    "display",
    "field-sizing",
    "aspect-ratio",
    "height",
    "max-height",
    "min-height",
    "width",
    "max-width",
    "min-width",
    "flex",
    "flex-shrink",
    "flex-grow",
    "flex-basis",
    "table-layout",
    "caption-side",
    "border-collapse",
    "border-spacing",
    "transform-origin",
    "translate",
    "--tw-translate-x",
    "--tw-translate-y",
    "--tw-translate-z",
    "scale",
    "--tw-scale-x",
    "--tw-scale-y",
    "--tw-scale-z",
    "rotate",
    "--tw-rotate-x",
    "--tw-rotate-y",
    "--tw-rotate-z",
    "--tw-skew-x",
    "--tw-skew-y",
    "transform",
    "animation",
    "cursor",
    "touch-action",
    "--tw-pan-x",
    "--tw-pan-y",
    "--tw-pinch-zoom",
    "resize",
    "scroll-snap-type",
    "--tw-scroll-snap-strictness",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-margin",
    "scroll-margin-inline",
    "scroll-margin-block",
    "scroll-margin-inline-start",
    "scroll-margin-inline-end",
    "scroll-margin-top",
    "scroll-margin-right",
    "scroll-margin-bottom",
    "scroll-margin-left",
    "scroll-padding",
    "scroll-padding-inline",
    "scroll-padding-block",
    "scroll-padding-inline-start",
    "scroll-padding-inline-end",
    "scroll-padding-top",
    "scroll-padding-right",
    "scroll-padding-bottom",
    "scroll-padding-left",
    "list-style-position",
    "list-style-type",
    "list-style-image",
    "appearance",
    "columns",
    "break-before",
    "break-inside",
    "break-after",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-template-columns",
    "grid-template-rows",
    "flex-direction",
    "flex-wrap",
    "place-content",
    "place-items",
    "align-content",
    "align-items",
    "justify-content",
    "justify-items",
    "gap",
    "column-gap",
    "row-gap",
    "--tw-space-x-reverse",
    "--tw-space-y-reverse",
    "divide-x-width",
    "divide-y-width",
    "--tw-divide-y-reverse",
    "divide-style",
    "divide-color",
    "place-self",
    "align-self",
    "justify-self",
    "overflow",
    "overflow-x",
    "overflow-y",
    "overscroll-behavior",
    "overscroll-behavior-x",
    "overscroll-behavior-y",
    "scroll-behavior",
    "border-radius",
    "border-start-radius",
    "border-end-radius",
    "border-top-radius",
    "border-right-radius",
    "border-bottom-radius",
    "border-left-radius",
    "border-start-start-radius",
    "border-start-end-radius",
    "border-end-end-radius",
    "border-end-start-radius",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-bottom-right-radius",
    "border-bottom-left-radius",
    "border-width",
    "border-inline-width",
    "border-block-width",
    "border-inline-start-width",
    "border-inline-end-width",
    "border-top-width",
    "border-right-width",
    "border-bottom-width",
    "border-left-width",
    "border-style",
    "border-inline-style",
    "border-block-style",
    "border-inline-start-style",
    "border-inline-end-style",
    "border-top-style",
    "border-right-style",
    "border-bottom-style",
    "border-left-style",
    "border-color",
    "border-inline-color",
    "border-block-color",
    "border-inline-start-color",
    "border-inline-end-color",
    "border-top-color",
    "border-right-color",
    "border-bottom-color",
    "border-left-color",
    "background-color",
    "background-image",
    "--tw-gradient-position",
    "--tw-gradient-stops",
    "--tw-gradient-via-stops",
    "--tw-gradient-from",
    "--tw-gradient-from-position",
    "--tw-gradient-via",
    "--tw-gradient-via-position",
    "--tw-gradient-to",
    "--tw-gradient-to-position",
    "mask-image",
    "--tw-mask-top",
    "--tw-mask-top-from-color",
    "--tw-mask-top-from-position",
    "--tw-mask-top-to-color",
    "--tw-mask-top-to-position",
    "--tw-mask-right",
    "--tw-mask-right-from-color",
    "--tw-mask-right-from-position",
    "--tw-mask-right-to-color",
    "--tw-mask-right-to-position",
    "--tw-mask-bottom",
    "--tw-mask-bottom-from-color",
    "--tw-mask-bottom-from-position",
    "--tw-mask-bottom-to-color",
    "--tw-mask-bottom-to-position",
    "--tw-mask-left",
    "--tw-mask-left-from-color",
    "--tw-mask-left-from-position",
    "--tw-mask-left-to-color",
    "--tw-mask-left-to-position",
    "--tw-mask-linear",
    "--tw-mask-linear-position",
    "--tw-mask-linear-from-color",
    "--tw-mask-linear-from-position",
    "--tw-mask-linear-to-color",
    "--tw-mask-linear-to-position",
    "--tw-mask-radial",
    "--tw-mask-radial-shape",
    "--tw-mask-radial-size",
    "--tw-mask-radial-position",
    "--tw-mask-radial-from-color",
    "--tw-mask-radial-from-position",
    "--tw-mask-radial-to-color",
    "--tw-mask-radial-to-position",
    "--tw-mask-conic",
    "--tw-mask-conic-position",
    "--tw-mask-conic-from-color",
    "--tw-mask-conic-from-position",
    "--tw-mask-conic-to-color",
    "--tw-mask-conic-to-position",
    "box-decoration-break",
    "background-size",
    "background-attachment",
    "background-clip",
    "background-position",
    "background-repeat",
    "background-origin",
    "mask-composite",
    "mask-mode",
    "mask-type",
    "mask-size",
    "mask-clip",
    "mask-position",
    "mask-repeat",
    "mask-origin",
    "fill",
    "stroke",
    "stroke-width",
    "object-fit",
    "object-position",
    "padding",
    "padding-inline",
    "padding-block",
    "padding-inline-start",
    "padding-inline-end",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left",
    "text-align",
    "text-indent",
    "vertical-align",
    "font-family",
    "font-size",
    "line-height",
    "font-weight",
    "letter-spacing",
    "text-wrap",
    "overflow-wrap",
    "word-break",
    "text-overflow",
    "hyphens",
    "white-space",
    "color",
    "text-transform",
    "font-style",
    "font-stretch",
    "font-variant-numeric",
    "text-decoration-line",
    "text-decoration-color",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-underline-offset",
    "-webkit-font-smoothing",
    "placeholder-color",
    "caret-color",
    "accent-color",
    "color-scheme",
    "opacity",
    "background-blend-mode",
    "mix-blend-mode",
    "box-shadow",
    "--tw-shadow",
    "--tw-shadow-color",
    "--tw-ring-shadow",
    "--tw-ring-color",
    "--tw-inset-shadow",
    "--tw-inset-shadow-color",
    "--tw-inset-ring-shadow",
    "--tw-inset-ring-color",
    "--tw-ring-offset-width",
    "--tw-ring-offset-color",
    "outline",
    "outline-width",
    "outline-offset",
    "outline-color",
    "--tw-blur",
    "--tw-brightness",
    "--tw-contrast",
    "--tw-drop-shadow",
    "--tw-grayscale",
    "--tw-hue-rotate",
    "--tw-invert",
    "--tw-saturate",
    "--tw-sepia",
    "filter",
    "--tw-backdrop-blur",
    "--tw-backdrop-brightness",
    "--tw-backdrop-contrast",
    "--tw-backdrop-grayscale",
    "--tw-backdrop-hue-rotate",
    "--tw-backdrop-invert",
    "--tw-backdrop-opacity",
    "--tw-backdrop-saturate",
    "--tw-backdrop-sepia",
    "backdrop-filter",
    "transition-property",
    "transition-behavior",
    "transition-delay",
    "transition-duration",
    "transition-timing-function",
    "will-change",
    "contain",
    "content",
    "forced-color-adjust",
  ];
  function qe(e, t, { onInvalidCandidate: r } = {}) {
    let n = new Map(),
      o = [],
      a = new Map();
    for (let n of e) {
      if (t.invalidCandidates.has(n)) {
        r?.(n);
        continue;
      }
      let e = t.parseCandidate(n);
      0 !== e.length ? a.set(n, e) : r?.(n);
    }
    let i = t.getVariantOrder();
    for (let [e, l] of a) {
      let a = !1;
      for (let r of l) {
        let l = t.compileAstNodes(r);
        if (0 !== l.length) {
          a = !0;
          for (let { node: t, propertySort: a } of l) {
            let l = 0n;
            for (let e of r.variants) l |= 1n << BigInt(i.get(e));
            n.set(t, { properties: a, variants: l, candidate: e }), o.push(t);
          }
        }
      }
      a || r?.(e);
    }
    return (
      o.sort((e, t) => {
        let r = n.get(e),
          o = n.get(t);
        if (r.variants - o.variants !== 0n)
          return Number(r.variants - o.variants);
        let a = 0;
        for (
          ;
          a < r.properties.order.length &&
          a < o.properties.order.length &&
          r.properties.order[a] === o.properties.order[a];

        )
          a += 1;
        return (
          (r.properties.order[a] ?? 1 / 0) - (o.properties.order[a] ?? 1 / 0) ||
          o.properties.count - r.properties.count ||
          Fe(r.candidate, o.candidate)
        );
      }),
      { astNodes: o, nodeSorting: n }
    );
  }
  function Pe(e, t, r, n = 0) {
    if ("arbitrary" === t.kind)
      return t.relative && 0 === n
        ? null
        : void (e.nodes = [b(t.selector, e.nodes)]);
    let { applyFn: o } = r.get(t.root);
    if ("compound" === t.kind) {
      let a = k("@slot");
      if (
        null === Pe(a, t.variant, r, n + 1) ||
        ("not" === t.root && a.nodes.length > 1)
      )
        return null;
      for (let e of a.nodes)
        if (("rule" !== e.kind && "at-rule" !== e.kind) || null === o(e, t))
          return null;
      return (
        A(a.nodes, (t) => {
          if (
            ("rule" === t.kind || "at-rule" === t.kind) &&
            t.nodes.length <= 0
          )
            return (t.nodes = e.nodes), 1;
        }),
        void (e.nodes = a.nodes)
      );
    }
    return null === o(e, t) ? null : void 0;
  }
  function He(e) {
    let t = e.options?.types ?? [];
    return t.length > 1 && t.includes("any");
  }
  function Ye(e) {
    for (let t of e)
      "at-root" !== t.kind &&
        ("declaration" === t.kind
          ? (t.important = !0)
          : ("rule" === t.kind || "at-rule" === t.kind) && Ye(t.nodes));
  }
  function Ze(e) {
    let t = new Set(),
      r = 0,
      n = e.slice(),
      o = !1;
    for (; n.length > 0; ) {
      let e = n.shift();
      if ("declaration" === e.kind) {
        if (void 0 === e.value || (r++, o)) continue;
        if ("--tw-sort" === e.property) {
          let r = Ie.indexOf(e.value ?? "");
          if (-1 !== r) {
            t.add(r), (o = !0);
            continue;
          }
        }
        let n = Ie.indexOf(e.property);
        -1 !== n && t.add(n);
      } else if ("rule" === e.kind || "at-rule" === e.kind)
        for (let t of e.nodes) n.push(t);
    }
    return { order: Array.from(t).sort((e, t) => e - t), count: r };
  }
  function Ge(e, t) {
    let r = 0,
      n = b("&", e),
      o = new Set(),
      a = new c(() => new Set()),
      i = new c(() => new Set());
    A([n], (e, { parent: n }) => {
      if ("at-rule" === e.kind) {
        if ("@keyframes" === e.name)
          return (
            A(e.nodes, (e) => {
              if ("at-rule" === e.kind && "@apply" === e.name)
                throw new Error("You cannot use `@apply` inside `@keyframes`.");
            }),
            1
          );
        if ("@utility" === e.name) {
          let r = e.params.replace(/-\*$/, "");
          return (
            i.get(r).add(e),
            void A(e.nodes, (r) => {
              if ("at-rule" === r.kind && "@apply" === r.name) {
                o.add(e);
                for (let n of Xe(r, t)) a.get(e).add(n);
              }
            })
          );
        }
        if ("@apply" === e.name) {
          if (null === n) return;
          (r |= 1), o.add(n);
          for (let r of Xe(e, t)) a.get(n).add(r);
        }
      }
    });
    let l = new Set(),
      s = [],
      u = new Set();
    function d(e, r = []) {
      if (!l.has(e)) {
        if (u.has(e)) {
          let n = r[(r.indexOf(e) + 1) % r.length];
          throw (
            ("at-rule" === e.kind &&
              "@utility" === e.name &&
              "at-rule" === n.kind &&
              "@utility" === n.name &&
              A(e.nodes, (e) => {
                if ("at-rule" !== e.kind || "@apply" !== e.name) return;
                let r = e.params.split(/\s+/g);
                for (let e of r)
                  for (let r of t.parseCandidate(e))
                    switch (r.kind) {
                      case "arbitrary":
                        break;
                      case "static":
                      case "functional":
                        if (n.params.replace(/-\*$/, "") === r.root)
                          throw new Error(
                            `You cannot \`@apply\` the \`${e}\` utility here because it creates a circular dependency.`,
                          );
                    }
              }),
            new Error(
              `Circular dependency detected:\n\n${C([e])}\nRelies on:\n\n${C([n])}`,
            ))
          );
        }
        u.add(e);
        for (let t of a.get(e))
          for (let n of i.get(t)) r.push(e), d(n, r), r.pop();
        l.add(e), u.delete(e), s.push(e);
      }
    }
    for (let e of o) d(e);
    for (let e of s)
      if ("nodes" in e)
        for (let r = 0; r < e.nodes.length; r++) {
          let n = e.nodes[r];
          if ("at-rule" === n.kind && "@apply" === n.name) {
            let o = qe(n.params.split(/\s+/g), t, {
                onInvalidCandidate: (e) => {
                  throw new Error(`Cannot apply unknown utility class: ${e}`);
                },
              }).astNodes,
              a = [];
            for (let e of o)
              if ("rule" === e.kind) for (let t of e.nodes) a.push(t);
              else a.push(e);
            e.nodes.splice(r, 1, ...a);
          }
        }
    return r;
  }
  function* Xe(e, t) {
    for (let r of e.params.split(/\s+/g))
      for (let e of t.parseCandidate(r))
        switch (e.kind) {
          case "arbitrary":
            break;
          case "static":
          case "functional":
            yield e.root;
        }
  }
  async function Je(e, r, n, o = 0) {
    let a = 0,
      i = [];
    return (
      A(e, (e, { replaceWith: l }) => {
        if (
          "at-rule" === e.kind &&
          ("@import" === e.name || "@reference" === e.name)
        ) {
          let s = (function (e) {
            let t,
              r = null,
              n = null,
              o = null;
            for (let a = 0; a < e.length; a++) {
              let i = e[a];
              if ("separator" !== i.kind) {
                if ("word" === i.kind && !t) {
                  if (!i.value || ('"' !== i.value[0] && "'" !== i.value[0]))
                    return null;
                  t = i.value.slice(1, -1);
                  continue;
                }
                if (
                  ("function" === i.kind && "url" === i.value.toLowerCase()) ||
                  !t
                )
                  return null;
                if (
                  ("word" === i.kind || "function" === i.kind) &&
                  "layer" === i.value.toLowerCase()
                ) {
                  if (r) return null;
                  if (o)
                    throw new Error(
                      "`layer(…)` in an `@import` should come before any other functions or conditions",
                    );
                  r = "nodes" in i ? h(i.nodes) : "";
                  continue;
                }
                if (
                  "function" === i.kind &&
                  "supports" === i.value.toLowerCase()
                ) {
                  if (o) return null;
                  o = h(i.nodes);
                  continue;
                }
                n = h(e.slice(a));
                break;
              }
            }
            return t ? { uri: t, layer: r, media: n, supports: o } : null;
          })(m(e.params));
          if (null === s) return;
          "@reference" === e.name && (s.media = "reference"), (a |= 2);
          let { uri: c, layer: u, media: d, supports: f } = s;
          if (
            c.startsWith("data:") ||
            c.startsWith("http://") ||
            c.startsWith("https://")
          )
            return;
          let p = $({}, []);
          return (
            i.push(
              (async () => {
                if (o > 100)
                  throw new Error(
                    `Exceeded maximum recursion depth while resolving \`${c}\` in \`${r}\`)`,
                  );
                let e = await n(c, r),
                  a = t(e.content);
                await Je(a, e.base, n, o + 1),
                  (p.nodes = (function (e, t, r, n) {
                    let o = e;
                    return (
                      null !== t && (o = [k("@layer", t, o)]),
                      null !== r && (o = [k("@media", r, o)]),
                      null !== n &&
                        (o = [k("@supports", "(" === n[0] ? n : `(${n})`, o)]),
                      o
                    );
                  })([$({ base: e.base }, a)], u, d, f));
              })(),
            ),
            l(p),
            1
          );
        }
      }),
      i.length > 0 && (await Promise.all(i)),
      a
    );
  }
  function Qe(e, t = null) {
    return Array.isArray(e) &&
      2 === e.length &&
      "object" == typeof e[1] &&
      null !== typeof e[1]
      ? t
        ? (e[1][t] ?? null)
        : e[0]
      : Array.isArray(e) && null === t
        ? e.join(", ")
        : "string" == typeof e && null === t
          ? e
          : null;
  }
  function et(e, { theme: t }, r) {
    for (let t of r) {
      let r = rt([t]);
      r && e.theme.clearNamespace(`--${r}`, 4);
    }
    for (let [r, n] of (function (e) {
      let t = [];
      return (
        nt(e, [], (e, r) => {
          if (
            (function (e) {
              return "number" == typeof e || "string" == typeof e;
            })(e)
          )
            return t.push([r, e]), 1;
          if (
            (function (e) {
              if (
                !Array.isArray(e) ||
                2 !== e.length ||
                ("string" != typeof e[0] && "number" != typeof e[0]) ||
                void 0 === e[1] ||
                null === e[1] ||
                "object" != typeof e[1]
              )
                return !1;
              for (let t of Reflect.ownKeys(e[1]))
                if (
                  "string" != typeof t ||
                  ("string" != typeof e[1][t] && "number" != typeof e[1][t])
                )
                  return !1;
              return !0;
            })(e)
          ) {
            t.push([r, e[0]]);
            for (let n of Reflect.ownKeys(e[1]))
              t.push([[...r, `-${n}`], e[1][n]]);
            return 1;
          }
          return Array.isArray(e) && e.every((e) => "string" == typeof e)
            ? (t.push([r, e.join(", ")]), 1)
            : void 0;
        }),
        t
      );
    })(t)) {
      if ("string" != typeof n && "number" != typeof n) continue;
      if (
        ("string" == typeof n && (n = n.replace(/<alpha-value>/g, "1")),
        "opacity" === r[0] && ("number" == typeof n || "string" == typeof n))
      ) {
        let e = "string" == typeof n ? parseFloat(n) : n;
        e >= 0 && e <= 1 && (n = 100 * e + "%");
      }
      let t = rt(r);
      t && e.theme.add(`--${t}`, "" + n, 7);
    }
    if (Object.hasOwn(t, "fontFamily")) {
      let r = 5;
      {
        let n = Qe(t.fontFamily.sans);
        n &&
          e.theme.hasDefault("--font-sans") &&
          (e.theme.add("--default-font-family", n, r),
          e.theme.add(
            "--default-font-feature-settings",
            Qe(t.fontFamily.sans, "fontFeatureSettings") ?? "normal",
            r,
          ),
          e.theme.add(
            "--default-font-variation-settings",
            Qe(t.fontFamily.sans, "fontVariationSettings") ?? "normal",
            r,
          ));
      }
      {
        let n = Qe(t.fontFamily.mono);
        n &&
          e.theme.hasDefault("--font-mono") &&
          (e.theme.add("--default-mono-font-family", n, r),
          e.theme.add(
            "--default-mono-font-feature-settings",
            Qe(t.fontFamily.mono, "fontFeatureSettings") ?? "normal",
            r,
          ),
          e.theme.add(
            "--default-mono-font-variation-settings",
            Qe(t.fontFamily.mono, "fontVariationSettings") ?? "normal",
            r,
          ));
      }
    }
    return t;
  }
  var tt = /^[a-zA-Z0-9-_%/\.]+$/;
  function rt(e) {
    if ("container" === e[0]) return null;
    "animation" === (e = structuredClone(e))[0] && (e[0] = "animate"),
      "aspectRatio" === e[0] && (e[0] = "aspect"),
      "borderRadius" === e[0] && (e[0] = "radius"),
      "boxShadow" === e[0] && (e[0] = "shadow"),
      "colors" === e[0] && (e[0] = "color"),
      "containers" === e[0] && (e[0] = "container"),
      "fontFamily" === e[0] && (e[0] = "font"),
      "fontSize" === e[0] && (e[0] = "text"),
      "letterSpacing" === e[0] && (e[0] = "tracking"),
      "lineHeight" === e[0] && (e[0] = "leading"),
      "maxWidth" === e[0] && (e[0] = "container"),
      "screens" === e[0] && (e[0] = "breakpoint"),
      "transitionTimingFunction" === e[0] && (e[0] = "ease");
    for (let t of e) if (!tt.test(t)) return null;
    return e
      .map((e, t, r) => ("1" === e && t !== r.length - 1 ? "" : e))
      .map((e) =>
        e
          .replaceAll(".", "_")
          .replace(/([a-z])([A-Z])/g, (e, t, r) => `${t}-${r.toLowerCase()}`),
      )
      .filter((t, r) => "DEFAULT" !== t || r !== e.length - 1)
      .join("-");
  }
  function nt(e, t = [], r) {
    for (let n of Reflect.ownKeys(e)) {
      let o = e[n];
      if (null == o) continue;
      let a = [...t, n],
        i = r(o, a) ?? 0;
      if (1 !== i) {
        if (2 === i) return 2;
        if ((Array.isArray(o) || "object" == typeof o) && 2 === nt(o, a, r))
          return 2;
      }
    }
  }
  function ot(e) {
    let t = [];
    for (let r of R(e, ".")) {
      if (!r.includes("[")) {
        t.push(r);
        continue;
      }
      let e = 0;
      for (;;) {
        let n = r.indexOf("[", e),
          o = r.indexOf("]", n);
        if (-1 === n || -1 === o) break;
        n > e && t.push(r.slice(e, n)), t.push(r.slice(n + 1, o)), (e = o + 1);
      }
      e <= r.length - 1 && t.push(r.slice(e));
    }
    return t;
  }
  function at(e) {
    if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
    let t = Object.getPrototypeOf(e);
    return null === t || null === Object.getPrototypeOf(t);
  }
  function it(e, t, r, n = []) {
    for (let o of t)
      if (null != o)
        for (let t of Reflect.ownKeys(o)) {
          n.push(t);
          let a = r(e[t], o[t], n);
          void 0 !== a
            ? (e[t] = a)
            : at(e[t]) && at(o[t])
              ? (e[t] = it({}, [e[t], o[t]], r, n))
              : (e[t] = o[t]),
            n.pop();
        }
    return e;
  }
  function lt(e, t, r) {
    return function (n, o) {
      let i = n.lastIndexOf("/"),
        l = null;
      -1 !== i && ((l = n.slice(i + 1).trim()), (n = n.slice(0, i).trim()));
      let s = (() => {
        let o = ot(n),
          [i, l] = (function (e, t) {
            if (1 === t.length && t[0].startsWith("--"))
              return [e.get([t[0]]), e.getOptions(t[0])];
            let r = rt(t),
              n = new Map(),
              o = new c(() => new Map()),
              a = e.namespace(`--${r}`);
            if (0 === a.size) return [null, 0];
            let i = new Map();
            for (let [t, l] of a) {
              if (!t || !t.includes("--")) {
                n.set(t, l),
                  i.set(t, e.getOptions(t ? `--${r}-${t}` : `--${r}`));
                continue;
              }
              let a = t.indexOf("--"),
                s = t.slice(0, a),
                c = t.slice(a + 2);
              (c = c.replace(/-([a-z])/g, (e, t) => t.toUpperCase())),
                o
                  .get("" === s ? null : s)
                  .set(c, [l, e.getOptions(`--${r}${t}`)]);
            }
            let l = e.getOptions(`--${r}`);
            for (let [e, t] of o) {
              let r = n.get(e);
              if ("string" != typeof r) continue;
              let o = {},
                a = {};
              for (let [e, [r, n]] of t) (o[e] = r), (a[e] = n);
              n.set(e, [r, o]), i.set(e, [l, a]);
            }
            let s = {},
              u = {};
            for (let [e, t] of n) ct(s, [e ?? "DEFAULT"], t);
            for (let [e, t] of i) ct(u, [e ?? "DEFAULT"], t);
            return "DEFAULT" === t[t.length - 1]
              ? [s?.DEFAULT ?? null, u.DEFAULT ?? 0]
              : "DEFAULT" in s && 1 === Object.keys(s).length
                ? [s.DEFAULT, u.DEFAULT ?? 0]
                : ((s.__CSS_VALUES__ = u), [s, u]);
          })(e.theme, o),
          s = r(st(t() ?? {}, o) ?? null);
        if (
          ("string" == typeof s && (s = s.replace("<alpha-value>", "1")),
          "object" != typeof i)
        )
          return "object" != typeof l && 4 & l ? (s ?? i) : i;
        if (null !== s && "object" == typeof s && !Array.isArray(s)) {
          let e = it({}, [s], (e, t) => t);
          if (null === i && Object.hasOwn(s, "__CSS_VALUES__")) {
            let t = {};
            for (let r in s.__CSS_VALUES__) (t[r] = s[r]), delete e[r];
            i = t;
          }
          for (let t in i)
            "__CSS_VALUES__" !== t &&
              ((4 & s?.__CSS_VALUES__?.[t] && void 0 !== st(e, t.split("-"))) ||
                (e[a(t)] = i[t]));
          return e;
        }
        if (Array.isArray(i) && Array.isArray(l) && Array.isArray(s)) {
          let e = i[0],
            t = i[1];
          4 & l[0] && (e = s[0] ?? e);
          for (let e of Object.keys(t)) 4 & l[1][e] && (t[e] = s[1][e] ?? t[e]);
          return [e, t];
        }
        return i ?? s;
      })();
      return l && "string" == typeof s && (s = ze(s, l)), s ?? o;
    };
  }
  function st(e, t) {
    for (let r = 0; r < t.length; ++r) {
      let n = t[r];
      if (void 0 !== e?.[n]) e = e[n];
      else {
        if (void 0 === t[r + 1]) return;
        t[r + 1] = `${n}-${t[r + 1]}`;
      }
    }
    return e;
  }
  function ct(e, t, r) {
    for (let r of t.slice(0, -1)) void 0 === e[r] && (e[r] = {}), (e = e[r]);
    e[t[t.length - 1]] = r;
  }
  function ut(e) {
    return { kind: "combinator", value: e };
  }
  function dt(e, t) {
    return { kind: "function", value: e, nodes: t };
  }
  function ft(e) {
    return { kind: "selector", value: e };
  }
  function pt(e) {
    return { kind: "separator", value: e };
  }
  function ht(e) {
    return { kind: "value", value: e };
  }
  function mt(e, t, r = null) {
    for (let n = 0; n < e.length; n++) {
      let o = e[n],
        a = !1,
        i = 0,
        l =
          t(o, {
            parent: r,
            replaceWith(t) {
              a ||
                ((a = !0),
                Array.isArray(t)
                  ? 0 === t.length
                    ? (e.splice(n, 1), (i = 0))
                    : 1 === t.length
                      ? ((e[n] = t[0]), (i = 1))
                      : (e.splice(n, 1, ...t), (i = t.length))
                  : ((e[n] = t), (i = 1)));
            },
          }) ?? 0;
      if (a) 0 === l ? n-- : (n += i - 1);
      else {
        if (2 === l) return 2;
        if (1 !== l && "function" === o.kind && 2 === mt(o.nodes, t, o))
          return 2;
      }
    }
  }
  function gt(e) {
    let t = "";
    for (let r of e)
      switch (r.kind) {
        case "combinator":
        case "selector":
        case "separator":
        case "value":
          t += r.value;
          break;
        case "function":
          t += r.value + "(" + gt(r.nodes) + ")";
      }
    return t;
  }
  function vt(e) {
    e = e.replaceAll("\r\n", "\n");
    let t,
      r = [],
      n = [],
      o = null,
      a = "";
    for (let i = 0; i < e.length; i++) {
      let l = e.charCodeAt(i);
      switch (l) {
        case 44:
        case 62:
        case 10:
        case 32:
        case 43:
        case 9:
        case 126: {
          if (a.length > 0) {
            let e = ft(a);
            o ? o.nodes.push(e) : r.push(e), (a = "");
          }
          let n = i,
            l = i + 1;
          for (
            ;
            l < e.length &&
            ((t = e.charCodeAt(l)),
            44 === t ||
              62 === t ||
              10 === t ||
              32 === t ||
              43 === t ||
              9 === t ||
              126 === t);
            l++
          );
          i = l - 1;
          let s = e.slice(n, l),
            c = "," === s.trim() ? pt(s) : ut(s);
          o ? o.nodes.push(c) : r.push(c);
          break;
        }
        case 40: {
          let l = dt(a, []);
          if (
            ((a = ""),
            ":not" !== l.value &&
              ":where" !== l.value &&
              ":has" !== l.value &&
              ":is" !== l.value)
          ) {
            let n = i + 1,
              s = 0;
            for (let r = i + 1; r < e.length; r++)
              if (((t = e.charCodeAt(r)), 40 !== t)) {
                if (41 === t) {
                  if (0 === s) {
                    i = r;
                    break;
                  }
                  s--;
                }
              } else s++;
            let c = i;
            l.nodes.push(ht(e.slice(n, c))),
              (a = ""),
              (i = c),
              o ? o.nodes.push(l) : r.push(l);
            break;
          }
          o ? o.nodes.push(l) : r.push(l), n.push(l), (o = l);
          break;
        }
        case 41: {
          let e = n.pop();
          if (a.length > 0) {
            let t = ft(a);
            e.nodes.push(t), (a = "");
          }
          o = n.length > 0 ? n[n.length - 1] : null;
          break;
        }
        case 46:
        case 58:
        case 35:
          if (a.length > 0) {
            let e = ft(a);
            o ? o.nodes.push(e) : r.push(e);
          }
          a = String.fromCharCode(l);
          break;
        case 91: {
          if (a.length > 0) {
            let e = ft(a);
            o ? o.nodes.push(e) : r.push(e);
          }
          a = "";
          let n = i,
            l = 0;
          for (let r = i + 1; r < e.length; r++)
            if (((t = e.charCodeAt(r)), 91 !== t)) {
              if (93 === t) {
                if (0 === l) {
                  i = r;
                  break;
                }
                l--;
              }
            } else l++;
          a += e.slice(n, i + 1);
          break;
        }
        case 39:
        case 34: {
          let r = i;
          for (let r = i + 1; r < e.length; r++)
            if (((t = e.charCodeAt(r)), 92 === t)) r += 1;
            else if (t === l) {
              i = r;
              break;
            }
          a += e.slice(r, i + 1);
          break;
        }
        case 92: {
          let t = e.charCodeAt(i + 1);
          (a += String.fromCharCode(l) + String.fromCharCode(t)), (i += 1);
          break;
        }
        default:
          a += String.fromCharCode(l);
      }
    }
    return a.length > 0 && r.push(ft(a)), r;
  }
  var wt = /^[a-z@][a-zA-Z0-9/%._-]*$/;
  function kt({
    designSystem: e,
    ast: t,
    resolvedConfig: r,
    featuresRef: n,
    referenceMode: o,
  }) {
    let a = {
      addBase(r) {
        if (o) return;
        let a = bt(r);
        (n.current |= Ne(a, e)), t.push(k("@layer", "base", a));
      },
      addVariant(t, r) {
        if (!De.test(t))
          throw new Error(
            `\`addVariant('${t}')\` defines an invalid variant name. Variants should only contain alphanumeric, dashes or underscore characters.`,
          );
        "string" == typeof r || Array.isArray(r)
          ? e.variants.static(
              t,
              (e) => {
                e.nodes = yt(r, e.nodes);
              },
              { compounds: _e("string" == typeof r ? [r] : r) },
            )
          : "object" == typeof r && e.variants.fromAst(t, bt(r));
      },
      matchVariant(t, r, n) {
        function o(e, t, n) {
          return yt(r(e, { modifier: t?.value ?? null }), n);
        }
        let a = Object.keys(n?.values ?? {});
        e.variants.group(
          () => {
            e.variants.functional(t, (e, t) => {
              if (!t.value)
                return n?.values && "DEFAULT" in n.values
                  ? void (e.nodes = o(n.values.DEFAULT, t.modifier, e.nodes))
                  : null;
              if ("arbitrary" === t.value.kind)
                e.nodes = o(t.value.value, t.modifier, e.nodes);
              else if ("named" === t.value.kind && n?.values) {
                let r = n.values[t.value.value];
                if ("string" != typeof r) return;
                e.nodes = o(r, t.modifier, e.nodes);
              }
            });
          },
          (e, t) => {
            if ("functional" !== e.kind || "functional" !== t.kind) return 0;
            let r = e.value ? e.value.value : "DEFAULT",
              o = t.value ? t.value.value : "DEFAULT",
              i = n?.values?.[r] ?? r,
              l = n?.values?.[o] ?? o;
            if (n && "function" == typeof n.sort)
              return n.sort(
                { value: i, modifier: e.modifier?.value ?? null },
                { value: l, modifier: t.modifier?.value ?? null },
              );
            let s = a.indexOf(r),
              c = a.indexOf(o);
            return (
              (s = -1 === s ? a.length : s),
              (c = -1 === c ? a.length : c),
              s !== c ? s - c : i < l ? -1 : 1
            );
          },
        );
      },
      addUtilities(r) {
        let a = (r = Array.isArray(r) ? r : [r]).flatMap((e) =>
          Object.entries(e),
        );
        a = a.flatMap(([e, t]) => R(e, ",").map((e) => [e.trim(), t]));
        let i = new c(() => []);
        for (let [e, r] of a) {
          if (e.startsWith("@keyframes ")) {
            o || t.push(b(e, bt(r)));
            continue;
          }
          let n = vt(e),
            a = !1;
          if (
            (mt(n, (e) => {
              if (
                "selector" === e.kind &&
                "." === e.value[0] &&
                wt.test(e.value.slice(1))
              ) {
                let t = e.value;
                e.value = "&";
                let o = gt(n),
                  l = t.slice(1),
                  s = "&" === o ? bt(r) : [b(o, bt(r))];
                return i.get(l).push(...s), (a = !0), void (e.value = t);
              }
              if ("function" === e.kind && ":not" === e.value) return 1;
            }),
            !a)
          )
            throw new Error(
              `\`addUtilities({ '${e}' : … })\` defines an invalid utility selector. Utilities must be a single class name and start with a lowercase letter, eg. \`.scrollbar-none\`.`,
            );
        }
        for (let [t, r] of i)
          e.theme.prefix &&
            A(r, (t) => {
              if ("rule" === t.kind) {
                let r = vt(t.selector);
                mt(r, (t) => {
                  "selector" === t.kind &&
                    "." === t.value[0] &&
                    (t.value = `.${e.theme.prefix}\\:${t.value.slice(1)}`);
                }),
                  (t.selector = gt(r));
              }
            }),
            e.utilities.static(t, (o) => {
              let a = structuredClone(r);
              return xt(a, t, o.raw), (n.current |= Ge(a, e)), a;
            });
      },
      matchUtilities(t, r) {
        let o = r?.type
          ? Array.isArray(r?.type)
            ? r.type
            : [r.type]
          : ["any"];
        for (let [a, i] of Object.entries(t)) {
          let t = function ({ negative: t }) {
            return (l) => {
              if (
                "arbitrary" === l.value?.kind &&
                o.length > 0 &&
                !o.includes("any") &&
                ((l.value.dataType && !o.includes(l.value.dataType)) ||
                  (!l.value.dataType && !G(l.value.value, o)))
              )
                return;
              let s,
                c = o.includes("color"),
                u = null,
                d = !1;
              {
                let e = r?.values ?? {};
                c &&
                  (e = Object.assign(
                    {
                      inherit: "inherit",
                      transparent: "transparent",
                      current: "currentcolor",
                    },
                    e,
                  )),
                  l.value
                    ? "arbitrary" === l.value.kind
                      ? (u = l.value.value)
                      : l.value.fraction && e[l.value.fraction]
                        ? ((u = e[l.value.fraction]), (d = !0))
                        : e[l.value.value]
                          ? (u = e[l.value.value])
                          : e.__BARE_VALUE__ &&
                            ((u = e.__BARE_VALUE__(l.value) ?? null),
                            (d =
                              (null !== l.value.fraction && u?.includes("/")) ??
                              !1))
                    : (u = e.DEFAULT ?? null);
              }
              if (null === u) return;
              {
                let e = r?.modifiers ?? null;
                s = l.modifier
                  ? "any" === e || "arbitrary" === l.modifier.kind
                    ? l.modifier.value
                    : e?.[l.modifier.value]
                      ? e[l.modifier.value]
                      : c && !Number.isNaN(Number(l.modifier.value))
                        ? `${l.modifier.value}%`
                        : null
                  : null;
              }
              if (l.modifier && null === s && !d)
                return "arbitrary" === l.value?.kind ? null : void 0;
              c && null !== s && (u = ze(u, s)), t && (u = `calc(${u} * -1)`);
              let f = bt(i(u, { modifier: s }));
              return xt(f, a, l.raw), (n.current |= Ge(f, e)), f;
            };
          };
          if (!wt.test(a))
            throw new Error(
              `\`matchUtilities({ '${a}' : … })\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter, eg. \`scrollbar\`.`,
            );
          r?.supportsNegativeValues &&
            e.utilities.functional(`-${a}`, t({ negative: !0 }), { types: o }),
            e.utilities.functional(a, t({ negative: !1 }), { types: o }),
            e.utilities.suggest(a, () => {
              let e = r?.values ?? {},
                t = new Set(Object.keys(e));
              t.delete("__BARE_VALUE__"),
                t.has("DEFAULT") && (t.delete("DEFAULT"), t.add(null));
              let n = r?.modifiers ?? {},
                o = "any" === n ? [] : Object.keys(n);
              return [
                {
                  supportsNegative: r?.supportsNegativeValues ?? !1,
                  values: Array.from(t),
                  modifiers: o,
                },
              ];
            });
        }
      },
      addComponents(e, t) {
        this.addUtilities(e, t);
      },
      matchComponents(e, t) {
        this.matchUtilities(e, t);
      },
      theme: lt(
        e,
        () => r.theme ?? {},
        (e) => e,
      ),
      prefix: (e) => e,
      config(e, t) {
        let n = r;
        if (!e) return n;
        let o = ot(e);
        for (let e = 0; e < o.length; ++e) {
          let r = o[e];
          if (void 0 === n[r]) return t;
          n = n[r];
        }
        return n ?? t;
      },
    };
    return (
      (a.addComponents = a.addComponents.bind(a)),
      (a.matchComponents = a.matchComponents.bind(a)),
      a
    );
  }
  function bt(e) {
    let t = [],
      r = (e = Array.isArray(e) ? e : [e]).flatMap((e) => Object.entries(e));
    for (let [e, n] of r)
      if ("object" != typeof n) {
        if (!e.startsWith("--")) {
          if ("@slot" === n) {
            t.push(b(e, [k("@slot")]));
            continue;
          }
          e = e.replace(/([A-Z])/g, "-$1").toLowerCase();
        }
        t.push(y(e, String(n)));
      } else if (Array.isArray(n))
        for (let r of n)
          "string" == typeof r ? t.push(y(e, r)) : t.push(b(e, bt(r)));
      else null !== n && t.push(b(e, bt(n)));
    return t;
  }
  function yt(e, r) {
    return ("string" == typeof e ? [e] : e).flatMap((e) => {
      if (e.trim().endsWith("}")) {
        let n = t(e.replace("}", "{@slot}}"));
        return Me(n, r), n;
      }
      return b(e, r);
    });
  }
  function xt(e, t, r) {
    A(e, (e) => {
      if ("rule" === e.kind) {
        let n = vt(e.selector);
        mt(n, (e) => {
          "selector" === e.kind &&
            e.value === `.${t}` &&
            (e.value = `.${o(r)}`);
        }),
          (e.selector = gt(n));
      }
    });
  }
  function $t(e, t, r) {
    for (let r of (function (e) {
      let t = [];
      if ("keyframes" in e.theme)
        for (let [r, n] of Object.entries(e.theme.keyframes))
          t.push(k("@keyframes", r, bt(n)));
      return t;
    })(t))
      e.theme.addKeyframes(r);
  }
  var zt = {
    inherit: "inherit",
    current: "currentcolor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
      50: "oklch(98.4% 0.003 247.858)",
      100: "oklch(96.8% 0.007 247.896)",
      200: "oklch(92.9% 0.013 255.508)",
      300: "oklch(86.9% 0.022 252.894)",
      400: "oklch(70.4% 0.04 256.788)",
      500: "oklch(55.4% 0.046 257.417)",
      600: "oklch(44.6% 0.043 257.281)",
      700: "oklch(37.2% 0.044 257.287)",
      800: "oklch(27.9% 0.041 260.031)",
      900: "oklch(20.8% 0.042 265.755)",
      950: "oklch(12.9% 0.042 264.695)",
    },
    gray: {
      50: "oklch(98.5% 0.002 247.839)",
      100: "oklch(96.7% 0.003 264.542)",
      200: "oklch(92.8% 0.006 264.531)",
      300: "oklch(87.2% 0.01 258.338)",
      400: "oklch(70.7% 0.022 261.325)",
      500: "oklch(55.1% 0.027 264.364)",
      600: "oklch(44.6% 0.03 256.802)",
      700: "oklch(37.3% 0.034 259.733)",
      800: "oklch(27.8% 0.033 256.848)",
      900: "oklch(21% 0.034 264.665)",
      950: "oklch(13% 0.028 261.692)",
    },
    zinc: {
      50: "oklch(98.5% 0 0)",
      100: "oklch(96.7% 0.001 286.375)",
      200: "oklch(92% 0.004 286.32)",
      300: "oklch(87.1% 0.006 286.286)",
      400: "oklch(70.5% 0.015 286.067)",
      500: "oklch(55.2% 0.016 285.938)",
      600: "oklch(44.2% 0.017 285.786)",
      700: "oklch(37% 0.013 285.805)",
      800: "oklch(27.4% 0.006 286.033)",
      900: "oklch(21% 0.006 285.885)",
      950: "oklch(14.1% 0.005 285.823)",
    },
    neutral: {
      50: "oklch(98.5% 0 0)",
      100: "oklch(97% 0 0)",
      200: "oklch(92.2% 0 0)",
      300: "oklch(87% 0 0)",
      400: "oklch(70.8% 0 0)",
      500: "oklch(55.6% 0 0)",
      600: "oklch(43.9% 0 0)",
      700: "oklch(37.1% 0 0)",
      800: "oklch(26.9% 0 0)",
      900: "oklch(20.5% 0 0)",
      950: "oklch(14.5% 0 0)",
    },
    stone: {
      50: "oklch(98.5% 0.001 106.423)",
      100: "oklch(97% 0.001 106.424)",
      200: "oklch(92.3% 0.003 48.717)",
      300: "oklch(86.9% 0.005 56.366)",
      400: "oklch(70.9% 0.01 56.259)",
      500: "oklch(55.3% 0.013 58.071)",
      600: "oklch(44.4% 0.011 73.639)",
      700: "oklch(37.4% 0.01 67.558)",
      800: "oklch(26.8% 0.007 34.298)",
      900: "oklch(21.6% 0.006 56.043)",
      950: "oklch(14.7% 0.004 49.25)",
    },
    red: {
      50: "oklch(97.1% 0.013 17.38)",
      100: "oklch(93.6% 0.032 17.717)",
      200: "oklch(88.5% 0.062 18.334)",
      300: "oklch(80.8% 0.114 19.571)",
      400: "oklch(70.4% 0.191 22.216)",
      500: "oklch(63.7% 0.237 25.331)",
      600: "oklch(57.7% 0.245 27.325)",
      700: "oklch(50.5% 0.213 27.518)",
      800: "oklch(44.4% 0.177 26.899)",
      900: "oklch(39.6% 0.141 25.723)",
      950: "oklch(25.8% 0.092 26.042)",
    },
    orange: {
      50: "oklch(98% 0.016 73.684)",
      100: "oklch(95.4% 0.038 75.164)",
      200: "oklch(90.1% 0.076 70.697)",
      300: "oklch(83.7% 0.128 66.29)",
      400: "oklch(75% 0.183 55.934)",
      500: "oklch(70.5% 0.213 47.604)",
      600: "oklch(64.6% 0.222 41.116)",
      700: "oklch(55.3% 0.195 38.402)",
      800: "oklch(47% 0.157 37.304)",
      900: "oklch(40.8% 0.123 38.172)",
      950: "oklch(26.6% 0.079 36.259)",
    },
    amber: {
      50: "oklch(98.7% 0.022 95.277)",
      100: "oklch(96.2% 0.059 95.617)",
      200: "oklch(92.4% 0.12 95.746)",
      300: "oklch(87.9% 0.169 91.605)",
      400: "oklch(82.8% 0.189 84.429)",
      500: "oklch(76.9% 0.188 70.08)",
      600: "oklch(66.6% 0.179 58.318)",
      700: "oklch(55.5% 0.163 48.998)",
      800: "oklch(47.3% 0.137 46.201)",
      900: "oklch(41.4% 0.112 45.904)",
      950: "oklch(27.9% 0.077 45.635)",
    },
    yellow: {
      50: "oklch(98.7% 0.026 102.212)",
      100: "oklch(97.3% 0.071 103.193)",
      200: "oklch(94.5% 0.129 101.54)",
      300: "oklch(90.5% 0.182 98.111)",
      400: "oklch(85.2% 0.199 91.936)",
      500: "oklch(79.5% 0.184 86.047)",
      600: "oklch(68.1% 0.162 75.834)",
      700: "oklch(55.4% 0.135 66.442)",
      800: "oklch(47.6% 0.114 61.907)",
      900: "oklch(42.1% 0.095 57.708)",
      950: "oklch(28.6% 0.066 53.813)",
    },
    lime: {
      50: "oklch(98.6% 0.031 120.757)",
      100: "oklch(96.7% 0.067 122.328)",
      200: "oklch(93.8% 0.127 124.321)",
      300: "oklch(89.7% 0.196 126.665)",
      400: "oklch(84.1% 0.238 128.85)",
      500: "oklch(76.8% 0.233 130.85)",
      600: "oklch(64.8% 0.2 131.684)",
      700: "oklch(53.2% 0.157 131.589)",
      800: "oklch(45.3% 0.124 130.933)",
      900: "oklch(40.5% 0.101 131.063)",
      950: "oklch(27.4% 0.072 132.109)",
    },
    green: {
      50: "oklch(98.2% 0.018 155.826)",
      100: "oklch(96.2% 0.044 156.743)",
      200: "oklch(92.5% 0.084 155.995)",
      300: "oklch(87.1% 0.15 154.449)",
      400: "oklch(79.2% 0.209 151.711)",
      500: "oklch(72.3% 0.219 149.579)",
      600: "oklch(62.7% 0.194 149.214)",
      700: "oklch(52.7% 0.154 150.069)",
      800: "oklch(44.8% 0.119 151.328)",
      900: "oklch(39.3% 0.095 152.535)",
      950: "oklch(26.6% 0.065 152.934)",
    },
    emerald: {
      50: "oklch(97.9% 0.021 166.113)",
      100: "oklch(95% 0.052 163.051)",
      200: "oklch(90.5% 0.093 164.15)",
      300: "oklch(84.5% 0.143 164.978)",
      400: "oklch(76.5% 0.177 163.223)",
      500: "oklch(69.6% 0.17 162.48)",
      600: "oklch(59.6% 0.145 163.225)",
      700: "oklch(50.8% 0.118 165.612)",
      800: "oklch(43.2% 0.095 166.913)",
      900: "oklch(37.8% 0.077 168.94)",
      950: "oklch(26.2% 0.051 172.552)",
    },
    teal: {
      50: "oklch(98.4% 0.014 180.72)",
      100: "oklch(95.3% 0.051 180.801)",
      200: "oklch(91% 0.096 180.426)",
      300: "oklch(85.5% 0.138 181.071)",
      400: "oklch(77.7% 0.152 181.912)",
      500: "oklch(70.4% 0.14 182.503)",
      600: "oklch(60% 0.118 184.704)",
      700: "oklch(51.1% 0.096 186.391)",
      800: "oklch(43.7% 0.078 188.216)",
      900: "oklch(38.6% 0.063 188.416)",
      950: "oklch(27.7% 0.046 192.524)",
    },
    cyan: {
      50: "oklch(98.4% 0.019 200.873)",
      100: "oklch(95.6% 0.045 203.388)",
      200: "oklch(91.7% 0.08 205.041)",
      300: "oklch(86.5% 0.127 207.078)",
      400: "oklch(78.9% 0.154 211.53)",
      500: "oklch(71.5% 0.143 215.221)",
      600: "oklch(60.9% 0.126 221.723)",
      700: "oklch(52% 0.105 223.128)",
      800: "oklch(45% 0.085 224.283)",
      900: "oklch(39.8% 0.07 227.392)",
      950: "oklch(30.2% 0.056 229.695)",
    },
    sky: {
      50: "oklch(97.7% 0.013 236.62)",
      100: "oklch(95.1% 0.026 236.824)",
      200: "oklch(90.1% 0.058 230.902)",
      300: "oklch(82.8% 0.111 230.318)",
      400: "oklch(74.6% 0.16 232.661)",
      500: "oklch(68.5% 0.169 237.323)",
      600: "oklch(58.8% 0.158 241.966)",
      700: "oklch(50% 0.134 242.749)",
      800: "oklch(44.3% 0.11 240.79)",
      900: "oklch(39.1% 0.09 240.876)",
      950: "oklch(29.3% 0.066 243.157)",
    },
    blue: {
      50: "oklch(97% 0.014 254.604)",
      100: "oklch(93.2% 0.032 255.585)",
      200: "oklch(88.2% 0.059 254.128)",
      300: "oklch(80.9% 0.105 251.813)",
      400: "oklch(70.7% 0.165 254.624)",
      500: "oklch(62.3% 0.214 259.815)",
      600: "oklch(54.6% 0.245 262.881)",
      700: "oklch(48.8% 0.243 264.376)",
      800: "oklch(42.4% 0.199 265.638)",
      900: "oklch(37.9% 0.146 265.522)",
      950: "oklch(28.2% 0.091 267.935)",
    },
    indigo: {
      50: "oklch(96.2% 0.018 272.314)",
      100: "oklch(93% 0.034 272.788)",
      200: "oklch(87% 0.065 274.039)",
      300: "oklch(78.5% 0.115 274.713)",
      400: "oklch(67.3% 0.182 276.935)",
      500: "oklch(58.5% 0.233 277.117)",
      600: "oklch(51.1% 0.262 276.966)",
      700: "oklch(45.7% 0.24 277.023)",
      800: "oklch(39.8% 0.195 277.366)",
      900: "oklch(35.9% 0.144 278.697)",
      950: "oklch(25.7% 0.09 281.288)",
    },
    violet: {
      50: "oklch(96.9% 0.016 293.756)",
      100: "oklch(94.3% 0.029 294.588)",
      200: "oklch(89.4% 0.057 293.283)",
      300: "oklch(81.1% 0.111 293.571)",
      400: "oklch(70.2% 0.183 293.541)",
      500: "oklch(60.6% 0.25 292.717)",
      600: "oklch(54.1% 0.281 293.009)",
      700: "oklch(49.1% 0.27 292.581)",
      800: "oklch(43.2% 0.232 292.759)",
      900: "oklch(38% 0.189 293.745)",
      950: "oklch(28.3% 0.141 291.089)",
    },
    purple: {
      50: "oklch(97.7% 0.014 308.299)",
      100: "oklch(94.6% 0.033 307.174)",
      200: "oklch(90.2% 0.063 306.703)",
      300: "oklch(82.7% 0.119 306.383)",
      400: "oklch(71.4% 0.203 305.504)",
      500: "oklch(62.7% 0.265 303.9)",
      600: "oklch(55.8% 0.288 302.321)",
      700: "oklch(49.6% 0.265 301.924)",
      800: "oklch(43.8% 0.218 303.724)",
      900: "oklch(38.1% 0.176 304.987)",
      950: "oklch(29.1% 0.149 302.717)",
    },
    fuchsia: {
      50: "oklch(97.7% 0.017 320.058)",
      100: "oklch(95.2% 0.037 318.852)",
      200: "oklch(90.3% 0.076 319.62)",
      300: "oklch(83.3% 0.145 321.434)",
      400: "oklch(74% 0.238 322.16)",
      500: "oklch(66.7% 0.295 322.15)",
      600: "oklch(59.1% 0.293 322.896)",
      700: "oklch(51.8% 0.253 323.949)",
      800: "oklch(45.2% 0.211 324.591)",
      900: "oklch(40.1% 0.17 325.612)",
      950: "oklch(29.3% 0.136 325.661)",
    },
    pink: {
      50: "oklch(97.1% 0.014 343.198)",
      100: "oklch(94.8% 0.028 342.258)",
      200: "oklch(89.9% 0.061 343.231)",
      300: "oklch(82.3% 0.12 346.018)",
      400: "oklch(71.8% 0.202 349.761)",
      500: "oklch(65.6% 0.241 354.308)",
      600: "oklch(59.2% 0.249 0.584)",
      700: "oklch(52.5% 0.223 3.958)",
      800: "oklch(45.9% 0.187 3.815)",
      900: "oklch(40.8% 0.153 2.432)",
      950: "oklch(28.4% 0.109 3.907)",
    },
    rose: {
      50: "oklch(96.9% 0.015 12.422)",
      100: "oklch(94.1% 0.03 12.58)",
      200: "oklch(89.2% 0.058 10.001)",
      300: "oklch(81% 0.117 11.638)",
      400: "oklch(71.2% 0.194 13.428)",
      500: "oklch(64.5% 0.246 16.439)",
      600: "oklch(58.6% 0.253 17.585)",
      700: "oklch(51.4% 0.222 16.935)",
      800: "oklch(45.5% 0.188 13.697)",
      900: "oklch(41% 0.159 10.272)",
      950: "oklch(27.1% 0.105 12.094)",
    },
  };
  function At(e) {
    return { __BARE_VALUE__: e };
  }
  var Tt = At((e) => {
      if (de(e.value)) return e.value;
    }),
    jt = At((e) => {
      if (de(e.value)) return `${e.value}%`;
    }),
    Ct = At((e) => {
      if (de(e.value)) return `${e.value}px`;
    }),
    St = At((e) => {
      if (de(e.value)) return `${e.value}ms`;
    }),
    Kt = At((e) => {
      if (de(e.value)) return `${e.value}deg`;
    }),
    Et = At((e) => {
      if (null === e.fraction) return;
      let [t, r] = R(e.fraction, "/");
      return de(t) && de(r) ? e.fraction : void 0;
    }),
    Vt = At((e) => {
      if (de(Number(e.value))) return `repeat(${e.value}, minmax(0, 1fr))`;
    }),
    Nt = {
      accentColor: ({ theme: e }) => e("colors"),
      animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
      },
      aria: {
        busy: 'busy="true"',
        checked: 'checked="true"',
        disabled: 'disabled="true"',
        expanded: 'expanded="true"',
        hidden: 'hidden="true"',
        pressed: 'pressed="true"',
        readonly: 'readonly="true"',
        required: 'required="true"',
        selected: 'selected="true"',
      },
      aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9", ...Et },
      backdropBlur: ({ theme: e }) => e("blur"),
      backdropBrightness: ({ theme: e }) => ({ ...e("brightness"), ...jt }),
      backdropContrast: ({ theme: e }) => ({ ...e("contrast"), ...jt }),
      backdropGrayscale: ({ theme: e }) => ({ ...e("grayscale"), ...jt }),
      backdropHueRotate: ({ theme: e }) => ({ ...e("hueRotate"), ...Kt }),
      backdropInvert: ({ theme: e }) => ({ ...e("invert"), ...jt }),
      backdropOpacity: ({ theme: e }) => ({ ...e("opacity"), ...jt }),
      backdropSaturate: ({ theme: e }) => ({ ...e("saturate"), ...jt }),
      backdropSepia: ({ theme: e }) => ({ ...e("sepia"), ...jt }),
      backgroundColor: ({ theme: e }) => e("colors"),
      backgroundImage: {
        none: "none",
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
        "gradient-to-tr":
          "linear-gradient(to top right, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-to-br":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
        "gradient-to-bl":
          "linear-gradient(to bottom left, var(--tw-gradient-stops))",
        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
        "gradient-to-tl":
          "linear-gradient(to top left, var(--tw-gradient-stops))",
      },
      backgroundOpacity: ({ theme: e }) => e("opacity"),
      backgroundPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
      },
      backgroundSize: { auto: "auto", cover: "cover", contain: "contain" },
      blur: {
        0: "0",
        none: "",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },
      borderColor: ({ theme: e }) => ({
        DEFAULT: "currentcolor",
        ...e("colors"),
      }),
      borderOpacity: ({ theme: e }) => e("opacity"),
      borderRadius: {
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      borderSpacing: ({ theme: e }) => e("spacing"),
      borderWidth: {
        DEFAULT: "1px",
        0: "0px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...Ct,
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        none: "none",
      },
      boxShadowColor: ({ theme: e }) => e("colors"),
      brightness: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        200: "2",
        ...jt,
      },
      caretColor: ({ theme: e }) => e("colors"),
      colors: () => ({ ...zt }),
      columns: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        "3xs": "16rem",
        "2xs": "18rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        ...Tt,
      },
      container: {},
      content: { none: "none" },
      contrast: {
        0: "0",
        50: ".5",
        75: ".75",
        100: "1",
        125: "1.25",
        150: "1.5",
        200: "2",
        ...jt,
      },
      cursor: {
        auto: "auto",
        default: "default",
        pointer: "pointer",
        wait: "wait",
        text: "text",
        move: "move",
        help: "help",
        "not-allowed": "not-allowed",
        none: "none",
        "context-menu": "context-menu",
        progress: "progress",
        cell: "cell",
        crosshair: "crosshair",
        "vertical-text": "vertical-text",
        alias: "alias",
        copy: "copy",
        "no-drop": "no-drop",
        grab: "grab",
        grabbing: "grabbing",
        "all-scroll": "all-scroll",
        "col-resize": "col-resize",
        "row-resize": "row-resize",
        "n-resize": "n-resize",
        "e-resize": "e-resize",
        "s-resize": "s-resize",
        "w-resize": "w-resize",
        "ne-resize": "ne-resize",
        "nw-resize": "nw-resize",
        "se-resize": "se-resize",
        "sw-resize": "sw-resize",
        "ew-resize": "ew-resize",
        "ns-resize": "ns-resize",
        "nesw-resize": "nesw-resize",
        "nwse-resize": "nwse-resize",
        "zoom-in": "zoom-in",
        "zoom-out": "zoom-out",
      },
      divideColor: ({ theme: e }) => e("borderColor"),
      divideOpacity: ({ theme: e }) => e("borderOpacity"),
      divideWidth: ({ theme: e }) => ({ ...e("borderWidth"), ...Ct }),
      dropShadow: {
        sm: "0 1px 1px rgb(0 0 0 / 0.05)",
        DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
        md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
        lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
        xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
        "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
        none: "0 0 #0000",
      },
      fill: ({ theme: e }) => e("colors"),
      flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        none: "none",
      },
      flexBasis: ({ theme: e }) => ({
        auto: "auto",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
        ...e("spacing"),
      }),
      flexGrow: { 0: "0", DEFAULT: "1", ...Tt },
      flexShrink: { 0: "0", DEFAULT: "1", ...Tt },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      gap: ({ theme: e }) => e("spacing"),
      gradientColorStops: ({ theme: e }) => e("colors"),
      gradientColorStopPositions: {
        "0%": "0%",
        "5%": "5%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "45%": "45%",
        "50%": "50%",
        "55%": "55%",
        "60%": "60%",
        "65%": "65%",
        "70%": "70%",
        "75%": "75%",
        "80%": "80%",
        "85%": "85%",
        "90%": "90%",
        "95%": "95%",
        "100%": "100%",
        ...jt,
      },
      grayscale: { 0: "0", DEFAULT: "100%", ...jt },
      gridAutoColumns: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)",
      },
      gridAutoRows: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0, 1fr)",
      },
      gridColumn: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-full": "1 / -1",
      },
      gridColumnEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...Tt,
      },
      gridColumnStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...Tt,
      },
      gridRow: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-full": "1 / -1",
      },
      gridRowEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...Tt,
      },
      gridRowStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        ...Tt,
      },
      gridTemplateColumns: {
        none: "none",
        subgrid: "subgrid",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
        ...Vt,
      },
      gridTemplateRows: {
        none: "none",
        subgrid: "subgrid",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
        ...Vt,
      },
      height: ({ theme: e }) => ({
        auto: "auto",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        full: "100%",
        screen: "100vh",
        svh: "100svh",
        lvh: "100lvh",
        dvh: "100dvh",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        ...e("spacing"),
      }),
      hueRotate: {
        0: "0deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        90: "90deg",
        180: "180deg",
        ...Kt,
      },
      inset: ({ theme: e }) => ({
        auto: "auto",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        full: "100%",
        ...e("spacing"),
      }),
      invert: { 0: "0", DEFAULT: "100%", ...jt },
      keyframes: {
        spin: { to: { transform: "rotate(360deg)" } },
        ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } },
        pulse: { "50%": { opacity: ".5" } },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
      },
      listStyleType: { none: "none", disc: "disc", decimal: "decimal" },
      listStyleImage: { none: "none" },
      margin: ({ theme: e }) => ({ auto: "auto", ...e("spacing") }),
      lineClamp: { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", ...Tt },
      maxHeight: ({ theme: e }) => ({
        none: "none",
        full: "100%",
        screen: "100vh",
        svh: "100svh",
        lvh: "100lvh",
        dvh: "100dvh",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        ...e("spacing"),
      }),
      maxWidth: ({ theme: e }) => ({
        none: "none",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        prose: "65ch",
        ...e("spacing"),
      }),
      minHeight: ({ theme: e }) => ({
        full: "100%",
        screen: "100vh",
        svh: "100svh",
        lvh: "100lvh",
        dvh: "100dvh",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        ...e("spacing"),
      }),
      minWidth: ({ theme: e }) => ({
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        ...e("spacing"),
      }),
      objectPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
      },
      opacity: {
        0: "0",
        5: "0.05",
        10: "0.1",
        15: "0.15",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        35: "0.35",
        40: "0.4",
        45: "0.45",
        50: "0.5",
        55: "0.55",
        60: "0.6",
        65: "0.65",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        85: "0.85",
        90: "0.9",
        95: "0.95",
        100: "1",
        ...jt,
      },
      order: {
        first: "-9999",
        last: "9999",
        none: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        ...Tt,
      },
      outlineColor: ({ theme: e }) => e("colors"),
      outlineOffset: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...Ct,
      },
      outlineWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...Ct },
      padding: ({ theme: e }) => e("spacing"),
      placeholderColor: ({ theme: e }) => e("colors"),
      placeholderOpacity: ({ theme: e }) => e("opacity"),
      ringColor: ({ theme: e }) => ({
        DEFAULT: "currentcolor",
        ...e("colors"),
      }),
      ringOffsetColor: ({ theme: e }) => e("colors"),
      ringOffsetWidth: {
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...Ct,
      },
      ringOpacity: ({ theme: e }) => ({ DEFAULT: "0.5", ...e("opacity") }),
      ringWidth: {
        DEFAULT: "3px",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...Ct,
      },
      rotate: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        45: "45deg",
        90: "90deg",
        180: "180deg",
        ...Kt,
      },
      saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2", ...jt },
      scale: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        ...jt,
      },
      screens: {
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        "2xl": "96rem",
      },
      scrollMargin: ({ theme: e }) => e("spacing"),
      scrollPadding: ({ theme: e }) => e("spacing"),
      sepia: { 0: "0", DEFAULT: "100%", ...jt },
      skew: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        ...Kt,
      },
      space: ({ theme: e }) => e("spacing"),
      spacing: {
        px: "1px",
        0: "0px",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
      stroke: ({ theme: e }) => ({ none: "none", ...e("colors") }),
      strokeWidth: { 0: "0", 1: "1", 2: "2", ...Tt },
      supports: {},
      data: {},
      textColor: ({ theme: e }) => e("colors"),
      textDecorationColor: ({ theme: e }) => e("colors"),
      textDecorationThickness: {
        auto: "auto",
        "from-font": "from-font",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...Ct,
      },
      textIndent: ({ theme: e }) => e("spacing"),
      textOpacity: ({ theme: e }) => e("opacity"),
      textUnderlineOffset: {
        auto: "auto",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
        ...Ct,
      },
      transformOrigin: {
        center: "center",
        top: "top",
        "top-right": "top right",
        right: "right",
        "bottom-right": "bottom right",
        bottom: "bottom",
        "bottom-left": "bottom left",
        left: "left",
        "top-left": "top left",
      },
      transitionDelay: {
        0: "0s",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms",
        ...St,
      },
      transitionDuration: {
        DEFAULT: "150ms",
        0: "0s",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms",
        ...St,
      },
      transitionProperty: {
        none: "none",
        all: "all",
        DEFAULT:
          "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        colors:
          "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      translate: ({ theme: e }) => ({
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        full: "100%",
        ...e("spacing"),
      }),
      size: ({ theme: e }) => ({
        auto: "auto",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        ...e("spacing"),
      }),
      width: ({ theme: e }) => ({
        auto: "auto",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
        screen: "100vw",
        svw: "100svw",
        lvw: "100lvw",
        dvw: "100dvw",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        ...e("spacing"),
      }),
      willChange: {
        auto: "auto",
        scroll: "scroll-position",
        contents: "contents",
        transform: "transform",
      },
      zIndex: {
        auto: "auto",
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        ...Tt,
      },
    };
  function Ot(e) {
    return {
      theme: {
        ...Nt,
        colors: ({ theme: e }) => e("color", {}),
        extend: {
          fontSize: ({ theme: e }) => ({ ...e("text", {}) }),
          boxShadow: ({ theme: e }) => ({ ...e("shadow", {}) }),
          animation: ({ theme: e }) => ({ ...e("animate", {}) }),
          aspectRatio: ({ theme: e }) => ({ ...e("aspect", {}) }),
          borderRadius: ({ theme: e }) => ({ ...e("radius", {}) }),
          screens: ({ theme: e }) => ({ ...e("breakpoint", {}) }),
          letterSpacing: ({ theme: e }) => ({ ...e("tracking", {}) }),
          lineHeight: ({ theme: e }) => ({ ...e("leading", {}) }),
          transitionDuration: {
            DEFAULT: e.get(["--default-transition-duration"]) ?? null,
          },
          transitionTimingFunction: {
            DEFAULT: e.get(["--default-transition-timing-function"]) ?? null,
          },
          maxWidth: ({ theme: e }) => ({ ...e("container", {}) }),
        },
      },
    };
  }
  var Ft = {
    blocklist: [],
    future: {},
    prefix: "",
    important: !1,
    darkMode: null,
    theme: {},
    plugins: [],
    content: { files: [] },
  };
  function Wt(e, t) {
    let r = {
      design: e,
      configs: [],
      plugins: [],
      content: { files: [] },
      theme: {},
      extend: {},
      result: structuredClone(Ft),
    };
    for (let e of t) Dt(r, e);
    for (let e of r.configs)
      "darkMode" in e &&
        void 0 !== e.darkMode &&
        (r.result.darkMode = e.darkMode ?? null),
        "prefix" in e &&
          void 0 !== e.prefix &&
          (r.result.prefix = e.prefix ?? ""),
        "blocklist" in e &&
          void 0 !== e.blocklist &&
          (r.result.blocklist = e.blocklist ?? []),
        "important" in e &&
          void 0 !== e.important &&
          (r.result.important = e.important ?? !1);
    let n = (function (e) {
      let t = new Set(),
        r = lt(e.design, () => e.theme, o),
        n = Object.assign(r, { theme: r, colors: zt });
      function o(e) {
        return "function" == typeof e ? (e(n) ?? null) : (e ?? null);
      }
      for (let r of e.configs) {
        let n = r.theme ?? {},
          o = n.extend ?? {};
        for (let e in n) "extend" !== e && t.add(e);
        Object.assign(e.theme, n);
        for (let t in o) (e.extend[t] ??= []), e.extend[t].push(o[t]);
      }
      delete e.theme.extend;
      for (let t in e.extend) {
        let r = [e.theme[t], ...e.extend[t]];
        e.theme[t] = () => it({}, r.map(o), Ut);
      }
      for (let t in e.theme) e.theme[t] = o(e.theme[t]);
      if (e.theme.screens && "object" == typeof e.theme.screens)
        for (let t of Object.keys(e.theme.screens)) {
          let r = e.theme.screens[t];
          r &&
            "object" == typeof r &&
            ("raw" in r ||
              "max" in r ||
              ("min" in r && (e.theme.screens[t] = r.min)));
        }
      return t;
    })(r);
    return {
      resolvedConfig: {
        ...r.result,
        content: r.content,
        theme: r.theme,
        plugins: r.plugins,
      },
      replacedThemeKeys: n,
    };
  }
  function Ut(e, t) {
    return Array.isArray(e) && at(e[0])
      ? e.concat(t)
      : Array.isArray(t) && at(t[0]) && at(e)
        ? [e, ...t]
        : Array.isArray(t)
          ? t
          : void 0;
  }
  function Dt(e, { config: t, base: r, path: n, reference: o }) {
    let a = [];
    for (let e of t.plugins ?? [])
      "__isOptionsFunction" in e
        ? a.push({ ...e(), reference: o })
        : "handler" in e
          ? a.push({ ...e, reference: o })
          : a.push({ handler: e, reference: o });
    if (Array.isArray(t.presets) && 0 === t.presets.length)
      throw new Error(
        "Error in the config file/plugin/preset. An empty preset (`preset: []`) is not currently supported.",
      );
    for (let a of t.presets ?? [])
      Dt(e, { path: n, base: r, config: a, reference: o });
    for (let t of a)
      e.plugins.push(t),
        t.config &&
          Dt(e, {
            path: n,
            base: r,
            config: t.config,
            reference: !!t.reference,
          });
    let i = t.content ?? [],
      l = Array.isArray(i) ? i : i.files;
    for (let t of l)
      e.content.files.push("object" == typeof t ? t : { base: r, pattern: t });
    e.configs.push(t);
  }
  function Bt(e, t) {
    let r = e.theme.container || {};
    if ("object" != typeof r || null === r) return;
    let n = (function ({ center: e, padding: t, screens: r }, n) {
      let o = [],
        a = null;
      if (
        (e && o.push(y("margin-inline", "auto")),
        ("string" == typeof t ||
          ("object" == typeof t && null !== t && "DEFAULT" in t)) &&
          o.push(y("padding-inline", "string" == typeof t ? t : t.DEFAULT)),
        "object" == typeof r && null !== r)
      ) {
        a = new Map();
        let e = Array.from(n.theme.namespace("--breakpoint").entries());
        if ((e.sort((e, t) => P(e[1], t[1], "asc")), e.length > 0)) {
          let [t] = e[0];
          o.push(
            k("@media", `(width >= --theme(--breakpoint-${t}))`, [
              y("max-width", "none"),
            ]),
          );
        }
        for (let [e, t] of Object.entries(r)) {
          if ("object" == typeof t) {
            if (!("min" in t)) continue;
            t = t.min;
          }
          a.set(e, k("@media", `(width >= ${t})`, [y("max-width", t)]));
        }
      }
      if ("object" == typeof t && null !== t) {
        let e = Object.entries(t)
          .filter(([e]) => "DEFAULT" !== e)
          .map(([e, t]) => [e, n.theme.resolveValue(e, ["--breakpoint"]), t])
          .filter(Boolean);
        e.sort((e, t) => P(e[1], t[1], "asc"));
        for (let [t, , r] of e)
          if (a && a.has(t)) a.get(t).nodes.push(y("padding-inline", r));
          else {
            if (a) continue;
            o.push(
              k("@media", `(width >= theme(--breakpoint-${t}))`, [
                y("padding-inline", r),
              ]),
            );
          }
      }
      if (a) for (let [, e] of a) o.push(e);
      return o;
    })(r, t);
    0 !== n.length && t.utilities.static("container", () => structuredClone(n));
  }
  function _t({ addVariant: e, config: t }) {
    let r = t("darkMode", null),
      [n, o = ".dark"] = Array.isArray(r) ? r : [r];
    if ("variant" === n) {
      let e;
      if (
        (Array.isArray(o) || "function" == typeof o
          ? (e = o)
          : "string" == typeof o && (e = [o]),
        Array.isArray(e))
      )
        for (let t of e)
          ".dark" === t
            ? ((n = !1),
              console.warn(
                'When using `variant` for `darkMode`, you must provide a selector.\nExample: `darkMode: ["variant", ".your-selector &"]`',
              ))
            : t.includes("&") ||
              ((n = !1),
              console.warn(
                'When using `variant` for `darkMode`, your selector must contain `&`.\nExample `darkMode: ["variant", ".your-selector &"]`',
              ));
      o = e;
    }
    null === n ||
      ("selector" === n
        ? e("dark", `&:where(${o}, ${o} *)`)
        : "media" === n
          ? e("dark", "@media (prefers-color-scheme: dark)")
          : "variant" === n
            ? e("dark", o)
            : "class" === n && e("dark", `&:is(${o} *)`));
  }
  function Lt(e) {
    return (Array.isArray(e) ? e : [e])
      .map((e) =>
        "string" == typeof e
          ? { min: e }
          : e && "object" == typeof e
            ? e
            : null,
      )
      .map((e) => {
        if (null === e) return null;
        if ("raw" in e) return e.raw;
        let t = "";
        return (
          void 0 !== e.max && (t += `${e.max} >= `),
          (t += "width"),
          void 0 !== e.min && (t += ` >= ${e.min}`),
          `(${t})`
        );
      })
      .filter(Boolean)
      .join(", ");
  }
  var Mt = /^[a-z]+$/;
  async function Rt({
    designSystem: e,
    base: t,
    ast: r,
    loadModule: n,
    sources: o,
  }) {
    let a = 0,
      i = [],
      l = [];
    A(r, (e, { parent: t, replaceWith: r, context: n }) => {
      if ("at-rule" === e.kind) {
        if ("@plugin" === e.name) {
          if (null !== t) throw new Error("`@plugin` cannot be nested.");
          let o = e.params.slice(1, -1);
          if (0 === o.length) throw new Error("`@plugin` must have a path.");
          let l = {};
          for (let t of e.nodes ?? []) {
            if ("declaration" !== t.kind)
              throw new Error(
                `Unexpected \`@plugin\` option:\n\n${C([t])}\n\n\`@plugin\` options must be a flat list of declarations.`,
              );
            if (void 0 === t.value) continue;
            let e = R(t.value, ",").map((e) => {
              if ("null" === (e = e.trim())) return null;
              if ("true" === e) return !0;
              if ("false" === e) return !1;
              if (!Number.isNaN(Number(e))) return Number(e);
              if (
                ('"' === e[0] && '"' === e[e.length - 1]) ||
                ("'" === e[0] && "'" === e[e.length - 1])
              )
                return e.slice(1, -1);
              if ("{" === e[0] && "}" === e[e.length - 1])
                throw new Error(
                  `Unexpected \`@plugin\` option: Value of declaration \`${C([t]).trim()}\` is not supported.\n\nUsing an object as a plugin option is currently only supported in JavaScript configuration files.`,
                );
              return e;
            });
            l[t.property] = 1 === e.length ? e[0] : e;
          }
          return (
            i.push([
              { id: o, base: n.base, reference: !!n.reference },
              Object.keys(l).length > 0 ? l : null,
            ]),
            r([]),
            void (a |= 4)
          );
        }
        if ("@config" === e.name) {
          if (e.nodes.length > 0)
            throw new Error("`@config` cannot have a body.");
          if (null !== t) throw new Error("`@config` cannot be nested.");
          return (
            l.push({
              id: e.params.slice(1, -1),
              base: n.base,
              reference: !!n.reference,
            }),
            r([]),
            void (a |= 4)
          );
        }
      }
    }),
      (function (e) {
        for (let [t, r] of [
          ["t", "top"],
          ["tr", "top right"],
          ["r", "right"],
          ["br", "bottom right"],
          ["b", "bottom"],
          ["bl", "bottom left"],
          ["l", "left"],
          ["tl", "top left"],
        ])
          e.utilities.static(`bg-gradient-to-${t}`, () => [
            y("--tw-gradient-position", `to ${r} in oklab`),
            y("background-image", "linear-gradient(var(--tw-gradient-stops))"),
          ]);
        e.utilities.static("bg-left-top", () => [
          y("background-position", "left top"),
        ]),
          e.utilities.static("bg-right-top", () => [
            y("background-position", "right top"),
          ]),
          e.utilities.static("bg-left-bottom", () => [
            y("background-position", "left bottom"),
          ]),
          e.utilities.static("bg-right-bottom", () => [
            y("background-position", "right bottom"),
          ]),
          e.utilities.static("object-left-top", () => [
            y("object-position", "left top"),
          ]),
          e.utilities.static("object-right-top", () => [
            y("object-position", "right top"),
          ]),
          e.utilities.static("object-left-bottom", () => [
            y("object-position", "left bottom"),
          ]),
          e.utilities.static("object-right-bottom", () => [
            y("object-position", "right bottom"),
          ]),
          e.utilities.functional("max-w-screen", (t) => {
            if (!t.value || "arbitrary" === t.value.kind) return;
            let r = e.theme.resolve(t.value.value, ["--breakpoint"]);
            return r ? [y("max-width", r)] : void 0;
          }),
          e.utilities.static("overflow-ellipsis", () => [
            y("text-overflow", "ellipsis"),
          ]),
          e.utilities.static("decoration-slice", () => [
            y("-webkit-box-decoration-break", "slice"),
            y("box-decoration-break", "slice"),
          ]),
          e.utilities.static("decoration-clone", () => [
            y("-webkit-box-decoration-break", "clone"),
            y("box-decoration-break", "clone"),
          ]),
          e.utilities.functional("flex-shrink", (e) => {
            if (!e.modifier) {
              if (!e.value) return [y("flex-shrink", "1")];
              if ("arbitrary" === e.value.kind)
                return [y("flex-shrink", e.value.value)];
              if (de(e.value.value)) return [y("flex-shrink", e.value.value)];
            }
          }),
          e.utilities.functional("flex-grow", (e) => {
            if (!e.modifier) {
              if (!e.value) return [y("flex-grow", "1")];
              if ("arbitrary" === e.value.kind)
                return [y("flex-grow", e.value.value)];
              if (de(e.value.value)) return [y("flex-grow", e.value.value)];
            }
          });
      })(e);
    let s = e.resolveThemeValue;
    if (
      ((e.resolveThemeValue = function (n, i) {
        return n.startsWith("--")
          ? s(n, i)
          : ((a |= It({
              designSystem: e,
              base: t,
              ast: r,
              sources: o,
              configs: [],
              pluginDetails: [],
            })),
            e.resolveThemeValue(n, i));
      }),
      !i.length && !l.length)
    )
      return 0;
    let [c, u] = await Promise.all([
      Promise.all(
        l.map(async ({ id: e, base: t, reference: r }) => {
          let o = await n(e, t, "config");
          return { path: e, base: o.base, config: o.module, reference: r };
        }),
      ),
      Promise.all(
        i.map(async ([{ id: e, base: t, reference: r }, o]) => {
          let a = await n(e, t, "plugin");
          return {
            path: e,
            base: a.base,
            plugin: a.module,
            options: o,
            reference: r,
          };
        }),
      ),
    ]);
    return (
      (a |= It({
        designSystem: e,
        base: t,
        ast: r,
        sources: o,
        configs: c,
        pluginDetails: u,
      })),
      a
    );
  }
  function It({
    designSystem: e,
    base: t,
    ast: r,
    sources: n,
    configs: o,
    pluginDetails: a,
  }) {
    let i = 0,
      l = [
        ...a.map((e) => {
          if (!e.options)
            return {
              config: { plugins: [e.plugin] },
              base: e.base,
              reference: e.reference,
            };
          if ("__isOptionsFunction" in e.plugin)
            return {
              config: { plugins: [e.plugin(e.options)] },
              base: e.base,
              reference: e.reference,
            };
          throw new Error(`The plugin "${e.path}" does not accept options`);
        }),
        ...o,
      ],
      { resolvedConfig: s } = Wt(e, [
        { config: Ot(e.theme), base: t, reference: !0 },
        ...l,
        { config: { plugins: [_t] }, base: t, reference: !0 },
      ]),
      { resolvedConfig: c, replacedThemeKeys: u } = Wt(e, l),
      d = e.resolveThemeValue;
    e.resolveThemeValue = function (e, t) {
      if ("-" === e[0] && "-" === e[1]) return d(e, t);
      let r = h.theme(e, void 0);
      return Array.isArray(r) && 2 === r.length
        ? r[0]
        : Array.isArray(r)
          ? r.join(", ")
          : "string" == typeof r
            ? r
            : void 0;
    };
    let f,
      p = {
        designSystem: e,
        ast: r,
        resolvedConfig: s,
        featuresRef: {
          set current(e) {
            i |= e;
          },
        },
      },
      h = kt({ ...p, referenceMode: !1 });
    for (let { handler: e, reference: t } of s.plugins)
      t ? ((f ||= kt({ ...p, referenceMode: !0 })), e(f)) : e(h);
    if (
      (et(e, c, u),
      $t(e, c),
      (function (e, t) {
        let r = e.theme.aria || {},
          n = e.theme.supports || {},
          o = e.theme.data || {};
        if (Object.keys(r).length > 0) {
          let e = t.variants.get("aria"),
            n = e?.applyFn,
            o = e?.compounds;
          t.variants.functional(
            "aria",
            (e, t) => {
              let o = t.value;
              return o && "named" === o.kind && o.value in r
                ? n?.(e, {
                    ...t,
                    value: { kind: "arbitrary", value: r[o.value] },
                  })
                : n?.(e, t);
            },
            { compounds: o },
          );
        }
        if (Object.keys(n).length > 0) {
          let e = t.variants.get("supports"),
            r = e?.applyFn,
            o = e?.compounds;
          t.variants.functional(
            "supports",
            (e, t) => {
              let o = t.value;
              return o && "named" === o.kind && o.value in n
                ? r?.(e, {
                    ...t,
                    value: { kind: "arbitrary", value: n[o.value] },
                  })
                : r?.(e, t);
            },
            { compounds: o },
          );
        }
        if (Object.keys(o).length > 0) {
          let e = t.variants.get("data"),
            r = e?.applyFn,
            n = e?.compounds;
          t.variants.functional(
            "data",
            (e, t) => {
              let n = t.value;
              return n && "named" === n.kind && n.value in o
                ? r?.(e, {
                    ...t,
                    value: { kind: "arbitrary", value: o[n.value] },
                  })
                : r?.(e, t);
            },
            { compounds: n },
          );
        }
      })(c, e),
      (function (e, t) {
        let r = e.theme.screens || {},
          n = t.variants.get("min")?.order ?? 0,
          o = [];
        for (let [e, a] of Object.entries(r)) {
          let r = function (r) {
              t.variants.static(
                e,
                (e) => {
                  e.nodes = [k("@media", c, e.nodes)];
                },
                { order: r },
              );
            },
            i = t.variants.get(e),
            l = t.theme.resolveValue(e, ["--breakpoint"]);
          if (i && l && !t.theme.hasDefault(`--breakpoint-${e}`)) continue;
          let s = !0;
          "string" == typeof a && (s = !1);
          let c = Lt(a);
          s ? o.push(r) : r(n);
        }
        if (0 !== o.length) {
          for (let [, e] of t.variants.variants)
            e.order > n && (e.order += o.length);
          t.variants.compareFns = new Map(
            Array.from(t.variants.compareFns).map(
              ([e, t]) => (e > n && (e += o.length), [e, t]),
            ),
          );
          for (let [e, t] of o.entries()) t(n + e + 1);
        }
      })(c, e),
      Bt(c, e),
      !e.theme.prefix && s.prefix)
    ) {
      if (
        (s.prefix.endsWith("-") &&
          ((s.prefix = s.prefix.slice(0, -1)),
          console.warn(
            `The prefix "${s.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only and is written as a variant before all utilities. We have fixed up the prefix for you. Remove the trailing \`-\` to silence this warning.`,
          )),
        !Mt.test(s.prefix))
      )
        throw new Error(
          `The prefix "${s.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`,
        );
      e.theme.prefix = s.prefix;
    }
    if (
      (!e.important && !0 === s.important && (e.important = !0),
      "string" == typeof s.important)
    ) {
      let e = s.important;
      A(r, (t, { replaceWith: r, parent: n }) => {
        if (
          "at-rule" === t.kind &&
          "@tailwind" === t.name &&
          "utilities" === t.params
        )
          return ("rule" === n?.kind && n.selector === e) || r(w(e, [t])), 2;
      });
    }
    for (let t of s.blocklist) e.invalidCandidates.add(t);
    for (let e of s.content.files) {
      if ("raw" in e)
        throw new Error(
          `Error in the config file/plugin/preset. The \`content\` key contains a \`raw\` entry:\n\n${JSON.stringify(e, null, 2)}\n\nThis feature is not currently supported.`,
        );
      let t = !1;
      "!" == e.pattern[0] && ((t = !0), (e.pattern = e.pattern.slice(1))),
        n.push({ ...e, negated: t });
    }
    return i;
  }
  var qt = /^(-?\d+)\.\.(-?\d+)(?:\.\.(-?\d+))?$/;
  function Pt(e) {
    let t = e.indexOf("{");
    if (-1 === t) return [e];
    let r = [],
      n = e.slice(0, t),
      o = e.slice(t),
      a = 0,
      i = o.lastIndexOf("}");
    for (let e = 0; e < o.length; e++) {
      let t = o[e];
      if ("{" === t) a++;
      else if ("}" === t && (a--, 0 === a)) {
        i = e;
        break;
      }
    }
    if (-1 === i) throw new Error(`The pattern \`${e}\` is not balanced.`);
    let l,
      s = o.slice(1, i),
      c = o.slice(i + 1);
    (l = (function (e) {
      return qt.test(e);
    })(s)
      ? (function (e) {
          let t = e.match(qt);
          if (!t) return [e];
          let [, r, n, o] = t,
            a = o ? parseInt(o, 10) : void 0,
            i = [];
          if (/^-?\d+$/.test(r) && /^-?\d+$/.test(n)) {
            let e = parseInt(r, 10),
              t = parseInt(n, 10);
            if ((void 0 === a && (a = e <= t ? 1 : -1), 0 === a))
              throw new Error("Step cannot be zero in sequence expansion.");
            if (a > 0)
              for (let r = e; r <= t; r += a) {
                let e = r.toString();
                i.push(e);
              }
            else
              for (let r = e; r >= t; r += a) {
                let e = r.toString();
                i.push(e);
              }
          }
          return i;
        })(s)
      : R(s, ",")),
      (l = l.flatMap((e) => Pt(e)));
    let u = Pt(c);
    for (let e of u) for (let t of l) r.push(n + t + e);
    return r;
  }
  var Ht = /^[a-z]+$/;
  function Yt() {
    throw new Error("No `loadModule` function provided to `compile`");
  }
  function Zt() {
    throw new Error("No `loadStylesheet` function provided to `compile`");
  }
  async function Gt(
    e,
    { base: t = "", loadModule: r = Yt, loadStylesheet: n = Zt } = {},
  ) {
    let i = 0;
    (e = [$({ base: t }, e)]), (i |= await Je(e, t, n));
    let l = null,
      c = new s(),
      u = [],
      d = [],
      f = null,
      g = null,
      v = [],
      x = [],
      T = [],
      j = [],
      S = null;
    A(e, (e, { parent: t, replaceWith: r, context: n }) => {
      if ("at-rule" === e.kind) {
        if (
          "@tailwind" === e.name &&
          ("utilities" === e.params || e.params.startsWith("utilities"))
        ) {
          if (null !== g) return void r([]);
          let t = R(e.params, " ");
          for (let e of t)
            if (e.startsWith("source(")) {
              let t = e.slice(7, -1);
              if ("none" === t) {
                S = t;
                continue;
              }
              if (
                ('"' === t[0] && '"' !== t[t.length - 1]) ||
                ("'" === t[0] && "'" !== t[t.length - 1]) ||
                ("'" !== t[0] && '"' !== t[0])
              )
                throw new Error("`source(…)` paths must be quoted.");
              S = { base: n.sourceBase ?? n.base, pattern: t.slice(1, -1) };
            }
          (g = e), (i |= 16);
        }
        if ("@utility" === e.name) {
          if (null !== t) throw new Error("`@utility` cannot be nested.");
          if (0 === e.nodes.length)
            throw new Error(
              `\`@utility ${e.params}\` is empty. Utilities should include at least one property.`,
            );
          let r = (function (e) {
            let t = e.params;
            return be.test(t)
              ? (r) => {
                  let n = {
                    "--value": {
                      usedSpacingInteger: !1,
                      usedSpacingNumber: !1,
                      themeKeys: new Set(),
                      literals: new Set(),
                    },
                    "--modifier": {
                      usedSpacingInteger: !1,
                      usedSpacingNumber: !1,
                      themeKeys: new Set(),
                      literals: new Set(),
                    },
                  };
                  A(e.nodes, (e) => {
                    if (
                      "declaration" !== e.kind ||
                      !e.value ||
                      (!e.value.includes("--value(") &&
                        !e.value.includes("--modifier("))
                    )
                      return;
                    let t = m(e.value);
                    p(t, (e) => {
                      if ("function" !== e.kind) return;
                      if (
                        !(
                          "--spacing" !== e.value ||
                          (n["--modifier"].usedSpacingNumber &&
                            n["--value"].usedSpacingNumber)
                        )
                      )
                        return (
                          p(e.nodes, (e) => {
                            if (
                              "function" !== e.kind ||
                              ("--value" !== e.value &&
                                "--modifier" !== e.value)
                            )
                              return;
                            let t = e.value;
                            for (let r of e.nodes)
                              if ("word" === r.kind)
                                if ("integer" === r.value)
                                  n[t].usedSpacingInteger ||= !0;
                                else if (
                                  "number" === r.value &&
                                  ((n[t].usedSpacingNumber ||= !0),
                                  n["--modifier"].usedSpacingNumber &&
                                    n["--value"].usedSpacingNumber)
                                )
                                  return 2;
                          }),
                          0
                        );
                      if ("--value" !== e.value && "--modifier" !== e.value)
                        return;
                      let t = R(h(e.nodes), ",");
                      for (let [e, r] of t.entries())
                        (r = r.replace(/\\\*/g, "*")),
                          (r = r.replace(/--(.*?)\s--(.*?)/g, "--$1-*--$2")),
                          (r = r.replace(/\s+/g, "")),
                          (r = r.replace(/(-\*){2,}/g, "-*")),
                          "-" === r[0] &&
                            "-" === r[1] &&
                            !r.includes("-*") &&
                            (r += "-*"),
                          (t[e] = r);
                      e.nodes = m(t.join(","));
                      for (let t of e.nodes)
                        if (
                          "word" !== t.kind ||
                          ('"' !== t.value[0] && "'" !== t.value[0]) ||
                          t.value[0] !== t.value[t.value.length - 1]
                        ) {
                          if (
                            "word" === t.kind &&
                            "-" === t.value[0] &&
                            "-" === t.value[1]
                          ) {
                            let r = t.value.replace(/-\*.*$/g, "");
                            n[e.value].themeKeys.add(r);
                          }
                        } else {
                          let r = t.value.slice(1, -1);
                          n[e.value].literals.add(r);
                        }
                    }),
                      (e.value = h(t));
                  }),
                    r.utilities.functional(t.slice(0, -2), (t) => {
                      let n = structuredClone(e),
                        o = t.value,
                        a = t.modifier;
                      if (null === o) return;
                      let i = !1,
                        l = !1,
                        s = !1,
                        c = !1,
                        u = new Map(),
                        d = !1;
                      if (
                        (A([n], (e, { parent: t, replaceWith: n }) => {
                          if (
                            ("rule" !== t?.kind && "at-rule" !== t?.kind) ||
                            "declaration" !== e.kind ||
                            !e.value
                          )
                            return;
                          let f = m(e.value);
                          0 ===
                            (p(f, (f, { replaceWith: p }) => {
                              if ("function" === f.kind) {
                                if ("--value" === f.value) {
                                  i = !0;
                                  let a = Ce(o, f, r);
                                  return a
                                    ? ((l = !0),
                                      a.ratio ? (d = !0) : u.set(e, t),
                                      p(a.nodes),
                                      1)
                                    : ((i ||= !1), n([]), 2);
                                }
                                if ("--modifier" === f.value) {
                                  if (null === a) return n([]), 2;
                                  s = !0;
                                  let e = Ce(a, f, r);
                                  return e
                                    ? ((c = !0), p(e.nodes), 1)
                                    : ((s ||= !1), n([]), 2);
                                }
                              }
                            }) ?? 0) && (e.value = h(f));
                        }),
                        (i && !l) || (s && !c) || (d && c) || (a && !d && !c))
                      )
                        return null;
                      if (d)
                        for (let [e, t] of u) {
                          let r = t.nodes.indexOf(e);
                          -1 !== r && t.nodes.splice(r, 1);
                        }
                      return n.nodes;
                    }),
                    r.utilities.suggest(t.slice(0, -2), () => {
                      let e = [],
                        t = [];
                      for (let [
                        o,
                        {
                          literals: a,
                          usedSpacingNumber: i,
                          usedSpacingInteger: l,
                          themeKeys: s,
                        },
                      ] of [
                        [e, n["--value"]],
                        [t, n["--modifier"]],
                      ]) {
                        for (let e of a) o.push(e);
                        if (i) o.push(...ye);
                        else if (l) for (let e of ye) de(e) && o.push(e);
                        for (let e of r.theme.keysInNamespaces(s)) o.push(e);
                      }
                      return [{ values: e, modifiers: t }];
                    });
                }
              : ke.test(t)
                ? (r) => {
                    r.utilities.static(t, () => structuredClone(e.nodes));
                  }
                : null;
          })(e);
          if (null === r)
            throw new Error(
              `\`@utility ${e.params}\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter.`,
            );
          d.push(r);
        }
        if ("@source" === e.name) {
          if (e.nodes.length > 0)
            throw new Error("`@source` cannot have a body.");
          if (null !== t) throw new Error("`@source` cannot be nested.");
          let o = !1,
            a = !1,
            i = e.params;
          if (
            ("n" === i[0] &&
              i.startsWith("not ") &&
              ((o = !0), (i = i.slice(4))),
            "i" === i[0] &&
              i.startsWith("inline(") &&
              ((a = !0), (i = i.slice(7, -1))),
            ('"' === i[0] && '"' !== i[i.length - 1]) ||
              ("'" === i[0] && "'" !== i[i.length - 1]) ||
              ("'" !== i[0] && '"' !== i[0]))
          )
            throw new Error("`@source` paths must be quoted.");
          let l = i.slice(1, -1);
          if (a) {
            let e = o ? j : T,
              t = R(l, " ");
            for (let r of t) for (let t of Pt(r)) e.push(t);
          } else x.push({ base: n.base, pattern: l, negated: o });
          return void r([]);
        }
        if (
          ("@variant" === e.name &&
            (null === t
              ? 0 === e.nodes.length
                ? (e.name = "@custom-variant")
                : (A(e.nodes, (t) => {
                    if ("at-rule" === t.kind && "@slot" === t.name)
                      return (e.name = "@custom-variant"), 2;
                  }),
                  "@variant" === e.name && v.push(e))
              : v.push(e)),
          "@custom-variant" === e.name)
        ) {
          if (null !== t)
            throw new Error("`@custom-variant` cannot be nested.");
          r([]);
          let [n, o] = R(e.params, " ");
          if (!De.test(n))
            throw new Error(
              `\`@custom-variant ${n}\` defines an invalid variant name. Variants should only contain alphanumeric, dashes or underscore characters.`,
            );
          if (e.nodes.length > 0 && o)
            throw new Error(
              `\`@custom-variant ${n}\` cannot have both a selector and a body.`,
            );
          if (0 === e.nodes.length) {
            if (!o)
              throw new Error(
                `\`@custom-variant ${n}\` has no selector or body.`,
              );
            let e = R(o.slice(1, -1), ",");
            if (0 === e.length || e.some((e) => "" === e.trim()))
              throw new Error(
                `\`@custom-variant ${n} (${e.join(",")})\` selector is invalid.`,
              );
            let t = [],
              r = [];
            for (let n of e)
              (n = n.trim()), "@" === n[0] ? t.push(n) : r.push(n);
            return void u.push((e) => {
              e.variants.static(
                n,
                (e) => {
                  let n = [];
                  r.length > 0 && n.push(w(r.join(", "), e.nodes));
                  for (let r of t) n.push(b(r, e.nodes));
                  e.nodes = n;
                },
                { compounds: _e([...r, ...t]) },
              );
            });
          }
          return void u.push((t) => {
            t.variants.fromAst(n, e.nodes);
          });
        }
        if ("@media" === e.name) {
          let t = R(e.params, " "),
            o = [];
          for (let r of t)
            if (r.startsWith("source(")) {
              let t = r.slice(7, -1);
              A(e.nodes, (e, { replaceWith: r }) => {
                if (
                  "at-rule" === e.kind &&
                  "@tailwind" === e.name &&
                  "utilities" === e.params
                )
                  return (
                    (e.params += ` source(${t})`),
                    r([$({ sourceBase: n.base }, [e])]),
                    2
                  );
              });
            } else if (r.startsWith("theme(")) {
              let t = r.slice(6, -1),
                n = t.includes("reference");
              A(e.nodes, (e) => {
                if ("at-rule" !== e.kind) {
                  if (n)
                    throw new Error(
                      'Files imported with `@import "…" theme(reference)` must only contain `@theme` blocks.\nUse `@reference "…";` instead.',
                    );
                  return 0;
                }
                if ("@theme" === e.name) return (e.params += " " + t), 1;
              });
            } else if (r.startsWith("prefix(")) {
              let t = r.slice(7, -1);
              A(e.nodes, (e) => {
                if ("at-rule" === e.kind && "@theme" === e.name)
                  return (e.params += ` prefix(${t})`), 1;
              });
            } else
              "important" === r
                ? (l = !0)
                : "reference" === r
                  ? (e.nodes = [$({ reference: !0 }, e.nodes)])
                  : o.push(r);
          o.length > 0 ? (e.params = o.join(" ")) : t.length > 0 && r(e.nodes);
        }
        if ("@theme" === e.name) {
          let [t, o] = (function (e) {
            let t = 0,
              r = null;
            for (let n of R(e, " "))
              "reference" === n
                ? (t |= 2)
                : "inline" === n
                  ? (t |= 1)
                  : "default" === n
                    ? (t |= 4)
                    : "static" === n
                      ? (t |= 8)
                      : n.startsWith("prefix(") &&
                        n.endsWith(")") &&
                        (r = n.slice(7, -1));
            return [t, r];
          })(e.params);
          if ((n.reference && (t |= 2), o)) {
            if (!Ht.test(o))
              throw new Error(
                `The prefix "${o}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`,
              );
            c.prefix = o;
          }
          return (
            A(e.nodes, (r) => {
              if ("at-rule" === r.kind && "@keyframes" === r.name)
                return c.addKeyframes(r), 1;
              if ("comment" === r.kind) return;
              if ("declaration" === r.kind && r.property.startsWith("--"))
                return void c.add(a(r.property), r.value ?? "", t);
              let n = C([k(e.name, e.params, [r])])
                .split("\n")
                .map(
                  (e, t, r) =>
                    `${0 === t || t >= r.length - 2 ? " " : ">"} ${e}`,
                )
                .join("\n");
              throw new Error(
                `\`@theme\` blocks must only contain custom properties or \`@keyframes\`.\n\n${n}`,
              );
            }),
            f ? r([]) : ((f = w(":root, :host", [])), r([f])),
            1
          );
        }
      }
    });
    let K = Re(c);
    if ((l && (K.important = l), j.length > 0))
      for (let e of j) K.invalidCandidates.add(e);
    i |= await Rt({
      designSystem: K,
      base: t,
      ast: e,
      loadModule: r,
      sources: x,
    });
    for (let e of u) e(K);
    for (let e of d) e(K);
    if (f) {
      let t = [];
      for (let [e, r] of K.theme.entries())
        2 & r.options || t.push(y(o(e), r.value));
      let r = K.theme.getKeyframes();
      for (let t of r) e.push($({ theme: !0 }, [z([t])]));
      f.nodes = [$({ theme: !0 }, t)];
    }
    if (g) {
      let e = g;
      (e.kind = "context"), (e.context = {});
    }
    if (v.length > 0) {
      for (let e of v) {
        let t = w("&", e.nodes),
          r = e.params,
          n = K.parseVariant(r);
        if (null === n)
          throw new Error(`Cannot use \`@variant\` with unknown variant: ${r}`);
        if (null === Pe(t, n, K.variants))
          throw new Error(`Cannot use \`@variant\` with variant: ${r}`);
        Object.assign(e, t);
      }
      i |= 32;
    }
    return (
      (i |= Ne(e, K)),
      (i |= Ge(e, K)),
      A(e, (e, { replaceWith: t }) => {
        if ("at-rule" === e.kind) return "@utility" === e.name && t([]), 1;
      }),
      {
        designSystem: K,
        ast: e,
        sources: x,
        root: S,
        utilitiesNode: g,
        features: i,
        inlineCandidates: T,
      }
    );
  }
  async function Xt(e, r = {}) {
    let n = t(e),
      o = await (async function (e, t = {}) {
        let {
          designSystem: r,
          ast: n,
          sources: o,
          root: a,
          utilitiesNode: i,
          features: l,
          inlineCandidates: s,
        } = await Gt(e, t);
        function c(e) {
          r.invalidCandidates.add(e);
        }
        n.unshift(
          x("! tailwindcss v4.1.2 | MIT License | https://tailwindcss.com "),
        );
        let u = new Set(),
          d = null,
          f = 0,
          p = !1;
        for (let e of s) r.invalidCandidates.has(e) || (u.add(e), (p = !0));
        return {
          sources: o,
          root: a,
          features: l,
          build(o) {
            if (0 === l) return e;
            if (!i) return (d ??= j(n, r, t.polyfills)), d;
            let a = p,
              s = !1;
            p = !1;
            let h = u.size;
            for (let e of o)
              if (!r.invalidCandidates.has(e))
                if ("-" === e[0] && "-" === e[1]) {
                  let t = r.theme.markUsedVariable(e);
                  (a ||= t), (s ||= t);
                } else u.add(e), (a ||= u.size !== h);
            if (!a) return (d ??= j(n, r, t.polyfills)), d;
            let m = qe(u, r, { onInvalidCandidate: c }).astNodes;
            return s || f !== m.length
              ? ((f = m.length), (i.nodes = m), (d = j(n, r, t.polyfills)), d)
              : ((d ??= j(n, r, t.polyfills)), d);
          },
        };
      })(n, r),
      a = n,
      i = e;
    return {
      ...o,
      build(e) {
        let t = o.build(e);
        return t === a || ((i = C(t)), (a = t)), i;
      },
    };
  }
  var Jt = {
    index:
      "@layer theme, base, components, utilities;\n\n@import './theme.css' layer(theme);\n@import './preflight.css' layer(base);\n@import './utilities.css' layer(utilities);\n",
    preflight:
      "/*\n  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n  2. Remove default margins and padding\n  3. Reset all borders.\n*/\n\n*,\n::after,\n::before,\n::backdrop,\n::file-selector-button {\n  box-sizing: border-box; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 2 */\n  border: 0 solid; /* 3 */\n}\n\n/*\n  1. Use a consistent sensible line-height in all browsers.\n  2. Prevent adjustments of font size after orientation changes in iOS.\n  3. Use a more readable tab size.\n  4. Use the user's configured `sans` font-family by default.\n  5. Use the user's configured `sans` font-feature-settings by default.\n  6. Use the user's configured `sans` font-variation-settings by default.\n  7. Disable tap highlights on iOS.\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  tab-size: 4; /* 3 */\n  font-family: --theme(\n    --default-font-family,\n    ui-sans-serif,\n    system-ui,\n    sans-serif,\n    'Apple Color Emoji',\n    'Segoe UI Emoji',\n    'Segoe UI Symbol',\n    'Noto Color Emoji'\n  ); /* 4 */\n  font-feature-settings: --theme(--default-font-feature-settings, normal); /* 5 */\n  font-variation-settings: --theme(--default-font-variation-settings, normal); /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n  1. Add the correct height in Firefox.\n  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n  3. Reset the default border style to a 1px solid border.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\n  Add the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\n\n/*\n  Remove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\n  Reset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  -webkit-text-decoration: inherit;\n  text-decoration: inherit;\n}\n\n/*\n  Add the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n  1. Use the user's configured `mono` font-family by default.\n  2. Use the user's configured `mono` font-feature-settings by default.\n  3. Use the user's configured `mono` font-variation-settings by default.\n  4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: --theme(\n    --default-mono-font-family,\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    'Liberation Mono',\n    'Courier New',\n    monospace\n  ); /* 1 */\n  font-feature-settings: --theme(--default-mono-font-feature-settings, normal); /* 2 */\n  font-variation-settings: --theme(--default-mono-font-variation-settings, normal); /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\n  Add the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\n  Prevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n  3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n  Use the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\n  Add the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\n  Add the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\n  Make lists unstyled by default.\n*/\n\nol,\nul,\nmenu {\n  list-style: none;\n}\n\n/*\n  1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n  2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n      This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\n  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\n  1. Inherit font styles in all browsers.\n  2. Remove border radius in all browsers.\n  3. Remove background color in all browsers.\n  4. Ensure consistent opacity for disabled states in all browsers.\n*/\n\nbutton,\ninput,\nselect,\noptgroup,\ntextarea,\n::file-selector-button {\n  font: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  border-radius: 0; /* 2 */\n  background-color: transparent; /* 3 */\n  opacity: 1; /* 4 */\n}\n\n/*\n  Restore default font weight.\n*/\n\n:where(select:is([multiple], [size])) optgroup {\n  font-weight: bolder;\n}\n\n/*\n  Restore indentation.\n*/\n\n:where(select:is([multiple], [size])) optgroup option {\n  padding-inline-start: 20px;\n}\n\n/*\n  Restore space after button.\n*/\n\n::file-selector-button {\n  margin-inline-end: 4px;\n}\n\n/*\n  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n*/\n\n::placeholder {\n  opacity: 1;\n}\n\n/*\n  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not\n  crash when using `color-mix(…)` with `currentcolor`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)\n*/\n\n@supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or\n  (contain-intrinsic-size: 1px) /* Safari 17+ */ {\n  ::placeholder {\n    color: color-mix(in oklab, currentcolor 50%, transparent);\n  }\n}\n\n/*\n  Prevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n  Remove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n  1. Ensure date/time inputs have the same height when empty in iOS Safari.\n  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.\n*/\n\n::-webkit-date-and-time-value {\n  min-height: 1lh; /* 1 */\n  text-align: inherit; /* 2 */\n}\n\n/*\n  Prevent height from changing on date/time inputs in macOS Safari when the input is set to `display: block`.\n*/\n\n::-webkit-datetime-edit {\n  display: inline-flex;\n}\n\n/*\n  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.\n*/\n\n::-webkit-datetime-edit-fields-wrapper {\n  padding: 0;\n}\n\n::-webkit-datetime-edit,\n::-webkit-datetime-edit-year-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-minute-field,\n::-webkit-datetime-edit-second-field,\n::-webkit-datetime-edit-millisecond-field,\n::-webkit-datetime-edit-meridiem-field {\n  padding-block: 0;\n}\n\n/*\n  Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\n  Correct the inability to style the border radius in iOS Safari.\n*/\n\nbutton,\ninput:where([type='button'], [type='reset'], [type='submit']),\n::file-selector-button {\n  appearance: button;\n}\n\n/*\n  Correct the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n  Make elements with the HTML hidden attribute stay hidden by default.\n*/\n\n[hidden]:where(:not([hidden='until-found'])) {\n  display: none !important;\n}\n",
    theme:
      "@theme default {\n  --font-sans:\n    ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n    'Noto Color Emoji';\n  --font-serif: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;\n  --font-mono:\n    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',\n    monospace;\n\n  --color-red-50: oklch(97.1% 0.013 17.38);\n  --color-red-100: oklch(93.6% 0.032 17.717);\n  --color-red-200: oklch(88.5% 0.062 18.334);\n  --color-red-300: oklch(80.8% 0.114 19.571);\n  --color-red-400: oklch(70.4% 0.191 22.216);\n  --color-red-500: oklch(63.7% 0.237 25.331);\n  --color-red-600: oklch(57.7% 0.245 27.325);\n  --color-red-700: oklch(50.5% 0.213 27.518);\n  --color-red-800: oklch(44.4% 0.177 26.899);\n  --color-red-900: oklch(39.6% 0.141 25.723);\n  --color-red-950: oklch(25.8% 0.092 26.042);\n\n  --color-orange-50: oklch(98% 0.016 73.684);\n  --color-orange-100: oklch(95.4% 0.038 75.164);\n  --color-orange-200: oklch(90.1% 0.076 70.697);\n  --color-orange-300: oklch(83.7% 0.128 66.29);\n  --color-orange-400: oklch(75% 0.183 55.934);\n  --color-orange-500: oklch(70.5% 0.213 47.604);\n  --color-orange-600: oklch(64.6% 0.222 41.116);\n  --color-orange-700: oklch(55.3% 0.195 38.402);\n  --color-orange-800: oklch(47% 0.157 37.304);\n  --color-orange-900: oklch(40.8% 0.123 38.172);\n  --color-orange-950: oklch(26.6% 0.079 36.259);\n\n  --color-amber-50: oklch(98.7% 0.022 95.277);\n  --color-amber-100: oklch(96.2% 0.059 95.617);\n  --color-amber-200: oklch(92.4% 0.12 95.746);\n  --color-amber-300: oklch(87.9% 0.169 91.605);\n  --color-amber-400: oklch(82.8% 0.189 84.429);\n  --color-amber-500: oklch(76.9% 0.188 70.08);\n  --color-amber-600: oklch(66.6% 0.179 58.318);\n  --color-amber-700: oklch(55.5% 0.163 48.998);\n  --color-amber-800: oklch(47.3% 0.137 46.201);\n  --color-amber-900: oklch(41.4% 0.112 45.904);\n  --color-amber-950: oklch(27.9% 0.077 45.635);\n\n  --color-yellow-50: oklch(98.7% 0.026 102.212);\n  --color-yellow-100: oklch(97.3% 0.071 103.193);\n  --color-yellow-200: oklch(94.5% 0.129 101.54);\n  --color-yellow-300: oklch(90.5% 0.182 98.111);\n  --color-yellow-400: oklch(85.2% 0.199 91.936);\n  --color-yellow-500: oklch(79.5% 0.184 86.047);\n  --color-yellow-600: oklch(68.1% 0.162 75.834);\n  --color-yellow-700: oklch(55.4% 0.135 66.442);\n  --color-yellow-800: oklch(47.6% 0.114 61.907);\n  --color-yellow-900: oklch(42.1% 0.095 57.708);\n  --color-yellow-950: oklch(28.6% 0.066 53.813);\n\n  --color-lime-50: oklch(98.6% 0.031 120.757);\n  --color-lime-100: oklch(96.7% 0.067 122.328);\n  --color-lime-200: oklch(93.8% 0.127 124.321);\n  --color-lime-300: oklch(89.7% 0.196 126.665);\n  --color-lime-400: oklch(84.1% 0.238 128.85);\n  --color-lime-500: oklch(76.8% 0.233 130.85);\n  --color-lime-600: oklch(64.8% 0.2 131.684);\n  --color-lime-700: oklch(53.2% 0.157 131.589);\n  --color-lime-800: oklch(45.3% 0.124 130.933);\n  --color-lime-900: oklch(40.5% 0.101 131.063);\n  --color-lime-950: oklch(27.4% 0.072 132.109);\n\n  --color-green-50: oklch(98.2% 0.018 155.826);\n  --color-green-100: oklch(96.2% 0.044 156.743);\n  --color-green-200: oklch(92.5% 0.084 155.995);\n  --color-green-300: oklch(87.1% 0.15 154.449);\n  --color-green-400: oklch(79.2% 0.209 151.711);\n  --color-green-500: oklch(72.3% 0.219 149.579);\n  --color-green-600: oklch(62.7% 0.194 149.214);\n  --color-green-700: oklch(52.7% 0.154 150.069);\n  --color-green-800: oklch(44.8% 0.119 151.328);\n  --color-green-900: oklch(39.3% 0.095 152.535);\n  --color-green-950: oklch(26.6% 0.065 152.934);\n\n  --color-emerald-50: oklch(97.9% 0.021 166.113);\n  --color-emerald-100: oklch(95% 0.052 163.051);\n  --color-emerald-200: oklch(90.5% 0.093 164.15);\n  --color-emerald-300: oklch(84.5% 0.143 164.978);\n  --color-emerald-400: oklch(76.5% 0.177 163.223);\n  --color-emerald-500: oklch(69.6% 0.17 162.48);\n  --color-emerald-600: oklch(59.6% 0.145 163.225);\n  --color-emerald-700: oklch(50.8% 0.118 165.612);\n  --color-emerald-800: oklch(43.2% 0.095 166.913);\n  --color-emerald-900: oklch(37.8% 0.077 168.94);\n  --color-emerald-950: oklch(26.2% 0.051 172.552);\n\n  --color-teal-50: oklch(98.4% 0.014 180.72);\n  --color-teal-100: oklch(95.3% 0.051 180.801);\n  --color-teal-200: oklch(91% 0.096 180.426);\n  --color-teal-300: oklch(85.5% 0.138 181.071);\n  --color-teal-400: oklch(77.7% 0.152 181.912);\n  --color-teal-500: oklch(70.4% 0.14 182.503);\n  --color-teal-600: oklch(60% 0.118 184.704);\n  --color-teal-700: oklch(51.1% 0.096 186.391);\n  --color-teal-800: oklch(43.7% 0.078 188.216);\n  --color-teal-900: oklch(38.6% 0.063 188.416);\n  --color-teal-950: oklch(27.7% 0.046 192.524);\n\n  --color-cyan-50: oklch(98.4% 0.019 200.873);\n  --color-cyan-100: oklch(95.6% 0.045 203.388);\n  --color-cyan-200: oklch(91.7% 0.08 205.041);\n  --color-cyan-300: oklch(86.5% 0.127 207.078);\n  --color-cyan-400: oklch(78.9% 0.154 211.53);\n  --color-cyan-500: oklch(71.5% 0.143 215.221);\n  --color-cyan-600: oklch(60.9% 0.126 221.723);\n  --color-cyan-700: oklch(52% 0.105 223.128);\n  --color-cyan-800: oklch(45% 0.085 224.283);\n  --color-cyan-900: oklch(39.8% 0.07 227.392);\n  --color-cyan-950: oklch(30.2% 0.056 229.695);\n\n  --color-sky-50: oklch(97.7% 0.013 236.62);\n  --color-sky-100: oklch(95.1% 0.026 236.824);\n  --color-sky-200: oklch(90.1% 0.058 230.902);\n  --color-sky-300: oklch(82.8% 0.111 230.318);\n  --color-sky-400: oklch(74.6% 0.16 232.661);\n  --color-sky-500: oklch(68.5% 0.169 237.323);\n  --color-sky-600: oklch(58.8% 0.158 241.966);\n  --color-sky-700: oklch(50% 0.134 242.749);\n  --color-sky-800: oklch(44.3% 0.11 240.79);\n  --color-sky-900: oklch(39.1% 0.09 240.876);\n  --color-sky-950: oklch(29.3% 0.066 243.157);\n\n  --color-blue-50: oklch(97% 0.014 254.604);\n  --color-blue-100: oklch(93.2% 0.032 255.585);\n  --color-blue-200: oklch(88.2% 0.059 254.128);\n  --color-blue-300: oklch(80.9% 0.105 251.813);\n  --color-blue-400: oklch(70.7% 0.165 254.624);\n  --color-blue-500: oklch(62.3% 0.214 259.815);\n  --color-blue-600: oklch(54.6% 0.245 262.881);\n  --color-blue-700: oklch(48.8% 0.243 264.376);\n  --color-blue-800: oklch(42.4% 0.199 265.638);\n  --color-blue-900: oklch(37.9% 0.146 265.522);\n  --color-blue-950: oklch(28.2% 0.091 267.935);\n\n  --color-indigo-50: oklch(96.2% 0.018 272.314);\n  --color-indigo-100: oklch(93% 0.034 272.788);\n  --color-indigo-200: oklch(87% 0.065 274.039);\n  --color-indigo-300: oklch(78.5% 0.115 274.713);\n  --color-indigo-400: oklch(67.3% 0.182 276.935);\n  --color-indigo-500: oklch(58.5% 0.233 277.117);\n  --color-indigo-600: oklch(51.1% 0.262 276.966);\n  --color-indigo-700: oklch(45.7% 0.24 277.023);\n  --color-indigo-800: oklch(39.8% 0.195 277.366);\n  --color-indigo-900: oklch(35.9% 0.144 278.697);\n  --color-indigo-950: oklch(25.7% 0.09 281.288);\n\n  --color-violet-50: oklch(96.9% 0.016 293.756);\n  --color-violet-100: oklch(94.3% 0.029 294.588);\n  --color-violet-200: oklch(89.4% 0.057 293.283);\n  --color-violet-300: oklch(81.1% 0.111 293.571);\n  --color-violet-400: oklch(70.2% 0.183 293.541);\n  --color-violet-500: oklch(60.6% 0.25 292.717);\n  --color-violet-600: oklch(54.1% 0.281 293.009);\n  --color-violet-700: oklch(49.1% 0.27 292.581);\n  --color-violet-800: oklch(43.2% 0.232 292.759);\n  --color-violet-900: oklch(38% 0.189 293.745);\n  --color-violet-950: oklch(28.3% 0.141 291.089);\n\n  --color-purple-50: oklch(97.7% 0.014 308.299);\n  --color-purple-100: oklch(94.6% 0.033 307.174);\n  --color-purple-200: oklch(90.2% 0.063 306.703);\n  --color-purple-300: oklch(82.7% 0.119 306.383);\n  --color-purple-400: oklch(71.4% 0.203 305.504);\n  --color-purple-500: oklch(62.7% 0.265 303.9);\n  --color-purple-600: oklch(55.8% 0.288 302.321);\n  --color-purple-700: oklch(49.6% 0.265 301.924);\n  --color-purple-800: oklch(43.8% 0.218 303.724);\n  --color-purple-900: oklch(38.1% 0.176 304.987);\n  --color-purple-950: oklch(29.1% 0.149 302.717);\n\n  --color-fuchsia-50: oklch(97.7% 0.017 320.058);\n  --color-fuchsia-100: oklch(95.2% 0.037 318.852);\n  --color-fuchsia-200: oklch(90.3% 0.076 319.62);\n  --color-fuchsia-300: oklch(83.3% 0.145 321.434);\n  --color-fuchsia-400: oklch(74% 0.238 322.16);\n  --color-fuchsia-500: oklch(66.7% 0.295 322.15);\n  --color-fuchsia-600: oklch(59.1% 0.293 322.896);\n  --color-fuchsia-700: oklch(51.8% 0.253 323.949);\n  --color-fuchsia-800: oklch(45.2% 0.211 324.591);\n  --color-fuchsia-900: oklch(40.1% 0.17 325.612);\n  --color-fuchsia-950: oklch(29.3% 0.136 325.661);\n\n  --color-pink-50: oklch(97.1% 0.014 343.198);\n  --color-pink-100: oklch(94.8% 0.028 342.258);\n  --color-pink-200: oklch(89.9% 0.061 343.231);\n  --color-pink-300: oklch(82.3% 0.12 346.018);\n  --color-pink-400: oklch(71.8% 0.202 349.761);\n  --color-pink-500: oklch(65.6% 0.241 354.308);\n  --color-pink-600: oklch(59.2% 0.249 0.584);\n  --color-pink-700: oklch(52.5% 0.223 3.958);\n  --color-pink-800: oklch(45.9% 0.187 3.815);\n  --color-pink-900: oklch(40.8% 0.153 2.432);\n  --color-pink-950: oklch(28.4% 0.109 3.907);\n\n  --color-rose-50: oklch(96.9% 0.015 12.422);\n  --color-rose-100: oklch(94.1% 0.03 12.58);\n  --color-rose-200: oklch(89.2% 0.058 10.001);\n  --color-rose-300: oklch(81% 0.117 11.638);\n  --color-rose-400: oklch(71.2% 0.194 13.428);\n  --color-rose-500: oklch(64.5% 0.246 16.439);\n  --color-rose-600: oklch(58.6% 0.253 17.585);\n  --color-rose-700: oklch(51.4% 0.222 16.935);\n  --color-rose-800: oklch(45.5% 0.188 13.697);\n  --color-rose-900: oklch(41% 0.159 10.272);\n  --color-rose-950: oklch(27.1% 0.105 12.094);\n\n  --color-slate-50: oklch(98.4% 0.003 247.858);\n  --color-slate-100: oklch(96.8% 0.007 247.896);\n  --color-slate-200: oklch(92.9% 0.013 255.508);\n  --color-slate-300: oklch(86.9% 0.022 252.894);\n  --color-slate-400: oklch(70.4% 0.04 256.788);\n  --color-slate-500: oklch(55.4% 0.046 257.417);\n  --color-slate-600: oklch(44.6% 0.043 257.281);\n  --color-slate-700: oklch(37.2% 0.044 257.287);\n  --color-slate-800: oklch(27.9% 0.041 260.031);\n  --color-slate-900: oklch(20.8% 0.042 265.755);\n  --color-slate-950: oklch(12.9% 0.042 264.695);\n\n  --color-gray-50: oklch(98.5% 0.002 247.839);\n  --color-gray-100: oklch(96.7% 0.003 264.542);\n  --color-gray-200: oklch(92.8% 0.006 264.531);\n  --color-gray-300: oklch(87.2% 0.01 258.338);\n  --color-gray-400: oklch(70.7% 0.022 261.325);\n  --color-gray-500: oklch(55.1% 0.027 264.364);\n  --color-gray-600: oklch(44.6% 0.03 256.802);\n  --color-gray-700: oklch(37.3% 0.034 259.733);\n  --color-gray-800: oklch(27.8% 0.033 256.848);\n  --color-gray-900: oklch(21% 0.034 264.665);\n  --color-gray-950: oklch(13% 0.028 261.692);\n\n  --color-zinc-50: oklch(98.5% 0 0);\n  --color-zinc-100: oklch(96.7% 0.001 286.375);\n  --color-zinc-200: oklch(92% 0.004 286.32);\n  --color-zinc-300: oklch(87.1% 0.006 286.286);\n  --color-zinc-400: oklch(70.5% 0.015 286.067);\n  --color-zinc-500: oklch(55.2% 0.016 285.938);\n  --color-zinc-600: oklch(44.2% 0.017 285.786);\n  --color-zinc-700: oklch(37% 0.013 285.805);\n  --color-zinc-800: oklch(27.4% 0.006 286.033);\n  --color-zinc-900: oklch(21% 0.006 285.885);\n  --color-zinc-950: oklch(14.1% 0.005 285.823);\n\n  --color-neutral-50: oklch(98.5% 0 0);\n  --color-neutral-100: oklch(97% 0 0);\n  --color-neutral-200: oklch(92.2% 0 0);\n  --color-neutral-300: oklch(87% 0 0);\n  --color-neutral-400: oklch(70.8% 0 0);\n  --color-neutral-500: oklch(55.6% 0 0);\n  --color-neutral-600: oklch(43.9% 0 0);\n  --color-neutral-700: oklch(37.1% 0 0);\n  --color-neutral-800: oklch(26.9% 0 0);\n  --color-neutral-900: oklch(20.5% 0 0);\n  --color-neutral-950: oklch(14.5% 0 0);\n\n  --color-stone-50: oklch(98.5% 0.001 106.423);\n  --color-stone-100: oklch(97% 0.001 106.424);\n  --color-stone-200: oklch(92.3% 0.003 48.717);\n  --color-stone-300: oklch(86.9% 0.005 56.366);\n  --color-stone-400: oklch(70.9% 0.01 56.259);\n  --color-stone-500: oklch(55.3% 0.013 58.071);\n  --color-stone-600: oklch(44.4% 0.011 73.639);\n  --color-stone-700: oklch(37.4% 0.01 67.558);\n  --color-stone-800: oklch(26.8% 0.007 34.298);\n  --color-stone-900: oklch(21.6% 0.006 56.043);\n  --color-stone-950: oklch(14.7% 0.004 49.25);\n\n  --color-black: #000;\n  --color-white: #fff;\n\n  --spacing: 0.25rem;\n\n  --breakpoint-sm: 40rem;\n  --breakpoint-md: 48rem;\n  --breakpoint-lg: 64rem;\n  --breakpoint-xl: 80rem;\n  --breakpoint-2xl: 96rem;\n\n  --container-3xs: 16rem;\n  --container-2xs: 18rem;\n  --container-xs: 20rem;\n  --container-sm: 24rem;\n  --container-md: 28rem;\n  --container-lg: 32rem;\n  --container-xl: 36rem;\n  --container-2xl: 42rem;\n  --container-3xl: 48rem;\n  --container-4xl: 56rem;\n  --container-5xl: 64rem;\n  --container-6xl: 72rem;\n  --container-7xl: 80rem;\n\n  --text-xs: 0.75rem;\n  --text-xs--line-height: calc(1 / 0.75);\n  --text-sm: 0.875rem;\n  --text-sm--line-height: calc(1.25 / 0.875);\n  --text-base: 1rem;\n  --text-base--line-height: calc(1.5 / 1);\n  --text-lg: 1.125rem;\n  --text-lg--line-height: calc(1.75 / 1.125);\n  --text-xl: 1.25rem;\n  --text-xl--line-height: calc(1.75 / 1.25);\n  --text-2xl: 1.5rem;\n  --text-2xl--line-height: calc(2 / 1.5);\n  --text-3xl: 1.875rem;\n  --text-3xl--line-height: calc(2.25 / 1.875);\n  --text-4xl: 2.25rem;\n  --text-4xl--line-height: calc(2.5 / 2.25);\n  --text-5xl: 3rem;\n  --text-5xl--line-height: 1;\n  --text-6xl: 3.75rem;\n  --text-6xl--line-height: 1;\n  --text-7xl: 4.5rem;\n  --text-7xl--line-height: 1;\n  --text-8xl: 6rem;\n  --text-8xl--line-height: 1;\n  --text-9xl: 8rem;\n  --text-9xl--line-height: 1;\n\n  --font-weight-thin: 100;\n  --font-weight-extralight: 200;\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semibold: 600;\n  --font-weight-bold: 700;\n  --font-weight-extrabold: 800;\n  --font-weight-black: 900;\n\n  --tracking-tighter: -0.05em;\n  --tracking-tight: -0.025em;\n  --tracking-normal: 0em;\n  --tracking-wide: 0.025em;\n  --tracking-wider: 0.05em;\n  --tracking-widest: 0.1em;\n\n  --leading-tight: 1.25;\n  --leading-snug: 1.375;\n  --leading-normal: 1.5;\n  --leading-relaxed: 1.625;\n  --leading-loose: 2;\n\n  --radius-xs: 0.125rem;\n  --radius-sm: 0.25rem;\n  --radius-md: 0.375rem;\n  --radius-lg: 0.5rem;\n  --radius-xl: 0.75rem;\n  --radius-2xl: 1rem;\n  --radius-3xl: 1.5rem;\n  --radius-4xl: 2rem;\n\n  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);\n  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n\n  --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);\n  --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);\n  --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);\n\n  --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);\n  --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);\n  --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);\n  --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);\n  --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);\n  --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);\n\n  --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);\n  --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);\n  --text-shadow-sm:\n    0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075);\n  --text-shadow-md:\n    0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1);\n  --text-shadow-lg:\n    0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0 0 0 / 0.1);\n\n  --ease-in: cubic-bezier(0.4, 0, 1, 1);\n  --ease-out: cubic-bezier(0, 0, 0.2, 1);\n  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n\n  --animate-spin: spin 1s linear infinite;\n  --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --animate-bounce: bounce 1s infinite;\n\n  @keyframes spin {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes ping {\n    75%,\n    100% {\n      transform: scale(2);\n      opacity: 0;\n    }\n  }\n\n  @keyframes pulse {\n    50% {\n      opacity: 0.5;\n    }\n  }\n\n  @keyframes bounce {\n    0%,\n    100% {\n      transform: translateY(-25%);\n      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n    }\n\n    50% {\n      transform: none;\n      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    }\n  }\n\n  --blur-xs: 4px;\n  --blur-sm: 8px;\n  --blur-md: 12px;\n  --blur-lg: 16px;\n  --blur-xl: 24px;\n  --blur-2xl: 40px;\n  --blur-3xl: 64px;\n\n  --perspective-dramatic: 100px;\n  --perspective-near: 300px;\n  --perspective-normal: 500px;\n  --perspective-midrange: 800px;\n  --perspective-distant: 1200px;\n\n  --aspect-video: 16 / 9;\n\n  --default-transition-duration: 150ms;\n  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  --default-font-family: --theme(--font-sans, initial);\n  --default-font-feature-settings: --theme(--font-sans--font-feature-settings, initial);\n  --default-font-variation-settings: --theme(--font-sans--font-variation-settings, initial);\n  --default-mono-font-family: --theme(--font-mono, initial);\n  --default-mono-font-feature-settings: --theme(--font-mono--font-feature-settings, initial);\n  --default-mono-font-variation-settings: --theme(--font-mono--font-variation-settings, initial);\n}\n\n/* Deprecated */\n@theme default inline reference {\n  --blur: 8px;\n  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n  --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);\n  --radius: 0.25rem;\n  --max-width-prose: 65ch;\n}\n",
    utilities: "@tailwind utilities;\n",
  };
  var Qt,
    er = "text/tailwindcss",
    tr = new Set(),
    rr = "",
    nr = document.createElement("style"),
    or = Promise.resolve(),
    ar = 1,
    ir = new (class {
      start(e) {
        performance.mark(`${e} (start)`);
      }
      end(e, t) {
        performance.mark(`${e} (end)`),
          performance.measure(e, {
            start: `${e} (start)`,
            end: `${e} (end)`,
            detail: t,
          });
      }
      hit(e, t) {
        performance.mark(e, { detail: t });
      }
      error(e) {
        throw (performance.mark("(error)", { detail: { error: `${e}` } }), e);
      }
    })();
  async function lr(e, t) {
    try {
      let r = (function () {
        if ("tailwindcss" === e) return { base: t, content: Jt.index };
        if (
          "tailwindcss/preflight" === e ||
          "tailwindcss/preflight.css" === e ||
          "./preflight.css" === e
        )
          return { base: t, content: Jt.preflight };
        if (
          "tailwindcss/theme" === e ||
          "tailwindcss/theme.css" === e ||
          "./theme.css" === e
        )
          return { base: t, content: Jt.theme };
        if (
          "tailwindcss/utilities" === e ||
          "tailwindcss/utilities.css" === e ||
          "./utilities.css" === e
        )
          return { base: t, content: Jt.utilities };
        throw new Error(
          `The browser build does not support @import for "${e}"`,
        );
      })();
      return (
        ir.hit("Loaded stylesheet", { id: e, base: t, size: r.content.length }),
        r
      );
    } catch (r) {
      throw (
        (ir.hit("Failed to load stylesheet", {
          id: e,
          base: t,
          error: r.message ?? r,
        }),
        r)
      );
    }
  }
  async function sr() {
    throw new Error(
      "The browser build does not support plugins or config files.",
    );
  }
  function cr(e) {
    or = or
      .then(async function () {
        if (!Qt && "full" !== e) return;
        let t = ar++;
        ir.start(`Build #${t} (${e})`),
          "full" === e &&
            (await (async function () {
              ir.start("Create compiler"), ir.start("Reading Stylesheets");
              let e = document.querySelectorAll(`style[type="${er}"]`),
                t = "";
              for (let r of e) dr(r), (t += r.textContent + "\n");
              if (
                (t.includes("@import") || (t = `@import "tailwindcss";${t}`),
                ir.end("Reading Stylesheets", {
                  size: t.length,
                  changed: rr !== t,
                }),
                rr !== t)
              ) {
                (rr = t), ir.start("Compile CSS");
                try {
                  Qt = await Xt(t, {
                    base: "/",
                    loadStylesheet: lr,
                    loadModule: sr,
                  });
                } finally {
                  ir.end("Compile CSS"), ir.end("Create compiler");
                }
                tr.clear();
              }
            })()),
          ir.start("Build"),
          await (async function (e) {
            if (!Qt) return;
            let t = new Set();
            ir.start("Collect classes");
            for (let e of document.querySelectorAll("[class]"))
              for (let r of e.classList) tr.has(r) || (tr.add(r), t.add(r));
            ir.end("Collect classes", { count: t.size }),
              (0 !== t.size || "incremental" !== e) &&
                (ir.start("Build utilities"),
                (nr.textContent = Qt.build(Array.from(t))),
                ir.end("Build utilities"));
          })(e),
          ir.end("Build"),
          ir.end(`Build #${t} (${e})`);
      })
      .catch((e) => ir.error(e));
  }
  var ur = new MutationObserver(() => cr("full"));
  function dr(e) {
    ur.observe(e, {
      attributes: !0,
      attributeFilter: ["type"],
      characterData: !0,
      subtree: !0,
      childList: !0,
    });
  }
  new MutationObserver((e) => {
    let t = 0,
      r = 0;
    for (let n of e) {
      for (let e of n.addedNodes)
        e.nodeType === Node.ELEMENT_NODE &&
          "STYLE" === e.tagName &&
          e.getAttribute("type") === er &&
          (dr(e), t++);
      for (let e of n.addedNodes) 1 === e.nodeType && e !== nr && r++;
      "attributes" === n.type && r++;
    }
    return t > 0 ? cr("full") : r > 0 ? cr("incremental") : void 0;
  }).observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["class"],
    childList: !0,
    subtree: !0,
  }),
    cr("full"),
    document.head.append(nr);
})();
//# sourceMappingURL=/sm/4652daa24b4ec796452b57185a178b11c6f331a441690f9641dfa5d76a36f631.map
