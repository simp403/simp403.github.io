// Use JQuery to insert partials as header and footer.
(function ($, window, document, undefined) {
 
  $(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
  });
 
})(jQuery, window, document);