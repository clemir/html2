(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{167:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("Si estás usando una versión anterior a Laravel 5.6, revisa la "),a("router-link",{attrs:{to:"./../old-version/"}},[t._v("anterior documentación")]),t._v(" de este paquete.")],1)]),t._m(3),a("p",[t._v("La manera de instalar este paquete es a través de Composer ejecutando en tu proyecto de Laravel:")]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),a("p",[t._v("Toma en cuenta que los siguientes alias globales estarán automáticamente disponibles (NO necesitas registrarlos manualmente):")]),t._m(16),t._m(17),t._m(18)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"comenzando"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comenzando","aria-hidden":"true"}},[this._v("#")]),this._v(" Comenzando")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"requerimientos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requerimientos","aria-hidden":"true"}},[this._v("#")]),this._v(" Requerimientos")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("PHP: ^7.1")]),s("li",[this._v("Laravel: ^5.6")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"instalacion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalacion","aria-hidden":"true"}},[this._v("#")]),this._v(" Instalación")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ composer require styde\\html\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"archivo-de-configuracion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#archivo-de-configuracion","aria-hidden":"true"}},[this._v("#")]),this._v(" Archivo de configuración")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Opcionalmente, puedes publicar el archivo de configuración en "),s("code",[this._v("config/html.php")]),this._v("  ejecutando:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v(" $ php artisan vendor:publish --provider"),s("span",{attrs:{class:"token operator"}},[this._v("=")]),s("span",{attrs:{class:"token string"}},[this._v("'Styde\\Html\\HtmlServiceProvider'")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("ADVERTENCIA")]),s("p",[this._v("Cuando ejecutas este comando también estarás publicando el tema por defecto en el directorio "),s("code",[this._v("resources/views/themes/")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"middleware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#middleware","aria-hidden":"true"}},[this._v("#")]),this._v(" Middleware")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Para que los mensajes de alerta persistan entre sesiones, después de que cada petición es completada, necesitas registrar en el archivo "),a("code",[t._v("app/Http/Kernel.php")]),t._v(" el middleware "),a("code",[t._v("\\Styde\\Html\\Alert\\Middleware::class")]),a("strong",[t._v("ANTES")]),t._v(" del middleware "),a("code",[t._v("EncryptCookies")]),t._v(" en el array "),a("code",[t._v("$middlewareGroups")]),t._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$middlewareGroups")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    \\"),a("span",{attrs:{class:"token package"}},[t._v("Styde"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Html"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Alert"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Middleware")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"service-provider"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-provider","aria-hidden":"true"}},[this._v("#")]),this._v(" Service Provider")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Styde\\Html es "),s("strong",[this._v("auto-descubierto y automáticamente registrado")]),this._v(", pero si deseas registrarlo manualmente debes agregar el service provider en el array "),s("code",[this._v("providers")]),this._v(" del archivo "),s("code",[this._v("config/app.php")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'providers'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    Styde\\"),a("span",{attrs:{class:"token package"}},[t._v("Html"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HtmlServiceProvider")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"facades"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#facades","aria-hidden":"true"}},[this._v("#")]),this._v(" Facades")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Alert "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" Styde\\"),a("span",{attrs:{class:"token package"}},[t._v("Html"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Alert")]),t._v("\nField "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" Styde\\"),a("span",{attrs:{class:"token package"}},[t._v("Html"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Field")]),t._v("\nMenu  "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" Styde\\"),a("span",{attrs:{class:"token package"}},[t._v("Html"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Menu")]),t._v("\nForm  "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" Collective\\"),a("span",{attrs:{class:"token package"}},[t._v("Html"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("FormFacade")]),t._v("\nHtml  "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" Collective\\"),a("span",{attrs:{class:"token package"}},[t._v("Html"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HtmlFacade")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Sin embargo, si tienes planeado usar el "),s("em",[this._v("Access Handler")]),this._v(" como una clase independiente, necesitarás agregar el siguiente alias:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'aliases'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Access'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" Styde\\"),a("span",{attrs:{class:"token package"}},[t._v("Html"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Access")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);