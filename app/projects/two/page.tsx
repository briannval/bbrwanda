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
import { Leader } from "../../../components/proj/spec/Leader";
import { projectInfo2 } from "../info/projectsInfo";

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
            {projectInfo2.titleLeft}{" "}
            <span className={classes.highlight}>
              {projectInfo2.titleHighlight}
            </span>{" "}
            <br /> {projectInfo2.titleRight}
          </Title>
          <Text c="dimmed" mt="md">
            {projectInfo2.description}
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
              name={projectInfo2.leaderName}
              email={projectInfo2.leaderEmail}
              profile={projectInfo2.leaderProfile}
            />
          </Box>

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>History</Text>
          </Box>

          <Text c="dimmed" mt="md" ml={10}>
            {projectInfo2.history}
          </Text>

          <Image src="/covaga1.jpeg" alt="covaga" radius="lg" my={20} />

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>Construction</Text>
          </Box>

          <Text c="dimmed" mt="md" ml={10}>
            {projectInfo2.construction}
          </Text>

          <Image src="/covaga2.jpeg" alt="covaga" radius="lg" my={20} />

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>Future</Text>
          </Box>

          <Text c="dimmed" mt="md" ml={10}>
            {projectInfo2.future}
          </Text>

          <Image src="/covaga3.jpeg" alt="covaga" radius="lg" my={20} />
        </div>
      </div>
    </Container>
  );
}
