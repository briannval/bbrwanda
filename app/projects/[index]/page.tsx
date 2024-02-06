"use client";

import {
  Box,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  Divider,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "./page.module.css";
import { IconArrowLeft } from "@tabler/icons-react";
import { Objectives } from "../../../components/proj/spec/Objectives";
import { Leader } from "../../../components/proj/spec/Leader";

export default function Page() {
  const getBack = () => {
    window.location.href = "/projects";
  };

  return (
    <Container size="md" className={classes.outer}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Button
            mb={40}
            radius="xl"
            size="lg"
            variant="outline"
            className={classes.back}
            onClick={getBack}
          >
            <Group>
              <IconArrowLeft />
              <Text className={classes.backText}>Back</Text>
            </Group>
          </Button>
          <Title className={classes.title}>
            The <span className={classes.highlight}>2024</span> <br />{" "}
            Sustainable Development Tour
          </Title>
          <Text c="dimmed" mt="md">
            Building Bridges for Rwanda (BBR) is planning to embark on a unique,
            collaborative, and transnational Sustainable Development Reflection
            Tour in Rwanda in order to showcase and highlight 4 innovative and
            transformational projects that will lead to greatly improving the
            lives, environment, and communities in rural Rwanda.
          </Text>
          <Group mt={30}>
            <Button
              radius="xl"
              size="md"
              variant="gradient"
              gradient={{ from: "red", to: "yellow" }}
              className={classes.control}
            >
              Email Leader
            </Button>
          </Group>
          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>Leader</Text>
            <Leader
              name="Lama Mugabo"
              email="lmugabo75@gmail.com"
              profile="/lama.jpeg"
            />
          </Box>

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>Objectives</Text>
            <Objectives />
          </Box>

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>Overview</Text>
          </Box>

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>Goal</Text>
          </Box>

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>Purpose</Text>
          </Box>

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>Target Audience</Text>
          </Box>

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>
              Initiatives and Projects
            </Text>
          </Box>
        </div>
      </div>
    </Container>
  );
}
