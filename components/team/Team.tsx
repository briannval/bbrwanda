import { Container, Title, Text, Box, Button, SimpleGrid } from "@mantine/core";
import classes from "./Team.module.css";

export function Team() {
  return (
    <Container size="lg" py="2xl" my={50}>
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Our <span className={classes.catch}>team</span>
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        The great individuals behind Building Bridges with Rwanda
      </Text>
    </Container>
  );
}
