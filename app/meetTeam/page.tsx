"use client";

import {
  Box,
  Container,
  Title,
  Text,
  Button,
  Burger,
  Drawer,
} from "@mantine/core";
import classes from "./page.module.css";
import { useDisclosure } from "@mantine/hooks";
import { NavbarSimple } from "../../components/NavbarSimple";
import { ContactUs } from "../../components/ContactUs";
import { Team } from "../../components/team/Team";
import { TeamMember } from "../../components/team/TeamMember";

interface Team {
  name: string;
  email: string;
  title: string;
  description: string;
  image: string;
}

const canadaTeamMembers: Team[] = [
  {
    name: "Lama Mugabo",
    email: "lmugabo75@gmail.com",
    title: "Chair",
    description:
      "Lama Mugabo is a Community Planner who uses storytelling as planning tool. In 2005, Mugabo co-founded BBR – Building Bridges with Rwanda; a non-profit organization designed to create a platform for collaboration between international volunteers and their Rwandan counterparts who are rebuilding their society. As Baraza Host, Lama will be interviewing Rwanda’s change agents and development partners to share their insights about the Africa we want to build. In Baraza, conversations will focus on personal transformation, while also exploring ways innovations in science and technology are used to foster sustainability.",
    image: "/lama.jpeg",
  },
  {
    name: "Cedric Habiyaremye",
    email: "h.cedric3@gmail.com",
    title: "Vice Chair",
    description:
      "Cedric joined BBR in 2010 when he was pursuing his undergraduate studies in Agricultural Sciences in Rwanda, serving as Technical Assistant and Program Coordinator on various BBR’s community development projects, and stakeholders’ engagement programs. Cedric is the visionary behind BBR’s famous Kitchen Garden Project, a project that aims to fight against hunger and malnutrition by equipping the community with gardens that allow them to access fruits and vegetables all year round. His passion and a love for agriculture and food security and his association with BBR earned him the opportunity to pursue graduate studies at Washington State University, where he received MS and Ph.D. degrees in Agronomy and crop science. Currently, Cedric serves as a Special Assistant to the CEO at Food Systems for the Future, a nutrition-impact investment fund. In this role, he supports the CEO in developing and executing strategic initiatives, conducting research and analysis to inform decision-making, managing special projects, and liaising with stakeholders. Previously he served as a Research Associate at Washington State University, where he led the Global Participatory Quinoa Research Program.",
    image: "/cedric.jpeg",
  },
  {
    name: "Jeanne Ingabire",
    email: "jeanneingabire107@gmail.com",
    title: "Secretary",
    description:
      "Jeanne Ingabire is a board member of BBR, serving as an ambassador and secretary since July 2022. A career public servant with a wealth of experience in healthcare and public service, she currently works as a Briefing Officer within the Indigenous and Intergovernmental Affairs Directorate at Environment and Climate Change Canada. Prior to her career in the public service, Jeanne worked at the Ottawa Hospital as a Sleep Technologist and performed EEGs at the Ottawa Hospital’s Epilepsy Monitoring Unit. She holds a Diploma in Medical Electroneurophysiology Techniques. In addition, Jeanne has worked with the African Perspective Magazine (TAP Magazine) previously based in Ottawa Canada, where she enjoyed learning and helped promote African stories by Africans. Jeanne is passionate about healthcare, especially maternal and children’s health. On her spare time, she enjoys going on adventures with her family, movies, reading and volunteering at children’s hospitals.",
    image: "/jeanne.jpeg",
  },
  {
    name: "Steven Kega",
    email: "stevenkega@gmail.com",
    title: "Treasurer",
    description:
      "Steven became a part of BBR during his studies in agricultural sciences at the Institute ISAE in Rwanda. Initially recruited to support BBR's food security initiative in Gashora, Rwanda, he swiftly climbed the ranks and assumed the role of Stakeholders' Engagement Coordinator. In this capacity, he provided support to foreign volunteers and their Rwandan counterparts collaborating on community development projects. Steven's agricultural expertise and dedication to Rwanda's sustainable development goals positioned him as a key contributor to the implementation of BBR's Gashora Integrated Community Development Project, focusing on food security, nutrition, and wellness. Steven association with BBR enabled him to pursue further education at Thompson River University, where he earned an M.Sc. in Environmental Sciences. Presently, Steven Kega serves as a civil servant with AAFC - Agriculture and Agri-Food Canada, holding the position of Physical Scientist - Geoinformatics, within the Government of Canada. ",
    image: "/steven.jpeg",
  },
];

const rwandaTeamMembers: Team[] = [
  {
    name: "Maurice Kwizerimana",
    email: "mauricekwizera4@gmail.com",
    title: "Country Director",
    description:
      "Maurice’s Youth Champion &amp; Ambassador of peace who joined at the AEGIS Trust/ Kigali Genocide Memorial as a volunteer from 2013 in One Million Voices project and started working as YOUTH OFFICER beginning of 2015 where He worked closely with more than 526 Youth Champions &amp; Ambassadors across the country.  Middle of 2016 worked as engagement officer for the past 6.5 years in which He engaged more than 40 thousand visitors to become friends of KGM.",
    image: "/maurice.jpeg",
  },
  {
    name: "William Kamili",
    email: "williamkamili@gmail.com",
    title: "Horticulturalist",
    description:
      "Kamili William serves as the Financial Advisor to COVAGA, bringing a wealth of expertise in agricultural sciences. Holding a Bachelor of Science degree with Honors in Crop Science and an Advanced Diploma in Crop Production, both earned from the University of Rwanda College of Agriculture and Veterinary Medicine (UR-CAVM), formerly known as ISAE BUSOGO, Kamili possesses a strong educational background in the field. With a focus on agricultural sciences, his qualifications equip him to provide valuable financial advice to COVAGA, leveraging his knowledge and skills in crop science and production. Kamili William's unique blend of academic achievements and practical experience positions him as a key asset in guiding financial decisions within the agricultural sector.",
    image: "/william.jpeg",
  },
  {
    name: "Yvette Abayizeye",
    email: "yvetteabayizeye@gmail.com",
    title: "Financial Coordinator",
    description:
      "Yvette Nelly Abayizeye is a candidate for a Bachelor's Degree in Business Management, specializing in the Department of Procurement and Supply Chain Management. Demonstrating a keen interest in the humanitarian field, she boasts seven years of experience at GIRA UBUMUNTU. Additionally, Yvette has accumulated six years of expertise in customer service and supply chain roles with various companies. As a quick learner with a penchant for acquiring new skills, she pursues her passion for storytelling through photography. Yvette is characterized by her enthusiasm for multiculturalism and an unwavering commitment to continuous learning. Her overarching goal is to achieve personal success as a woman and, in turn, provide financial support to others.",
    image: "/yvette.jpeg",
  },
  {
    name: "Lewis Nziza",
    email: "lewisnziza@gmail.com",
    title: "Social Media Coordinator",
    description:
      "Meet Nziza Lewis, a visionary storyteller, photographer, and videographer hailing from the picturesque landscapes of Rwanda. With a keen eye for capturing moments that transcend the ordinary, Nziza weaves visual narratives that resonate with depth and emotion. His lens not only frames images but also tells stories that linger in the hearts of those who experience them. Through the art of storytelling, Nziza Lewis invites you to see the world through his unique perspective, where each image is a chapter, and each video a journey into the soul of his subjects and surroundings.",
    image: "/lewis.png",
  },
];

export default function Page() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <div className={classes.root}>
        <Container size="lg">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Drawer offset={10} opened={opened} onClose={toggle}>
                <NavbarSimple />
              </Drawer>
              <Burger
                opened={opened}
                onClick={toggle}
                color="white"
                size={"lg"}
                mb={10}
              />
              <Title className={classes.title}>
                Meet Our
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: "red", to: "yellow" }}
                >
                  {" "}
                  Team
                </Text>{" "}
              </Title>

              <Text className={classes.description} mt={30}>
                A non-profit organization designed to foster Rwanda&apos;s
                sustainable development initiatives through practical learning
                and action.
              </Text>

              <Button
                variant="gradient"
                gradient={{ from: "red", to: "yellow" }}
                size="xl"
                className={classes.control}
                mt={40}
              >
                Donate Now
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Team
        location="Canada"
        description="The extraordinary board members of BBRwanda"
      />
      {canadaTeamMembers.map((props) => {
        return (
          <Box key={props.name} my={40}>
            <TeamMember {...props} />
          </Box>
        );
      })}
      <Team location="Rwanda" description="The great individuals of BBRwanda" />
      {rwandaTeamMembers.map((props) => {
        return (
          <Box key={props.name} my={40}>
            <TeamMember {...props} />
          </Box>
        );
      })}
      <ContactUs />
    </>
  );
}
