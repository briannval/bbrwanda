import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import classes from "./ContactUs.module.css";
import Link from "next/link";

const social = [
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandLinkedin,
];

const socialLinks = [
  "https://www.facebook.com/BBRwanda/",
  "https://twitter.com/BBRwanda",
  "https://www.instagram.com/bbrwanda/",
  "https://www.linkedin.com/in/lama-mugabo/",
];

export function ContactUs() {
  const icons = social.map((Icon, index) => (
    <Link key={index} href={socialLinks[index]}>
      <ActionIcon size={28} className={classes.social} variant="transparent">
        <Icon size="1.4rem" stroke={1.5} />
      </ActionIcon>
    </Link>
  ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Connect With Us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Have a question? Let us know!
          </Text>

          <Group mt="xl">{icons}</Group>
        </div>
        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="lmugabo75@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Name"
            placeholder="Lama Mugabo"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Your message"
            placeholder="I'd like to learn more about Rwanda, can we perhaps talk about..."
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button
              variant="gradient"
              gradient={{ from: "red", to: "yellow" }}
              className={classes.control}
            >
              Send message
            </Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}
