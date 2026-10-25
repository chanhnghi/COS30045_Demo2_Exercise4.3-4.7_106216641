# Demonstration 2 review notes

The hub in `hub.html` links to the four coursework pages for Weeks 4–6. Open it through VS Code Live Server; the D3 charts load local CSV files and cannot load them reliably from a `file://` page. The root `index.html` is the Exercises 4.3–4.7 bar chart.

## Items to check with Chau Chanh Nghi

- **Exercise 5.3 size groups:** The donut chart now uses `exercise-5/data/tv_2026_02_15.csv`, filtered to available TVs sold in Australia. Converting `screensize` from centimetres to inches and grouping as `Small < 42`, `Medium 42–65`, and `Large > 65` reproduces the class screenshot exactly: 770, 2386, and 1352 models. The KNIME expression itself was not visible, so confirm the precise boundary rule if it becomes available.
- **Exercise 5.1 source data:** The 55-inch screen technology summary still uses the supplied Week 6 `Ex6_TVdata_withStar.csv`. Confirm whether the Week 5 class requires a distinct source table or KNIME aggregation before submission.
- **Exercise 4.3–4.7 source data:** The brand count CSV was copied from the earlier Week 4 work. Confirm it matches the output of the supplied `2026 TV Data.knwf` workflow.
- **Hosting/navigation:** The local hub links to the sibling repositories for Exercises 4.1, 5, and 6. Open the parent `Github_Repos` folder with Live Server to preview those links. Replace these local links with the final Mercury website URLs and test all four pages and the hub before submission.
- **Repository review:** GitHub Classroom links are unavailable; the four personal repositories are used instead. Review the Week 4 bar chart and hub before their final update.

## Current folder mapping

| Folder | Intended repository |
| --- | --- |
| `exercise-4-1` | `COS30045_Demo2_Exercise4.1_106216641` |
| Root `index.html` and `hub.html` | `COS30045_Demo2_Exercise4.3-4.7_106216641` |
| `exercise-5` | `COS30045_Demo2_Exercise5_106216641` |
| `exercise-6` | `COS30045_Demo2_Exercise6_106216641` |

Exercise 4.2 remains in the local legacy backup as an optional learning step. The four demonstration pages follow the assessment's four listed deliverables.
