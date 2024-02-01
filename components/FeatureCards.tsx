import {
  Button,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { IconCoin, IconStethoscope, IconNotebook } from "@tabler/icons-react";
import classes from "./FeatureCards.module.css";

const mockdata = [
  {
    title: "Economic Opportunity",
    description:
      "Through our training program, we're sowing the seeds of economic opportunity.",
    icon: IconCoin,
  },
  {
    title: "Nutrition and Wellness",
    description:
      "We believe that good nutrition is the cornerstone of a healthy life.",
    icon: IconStethoscope,
  },
  {
    title: "Education",
    description: "We're committed to providing learning opportunities for all.",
    icon: IconNotebook,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.yellow[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="2xl" my={50}>
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Our three <span className={classes.catch}>key</span> areas
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Nurturing transformation, fostering empowerment, and promoting the
        well-being of communities in Rwanda
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
