angular2-playground
===================

Angular 2 tutorials and what not.

```bash
# get assets
$ git clone https://github.com/mitch-b/angular2-playground
$ cd angular2-playground/

# install toolsets and dependencies
$ npm install -g tsd@latest
$ tsd install angular2 es6-promise rx rx-lite
$ npm install -g typescript@^1.5.0-beta
$ tsc --watch -m commonjs -t es5 --emitDecoratorMetadata app.ts

# run web server
$ python -m SimpleHTTPServer 8080
```

* https://angular.io/docs/js/latest/quickstart.html
* https://angular.io/docs/js/latest/guide/displaying-data.html

## Other Things
* [atom](https://atom.io/)
    * [atom-typescript](https://atom.io/packages/atom-typescript)
