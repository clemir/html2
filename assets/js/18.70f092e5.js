(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{173:function(e,a,t){"use strict";t.r(a);var s=t(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"access-handler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-handler","aria-hidden":"true"}},[e._v("#")]),e._v(" Access handler")]),t("p",[e._v("Sometimes you want to show or hide menu items, form fields, etc. for certain users, with this component you can do it without the need of conditionals or boilerplate code.")]),t("p",[e._v("This package include a "),t("code",[e._v("BasicAccessHandler")]),e._v(" class but you can build your own "),t("code",[e._v("AccessHandler")]),e._v(" implementation.")]),t("h2",{attrs:{id:"basicaccesshandler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basicaccesshandler","aria-hidden":"true"}},[e._v("#")]),e._v(" BasicAccessHandler")]),t("p",[e._v("Just pass one of the following options as a field attribute or menu item value:")]),t("ol",[t("li",[t("em",[e._v("callback")]),e._v(": should return true if you want to grant access, false otherwise.")]),t("li",[t("em",[e._v("logged")]),e._v(": true: requires authenticated user, false: requires guest user.")]),t("li",[t("em",[e._v("roles")]),e._v(": true if the user has any of the required roles.")]),t("li",[t("em",[e._v("allows")]),e._v(": uses the Gate::allows method")]),t("li",[t("em",[e._v("check")]),e._v(": uses the Gate::check method (alias of allow)")]),t("li",[t("em",[e._v("denies")]),e._v(": uses the Gate::denies method")]),t("li",[e._v("If no option is passed, this will return true (the item will be rendered)")])]),t("p",[t("em",[e._v("WARNING")]),e._v(": note this package will only prevents the elements from appearing in the front end, you still need to protect the backend access using middleware, etc.")]),t("p",[e._v("##Usage")]),t("h4",{attrs:{id:"form-fields"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#form-fields","aria-hidden":"true"}},[e._v("#")]),e._v(" Form fields")]),t("p",[t("code",[e._v("{!! Field::select('user_id', null, ['role' => 'admin'])")])]),t("h4",{attrs:{id:"menu-items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#menu-items","aria-hidden":"true"}},[e._v("#")]),e._v(" Menu items")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// config/menu.php\n\nreturn [\n    'items' => [\n        'account' => [\n            'logged' => true\n        ],\n        'login' => [\n            'logged' => false\n        ],\n        'settings' => [\n            'roles' => 'admin'\n        ]\n    ]\n];\n")])])]),t("p",[t("code",[e._v("{!! Menu::make('menu.items') !}}")])]),t("h2",{attrs:{id:"gate-authorization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gate-authorization","aria-hidden":"true"}},[e._v("#")]),e._v(" Gate authorization")]),t("p",[e._v("The allows, check and denies options accept a string or an array as a value.")]),t("p",[e._v("If it is an string, it will be the name of the ability with no arguments.")]),t("p",[e._v("If it is an array, the first position of the array will be the name of the ability, and the others will be the arguments")]),t("p",[e._v("Examples:")]),t("p",[t("code",[e._v("{!! Field::text('change-password', ['allows' => 'change-password']) !!}")]),t("code",[e._v("{!! Field::select('category', $options, ['allows' => ['change-post-category', $category]]) !!}")])]),t("p",[e._v("If you are building menus, you can use dynamic parameters to pass values to the gate.")]),t("p",[e._v("In the following example we will define a dynamic 'post' parameter, and pass it using setParam when building the menu:")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// config/menu.php\n\nreturn [\n    'items' => [\n        'view-post' => [],\n        'edit-post' => [\n            'allows' => ['update-post', ':post']\n        ]\n    ]\n];\n")])])]),t("p",[t("code",[e._v("{!! Menu::make('menu.items')->setParam('post', $post)->render() !}}")])]),t("h2",{attrs:{id:"customization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#customization","aria-hidden":"true"}},[e._v("#")]),e._v(" Customization")]),t("p",[e._v("If you are working on a complex project with lots of different access rules, etc. You may need to implement your own AccessHandler, in order to do this, create a new class that implements the "),t("code",[e._v("Styde\\Html\\Access\\AccessHandler")]),e._v(" interface, then extend the HtmlServiceProvider and override the "),t("code",[e._v("registerAccessHandler")]),e._v(" method.")]),t("h2",{attrs:{id:"standalone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#standalone","aria-hidden":"true"}},[e._v("#")]),e._v(" Standalone")]),t("p",[e._v("If you want to use the access handler class as a standalone component, please add this global alias in "),t("code",[e._v("config/app.php")])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  'aliases' => [\n    // ...\n    'Access' => Styde\\Html\\Facades\\Access,\n    // ...\n  ],\n")])])]),t("p",[e._v("Then you can use the facade wherever you want:")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("@if (Access:check(['roles' => ['admin, 'editor']]))\n    <p>\n        <a href='{{ url('admin/posts', [$post->id]) }}'>\n            Edit this page\n        </a>\n    </p>\n@endif\n")])])]),t("h2",{attrs:{id:"deactivate-the-access-handler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deactivate-the-access-handler","aria-hidden":"true"}},[e._v("#")]),e._v(" Deactivate the access handler")]),t("p",[e._v("You can deactivate this component in the configuration:")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//config/html.php\nreturn [\n    //..\n    'control_access' => true,\n    //..\n];\n")])])]),t("p",[e._v("By doing this, the callback, logged and roles attributes will simply be ignored and all users will be able to see all items.")])])}],!1,null,null,null);a.default=n.exports}}]);