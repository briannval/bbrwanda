"use client";

import {
  Container,
  Title,
  Text,
  Button,
  Burger,
  Drawer,
  Box,
  Group,
  Badge,
} from "@mantine/core";
import classes from "./page.module.css";
import { useDisclosure } from "@mantine/hooks";
import { NavbarSimple } from "../components/NavbarSimple";
import { ContactUs } from "../components/ContactUs";
import { FeaturesCards } from "../components/FeatureCards";
import { FeaturesImages } from "../components/FeaturesImages";
import { EmailBanner } from "../components/EmailBanner";
import { VolunteerForm } from "../components/VolunteerForm";
import { IconArrowLeftBar } from "@tabler/icons-react";
import { IconArrowLeft } from "@tabler/icons-react";

export default function Page() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <div className={classes.root}>
        <Container size="lg">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Box display="flex">
                <Drawer offset={10} opened={opened} onClose={toggle}>
                  <NavbarSimple />
                </Drawer>
                <Group
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Burger
                    opened={opened}
                    onClick={toggle}
                    color="white"
                    size={"lg"}
                  />
                  <Badge color="orange">
                    <Group
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconArrowLeft
                        width={15}
                        height={15}
                        style={{ marginRight: -10 }}
                      />
                      Click here for more
                    </Group>
                  </Badge>
                </Group>
              </Box>
              <Title className={classes.title}>
                Building Bridges With
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: "red", to: "yellow" }}
                >
                  {" "}
                  Rwanda
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
                onClick={() => {
                  window.location.href = "https://bbr.nationbuilder.com/";
                }}
              >
                Donate Now
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Box className={classes.imagebox}>
        <Text className={classes.welcomeText}>
          Inform. Engage.
          <Text component="span" inherit color="orange">
            {" "}
            Inspire.
          </Text>
        </Text>
      </Box>
      <FeaturesImages />
      <EmailBanner />
      <FeaturesCards />
      <VolunteerForm />
      <ContactUs />
    </>
  );
}
