// data/considerations.js
// Source of truth for C1–C6 definitions used in UI tooltips and drawer blocks.
// These are practice-grounded considerations (decision points and trade-offs), not rules.

window.CONSIDERATIONS = [
  {
    id: "C1",
    img: "considerations/1-audience.png",
    short: "Audience: Tailor annotations to audience knowledge and stakes.",
    long: "Start by specifying the audience and what they must extract from the chart. When misinterpretation would be costly, or when the chart may be reused or shared without its surrounding text, place only the claim plus critical assumptions, caveats, or context directly on the chart. Keep these defensive notes short and stable so they do not reduce scanability or create maintenance burden.",
  },
  {
    id: "C2",
    img: "considerations/2-hierarchy.png",
    short: "Hierarchy: Create hierarchy among multiple annotations.",
    long: "Treat multiple annotations as an attention plan anchored in the data. Choose one primary annotation and give it the strongest placement and emphasis so it is read first. Keep remaining annotations consistently secondary through lighter styling and reduced salience. If any secondary annotation competes with the primary or disrupts the reading order, remove it, merge it, or restyle it.",
  },
  {
    id: "C3",
    img: "considerations/3-associate-placement.png",
    short:
      "Associate placement: Place annotation text next to data before using connectors or legends.",
    long: "Treat placement as an integration problem: viewers must associate words with specific marks or regions, and separation increases search and association effort. Annotate the highest-priority targets next to the data when feasible. When proximity is not feasible, use short, uncrossed connectors or a single enclosure to keep mapping unambiguous. Use a key or legend only when distance, interaction, or quantity makes direct attachment unstable, and order it to match the chart’s reading order.",
  },
  {
    id: "C4",
    img: "considerations/4-association.png",
    short:
      "Associate style: Use color and style to associate the label with the data element.",
    long: "Treat annotation–target association as a deliberate scheme. Use color matching only when categories remain clearly discriminable, and pair it with a non-color cue such as proximity, a connector tick/line, a swatch, or an enclosure. Keep text legible with sufficient contrast, and avoid color-matched text on filled marks when it reduces readability.",
  },
  {
    id: "C5",
    img: "considerations/5-cohesion.png",
    short:
      "Cohesion: Decide whether annotations blend with or stand apart from data.",
    long: "Decide the role of each annotation before styling it. Use an integrated style for annotations that should read as part of the chart. Use a distinct style for annotations that should read as added context, but keep that style visually subordinate to the data. Reuse these layer styles across related charts so readers can recognize the layers quickly and revisions remain manageable.",
  },
  {
    id: "C6",
    img: "considerations/6-amount.png",
    short:
      "Amount: Scale annotation count to chart clarity and available space.",
    long: "Decide an annotation budget for the chart’s intended viewing context. Keep only the annotations that must stay visible to deliver the main claim on first view, and push secondary detail to interaction or surrounding text. Use an additive approach (add until it feels busy) or a subtractive approach (annotate broadly then prune), then remove, merge, or demote annotations until scanning remains effortless.",
  },
];
