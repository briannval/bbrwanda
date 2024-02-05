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

const teamMembers: Team[] = [
  {
    name: "Lama Mugabo",
    email: "lmugabo75@gmail.com",
    title: "Chair",
    description:
      "Lama Mugabo is a Community Planner who uses storytelling as planning tool. In 2005, Mugabo co-founded BBR – Building Bridges with Rwanda; a non-profit organization designed to create a platform for collaboration between international volunteers and their Rwandan counterparts who are rebuilding their society. As Baraza Host, Lama will be interviewing Rwanda’s change agents and development partners to share their insights about the Africa we want to build. In Baraza, conversations will focus on personal transformation, while also exploring ways innovations in science and technology are used to foster sustainability.",
    image: "/lama.jpeg",
  },
  {
    name: "Jeanne Ingabire",
    email: "jeanneingabire107@gmail.com",
    title: "Secretary",
    description:
      "Jeanne Ingabire is a board member of BBR, serving as an ambassador and secretary since July 2022. A career public servant with a wealth of experience in healthcare and public service, she currently works as a Briefing Officer within the Indigenous and Intergovernmental Affairs Directorate at Environment and Climate Change Canada. Prior to her career in the public service, Jeanne worked at the Ottawa Hospital as a Sleep Technologist and performed EEGs at the Ottawa Hospital’s Epilepsy Monitoring Unit. She holds a Diploma in Medical Electroneurophysiology Techniques. In addition, Jeanne has worked with the African Perspective Magazine (TAP Magazine) previously based in Ottawa Canada, where she enjoyed learning and helped promote African stories by Africans. Jeanne is passionate about healthcare, especially maternal and children’s health. On her spare time, she enjoys going on adventures with her family, movies, reading and volunteering at children’s hospitals.",
    image: "/jeanne.jpeg",
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
      <Team />
      {teamMembers.map((props) => {
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
