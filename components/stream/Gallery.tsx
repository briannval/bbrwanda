import {
  Image,
  Title,
  Text,
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  rem,
  Box,
} from "@mantine/core";

import classes from "./Gallery.module.css";

const PRIMARY_COL_HEIGHT = rem(400);

export function Gallery() {
  return (
    <>
      <Box className={classes.header}>
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Our <span className={classes.catch}>Photos</span>
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Capturing BBRwanda&apos;s warm spirit in smiles and laughter
        </Text>
      </Box>
      <Container mt={20}></Container>
    </>
  );
}
