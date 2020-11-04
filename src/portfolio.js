/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Debajit Mallick",
  title: "Hi all, I'm Debajit",
  subTitle: emoji(
    "A passionate pre-final year CSE Undergrad 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / React Native / Nodejs / MongoDB and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Qw1w5m_KcG4rtE7T8zBt_FI9rTQ5YLSP/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/debajit13",
  linkedin: "https://www.linkedin.com/in/debajit-mallick/",
  twitter: "https://twitter.com/MallickDebajit",
  gmail: "mallickdebajit3@gmail.com",
  facebook: "https://www.facebook.com/debajit.mallick.79",
  medium: "https://medium.com/@mallickdebajit3",
  stackoverflow: "https://stackoverflow.com/users/10615214/debajit-mallick",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "PROGRAMMER WHO LOVES TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Build projects using different APIs."),
    emoji("⚡ Integration of third party services such as Firebase/ Heroku"),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Siliguri Institute of Technology",
      logo: require("./assets/images/sit-logo.jpeg"),
      subHeader: "Computer Science and Engineering",
      duration: "2018 - Present",
      desc: "Focused on learning the core concepts of Computer Sciecnce.",
      descBullets: [
        "Participated in intercollege project competitions",
        "YGPA: 7.82",
      ],
    },
    {
      schoolName: "Jalpaiguri Zilla School",
      logo: require("./assets/images/jzs-logo.jpg"),
      subHeader: "Science Major",
      duration: "2016 - 2018",
      desc:
        "Took courses about Physics, Chemistry, Mathematics and Computer Science ",
      descBullets: [
        "Finalist of National Children Science Congress",
        "Percentage: 79%",
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%",
    },
    {
      Stack: "Programming",
      progressPercentage: "90%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Leader",
      company: "Hack Club",
      companylogo: require("./assets/images/hack-club.jpeg"),
      date: "Decemeber 2019 – Present",
      desc:
        "I am the leader of Hack Club SIT. Here we learn and build projects. We here mainly focused on project development",
      descBullets: [
        "Taught more than 100 students about JavaScript, Git, GitHub and other technologies",
        "Helped them to build there first project. Create free tech content on YouTube",
      ],
    },
    {
      role: "GSSoC Ambassador",
      company: "GirlScript Foundation",
      companylogo: require("./assets/images/gssoc.png"),
      date: "January 2020 – July 2020",
      desc: "Promoted Open Source contribution in college.",
      descBullets: [
        "Aware students about GSSoC",
        "Taught more than 30 students about Open Source contribution",
      ],
    },
    {
      role: "Core Team Member",
      company: "Google Developer Group Siliguri",
      companylogo: require("./assets/images/gdg.png"),
      date: "Jul 2019 – Present",
      desc: "Helped core team for upcoming events and hackathons.",
      descBullets: ["Took session on Git and GitHub"],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "debajit13", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY PROJECTS",
  projects: [
    {
      image: require("./assets/images/Keeper.png"),
      link: "https://github.com/debajit13/Keeper",
    },
    {
      image: require("./assets/images/Blogger.png"),
      link: "https://github.com/debajit13/Blogger",
    },
    {
      image: require("./assets/images/ToDoLiFy.png"),
      link: "https://github.com/debajit13/ToDoLiFy",
    },
    {
      image: require("./assets/images/Moneyco.png"),
      link: "https://github.com/debajit13/ToDoLiFy",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Smart India Hackathon Winner",
      subtitle:
        "Developed an IoT based advance Public Address and Flood Warning System across all Hydro Power project areas. This project was developed by me and 5 others in the Smart India Hackathon. Here, I built a centralized dashboard to show data of all dams using ReactJS and CanvasJS.",
      image: require("./assets/images/sih.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/13zkpnBiuYc2UoIrSGdR3EW__inyi2ief/view?usp=sharing",
        },
      ],
    },
    {
      title: "Contributed to HacktoberFest 2019 and 2020",
      subtitle:
        "In 2019, I made some contribution in some projects on Python and C++. In 2020, I contributed more projects of JavaScript",
      image: require("./assets/images/hacktoberfest.jpg"),
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/debajit13",
        },
      ],
    },

    {
      title: "JWOC Contributor",
      subtitle: "Contributed to a music website in JGEC Winter of code",
      image: require("./assets/images/jwoc.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1hOlFY4lhodPljP198Ru0774NAiONM2ts/view?usp=sharing",
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://medium.com/@mallickdebajit3/deep-dive-into-git-2e190c5404ea",
      title: "Deep Dive into Git(Part I)",
      description:
        "Do you want to learn about Git. In this blog, you learn about version control and git.",
    },
    {
      url:
        "https://medium.com/@mallickdebajit3/deep-dive-into-git-part-ii-e3fe2bb24456",
      title: "Deep Dive into Git(Part II)",
      description:
        "Do you want to learn about git command line. In this blog, you learn about basic commmands that are required to start your journey.",
    },
    {
      url: "https://indiablog.hackclub.com/articles/hacksitmyjourney",
      title: "Hack Club SIT - My Journey",
      description:
        "Do you want to know about Hack Club. In this blog, I shared my journey with Hack Club and my experience",
    },
  ],
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE WITH OTHERS"),

  talks: [
    {
      title: "Getting started with Open Source and GSSoC,20",
      subtitle:
        "took a session on GSSoC'20 and open source at GirlScript Siliguri",
      slides_url: "#",
      event_url:
        "https://drive.google.com/file/d/1K5AF22Nxyd7YnCBUTotbPIGP3ksGki01/view?usp=sharing",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("YouTube 🎙️"),
  subtitle:
    "In Hack Club SIT I and some of my friends are teaching different technical topics and invite guests to discuss different topics",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://www.youtube.com/watch?v=E3kYpg2mEok"],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "mallickdebajit3@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "MallickDebajit", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
