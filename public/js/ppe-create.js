/** Linking UI elements on ppe-create page*/

$( "input[name=options]" ).on( "change", function() {
	const mode = $( this ).attr("id");
  switch (mode) {
  case "availability":
    $("#ppe_info_set span").text("You're willing to share");
    $("#ppe_info_set small").text("");
    $("#ppe_info_set i").removeClass().addClass("em em-gift_heart");
    $("#name_emoji").removeClass().addClass("em em-angel");
    break;
  case "requirement":
    $("#ppe_info_set span").text("You're in need of");
    $("#ppe_info_set small").text("");
    $("#ppe_info_set i").removeClass().addClass("em em-package");
    $("#name_emoji").removeClass().addClass("em em-bust_in_silhouette");
    break;
  case "manufacturing":
    $("#ppe_info_set span").text("You build and supply");
    $("#ppe_info_set small").text("");
    $("#ppe_info_set i").removeClass().addClass("em em-factory");
    $("#name_emoji").removeClass().addClass("em em-female-factory-worker");
    break;
  }
});

