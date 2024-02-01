"use client";

import { useState } from "react";
import { Container, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./HeaderSimple.module.css";

const links = [
  { link: "/about", label: "Donate" },
  { link: "/pricing", label: "About" },
  { link: "/learn", label: "Projects" },
  { link: "/community", label: "Meet the team" },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <MantineLogo size={28} />
        <Group gap={40} visibleFrom="md">
          {items}
        </Group>
      </Container>
    </header>
  );
}
