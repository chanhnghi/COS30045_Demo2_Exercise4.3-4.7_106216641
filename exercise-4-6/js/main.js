const status = document.querySelector("#status");
const scaleExplainer = document.querySelector("#scale-explainer");

if (typeof d3 === "undefined") {
  status.textContent = "D3 could not load. Check the internet connection and reload the page.";
} else {
  const chartWidth = 760;
  const chartHeight = 860;
  const leftMargin = 22;
  const rightMargin = 25;

  const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", `0 0 ${chartWidth} ${chartHeight}`)
    .attr("role", "img")
    .attr("aria-label", "Horizontal bar chart of TV brand counts with linear and band scales")
    .style("display", "block")
    .style("width", "100%")
    .style("border", "1px solid #aac6b8");

  function drawBarChart(data) {
    const maxCount = d3.max(data, d => d.count);
    const xScale = d3.scaleLinear()
      .domain([0, maxCount])
      .range([0, chartWidth - leftMargin - rightMargin]);

    const yScale = d3.scaleBand()
      .domain(data.map(d => d.brand))
      .range([16, chartHeight - 16])
      .padding(0.22);

    svg.selectAll("rect")
      .data(data)
      .join("rect")
      .attr("class", d => `bar bar-${d.count}`)
      .attr("x", leftMargin)
      .attr("y", d => yScale(d.brand))
      .attr("width", d => xScale(d.count))
      .attr("height", yScale.bandwidth())
      .attr("fill", "#345bc4");
    scaleExplainer.textContent = `In 4.5, the largest count (${maxCount.toLocaleString()}) made a bar ${maxCount.toLocaleString()} SVG units wide. Here the linear scale fits it into ${xScale(maxCount)} units inside a ${chartWidth}-unit canvas. The band scale sets each bar's position, height, and gap. Visible brand labels come in Exercise 4.7.`;
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
