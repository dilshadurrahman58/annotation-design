// data/figures.js
// Source of truth for the gallery dataset.
// A figure can map to multiple considerations.

window.FIGURES = [
  {
    id: "6_WP_LINE",
    title: "Projected cumulative deaths from coronavirus",
    source:
      "The Washington Post [https://www.washingtonpost.com/politics/2020/04/02/grim-death-toll-projections-white-house-offered-monday-have-already-been-revised-upward/]",
    year: 2020,
    chartType: "line",
    annotationTypes: [
      "uncertainty-band",
      "reference-line",
      "value-label",
      "in-chart-label",
    ],
    considerations: ["C2", "C3", "C5"],
    evidenceTags: [
      "uncertainty-band",
      "labeled-reference-lines",
      "in-band-label",
      "typographic-hierarchy",
    ],
    whyShort:
      "The chart encodes uncertainty as a shaded band behind a single thick black curve and labels that band inside the plotting area. It uses three dotted horizontal guides with labels printed directly on the guides, and it bolds the middle value (91,000) so one numeric anchor stands out.",
    evidenceBullets: [
      "A light-gray uncertainty band appears behind the main curve starting around April and widening into May; the word “UNCERTAINTY” is printed inside this gray band in the upper-middle of the plot.",
      "A single thick black curve is drawn on top of the band, making the central trajectory visually darker than the surrounding range.",
      "Three dotted horizontal guide lines run across the plot and each is labeled on the line itself: “40,000” on the lower guide, “91,000” on the middle guide, and “170,000” on the upper guide.",
      "The “91,000” label is bold while “40,000” and “170,000” are lighter weight, so the three guides are not presented with equal emphasis.",
      "All explanatory text is placed on the element it describes (inside the band or on the guide line), with no legend and no leader lines.",
    ],
    perConsiderationWhy: {
      C2: "Hierarchy is established through emphasis and contrast. The thick black curve is the most visually prominent element, so it reads first. The uncertainty band is lighter and recedes behind the curve. Among the three numeric guide labels, “91,000” is bolded, making it the most salient reference level compared to “40,000” and “170,000.”",
      C3: "Placement makes each reference unambiguous. “UNCERTAINTY” is printed inside the shaded band rather than in a separate note, and each numeric value is printed directly on its dotted guide line. This lets the reader link each label to its target by direct contact, without scanning to a legend or following connectors.",
      C5: "The uncertainty information blends with the data depiction as a shaded band behind the curve. The band is part of the plotted layer, and its label is embedded in the band, so uncertainty is communicated through the chart’s visual structure rather than a stand-apart callout box.",
    },
    img: "images/6_WP_LINE.png",
  },

  {
    id: "8_WP_BAR",
    title: "Used cars and trucks drove spring inflation spike",
    source:
      "The Washington Post [https://www.washingtonpost.com/business/2021/10/16/economy-charts-inflation-supply-chain-wages/]",
    year: 2021,
    chartType: "stacked-bar",
    annotationTypes: [
      "callout",
      "arrow",
      "value-label",
      "highlight-segment",
      "in-chart-label",
    ],
    considerations: ["C2", "C3", "C4", "C5"],
    evidenceTags: [
      "stacked-bars",
      "in-chart-baseline-label",
      "in-bar-arrows",
      "color-text-match",
      "top-value-labels",
    ],
    whyShort:
      "The chart encodes the used-vehicle contribution as the colored top segment of each monthly bar and labels the gray baseline directly in the plotting area. Two callouts placed next to the relevant months use color-matched keywords and arrows drawn inside the top segments, making it easy to see which part of the bar each sentence refers to.",
    evidenceBullets: [
      "Each month from Jan. to Sept. is shown as a stacked bar with a light-gray base and a smaller colored segment on top.",
      "A diagonal label across the gray bases reads “INFLATION EXCLUDING USED VEHICLES,” defining the gray portion inside the plot rather than in a legend.",
      "In April, May, and June, the top segments are light yellow and include black upward arrows inside the yellow segment; April and June have the largest upward arrows.",
      "In August and September, the top segments are teal and include black downward arrows inside the teal segment.",
      "A callout placed near the March–April bars says “Used vehicles added 0.3 percentage points to monthly inflation from March to April,” and the word “added” is colored yellow to match the spring top segments.",
      "A callout placed near the August–September bars says “Used vehicle prices fell in Aug. and Sept., reducing inflation,” and the word “reducing” is colored teal to match the late-summer top segments.",
      "Totals are printed above several bars (for example 0.8% above April and 0.9% above June), while the chart does not print separate numeric labels inside the colored segments.",
    ],
    perConsiderationWhy: {
      C2: "Hierarchy follows an attention plan. The totals printed above the bars (for example 0.8% and 0.9%) support quick comparison across months and are the most prominent numbers. The two callout sentences are the only long text and are placed in whitespace so they are easy to read. The diagonal baseline label is smaller and lighter, so it supports decoding without competing with the month totals and callouts.",
      C3: "Placement reduces ambiguity by keeping text and cues next to their targets. The baseline definition is printed directly on the gray bar region. The March–April callout sits next to the March and April bars, and the August–September callout sits next to the August and September bars. The arrows are drawn inside the colored top segments, so the reader can tell that the callouts refer to the top segments rather than the gray base.",
      C4: "Association uses redundant cues. The keyword “added” is colored to match the yellow top segments, and “reducing” is colored to match the teal top segments. This color matching is backed up by placement next to the relevant months and by arrows drawn inside the corresponding segments, so the mapping does not rely on color alone.",
      C5: "The decomposition is carried by the depiction layer: gray base plus colored top segment in each bar. The explanatory sentences are a separate commentary layer placed outside the bars, while the arrows remain inside the segments as an emphasis cue on the data marks.",
    },
    img: "images/8_WP_BAR.png",
  },

  {
    id: "11_WP_LINE",
    title:
      "Hospitalizations and cases break records as the omicron wave continues",
    source:
      "The Washington Post [https://www.washingtonpost.com/health/interactive/2022/omicron-comparison-cases-deaths-hospitalizations/]",
    year: 2022,
    chartType: "multi-series",
    annotationTypes: ["legend", "callout", "leader-line", "shaded-band"],
    considerations: ["C2", "C3", "C5"],
    evidenceTags: [
      "shaded-period-bands",
      "leadered-callouts",
      "wave-labels",
      "legend",
      "typographic-hierarchy",
    ],
    whyShort:
      "The chart marks three named time periods with shaded vertical bands and uses two paragraph callouts with leader lines to attach explanations to specific points on the curves. A compact legend names the three series once, keeping the plotting area free of repeated labels.",
    evidenceBullets: [
      "A compact legend under the title identifies the three lines as Cases (orange), Deaths (dark purple), and Hospitalizations (light purple).",
      "Three light-gray vertical bands span the height of the plot and are labeled at the top as “Jan. 2021 peak” (left), “Delta wave” (middle), and “Omicron wave” (right).",
      "A left-side paragraph callout includes the date “Jan. 11, 2021” and a value, and its curved leader line points to the early peak area within the “Jan. 2021 peak” band.",
      "A right-side paragraph callout says deaths and hospitalizations lag cases, and its curved leader line points to the rising portion of the curves at the start of the “Omicron wave” band on the far right.",
      "Both callouts are placed in whitespace above the lines, so the text does not cover the curves where they overlap and cross around mid-2021.",
    ],
    perConsiderationWhy: {
      C2: "Hierarchy follows an attention plan. The two paragraphs are the largest and most prominent text inside the plotting area, so they act as the primary interpretation layer. The band labels (“Jan. 2021 peak,” “Delta wave,” “Omicron wave”) are smaller and provide secondary structure for scanning the timeline. The legend is smallest and only supports decoding line identity.",
      C3: "Placement makes references explicit. The callouts use curved leader lines because placing paragraph text directly on the peaks would collide with the three lines; each leader lands on the specific point being discussed (left callout to the Jan. 2021 peak region, right callout to the start of the Omicron rise). Series identity is handled with a legend because three in-line labels would be hard to place where the lines run close.",
      C5: "The shaded bands are integrated structure: they sit behind the lines and label time intervals without acting as separate narrative text blocks. The two explanations are stand-apart commentary: they are paragraph text placed outside the line work and connected back to the curves with leaders.",
    },
    img: "images/11_WP_LINE.png",
  },

  {
    id: "12_WP_LINE",
    title: "Fatalities resulting from airstrikes throughout the war in Yemen",
    source:
      "The Washington Post [https://www.washingtonpost.com/investigations/interactive/2022/saudi-war-crimes-yemen/?utm_campaign=wp_main&utm_medium=social&utm_source=twitter]",
    year: 2022,
    chartType: "diverging-bar",
    annotationTypes: ["event-marker", "reference-line", "in-chart-label"],
    considerations: ["C3", "C4", "C6"],
    evidenceTags: [
      "diverging-bars",
      "in-chart-series-labels",
      "time-anchored-event-lines",
      "no-legend",
      "color-and-position-association",
      "annotation-budget",
    ],
    whyShort:
      "The chart labels both measures inside the plot and anchors two event notes to exact dates using vertical marker lines. It leaves the monthly bars unlabeled, so the diverging pattern over time remains readable.",
    evidenceBullets: [
      "The chart uses a diverging baseline: red bars extend upward above the zero line and gray bars extend downward below the zero line across the 2015–2022 x-axis.",
      "Series labels are printed inside the plotting area: “FATALITIES” appears in red above the baseline, and “AIRSTRIKES” appears in gray below the baseline.",
      "A vertical marker line at Oct. 2, 2018 has a stacked, multi-line annotation centered above it (“Oct. 2, 2018 | Journalist Jamal Khashoggi is killed in Saudi Consulate in Istanbul”).",
      "A second vertical marker line at Oct. 7, 2021 has a stacked, multi-line annotation centered above it (“Oct. 7, 2021 | U.N. Human Rights Council ends war crimes probe in Yemen”).",
      "Both event annotations are positioned in the empty space above the bars, so the text does not overlap the bar marks underneath.",
      "No individual month bars have numeric labels; the only text in the data region is the two series labels and the two event annotations.",
    ],
    perConsiderationWhy: {
      C3: "Placement addresses the integration problem by attaching every label to its target. The series names are printed where the bars appear (“FATALITIES” aligned with the red bars above zero and “AIRSTRIKES” aligned with the gray bars below zero), so there is no legend lookup. Each event note is aligned directly above a vertical marker line at its date, so the reader can see exactly which point in time the note refers to.",
      C4: "Association uses redundant cues. Red is used for the upward bars and the “FATALITIES” label, and gray is used for the downward bars and the “AIRSTRIKES” label. The above-versus-below-zero split provides a second cue that distinguishes the two measures even without relying on color.",
      C6: "The annotation budget is small relative to the number of monthly bars. The chart adds two event markers and two in-chart series labels, but it does not label each bar. This avoids turning the long timeline into dense text.",
    },
    img: "images/12_WP_LINE.png",
  },

  {
    id: "14_NYT_SCATTER",
    title: "Obesity was Rising as Ghana Embraced Fast Food. Then Came KFC.",
    source:
      "The New York Times [https://www.nytimes.com/2018/10/16/learning/whats-going-on-in-this-graph-oct-17-2018.html]",
    year: 2018,
    chartType: "scatter",
    annotationTypes: [
      "legend",
      "in-situ-label",
      "leader-line",
      "axis-annotation",
    ],
    considerations: ["C2", "C3", "C6"],
    evidenceTags: [
      "axis-direction-labels",
      "selective-labeling",
      "leader-line",
      "typographic-hierarchy",
      "legend",
    ],
    whyShort:
      "The chart labels only a subset of countries and uses typographic emphasis to make a few names stand out within that set. Most labels sit next to their dots, and one label in the dense center uses a short leader line to show exactly which dot it refers to.",
    evidenceBullets: [
      "A legend at the top maps dot colors to income groups (Lower middle income, Upper middle income, High income).",
      "Large arrowed axis annotations inside the plot explain direction: wealth increases to the right and decreases to the left, and fast food sales increase upward and decrease downward.",
      "Most dots near the center have no labels, keeping the central cluster visible as a distribution rather than as overlapping text.",
      "Several countries are labeled by placing the name next to the dot in open space, including Vietnam (upper-right) and Philippines (right-lower).",
      "In the crowded center region, the label “Morocco” uses a short horizontal leader line from the text to the dot, disambiguating the target among nearby points.",
      "Label styling is mixed: some country names are bold black (e.g., Vietnam, India, Egypt, Philippines, Morocco), while others are lighter gray (e.g., Brazil, Russia, South Africa, Colombia, U.A.E., Peru, United States, Greece), creating a visible foreground–background split among the labeled points.",
    ],
    perConsiderationWhy: {
      C2: "Hierarchy is expressed through typography. A subset of labeled countries uses bold black text, while other labeled countries are rendered in lighter gray. This creates an attention plan within the labeled set by indicating which named points should be noticed first.",
      C3: "Placement makes label-to-point links explicit. Most country names are printed next to their dots. In the dense center region, the “Morocco” label adds a short leader line so the reader can see which dot the name refers to without guessing among nearby points.",
      C6: "The chart uses an annotation budget by labeling only a subset of countries and leaving most dots unlabeled. This reduces label collisions and keeps the overall distribution visible, especially in the central cluster.",
    },
    img: "images/14_NYT_SCATTER.png",
  },

  {
    id: "15_NYT_SCATTER",
    title:
      "Manny Machado Signed a $300 Million Deal: Bryce Harper's Could Be for More, Will They Be Worth It?",
    source:
      "The New York Times [https://www.nytimes.com/2019/04/11/learning/whats-going-on-in-this-graph-april-17-2019.html]",
    year: 2019,
    chartType: "scatter",
    annotationTypes: [
      "in-situ-label",
      "reference-line",
      "shaded-region",
      "highlight-point",
    ],
    considerations: ["C2", "C3", "C6"],
    evidenceTags: [
      "dense-labeling",
      "average-reference-lines",
      "shaded-quadrant",
      "selective-color-highlights",
      "direct-labels",
    ],
    whyShort:
      "Two red dotted “AVERAGE” lines create a quadrant frame and the lower-right quadrant is lightly shaded, giving the scatter a clear reading structure. Player names are printed next to points, with a small subset highlighted in red to stand out from the many gray labels.",
    evidenceBullets: [
      "A red dotted horizontal reference line spans the plot and is labeled on the left as “AVERAGE WAR during these contracts.”",
      "A red dotted vertical reference line spans the plot and is labeled along the bottom as “AVERAGE YEARLY SALARY of these contracts.”",
      "The lower-right quadrant (right of the vertical average line and below the horizontal average line) is filled with a light pink shaded region.",
      "Most points are labeled by printing player names directly next to their dots in small gray text across the chart (e.g., Mike Trout near the top, Max Scherzer and Clayton Kershaw on the right).",
      "A smaller set of points and labels is colored red (e.g., Dustin Pedroia, Kevin Brown, Jose Reyes, Cole Hamels, Yu Darvish, David Price), making those examples visually distinct from the gray-labeled points.",
    ],
    perConsiderationWhy: {
      C2: "Hierarchy is created through a clear attention plan. The two red “AVERAGE” lines and the shaded quadrant provide the primary framing for how to read the scatter. Within the dense set of labeled points, the red-highlighted names form a foreground subset relative to the many gray labels.",
      C3: "Placement makes references explicit without a legend. The “AVERAGE WAR…” and “AVERAGE YEARLY SALARY…” text is printed directly on the dotted lines it describes, and player names are printed adjacent to their dots, so the reader can identify targets without cross-referencing a keyed list.",
      C6: "Even with many labeled points, the chart limits additional annotation devices. It uses two reference lines, one shaded quadrant, and selective highlighting, and it does not add paragraph callouts or per-point value labels. This keeps the dense labeling from becoming a second layer of narrative text.",
    },
    img: "images/15_NYT_SCATTER.png",
  },

  {
    id: "17_NYT_SCATTER",
    title: "Privacy Policies Are a Mess",
    source:
      "The New York Times [https://www.nytimes.com/2020/01/02/learning/whats-going-on-in-this-graph-internet-privacy-policies.html]",
    year: 2020,
    chartType: "scatter",
    annotationTypes: [
      "selective-labeling",
      "reference-line",
      "axis-annotation",
      "in-situ-label",
    ],
    considerations: ["C2", "C3", "C6"],
    evidenceTags: [
      "dense-point-cloud",
      "selective-labeling",
      "halo-markers",
      "reading-level-guides",
      "typographic-hierarchy",
      "deemphasized-context",
    ],
    whyShort:
      "The chart makes a dense scatter readable by labeling only a subset of points and marking those labeled points with rings so they stand out from the background cloud. It also demotes contextual comparisons by rendering them in light gray, while reading-level reference lines provide a small set of thresholds without adding narrative callouts.",
    evidenceBullets: [
      "Most points are shown as small unlabeled black dots, forming a dense cloud across the middle of the chart.",
      "A subset of points is labeled with site names (for example “Airbnb,” “Indeed,” “AT&T,” “N.Y.T.,” “LinkedIn,” “Reddit”), and each labeled site is drawn with a ring around the dot to distinguish it from the unlabeled points.",
      "Horizontal dashed reference lines run across the plot and are labeled on the right as “High school reading level,” “College reading level,” and “Professional career reading level,” providing interpretive thresholds for the y-axis.",
      "An axis cue on the left states “Harder to read” with an upward arrow, clarifying the direction of increasing readability score.",
      "Some comparison items are intentionally de-emphasized: several book titles (for example “Pride and Prejudice,” “Great Expectations,” “Harry Potter and the Sorcerer’s Stone”) and their points are rendered in very light gray rather than black.",
    ],
    perConsiderationWhy: {
      C2: "Hierarchy is created through emphasis and demotion. Labeled websites are the foreground because they use darker text and ringed markers, while most sites remain as unlabeled black dots in the background cloud. The light-gray book titles and their points are visually demoted as secondary context, so they do not compete with the main labeled sites.",
      C3: "When a site is named, the label is printed next to its dot (for example “Airbnb” and “AT&T”), so readers can identify the point without following connectors or matching against a keyed list.",
      C6: "Because the scatter is dense, the chart limits labeling to a subset of points and relies on a few reference-line thresholds for interpretation. This avoids label collisions and keeps the distribution readable on first view.",
    },
    img: "images/17_NYT_SCATTER.png",
  },

  {
    id: "18_NYT_LINE",
    title:
      "Coronavirus cases have far surpassed the rate of new SARS cases in 2003",
    source:
      "The New York Times [https://www.nytimes.com/interactive/2020/world/asia/china-coronavirus-contain.html]",
    year: 2020,
    chartType: "multi-series",
    annotationTypes: [
      "direct-label",
      "callout",
      "leader-line",
      "footnote",
      "axis-note",
    ],
    considerations: ["C1", "C2", "C3"],
    evidenceTags: [
      "direct-series-labels",
      "single-callout",
      "leader-line",
      "defensive-notes",
      "color-contrast",
      "annotation-sparseness",
    ],
    whyShort:
      "The chart establishes a clear comparison by visually prioritizing the Covid-19 curve and labeling both series on the lines. One leadered callout explains a specific jump on the Covid-19 curve, and a visible notes block states counting and definition constraints that matter when the figure is shared on its own.",
    evidenceBullets: [
      "The Covid-19 series is drawn as a thick red curve and labeled “Covid-19” directly on the red line, while the SARS series is drawn as a thin light-gray curve labeled “SARS” near the right end.",
      "A single callout sentence (“Numbers rose drastically after China changed its diagnostic criteria.”) is connected by a short leader line to an open-circle marker on the red curve near the sharp increase.",
      "The open-circle marker on the red curve makes it clear which point the callout refers to, instead of leaving the referent to proximity alone.",
      "The x-axis baseline includes an explanatory note, “The first day that W.H.O. received reports of the outbreaks,” clarifying what the timeline is anchored to.",
      "A multi-line notes block at the bottom states constraints on what is counted and how cases were treated (for example, suspected-but-not-confirmed cases and the meaning of “diagnosis of exclusion”).",
    ],
    perConsiderationWhy: {
      C1: "The chart includes defensive context as text that stays with the graphic: the x-axis note defines what Day 0 means, and the bottom notes block states reporting and definition constraints. Because those notes sit below the plotting area, they are easy to miss or crop when the chart is reposted; without them, viewers could misread the jump on the Covid-19 curve as a purely epidemiological change rather than a reporting/definition change.",
      C2: "Hierarchy is enforced through visual emphasis: the red Covid-19 curve is thicker and more saturated than the gray SARS curve, and the single callout is attached to the red curve. This makes the intended primary comparison (Covid-19’s rise versus SARS) the first thing readers see.",
      C3: "Placement reduces ambiguity by putting series names on the lines (“Covid-19” on the red curve and “SARS” near the gray curve) and by attaching the explanatory sentence to a specific marked point using a short leader line and open-circle target.",
    },
    img: "images/18_NYT_LINE.png",
  },

  {
    id: "24_NYT_BAR",
    title: "Budget Cuts in the G.O.P. Plan",
    source:
      "The New York Times [https://www.nytimes.com/interactive/2023/05/08/upshot/federal-budget-republicans.html]",
    year: 2023,
    chartType: "bar",
    annotationTypes: ["highlight-segment", "event-marker", "in-chart-label"],
    considerations: ["C2", "C3", "C5", "C6"],
    evidenceTags: [
      "projection-boundary",
      "highlight-segment",
      "in-bar-label",
      "typographic-hierarchy",
      "annotation-budget",
    ],
    whyShort:
      "A dashed vertical line labeled “Projected” marks where the historical bars end and the future bars begin. The purple portion of the future bars is labeled “Proposed cuts” inside the bars, and the high-contrast label and color focus attention on the highlighted region.",
    evidenceBullets: [
      "A dashed vertical line at the 2023 position splits the chart into left (historical) and right (future) bars, and the word “Projected” is printed just above that dashed line.",
      "Bars to the right of the dashed line have a purple segment stacked on top of a gray base, while bars to the left are entirely gray.",
      "The text “Proposed cuts” is printed in white inside the purple segments across the projected bars, labeling the highlighted portion directly on the bars.",
      "The “Projected” label is smaller and lighter than the “Proposed cuts” label, and it is placed above the bars rather than inside them.",
      "No individual years are labeled with values and there are no extra callout boxes; the only in-chart text labels are “Projected” and “Proposed cuts.”",
    ],
    perConsiderationWhy: {
      C2: "Hierarchy follows an attention plan. The purple segments are the strongest color on the chart, and the “Proposed cuts” text is high-contrast (white on purple), so this region reads first. The “Projected” label is smaller and lighter, so it functions as secondary structure that explains the split between past and future.",
      C3: "Placement makes references explicit. “Projected” sits on the dashed boundary line that marks the transition, and “Proposed cuts” is printed inside the purple segments it describes. The reader does not need a legend or connectors to match labels to marks.",
      C5: "The emphasis is integrated into the depiction: the cuts are shown as a purple segment within each projected bar, and the label is embedded in that segment rather than placed in a separate callout box.",
      C6: "The annotation budget is small. Across the full timeline, the chart uses one boundary label and one in-bar region label, and it avoids year-by-year labels or additional explanatory notes.",
    },
    img: "images/24_NYT_BAR.png",
  },

  {
    id: "30_NYT_LINE",
    title: "Russia has been restricting gas supplies to Germany",
    source:
      "The New York Times [https://www.nytimes.com/2022/09/07/business/russia-gas-europe.html]",
    year: 2022,
    chartType: "line",
    annotationTypes: ["event-marker", "shaded-band", "callout", "leader-line"],
    considerations: ["C3", "C5", "C6"],
    evidenceTags: [
      "event-callout",
      "shaded-period",
      "leader-line",
      "annotation-budget",
    ],
    whyShort:
      "The chart attaches one dated event note to a specific point on the line and marks a short time window with a labeled shaded band. It uses only these two annotations across the year, keeping the time series readable while still naming the key contextual moments.",
    evidenceBullets: [
      "A callout reading “Feb. 24 Russia invades Ukraine” is placed above the line near late February and uses a short leader line with an arrowhead to point to the line at that date.",
      "A light gray vertical shaded band appears around late July to early August and is labeled “Maintenance shutdowns,” marking that interval directly in the plotting area.",
      "The annotation text is placed in open whitespace above the line, so it does not overlap the red series as the values drop sharply in June and July.",
      "Other months (January through September) have no additional callouts or point labels; the line itself carries the month-to-month variation.",
      "The two annotations are visually different in role: the Feb. 24 note is a point-specific callout, while “Maintenance shutdowns” is an interval label applied to a shaded band.",
    ],
    perConsiderationWhy: {
      C3: "The Feb. 24 annotation is connected to one specific point on the line using a short leader line, and the “Maintenance shutdowns” text is placed on the shaded band that spans the relevant dates. Both placements make it clear exactly which time point or time window each label refers to.",
      C5: "The maintenance period is communicated as an integrated shading layer behind the line, with the label printed on the band. The event explanation remains a separate callout, but it is lightweight and anchored close to its target.",
      C6: "Across the full January–September timeline, the chart uses a minimal annotation set: one point callout and one shaded interval label. It avoids repeated labels, preserving scanability of the line.",
    },
    img: "images/30_NYT_LINE.png",
  },

  {
    id: "31_NYT_LINE",
    title: "Serena Williams’s world ranking since 1998",
    source:
      "The New York Times [https://www.nytimes.com/interactive/2022/08/09/sports/tennis/serena-williams-ranking-tennis-wins.html]",
    year: 2022,
    chartType: "line",
    annotationTypes: ["callout", "leader-line", "highlight-segment"],
    considerations: ["C3", "C5", "C6"],
    evidenceTags: [
      "leadered-callouts",
      "no1-highlight",
      "time-anchored-events",
      "sparse-annotation",
    ],
    whyShort:
      "No. 1 periods are highlighted directly on the ranking trace, and four leadered callouts attach biographical notes to specific years (2002, 2006, 2013–2016, 2017–2018). Most of the timeline is left without text, so the step-like ranking line remains readable across two decades.",
    evidenceBullets: [
      "Orange highlight segments appear when the trace reaches the top line labeled “No. 1,” marking No. 1 periods directly on the data rather than in a separate key.",
      "A callout in the upper-left says she first rose to No. 1 in July 2002 and stayed No. 1 for 49 weeks, and a curved leader line points to the orange segment around 2002.",
      "A callout near the lower-left says her ranking fell below 20 in 2006, and a curved leader line points to the low point around 2006 on the blue trace.",
      "A callout in the upper-right says she stayed No. 1 for 186 consecutive weeks from Feb. 2013 to Sept. 2016, and its leader line points to the long orange segment spanning those years.",
      "A callout near the lower-right says she gave birth in 2017 and returned in 2018, and its leader line points to the break and return around 2017–2018.",
      "The callout text blocks sit in whitespace above or below the plot, while the leader lines land on the trace, so the notes do not cover the ranking steps they reference.",
    ],
    perConsiderationWhy: {
      C3: "Each note is attached to a specific time on the trace using a leader line: the July 2002 note points to the 2002 No. 1 segment, the 2006 note points to the dip below 20, the 2013–2016 note points to the long No. 1 stretch, and the 2017–2018 note points to the break and return. This removes guesswork about which year or segment the text refers to.",
      C5: "The chart uses two visually distinct roles: No. 1 status is integrated into the depiction as orange segments on the ranking trace, while the biographical explanations are stand-apart callout text connected by leaders. This makes it clear which information is encoded in the data marks and which is added commentary.",
      C6: "Only four callouts are used across the full 1998–2022 timeline, and the remaining years are left unlabeled. This keeps annotation count low relative to the time span and avoids turning every rise and fall into a separate note.",
    },
    img: "images/31_NYT_LINE.png",
  },

  {
    id: "33_WSJ_LINE",
    title: "Why you probably work for a giant company",
    source:
      "The Wall Street Journal [https://www.wsj.com/graphics/big-companies-get-bigger/]",
    year: 2017,
    chartType: "multi-series",
    annotationTypes: ["in-situ-label", "callout", "leader-line"],
    considerations: ["C2", "C3", "C4"],
    evidenceTags: [
      "direct-series-labels",
      "arrow-callouts",
      "color-text-match",
      "typographic-hierarchy",
    ],
    whyShort:
      "Two large arrowed sentences state the takeaway and point to specific moments on the timeline, while both lines are identified with in-plot labels colored to match the corresponding series. This avoids legend lookup and makes the text-to-series links checkable on the chart.",
    evidenceBullets: [
      "The light-blue series is labeled directly on the chart as “Small employers (fewer than 100),” with the label placed next to the blue line near the left side of the plot.",
      "The orange series is labeled directly on the chart as “Large employers (2,500 or more),” with the label placed next to the orange line in the lower-left portion of the plot.",
      "A large sentence centered above the lines reads “More Americans used to work at smaller companies than large ones…” and a short downward arrow points from that sentence to the light-blue line around the early-1990s section of the x-axis (near the ’90 tick).",
      "A large sentence on the right reads “…but that’s no longer the case.” and a short upward arrow points from that sentence to the light-blue line near the ’10 tick on the x-axis.",
      "The two series labels use the same colors as their lines (blue label text for the blue line and orange label text for the orange line), and each label is placed adjacent to its line as a second cue.",
    ],
    perConsiderationWhy: {
      C2: "Hierarchy is explicit: the two takeaway sentences are the largest text on the page and sit in open whitespace, so they form the primary reading layer. The in-plot series labels are smaller and serve as secondary decoding support for interpreting the two lines.",
      C3: "Placement addresses the integration problem by attaching words to targets. The series names are printed next to the lines rather than in a separate legend. Each takeaway sentence uses a short arrow to point to a specific time location on the blue line (one arrow near the early-1990s region, one arrow near the ’10 region), so the reader can tell which part of the timeline each sentence refers to.",
      C4: "Association uses a consistent style scheme: the “Small employers” label is colored light blue to match the blue line, and the “Large employers” label is colored orange to match the orange line. Because each label sits next to its line, the mapping is supported by both color and proximity.",
    },
    img: "images/33_WSJ_LINE.png",
  },

  {
    id: "35_WSJ_LINE",
    title: "Employment status of U.S. mothers, change from February 2020",
    source:
      "The Wall Street Journal [https://www.wsj.com/articles/nearly-1-5-million-mothers-are-still-missing-from-the-workforce-11619472229]",
    year: 2021,
    chartType: "small-multiples",
    annotationTypes: [
      "in-situ-label",
      "callout",
      "event-marker",
      "shaded-band",
    ],
    considerations: ["C2", "C3", "C4"],
    evidenceTags: [
      "small-multiples",
      "direct-series-labels",
      "time-anchored-stems",
      "shaded-period",
      "color-text-match",
      "typographic-hierarchy",
    ],
    whyShort:
      "Three large statements provide the main interpretation and each is tied to a specific time in a specific panel using a vertical stem. Group identity is communicated with in-panel labels and consistent line and text styling, so readers do not need a separate legend.",
    evidenceBullets: [
      "The figure is a four-panel small-multiples layout titled “Actively working,” “Unemployed,” “Has job, but on leave,” and “Not in the labor force,” and each panel shows two lines over the same Feb. 2020 to Jan. 2021 x-axis.",
      "In the “Actively working” panel, the two lines are labeled directly in the plot as “Children under 5” (lighter purple) and “School-aged children” (darker purple), with each label placed next to its corresponding line.",
      "Each panel contains a vertical light-gray band labeled “SUMMER MONTHS,” marking the same summer interval in every panel.",
      "Below the “Actively working” panel, the statement “The share of moms with school-aged kids who were actively working plummeted when the pandemic began.” is anchored by a long vertical stem that lands on the sharp drop near Feb. 2020 on the darker-purple line.",
      "Below the “Has job, but on leave” panel, the statement “This summer, the percentage of moms on leave from work peaked.” is anchored by a vertical stem that lands on the tallest spike inside the “SUMMER MONTHS” band in that panel.",
      "To the right of the “Not in the labor force” panel, the statement beginning “Since moms left en masse in April…” is anchored by a vertical stem near the April 2020 region; the phrase “school-aged kids” in that sentence is colored in the same darker purple used for the school-aged line.",
    ],
    perConsiderationWhy: {
      C2: "The three narrative statements are the largest text and sit outside the panels, so they function as the primary reading layer. The in-panel group labels and the “SUMMER MONTHS” labels are smaller and serve as secondary scaffolding that helps interpret the lines after the statements set what to look for.",
      C3: "The figure makes each reference explicit by attaching text to its target. Each statement uses a vertical stem to point to a specific time and panel: the “plummeted” statement points to the Feb. 2020 drop in “Actively working,” the “peaked” statement points to the summer spike in “Has job, but on leave,” and the “left en masse in April” statement points to the April 2020 region in “Not in the labor force.” Group names are printed next to the lines (in the first panel) rather than being listed in a separate legend.",
      C4: "Association uses a consistent style scheme across panels: the lighter-purple line corresponds to “Children under 5” and the darker-purple line corresponds to “School-aged children,” and the in-panel labels use matching colors. In the right-hand statement, “school-aged kids” is colored darker purple to match the school-aged line, adding a redundant cue beyond the stem about which group the sentence refers to.",
    },
    img: "images/35_WSJ_LINE.png",
  },

  {
    id: "39_WSJ_LINE",
    title: "Change in consumer-price index from a year earlier",
    source:
      "The Wall Street Journal [https://www.wsj.com/articles/inflation-rates-fed-11624304034]",
    year: 2021,
    chartType: "time-series",
    annotationTypes: [
      "threshold-line",
      "area-fill",
      "callout",
      "leader-line",
      "reference-line",
    ],
    considerations: ["C3", "C4", "C5", "C6"],
    evidenceTags: [
      "two-percent-threshold",
      "above-below-fill",
      "in-area-labels",
      "color-text-match",
      "endpoint-value-callout",
      "annotation-budget",
    ],
    whyShort:
      "The chart treats 2% as a key reference by switching both fill and line color above versus below that level, and it labels those two states directly inside the plot. A single right-edge callout labels the latest value (May 2021) without adding repeated point labels across the decades.",
    evidenceBullets: [
      "A horizontal boundary at the 2% level is used as the split point: the filled area is magenta when the series is above 2% and blue when the series is below 2%.",
      "The label “Periods when inflation was above 2%” appears in the upper middle of the plot, with a small black dot and short leader line pointing into the magenta-filled region; the words “above 2%” are colored magenta.",
      "The label “Periods when inflation was below 2%” appears near the lower left of the plot, with a small black dot and short leader line pointing into the blue-filled region; the words “below 2%” are colored blue.",
      "The line itself switches color with the same rule: magenta segments appear when the series is above 2% and blue segments appear when it is below 2%, matching the fill colors.",
      "On the far right, a callout reads “MAY 2021 5.0% annual inflation” and a curved leader line points to the last plotted value; a dotted horizontal reference line extends across the chart at that same height.",
    ],
    perConsiderationWhy: {
      C3: "The two state labels are placed inside the plot and each is explicitly attached to its target region using a dot and a short leader line (one points into the magenta area above 2%, one points into the blue area below 2%). The “MAY 2021 5.0% annual inflation” label is attached to the final value with a curved leader line, so readers can identify the exact point being labeled.",
      C4: "Association uses a consistent style scheme: magenta is used for the above-2% line segments, the above-2% fill, and the words “above 2%” (and the 5.0% callout text); blue is used for the below-2% line segments, the below-2% fill, and the words “below 2%.” These color cues are backed up by non-color cues, including whether the series sits above or below the 2% boundary and leader lines that point into the intended region.",
      C5: "The meaning of ‘above 2%’ versus ‘below 2%’ is carried by depiction layers inside the chart (fill plus line-color switching around the 2% boundary), rather than by a separate legend or an external text panel. The explanatory labels are placed next to the filled regions they describe, keeping the interpretation tied to the marks.",
      C6: "Across the full 1950–2021 span, the chart uses a small, stable set of annotations: two in-area state labels and one endpoint value callout. It does not label intermediate points year by year, which keeps the long series readable.",
    },
    img: "images/39_WSJ_LINE.png",
  },

  {
    id: "40_WSJ_BAR",
    title: "Change in consumer-price index from a year earlier",
    source:
      "The Wall Street Journal [https://www.wsj.com/articles/inflation-rates-fed-11624304034]",
    year: 2021,
    chartType: "waterfall",
    annotationTypes: [
      "callout",
      "leader-line",
      "threshold-line",
      "pattern-encoding",
      "legend",
      "endpoint-label",
    ],
    considerations: ["C3", "C4", "C5", "C6"],
    evidenceTags: [
      "2pct-target-line",
      "leadered-callouts",
      "rise-fall-encoding",
      "hatching",
      "endpoint-label",
      "annotation-budget",
    ],
    whyShort:
      "The chart uses two leadered callouts to explain specific steps, while a dotted 2% target line provides a persistent reference for whether the cumulative level is above or below target. Step direction is communicated with redundant style cues (solid vs hatched), and only the final value is labeled explicitly on the right.",
    evidenceBullets: [
      "A dotted horizontal reference line labeled “Target rate: 2%” runs across the plot, providing a fixed benchmark for reading the cumulative level.",
      "The legend at the top distinguishes step direction: a solid pink style indicates “Inflation rose” and a hatched pink style indicates “Inflation fell.”",
      "Two multi-sentence callouts sit above the steps and each uses a curved leader line that lands on a specific step segment (one callout near the early-2020 drop and one callout near the early-2021 rise).",
      "The left callout states that inflation slumped at the onset of the pandemic and points to the March drop step that pulls the cumulative level below the 2% line.",
      "The right callout states that March 2021 prices were high relative to 2020’s slump and points to a later step that boosts the cumulative level above the 2% line.",
      "At the far right, an endpoint label reads “MAY 2021 5.0% annual inflation” and an arrow points to the top of the final bar, instead of labeling intermediate steps.",
    ],
    perConsiderationWhy: {
      C3: "Placement makes each explanation checkable. The two narrative callouts are connected by curved leader lines to the exact steps they describe (the March 2020 drop step and the later rise step near 2021), so readers do not have to guess which segment the text refers to. The 5.0% label is placed outside the plot and uses an arrow to attach to the final bar height.",
      C4: "The rise/fall encoding is not color-only. The chart uses a legend plus pattern differences (solid fill for rises and diagonal hatching for falls) to associate each step with its direction, which still works when adjacent steps share similar color.",
      C5: "The 2% benchmark is integrated into the chart as a dotted reference line that the steps cross above and below, rather than being described only in prose. The explanatory text remains a separate callout layer placed in whitespace above the steps.",
      C6: "Annotation amount is restrained: the chart uses two explanatory callouts and one endpoint value label, rather than labeling every month or every step. The step sequence remains readable because most segments carry no text.",
    },
    img: "images/40_WSJ_BAR.png",
  },

  {
    id: "52_NYT_BAR",
    title: "Does India stand to reap a “demographic dividend”?",
    source:
      "The New York Times [https://www.nytimes.com/interactive/2023/04/19/world/asia/india-china-population.html]",
    year: 2023,
    chartType: "population-pyramid",
    annotationTypes: ["callout", "leader-line", "highlight-text"],
    considerations: ["C2", "C3", "C4"],
    evidenceTags: [
      "side-by-side-comparison",
      "between-panel-callouts",
      "curved-leader-lines",
      "color-text-match",
      "age-threshold-shading",
    ],
    whyShort:
      "Two short callouts placed between the pyramids state the under-50 comparison and each uses a curved leader line to point into the intended panel near the age-50 boundary. The country words in the callouts are colored to match the corresponding pyramid, and the bars change shading around the 50+ age bands to support the same split visually.",
    evidenceBullets: [
      "The figure contains two population pyramids placed side by side: an orange pyramid on the left and a teal pyramid on the right. Each pyramid is split into Male (left half) and Female (right half), with age bands listed from 0–4 at the bottom to 100+ at the top.",
      "In the center gap between panels, the upper callout reads “Nearly 80% of India’s population is younger than 50.” The word “India” is colored orange to match the left pyramid.",
      "A curved leader line from that India callout points left into the orange pyramid, landing near the mid-height transition where the bar shading shifts between the 45–49 and 50–54 age bands.",
      "Below it, a second callout reads “Fewer than two-thirds of Chinese people are younger than 50.” The word “Chinese” is colored teal to match the right pyramid.",
      "A curved leader line from the China callout points right into the teal pyramid, landing near the same mid-height transition between the 45–49 and 50–54 age bands.",
      "In both panels, bars for younger ages are rendered in a more saturated color, while bars for older ages are lighter. The change happens at the same age-band boundary that the two leader lines point to.",
      "No explanatory text is placed inside the bars; the only comparative statements are the two between-panel callouts plus the standard axis and “Male/Female” labels.",
    ],
    perConsiderationWhy: {
      C2: "Hierarchy follows an attention plan: the two between-panel callouts are the only full-sentence annotations and they sit in the open whitespace between the pyramids, so they read as the primary interpretation layer. The pyramids then serve as the evidence that supports those two sentences.",
      C3: "Placement addresses the integration problem for a two-panel comparison. Because the callouts sit between the panels, each sentence uses a curved leader line to attach to the intended pyramid and to the specific under-50 boundary region (the shading break between 45–49 and 50–54), so the reader does not have to guess which panel or which age cutoff the sentence refers to.",
      C4: "Association uses a redundant scheme. The country word in each callout matches the panel color (orange “India,” teal “Chinese”), and the leader line provides a non-color cue by physically connecting the sentence to the correct panel and the relevant age-band boundary.",
    },
    img: "images/52_NYT_BAR.png",
  },

  {
    id: "57_ECO_LINE",
    title: "Viewers of the 8pm weekday slot",
    source:
      "The Economist [https://www.economist.com/graphic-detail/2023/05/16/sacking-tucker-carlson-has-put-a-dent-in-fox-newss-ratings]",
    year: 2023,
    chartType: "multi-series",
    annotationTypes: ["in-situ-label", "event-marker", "callout"],
    considerations: ["C2", "C3", "C4"],
    evidenceTags: [
      "direct-series-labels",
      "time-anchored-stems",
      "selective-event-callouts",
      "color-text-match",
      "typographic-hierarchy",
    ],
    whyShort:
      "The chart labels each network directly on its line using matching color, and it uses a small set of event callouts with short stems to point to specific dates. The largest callouts are attached to the tallest spikes, creating a clear reading order.",
    evidenceBullets: [
      "Network names are printed on the plot next to their lines in matching colors: Fox (red), MSNBC (light blue), CNN (dark blue), and Newsmax (pink).",
      "On the left side, “Donald Trump arraigned” is placed next to the tallest peak on the red Fox line and is connected to that peak with a short stem.",
      "In the April 2023 section, “Carlson interviews Trump” is connected by a short stem to a smaller bump on the red Fox line.",
      "Near late April 2023, “Carlson sacked” is connected by a short stem to a point on the red Fox line.",
      "On the right side in May 2023, “Trump’s ‘town-hall’ interview on CNN” is connected by a short stem to the tallest peak on the dark-blue CNN line.",
      "The Fox label is larger and more prominent than the other network labels, matching the visual dominance of the red line’s peaks.",
    ],
    perConsiderationWhy: {
      C2: "Hierarchy is created by label emphasis and placement. The biggest event label (“Donald Trump arraigned”) sits at the tallest spike in the chart, and the CNN town-hall label sits at the single tall CNN spike. Smaller event notes point to smaller changes. The Fox series label is also more prominent than the others, reinforcing which series dominates the display.",
      C3: "Placement makes each reference unambiguous. Network names are printed next to their lines, and every event note uses a short stem that lands on one specific point on one specific line.",
      C4: "Association uses a consistent scheme. Each network name matches its line color and is placed adjacent to the line, and the event stems touch the colored line at the referenced point, providing a second cue beyond color.",
    },
    img: "images/57_ECO_LINE.png",
  },

  {
    id: "61_ECO_BAR",
    title:
      "Against the grain, Ukraine, selected food exports to neighbouring countries",
    source:
      "The Economist [https://www.economist.com/graphic-detail/2023/04/27/charting-ukraines-soaring-exports-to-the-eu]",
    year: 2023,
    chartType: "stacked-bar",
    annotationTypes: [
      "legend",
      "event-marker",
      "callout",
      "footnote",
      "source-note",
    ],
    considerations: ["C1", "C3", "C4"],
    evidenceTags: [
      "stacked-bars",
      "legend",
      "time-anchored-markers",
      "scope-footnote",
      "color-swatch-key",
    ],
    whyShort:
      "The chart makes the main decoding information visible on the figure: a footnote defines the asterisked scope, a legend maps five colors to commodities, and two labeled vertical markers attach context to specific points on the time axis. The bars themselves remain unlabeled, so these annotations carry the interpretation support.",
    evidenceBullets: [
      "In the upper-left, a legend lists five commodities with colored swatches: Rapeseed, Sunflower seeds, Sunflower oil, Wheat, and Maize; those swatches match the colors used in the stacked bar segments.",
      "The title includes an asterisk after “neighbouring countries*,” and a bottom-right footnote spells out the set of countries included: “Poland, Hungary, Slovakia, Bulgaria and Romania.”",
      "A thin vertical marker line near the transition into 2022 is labeled “Russia invades Ukraine”; the label sits above the bars and is connected to the marker with a small dot at the line.",
      "A second vertical marker line later in 2022 is labeled “Creation of ‘solidarity corridors’ for transporting grain”; the label is placed near the top of the chart and aligned to that vertical line.",
      "Individual stacked bars do not have segment labels or per-bar totals; interpretation relies on the stack colors (decoded via the legend) and the two time markers (decoded via the event labels).",
      "A source note (“Source: UN Comtrade”) is printed at the bottom left, outside the plotting area.",
    ],
    perConsiderationWhy: {
      C1: "The asterisked footnote defines what “neighbouring countries*” means by listing the countries on the figure itself. Because this scope text sits with the chart (not only in surrounding prose), readers who encounter the chart as a screenshot can still tell what geography the totals refer to.",
      C3: "This is a five-category stacked bar chart repeated across many months, so placing text next to each colored segment would be unstable and crowded. The chart uses a legend for category mapping, and it uses vertical marker lines with on-chart labels to attach the two contextual statements to specific positions on the time axis rather than leaving timing to inference.",
      C4: "Category association is defined by an explicit color-swatch scheme: each commodity name in the legend has a colored swatch that matches the corresponding stacked segments in the bars. This provides a direct, checkable mapping from color to category.",
    },
    img: "images/61_ECO_BAR.png",
  },

  {
    id: "65_ECO_BAR",
    title: "A new study of studies reignites controversy over mask mandates",
    source:
      "The Economist [https://www.economist.com/graphic-detail/2023/04/04/a-new-study-of-studies-reignites-controversy-over-mask-mandates]",
    year: 2023,
    chartType: "forest-plot",
    annotationTypes: [
      "uncertainty-interval",
      "reference-line",
      "callout",
      "leader-line",
      "legend",
      "table-columns",
      "section-label",
      "footnote",
    ],
    considerations: ["C1", "C2", "C3"],
    evidenceTags: [
      "forest-plot-intervals",
      "one-x-reference",
      "directional-axis-text",
      "confidence-key",
      "illness-key",
      "row-attached-callouts",
      "section-divider",
      "typographic-hierarchy",
    ],
    whyShort:
      "The figure keeps a dense forest plot interpretable by putting decoding keys on the graphic (direction around 1x, confidence key, and illness key) and by attaching a small number of boxed callouts to specific study rows. This sets an attention plan without breaking row alignment.",
    evidenceBullets: [
      "Each row is a study with a printed study name in the left column (e.g., “Cowling 2008,” “MacIntyre 2009,” “Abaluck 2022”) and a sample-size indicator in the next column (including a very large circle labeled “336k” for the Abaluck 2022 row).",
      "A vertical reference line is drawn at 1x, and the header labels the interpretation on both sides: “Mask guidance reduces risk” on the left and “Mask guidance increases risk” on the right.",
      "A legend at the top left labeled “Higher confidence in estimate” shows a color scale, explaining why some rows have stronger colored emphasis than others.",
      "A key at the top right labeled “Illness” defines letter codes shown on the right side of the rows (L = confirmed in lab, S = self-reported).",
      "Several boxed callouts appear in the middle of the chart (e.g., an “Australian households…” note, a “Beijing…” note, a “Bangladesh…” note) and each box uses a curved leader line that lands on one specific study row.",
      "A section label “Covid-19 studies” appears near the lower left with a divider, separating the bottom rows from the earlier studies as a distinct block.",
    ],
    perConsiderationWhy: {
      C1: "The graphic includes a defensive decoding layer that remains visible when the figure is shared: the 1x reference line plus the “reduces risk / increases risk” header defines how to read left versus right, the “Higher confidence in estimate” legend explains the confidence styling, and the “Illness” key defines the L/S codes printed on the right of each row. These elements reduce the need to infer conventions that would otherwise be unstated in a screenshot.",
      C2: "Hierarchy is created by selective emphasis. Only a small number of studies receive boxed callouts, so those rows become primary reading targets within the dense list. The very large “336k” sample-size marker and the “Covid-19 studies” section label further draw attention to the bottom block as a focal subset.",
      C3: "The chart uses different placement strategies for different needs. Row identity (study name) and sample size are placed directly in adjacent table columns because they are needed for every row. For explanatory notes, adjacency would collide with other rows, so the chart uses curved leader lines to attach each callout box to one specific row. For global mappings (confidence styling and the L/S illness codes), it uses compact keys because repeating those explanations per row would be unstable and cluttered.",
    },
    img: "images/65_ECO_BAR.png",
  },

  {
    id: "67_ECO_LINE",
    title: "United States, deaths of despair per 100,000 people",
    source:
      "The Economist [https://www.economist.com/graphic-detail/2023/02/27/places-with-high-religious-participation-have-fewer-deaths-of-despair]",
    year: 2023,
    chartType: "multi-series",
    annotationTypes: [
      "in-situ-label",
      "callout",
      "event-marker",
      "trend-line",
      "shaded-band",
      "footnote",
    ],
    considerations: ["C1", "C2", "C3", "C5"],
    evidenceTags: [
      "numbered-callouts",
      "time-anchored-stems",
      "direct-series-labels",
      "event-line",
      "dashed-reference-trend",
      "shaded-interval",
      "definition-footnote",
      "typographic-hierarchy",
    ],
    whyShort:
      "Two numbered statements act as the main reading layer and each is tied to a specific year with a vertical stem. Series identity and reference context are kept inside the plot using in-line series labels, a labeled event line, and a labeled dashed reference trend, with a footnote defining the starred term in the title.",
    evidenceBullets: [
      "A large callout labeled “1.” on the left reads “Deaths of despair were declining until the opioid epidemic hit,” and a vertical stem drops from that text to the left side of the timeline near 1979–1980.",
      "A large callout labeled “2.” near the middle reads “The downward trend ended earlier among middle-aged whites,” and a vertical stem drops to the teal line in the late-1990s region (just before the 2000 tick).",
      "The teal line is labeled directly on the line near the upper-right as “Whites aged 45–64,” and the dark-blue line is labeled on the line near the right side as “All,” so the chart does not use a legend for series identity.",
      "A thin vertical marker line near the mid-1990s has the label “OxyContin painkiller introduced” printed above it in light gray, aligned to that vertical line.",
      "A light gray shaded vertical band sits behind the line work around the late-1990s region (roughly between the mid-1990s and 2000 ticks), visually setting off that interval from the rest of the background.",
      "A dashed dark-blue line with an arrow runs along the lower part of the chart and is labeled “Pre-1990s trend,” distinguishing it from the solid dark-blue “All” line.",
      "A footnote at the bottom right defines the asterisk in the title (“*Suicide, drug overdoses or alcohol-related”), specifying what “deaths of despair*” includes.",
    ],
    perConsiderationWhy: {
      C1: "The chart defines the starred term in the title using a footnote (“*Suicide, drug overdoses or alcohol-related”). Because the definition is printed on the graphic, a reader who encounters the chart without surrounding text can still tell what is included in “deaths of despair*.”",
      C2: "Hierarchy follows an attention plan: the numbered callouts “1.” and “2.” are the largest, boldest text and sit in open whitespace, so they read first. The in-line series labels (“Whites aged 45–64” and “All”) and the lighter reference labels (“OxyContin painkiller introduced” and “Pre-1990s trend”) are secondary and support decoding after the callouts establish the main points.",
      C3: "Placement makes each reference checkable. The two numbered statements use vertical stems to point to specific years on the timeline (one near 1979–1980, one near the late 1990s), which avoids guessing which part of the lines the text refers to. Series names are printed directly on their lines, and the event label is aligned to its vertical marker line, so the reader does not have to match text to targets using a separate key.",
      C5: "The chart keeps reference context as integrated layers inside the plotting region: a vertical event line labeled “OxyContin painkiller introduced,” a dashed “Pre-1990s trend” line, and a shaded vertical band around the late-1990s interval. The numbered statements are styled as stand-apart commentary blocks and connected by stems, making it clear which elements are data/structure layers and which are explanatory text.",
    },
    img: "images/67_ECO_LINE.png",
  },

  {
    id: "70_ECO_LINE",
    title: "Ice, ice maybe? Antarctic sea-ice extent",
    source:
      "The Economist [https://www.economist.com/graphic-detail/2023/02/20/sea-ice-in-antarctica-is-at-its-lowest-ever-level-again]",
    year: 2023,
    chartType: "small-multiples",
    annotationTypes: [
      "comparison-band",
      "reference-lines",
      "direct-label",
      "leader-line",
      "highlight-series",
    ],
    considerations: ["C3", "C4", "C5", "C6"],
    evidenceTags: [
      "two-panel-layout",
      "historical-band",
      "reference-curves",
      "in-chart-labels",
      "accent-series",
      "leader-line",
      "annotation-budget",
    ],
    whyShort:
      "The figure labels the historical context directly on the left panel (average band, minimum, maximum) and labels the focal year by drawing it in red and writing “2023” next to the red line. It keeps annotation sparse by avoiding point-by-point labels in both panels.",
    evidenceBullets: [
      "The figure has two panels: the left panel is titled “Five-day average” and spans Jan–Mar on the x-axis; the right panel is titled “January average” and spans 1979–2023 on the x-axis.",
      "In the left panel, a gray shaded band surrounds a thicker gray curve, and a label reading “1980–2022 average, with standard deviation” is placed in the upper-left with a leader line pointing into the shaded band.",
      "In the left panel, two thin gray curves are labeled on the right side: “Maximum” is printed near the upper thin curve and “Minimum” is printed near the lower thin curve, with each label placed adjacent to its curve.",
      "In the left panel, the focal year is drawn as a thick red line and labeled “2023” in red near the left side of the plot, close to the red trace.",
      "In the right panel (“January average”), the series is shown as a single red line without per-year value labels; there are no callouts attached to individual years.",
    ],
    perConsiderationWhy: {
      C3: "The chart uses adjacency when it is unambiguous and connectors when it is not. “Maximum” and “Minimum” are printed right next to their thin gray curves on the right side of the left panel. The “1980–2022 average, with standard deviation” label uses a leader line into the shaded band because the band and the average curve occupy the same space, and the leader line makes it clear the label refers to the banded region.",
      C4: "Association follows a consistent style scheme: the focal year is encoded in red and the text label “2023” is also red, while the historical context (band, average curve, min and max curves) is rendered in gray. The mapping does not rely on color alone because the 2023 line is also thicker than the gray reference curves and is explicitly labeled.",
      C5: "Historical context is conveyed as integrated depiction layers in the left panel: a shaded band, a central average curve, and separate min and max curves. These layers blend with the chart rather than appearing as separate boxed commentary; the labels sit on the layers they describe.",
      C6: "The annotation budget is small relative to the number of time points. The figure labels the band, the min and max curves, and the highlighted 2023 line, but it does not label daily values in the left panel or yearly values in the right panel. This keeps both panels readable while still indicating what each reference layer represents.",
    },
    img: "images/70_ECO_LINE.png",
  },
];
