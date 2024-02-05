import * as React from "react";
import "./styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Box, Title, Text } from "@mantine/core";
import classes from "./Slider.module.css";
import Image from "next/image";

export default function Slider() {
  const [ref] = useKeenSlider<HTMLDivElement>();
  const links = ["/carousel4.jpeg", "/carousel5.jpeg", "/about.jpeg"];
  return (
    <>
      <Title className={classes.title} ta="center">
        Photos Of Us
      </Title>
      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Swipe to see more of us
      </Text>
      <Box p={"xl"}>
        <div ref={ref} className="keen-slider">
          {links.map((link) => {
            return (
              <div className="keen-slider__slide number-slide1" key={link}>
                <Image
                  src={link}
                  alt="Carousel image"
                  width="1066"
                  height="800"
                />
              </div>
            );
          })}
        </div>
      </Box>
    </>
  );
}
