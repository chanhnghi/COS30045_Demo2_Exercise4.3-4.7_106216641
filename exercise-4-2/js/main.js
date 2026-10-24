if (typeof d3 === "undefined") {
  document.querySelector("#status").textContent = "D3 could not load. Check the internet connection and reload the page.";
} else {
  d3.select("#energy-heading").style("color", "#17675a");

  d3.select("#energy-note")
    .append("p")
    .text("Choosing an energy-efficient television can reduce annual electricity use.");

  d3.select("#practice-svg")
    .append("rect")
    .attr("x", 35)
    .attr("y", 35)
    .attr("width", 240)
    .attr("height", 70)
    .attr("rx", 8)
    .attr("fill", "#65a98d");
}
