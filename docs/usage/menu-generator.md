# HTML Menu Generator
[[toc]]
## Introduction
Menus are not static elements, it is often necessary to mark the active section and generate dynamic URLs or show/hide options only for certain users, for example.

So instead of adding too much extra HTML and Blade boilerplate code, you can use this component to generate dynamic menus styled for your current CSS framework.

## Create a new menu
There are two ways to generate a menu: using a menu class or passing the items by `make` method.
### Using a menu class
To generate a menu, create a new Menu class running:
```bash
$ php artisan make:menu MyMenu
```
::: tip NOTE
This create a new class in the directorio `app\Menus`:
```php
<?php

namespace App\Http\Menus;

use Styde\Html\Menu\MenuBuilder;
use Styde\Html\Menu\MenuComposer;

class MyMenu extends MenuComposer
{
    /**
     * Use this method to add items your menu
     *
     * @param  \Styde\Html\Menu\MenuBuilder $items
     */
    public function compose(MenuBuilder $items)
    {
        // add items
    }
}
```
:::
Then add the following code in the `compose` method:
```php
$items->url('/', 'Home');
$items->placeholder('About us');
$items->url('projects', 'Our projects');
$items->url('contact-us', 'Contact us');
```
::: tip NOTE
Each item will be a menu item. It can be of [different types](#adding-menu-items). Also, you can add addional options. See [menu item options](#menu-item-options)
:::

You can render the menu with the `toHtml` method:
```php
(new App\Menus\MyMenu)->toHtml()
```
::: tip
Also, you may use [Laravel Real-Time Facades](https://laravel.com/docs/facades#real-time-facades)
`Facades\App\Menus\MyMenu::toHtml()`
:::

### Using the `make` method
If you don't want to create a menu class you simply can use:
```php
Menu::make(function ($items) {
    $items->url('/', 'Home');
    $items->placeholder('About us');
    $items->url('projects', 'Our projects');
    $items->url('contact-us', 'Contact us');
})->toHtml();
```
::: tip NOTE
Each item will be a menu item. It can be of [different types](#adding-menu-items). Also, you can add addional options. See [menu item options](#menu-item-options)
:::

## Adding menu items
Of course this is the most important part of each menu item, and therefore you have several options to specify an URL:
### Raw
`raw(string $url, string $text)`

You can pass a full URL and it will return it as the URL with no additional action. Example:
```php
Menu::make(function ($items) {
    $items->raw('https://styde.net', 'Styde');
})->toHtml();
```
Render:
```html
<ul class="nav">
    <li class="nav-item">
        <a href="https://styde.net" class="nav-link">
            Styde
        </a>
    </li>
</ul>
```
### URL
`url(string $path, $text, $extra = [], $secure = false)`

The final URL will be generated using the method `Illuminate\Contracts\Routing\UrlGenerator::to`. Example:
```php
Menu::make(function ($items) {
    $items->url('about-us', 'About us');
})->toHtml();
```
Render:
```html
<!-- menu item -->
<a href="http://localhost/about-us" class="nav-link">
    About us
</a>
```
### Secure URL
`secureUrl(string $path, $text, $extra = [])`

You can create a secure URL menu item. It renders it using https.

```php
Menu::make(function ($items) {
    $items->secureURL('dashboard', 'Control Panel');
})->toHtml();
```
::: tip
Also, you can specify a secure URL using the [url method](#url) 
:::

Render:
```html
<!-- menu item -->
<a href="https://localhost/dashboard" class="nav-link">
    Control Panel
</a>
```
### Route
`route(string $route, $text, $parameters = [])`

You can specify a route's name for a menu item. Besides, if you have external parameters, just pass them to the Closure and build the routes there.
```php
// having
Route::get('account/{user_id}', ['as' => 'account']);
$user_id = 20;

// Menu
Menu::make(function ($items) use ($user_id) {
    $items->route('account', 'Account', compact('user_id'));
})->toHtml();
```
Render:
```html
<!-- menu item -->
<a href="http://localhost/account/20" class="nav-link">
    Account
</a>
```
### Action
`action(string $action, $text, $parameters = [])`
You can add a menu item for a controller action.

```php
// having
Route::get('dashboard', ['uses' => 'DashboardController@index']);

// Menu
Menu::make(function ($items) {
    $items->action('DashboardController@index', 'Dashboard');
})->toHtml();
```
Render:
```html
<!-- menu item -->
<a href="http://localhost/dashboard" class="nav-link">
    Dashboard
</a>
```

### Placeholder
`placeholder($text)`

If you want a menu item as a placeholder the URL will simply be a "#".

```php
Menu::make(function ($items) {
    $items->placeholder('Options');
})->toHtml();
```
Render:
```html
<!-- menu item -->
<a href="#" class="nav-link">
    Options
</a>
```
## Submenus
`submenu($text, Closure $setup)`

You can specify a submenu for a menu item using the `submenu` method, like this:

```php
Menu::make(function ($items) {
    $items->submenu('About us', function ($items) {
        $items->placeholder('Team');
        $items->url('careers', 'Work with us');
    });
})->toHtml();
```
The submenu items will be rendered with the same options and fallbacks as the menu items.

## Menu Item attributes
You can specify the following attributes for each menu item:

### CSS classes
You can pass CSS classes for a particular menu item using the `classes` method.
```php
$item->placeholder('Options')->classes(['font-weight-bold', 'text-primary']);
```
Render:
```html
<!-- menu item -->
<a href="#" class="nav-link">
    Options
</a>
```
The active item will also get the 'active' class, and the items with sub-menus will get the 'dropdown' class.

You can customize these classes using:

```
{!! Menu::make('items')
        ->setActiveClass('Active')
        ->setDropDownClass('dropdown') !!}
```

### Active option

All menu items will have the active value set to false as default, unless the URL of a menu item or sub-item has the same or partial base value than the current URL.

For example:
```php
Menu::make(function ($items) {
    $items->url('about-us', 'About us');
})->toHtml();
```
Will be considered the active URL if the current URL is news/ or news/some-slug.

## Render with a custom template

The menu will be rendered automatically using the template available in `vendor/styde/html/themes/bootstrap4` or in `resources/views/themes/boostrap4` (only if you [have published the theme](/usage/themes.html#customize)), but you can also call the `template` method which accepts an custom template as an argument, like this:
```php
Menu::make(function ($items) {
    //Items
})->template('custom-template')->toHtml();
```
Also, if you are [using a menu class](#using-a-menu-class) you can add the `template` attribute to the class:
 ```php
protected $template = 'custom-template';
```
::: warning
The menu will look for the template in the `resources/views/` folder.
:::
## Permissions

It is often useful to show or hide options for guest or logged users with certain roles, you can do this using the [Access Handler methods](/usage/access-handler.html) included in this component.
