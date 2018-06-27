(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{178:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("You can configure whether you want this package to attempt to translate texts or not, for example if your project only needs to implement one language and you prefer to simply write texts wherever you need them instead of using the Translator component, please deactivate translations in the configuration:")]),t._m(1),t._m(2),t._m(3),t._m(4),a("p",[t._v("If you want to have a specific label in a field, you can do so by passing it as part of the attribute array:")]),t._m(5),t._m(6),t._m(7),a("p",[t._v("Note that this is also the convention used by the Laravel Validator component, so this way you can have all your label texts in one place.")]),a("p",[a("router-link",{attrs:{to:"./field-builder.html"}},[t._v("Learn more about the field builder")])],1),t._m(8),t._m(9),t._m(10),a("p",[t._v("Of course if the lang key is not found, it will return the literal string (so you can also pass the full message instead of a lang key).")]),a("p",[a("router-link",{attrs:{to:"./alert-messages.html"}},[t._v("Learn more about the alert component")])],1),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),a("p",[t._v("Will return something like:")]),t._m(16),a("p",[t._v("Note that:")]),t._m(17),a("p",[a("router-link",{attrs:{to:"./menu-generator.html"}},[t._v("Learn more about the menu generator")])],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"internationalization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#internationalization","aria-hidden":"true"}},[this._v("#")]),this._v(" Internationalization")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("//config/html.php\nreturn [\n  //...\n  'translate_texts' => false\n  //...\n];\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("But if your project needs to implement more than one language or you want to organize all the texts in one place instead of hardcoding them in the controllers, views, etc. set "),e("code",[this._v("'translate_texts'")]),this._v(" to "),e("code",[this._v("true")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("Note:")]),this._v(" The Field Builder will always attempt to translate texts.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"translating-labels-field-builder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#translating-labels-field-builder","aria-hidden":"true"}},[this._v("#")]),this._v(" Translating labels (field builder)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("{!! Field::text('name', ['label' => 'Full name']) !!}")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("But you can also define it as part of the "),e("code",[this._v("attributes")]),this._v(" array in the "),e("code",[this._v("resources/lang/en/validation.php")]),this._v(" file:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("    //resources/lang/en/validation.php\n    //..\n    'attributes' => [\n        'name' => 'Full name'\n    ],\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"translating-alert-messages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#translating-alert-messages","aria-hidden":"true"}},[this._v("#")]),this._v(" Translating alert messages")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If the "),e("code",[this._v("'translate_texts'")]),this._v(" is set to "),e("code",[this._v("true")]),this._v(", this component will assume that all the alert messages are in fact language keys and will try to translate them. This means you can do things like this:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Alert::success('messages.users.updated')\n\t\t->button('messages.users.go_to_profile', url('users/profile'))\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"translating-menu-items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#translating-menu-items","aria-hidden":"true"}},[this._v("#")]),this._v(" Translating menu items")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If the "),e("code",[this._v("'translate_texts'")]),this._v(" is set to "),e("code",[this._v("true")]),this._v(", and you don't specify an explicit title for a menu item; the component will search for a lang key in: "),e("code",[this._v("menu.[menu_item_key]")]),this._v(" if the key is not found, the package will attempt to convert the menu item key in a title format. For example:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("//resources/lang/en/menu.php\nreturn [\n    'home' => 'Homepage'\n];\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("//config/menu.php\nreturn [\n    'items' => [\n        'home'  => [],\n        'about' => ['title' => 'Who we are'],\n        'contact-us' => []\n    ]\n];\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("{!! Menu::make('menu.items') !!}")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<ul>\n    <li><a href="#">Homepage</a></li>\n    <li><a href="#">Who we are</a></li>\n    <li><a href="#">Contact us</a></li>\n</ul>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v('"Homepage" is taken from the menu key "menu.home".')]),e("li",[this._v('"Who we are" is explicit defined (no translation is attempted)')]),e("li",[this._v('"Contact us" is generated from the key "contact-us" (since no lang key is provided)')])])}],!1,null,null,null);e.default=n.exports}}]);