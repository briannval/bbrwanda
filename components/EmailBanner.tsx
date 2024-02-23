import { Text, Title, Button, Box, Badge } from "@mantine/core";
import classes from "./EmailBanner.module.css";
import Image from "next/image";

export function EmailBanner() {
  return (
    <>
      <Title order={2} className={classes.headingTitle} ta="center" mt="sm">
        Upcoming News
      </Title>
      <Text
        c="dimmed"
        className={classes.description}
        ta="center"
        mt="md"
      ></Text>
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
              Kwibuka 30: Making Memory and Legacy in Rwanda
            </Text>
            <Text fz="sm" c="dimmed">
              Kwibuka means to remember in Kinyarwanda and is a dominant concept
              used to commemorate the 1994 Genocide Against the Tutsi in Rwanda.
              On the 30th anniversary of the genocide, this workshop gathers an
              international group of scholars to examine the construction of
              memory and legacy. Drawing on diverse voices and perspectives, the
              presentations will highlight scholarly work grounded in rigorous
              fieldwork in the Rwandan and Great Lakes region to consider the
              Rwandan past and future trajectories.
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
              The 2024 Sustainable Development Reflection Tour
            </Text>
            <Text fz="sm" c="dimmed">
              Building Bridges for Rwanda (BBR) leads reflection tours to
              Rwanda. This unique, collaborative, and transnational sustainable
              development reflection tour in Rwanda as a way of informing,
              engaging, and inspiring its program participants the
              transformation of Rwanda Africa is witnessing today. The
              participants will visit key BBR projects, meet change agents that
              are turning Rwanda’s problems into practical tangible solutions.
              On you are interested in joining our program, contact us at:
              info@bbrwanda.org
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
    </>
  );
}
