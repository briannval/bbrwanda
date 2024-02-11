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

const child = <Skeleton height={400} radius="md" animate={false} />;

export function Gallery() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

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
      <Container mt={20}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Image
            src="/gallery1.jpeg"
            alt="Gallery"
            height={PRIMARY_COL_HEIGHT}
            radius="lg"
          />
          <Grid gutter="md">
            <Grid.Col>
              <Image
                src="/gallery2.jpeg"
                alt="Gallery"
                height={PRIMARY_COL_HEIGHT}
                radius="lg"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Image
                src="/galler3.jpeg"
                alt="Gallery"
                height={PRIMARY_COL_HEIGHT}
                radius="lg"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Image
                src="/galler4.jpeg"
                alt="Gallery"
                height={PRIMARY_COL_HEIGHT}
                radius="lg"
              />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>

      <Container my="md">
        <Grid>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <Image src="/gallery5.jpeg" alt="Gallery" radius="lg" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 8 }}>
            <Image src="/galler.jpeg" alt="Gallery" radius="lg" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
