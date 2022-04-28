function checkLoaded() {
  var cbb_label = $(".cbb-frequently-bought-selector-label-name")[0];
  if(!cbb_label) {
    window.setTimeout(checkLoaded, 1000);
    return;
  }
 	
  $(".cbb-frequently-bought-selector-list li").each(function() {
    var label = $(this).find(".cbb-frequently-bought-selector-label-name")
  	var text = label.text().toLowerCase();
    label.text(text);
  });
}

$(document).ready(function() {
  if($("body").hasClass("template-product")) {
  	checkLoaded();
  }
});