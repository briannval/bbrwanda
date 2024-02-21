"use client";

import { useParams } from "next/navigation";
import * as React from "react";
import "./styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Box, Title, Text, Image } from "@mantine/core";
import classes from "./page.module.css";
import { useEffect } from "react";

const Gallery = () => {
  const params = useParams<{ initial: string }>();
  const [ref, slid] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: parseInt(params.initial) - 1,
    defaultAnimation: {
      duration: 5000,
    },
    mode: "free-snap",
    renderMode: "performance",
  });
  const imageUrls: string[] = [...Array(38)].map(
    (_, idx) => `/gallery/gallery${idx + 1}.jpg`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      slid?.current?.next();
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [slid]);

  return (
    <>
      <Title order={2} className={classes.title} ta="center" mt="xl">
        <span className={classes.catch}>Swipe</span> to see more
      </Title>
      <Text
        c="dimmed"
        className={classes.description}
        ta="center"
        mt="md"
      ></Text>
      <Box p={"xl"}>
        <div ref={ref} className="keen-slider">
          {imageUrls.map((url) => {
            return (
              <div className="keen-slider__slide number-slide1" key={url}>
                <Image
                  src={url}
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
};

export default Gallery;
