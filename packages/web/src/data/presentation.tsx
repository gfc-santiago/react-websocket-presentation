import {
  PageCollectionType,
  Presentation,
} from "../pages/private/dashboard/types.d";

const presentation: Presentation = {
  id: "Service",
  items: [
    {
      title: "Lighting of candle",
      pages: [
        {
          lines: [
            "Michelle Mangubat",
            "{xs}LIGHTING OF THE ALTAR AND PASCHAL CANDLES",
          ],
        },
        {
          lines: ["Rebeca Grear", "{sm}Prelude"],
        },
      ],
      type: PageCollectionType.Response,
    },
    {
      title: "This is my Father's World",
      author: "UMH #144",
      pages: [
        {
          name: "Verse 1",
          pages: [
            {
              lines: ["This is my Father’s world", "and to my listening ears"],
            },
            {
              lines: [
                "allnature sings, and round me rings",
                "the music of the spheres.",
              ],
            },
          ],
        },
      ],
      type: PageCollectionType.Song,
    },
    {
      title: "Call To Worship",
      author: "UMH #144",
      pages: [
        {
          name: "Verse 1",
          pages: [
            {
              lines: ["This is my Father’s world", "and to my listening ears"],
            },
            {
              lines: [
                "allnature sings, and round me rings",
                "the music of the spheres.",
              ],
            },
          ],
        },
        {
          name: "Verse 2",
          pages: [
            {
              lines: ["This is my Father’s world", "and to my listening ears"],
            },
            {
              lines: [
                "allnature sings, and round me rings",
                "the music of the spheres.",
              ],
            },
          ],
        },
        {
          name: "Verse 3",
          pages: [
            {
              lines: ["This is my Father’s world", "and to my listening ears"],
            },
            {
              lines: [
                "allnature sings, and round me rings",
                "the music of the spheres.",
              ],
            },
          ],
        },
      ],
      type: PageCollectionType.Song,
    },
    {
      title: "Praise",
      author: "Elevation Worship",
      alias: "PAW",
      pages: [],
      type: PageCollectionType.Song,
    },
    {
      title: "Trust In God",
      author: "Elevation Worship",
      alias: "PAW",
      pages: [],
      type: PageCollectionType.Song,
    },
    {
      title: "Genesis 1:1",
      version: "NIV",
      pages: [],
      type: PageCollectionType.Verse,
    },
  ],
};

export default presentation;
