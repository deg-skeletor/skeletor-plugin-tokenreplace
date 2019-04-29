# Skeletor Token Replace Plugin
[![Build Status](https://travis-ci.org/deg-skeletor/skeletor-plugin-tokenreplace.svg?branch=master)](https://travis-ci.org/deg-skeletor/skeletor-plugin-tokenreplace)

This plugin replaces text content in one or more files or globs using [replace-in-file](https://www.npmjs.com/package/replace-in-file). It is part of the Skeletor ecosystem. To learn more about Skeletor, [go here](https://github.com/deg-skeletor/skeletor-core).

## Installation
Install this plugin into your Skeletor-equipped project via the following terminal command: 
```
    npm install --save-dev git+https://git@github.com/deg-skeletor/skeletor-plugin-tokenreplace.git
```

## Configuration
This plugin passes its `config` object directly to the `replace-in-file` plugin. For full documentation, [go here](https://www.npmjs.com/package/replace-in-file).

### Example Configuration (single file)
```
{
    files: 'path/to/sourceFile.txt',
    from: /original content/g
    to: 'replacement content'
}
```

### Example Configuration (multiple files, single value, single replacement)
```
{
    files: [
        'path/to/sourceFileOne.txt'
        'path/to/sourceFileTwo.txt'
    ],
    from: /original content/g
    to: 'replacement content'
}
```

### Example Configuration (multiple files, multiple values, single replacement)
```
{
    files: [
        'path/to/sourceFileOne.txt'
        'path/to/sourceFileTwo.txt'
    ],
    from: [
        /original content one/g,
        /original content two/g
    ],
    to: 'replacement content'
}
```

### Example Configuration (multiple files, multiple values, multiple replacements)
```
{
    files: [
        'path/to/sourceFileOne.txt'
        'path/to/sourceFileTwo.txt'
    ],
    from: [
        /original content one/g,
        /original content two/g
    ],
    to: [
        'replacement content one',
        'replacement content two'
    ]
}
```

### Configuration Options

#### files
Type: `String` or `Array` 
One or more source file paths.

#### from
Type: `String` or `Array` 
One or more values that will be replaced by the `from` value(s).

#### to
Type: `String` or `Array` 
One or more values that will replace the `to` value(s).
