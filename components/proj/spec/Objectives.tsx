import { Text, SimpleGrid, Container, rem } from "@mantine/core";
import {
  IconTruck,
  IconCertificate,
  IconCoin,
  IconHexagonNumber1,
  IconHexagonNumber2,
  IconHexagonNumber3,
} from "@tabler/icons-react";
import classes from "./Objectives.module.css";
import { ObjectiveProps } from "../../../app/projects/[index]/projectsInfo";

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({
  icon: Icon,
  title,
  description,
  className,
  ...others
}: FeatureProps) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon
          style={{ width: rem(38), height: rem(38) }}
          className={classes.icon}
          stroke={1.5}
        />
        <Text fw={700} fz="lg" mb="xs" className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

export function Objectives({
  objectiveTitles,
  objectiveDescriptions,
}: ObjectiveProps) {
  const mockdata = [
    {
      icon: IconHexagonNumber1,
      title: objectiveTitles[0],
      description: objectiveDescriptions[0],
    },
    {
      icon: IconHexagonNumber2,
      title: objectiveTitles[1],
      description: objectiveDescriptions[1],
    },
    {
      icon: IconHexagonNumber3,
      title: objectiveTitles[2],
      description: objectiveDescriptions[2],
    },
  ];

  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg">
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
