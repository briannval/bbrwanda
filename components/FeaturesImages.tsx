import {
  Box,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
} from "@mantine/core";
import classes from "./FeaturesImages.module.css";
import {
  IconCamera,
  IconHeartHandshake,
  IconQuestionMark,
  IconUser,
} from "@tabler/icons-react";

const data = [
  {
    icon: IconQuestionMark,
    title: "About",
    description: "Learn how we came around",
  },
  {
    icon: IconHeartHandshake,
    title: "Projects",
    description: "See what we do",
  },
  {
    icon: IconUser,
    title: "Team",
    description: "Discover those behind BBR",
  },
  {
    icon: IconCamera,
    title: "Gallery",
    description: "Our work, visualized",
  },
];

export function FeaturesImages() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.title}>
      <ThemeIcon
        variant="light"
        className={classes.itemIcon}
        size={90}
        radius="md"
      >
        <item.icon className={classes.linkIcon} />
      </ThemeIcon>

      <div>
        <Text className={classes.itemTitle}>{item.title}</Text>
        <Text size="lg" c="dimmed">
          {item.description}
        </Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={classes.wrapper}>
      <Title className={classes.title} order={2}>
        We will leave no one behind.
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Together, we can make a meaningful difference and impact by shedding
          the “torchlights of truth” on Rwanda&#39;s remarkable journey of
          progress as BBR stands in solidarity with the Rwandan peoples and
          government.
        </Text>
      </Container>

      <Box className={classes.gridWrapper}>
        <SimpleGrid cols={1} spacing={50} mt={30}>
          {items}
        </SimpleGrid>
      </Box>
    </Container>
  );
}
