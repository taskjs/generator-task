# <%= props.name %>
> <%= props.description %>

## The "<%= shortSlugname %>" task

### Usage Examples

```js
var <%= shortSafeSlugname %> = new require('<%= props.name %>')
<%= shortSafeSlugname %>.run(inputs, options, logger)
```

### Options

#### options.foo
Type: `path`

A string value that is used to do something with whatever.

#### options.bar
Type: `string`
Default: `'baz'`

A string value that is used to do something else with whatever else.

## Release History
_(Nothing yet)_

## License
Copyright (c) <%= currentYear %> <%= props.authorName %>. Licensed under the <%= props.license %> license.
