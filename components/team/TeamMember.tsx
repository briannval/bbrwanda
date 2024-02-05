import { Avatar, Text, Button, Paper, Flex, Box } from "@mantine/core";
import classes from "./TeamMember.module.css";

interface Team {
  name: string;
  email: string;
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
      <Box>
        <Box m={40}>
          <Avatar src={props.image} size={300} radius={300} mx="auto" />
          <Text ta="center" fz="lg" fw={500} mt="md">
            {props.name}
          </Text>
          <Text px={20} ta="center" c="dimmed" fz="sm">
            {props.email} • {props.title}
          </Text>
        </Box>
        <Box m={40}>
          <Text>{props.description}</Text>
        </Box>
      </Box>
    </Paper>
  );
}
