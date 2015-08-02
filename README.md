angular2-playground
===================

Angular 2 tutorials and what not.

## Sources

[Large Angular2 Education Link Farm (timjacobi)](https://github.com/timjacobi/angular2-education)

Each example in this repository is built from these sources:

* https://angular.io/docs/js/latest/quickstart.html
    * `01-basics`
* https://angular.io/docs/js/latest/guide/displaying-data.html
    * `02-displaying_data`
* https://angular.io/docs/js/latest/guide/user-input.html
    * `03-user_input`

## Getting Code

```bash
$ git clone https://github.com/mitch-b/angular2-playground
$ cd angular2-playground/
```

## Environment Setup

### Option 1: Use Atom + `atom-typescript`

I've found Atom to be fairly simple to use. With the atom-typescript package, it will compile the `.ts` files to `.js` every time you save your file. Convenient.

* [Atom](https://atom.io/)
    * [atom-typescript](https://atom.io/packages/atom-typescript)

### Option 2: Run from Terminal

If you don't want Atom doing stuff behind the scenes, you can manually run `tsc` to compile the TypeScript to JavaScript.

```bash
# install toolsets and dependencies
$ npm install -g tsd@latest
$ tsd install angular2 es6-promise rx rx-lite
$ npm install -g typescript@^1.5.0-beta

# compile .ts and watch for changes
$ tsc --watch -m commonjs -t es5 --emitDecoratorMetadata app.ts
```

## Running

Use your favorite web server. Example with Python,

```bash
# pwd: /path/to/angular2-playground
$ python -m SimpleHTTPServer 11337
```

Now, just navigate your browser to [localhost:1137](http://localhost:1137/)
