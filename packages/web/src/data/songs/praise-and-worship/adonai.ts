import { PageCollectionType } from "../../../pages/private/dashboard/types.d";

const Adonai = {
  alias: "PAW",
  title: "Adonai",
  author: "Hillsong",
  type: PageCollectionType.Song,
  pages: [
    {
      name: "Verse 1",
      pages: [
        { lines: ["I lift my voice", "I lift my praise to You"] },
        { lines: ["I lift my hands", "I lift my worship to You"] },
        { lines: ["And I love You more", "than I can say"] },
        { lines: ["Oh, I love You more", "than I can say"] },
      ],
    },
  ],
};

export const AdonaiShortVer = {
  ...Adonai,
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

export default Adonai;
