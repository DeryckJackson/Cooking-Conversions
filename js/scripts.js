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

    $(".output.cupsToMlOutput").append("<p>" + result + "</p>");
  });
});

$(document).ready(function () {
  $("form#mlToCups").submit(function(event) {
    event.preventDefault();
    
    const ml = parseInt($("#milliliters").val());
    const result = ml2Cups(ml);

    $(".output.mlToCupsOutput").append("<p>" + result + "</p>");
  });
});

$(document).ready(function () {
  $("form#tbsp2Tsp").submit(function(event) {
    event.preventDefault();
    
    const tbsp = parseInt($("#tbsp").val());
    const result = tbsp2Tsp(tbsp);

    $(".output.tbsp2TspOutput").append("<p>" + result + "</p>");
  });
});

$(document).ready(function () {
  $("form#tsp2Tbsp").submit(function(event) {
    event.preventDefault();
    
    const tsp = parseInt($("#tsp").val());
    const result = tbsp2Tsp(tsp);

    $(".output.tsp2TbspOutput").append("<p>" + result + "</p>");
  });
});