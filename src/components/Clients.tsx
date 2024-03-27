import { Box, Stack } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import LogoAlcon from "../assets/imgs/logo_alcon.png";
import LogoTramontina from "../assets/imgs/logo_tramontina.png";
import LogoScania from "../assets/imgs/logo_scania.png";
import LogoJohnDeere from "../assets/imgs/logo_johndeere.png";
import LogoTikTok from "../assets/imgs/logo_tiktok.png";
import LogoHonda from "../assets/imgs/logo_honda.png";

export default function Clients() {
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
      background="linear-gradient(190deg, rgba(255,115,0,0.2) 0%, rgba(0,0,0,0) 40%)"
    >
      <Stack
        maxW="1200px"
        direction="column"
        shouldWrapChildren={true}
        justifyContent="space-between"
        alignItems="center"
        spacing={20}
      >
        <Heading
          size="xl"
          color="#fff"
          maxW="1120px"
          fontFamily="heading"
          lineHeight="48px"
          textAlign="center"
        >
          Alguns de nossos clientes
        </Heading>
        <Flex
          gap={8}
          direction="row"
          maxW="1120px"
          flexWrap="wrap"
          justify="center"
        >
          <Image
            src={LogoJohnDeere}
            alt="Logo JohnDeere"
            width={320}
            style={{ objectFit: "contain" }}
          />
          <Image
            src={LogoScania}
            alt="Logo Scania"
            width={260}
            style={{ objectFit: "contain" }}
          />
          <Image
            src={LogoAlcon}
            alt="Logo Alcon"
            width={260}
            style={{ objectFit: "contain" }}
          />
          <Image
            src={LogoHonda}
            alt="Logo Honda"
            width={260}
            style={{ objectFit: "contain" }}
          />
          <Image
            src={LogoTramontina}
            alt="Logo Tramontina"
            width={300}
            style={{ objectFit: "contain" }}
          />
          <Image
            src={LogoTikTok}
            alt="Logo TikTok"
            width={300}
            style={{ objectFit: "contain" }}
          />
        </Flex>
      </Stack>
    </Box>
  );
}
