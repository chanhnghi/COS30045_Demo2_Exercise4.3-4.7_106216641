const status = document.querySelector("#status");
const chartWidth = 1000;
const chartHeight = 900;
const margin = { top: 54, right: 90, bottom: 34, left: 170 };
const innerWidth = chartWidth - margin.left - margin.right;
const innerHeight = chartHeight - margin.top - margin.bottom;

// Exercise 4.3: D3 creates a responsive SVG canvas and inner chart group.
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", `0 0 ${chartWidth} ${chartHeight}`)
  .attr("role", "img")
  .attr("aria-label", "Horizontal bar chart of TV model counts, with labels for 25 brands")
  .style("border", "1px solid #c5d8cc");
const innerChart = svg.append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

function drawBarChart(data) {
  const maxCount = d3.max(data, d => d.count);

  // Exercise 4.6: convert counts and brand names into SVG positions.
  const xScale = d3.scaleLinear()
    .domain([0, maxCount * 1.06])
    .range([0, innerWidth]);
  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, innerHeight])
    .padding(0.22);

  // Exercises 4.5 and 4.7: bind one CSV row to each group, then add a bar
  // and its two labels. Group translation makes all three share one y value.
  const rows = innerChart.selectAll("g.brand-row")
    .data(data, d => d.brand)
    .join("g")
    .attr("class", "brand-row")
    .attr("transform", d => `translate(0,${yScale(d.brand)})`);
  rows.append("rect")
    .attr("class", d => `bar bar-${d.count}`)
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("fill", "#365dc4");
  rows.append("text")
    .attr("class", "bar-label")
    .attr("x", -12)
    .attr("y", yScale.bandwidth() / 2)
    .attr("dy", "0.35em")
    .attr("text-anchor", "end")
    .text(d => d.brand);
  rows.append("text")
    .attr("class", "bar-value")
    .attr("x", d => xScale(d.count) + 8)
    .attr("y", yScale.bandwidth() / 2)
    .attr("dy", "0.35em")
    .text(d => d.count.toLocaleString());
}

// Exercise 4.4: read the exported brand counts from CSV and convert numbers.
d3.csv("data/tvBrandCount.csv", d => ({
  brand: d.brand.trim(),
  count: +d.count
})).then(data => {
  data.sort((a, b) => b.count - a.count);
  console.log("Week 4 TV brand counts", data);
  drawBarChart(data);
}).catch(error => {
  status.textContent = "The CSV could not be loaded. Open this page through VS Code Live Server and reload it.";
  console.error(error);
});
