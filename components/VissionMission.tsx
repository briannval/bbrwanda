import {
  Button,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
  List,
} from "@mantine/core";
import { IconEye, IconEmpathize } from "@tabler/icons-react";
import classes from "./VissionMission.module.css";
import { IconTargetArrow } from "@tabler/icons-react";

const mockdata = [
  {
    title: "Vision",
    description: [
      "A vibrant and resilient community, flourishing through the power of cross-cultural reconciliation, mutual respect, and collaboration.",
    ],
    icon: IconEye,
  },
  {
    title: "Mission",
    description: [
      "Empower communities by facilitating cross-cultural exchanges of reconciliation knowledge, fostering understanding, healing, and unity.",
    ],
    icon: IconTargetArrow,
  },
  {
    title: "Values",
    description: ["Compassion", "Reciprocity", "Integrity", "Co-Development"],
    icon: IconEmpathize,
  },
];

export function VissionMission() {
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
      <Text className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <List>
        {feature.description.map((description) => {
          return (
            <List.Item key={description}>
              <Text fz="sm" c="dimmed" mt="sm">
                {description}
              </Text>
            </List.Item>
          );
        })}
      </List>
    </Card>
  ));

  return (
    <Container size="lg" py="2xl" my={50}>
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Our Statement
      </Title>

      <Text
        c="dimmed"
        className={classes.description}
        ta="center"
        mt="md"
      ></Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
