(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{151:function(e,a,r){"use strict";r.r(a);var s=r(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"form-builder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#form-builder","aria-hidden":"true"}},[e._v("#")]),e._v(" Form Builder")]),r("h2",{attrs:{id:"novalidate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#novalidate","aria-hidden":"true"}},[e._v("#")]),e._v(" novalidate")]),r("p",[e._v("Permite a los usuarios establecer la opción "),r("code",[e._v("novalidate")]),e._v(" para cada formulario generado con el método "),r("code",[e._v("Form::open")]),e._v(" o el método "),r("code",[e._v("Form::model")]),e._v(" así los desarrolladores pueden saltar la validación de HTML5 para evaluar la validación backend en los entornos local o de desarrollo:")]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("return [\n    //..\n    'novalidate' => true\n    //..\n];\n")])])]),r("h2",{attrs:{id:"radios"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#radios","aria-hidden":"true"}},[e._v("#")]),e._v(" radios")]),r("p",[e._v("Crea una lista de radios.")]),r("p",[e._v("Esta función es similar a "),r("code",[e._v("Form::select")]),e._v(" pero genera una colección de radios en vez de opciones. Es decir:")]),r("p",[r("code",[e._v("Form::radios('status', ['a' => 'Active', 'i' => 'Inactive'])")])]),r("p",[e._v("Se puede pasar 'inline' como un valor en el arreglo de atributos para establecer los radios en línea (ellos se renderizarán con la plantilla 'radios-inline').")]),r("h2",{attrs:{id:"checkboxes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#checkboxes","aria-hidden":"true"}},[e._v("#")]),e._v(" checkboxes")]),r("p",[e._v("Crea una lista de checkboxes.")]),r("p",[e._v("Esta función es similar a "),r("code",[e._v("Form::select")]),e._v(" pero genera una colección de checkboxes en vez de opciones, es decir:")]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$tags = [\n    'php' => 'PHP',\n    'python' => 'Python',\n    'js' => 'JS',\n    'ruby' => 'Ruby on Rails'\n];\n\n$checked = ['php', 'js'];\n")])])]),r("p",[r("code",[e._v("{!! Form::checkboxes('tags', $tags, $checked) !!}")])]),r("p",[e._v("Se puede pasar 'inline' como un valor en el arreglo de atributos para establecer los checkboxes en línea (ellos serán renderizados usando la plantilla 'checkboxes-inline').")])])}],!1,null,null,null);a.default=n.exports}}]);