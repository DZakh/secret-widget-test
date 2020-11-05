System.register([], function($__export, $__moduleContext) {
    var x;
    function p() {
      x = 10;
    }
    $__export({
      x: undefined,
      p: p
    });
    return {
      // setters: [], // (setters can be optional when empty)
      execute: function() {
        p();
        console.log(x)
      }
    };
  });
