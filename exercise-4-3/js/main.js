if (typeof d3 === "undefined") {
  document.querySelector("#status").textContent = "D3 could not load. Check the internet connection and reload the page.";
} else {
  const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 500 120")
    .attr("role", "img")
    .attr("aria-label", "Test rectangle on a responsive SVG canvas")
    .style("display", "block")
    .style("width", "100%")
    .style("border", "1px solid #aac6b8");

  svg.append("rect")
    .attr("x", 10)
    .attr("y", 10)
    .attr("width", 414)
    .attr("height", 16)
    .attr("fill", "#345bc4");
}
