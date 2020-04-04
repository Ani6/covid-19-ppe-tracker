/** Linking UI elements on ppe-create page*/

$( "input[name=options]" ).on( "change", function() {
	const mode = $( this ).attr("id");
  switch (mode) {
  case "availability":
    $("#ppe_info_set span").text("We have an excess of");
    $("#ppe_info_set small").text("");
    $("#ppe_info_set i").removeClass().addClass("em em-gift_heart");
    $("#name_emoji").removeClass().addClass("em em-angel");
    $("#request_mode").attr("value", "availability");
    break;
  case "requirement":
    $("#ppe_info_set span").text("We're in need of");
    $("#ppe_info_set small").text("");
    $("#ppe_info_set i").removeClass().addClass("em em-truck");
    $("#name_emoji").removeClass().addClass("em em-bust_in_silhouette");
    $("#request_mode").attr("value", "requirement");
    break;
  case "manufacturing":
    $("#ppe_info_set span").text("We build");
    $("#ppe_info_set small").text("and supply");
    $("#ppe_info_set i").removeClass().addClass("em em-factory");
    $("#name_emoji").removeClass().addClass("em em-female-factory-worker");
    $("#request_mode").attr("value", "manufacturing");
    break;
  }
});

