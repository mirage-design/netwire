import { Box } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Card, CardHeader } from "@chakra-ui/react";
import Image from "next/image";
import Crosshair from "../assets/imgs/crosshair.png";
import BarChart from "../assets/imgs/bar-chart.png";
import CheckCircle from "../assets/imgs/check-circle.png";
import AlertTriangle from "../assets/imgs/alert-triangle.png";
import Users from "../assets/imgs/users.png";

export default function Differentials() {
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
      background="radial-gradient(circle, rgba(255,115,0,0.1) 0%, rgba(0,0,0,0) 60%)"
    >
      <Stack
        maxW="1120px"
        w="100%"
        direction="column"
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
          Diferenciais dos treinamentos Netwire
        </Heading>
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "1fr 1fr",
          }}
          gap={4}
          w="100%"
        >
          <GridItem>
            <Card
              border="2px"
              borderColor="rgba(255, 115, 0, 0.2)"
              borderRadius={8}
              p={8}
              backgroundColor="rgba(7, 14, 21, 0.8)"
            >
              <Image
                src={AlertTriangle}
                alt="Maior retenção de atenção"
                width={32}
                height={32}
              />
              <CardHeader
                paddingLeft={0}
                paddingRight={0}
                paddingBottom={0}
                paddingTop={4}
              >
                <Heading
                  fontSize="xl"
                  color="#FFF"
                  w="full"
                  fontWeight="700"
                  lineHeight="32px"
                  textAlign="left"
                >
                  Maior retenção de atenção
                </Heading>
              </CardHeader>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              border="2px"
              borderColor="rgba(255, 115, 0, 0.2)"
              borderRadius={8}
              p={8}
              backgroundColor="rgba(7, 14, 21, 0.8)"
            >
              <Image
                src={CheckCircle}
                alt="Validação do aprendizado"
                width={32}
                height={32}
              />
              <CardHeader
                paddingLeft={0}
                paddingRight={0}
                paddingBottom={0}
                paddingTop={4}
              >
                <Heading
                  fontSize="xl"
                  color="#FFF"
                  w="full"
                  fontWeight="700"
                  lineHeight="32px"
                  textAlign="left"
                >
                  Validação do aprendizado
                </Heading>
              </CardHeader>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              border="2px"
              borderColor="rgba(255, 115, 0, 0.2)"
              borderRadius={8}
              p={8}
              backgroundColor="rgba(7, 14, 21, 0.8)"
            >
              <Image
                src={BarChart}
                alt="Acompanhamento do Progresso"
                width={32}
                height={32}
              />
              <CardHeader
                paddingLeft={0}
                paddingRight={0}
                paddingBottom={0}
                paddingTop={4}
              >
                <Heading
                  fontSize="xl"
                  color="#FFF"
                  w="full"
                  fontWeight="700"
                  lineHeight="32px"
                  textAlign="left"
                >
                  Acompanhamento do progresso
                </Heading>
              </CardHeader>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              border="2px"
              borderColor="rgba(255, 115, 0, 0.2)"
              borderRadius={8}
              p={8}
              backgroundColor="rgba(7, 14, 21, 0.8)"
            >
              <Image
                src={Users}
                alt="Treinamentos engajadores"
                width={32}
                height={32}
              />
              <CardHeader
                paddingLeft={0}
                paddingRight={0}
                paddingBottom={0}
                paddingTop={4}
              >
                <Heading
                  fontSize="xl"
                  color="#FFF"
                  w="full"
                  fontWeight="700"
                  lineHeight="32px"
                  textAlign="left"
                >
                  Dores que identificamos
                </Heading>
              </CardHeader>
            </Card>
          </GridItem>
          <GridItem colSpan={[1, 1, 2]}>
            <Card
              border="2px"
              borderColor="rgba(255, 115, 0, 0.2)"
              borderRadius={8}
              p={8}
              backgroundColor="rgba(7, 14, 21, 0.8)"
            >
              <Image
                src={Crosshair}
                alt="Treinamento personalizado"
                width={32}
                height={32}
              />
              <CardHeader
                paddingLeft={0}
                paddingRight={0}
                paddingBottom={0}
                paddingTop={4}
              >
                <Heading
                  fontSize="xl"
                  color="#FFF"
                  w="full"
                  fontWeight="700"
                  lineHeight="32px"
                  textAlign="left"
                >
                  Treinamentos 100% personalizados à necessidade do cliente
                </Heading>
              </CardHeader>
            </Card>
          </GridItem>
        </Grid>
      </Stack>
    </Box>
  );
}
