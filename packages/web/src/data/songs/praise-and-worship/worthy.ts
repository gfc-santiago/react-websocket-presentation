import { PageCollectionType } from "../../../pages/private/dashboard/types.d";

const Worthy = {
  alias: "PAW",
  title: "Worthy",
  author: "Elevation Worship",
  type: PageCollectionType.Song,
  pages: [
    {
      name: "Verse 1",
      pages: [
        {
          lines: [
            "It was my cross You bore",
            "So I could live in the freedom You died for",
          ],
        },
        {
          lines: [
            "And now my life is Yours",
            "And I will sing of Your goodness forevermore",
          ],
        },
      ],
    },
    {
      name: "Chorus",
      pages: [
        {
          lines: [
            "Worthy is Your name, Jesus",
            "You deserve the praise, Worthy is Your name",
          ],
        },
      ],
    },
    {
      name: "Verse 2",
      pages: [
        {
          lines: [
            "And now my shame is gone",
            "I stand amazed in Your love undeniable",
          ],
        },
        {
          lines: [
            "Your grace goes on and on",
            "And I will sing of Your goodness forevermore",
          ],
        },
      ],
    },
    {
      name: "Chorus",
      pages: [
        {
          lines: [
            "Worthy is Your name, Jesus",
            "You deserve the praise, Worthy is Your name",
          ],
        },
      ],
    },
    {
      name: "Bridge",
      pages: [
        {
          lines: [
            "Be exalted now in the heavens",
            "As Your glory fills this place",
          ],
        },
        {
          lines: [
            "You alone deserve our praise",
            "You're the name above all names",
          ],
        },
      ],
    },
  ],
};

export const WorthyShortVer = {
  ...Worthy,
  pages: [
    {
      name: "Verse 1",
      pages: [
        { lines: ["I lift my voice, I lift my praise to You"] },
        { lines: ["I lift my hands, I lift my worship to You"] },
        { lines: ["And I love You more, than I can say"] },
        { lines: ["Oh, I love You more, than I can say"] },
      ],
    },
    {
      name: "Chorus",
      pages: [
        { lines: ["Ever I will sing only You will I adore"] },
        { lines: ["Glorify my Lord, only You will I serve"] },
        { lines: ["For the world will fade away"] },
        { lines: ["Still my song to You remains"] },
        { lines: ["Only You will I adore"] },
      ],
    },
  ],
};

export default Worthy;
