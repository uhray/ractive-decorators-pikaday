/**
 * @license ractive-decorators-pikaday Copyright (c) 2014, Uhray LLC
 * Available via the MIT license.
 * see: http://github.com/uhray for details
 */
define(['pikaday', 'css!bower_components/pikaday/css/pikaday'],
function(Pikaday) {

  // ========================== Define Extension ============================ //

  var extension = Ractive.extend({
    decorators: {
      pikaday: function(node, keypath) {
        var self = this,
            setting = false,
            picker = new Pikaday({
              field: node,
              onSelect: function(date) {
                setting = true; // to prevent infinite loop
                self.set(keypath, date);
                setting = false;
              },
              format: 'MM/DD/YYYY',
              showTime: true,
              use24hour: true
            });

        this.observe(keypath, function(date) {
          if (setting) return;
          picker.setDate(date);
        });

        return {
          teardown: function() {
            // Teardown goes here
            picker.destroy();
          }
        };
      }
    }
  });

  // ========================= Activate Extension =========================== //

  Ractive.prototype = extension.prototype;

});
