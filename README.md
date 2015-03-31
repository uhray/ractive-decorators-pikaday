Ractive-Decorators-Pikaday
=====================

This creates an Ractive decorator for [Pikaday](https://github.com/dbushell/Pikaday).

To use:

  1. Install: ```bower install --save ractive-decorators-pikaday```

  2. Include the file [dist/pikaday.min.js](dist/pikaday.min.js).

  3. Use as a [decorator](http://docs.ractivejs.org/latest/writing-decorator-plugins):

    ```html
    <input decorator="pikaday:myDate" />
    ```

    Where myDate is the keypath to the date stored on the ractive object.

