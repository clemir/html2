(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{176:function(e,a,s){"use strict";s.r(a);var t=s(0),n=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"html-builder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-builder","aria-hidden":"true"}},[e._v("#")]),e._v(" HTML Builder")]),s("h2",{attrs:{id:"html-classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-classes","aria-hidden":"true"}},[e._v("#")]),e._v(" Html::classes")]),s("p",[e._v("Construye dinámicamente un atributo de la clase HTML.")]),s("p",[e._v("Para usuarios de AngularJS, este método es similar al del atributo ng-class de AngularJS.")]),s("p",[e._v("Puedes especificar una o más clases CSS como una llave y una condición como un valor. Si la condición es true entonces la(s) clase(s) serán usadas, de lo contrario, serán omitidas.  Puedes también establecer clases estáticas (las cuales siempre se van a usar como un valor sin llave).")]),s("p",[e._v("Ejemplo:")]),s("p",[s("code",[e._v("{!! Html::classes(['home' => true, 'main', 'no-uses-esto' => false]) !!}")])]),s("p",[e._v("Retorna: "),s("code",[e._v('class="home main"')]),e._v(".")]),s("p",[e._v("Tomar en cuenta que esta función retorna un espacio en blanco antes del atributo de la clase. Por tanto, no agregar otro, es decir, úsalo así:")]),s("p",[s("code",[e._v("<p{!! classes(..) !!}>")])]),s("p",[e._v("en vez de esto:")]),s("p",[s("code",[e._v("<p {{!! classes(..) !!}>")])]),s("p",[e._v("Si ninguna clase es evaluada como TRUE entonces esta función retornará una cadena vacía.")])])}],!1,null,null,null);a.default=n.exports}}]);