(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{179:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),a("p",[e._v("Menus are not static elements,  it is often necessary to mark the active section, translate items, generate dynamic URLs or show/hide options only for certain users.")]),a("p",[e._v("So instead of adding too much extra HTML and Blade boilerplate code, you can use this component to generate dynamic menus styled for your current CSS framework.")]),a("p",[e._v("To generate a menu simply add the following code in your layout's template:")]),e._m(1),e._m(2),e._m(3),a("p",[e._v("Each item in the array will be a menu item, the array key is required and will be used to generate default options, each menu item value needs to be an array of options (all of them optional).")]),a("p",[e._v("You can specify the following options for each menu item:")]),e._m(4),a("p",[e._v("Of course this is the most important part of each menu item, and therefore you have several options to specify an URL:")]),e._m(5),a("p",[e._v("If you pass a 'full_url' key within the item configuration, it will return it as the URL with no additional action, i.e.:")]),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12),a("p",[e._v("You can specify a route's name for a menu item.")]),e._m(13),e._m(14),a("p",[e._v("You can specify a route with parameters if you pass an array instead of a string as the value of the 'route' key.")]),a("p",[e._v("The first value will be taken as the route's name, and the others will be the route's parameters.")]),e._m(15),e._m(16),a("p",[e._v("You can specify an action for a menu item")]),e._m(17),a("p",[e._v("You can specify an action with parameters if you pass an array instead of a string as the value of the 'action' key.")]),a("p",[e._v("The first value will be the action, and the others will be the action parameters.")]),e._m(18),a("p",[e._v('If none of above options is found, then the URL will simply be a placeholder "#".')]),e._m(19),a("p",[e._v("Sometimes you will need to use dynamic parameters to build routes and actions, in that case, instead of a value, pass a name precede with :, for example:")]),e._m(20),a("p",[e._v("Then you can assign a value using the setParams or setParam method, like this:")]),e._m(21),a("p",[e._v("Or this:")]),e._m(22),e._m(23),a("p",[e._v("You can specify a title for a menu item using the 'title' key in the options array, i.e.:")]),e._m(24),e._m(25),e._m(26),e._m(27),a("p",[e._v("If neither the title option or the menu key is found, the component will generate a title based on the menu key. i.e.: 'home' will generate 'Home', 'contact-us' will generate 'Contact us', etc.")]),a("p",[a("router-link",{attrs:{to:"./internationalization.html"}},[e._v("Learn more about translate texts option")])],1),e._m(28),a("p",[e._v("The menu's item key will be used as the menu's item HTML id attribute by default. In case you need to override this behaviour, you can pass an 'id' option.")]),e._m(29),a("p",[e._v("You can specify a sub-menu key and pass another array of menu items, like this:")]),e._m(30),a("p",[e._v("The sub-menu items will be rendered with the same options and fallbacks as the menu items.")]),e._m(31),a("p",[e._v("All menu items will have the active value set to false as default, unless the URL of a menu item or sub-item has the same or partial base value than the current URL.")]),a("p",[e._v("For example:")]),e._m(32),a("p",[e._v("Will be considered the active URL if the current URL is news/ or news/some-slug.")]),e._m(33),a("p",[e._v("You can pass CSS classes for a particular menu item using the 'class' option.")]),a("p",[e._v("The active item will also get the 'active' class, and the items with sub-menus will get the 'dropdown' class.")]),a("p",[e._v("You can customize these classes using:")]),e._m(34),e._m(35),e._m(36),e._m(37),e._m(38),a("p",[e._v("It is often useful to show or hide options for guest or logged users with certain roles, you can do this using the Access Handler included in this component:")]),a("p",[a("router-link",{attrs:{to:"./access-handler.html"}},[e._v("Learn more about the access handler")])],1)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"menus-menugenerator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#menus-menugenerator","aria-hidden":"true"}},[this._v("#")]),this._v(" Menus (MenuGenerator)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("{!! Menu::make('items.here', 'optional css classes') !!}")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("'items.here'")]),this._v(" can be an array or a configuration key (that contains an array), there you will specify the menu items, for example:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[\n\t'home' => ['url' => ''],\n\t'about' => ['title' => 'Who we are', 'url' => 'about-us'],\n\t'contact-us' => ['full_url' => 'http://contact.us']\n]\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url","aria-hidden":"true"}},[this._v("#")]),this._v(" URL")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"full-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-url","aria-hidden":"true"}},[this._v("#")]),this._v(" full_url")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("['full_url' => 'https://styde.net']")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"url-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url-2","aria-hidden":"true"}},[this._v("#")]),this._v(" url")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can pass a relative URL, using the 'url' key. The final URL will be generated using the method "),t("code",[this._v("UrlGenerator::to")]),this._v(", i.e.:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("['url' => 'contact-us']")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can also pass a 'secure' key to indicate whether this particular URL should use https or not. You can also specify a default secure value using the "),t("code",[this._v("setDefaultSecure")]),this._v(" method (false by default).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("['url' => 'login', 'secure' => 'true']")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"route"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#route","aria-hidden":"true"}},[this._v("#")]),this._v(" route")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("['route' => 'home']")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"route-with-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#route-with-parameters","aria-hidden":"true"}},[this._v("#")]),this._v(" route with parameters")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("['route' => ['profile', 'sileence']]")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#action","aria-hidden":"true"}},[this._v("#")]),this._v(" action")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"action-with-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#action-with-parameters","aria-hidden":"true"}},[this._v("#")]),this._v(" action with parameters")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"default-placeholder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-placeholder","aria-hidden":"true"}},[this._v("#")]),this._v(" default placeholder")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"dynamic-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-parameters","aria-hidden":"true"}},[this._v("#")]),this._v(" Dynamic parameters")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("['route' => ['profile', ':username']]")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("{!! Menu::make('config.items')->setParam('username', 'sileence') !!}")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("{!! Menu::make('config.items')->setParams(['username' => 'sileence']) !!}")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#title","aria-hidden":"true"}},[this._v("#")]),this._v(" title")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("['title' => 'Contact me']")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If no title is set and you are using the translate texts option, it will search for a lang key for the menu item, following this convention: "),t("code",[this._v("menu.[key]")]),this._v(", for example:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[\n    'home' => ['url' => '/']\n]\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("As no title is set, it will search for the "),t("code",[this._v("menu.home")]),this._v(" language key")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#id","aria-hidden":"true"}},[this._v("#")]),this._v(" id")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"submenu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#submenu","aria-hidden":"true"}},[this._v("#")]),this._v(" submenu")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[\n    'home' => [],\n    'pages' => [\n        'submenu' => [\n            'about' => [],\n            'company' => ['url' => 'company']\n        ]\n    ]\n]\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"active-option"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#active-option","aria-hidden":"true"}},[this._v("#")]),this._v(" active option")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[\n    'news' => ['url' => 'news/']\n]\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"css-classes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-classes","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS classes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("{!! Menu::make('items')\n        ->setActiveClass('Active')\n        ->setDropDownClass('dropdown') !!}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"render-menus-and-custom-templates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#render-menus-and-custom-templates","aria-hidden":"true"}},[this._v("#")]),this._v(" Render menus and custom templates")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The menu will be rendered automatically if you treat "),t("code",[this._v("Menu::make")]),this._v(" as a string, but you can also call the render method which accepts an optional custom template as an argument, like this:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("{!! Menu::make('menu.items')->render('custom-template') !!}")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"access-handler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-handler","aria-hidden":"true"}},[this._v("#")]),this._v(" Access handler")])}],!1,null,null,null);t.default=r.exports}}]);