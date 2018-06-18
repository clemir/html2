# Getting started

## Requirements
* PHP: ^7.1
* Laravel: ^5.6
::: tip
If you are using an older version of Laravel 5.6, take a look at [older documentation](../old-version/) of this package
:::

## Installation
The preferred way to install this package is through Composer running in your Laravel app:
```bash
$ composer require styde\html
```
## Config file
Optionally, you may publish the configuration file in `config/html.php`  run:
```bash
 $ php artisan vendor:publish --tag='styde-html-config'
```
## Middleware
In order to the alert messages persistent between sessions, after each request is completed, you need to register in the `app/Http/Kernel.php` file the `\Styde\Html\Alert\Middleware::class` middleware **BEFORE** the `EncryptCookies` middleware in the `$middlewareGroups` array:
```php
protected $middlewareGroups = [
    \Styde\Html\Alert\Middleware::class,
    //...
];
```

## Service Provider
Styde\Html is **auto-discovered and automatically registered**, but if you want you can register it manually, adding the provider to the `providers` array in `config/app.php`

```php
'providers' => [
    // ...
    Styde\Html\HtmlServiceProvider::class,
    // ...
],
```

## Facades
Please notice that the following global aliases will be automatically available (you don't need to add them):

```php
Alert => Styde\Html\Facades\Alert
Field => Styde\Html\Facades\Field
Menu  => Styde\Html\Facades\Menu
Form  => Collective\Html\FormFacade
Html  => Collective\Html\HtmlFacade
```
If you plan to use the _Access Handler_ as a standalone class, you will need to add the following alias:

```php
'aliases' => [
    // ...
    'Access' => Styde\Html\Facades\Access::class,
    // ...
],
```
