const cups2ML = function(cups) {
  return cups * 237;
}

const ml2Cups = function(ml) {
  return ml / 237;
}

const tbsp2Tsp = function(tbsp) {
  return tbsp * 3;
}

const gal2Liters = function(gal) {
  return gal * 3.785;
}

$(document).ready(function () {
  $("form#cupsToMl").submit(function(event) {
    event.preventDefault();
    
    const cups = parseInt($("#cups").val());
    const result = cups2ML(cups);

    $("#cupsToMLOutput").append("<p>" + result + "</p>");
  });
});

$(document).ready(function () {
  $("form#mlToCups").submit(function(event) {
    event.preventDefault();
    
    const ml = parseInt($("#milliliters")).val();
    const result = ml2Cups(ml);

    $(".output.mlToCupsOutput").append("<p>" + result + "</p>");
  });
});

$(document).ready(function () {
  $("form#cups2ML").submit(function(event) {
    event.preventDefault();
    
    const cups = parseInt($("#cups")).val();
    const result = cups2ML(cups);

    $(".output.cupsToMLOutput").text(result);
  });
});

$(document).ready(function () {
  $("form#cups2ML").submit(function(event) {
    event.preventDefault();
    
    const cups = parseInt($("#cups")).val();
    const result = cups2ML(cups);

    $(".output.cupsToMLOutput").text(result);
  });
});