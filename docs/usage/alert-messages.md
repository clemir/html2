# Alert Messages
[[toc]]
This component will allow you to generate complex alert messages, like this:

 ```php
Alert::info('Your account is about to expire')
    ->details('Renew now to learn about:')
    ->items([
        'Laravel',
        'PHP,
        'And more',
    ])
    ->button('Renew now!', '#', 'primary');
```

The messages will persist in the session until they are presented to the user in the view with:
```php
{!! Alert::render() !!}
```
## Create new alert messages

You can generate new alert messages with:
```php
{!! Alert::message('This is a message', 'alert-type') !!}
```
The first argument is the text of the message, and the second one is the type of alert that can be: `success`, `info`, `danger`, etc. For example:

```php
Alert::message('The end is near', 'danger');
```
::: tip NOTE
By default, the type of alert is `success`. So you can simply do this `Alert::message('Good')` is equivalent to `Alert::message('Good', 'success')`
:::
### Magic methods
You can also use magic methods, the name of the method then becomes the alert type:

```php
Alert::success("It's all good now");

Alert::danger('The end is near');
```

## Method chaining

You can specify more options by method chaining:

### `details` method

You can pass a more detailed message chaining the `details` method:
```php
{!! Alert::info('Some info')->details('A more detailed explanation goes here') !!}
```

### call to actions or `button` method

You can assign buttons to an alert message:
```php
{!! Alert::info()->button('Call to action', 'some-url', 'primary') !!}
```
### `html` method

You can directly pass HTML to the alert message
```php
{!! Alert::info()->html('<strong>HTML goes here</strong>') !!}
```
::: danger
Be careful since this won't be escaped.
:::
### `view` method

You can even render a partial inside an alert message:
```php
`{!! Alert::info()->view('partials/alerts/partial') !!}`
```
### `items` method

You can pass an array of items (maybe an error list):
```php
{!! Alert::danger('Please fix these errors')->items($errors) !!}
```
## Persist alert messages (Middleware)
The `Styde\Html\Alert\Middleware` middleware is needed to persist the alert messages after each request is completed. Add it to the `$middlewareGroups` array in the `app/Http/Kernel.php` file **BEFORE** the `\App\Http\Middleware\EncryptCookies` middleware:

```php
protected $middleware = [
    //...
    \Styde\Html\Alert\Middleware::class
    //...
];
```
::: tip NOTE
By default the alert messages will persist using the Laravel's session component. But you could also create your own implementation.
:::

## Translations

If you need to support multiples languages in your alert messages, you can use [Laravel's localization component.](https://laravel.com/docs/localization)

## Themes

By default, the alert messages will be rendered with the default template, located in `themes/[theme]/alert`, for example, for the Bootstrap 4 theme that would be:

`vendor/styde/html/themes/bootstrap/alert.blade.php`

You can pass a custom template as the first argument of the render() method, i.e.:
```php
{!! Alert::render('partials/custom-alert-template') !!}
```
