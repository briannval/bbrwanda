import { Avatar, Text, Group } from "@mantine/core";
import { IconPhoneCall, IconAt } from "@tabler/icons-react";
import classes from "./Leader.module.css";

export interface LeaderInterface {
  name: string;
  email: string;
  profile: string;
}

export function Leader({ name, email, profile }: LeaderInterface) {
  return (
    <div>
      <Group wrap="nowrap" ml={10}>
        <Avatar src={profile} size={94} radius="md" />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Led By
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            {name}
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {email}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}
