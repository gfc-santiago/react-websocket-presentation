import {
  PageCollectionType,
  Presentation,
} from "../pages/private/dashboard/types.d";
import Communion from "./responses/communion";
import PrayerOfDeclaration from "./responses/prayer-of-declaration";
import TFWS_2149 from "./songs/hymn/tfws-2149";
import UMH_64 from "./songs/hymn/umh-64";
import UMH_70 from "./songs/hymn/umh-70";
import UMH_95 from "./songs/hymn/umh-95";
import { GoodbyeYesterdayShortVer } from "./songs/praise-and-worship/goodbye-yesterday";
import SingSingSing from "./songs/praise-and-worship/sing-sing-sing";
import Worthy from "./songs/praise-and-worship/worthy";

const presentation: Presentation = {
  id: "Service",
  items: [
    {
      title: "Intro",
      pages: [
        {
          lines: ["{xs}Announcements:", "{sm}Sis. Elma Oliman"],
        },
        {
          lines: [
            "{sm}Worship Service",
            "{xs}October 6, 2024",
            "{xs}20th Sunday after Pentecost - World Communion sunday",
          ],
        },
        {
          lines: [
            "{sm}Ligthing of the altar and paschal candles",
            "{xs}Acolyte",
          ],
        },
        {
          lines: ["{xs}Introit", "{sm}UMC Daly City Chancel Choir"],
        },
        {
          lines: ["{xs}Prelude", "{sm}Roxanne Sacun", "{xs}Pianist"],
        },
      ],
      type: PageCollectionType.Response,
    },
    UMH_64,
    {
      title: "Pre Worship",
      alias: "Liturgist",
      pages: [
        {
          name: "Call to Worship",
          pages: [
            {
              lines: ["{sm}Norma B. Valle", "{xs}Liturgist"],
            },
            {
              lines: ["Call to Worship"],
            },
            {
              lines: [
                "{xs}Liturgist:",
                "{sm}Family of God, what is our story?",
              ],
            },
            {
              lines: [
                "{xs}People:",
                "{sm}We are part of God’s good creation",
                "{sm}created and sustained by the Triune God.",
              ],
            },
            {
              lines: [
                "{xs}Liturgist:",
                "{sm}Family of God, what is our story?",
              ],
            },
            {
              lines: [
                "{xs}People:",
                "{sm}Though created by our loving God, we have sinned",
                "{sm}and harmed ourselves, one another, and creation.",
              ],
            },
            {
              lines: [
                "{xs}Liturgist:",
                "{sm}Family of God, what is our story?",
              ],
            },
            {
              lines: [
                "{xs}People:",
                "{sm}While we were yet sinners, God sent Jesus to show us",
                "{sm}how to turn away from sin and toward the love of God",
              ],
            },
            {
              lines: [
                "{xs}Liturgist:",
                "{sm}Family of God, what is our story?",
              ],
            },
            {
              lines: [
                "{xs}People:",
                "{sm}We carry the weight of the Word",
                "{sm}in our hearts, our hands, and 	our voices",
              ],
            },
            {
              lines: [
                "{xs}People:",
                "{sm}proclaiming with our lives the good news.",
                "{sm}of God’s love and the mercy of God’s grace",
              ],
            },
            {
              lines: [
                "{xs}Liturgist:",
                "{sm}Family of God, this is our story and our song!",
              ],
            },
          ],
        },
        {
          name: "Opening Prayer",
          pages: [
            {
              lines: ["{sm}Opening Prayer", "Norma B. Valle", "{xs}Liturgist"],
            },
          ],
        },
        {
          name: "Praise & Worship",
          pages: [
            {
              lines: ["Praise & Worship", "{xs}Psalms 108"],
            },
          ],
        },
      ],
      type: PageCollectionType.Response,
    },
    GoodbyeYesterdayShortVer,
    SingSingSing,
    Worthy,
    {
      title: "Service Proper",
      pages: [
        {
          name: "Thanksgiving",
          pages: [
            {
              lines: ["{sm}Sharing of Praises", "{sm}and Thanksgiving"],
            },
            {
              lines: [
                "{sm}Sister Benilda Gayagoy",
                "{xs}Administrative Council Chairperson",
              ],
            },
          ],
        },
        {
          name: "The Lord's Prayer",
          pages: [
            {
              lines: ["The Lord's Prayer"],
            },
            {
              lines: [
                "{sm}Our Father, who art in heaven",
                "{sm}hallowed be thy name.",
              ],
            },
            {
              lines: [
                "{sm}Thy kingdom come,",
                "{sm}Thy will be done on earth as it is in heaven",
              ],
            },
            {
              lines: [
                "{sm}Give us this day our daily bread",
                "{sm}and forgive us our trespasses",
                "{sm}as we forgive those who trespass against us",
              ],
            },
            {
              lines: [
                "{sm}And lead us not into temptation",
                "{sm}but deliver us from evil",
              ],
            },
            {
              lines: [
                "{sm}For thine is the kingdom, and the power",
                "{sm}and glory forever",
              ],
            },
            {
              lines: ["Amen"],
            },
          ],
        },
        {
          name: "Scripture Reading",
          pages: [
            {
              lines: ["{xs}Reading from the scriptures", "{sm}Romans 8:5-17"],
            },
            {
              lines: [
                "{xs}Reader:",
                "{sm}The Word of God for the people of God.",
              ],
            },
            {
              lines: ["{xs}People:", "{sm}Thanks be to God!"],
            },
          ],
        },
      ],
      type: PageCollectionType.Response,
    },
    UMH_70,
    {
      title: "Pre-message",
      pages: [
        {
          name: "The Anthem",
          pages: [
            {
              lines: [
                '{sm}"In Remembrance of our Lord"',
                "{xs}UMC Daly City Chancel Choir",
                "{xs}Rebecca Katigbak-Grear, Conducting",
                "{xs}Roxanne Sacun, Accompanist",
              ],
            },
          ],
        },
      ],
      type: PageCollectionType.Response,
    },
    PrayerOfDeclaration,
    {
      title: "Message",
      pages: [
        {
          name: "Intro",
          pages: [
            {
              lines: [
                "{xs}Today's message:",
                '"Life in The Spirit of God"',
                "{sm}Romans 8:5-17",
              ],
            },
            {
              lines: [
                "{sm}Rev. Oliver S. Mangubat, D.Min.",
                "{xs}UMCDC Administrative Pastor",
              ],
            },
          ],
        },
        {
          name: "Keywords",
          pages: [
            {
              lines: ["1) Focus for our heart."],
            },
            {
              lines: ["2) Focus for our eye."],
            },
            {
              lines: ["3) Focus for our living."],
            },
            {
              lines: ["Focus on the riches found in God."],
            },
            {
              lines: [
                "{xs}Challenge:",
                "{sm}Jesus is not instructing us this way in this passage",
                "{sm}because He wants to punish us.",
              ],
            },
            {
              lines: [
                "{xs}Challenge:",
                "{sm}He doesn't want us to miss out on riches.",
                "{sm}He wants us to see what true riches are.",
              ],
            },
            {
              lines: [
                "{xs}Challenge:",
                "{sm}He wants us to see that love is better,",
                "{sm}peace is better, grace is better, forgiveness is better,",
              ],
            },
            {
              lines: [
                "{xs}Challenge:",
                "{sm}and best of all is adoption into the family of God,",
                "{sm}made possible by His sacrifice on the cross.",
              ],
            },
            {
              lines: [
                "{xs}Challenge:",
                "{sm}He’s showing us something better!",
              ],
            },
          ],
        },
      ],
      type: PageCollectionType.Response,
    },
    {
      title: "Post Message",
      pages: [
        {
          name: "INVITATION TO THE OFFERING",
          pages: [
            {
              lines: ["{sm}INVITATION TO THE OFFERING", "Proverbs 3:9-10 NIV"],
            },
            {
              lines: [
                "{xs}Proverbs 3:9-10 NIV",
                "{sm}Honor the LORD with your wealth",
                "{sm}with the first fruits of all your crops",
              ],
            },
            {
              lines: [
                "{xs}Proverbs 3:9-10 NIV",
                "{sm}then your barns will be filled to overflowing",
                "{sm}and your vats will brim over with new wine",
              ],
            },
            {
              lines: [
                "{sm}The Gathering of Our Tithes and Offerings",
                "{xs}Ushers: Elly Valle and Cris Reyes",
              ],
            },
          ],
        },
      ],
      type: PageCollectionType.Response,
    },
    UMH_95,
    {
      title: "Prayer",
      pages: [
        {
          lines: ["{sm}Prayer", "{xs}(Community in unison)"],
        },
        {
          lines: [
            "{sm}Gracious God, in awe of your omniscience,",
            "{sm}we offer our gifts today",
          ],
        },
        {
          lines: [
            "{sm}Just as you intimately know us,",
            "{sm}help us understand and trust in your vastness",
          ],
        },
        {
          lines: [
            "{sm}As we reflect on our beliefs",
            "{sm}may our stewardship reflect our trust in your guiding hand",
          ],
        },
        {
          lines: [
            "{sm}Guide us to embody our creed",
            "{sm}living as a community of faith in love, service, and action.",
          ],
        },
        {
          lines: ["{sm}Amen"],
        },
      ],
      type: PageCollectionType.Response,
    },
    Communion,
    TFWS_2149,
    {
      title: "Closing",
      pages: [
        {
          name: "Dismissal",
          pages: [
            {
              lines: [
                "{xs}Pastor:",
                "{sm}Beloved, go from this place blessed with divine contentment",
                "{sm}in the deep and beautiful knowledge that in all things",
              ],
            },
            {
              lines: [
                "{xs}Pastor:",
                "{sm}the power of the crucified",
                "{sm}and resurrected Christ dwells in you",
              ],
            },
            {
              lines: [
                "{sm}Let us go, then, separately but together",
                "{sm}remember the three simple rules being a United Methodist.",
              ],
            },
            {
              lines: [
                "{sm}Do no harm. Do good. Stay in love with God",
                "{xs}- John Wesley",
              ],
            },
          ],
        },
        {
          name: "Benediction",
          pages: [
            {
              lines: [
                "{xs}Numbers 6:22-26",
                "{xs}The LORD bless you and keep you;",
                "{xs}the LORD make his face shine on you and be gracious to you;",
                "{xs}the LORD turn his face toward you and give you peace.",
              ],
            },
          ],
        },
        {
          name: "POSTLUDE",
          pages: [
            {
              lines: ["{sm}UMC Daly City Chancel Choir"],
            },
          ],
        },
      ],
      type: PageCollectionType.Response,
    },
  ],
};

export default presentation;
