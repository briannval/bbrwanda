"use client";
import {
  Box,
  Container,
  Title,
  Button,
  Group,
  Text,
  Divider,
  Image,
} from "@mantine/core";
import classes from "./page.module.css";
import { IconArrowLeft } from "@tabler/icons-react";
import { Leader } from "../../../components/proj/spec/Leader";
import { projectInfo5 } from "../info/projectsInfo";

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
              {projectInfo5.titleHighlight}
            </span>{" "}
            <br /> {projectInfo5.titleRight}
          </Title>
          <Text c="dimmed" mt="md">
            {projectInfo5.description}
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
              name={projectInfo5.leaderName}
              email={projectInfo5.leaderEmail}
              profile={projectInfo5.leaderProfile}
            />
          </Box>

          <Divider my={40} />
          <Box my={40} className={classes.headingWrapper}>
            <Text className={classes.headingText}>Images</Text>
            <Box className={classes.imagebox}>
              <Image src="/cic2.jpg" alt="cic" radius="lg" />

              <Text className={classes.caption}>
                The Covaga Innovation Centre, build by international volunteers
                working side-by-side with Rwandans as a gift
              </Text>
            </Box>
            <Box className={classes.imagebox}>
              <Image src="/cic1.jpeg" alt="cic" radius="lg" />

              <Text className={classes.caption}>
                Lama Mugabo. Nick has been a major supporter of BBR mission in
                Gashora
              </Text>
            </Box>
          </Box>
        </div>
      </div>
    </Container>
  );
}
