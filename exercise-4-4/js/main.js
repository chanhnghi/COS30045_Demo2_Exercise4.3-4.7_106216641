const status = document.querySelector("#status");

function drawBarChart(data) {
  const rows = d3.select("#brand-rows")
    .selectAll("tr")
    .data(data)
    .join("tr");

  rows.selectAll("td")
    .data(d => [d.brand, d.count])
    .join("td")
    .text(value => value);
}

if (typeof d3 === "undefined") {
  status.textContent = "D3 could not load. Check the internet connection and reload the page.";
} else {
  d3.csv("data/tvBrandCount.csv", d => ({
    brand: d.brand.trim(),
    count: +d.count
  }))
    .then(data => {
      data.sort((a, b) => b.count - a.count);
      const counts = d3.extent(data, d => d.count);
      console.table(data);
      console.log("Number of brands:", data.length);
      console.log("Maximum count:", d3.max(data, d => d.count));
      console.log("Minimum count:", d3.min(data, d => d.count));
      console.log("Count extent:", counts);
      d3.select("#summary").text(`${data.length} brands · minimum ${counts[0]} · maximum ${counts[1]} TVs`);
      drawBarChart(data);
    })
    .catch(error => {
      status.textContent = "The CSV could not be loaded. Open this page through a local web server, such as VS Code Live Server.";
      console.error(error);
    });
}
