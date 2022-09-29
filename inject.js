(function() {
  var injectionCode = [
    "<script src='//cc-project-resources.s3.amazonaws.com/inject-shutterbug/vendor/jquery-1.11.3.min.js' type='text/javascript'></script>",
    "<script src='//cc-project-resources.s3.amazonaws.com/inject-shutterbug/vendor/shutterbug-0.5.4.js' type='text/javascript'></script>",
    "<script>",
    "  Shutterbug.enable('body');",
    "</script>"
  ].join("\n");
  document.write(injectionCode)
  console.log("Injected shutterbug-0.5.4.js into the page.")
})();
