"use client";

import {
  Container,
  Title,
  Text,
  Button,
  Burger,
  Drawer,
  Box,
} from "@mantine/core";
import classes from "./page.module.css";
import { useDisclosure } from "@mantine/hooks";
import { NavbarSimple } from "../../components/NavbarSimple";
import { ContactUs } from "../../components/ContactUs";
import { ProjectOne } from "../../components/proj/ProjectOne";
import { ProjectTwo } from "../../components/proj/ProjectTwo";
import { ProjectThree } from "../../components/proj/ProjectThree";
import { ProjectFour } from "../../components/proj/ProjectFour";
import { ProjectFive } from "../../components/proj/ProjectFive";

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
                Our
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: "red", to: "yellow" }}
                >
                  {" "}
                  Projects
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
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      <ProjectFour />
      <ProjectFive />
      <ContactUs />
    </>
  );
}
