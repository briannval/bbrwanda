import { Avatar, Text, Paper, Box } from "@mantine/core";
import classes from "./TeamMember.module.css";

interface Team {
  name: string;
  title: string;
  description: string;
  image: string;
}

export function TeamMember(props: Team) {
  return (
    <Paper
      className={classes.outer}
      radius="md"
      withBorder
      p="lg"
      bg="var(--mantine-color-body)"
    >
      <Avatar src={props.image} size={300} radius={300} mx="auto" />
      <Text ta="center" fz="lg" fw={500} mt="md">
        {props.name}
      </Text>
      <Text px={20} ta="center" c="dimmed" fz="sm">
        {props.title}
      </Text>
      <Box m={{ md: 40 }} mt={10}>
        <Text className={classes.description}>{props.description}</Text>
      </Box>
    </Paper>
  );
}
