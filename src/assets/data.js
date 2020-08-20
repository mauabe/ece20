// import {zip} from 'lodash.zip';
// import {zip} from 'lodash';

// export const topMenuLinks = ['features', 'highlights', 'students', 'faculty', 'overview', 'alumni'];
// export const topMenuLabels = ['Department News', 'Faculty Highlights', 'Students & Teaching', 'ECE Faculty', 'Department Overview', 'Alumni & Partnerships'];
// export const topMenu = zip(topMenuLinks, topMenuLabels);
export const topMenu = [['features', 'Department News'], ['highlights', 'Faculty Highlights'], ['students', 'Students & Teaching'], ['faculty', 'ECE Faculty'], ['overview', 'Department Overview'], ['alumni', 'Alumni & Partnerships']];

console.log('topMenu zip from lodash:', topMenu)


export const subMenus = {
  'features': [],
  'highlights': [],
  'students': [],
  'faculty':[],
  'overview':[],
  'alumni':[]
}

export const logos = {
  "uclabottom": "public/img/UCLA_bottom_600.png",
  "uclaeceblue": "public/img/UCLA_ECE.png",
  "uclaecewhite": "public/img/UCLA_ECE_WHITE.svg",
  "ecewhite": "public/img/ECE_WHITE.svg",
  "ece": "public/img/ECE.png",
};

export const slides = [
  {
    title: "Covid-19 Pandemic Stops Everything",
    subtitle: "Professor helps students from home",
    description: "The internet is helping education",
    image:
    "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    link: "/2019-2020/feature1"
  },
  {
    title: "Coronavirus in the World",
    subtitle: "After a substantial reduction in cases, the virus roars anew in France.",
    description: "Welcome to College. Now Quarantine.",
    image:
    "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    link: "/2019-2020/feature2"
  },
  {
    title: "Telemedicine Saves Lives",
    subtitle: "Social distancing saves lives, so does technology",
    description: "The smaller the better.",
    image:
    "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    link: "/2019-2020/feature3"
  },
  {
    title: "Stop Trying to Be Productive",
    subtitle: "Then quarantine way",
    description: "The internet wants you to believe you aren’t doing enough with all that “extra time” you have now.",
    image:
    "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f",
    link: "/2019-2020/feature4"
  },
  {
    title: "Keep working!",
    subtitle: "Tennessee school districts tell their teachers to keep it going",
    description: "'What virus?', they say",
    image:
      "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      link: "/2019-2020/feature5"
  },
  {
    title: "Keep working Harder!",
    subtitle: "Tennessee school districts tell their teachers to keep it going",
    description: "'What virus?', they say",
    image: "./assets/images/mask.jpg",
    link: "/2019-2020/feature5"
  }
];

/*
1.  Department News
-  Chair's intro
-  New Faculty:  Nader Sehatbakhsh

2.  Faculty Highlights
-  Prof. Jarrahi and Dr. Yardimci receive an Innovation in Regulatory Science Award from the Burroughs Wellcome Fund for their innovative terahertz technology facilitating regulatory decisions on agricultural food products.

- Asad Madni for UK National Academy - we can talk about some of the other awards within the section - He gave me a page for his awards

-  Warren Mori’s James Maxwell Award (We have 2 prior award winners, Joshi and Francis Chen)

- Prof. Paulo Tabuada has been elected as a fellow of IFAC, the International Federation of Automatic Control.

-  Dr. William Kaiser has been elected to the AIMBE College of Fellows – Class of 2020.

-  Prof. Chee Wei Wong has been elected to the rank of NAI Fellow by the 2019 National Academy of Inventors (NAI) Fellows Selection Committee and Board of Directors.

-  The Fusion Power Associates Board of Directors has voted to honor Professor Emeritus Francis F. Chen with a Special FPA Distinguished Career Award, for his “decades of outstanding achievements in science and education relating to plasma physics and fusion.”

-  Dean Jayathi Murthy has just been inducted into the National Academy of Engineering Class of 2020

-  Alumni,  Reza Rofougaran (1986, M.S. 1988, Ph.D. 1998, under Prof. Asad Abidi) was also elected to the National Academy of Engineering Class of 2020

-  Xiang “Anthony” Chen was selected as a 2020-21 UCLA Hellman Fellows


3.  Students & Teaching
-  Student & Teaching awards

4.  Faculty section
-  CES, PWE, SS

5.  Department Overview
-  Statistics

6.  Alumni & Partnerships
*/
