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

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>About</Text>
          </Box>

          <Text c="dimmed" mt="md" ml={10}>
            {projectInfo3.about}
          </Text>

          <Image src="/quinoa1.jpeg" alt="quinoa" radius="lg" my={20} />

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>Sustainability</Text>
          </Box>

          <Text c="dimmed" mt="md" ml={10}>
            {projectInfo3.sustainability}
          </Text>

          <Image src="/quinoa2.jpeg" alt="quinoa" radius="lg" my={20} />

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>Potential</Text>
          </Box>

          <Text c="dimmed" mt="md" ml={10}>
            {projectInfo3.potential}
          </Text>

          <Image src="/quinoa3.jpeg" alt="quinoa" radius="lg" my={20} />
        </div>
      </div>
    </Container>
  );
}
