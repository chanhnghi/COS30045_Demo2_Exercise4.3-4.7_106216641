# Week 4 draft — review notes

## Ready to review

- Exercise 4.1: a new garden cottage drawn with SVG; `images/coordinates.png` annotates examples of SVG coordinates.
- Exercise 4.2: D3 changes an HTML heading, appends a paragraph, and draws an SVG rectangle. The page now points out these three changes and frames the rectangle more closely.
- Exercise 4.3: D3 creates a responsive SVG and test rectangle. A tighter viewBox and coordinate note make the thin test rectangle easier to identify.
- Exercise 4.4: D3 loads `tvBrandCount.csv`, converts `count` to a number, prints basic statistics to the console, and shows sorted rows.
- Exercise 4.5: D3 binds the CSV rows to SVG rectangles and positions the unscaled bars.
- Exercise 4.6: linear and band scales size and position the bars. The page explains the difference from the raw widths in Exercise 4.5. No hover feature is required or implemented.
- Exercise pages now have previous/next links where applicable, as well as a link to the Demonstration 2 index.

## Items to resolve before submission

1. The Step 5 screenshot for Exercise 4.1 needs to show the **new** cottage SVG beside its DOM in browser Developer Tools. The earlier screenshot belongs to the old draft and was intentionally removed from the page.
2. The CSV used in Exercises 4.4–4.6 is byte-identical to `Data/tvBrandCount.csv` inside the supplied `Week 4/2026 TV Data.knwf` (SHA-256 `2e7af92dfca1d075480417fb95612fec310f0f0683a89b01426ee452330168c3`). The archive also contains raw `Data/tv_2026_02_15.csv`, which its CSV Reader uses. The workflow was not rerun in KNIME here, and no CSV Writer node was added. If the tutor expects that process to be shown, it should be completed and checked in KNIME.

The earlier Exercise 4.1 house draft is already in Git history and is kept by choice. The current page contains the revised cottage.

## How to review

Open `index.html` for the page list. Exercises 4.4–4.6 must be opened through a local web server (for example, VS Code Live Server) because browsers usually block CSV fetching from `file://`. D3 v7 is stored locally in `assets/`.
