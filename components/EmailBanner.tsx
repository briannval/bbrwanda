import { Text, Title, Button, Box, Badge } from "@mantine/core";
import classes from "./EmailBanner.module.css";
import Image from "next/image";

export function EmailBanner() {
  return (
    <>
      <Title order={2} className={classes.headingTitle} ta="center" mt="sm">
        <span className={classes.headingCatch}>Upcoming </span>News
      </Title>
      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        BBR&apos;s next plans and future events
      </Text>
      <Box className={classes.outerWrapper}>
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Badge
              size="15px"
              color="orange"
              variant="outline"
              style={{ padding: 15, marginBottom: 10 }}
            >
              New
            </Badge>
            <Title className={classes.title}>
              Sustainable Development Tour
            </Title>
            <Text fw={500} fz="lg" mb={5}>
              Bridging lives and futures of Rwanda
            </Text>
            <Text fz="sm" c="dimmed">
              Providing Canadians with opportunities to invest funding and
              resources in community projects developed in Rwanda
            </Text>

            <Button
              size="md"
              className={classes.control}
              onClick={() => {
                window.location.href = "/projects/one";
              }}
            >
              Learn More
            </Button>
          </div>
          <Image
            src="/tour.jpeg"
            alt="Lama"
            width={600}
            height={300}
            className={classes.image}
          />
        </div>
      </Box>
      <Box className={classes.outerWrapper}>
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Badge
              size="15px"
              color="orange"
              variant="outline"
              style={{ padding: 15, marginBottom: 10 }}
            >
              New
            </Badge>
            <Title className={classes.title}>Kwibuka 30</Title>
            <Text fw={500} fz="lg" mb={5}>
              Honoring resilience and reflecting unity
            </Text>
            <Text fz="sm" c="dimmed">
              April 7th 2024 marks the start of Kwibuka 30, the 30th
              commemoration of the genocide against the Tutsi, which began on
              April 7th 1994.
            </Text>

            <Button
              size="md"
              className={classes.control}
              onClick={() => {
                window.location.href = "https://kgm.rw/events/kwibuka-30/";
              }}
            >
              Learn More
            </Button>
          </div>
          <Image
            src="/kwibuka.jpeg"
            alt="Lama"
            width={600}
            height={300}
            className={classes.image}
          />
        </div>
      </Box>
    </>
  );
}
