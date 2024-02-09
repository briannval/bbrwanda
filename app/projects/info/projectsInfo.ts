export interface ProjectProps {
  titleLeft: string;
  titleHighlight: string;
  titleRight: string;
  description: string;
  leaderProfile: string;
  leaderName: string;
  leaderEmail: string;
  objectives: {
    objectiveTitles: string[];
    objectiveDescriptions: string[];
  };
  overview: string;
  goal: string;
  purpose: string;
  targetAudience: string;
  initiativeProject: string;
}

export interface ObjectiveProps {
  objectiveTitles: string[];
  objectiveDescriptions: string[];
}

export const projectInfo1: ProjectProps = {
  titleLeft: "The",
  titleHighlight: "2024",
  titleRight: "Sustainable Development Reflection Tour",
  description:
    "Building Bridges for Rwanda (BBR) is planning to embark on a unique, collaborative, and transnational Sustainable Development Reflection Tour in Rwanda in order to showcase and highlight 4 innovative and transformational projects that will lead to greatly improving the lives, environment, and communities in rural Rwanda.",
  leaderProfile: "/lama.jpeg",
  leaderName: "Lama Mugabo",
  leaderEmail: "lmugabo75@gmail.com",
  objectives: {
    objectiveTitles: ["Lead", "Provide", "Host"],
    objectiveDescriptions: [
      "As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.",
      "Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.",
      "Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.",
    ],
  },
  overview:
    "The participants of the reflection tour will also visit a series of successful community organizations and their projects that are leaders in community development to gain awareness and knowledge of how Rwanda has become a global leader in sustainable development. The intention of this tour is to provide Canadians with opportunities to invest funding and resources in community projects developed in Rwanda and to create reciprocal trade partnerships between Canada and Rwanda.",
  goal: "The primary goal of the 2024 Sustainable Development Reflection Tour to Rwanda is to enlighten and educate Canadians on the Rwandan Development Model and how Rwanda is “the little country with big changes” as Rwanda has been recognized as an African and global leader in sustainable development, agriculture, technology and digital communications, gender equality and education. As a model for other nations, Rwanda has become a beacon of hope of how a country can lift itself up after the tragic 1994 genocide and pave a way forward by re-imagining a new, vibrant, inclusive and equitable Rwanda.",
  purpose:
    "Africa's image has been unfairly tarnished, often portrayed as a continent needing constant external assistance through a colonized lens. BBR is shedding light upon this image by initiating a campaign to showcase pan-African transformation with a focus on Rwanda to challenge this misconception. We intend to greatly shift this narrative by promoting excellent experiential learning through the reflection tour and how Canadians can take back lessons learned from African countries, such as Rwanda.",
  targetAudience:
    "Our project appeals to Africans in the diaspora, progressive organizations and institutions dedicated to social, environmental, and economic justice, and diverse individuals focusing on college/university students, researchers and policymakers in the field of international development. Our audience will benefit from receiving evidence-based, engaging, and informative content that will assist and support them in better understanding the realities of sustainable development in Rwanda.",
  initiativeProject:
    "The reflection tour will take the participants through Rwanda's established successful development hotspots where they will have the opportunity to meet Rwandan change-makers who have significantly contributed to the nation's progress in a myriad of ways. Participants will visit key established development projects shaping Rwanda's future such as exploring the Museum of Homegrown Solutions to understand how tradition and innovation are key drivers of sustainable development in Rwanda.The reflection tour will take the participants through Rwanda's established successful development hotspots where they will have the opportunity to meet Rwandan change-makers who have significantly contributed to the nation's progress in a myriad of ways. Participants will visit key established development projects shaping Rwanda's future such as exploring the Museum of Homegrown Solutions to understand how tradition and innovation are key drivers of sustainable development in Rwanda. The reflection tour will take the participants through Rwanda's established successful development hotspots where they will have the opportunity to meet Rwandan change-makers who have significantly contributed to the nation's progress in a myriad of ways. Participants will visit key established development projects shaping Rwanda's future such as exploring the Museum of Homegrown Solutions to understand how tradition and innovation are key drivers of sustainable development in Rwanda.",
};
