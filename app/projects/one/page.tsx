"use client";
import {
  Image,
  Box,
  Container,
  Title,
  Button,
  Group,
  Text,
  Divider,
} from "@mantine/core";
import classes from "./page.module.css";
import { IconArrowLeft } from "@tabler/icons-react";
import { Objectives } from "../../../components/proj/spec/Objectives";
import { Leader } from "../../../components/proj/spec/Leader";
import { projectInfo1 } from "../info/projectsInfo";

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
            {projectInfo1.titleLeft}{" "}
            <span className={classes.highlight}>
              {projectInfo1.titleHighlight}
            </span>{" "}
            <br /> {projectInfo1.titleRight}
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
            <Text className={classes.headingText}>Project Lead</Text>
            <Leader
              name={projectInfo1.leaderName}
              email={projectInfo1.leaderEmail}
              profile={projectInfo1.leaderProfile}
            />
          </Box>

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>Objectives</Text>
            <Objectives {...projectInfo1.objectives} />

            <Image src="/sd1.jpeg" alt="sd" radius="lg" my={20} />
          </Box>

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>Overview</Text>
          </Box>

          <Text c="dimmed" mt="md" ml={10}>
            {projectInfo1.overview}
          </Text>

          <Image src="/sd2.jpeg" alt="sd" radius="lg" my={20} />

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>Goal</Text>
          </Box>

          <Text c="dimmed" mt="md" ml={10}>
            {projectInfo1.goal}
          </Text>

          <Image src="/sd3.jpeg" alt="sd" radius="lg" my={20} />

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>Purpose</Text>
          </Box>

          <Text c="dimmed" mt="md" ml={10}>
            {projectInfo1.purpose}
          </Text>

          <Image src="/sd4.jpeg" alt="sd" radius="lg" my={20} />

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>Target Audience</Text>
          </Box>

          <Text c="dimmed" mt="md" ml={10}>
            {projectInfo1.targetAudience}
          </Text>

          <Image src="/sd5.jpeg" alt="sd" radius="lg" my={20} />

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>
              Initiatives and Projects
            </Text>
          </Box>

          <Text c="dimmed" mt="md" ml={10}>
            {projectInfo1.initiativeProject}
          </Text>

          <Image src="/sd6.jpeg" alt="sd" radius="lg" my={20} />
        </div>
      </div>
    </Container>
  );
}
