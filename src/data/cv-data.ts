import React from 'react';
import svgPaths from "../imports/svg-yzrtpc3c99";
import imgNogi1 from "figma:asset/50cf040298886599a0afea3ca6109248227e8465.png";
import imgLogo from "figma:asset/b025eeb040b6632a12aab9d5ac5b052792444c3c.png";
import imgImage1 from "figma:asset/f397b94399c71f8e3b1ced7561632643307f98a6.png";
import imgImage9 from "figma:asset/780d693801afb2eb197e9e11178a45d5bc1c16c5.png";
import imgImage10 from "figma:asset/46b19e2cd8a92c08210973da66ad6a6c868d81ba.png";
import imgImage11 from "figma:asset/adf1df3309d9358faabe493a7bfbedbe835c1c6f.png";
import imgImage12 from "figma:asset/69f762d2138e51c4da2486a7f90d2912da75401a.png";
import imgImage13 from "figma:asset/121952bd0357bf1058d3a94831d6e298af56b93b.png";
import imgImage14 from "figma:asset/398ae2fb5a609cfab0a8f6092636db6e5fd16243.png";
import imgImage15 from "figma:asset/6c66e06c2e33b9cfa775ad9929dad21b4101ee33.png";
import imgImage16 from "figma:asset/ecf367235e54c6594e90b9e062176e7d140ef768.png";
import imgImage17 from "figma:asset/4c9117e3b8a144160d7b34f8b38f4cfb1fdcdd10.png";
import imgImage18 from "figma:asset/703bf41d44185b07b87443a01d7ea3f6e08aaf24.png";
import imgImage19 from "figma:asset/fbb1c38ed169aa78ef982cf60f1d341a500f7b3a.png";
import imgImage20 from "figma:asset/ac2bc2172c056e135f5dc5acb30285cf288cd1d7.png";
import imgImage24 from "figma:asset/eecbff5705ec05eaa1fccb7222d3de2c5bb04dc8.png";

// Import logo components
import LogoIconInverse from "../imports/LogoIconInverse";
import LogoIconFusionJourney from "../imports/LogoIconFusionJourney";
import LogoIconAudrey from "../imports/LogoIconAudrey";
import LogoIconGuardian from "../imports/LogoIconGuardian";
import LogoIconInfact from "../imports/LogoIconInfact";
import LogoIconFoundersAndCoders from "../imports/LogoIconFoundersAndCoders";
import LogoIconFramer from "../imports/LogoIconFramer-8-293";
import LogoIconBuilderIo from "../imports/LogoIconBuilderIo-8-216";
import LogoIconTokenStudio from "../imports/LogoIconTokenStudio-9-17";

export interface CVData {
  personal: {
    name: string;
    title: string;
    image: string;
    description: string;
    contact: {
      email: string;
      website: { url: string; label: string };
      phone: string;
      address: string;
    };
    socials: {
      linkedin: { url: string; handle: string };
      dribbble: { url: string; handle: string };
      instagram: { url: string; handle: string };
    };
  };
  skills: {
    design: string[];
    development: string[];
  };
  experience: {
    id: string;
    company: string;
    role: string;
    period: string;
    location: string;
    website?: string;
    logo: string | React.ComponentType;
    description: string[];
    isCurrentPosition?: boolean;
  }[];
  tools: {
    name: string;
    description: string;
    logo: string | React.ComponentType;
    category: 'design' | 'research' | 'ai' | 'management';
  }[];
  education: {
    institution: string;
    degree: string;
    period: string;
    logo: string;
  }[];
}

export const cvData: CVData = {
  personal: {
    name: "Noga Enbar",
    title: "Senior Product Designer",
    image: imgNogi1,
    description: "I am deeply interested in what we love and value, and how design can improve our lives. I am a versatile Product Designer with illustration skills and front-end coding knowledge, passionate about human-focused designs. My experience spans startups, NGOs, and tech for good sectors. Passionate about human behavior, I apply diverse approaches to enhance user experiences.",
    contact: {
      email: "noga.enbar.design@gmail.com",
      website: { url: "https://fj.debugged-pro.com/", label: "Fusion Journey" },
      phone: "(+49) 15734640308",
      address: "Berlin, Germany"
    },
    socials: {
      linkedin: { url: "https://www.linkedin.com/in/noga-inbar/", handle: "noga-inbar" },
      dribbble: { url: "https://dribbble.com/FusionJourney", handle: "@FusionJourney" },
      instagram: { url: "https://www.instagram.com/nogsinbar/", handle: "@nogsinbar" }
    }
  },
  skills: {
    design: [
      "Design Strategy",
      "Design Systems",
      "Design Tokens",
      "Design to Dev pipelines",
      "Design Automation",
      "User research", 
      "Design Thinking workshops",
      "From idea to MVP",
      "Product Design (Full-stack)",
      "Wireframing & Prototyping",
      "Usability & Concept testing",
      "Design consultancy",
      "Training teams/designers",
      "Illustration",
      "Brand Design",
      "Typography"
    ],
    development: [
      "Strong - HTML & CSS",
      "Familiar - JS, React, Git & CMS",
      "Ensuring fluent communication between Design & Development"
    ]
  },
  experience: [
    {
      id: "inverse-studio",
      company: "Inverse Studio",
      role: "Strategic Product Designer & Design Systems Specialist",
      period: "Aug 2024 - Present",
      location: "Berlin, Germany",
      website: "https://www.linkedin.com/company/inverse-digital-design-studio/posts/?feedView=all",
      logo: LogoIconInverse,
      isCurrentPosition: true,
      description: [
        "Built and maintained full-scale design systems from scratch for a broad range of clients, spanning B2B and B2C industries, and adapted them for both early-stage startups and enterprise-scale needs",
        "Delivered end-to-end product design solutions — from research and UX strategy through to interface design — tailored to diverse digital platforms",
        "Acted as a strategic partner in client engagements, aligning design decisions with product goals and scaling consistent user experiences across teams",
        "Collaborated cross-functionally to ensure smooth integration between design and development, championing system coherence and usability at every stage"
      ]
    },
    {
      id: "fusion-journey",
      company: "Fusion Journey",
      role: "Product Design Lead",
      period: "Mar 2022 - Jul 2024",
      location: "Remote",
      website: "http://thefusionjourney.com/",
      logo: LogoIconFusionJourney,
      description: [
        "Led end-to-end design for health tech projects, creating a platform for the Ministry of Health that enhanced communication with 9.8 million citizens, elevating its public image.",
        "Managed design processes for projects democratising corporate event planning, utilising analytics to transform how companies assess event impact.",
        "Contributed to launching a nationwide app empowering parents of newborn babies, increasing trust and adoption rates as the platform continues to grow.",
        "Set KPIs and drove processes based on data insights, built entire design systems from scratch, future-proofing them while leading and training design and product teams."
      ]
    },
    {
      id: "listen-with-audrey",
      company: "Listen with Audrey",
      role: "Product Design Lead",
      period: "Jul 2019 - Feb 2022",
      location: "Remote",
      website: "https://www.listenwithaudrey.com/",
      logo: LogoIconAudrey,
      description: [
        "Led design workshops and conducted extensive user research, utilising qualitative and quantitative interviews to shape Audrey into a platform enhancing workplace culture and mental health through shared audiobook experiences.",
        "Designed Audrey from prototype to final product, leveraging findings that 70% of audiobook listeners reported feeling less stressed and 67% felt cheered up, increasing empathy and reducing loneliness.",
        "Managed design and development, addressing issues like the 'Great Resignation' and 'quiet quitting,' promoting connection and well-being in remote teams through Audrey's focus on audiobooks.",
        "Created Audrey's brand language, marketing website, and overall look and feel, ensuring a cohesive user experience."
      ]
    },
    {
      id: "guardian",
      company: "Guardian News Media",
      role: "Freelance Product Designer",
      period: "Apr 2018 - May 2019",
      location: "London, UK",
      logo: LogoIconGuardian,
      description: [
        "Spearheaded the redesign of the Daily Edition app interface, streamlining user journeys for enhanced usability.",
        "Developed front-end user interfaces, ensuring seamless communication with stakeholders throughout the process.",
        "Crafted engaging graphics for articles featured on the Guardian web app and website, enriching the overall user experience."
      ]
    },
    {
      id: "infact-coop",
      company: "Infact Co-Op",
      role: "Product Designer and Co-founder",
      period: "Aug 2016 - Mar 2018",
      location: "London, UK",
      website: "https://www.infactcoop.com/",
      logo: LogoIconInfact,
      description: [
        "Co-founded and led InFact Digital Co-op, specialising in design thinking workshops for health tech, charities, and NGOs, emphasising tech for good.",
        "Led design workshops and MVP ideation, branding, and marketing for projects with NHS England, Blue Cross, and the Law Centre Network.",
        "Championed co-operative-driven design and development, focusing on leveraging technology for social good and worker autonomy."
      ]
    },
    {
      id: "founders-coders",
      company: "Founders & Coders",
      role: "Designer, Design Thinking workshop facilitator & tutor",
      period: "Jan 2014 - Jun 2016",
      location: "London, UK",
      website: "https://www.foundersandcoders.com/",
      logo: LogoIconFoundersAndCoders,
      description: [
        "Developed the complete Founders & Coders brand, from logo to website, ensuring a cohesive identity.",
        "Led design thinking sessions and sprints for internal teams and external clients, fostering innovation.",
        "Instructed full stack program students in design fundamentals, enhancing their skill sets."
      ]
    }
  ],
  tools: [
    { name: "Figma", description: "UI Design, prototyping Figma make and AI workflows", logo: imgLogo, category: "design" },
    { name: "Framer", description: "Website builder", logo: LogoIconFramer, category: "design" },
    { name: "Builder.io", description: "AI based visual development platform", logo: LogoIconBuilderIo, category: "design" },
    { name: "Token Studio", description: "Platform for organizing, updating, and sharing design tokens", logo: LogoIconTokenStudio, category: "design" },
    { name: "Maze", description: "User Testing", logo: imgImage17, category: "research" },
    { name: "ChatGPT", description: "AI Driven Copy-write & Design", logo: imgImage19, category: "ai" },
    { name: "Midjourney", description: "AI Image generation", logo: imgImage24, category: "ai" },
    { name: "Notion", description: "Project managment", logo: imgImage20, category: "management" }
  ],
  education: [
    { institution: "muse case labs GmbH", degree: "Advanced design systems course", period: "May 2023", logo: imgImage9 },
    { institution: "UX Vision", degree: "Advanced UX course", period: "April 2020", logo: imgImage10 },
    { institution: "Career Foundry", degree: "UX/UI Designer path", period: "2016-2017", logo: imgImage11 },
    { institution: "Founders & Coders", degree: "Full Stack Web Development", period: "2015", logo: imgImage12 },
    { institution: "Royal College Of Art, London", degree: "MA Fine Arts", period: "2011-2013", logo: imgImage13 },
    { institution: "Nuova Accademia Di Belle Arti, Milan", degree: "BA Fine Arts", period: "2002-2007", logo: imgImage14 }
  ]
};

export { svgPaths };