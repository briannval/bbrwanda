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
import { projectInfo4 } from "../info/projectsInfo";

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
            {projectInfo4.titleLeft}{" "}
            <span className={classes.highlight}>
              {projectInfo4.titleHighlight}
            </span>{" "}
            <br /> {projectInfo4.titleRight}
          </Title>
          <Text c="dimmed" mt="md">
            {projectInfo4.description}
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
              name={projectInfo4.leaderName}
              email={projectInfo4.leaderEmail}
              profile={projectInfo4.leaderProfile}
            />
          </Box>

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>Images</Text>
            <Image
              src="/giraubumuntu1.jpeg"
              alt="Gira Ubumuntu"
              radius="lg"
              my={20}
            />
            <Image
              src="/giraubumuntu2.jpeg"
              alt="Gira Ubumuntu"
              radius="lg"
              my={20}
            />
          </Box>
        </div>
      </div>
    </Container>
  );
}
