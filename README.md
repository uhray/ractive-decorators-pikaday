Ractive-Decorators-Pikaday
=====================

This creates an Ractive decorator for [Pikaday](https://github.com/dbushell/Pikaday).

####How to use this decorator in your Ractive application:

 1. Install: ```bower install --save ractive-decorators-pikaday```
 
 2. Include the file [dist/pikaday.min.js](dist/pikaday.min.js).
 
 3. Use as a [decorator](http://docs.ractivejs.org/latest/writing-decorator-plugins):

    ```html
    <input decorator="pikaday:myDate" />
    ```

    Where myDate is the keypath to the date stored on the ractive object.
    
####Available gulp build options:

 1.  ```gulp info```
      - lists the available gulp options
 2.  ```gulp lint```
      - lints the javascript for this decorator using [jscs](https://github.com/jscs-dev/node-jscs)
 3.  ```gulp example```
      - serves an example of this decorator on your localhost for testing purposes
 4.  ```gulp build```
      - builds a minified and non-minified version of this repo for production

####Important notes & future development:

> **Pikaday Dependincy Loading Issue:**

> - [Pikaday](https://github.com/dbushell/Pikaday) requires [moment.js](http://momentjs.com/) if you want to use any type of custom date formatting beyond Pikaday's standard ```Fri May 22 2015```. Pikaday loads dependencies in an unusual manner that does NOT guarantee all dependencies will be loaded before Pikaday itself is loaded.
> - The current build of this decorator (commit ```a2af556287```) does indeed load moment prior to Pikaday, so custom formatting will work properly as ```MM/DD/YYYY```.
> - If you make modifications to this repository and build for production (```gulp build```), the resulting build files in the ```/dist``` directory may not successfully load moment before Pikaday to enable custom formatting. If not, Pikaday's standard date format will be used by default. Until we fix this issue, please verify that your build allows custom formatting in the form ```MM/DD/YYYY``` by running ```gulp example``` before pushing code changes to this repository.
