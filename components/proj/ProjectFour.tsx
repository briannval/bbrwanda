import { Card, Overlay, Button, Text, Box } from "@mantine/core";
import classes from "./ProjectOne.module.css";

export function ProjectFour() {
  return (
    <Card radius="md" className={classes.card}>
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

      <div className={classes.content}>
        <Text size="lg" fw={700} className={classes.title}>
          Support to Gira Ubumuntu Project
        </Text>

        <Text size="sm" className={classes.description}>
          Save up to 25% at Fifth Season Hotels in Europe, the Middle East,
          Africa and Asia Pacific
        </Text>

        <Button
          className={classes.action}
          variant="white"
          color="dark"
          size="md"
        >
          View Details
        </Button>
      </div>
    </Card>
  );
}
