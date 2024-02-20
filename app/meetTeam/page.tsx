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
import {
  canadaTeamMembers,
  fundaraisingTeamMembers,
  rwandaTeamMembers,
} from "./info";

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
      <Team location="Canada" description=" " />
      {canadaTeamMembers.map((props) => {
        return (
          <Box key={props.name} my={40}>
            <TeamMember {...props} />
          </Box>
        );
      })}
      <Team location="Rwanda" description=" " />
      {rwandaTeamMembers.map((props) => {
        return (
          <Box key={props.name} my={40}>
            <TeamMember {...props} />
          </Box>
        );
      })}

      <Team location="Fundraising" description=" " />
      {fundaraisingTeamMembers.map((props) => {
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
