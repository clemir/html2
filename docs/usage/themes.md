# Themes

There are a lot of CSS (and all kind of) frameworks out there, this package was created with that in mind, and even though **Bootstrap 4** is included _out of the box_, we plan to add more themes in the future (we also invite you to collaborate).

## Customize
You can publish the default theme and customize it, if you need to. Simply run:
```bash
 $ php artisan vendor:publish --tag='styde-html-theme'
```
::: tip
The themes will be published in the  `resources/views/themes/` folder.
:::
After publish, you can change any template as you need.

## Create a new theme
You can create a new theme in the `resources/views/themes/` folder creating a new folder with a structure like that:
```
custom-theme
    ├── alert.blade.php
    ├── fields
    │   ├── checkbox.blade.php
    │   ├── collections.blade.php
    │   └── default.blade.php
    ├── form.blade.php
    ├── forms
    │   ├── checkboxes.blade.php
    │   ├── checkboxes-inline.blade.php
    │   ├── radios.blade.php
    │   └── radios-inline.blade.php
    └── menu.blade.php
```
:::tip
To save some time, you can copy the `bootstrap4` folder and paste it as 'custom-theme' and you can change all the templates within that directory or add new ones if you need to.
:::
Then go to `config/html.php` and change the theme value:

```php
//config/html.php
return [
    'theme' => 'custom-theme'
];
```
## Customize individual templates
Maybe you don't need to create or use a new theme and you just simply need to override a particular template for a especific component. You can do this too, since most methods support that, for example:
```php
Menu::make(function ($items) {
    $items->url('/', 'Home');
})->template('custom-templates.menu')
```
```php
{{ Alert::render('custom-templates.alert') }}
```
```php
Field::text('name', 'value')->template('custom-templates.field-text')
```

:::tip IMPORTANT
You have to put the custom template inside the theme folder: `resources/views/themes/your-theme`  or may be located inside the components directory `vendor/styde/html/themes/bootstrap4`.
:::

## Customize templates by field type (field builder)

Are you using a CSS framework that requires a different markup for a particular field type? Don't worry, just read the "Customize by type" section of the [field builder page](/usage/field-builder.html#templates)

## Pull requests

If you create a theme for a popular CSS framework, you can collaborate by forking this repository, and creating a pull request, remember to store the templates in the `themes/` folder. Thank you.