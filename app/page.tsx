"use client";

import {
  Container,
  Title,
  Text,
  Button,
  Burger,
  Drawer,
  Divider,
} from "@mantine/core";
import classes from "./HeroImageRight.module.css";
import { useDisclosure } from "@mantine/hooks";
import { NavbarSimple } from "../components/NavbarSimple";
import { ContactUs } from "../components/ContactUs";
import { FeaturesCards } from "../components/FeatureCards";
import Slider from "../components/keen/Slider";
import { FaqWithBg } from "../components/FaqWithBg";
import { VissionMission } from "../components/VissionMission";

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
              >
                Donate Now
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <VissionMission />
      <FaqWithBg />
      <FeaturesCards />
      <Slider />
      <ContactUs />
    </>
  );
}
