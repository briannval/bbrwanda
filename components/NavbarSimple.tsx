import { useState } from "react";
import { Group, Image } from "@mantine/core";
import {
  IconReceipt2,
  IconUser,
  IconQuestionMark,
  IconHeartHandshake,
} from "@tabler/icons-react";
import classes from "./NavbarSimple.module.css";

const data = [
  { link: "/", label: "Home", icon: IconUser },
  { link: "/", label: "Donate", icon: IconReceipt2 },
  { link: "/about", label: "About", icon: IconQuestionMark },
  { link: "/projects", label: "Projects", icon: IconHeartHandshake },
  { link: "/meetTeam", label: "Meet the Team", icon: IconUser },
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
          <Image
            src="https://static.wixstatic.com/media/ec5c5c_983dfd0763e841098a6c887e9788c5f2~mv2.png/v1/fill/w_216,h_125,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ec5c5c_983dfd0763e841098a6c887e9788c5f2~mv2.png"
            alt="LOGO"
            width={100}
            height={100}
          />
        </Group>
        {links}
      </div>
    </nav>
  );
}
