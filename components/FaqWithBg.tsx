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
                    The 2024 Sustainable Development Reflection Tour
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
                The 2024 Sustainable Development Reflection Tour to Rwanda is an
                upcoming initiative by Building Bridges with Rwanda (BBR). This
                unique, collaborative, and transnational reflection tour is
                scheduled for the late summer. The primary objective of the tour
                is to provide firsthand information to Canadians who have not
                visited Rwanda but are eager to gain insights into the
                country&apos;s remarkable transformation, evolving from a failed
                state in 1994 to a model state today.
                <br></br>
                Find out more about the tour{" "}
                <span className={classes.learnmorebutton}>here</span>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item className={classes.item} value="first">
              <Accordion.Control>
                <Text className={classes.question}>
                  BBR&apos;s Community Impact
                </Text>
              </Accordion.Control>
              <Accordion.Panel>
                Empowering communities by enhancing capacity, creating new
                markets for Covaga products, promoting the sale of Made in
                Rwanda goods, and fostering meaningful conversations with
                neighbors, colleagues, and workshop participants on issues
                related to community development and wellness, is both
                fulfilling and empowering. Our endeavours are guided by the
                ubuntu philosophy, emphasizing humanity towards others. It
                serves as a reminder that &quot;I am what I am because of who we
                all are.&quot;
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="fourth">
              <Accordion.Control>
                <Text className={classes.question}>Experiential Learning</Text>
              </Accordion.Control>
              <Accordion.Panel>
                From 2008 to 2013, Building Bridges with Rwanda hosted over six
                hundred visitors seeking to delve into Rwanda&apos,s history,
                culture, and developmental progress. During their stay in
                Rwanda, volunteers actively immersed themselves in the
                community, collaborating with Rwandans on projects such as the
                construction of the Covaga Innovation Centre and the
                establishment of over thirty-six kitchen gardens donated to
                vulnerable community members, to enhance their food security.
                Through firsthand experiences with Rwandans and exploration of
                different locales, these volunteers gained a distinctive
                perspective on Rwanda&apos;s extraordinary journey.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="fifth">
              <Accordion.Control>
                <Text className={classes.question}>RR25 Legacy Project</Text>
              </Accordion.Control>
              <Accordion.Panel>
                In 2019, Building Bridges with Rwanda collaborated with Hogan’s
                Alley Society and SFU Institute for Diaspora Research and
                Engagement to establish the Remember Rwanda Twenty-Five Year
                Legacy Project (RR25 Legacy Project). Launched on the 25th
                commemoration of the genocide against the Tutsis in Rwanda, this
                initiative has dual objectives: a) organizing a reflection tour
                to Rwanda, and b) hosting a biannual conference on the Rwanda
                Development Model at Simon Fraser University.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="sixth">
              <Accordion.Control>
                <Text className={classes.question}>BBR in Canada</Text>
              </Accordion.Control>
              <Accordion.Panel>
                Building Bridges with Rwanda activities in Canada are centred
                around involving the public in gaining a more profound
                understanding of Rwanda&apos;s development journey, culture, and
                history. Our efforts include the organization of public
                engagement events in collaboration with colleges and
                universities. We facilitate workshops, conferences, seminars,
                and present keynote addresses as invited guest speakers to
                foster dialogue and awareness.
                <br />
                <br />
                Additionally, BBR operates Baraza Collective as the for-profit
                arm of the organization, which comprises three components.
                Firstly, there is Baraza Boutique, offering Made in Rwanda
                products. Secondly, there is the Baraza Podcast with Lama
                Mugabo, featuring conversations with change agents who share
                insights on community-building, nutrition, and wellness. These
                initiatives collectively contribute to the organization&apos;s
                mission of connecting and informing the Canadian public about
                Rwanda.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Box>
      </Container>
    </div>
  );
}
