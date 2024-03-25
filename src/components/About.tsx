import { Box, Stack, VStack, StackDivider } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/react";

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
      background="linear-gradient(345deg, rgba(255,115,0,0.2) 0%, rgba(0,0,0,0) 40%)"
    >
      <Stack
        maxW="1120px"
        direction={{ base: "column", xl: "row" }}
        shouldWrapChildren={true}
        justifyContent="space-between"
        alignItems="center"
        spacing={12}
        divider={<StackDivider borderColor="#FFF" />}
      >
        <Heading
          size="xl"
          color="#fff"
          maxW="464px"
          fontFamily="heading"
          lineHeight="48px"
        >
          Bem-vindo à Netwire Global, sua parceira de excelência em conteúdo
          corporativo inovador!
        </Heading>
        <VStack maxW="496px" spacing={8}>
          <Text
            fontSize="xl"
            color="#fff"
            w="full"
            fontWeight="400"
            lineHeight="32px"
          >
            Compreendemos a importância da flexibilidade e reformulamos
            treinamentos presenciais para web-based training, permitindo maior
            alcance, redução de custos e acessibilidade global!
          </Text>
          <Text
            fontSize="xl"
            color="#fff"
            fontFamily="body"
            w="full"
            fontWeight="400"
            lineHeight="32px"
          >
            Seja online ou presencial, nossa equipe dedicada está pronta para
            impulsionar o crescimento da sua equipe.
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
}
