const status = document.querySelector("#status");

if (typeof d3 === "undefined") {
  status.textContent = "D3 could not load. Check the internet connection and reload the page.";
} else {
  const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1200 900")
    .attr("role", "img")
    .attr("aria-label", "Horizontal bar chart of TV brand counts without scales")
    .style("display", "block")
    .style("width", "100%")
    .style("border", "1px solid #aac6b8");

  function drawBarChart(data) {
    const barHeight = 25;
    const barSpacing = 9;

    svg.selectAll("rect")
      .data(data)
      .join("rect")
      .attr("class", d => `bar bar-${d.count}`)
      .attr("x", 24)
      .attr("y", (d, i) => 20 + i * (barHeight + barSpacing))
      .attr("width", d => d.count)
      .attr("height", barHeight)
      .attr("fill", "#345bc4");
  }

  d3.csv("data/tvBrandCount.csv", d => ({
    brand: d.brand.trim(),
    count: +d.count
  }))
    .then(data => {
      data.sort((a, b) => b.count - a.count);
      drawBarChart(data);
    })
    .catch(error => {
      status.textContent = "The CSV could not be loaded. Open this page through a local web server, such as VS Code Live Server.";
      console.error(error);
    });
}
