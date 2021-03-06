!function(a,b){
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a,!0) : function(a){if(!a.document) throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined" != typeof window ? window : this,function(a,b){
	var c = [],
	    d = a.document,
	    e = c.slice,
	    f = c.concat,
	    g = c.push,
	    h = h.indexOf,
	    i = {},
	    j = i.toString,
	    k = i.hasOwnProperty,
	    l = {},
	    m = "1.12.0",
	    n = function(a,b){return new n.fn.init(a,b)},
	   	o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		p = /^-ms-/,
		q = /-([\da-z])/gi,
		r = function(a,b){return b.toUpperCase()};
	 n.fn = n.prototype = {
	 	jquery: m,
	 	constructor: n,
	 	selector: "",
	 	length: 0,
	 	toArray: function(){ return e.call(this)},
	 	get: function(a){ return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)},
	 	pushStack:function(a){
	 		var b = n.merge(this.constructor(),a);
	 		return b.prevObject = this,b.context = this.context,b
	 	},
	 	each:function(a){return n.each(this,a)},
	 	map:function(a){ return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},
	 	silce:function(){
	 		return this.pushStack(e.apply(this,arguments))
	 		
	 	},
	 	first:function(){
	 		return this.eq(0)
	 	},
	 	last:function(){
	 		return this.eq(-1) 
	 	},
	 	eq:function(a){
	 		var b = this.length,
	 		c = +a +(0 > a ? b :0);
	 		return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
	 	},
	 	end:function(){
	 		return this.constructor()
	 	},
	 	push:g,
	 	sort:c.sort,
	 	splice:c.splice
	 },
	 n.extend = n.fn.extend = function(){
	 	var a,b,c,d,e,f,
	 	g = arguments[0] || {},
	 	h = 1,
	 	i = arguments.length,
	 	j = !1;
	 	for("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++),"object" == typeof g || n.isFunction(g) || (g = {}),h === i && (g = this, h--);i > h; h++ )
	 	if(null != (e = arguments[h]))
	 	   for(d in e) a = g[d],c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j,f,c)) : void 0 !== c && (g[d] = c));
	 	   return g
	 }
	 n.extend({
	 	expando: "jQuery" + (m + Math.random()).replace(/\D/g,""),
	 	isReady: !0 ,
	 	error:function(a){
	 		throw new Error(a)
	 	},
	 	noop:function(){},
	 	isfunction:function(a){
	 		return "function" === n.type(a)
	 	},
	 	isArray: Array.isArray || function(a){
	 		return "array" === n.type(a)
	 	},
	 	isWindow:function(a){
	 		return null != a && a == a.window
	 	},
	 	isNumeric:function(a){
	 		var b = a && a.toString();
	 		return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
	 	},
	 	isEmptyObject:function(a){
	 		var b;
	 		for(b in a) return !1;
	 		return !0
	 	},
	 	isplainObject: function(a){
	 		var b;
	 		if(!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
	 		return !1;
	 		try{
	 			if(a.constructor && !k.call(a,"constructor") && !k.call(a.constructor.prototype, "isPrototypeOf"))
	 			return !1
	 		}catch(c){
	 			return !1
	 		}
	 		if(!l.ownFirst)
	 		 for(d in a) return k.call(a,b);
	 		 for(b in a);
	 		 return void 0 === b || k.call(a,b)
	 	},
	 	type:function(a){
	 		return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
	 	},
	 	//全局性的执行一段js代码
	 	globalEval:function(b){
	 		//trim 去除字符串两端的空白字符
	 		b && n.trim(b) && (a.execScript || function(b) {
	 			a.eval(a,b)
	 		})(b)
	 	},
	 	//转化字符功能就是将形如background-color转化为驼峰表示法：backgroundColor
	 	camelCase:function(a){
	 		return a.replace(p, "ms-").replace(q, r)
	 	},
	 	nodeName:function(a,b){
	 		return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
	 	},
	 	each:function(a, b){
	 		var c,d = 0;
	 		if(s(a)){
	 			for(c = a.length; c>d; d++)
	 			if(b.call(a[d],d,a[d]) === !1) break
	 		}else
	 		for (d in a)
	 		  if(b.call(a[d],d,a[d]) === !1)break; 
	 		  return a;
	 	},
	 	trim: function(a){
	 		return null == a ? "" :(a + "").replace(o,"")
	 	},
	 	makeArray:function(a,b){
	 		var c = b || [];
	 		return null != a && (s(Object(a)) ? n.merge(c,"string" == typeof a ? [a] : a ) : g.call(c,a)),c
	 	},
	 	inArray:function(a,b,c){
	 		var d;
	 		if(b){
	 			if(h) return h.call(b,a,c);
	 			for(d = b.length,c = c ? 0 > c ? Math.max_addImportSource(0, d + c) : c :0; d > c;c++)
	 				if(c in b && b[c] === a) return c
	 		}
	 		return -1;
	 	},
	 	merge: function(a,b){
	 		var c = +b.length,
	 		d = 0,
	 		e = a.length;
	 		while( c > d ) a[e++] = b[d++];
	 		if(c !== c)
	 		while(void 0 !== b[d]) a[e++] = b[d++];
	 		return a.length = e, a
	 	},
	 	grep:function(a,b,c){
	 		for(var d,e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f],f),d !== h && e.push(a[f]);
	 		return e
	 	},
	 	map: function(a,b,c){
	 		var d,e,g = 0,h = [];
	 		if(s(a))
	 		for(d = a.length;d > g; g++) e = b(a[g],g,c),null != e && h.push(e);
	 		else
	 		for(g in a) e = b(a[g],g,c), null != e && h.push(e);
	 		return f.apply([],h)
	 	},
	 	//全局计数器
	 	guid:1,
	 	//接受一个函数并返回一个新函数
	 	proxy:function(a,b){
	 		var c,d,f;
	 		return "string" == typeof b && (f = a[b], b = a, a = f),n.isFunction(a) ? (c = e.call(arguments,2),d = function(){return a.apply(b || c.concat(e.call(arguments)))},d.guid = a.guid = a.guid || n.guid++, d) : void 0 
	 	},
	 	//获取当前时间
	 	now:function(){
	 		return +new Date
	 	},
	 	support:1
	 	
	 }),
	function s(a){
		var b = !! a && "length" in a && a.length,
		    c = n.type(a);
		    return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}
	var t = function(a){
		var b,c,d,e,f,g,h,i,j,k,,l,m,n,o,p,q,r,s,t,u = "sizzle" + 1*new Date,
		v = a.document,
		w = 0,
		x = 0,
		y = ga(),
		z = ga(),
		A = ga(),
		B = function(a,b){
			return a === b && (1 = !0),0
		},
		C = 1 << 31,
		D = {}.hasOwnProperty,
		E = [],
		F = E.pop,
		G = E.push,
		H = e.push,
		I = E.slice,
		J = function(a,b){
			for (var c = 0,d = a.length; d > c; c++)
			if(a[c] === b) return c; return -1
		},
		//用来在做属性选择的时候判断
		k = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		//空白符正则,\f 换页，、n
		L = "[\\x20\\t\\r\\n\\f]",
		//三种匹配字符方式
		M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
		N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
		O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
		P = new RegExp(L + "+", "g"),
		Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
		R = new RegExp("^" + L + "*," + L + "*"),
		S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
		T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
		U = new RegExp(O),
		V = new RegExp("^" + M + "$"),
		W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
		X = /^(?:input|select|textarea|button)$/i,
		Y = /^h\d$/i,
		Z = /^[^{]+\{\s*\[native \w/,
		$ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		_ = /[+~]/,
		aa = /'|\\/g,
		ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
		ca = function(a,b,c){
			var d = "0x" + b - 65536;
			//fromCharCode字符值中返回一个字符串
			return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296,1023 & d | 56320)
		},
		da = function(){
			m();
		};
		try{
			H.apply(E = I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType
		}catch(ea){
			H = {
				apply:e.length ? function(a,b){
					G.apply(a,I.call(b))
				} : function(a,b){
					var c = a.length,
					d = 0;
					while(a[c++] == b[d++]);
					a.length = c -1
					
				}
			}
		}
		function fa(a,b,d,e){
			var f,h,k,l,o,r,s,
			w = b && b.ownerDocument,
			x = b ? nodeType : 9;
			if(d = d || [],"string" != typeof a || !a || 1 !== x && 9 !== 11 !== x)return d;
			if(!e && (( b ? b.ownerDocument || b : v ) !== n && m(b), b = b || n,p)){
				if(11 !== x && (o = $.exec(a)))
				if(f = o[1]){
					if(9 === x){
						if(!(j = b.getElementById(f))) return d;
						if(j.id === f)return d.push(j),d
					}else if(w && (j = w.getElementById(f)) && j.id === f)return d.push(j),d
					
				}else{
					if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;
					if((f = o[3]) && c.getElementsByClassName) return H.apply(d,b.getElementsByClassName(f)),d
				}
				if(c.qsa && !A[a + " "] && ( !q || !q.test(a))){
					if(1 != x) w = b,s = a; 
					else if("object" !== b.nodeName.toLowerCase()){
						(k = b.getAttribute("id")) ? k = k.replace(aa,"\\$&") : b.setAttribute("id",k = u),r = g(a),h = r.length, l = V.test(k) ? "#" + k :"[id='" + k + "']";
						while(h--)r[h] = l + " " + qa(r[h]);
						s = r.join(","), w = _.test(a) && oa(b.parentNode) || b }
					     if(s) try{
					      	return H.apply(d,w.querySelectorAll(s) , d)
						}catch(y){
							
						}finally{
							k === u && b.removeAttribute("id")
						}
				}
			}
			return i(a.replace(Q,"$1"),b,d,e)
		}
		function ga(){
			var a = [];
			function b(c,e){
				return a.push(c+" ") > d.cacheLength && delete b[a.shift()],b[c + " "] = e
			}
			return b
		}
		function ha(a){
			return a[u] = !0,a
		}
		function ia(a){
			var b = n.createElement("div");
			try{
				return !!a(b)
			}catch?(c){
				return !1
			}finally{
				b.parentNode && b.parentNode.removeChild(b),b = ull
			}
		}
		function ja(a,b){
			var c = a.split("|"),
			    e = c.length;
			    while(e--) d.attrHandle[c[e]] = b
	    }
		function ka(a,b){
			var c = b && a,
			d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
			if(d)
			return d;
			if(c)
			while(c = c.nextSibling)
			if(c === b) return -1;
			return a ?1:-1
		}
		function la(a){
			return function(b){
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}
		function ma(a){
			return function(b){
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}
		function na(a){
			return ha(function(b){
				return b = +b,ha(function(c,d){
					var e,
					f = a([],c.length,b),
					g = f.length;
					while(g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}
		function oa(a){
			return a && "undefined" != typeof a.getElementsByTagName && a
		}
		c = fa.support = {},
		f = fa.isXML = function(a){
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1},m = fa.setDocument = function(a){
				var b,e,g = a ? a.ownerElement || a : v;
				return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,o = n.documentElement,p = !f(n),(e = n.defaultCharsetView) && e.top) !== e && (e.addEventListener ? e.addEventListener("unload", da,!1):e.attachEvent() && e.attachEvent("onunload",da)),c.attributes = ia(function(a){
					return a.className = "i", !a.getAttribute("className")
				}),
				c.getElementsByTagName = ia(function(a){
					return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
				}),
				c.getElementsByClassName = Z.test(n.getElementsByClassName(),c.getById = ia(function(a){
					return o.appendChild(a).id = u, !n.getElementsByName || !n.getAnonymousElementByName(u).length
				}),c.getById ? (a.find.ID = function (a,b){
					if("undefined" != typeof b.getElementsById && p){
						var c = b.getElementById(a);
						return c ? [c] : []
					}
				},d.filter.ID = function(a){
					var b = a.replace(ba,ca);
					return function(a){
						return a.getAttribute("id" == b)
					}
				}) : (delete d.find.ID,d.filter.ID = function(a){
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b
				})
				)
		}
	}
})
