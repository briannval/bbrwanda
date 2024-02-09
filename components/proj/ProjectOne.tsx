import { Title, Card, Overlay, Button, Text, Box } from "@mantine/core";
import classes from "./ProjectOne.module.css";

export function ProjectOne() {
  const handleClick = () => {
    window.location.href = "/projects/one";
  };

  return (
    <>
      <Box>
        <Title order={2} className={classes.headerTitle} ta="center" mt="xl">
          Our five <span className={classes.headerCatch}>priority </span>
          projects
        </Title>

        <Text
          c="dimmed"
          className={classes.headerDescription}
          ta="center"
          mt="md"
        >
          Nurturing transformation, fostering empowerment, and promoting the
          well-being of communities in Rwanda
        </Text>

        <Card radius="md" className={classes.card}>
          <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

          <div className={classes.content}>
            <Text size="md" fw={700} className={classes.title}>
              Revitalization of the Covaga Innovation Center
            </Text>

            <Text size="sm" className={classes.description}>
              Save up to 25% at Fifth Season Hotels in Europe, the Middle East,
              Africa and Asia Pacific
            </Text>

            <Button
              onClick={handleClick}
              className={classes.action}
              variant="white"
              color="dark"
              size="md"
            >
              View Details
            </Button>
          </div>
        </Card>
      </Box>
    </>
  );
}
