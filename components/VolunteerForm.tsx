import {
  TextInput,
  SimpleGrid,
  Group,
  Title,
  Button,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export function VolunteerForm() {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate: {
      firstName: (value) => value.trim().length < 2,
      lastName: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
    },
  });

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "5vh",
      }}
    >
      <form onSubmit={form.onSubmit(() => {})}>
        <Title
          order={2}
          size="h1"
          style={{ fontFamily: "Greycliff CF, var(--mantine-font-family)" }}
          fw={900}
          ta="center"
        >
          Register to be a volunteer today!
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="First Name"
            placeholder="Your first name"
            name="name"
            variant="filled"
            {...form.getInputProps("firstName")}
          />
          <TextInput
            label="Last Name"
            placeholder="Your last name"
            name="name"
            variant="filled"
            {...form.getInputProps("lastName")}
          />
        </SimpleGrid>

        <TextInput
          label="Email"
          placeholder="Your email"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps("email")}
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md" color="orange">
            Register
          </Button>
        </Group>
      </form>
    </Box>
  );
}
