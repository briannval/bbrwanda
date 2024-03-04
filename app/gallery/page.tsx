"use client";

import { Container, Title, Text, Button, Burger, Drawer } from "@mantine/core";
import classes from "./page.module.css";
import { useDisclosure } from "@mantine/hooks";
import { NavbarSimple } from "../../components/NavbarSimple";
import { ContactUs } from "../../components/ContactUs";
import { Gallery } from "../../components/stream/Gallery";

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
                  Gallery
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
      <Gallery />
      <ContactUs />
    </>
  );
}
