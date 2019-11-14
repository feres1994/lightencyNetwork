import analmine from "../graphics/analmine.png";
import benji from "../graphics/benji.png";
import boubaker from "../graphics/boubaker.png";
import feres from "../graphics/faousa.png";
import kimo from "../graphics/Karim_Chaari.jpg";
import chamous from "../graphics/chamous.jpg";
import hay from "../graphics/HAY.png";
import alann from "../graphics/Alann.jpg";
import jafaar from "../graphics/jafaar.png";
import mohamed from "../graphics/mohamed.png";
import mohammed from "../graphics/mohammed.png";
import philippe from "../graphics/philippe.png";
import thibault from "../graphics/thibault.png";
import yasmine from "../graphics/yasmine.png";
import asma from "../graphics/asma.png";
import wajdi from "../graphics/wajdi.png";
import uuid from "uuid/v4";

export const users = [
  {
    id: uuid(),
    link: "jafaar-saied",
    name: "JAAFAR SAIED",
    position: "CEO & CO-FOUNDER",
    social: {
      linkedin: "https://www.linkedin.com/in/saiedjaafar/",
      facebook: "",
      twitter: ""
    },

    description:
      "Jaafar is an IT engineer, holding an MBA in management & international development. Having worked for start-ups for 5 years+, Jaafar has developed a strong experience in building and growing successful businesses.Throughout his career, Jaafar has worked with several techs and green start-ups in Africa and Europe. He has also co-founded various blockchain-related initiatives such as Decentral Magazine and DarBlockchain.Jaafar is deeply passionate about Africa and believes in the power of blockchain to brighten the future of the continent.",
    image: jafaar,
    tag: "founder"
  },
  {
    id: uuid(),
    link: "boubaker-selmi",
    name: "Boubaker Selmi",
    position: "CTO & CO-FOUNDER",
    social: {
      linkedin: "https://www.linkedin.com/in/boubakerselmi/",
      facebook: "",
      twitter: ""
    },
    description:
      "Boubaker Selmi is an experienced IT service manager and project manager with 8 years of experience in different sectors: Banking, Finance, Telecommunication, and Energy. He is passionate about new technologies especially IoT, IA, and Blockchain.He previously worked for Engie, BNP Parisbas, and SFR. An ENSII Paris Alma matter.",
    image: boubaker,
    tag: "founder"
  },
  {
    id: uuid(),
    link: "mohammed-mnif",
    name: "MOHAMMED MNIF",
    position: "CFO & CO-FOUNDER",
    social: {
      linkedin: "https://www.linkedin.com/in/mohamed-mnif-3b8b9698/",
      facebook: "",
      twitter: ""
    },
    description:
      "Mohamed Graduated from IHEC as a Certified Chartered accountant, and has over four years of experience in Ernst & Young financial services. He worked at EY Tunis and EY Paris as a Fraud Investigator.A Cryptocurrency expert, and Blockchain passionate, Mr. Mnif is also a co-founder of several Blockchain focused projects such as Decentral magazine, OuiMine, and Dar Blockchain.",
    image: mohammed,
    tag: "founder"
  },
  {
    id: uuid(),
    link: "haythem-chedid",
    name: "HAYTHEM CHEDID",
    position: "COO & CO-FOUNDER",
    social: {
      linkedin: "https://www.linkedin.com/in/haythem-chedid-a92075123/",
      facebook: "",
      twitter: ""
    },
    description:
      "Haythem is an architect and an entrepreneur. Environmentally conscious, he always thought about solutions to integrate sustainable development by designing an architecture that respects the environment and ecology. While working with Green Panel Technology, he realized that Blockchain could revolutionize the renewable energies industry.Haythem has also co-founded several other Blockchain projects such as Decentral Magazine, OuiMine and Dar Blockchain.",
    image: hay,
    tag: "founder"
  },
  {
    id: uuid(),
    link: "mohamed-ali-gam",
    name: "MOHAMED-ALI GAM",
    position: "CDO",
    social: {
      linkedin: "https://www.linkedin.com/in/haythem-chedid-a92075123/",
      facebook: "",
      twitter: ""
    },
    description:
      "Mohamed-Ali is the Chief Development Officer at Electrify Network. He has 20 years combined international professional experience in Renewable Energy and Information Technology. He has been the Vice President of Business Development for Europe, Middle East, and Africa (“EMEA”) at Suntrough Energy Inc, a USA based project development and technology startup focused on Solar Concentrated Power technology and Solar PV projects. He is the founder and General Manager of Gamco Energy, a renewable energy EPC company in Africa  based in Tunisia, and co-founder and board member of Solartech Sud a Smart City based in Tunisia. ",
    image: mohamed,
    tag: "vp"
  },
  {
    id: uuid(),
    link: "asma-makni",
    name: "ASMA MAKNI",
    position: "VP & General Councel",
    social: {
      linkedin: "https://www.linkedin.com/in/asma-makni-16884452/",
      facebook: "",
      twitter: ""
    },
    description:
      "Asma, a Corporate Law Graduate and Blockchain enthusiast from Pantheon-Assas University, is currently pursuing a Master’s Degree in Entrepreneurship and Innovation.She has also held junior legal/research analyst and attorney positions in several law firms, where she acquired a solid experience in Compliance and Corporate Governance. ",
    image: asma,
    tag: "vp"
  },
  {
    id: uuid(),
    link: "yasmine-ben-miloud",
    name: "YASMINE BEN MILOUD",
    position: "VP R&D",
    social: {
      linkedin: "https://www.linkedin.com/in/yasmine-ben-miloud-04567683/",
      facebook: "",
      twitter: ""
    },
    description:
      "Yasmine is an Instrumentation and maintenance engineer that chose the sustainable development path, and enrolled in the renewable energy business. She started her engineering career within KRAFTWERK Renewable Power Solutions GmbH in Germany.Yasmine Believes in the capabilities of Blockchain when applied to the energy sector, and thinks Electrify will be the future of energy.",
    image: yasmine,
    tag: "vp"
  },
  {
    id: uuid(),
    link: "chamseddine-bouzaiene",
    name: "CHAMSEDDINE BOUZAIENE",
    position: "Blockchain Tech Lead",
    social: {
      linkedin: "https://www.linkedin.com/in/chamsddine/",
      facebook: "",
      twitter: ""
    },
    description: "",
    image: chamous,
    tag: "tech"
  },
  {
    id: uuid(),
    link: "feres-fatnassi",
    name: "FERES FATNASSI",
    position: "Full Stack Developer",
    social: {
      linkedin: "https://www.linkedin.com/in/fatnassif%C3%A9res/",
      facebook: "",
      twitter: ""
    },
    description: "",
    image: feres,
    tag: "tech"
  },
  {
    id: uuid(),
    link: "karim_chaari",
    name: "CHAARI KARIM",
    position: "Blockchain developer",
    social: {
      linkedin: "https://www.linkedin.com/in/karimchaari/",
      facebook: "",
      twitter: ""
    },
    description: "",
    image: kimo,
    tag: "tech"
  },
  {
    id: uuid(),
    link: "thibault-verbiest",
    name: "THIBAULT VERBIEST",
    position: "ADVISOR",
    social: {
      linkedin: "https://www.linkedin.com/in/thibaultverbiest/",
      facebook: "",
      twitter: ""
    },
    description:
      "An attorney in Paris and Brussels since 1993, Thibault Verbiest founded Ulys, a law firm dedicated to new technologies. He was notably able to develop a renowned expertise in legislation pertaining to payments and e-money, gaming and other regulated online activities. Between 2000 and 2004, he was the chairman of I’Observatoire des droits de I’intemet, an organisation tasked with advising the Belgian federal government on its policymaking approach towards the internet.In 2013, he founded two fintechs, including Payservices. Until 2015, he was also partner of investment bank Largillière Finance, which specializes in Fintech M&A. ",
    image: thibault,
    tag: "advisor"
  },

  {
    id: uuid(),
    link: "philippe-tesler",
    name: "PHILIPPE TESLER",
    position: "Marketing Advisor",
    social: {
      linkedin: "",
      facebook: "",
      twitter: ""
    },
    description:
      "Serial entrepreneur, board member and impact investor in high-tech companies that address the world's most pressing social and environmental challenges. Expert at scaling organizations and creating technology and user experiences that enable positive change.Passionate about aligning people, technology, and vision to make a significant positive impact in the world.",
    image: philippe,
    tag: "advisor"
  },
  {
    id: uuid(),
    link: "alan-main",
    name: "ALAN MAIN",
    position: "Strategic Advisor",
    social: {
      linkedin: "",
      facebook: "",
      twitter: ""
    },
    description: "",
    image: alann,
    tag: "advisor"
  },
  {
    id: uuid(),
    link: "wajdi-sulaiman",
    name: "WAJDI SULAIMAN",
    position: "AMBASSADOR",
    social: {
      linkedin: "https://www.linkedin.com/in/wajdisulaiman/",
      facebook: "",
      twitter: ""
    },
    description:
      "Wajdi holds an electrical engineering degree, with more than 12 years’ work experience in construction industry , MEGA power projects in Middle East, Through his experience and qualifications he has a sound and thorough understanding of business visioning, establishment, consolidation and expansion, he is a certified project management professional (PMP), and MBA candidate at UoPeople, California.He has written articles, and ICO reviews in Decentral Magazine focused on Blockchain and cryptocurrencies.",
    image: wajdi,
    tag: "ambassador"
  },
  {
    id: uuid(),
    link: "abdelmonaem-labidi",
    name: "ABDELMONAEM LABIDI",
    position: "AMBASSADOR",
    social: {
      linkedin: "https://www.linkedin.com/in/abdelmonaem-labidi-567b811b/",
      facebook: "",
      twitter: ""
    },
    description:
      "Abdelmonaem holds a Master’s degree in Natural Products Technology and Sustainable Development with 10 years of experience in international development cooperation.Adviser in business development, he supported the creation and coaching of green startups.As an expert, he has conducted several researches and studies on the analysis and development of value chains in collaboration with International cooperation agencies.",
    image: analmine,
    tag: "ambassador"
  },
  {
    id: uuid(),
    link: "benjamin-steiner",
    name: "BENJAMIN STEINER",
    position: "AMBASSADOR",
    social: {
      linkedin: "",
      facebook: "https://www.facebook.com/benjamin.steiner.3956",
      twitter: ""
    },
    description:
      "Benjamin is known for his diverse approach and perspective towards problem solving. With a degree in International Business from Florida State University. His intention of gaining knowledge and perspective has led him to solo backpack to over 45 countries. Immersing and adapting to foregin environments has expanded his ability to connect with people of all backgrounds. His competency and courage makes him a great fit for our revolutionary team.",
    image: benji,
    tag: "ambassador"
  }
];
