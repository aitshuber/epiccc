		(function(proxied) {
    window.alert = function(data) {
        swal( 'Notice', data, 'warning' );
        
        // original return (we won't need it)
        // return proxied.apply(this, arguments);
    };
    // Supress all alerts
        window.alert = function(message) {};
        
        // Supress alerts, replace with Sweet Alerts Default
        window.alert = function(message) {
            swal({
              title: "",
              text: message,
              type: "",
              confirmButtonText: "close" });
        };
        
        // Supress Alerts, Only replace "Your Shopping cart is empty." alert
        window.alert = function(message) {
          if(message == 'Your Shopping cart is empty.') {
            swal({
              title: "",
              text: message,
              type: "error",
              confirmButtonText: "OK!" });
          }
        };
        
        // Supress Alerts, Show info message for "Your Shopping cart is empty." - Default for the rest
        window.alert = function(message) {
          if(message == 'Your Shopping cart is empty.') {
            swal({
              title: "",
              text: message,
              type: "info",
              confirmButtonText: "OK!" });
          } else {
            swal({
              title: "",
              text: message,
              type: "",
              confirmButtonText: "OK!" });
          }
        };
        
        // Supress Alerts, Show Error for two specific messages, Success if added to cart, Default for the rest
        window.alert = function(message) {
          var SupressMessages = ["ERROR: Please choose relevant options before adding to cart.","ERROR: Quantity entered is too large, please enter a smaller quantity."];
          if ($.inArray(message,SupressMessages) >= 0) {
            swal({
              title: "Error!",
              text: message,
              type: "error",
              confirmButtonText: "Try Again!" });
          } else if (message.indexOf('added to your cart.') >= 0) {
            swal({
              title: "Success",
              text: message,
              type: "success",
              confirmButtonText: "OK!" });
          } else {
            swal({
              title: "",
              text: message,
              type: "",
              confirmButtonText: "Close" });
          }
        };
        
        // Supress Alerts, Show Error for any alert with "ERROR:", Success if added to cart, Default for the rest
        window.alert = function(message) {
        if (message.indexOf('ERROR:') >= 0) {
            swal({
              title: "Error!",
              text: message,
              type: "error",
              confirmButtonText: "Try Again!" });
          } else if (message.indexOf('added to your cart.') >= 0) {
            swal({
              title: "Success",
              text: message,
              type: "success",
              confirmButtonText: "OK!" });
          } else {
            swal({
              title: "",
              text: message,
              type: "",
              confirmButtonText: "Close" });
          }
        };

 
})(window.alert);