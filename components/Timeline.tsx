import { Box, Title, Timeline, Text } from "@mantine/core";
import { IconGitBranch } from "@tabler/icons-react";
import classes from "./Timeline.module.css";

const history = [
  {
    year: 2005,
    title: "Founding",
    description:
      "BBR was established by Lama Mugabo to support the reconstruction of Rwanda following the 1994 genocide against the Tutsis",
  },
  {
    year: 2006,
    title: "Fundraising",
    description:
      "A fundraiser was organized, raising seven thousand dollars to support Covaga, a weaver's cooperative turning environmental challenges into social and economic opportunities",
  },
  {
    year: 2008,
    title: "Collaboration",
    description:
      "Lama Mugabo returned to Rwanda and collaborated with various organizations supporting the country's post-genocide reconstruction and reconciliation.",
  },
  {
    year: 2008,
    title: "Partnership",
    description:
      "BBR partnered with Developing World Connections (DWC), recruiting volunteers for 2 to 4 weeks.",
  },
  {
    year: 2016,
    title: "Canada",
    description:
      "Upon returning to Canada, Lama continued the work, bringing visitors from Canada to Rwanda. Two proteges, Cedric (VP) and Steven (Treasurer), both educated in Canada and the US, served on the BBR board.",
  },
  {
    year: 2019,
    title: "Joining Hands",
    description:
      "BBR joined hands with Hogan's Alley Society, SFU Institute for Disapora Research and Engagement.",
  },
];

export function History() {
  return (
    <>
      <Box className={classes.historybox}>
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Our <span className={classes.catch}>history</span>
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Tracing the legacy of transformation and empowerment over the years
        </Text>
        <Timeline active={-1} bulletSize={45} lineWidth={4} my={20}>
          {history.map((historyItem) => {
            return (
              <Timeline.Item
                key={historyItem.year}
                bullet={<IconGitBranch size={24} />}
              >
                <Text className={classes.timelineTitle} size="lg" mb={10}>
                  {historyItem.title}
                </Text>
                <Text c="dimmed" size="xs">
                  {historyItem.description}
                </Text>
                <Text size="md" mt={4}>
                  {historyItem.year}
                </Text>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </Box>
    </>
  );
}
