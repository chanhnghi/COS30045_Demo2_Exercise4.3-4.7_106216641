# Exercise 4.5 — Bind data and draw bars

Use a local web server and open [index.html](index.html). The CSV is a copy of `tvBrandCount.csv` from the Week 4 KNIME workflow.

The page uses `selectAll("rect").data(data).join("rect")` to create one SVG rectangle for each brand. Each rectangle has a class associated with its count, a raw count-based width, a fixed height, and a vertical position calculated from its index. Hovering a bar shows its brand and count. The next exercise adds scales.
