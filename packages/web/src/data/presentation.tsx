import {
  PageCollectionType,
  Presentation,
} from "../pages/private/dashboard/types.d";
import UMH_593 from "./songs/hymn/umh-593";
import UMH_73 from "./songs/hymn/umh-73";
import { AdonaiShortVer } from "./songs/praise-and-worship/adonai";
import OComeToTheAltar from "./songs/praise-and-worship/o-come-to-the-altar";
import SingSingSing from "./songs/praise-and-worship/sing-sing-sing";

const presentation: Presentation = {
  id: "Service",
  items: [
    {
      title: "Intro",
      pages: [
        {
          lines: ["{xs}Announcements:","{sm}Sis. Elma Oliman"],
        },
        {
          lines: [
            "{sm}Worship Service",
            "{xs}September 29, 2024",
            "{xs}19th Sunday after Pentecost",
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
    UMH_73,
    {
      title: "Pre Worship",
      alias: "Liturgist",
      pages: [
        {
          name: "Call to Worship",
          pages: [
            {
              lines: [
                "{xs}Liturgist:",
                "{sm}Children of God, you are welcome here.",
              ],
            },
            {
              lines: [
                "{xs}Liturgist:",
                "{sm}All of who you are even your regrets and failing",
                "{sm}is welcome here",
              ],
            },
            {
              lines: [
                "{xs}People:",
                "{sm}We come to tell the truth about",
                "{sm}who we are in relationship with God.",
              ],
            },
            {
              lines: [
                "{xs}Liturgist:",
                "{sm}Many of us find it easy to recognize",
                "{sm}our goodness and difficult to notice our sins.",
              ],
            },
            {
              lines: [
                "{xs}People:",
                "{sm}We come to tell the truth about",
                "{sm}who we are in relationship with God.",
              ],
            },
            {
              lines: [
                "{xs}Liturgist:",
                "{sm}Others of us live under",
                "{sm}a shroud of guilt and shame",
              ],
            },
            {
              lines: [
                "{xs}Liturgist:",
                "{sm}believing we can never be good enough",
                "{sm}to receive the fullness of God's love.",
              ],
            },
            {
              lines: [
                "{xs}People:",
                "{sm}We come to tell the truth about",
                "{sm}who we are in relationship with God.",
              ],
            },
            {
              lines: [
                "{xs}Liturgist:",
                "{sm}However, you enter this place, know this:",
                "{sm}you are loved, accepted, and called.",
              ],
            },
            {
              lines: [
                "{xs}Liturgist:",
                "{sm}May God's love draw us to honest confession",
              ],
            },
            {
              lines: [
                "{xs}Liturgist:",
                "{sm}God's acceptance assures us of",
                "{sm}the work of grace in our lives",
              ],
            },
            {
              lines: [
                "{xs}Liturgist:",
                "{sm}and God's call compels us to live in grace.",
              ],
            },
            {
              lines: ["{xs}All:", "{sm}We come to tell the truth"],
            },
            {
              lines: [
                "{xs}All:",
                "{sm} about who we are in relationship with God",
                "{sm}who loves us, accepts us, and calls us",
              ],
            },
            {
              lines: ["Amen"],
            },
          ],
        },
        {
          name: "Praise and Worship",
          pages: [
            {
              lines: ["{xs}Praise And Worship", "{sm}Psalms 108 Praise Band"],
            },
          ],
        },
        {
          name: "Prayer for the day",
          pages: [
            {
              lines: ["Prayer for the day", "{xs}(The Community in Unison)"],
            },
            {
              lines: [
                "{sm}Holy God, joy of the universe,",
                "{sm}it is your awesome love that brings us here.",
              ],
            },
            {
              lines: [
                "{sm}You awaken within us a loving response,",
                "{sm}which hungers and thirsts for your truth and beauty.",
              ],
            },
            {
              lines: [
                "{sm}As we worship you, please do not give us",
                "{sm}the blessings we want but the ones we most need.",
              ],
            },
            {
              lines: [
                "{sm}Satisfy us with the truth that we may need,",
                "{sm}though such truth might be most uncomfortable,",
              ],
            },
            {
              lines: [
                "{sm}and confront us with your holy beauty,",
                "{sm}that brings us healing.",
              ],
            },
            {
              lines: ["{sm}Through Christ Jesus your joyful Son.", "{sm}Amen!"],
            },
          ],
        },
      ],
      type: PageCollectionType.Response,
    },
    AdonaiShortVer,
    SingSingSing,
    OComeToTheAltar,
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
              lines: ["{xs}Reading from the scriptures", "{sm}Matthew 6:19-24"],
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
    {
      alias: "response",
      title: "Glory Be to the Father",
      author: "UMH #70",
      pages: [
        {
          name: "Verse 1",
          pages: [
            {
              lines: [
                "Glory be to the Father",
                "and to the Son and to the Holy Ghost",
              ],
            },
            {
              lines: [
                "as it was in the beginning",
                "is now, and ever shall be",
              ],
            },
            {
              lines: ["world without end", "Amen. Amen."],
            },
          ],
        },
      ],
      type: PageCollectionType.Song,
    },
    {
      title: "Pre-message",
      pages: [
        {
          name: "The Anthem",
          pages: [
            {
              lines: [
                "{sm}\"He's Got the Whole World / This is My Father's World\"",
                "{xs}UMC Daly City Chancel Choir",
                "{xs}Rebecca Katigbak-Grear, Conducting",
                "{xs}Roxanne Sacun, Accompanist",
              ],
            },
          ],
        },
        {
          name: "OFFERING",
          pages: [
            {
              lines: [
                "{sm}SPECIAL ANNIVERSARY OFFERING",
                "{xs}Church Electrical Replacement/Upgrade Project",
                "{xs}Ushers:  Maria “Rosie” Pascua and Nancy David",
              ],
            },
          ],
        },
        {
          name: "Prayer of declaration",
          pages: [
            {
              lines: [
                "{sm}Prayer of declaration",
                "{xs}(The Community in Unison)",
              ],
            },
            {
              lines: [
                "I declare I will experience God's faithfulness",
                "I will not worry; I will not doubt",
              ],
            },
            {
              lines: [
                "I will keep my trust in Him",
                "knowing that he will not fail me.",
              ],
            },
            {
              lines: [
                "I will give birth",
                " to every promise I put in my heart",
              ],
            },
            {
              lines: ["and I will become everything", "He created me to be"],
            },
            {
              lines: ["I declare I have the grace", "I need for today."],
            },

            {
              lines: ["In Jesus Name I pray", "Amen."],
            },
          ],
        },
      ],
      type: PageCollectionType.Response,
    },
    {
      title: "Message",
      pages: [
        {
          name: "Intro",
          pages: [
            {
              lines: [
                '{sm}"Treasure on Earth and The Lamp of the Body"',
                "{sm}Rev. Oliver S. Mangubat, D.Min.",
                "{xs}UMCDC Administrative Pastor",
              ],
            },
            {
              lines: [
                "{sm}Rev. Oliver S. Mangubat, D.Min.",
                "{xs}UMCDC Administrative Pastor",
              ],
            },
            {
              lines: ["{sm}Scripture Text", "{sm}Matthew 6:19-24"],
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
        // {
        //   name: "Special Offertory Number",
        //   pages: [
        //     {
        //       lines: [
        //         "{xs}Special Offertory Number",
        //         '{sm}"Who You Say Iam"',
        //         "{xs}Mylene Soriano",
        //       ],
        //     },
        //   ],
        // },
        {
          name: "INVITATION TO THE OFFERING",
          pages: [
            {
              lines: [
                "{xs}Luke 6:38 NIV",
                "{sm}Give, and it will be given to you pressed down, shaken together and running over will be poured into your lap. For with the measure you use, it will be measured to you.",
              ],
            },
            {
              lines: [
                "The Gathering of Our Tithes and Offerings",
                "{xs}Ushers:  Maria “Rosie” Pascua and Nancy David",
              ],
            },
          ],
        },
      ],
      type: PageCollectionType.Response,
    },
    {
      title: "Doxology",
      author: "UMH #95",
      pages: [
        {
          name: "Verse 1",
          pages: [
            {
              lines: [
                "Praise God, from whom all blessings flow",
                "praise Him, all creatures here below",
              ],
            },
            {
              lines: [
                "praise Him above, ye heavenly hosts;",
                "Praise Father, Son, and Holy Ghost. Amen",
              ],
            },
          ],
        },
      ],
      type: PageCollectionType.Song,
    },
    UMH_593,
    {
      title: "Closing",
      pages: [
        {
          name: "Dismissal",
          pages: [
            {
              lines: [
                "{xs}Pastor:",
                "{sm}Beloved, receive this good news:",
                "{sm}Nothing can separate you from the love of God.",
              ],
            },
            {
              lines: [
                "{xs}Pastor:",
                "{sm}May you go now in the blessing of God",
                "{sm}who forgives our sins and empowers us",
              ],
            },
            {
              lines: [
                "{xs}Pastor:",
                "{sm}to turn once again to be and become",
                "{sm}who God calls us to be.",
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
