import { Title, Text, Container, Box } from "@mantine/core";

import classes from "./Gallery.module.css";

export function Gallery() {
  return (
    <>
      <Box className={classes.header}>
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Our <span className={classes.catch}>Photos</span>
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Working side by side to build the community <br></br>
          This is our work in Rwanda and Canada
        </Text>
      </Box>
      <Container mt={20}></Container>
    </>
  );
}
