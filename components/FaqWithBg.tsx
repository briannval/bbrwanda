import {
  Button,
  Box,
  Title,
  Container,
  Accordion,
  Text,
  Badge,
  Image,
} from "@mantine/core";
import classes from "./FaqWithBg.module.css";

export function FaqWithBg() {
  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Box>
          <Title ta="center" className={classes.title}>
            About Us
          </Title>

          <Accordion
            defaultValue="reset-password"
            variant="separated"
            styles={{
              label: { color: "var(--mantine-color-black)" },
              item: { border: 0 },
            }}
          >
            <Accordion.Item className={classes.item} value="third">
              <Accordion.Control>
                <Box className={classes.badgebox}>
                  <Text className={classes.question}>
                    Our reflection tour in 2024
                  </Text>
                  <Badge
                    ml={12}
                    size="lg"
                    variant="gradient"
                    gradient={{ from: "red", to: "yellow", deg: 90 }}
                  >
                    Important !
                  </Badge>
                </Box>
              </Accordion.Control>
              <Accordion.Panel>
                Building Bridges for Rwanda (BBR) is planning to embark on a
                unique, collaborative, and transnational Sustainable Development
                Reflection Tour in Rwanda in order to showcase and highlight 4
                innovative and transformational projects that will lead to
                greatly improving the lives, environment, and communities in
                rural Rwanda.
                <br></br>
                Find out more about the tour{" "}
                <span className={classes.learnmorebutton}>here</span>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item className={classes.item} value="first">
              <Accordion.Control>
                <Text className={classes.question}>What do we do?</Text>
              </Accordion.Control>
              <Accordion.Panel>
                We foster Rwanda&apos;s sustainable development initiatives
                through practical learning and action.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="second">
              <Accordion.Control>
                <Text className={classes.question}>
                  What we gain from our projects
                </Text>
              </Accordion.Control>
              <Accordion.Panel>
                Nothing. We are a non-profit organization.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="fourth">
              <Accordion.Control>
                <Text className={classes.question}>
                  How we support learning
                </Text>
              </Accordion.Control>
              <Accordion.Panel>
                We facilitate learning exchanges between change agents from the
                global North and local change agents.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="fifth">
              <Accordion.Control>
                <Text className={classes.question}>
                  How international visitors can help
                </Text>
              </Accordion.Control>
              <Accordion.Panel>
                We create a platform where international visitors come to Rwanda
                and work side by side with their Rwandan counterparts to foster
                sustainable development.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="sixth">
              <Accordion.Control>
                <Text className={classes.question}>
                  Our role in North America
                </Text>
              </Accordion.Control>
              <Accordion.Panel>
                In North America, we organize public education events that raise
                awareness about Rwanda’s development journey and provide a space
                for sharing stories and answering questions.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Box>
      </Container>
    </div>
  );
}
