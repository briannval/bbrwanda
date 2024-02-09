import { Container, Title, Text, Box, Button, SimpleGrid } from "@mantine/core";
import classes from "./Team.module.css";

export interface TeamHeaderInterface {
  location: string;
  description: string;
}

export const Team = ({ location, description }: TeamHeaderInterface) => {
  return (
    <Container size="lg" py="2xl" my={50}>
      <Title order={2} className={classes.title} ta="center" mt="sm">
        {location} <span className={classes.catch}>Team</span>
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        {description}
      </Text>
    </Container>
  );
};
