import { Title, Text, Box, SimpleGrid, Image } from "@mantine/core";

import { motion } from "framer-motion";
import classes from "./Gallery.module.css";
import Link from "next/link";

export function Gallery() {
  const imageUrls: string[] = [...Array(38)].map(
    (_, idx) => `/gallery/gallery${idx + 1}.jpg`
  );
  return (
    <>
      <Box className={classes.header}>
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Our <span className={classes.catch}>Photos</span>
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Working side by side to build the community <br></br>
          This is our work in Rwanda and Canada
        </Text>
      </Box>
      <SimpleGrid cols={{ base: 1, md: 3 }} mx={40} mb={20} spacing={40}>
        {imageUrls.map((url, index) => {
          return (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Link href={`/gallery/${index + 1}`}>
                <Image src={url} alt="Image" width="0.3vw" height="500vh" />
              </Link>
            </motion.div>
          );
        })}
      </SimpleGrid>
    </>
  );
}
