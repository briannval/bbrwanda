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
    title: "Realization of the Covaga Innovation Center, Gashora",
    image:
      "https://enclosuretakerefuge.files.wordpress.com/2014/04/img_1062.jpg?w=739&h=540",
    lead: "Led by Steven Kega",
  },
  {
    title: "Quinoa Demonstration Garden at the CIC, Gashora",
    image: "https://farm4.staticflickr.com/3868/14742838447_823f42bcae.jpg",
    lead: "Led by Cedric Habiyaremye",
  },
  {
    title: "Sustainable Development Reflection Tour, to Rwanda",
    image:
      "https://www.volcanoesparkrwanda.org/wp-content/uploads/2023/06/rwanda-lead-2019.jpg",
    lead: "Led by Lama Mugabo",
  },
  {
    title: "Support to Girubumuntu Project",
    image:
      "https://assets.globalpartnership.org/s3fs-public/styles/hero_stories/public/2023-08/8559171613_0d5578a139_o.jpg?VersionId=Sx4q8vwLl1UI6WGmBikoCYmZH07Hzlae&itok=yz-e6e-u",
    lead: "Led by Jeanne Ingabire",
  },
  {
    title: "Support to Covaga Weavers Cooperative",
    image:
      " https://blog.butterfield.com/wp-content/uploads/2022/04/7-Facts-That-Will-Change-What-You-Think-About-Rwanda.png",
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
        Our five <span className={classes.catch}>priority </span>projects
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Nurturing transformation, fostering empowerment, and promoting the
        well-being of communities in Rwanda
      </Text>
      <Container py="xl">
        <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
      </Container>
      <Box className={classes.buttonContainer}>
        <Button
          variant="gradient"
          gradient={{ from: "red", to: "yellow" }}
          size="lg"
          className={classes.button}
        >
          Learn More
        </Button>
      </Box>
    </Container>
  );
}
