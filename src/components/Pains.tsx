import { Box, Stack, VStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function Pains() {
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
      background="radial-gradient(circle, rgba(255,115,0,0.15) 0%, rgba(0,0,0,0) 60%)"
    >
      <Stack
        maxW="1120px"
        direction="column"
        shouldWrapChildren={true}
        justifyContent="space-between"
        alignItems="center"
        spacing={12}
      >
        <Heading
          size="xl"
          color="#fff"
          maxW="1120px"
          fontFamily="heading"
          lineHeight="48px"
          textAlign="center"
        >
          Dores que identificamos
        </Heading>
        <VStack
          gap={6}
          maxW="832px"
          border="1px"
          borderColor="#515151"
          borderRadius={24}
          p={10}
          backgroundColor="rgba(7, 14, 21, 0.8)"
        >
          <Flex w="100%" gap={6} direction="row" alignItems="center">
            <CloseIcon w={4} h={4} color="#C9C9C9" />
            <Text
              fontSize="xl"
              color="#C9C9C9"
              w="full"
              fontWeight="400"
              lineHeight="32px"
            >
              Treinamentos sem dinamismo/Pouca interatividade
            </Text>
          </Flex>
          <Flex w="100%" gap={6} direction="row" alignItems="center">
            <CloseIcon w={4} h={4} color="#C9C9C9" />
            <Text
              fontSize="xl"
              color="#C9C9C9"
              w="full"
              fontWeight="400"
              lineHeight="32px"
            >
              Treinamentos presenciais custosos
            </Text>
          </Flex>
          <Flex w="100%" gap={6} direction="row" alignItems="center">
            <CloseIcon w={4} h={4} color="#C9C9C9" />
            <Text
              fontSize="xl"
              color="#C9C9C9"
              w="full"
              fontWeight="400"
              lineHeight="32px"
            >
              Falta de Flexibilidade no acesso aos treinamentos
            </Text>
          </Flex>
          <Flex w="100%" gap={6} direction="row" alignItems="center">
            <CloseIcon w={4} h={4} color="#C9C9C9" />
            <Text
              fontSize="xl"
              color="#C9C9C9"
              w="full"
              fontWeight="400"
              lineHeight="32px"
            >
              Layout pouco atraente
            </Text>
          </Flex>
          <Flex w="100%" gap={6} direction="row" alignItems="center">
            <CloseIcon w={4} h={4} color="#C9C9C9" />
            <Text
              fontSize="xl"
              color="#C9C9C9"
              w="full"
              fontWeight="400"
              lineHeight="32px"
            >
              Baixa visibilidade da progressão na trilha de aprendizagem
            </Text>
          </Flex>
        </VStack>
      </Stack>
    </Box>
  );
}
