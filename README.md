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
* https://angular.io/docs/js/latest/guide/making-components.html
    * `04-making_components`

## Getting Code

```bash
$ git clone https://github.com/mitch-b/angular2-playground
$ cd angular2-playground/
```

## Environment Setup

### Option 1: Use Atom + `atom-typescript`

I've found Atom to be fairly simple to use. With the atom-typescript package, it will compile the `.ts` files to `.js` every time you save your file. Convenient.

* [Download Atom](https://atom.io/) (Windows/Linux/Mac)
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

### Option 3: Visual Studio Code

I also tested these samples using Visual Studio Code. Seems to work pretty straightforward and was built to handle TypeScript.

* [Download Visual Studio Code](https://code.visualstudio.com/) (Windows/Linux/Mac)

1. Open this repo folder in VS Code
1. `Ctrl+Shift+B` (Windows/Linux), &#8984;`+Shift+B` (Mac) will trigger build using `tsc` settings found in `.settings/tasks.json` 

>See [TypeScript features in VS Code on MSDN](http://blogs.msdn.com/b/typescript/archive/2015/04/30/using-typescript-in-visual-studio-code.aspx)

## Running

Use your favorite web server. Example with Python,

```bash
# pwd: /path/to/angular2-playground
$ python -m SimpleHTTPServer 11337
```

Now, just navigate your browser to [localhost:11337](http://localhost:11337/)
