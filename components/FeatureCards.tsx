import {
  Button,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  useMantineTheme,
  Box,
  AspectRatio,
  Image,
} from "@mantine/core";
import classes from "./FeatureCards.module.css";

const mockdata = [
  {
    title: "Revitalization of the Covaga Innovation Center",
    image:
      "https://enclosuretakerefuge.files.wordpress.com/2014/04/img_1062.jpg?w=739&h=540",
    lead: "Led by Steven Kega",
  },
  {
    title: "Quinoa Demonstration Garden at the CIC",
    image: "/quinoa.jpeg",
    lead: "Led by Cedric Habiyaremye",
  },
  {
    title: "Sustainable Development Reflection Tour",
    image: "/kigali.jpeg",
    lead: "Led by Lama Mugabo",
  },
  {
    title: "Support to Gira Ubumuntu Project",
    image: "/ubumuntu.jpeg",
    lead: "Led by Jeanne Ingabire",
  },
  {
    title: "Support to Covaga Weavers Cooperative",
    image: "/covaga.jpeg",
    lead: "Lead by Steven Kega",
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const cards = mockdata.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} alt="Card Image" />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.lead}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));
  return (
    <Container size="lg" py="2xl" my={50}>
      <Title order={2} className={classes.title} ta="center" mt="sm">
        <span className={classes.catch}>Priority </span>Projects
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Nurturing transformation, fostering empowerment, and promoting the
        well-being of communities in Rwanda
      </Text>
      <Container py="xl">
        <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
      </Container>
    </Container>
  );
}
