

# Quirks
*   This sdk automatically generates a test framework using mocha. For some reason it generates an outdated mocha optipons file. (Deprecated in v6.0.0+)
    *   We will need to delete this `mocha.opts` file and replace it with a `.mocharc.yml` file that contains `recursive: true` to run the tests in the `./test` subdirectories 
    *   It also has an outdated version of mocha. As of 10/20/2021, the most recent version is 9.1.3, so I've changed the `package.json` to contain `^9.1.0` instead of the default `^8.0.1`
*   The `index.js` file uses imports, which are not allowed if the project type is not a module,`"type": "module",` must be added to `package.json` for this to work properly
