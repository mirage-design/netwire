import { Box, VStack } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import LogoWhite from "../assets/imgs/logo_netwire_white.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      pl="56px"
      py={10}
      pr={4}
      h="100vh"
      w="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
      background="linear-gradient(163deg, rgba(255,115,0,0.2) 0%, rgba(0,0,0,0) 40%)"
    >
      <VStack
        h="full"
        shouldWrapChildren={true}
        justifyContent="space-between"
        spacing={4}
      >
        <Image
          src={LogoWhite}
          alt="Logo Netwire"
          width={160}
          objectFit="contain"
        />
        <VStack spacing={10} justifyContent="center">
          <Heading
            as="h1"
            size="3xl"
            lineHeight="72px"
            color="#fff"
            fontFamily="heading"
            fontWeight="300"
            textAlign="center"
            maxWidth="1000px"
          >
            A SOLUÇÃO CERTA PARA SUA <br />
            <strong>COMUNICAÇÃO CORPORATIVA</strong>
          </Heading>
          <VStack justifyContent="center" spacing={0}>
            <Text
              textAlign="center"
              fontSize="2xl"
              lineHeight="40px"
              color="#fff"
              fontFamily="body"
              fontWeight="400"
              maxWidth="1000px"
            >
              Excellence delivering global corporate content
            </Text>
            <Text
              textAlign="center"
              fontSize="lg"
              lineHeight="40px"
              color="#fff"
              fontFamily="body"
              fontWeight="500"
              maxWidth="1000px"
            >
              E-Learning | Content Creation | Translation
            </Text>
          </VStack>
        </VStack>

        <VStack justifyContent="center" spacing={2}>
          <motion.div
            whileInView={{
              y: 8,
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8,
              },
            }}
          >
            <ChevronDownIcon color="#fff" boxSize={8} />
          </motion.div>
          <Text
            textAlign="center"
            fontSize="md"
            color="#fff"
            fontFamily="body"
            fontWeight="400"
          >
            Saiba Mais
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}
