import { useState } from "react";
import { Group, Image } from "@mantine/core";
import {
  IconReceipt2,
  IconUser,
  IconQuestionMark,
  IconHeartHandshake,
  IconCamera,
} from "@tabler/icons-react";
import classes from "./NavbarSimple.module.css";

const data = [
  { link: "/", label: "Home", icon: IconUser },
  { link: "/", label: "Donate", icon: IconReceipt2 },
  { link: "/about", label: "About", icon: IconQuestionMark },
  { link: "/projects", label: "Projects", icon: IconHeartHandshake },
  { link: "/meetTeam", label: "Meet the Team", icon: IconUser },
  { link: "/gallery", label: "Gallery", icon: IconCamera },
];

export function NavbarSimple() {
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Image src="/logo.jpeg" alt="LOGO" width={200} height={200} />
        </Group>
        {links}
      </div>
    </nav>
  );
}
