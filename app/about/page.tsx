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
import { History } from "../../components/Timeline";
import { VissionMission } from "../../components/VissionMission";
import { FaqWithBg } from "../../components/FaqWithBg";
import Image from "next/image";

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
                About
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: "red", to: "yellow" }}
                >
                  {" "}
                  Us
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
      <Box className={classes.history}>
        <History />
      </Box>
      <Box className={classes.imagebox}>
        <Image src="/carousel1.jpeg" alt="About Us" width={800} height={600} />
        <Text className={classes.caption}>
          Lama Mugabo, BBR Chair and Peter Uwiragiye, Safari Tours Operator
        </Text>
      </Box>
      <ContactUs />
    </>
  );
}
