# Exercise 4.4 — Load data from CSV

Use a local web server, such as VS Code Live Server, and open [index.html](index.html). Browser security normally blocks `d3.csv()` from reading a local `file://` URL.

The `data/tvBrandCount.csv` file is a byte-identical copy of `Data/tvBrandCount.csv` packaged in the supplied `Week 4/2026 TV Data.knwf`. That archive also contains the raw `Data/tv_2026_02_15.csv`; its CSV Reader points to the raw file. I did not rerun the KNIME workflow or add a CSV Writer node. `js/main.js` converts the `count` column to a number, logs the data and its length/minimum/maximum/extent, sorts by count, and passes the data to `drawBarChart`. This exercise displays the sorted rows; the visual bars are added in Exercise 4.5.
