# Comenzando

## Requerimientos
* PHP: ^7.1
* Laravel: ^5.6
::: tip
Si estás usando una versión anterior a Laravel 5.6, revisa la [anterior documentación](../old-version/) de este paquete.
:::

## Instalación
La manera de instalar este paquete es a través de Composer ejecutando en tu proyecto de Laravel:
```bash
$ composer require styde\html
```
## Archivo de configuración
Opcionalmente, puedes publicar el archivo de configuración en `config/html.php`  ejecutando: 
```bash
 $ php artisan vendor:publish --provider='Styde\Html\HtmlServiceProvider'
```
::: warning ADVERTENCIA
Cuando ejecutas este comando también estarás publicando el tema por defecto en el directorio `resources/views/themes/`.
:::

## Middleware
Para que los mensajes de alerta persistan entre sesiones, después de que cada petición es completada, necesitas registrar en el archivo `app/Http/Kernel.php` el middleware `\Styde\Html\Alert\Middleware::class` **ANTES** del middleware `EncryptCookies` en el array `$middlewareGroups`:
```php
protected $middlewareGroups = [
    \Styde\Html\Alert\Middleware::class,
    //...
];
```

## Service Provider
Styde\Html es **auto-descubierto y automáticamente registrado**, pero si deseas registrarlo manualmente debes agregar el service provider en el array `providers` del archivo `config/app.php`:

```php
'providers' => [
    // ...
    Styde\Html\HtmlServiceProvider::class,
    // ...
],
```

## Facades
Toma en cuenta que los siguientes alias globales estarán automáticamente disponibles (NO necesitas registrarlos manualmente):

```php
Alert => Styde\Html\Facades\Alert
Field => Styde\Html\Facades\Field
Menu  => Styde\Html\Facades\Menu
Form  => Collective\Html\FormFacade
Html  => Collective\Html\HtmlFacade
```
Sin embargo, si tienes planeado usar el _Access Handler_ como una clase independiente, necesitarás agregar el siguiente alias:

```php
'aliases' => [
    // ...
    'Access' => Styde\Html\Facades\Access::class,
    // ...
],
```
