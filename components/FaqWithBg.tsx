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
                upcoming initiative by Building Bridges with Rwanda (BBR) in
                collaboration with Simon Fraser University through the Remember
                Rwanda 25 Years Legacy Project RR25 Legacy Project. This unique,
                collaborative, and transnational reflection tour is scheduled
                for the late summer. The primary objective of the tour is to
                provide firsthand information to Canadians who have not visited
                Rwanda but are eager to gain insights into the country&#39;s
                remarkable transformation, evolving from a failed state in 1994
                to a model state today.
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
                hundred visitors seeking to delve into Rwanda&apos;s history,
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
                Building Bridges with Rwanda (BBR) in Canada is dedicated to
                engaging the public and promoting a deeper understanding of
                Rwanda&#39;s development journey, culture, and history. Our
                initiatives revolve around collaborating with colleges and
                universities to organize public engagement events. We actively
                facilitate workshops, conferences, 2 seminars, and deliver
                keynote addresses as invited guest speakers to encourage
                dialogue and raise awareness.
                <br></br>
                <br></br>
                Furthermore, BBR operates Baraza Collective as the
                profit-generating arm of the organization, consisting of three
                key components. Baraza Boutique offers a range of Made in Rwanda
                products, creating a platform for sustainable commerce. The
                Baraza Podcast, hosted by Lama Mugabo, features conversations
                with change agents sharing insights on community development,
                nutrition, and wellness. These combined efforts align with our
                mission to connect and inform audiences about Rwanda in a
                dynamic and evolving global context.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Box>
      </Container>
    </div>
  );
}
