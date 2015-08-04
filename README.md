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

(this is assuming node and npm are already installed)

```bash
# install toolsets and dependencies
$ npm i -g tsd@latest
$ tsd install angular2 es6-promise rx rx-lite
$ npm i -g typescript@^1.5.0-beta
```

### Option 0: Use terminal

#### Mac/Linux

```bash
$ tsc --watch
```

#### Windows

```cmd
> tsc.cmd -w
```

### Option 1: Use Atom + `atom-typescript`

I've found Atom to be fairly simple to use. With the atom-typescript package, it will compile the `.ts` files to `.js` every time you save your file. Convenient.

* [Download Atom](https://atom.io/) (Windows/Linux/Mac)
    * [atom-typescript](https://atom.io/packages/atom-typescript)

### Option 2: Visual Studio Code

I also tested these samples using Visual Studio Code. Seems to work pretty straightforward and was built to handle TypeScript.

* [Download Visual Studio Code](https://code.visualstudio.com/) (Windows/Linux/Mac)

1. Open this repo folder in VS Code
1. **Ctrl+Shift+B** (Windows/Linux), **&#8984;+Shift+B** (Mac) will trigger build using `tsc` settings found in `.settings/tasks.json` 

>See [TypeScript features in VS Code on MSDN](http://blogs.msdn.com/b/typescript/archive/2015/04/30/using-typescript-in-visual-studio-code.aspx)

#### Ubuntu Notes

When trying this on a clean installation of Ubuntu 15.04, there's may be small changes you'll want to make. 

Depending on how you've got node installed, you either have or don't have the `node` executable alias. 
Make sure `node` executable can be found, since our VSCode build task expects the name `node`. 
Installing node from apt-get doesn't seem to include this.

Running **Ctrl+Shift+B** and inspecting the Output window, I saw this message: `/usr/bin/env node No such file or directory`.

So, let's fix the missing node link. 

```bash
$ which node
# if you see an entry returned, you don't have this error. Go to VSCode and enjoy!

# ... if nothing, try nodejs
$ which nodejs

# if nodejs is returned, (assuming /usr/bin/nodejs) link it to node
$ ln -s /usr/bin/nodejs /usr/bin/node
```

## Running

Use your favorite web server. Example with Python,

```bash
# pwd: /path/to/angular2-playground
$ python -m SimpleHTTPServer 11337
```

Now, just navigate your browser to [localhost:11337](http://localhost:11337/)
