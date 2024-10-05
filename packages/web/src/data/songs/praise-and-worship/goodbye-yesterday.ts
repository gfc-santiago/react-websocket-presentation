import { PageCollectionType } from "../../../pages/private/dashboard/types.d";

const GoodbyeYesterday = {
  alias: "PAW",
  title: "Goodbye Yesterday",
  author: "Elevation Rhythm, Gracie Binion",
  type: PageCollectionType.Song,
  pages: [
    {
        name: "Verse 1",
        pages: [
          { lines: ["Goodbye yesterday", "I'm living in the light of a new day"] },
          { lines: ["I won't waste another minute in my old ways", "Praise the Lord I've been born again"] },
        ],
      },
      {
        name: "Chorus",
        pages: [
          { lines: ["Again and again and again and again", "You rescued me out of the mess I was in"] },
          { lines: ["Traded my sorrow for something to sing", "I'm dancing on the grave that I once lived in"] },
        ],
      },
  ],
};

export const GoodbyeYesterdayShortVer = {
  ...GoodbyeYesterday,
  pages: [
    {
      name: "Verse 1",
      pages: [
        { lines: ["Goodbye yesterday", "I'm living in the light of a new day"] },
        { lines: ["I won't waste another minute in my old ways", "Praise the Lord I've been born again"] },
      ],
    },
    {
      name: "Chorus",
      pages: [
        { lines: ["Again and again and again and again", "You rescued me out of the mess I was in"] },
        { lines: ["Traded my sorrow for something to sing", "I'm dancing on the grave that I once lived in"] },
      ],
    },
  ],
};

export default GoodbyeYesterday;
