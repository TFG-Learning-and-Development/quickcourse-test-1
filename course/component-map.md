# Component Map

This map translates the approved storyboard into the complete single-page course. The storyboard remains the content authority; visual-direction notes and source notes are not learner-facing copy.

| Source section | Learning purpose | Planned presentation | Kit component or ordinary markup | Notes for review |
| --- | --- | --- | --- | --- |
| Welcome to Champion | Orient learners to the course and the two-step learning journey | Clean branded opener followed by a short two-step journey | `MinimalHero`; `TextLayout` with a semantic ordered list | Use the supplied Champion lockup. The course covers Step 1; Step 2 is signposted as later product learning. |
| Meet Champion | Establish the core brand statement and four memorable characteristics | Readable introduction, brand statement, and four visible feature cards beside supplied imagery | `TextLayout`, `TypeText`, `QuickCourseIcon`, semantic articles and figure | Core content stays visible rather than being hidden in an interaction. |
| Why Champion at TFG | Explain the retail relevance of the brand | Short high-emphasis composition field with supporting model image | `TextLayout` with governed surface and semantic figure | Storyboard requests a video, but no video asset or usable video URL is supplied. No substitute content will be invented. |
| Champion Heritage | Help learners remember four concise heritage points and their Customer relevance | Four image-led reveal cards, followed by the supplied brand-book download | `FlipCards`; semantic download link | Each reverse face contains the corresponding “why it matters to Customers” line. Uses supplied history imagery. |
| Champion Brand DNA and Customer Needs | Connect five values with simple Customer needs | Five reveal cards: value on the front, supplied value-to-need explanation on the reverse | `FlipCards` | The Kit has no approved match-pair interaction. Flip Cards preserve the intended value-to-need connection without inventing distractors or scoring. |
| Using Champion Knowledge Every Day | Model short, helpful Customer conversations | Five peer conversation examples in a content carousel | `Carousel` (`content`) | Each slide retains the supplied Customer wording and response. All slides remain semantic and visible without JavaScript/when printed. |
| Closing | Reinforce outcomes and the Champion brand statement | Dark full-width recap field with visible takeaway list, logo, and supplied product image | `TextLayout`, `TypeText`, semantic list and figure | Uses the storyboard’s closing copy and statement without adding completion tracking. |

## Known source and Kit gaps

- No video file, poster, caption, or transcript is present in `public/media/`; the storyboard’s cited SharePoint address is a document-edit URL rather than a supplied video source.
- The pinned Kit has no approved match-the-value component. The approved Flip Card system is the closest governed interaction and presents every supplied pairing accessibly.
- The installed `v1.0.1` Git dependency contains the Kit workbench source but not its generated `manifest.json` or declared release export map. Course implementation is restricted to the components marked Approved with production mappings in that pinned Kit registry.
