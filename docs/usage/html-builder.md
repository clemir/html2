# HTML Builder
[[toc]]
## Basic
This component provide you with a collection of methods to generate HTML code dynamically.

You can use the `Html` Facade or the `html` helper in order to call the methods.

## Methods

### classes

Build an HTML class attribute dynamically.

For AngularJS users, this method is similar to the ng-class attribute of AngularJS.

You can specify one or more CSS classes as a key and a condition as a value. If the condition is evaluated as true, then the class(es) will be used, otherwise they will be skipped. You can also set the static class(es) (those which we'll always be used) as a value with no key.

Example:
```php
{!! Html::classes(['home' => true, 'main', 'dont-use-this' => false]) !!}
```

Returns: ` class="home main"`.
::: warning
Note that this function returns an **empty space before the class attribute**. So don't add another one, in other words use it like this:
```php
<p{!! Html::classes(..) !!}>
```
instead of this:
```php
<p {{!! Html::classes(..) !!}>
```
:::
If no classes are evaluated as TRUE then this function will return an empty string.

### link

Generate a HTML link dymanically.

```php
{!! Html::link($url, $title = null, $attributes = [], $secure = null) !!}
```
For example:
```php
{!! Html::link('my-url', 'Text') !!}
```
Rendering:
```html
<a href="http://localhost/my-url">Text</a>
```
::: tip
Also, instead of Facade `Html` you can use the helper `link` like that: `link('my-url', 'Text')`
:::
### tag
Generate an html tag.

It recognize if it is a empty tag i.e. it contains attributes only, and does not have a closing tag.

Also, it escapes the attributes of generated tags.

```php
{!! Html::tag($tag, $content = '', array $attributes = []) !!}
```
For example:
```php
{!! Html::tag('h1', 'My title', ['id' => 'title']) !!}
```
Return `<h1 id="title">My title</h1>`

## HTML tags methods
There are additional methods for [HTML tags](/usage/html-builder.html#tag):

### attr
Add a attribute to the tag. The first argument is the attribute name and the second is the value. You can add as many attributes as you want.

For example:
```php
{!! Html::tag('img')->attr('src', 'smiley.gif')->attr('alt', 'Smiley face') !!}
```

### classes
Add one or more classnames to the tag (refers to a class in a style sheet). Example:
```php
{!! Html::tag('input', ['type' => 'text'])->classes('form-control other-class') !!}
```
### open
For Html tags with begin and end tag (i.e.`<p>` and `</p>`) you can generate dynamically the open tag like this:
```php
{!! Html::tag('p')->open() !!}
```
Return `<p>`
### close
For Html tags with begin and end tag (i.e. `<p>` and `</p>`) you can generate dynamically the close tag like this:
```php
{!! Html::tag('p')->close() !!}
```
Return `</p>`
## Dynamic methods
You can generate a tag using its name as dynamic method, like that:
```php
{!! Html::h2('title') !!}
```
Also, you can use dynamic methods for attributes to generate a tag. For example:
```php
{!! Html::h2('title')->style('font-size:60px;')->id('the_title') !!}
```
## HTML tags with multiples contents
May you need to create a HTML markup dynamic completely and for that case you can combine `open` and `close` methods with the content. Example:
```php
{!! Html::tag('ul')->open()!!}
    {!! Html::tag('li', 'Coffee') !!}
    {!! Html::tag('li', 'tea') !!}
    {!! Html::tag('li', 'milk') !!}
{!!Html::tag('ul')->close() !!}
```

## Extending Html Builder
If you would like to define a custom html that you can re-use in a variety of your views, you may use the `macro` method. For example, from a service provider's boot method:
```php
Html::macro('copy', function ($text) {
    return '<p>&copy; Copyright'. date('Y'). ' '. $text . '<p>';
});
```
Later, use that method, like `{!! Html::copy('Styde.net') !!}`
