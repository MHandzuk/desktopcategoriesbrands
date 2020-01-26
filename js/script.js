var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// діапазон цін
$("#slider-range").slider({
  range: true,
  min: 0,
  max: 300,
  values: [15, 230],
  slide: function(event, ui) {
    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
  }
});
$("#amount").val(
  "$" +
    $("#slider-range").slider("values", 0) +
    " - $" +
    $("#slider-range").slider("values", 1)
);
