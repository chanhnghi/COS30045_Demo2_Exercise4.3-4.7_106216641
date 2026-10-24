# Exercise 4.6 — Scaling the bar chart

Use a local web server and open [index.html](index.html). The CSV is a copy of `tvBrandCount.csv` from the Week 4 KNIME workflow.

The `xScale` maps counts into the SVG width; the `yScale` maps brand names to vertical bands. `yScale.bandwidth()` sets each bar's height, and `.padding(0.22)` leaves gaps. The chart resizes with its container because it uses an SVG `viewBox` and a responsive wrapper. Brand labels are covered by the later Exercise 4.7, outside this draft's scope.
