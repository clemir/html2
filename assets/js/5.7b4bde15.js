(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{186:function(e,t,a){"use strict";a.r(t);var s=a(0),i=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"form-builder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#form-builder","aria-hidden":"true"}},[e._v("#")]),e._v(" Form Builder")]),a("h2",{attrs:{id:"novalidate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#novalidate","aria-hidden":"true"}},[e._v("#")]),e._v(" novalidate")]),a("p",[e._v("Allow users to set the novalidate option for every form generated with the "),a("code",[e._v("Form::open")]),e._v(" or "),a("code",[e._v("Form::model")]),e._v(" method, so developers can skip HTML5 validation in order to test backend validation in local or development environments:")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("return [\n    //..\n    'novalidate' => true\n    //..\n];\n")])])]),a("h2",{attrs:{id:"radios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radios","aria-hidden":"true"}},[e._v("#")]),e._v(" radios")]),a("p",[e._v("Create a list of radios.")]),a("p",[e._v("This function is similar to "),a("code",[e._v("Form::select")]),e._v(" but it generates a collection of radios instead of options. i.e.:")]),a("p",[a("code",[e._v("Form::radios('status', ['a' => 'Active', 'i' => 'Inactive'])")])]),a("p",[e._v("You can pass 'inline' as a value in the attributes array, to set the radios as inline (they'll be rendered with the 'radios-inline' template).")]),a("h2",{attrs:{id:"checkboxes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkboxes","aria-hidden":"true"}},[e._v("#")]),e._v(" checkboxes")]),a("p",[e._v("Create a list of checkboxes.")]),a("p",[e._v("This function is similar to Form::select, but it generates a collection of checkboxes instead of options, i.e.:")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$tags = [\n    'php' => 'PHP',\n    'python' => 'Python',\n    'js' => 'JS',\n    'ruby' => 'Ruby on Rails'\n];\n\n$checked = ['php', 'js'];\n")])])]),a("p",[a("code",[e._v("{!! Form::checkboxes('tags', $tags, $checked) !!}")])]),a("p",[e._v("You can pass 'inline' as a value of the attribute's array, to set the checkboxes as inline (they'll be rendered using the 'checkboxes-inline' template).")])])}],!1,null,null,null);t.default=i.exports}}]);