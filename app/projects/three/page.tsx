"use client";
import {
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
import { projectInfo3 } from "../info/projectsInfo";

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
            <span className={classes.highlight}>
              {projectInfo3.titleHighlight}
            </span>{" "}
            <br /> {projectInfo3.titleRight}
          </Title>
          <Text c="dimmed" mt="md">
            {projectInfo3.description}
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
              name={projectInfo3.leaderName}
              email={projectInfo3.leaderEmail}
              profile={projectInfo3.leaderProfile}
            />
          </Box>
        </div>
      </div>
    </Container>
  );
}
