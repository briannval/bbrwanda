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
import Link from "next/link";

const data = [
  {
    icon: IconQuestionMark,
    title: "About",
    description: "Learn how we came around",
    href: "/about",
  },
  {
    icon: IconHeartHandshake,
    title: "Projects",
    description: "See what we do",
    href: "/projects",
  },
  {
    icon: IconUser,
    title: "Team",
    description: "Discover those behind BBR",
    href: "/meetTeam",
  },
  {
    icon: IconCamera,
    title: "Gallery",
    description: "Our work, visualized",
    href: "/gallery",
  },
];

export function FeaturesImages() {
  const items = data.map((item) => (
    <Link
      href={item.href}
      key={item.title}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className={classes.item}>
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
    </Link>
  ));

  return (
    <Container size={700} className={classes.wrapper}>
      <Title className={classes.title} order={2}>
        We will leave no one behind.
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          BBR is devoted to advancing Rwanda&#39;s sustainable development
          objectives through collaborative partnerships with our international
          allies in development. Together, we aspire to build upon Rwanda&#39;s
          remarkable achievements over the past thirty years and propel its
          transformation into a high-income economy by 2050 and beyond.
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
