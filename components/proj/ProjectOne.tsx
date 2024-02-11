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

        <Card radius="md" className={`${classes.card} ${classes.cardOne}`}>
          <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

          <div className={classes.content}>
            <Text size="md" fw={700} className={classes.title}>
              Revitalization of the Covaga Innovation Center
            </Text>

            <Text size="sm" className={classes.description}></Text>

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
        <Card radius="md" className={`${classes.card} ${classes.cardTwo}`}>
          <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

          <div className={classes.content}>
            <Text size="lg" fw={700} className={classes.title}>
              Quinoa Demonstration Garden
            </Text>

            <Text size="sm" className={classes.description}></Text>

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
        <Card radius="md" className={`${classes.card} ${classes.cardThree}`}>
          <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

          <div className={classes.content}>
            <Text size="lg" fw={700} className={classes.title}>
              Sustainable Development Reflection Tour
            </Text>

            <Text size="sm" className={classes.description}></Text>

            <Button
              className={classes.action}
              variant="white"
              color="dark"
              size="md"
              onClick={handleClick}
            >
              View Details
            </Button>
          </div>
        </Card>
        <Card radius="md" className={`${classes.card} ${classes.cardFour}`}>
          <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

          <div className={classes.content}>
            <Text size="lg" fw={700} className={classes.title}>
              Support to Gira Ubumuntu Project
            </Text>

            <Text size="sm" className={classes.description}></Text>

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
        <Card radius="md" className={`${classes.card} ${classes.cardFive}`}>
          <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

          <div className={classes.content}>
            <Text size="lg" fw={700} className={classes.title}>
              Support to Covaga Weavers Cooperative
            </Text>

            <Text size="sm" className={classes.description}></Text>

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
      </Box>
    </>
  );
}
