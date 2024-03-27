"use client";

import { Box, Stack, VStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { FullPage, Slide } from "react-full-page";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";
import NavBullets from "../components/NavBullets";
import { Flex } from "@chakra-ui/react";
import Hero from "../components/Hero";
import About from "../components/About";
import { CloseIcon } from "@chakra-ui/icons";
import Clients from "@/components/Clients";

function page() {
  //Particles config
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#070E15",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 160,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#FF7300",
        },
        links: {
          color: "#FF7300",
          distance: 160,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 60,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <>
        <Particles id="tsparticles" options={options} />

        <Box style={{ zIndex: 2, position: "relative" }}>
          <FullPage
            controls={({
              getCurrentSlideIndex,
              slidesCount,
              scrollToSlide,
            }) => (
              //Navigation Bullets
              <Box
                style={{ zIndex: 3, position: "fixed" }}
                width="auto"
                height="100vh"
                padding={4}
                display="flex"
                alignItems="center"
              >
                <Flex gap="2" direction="column" w="24px">
                  {[...Array(slidesCount).keys()].map((_, index) => (
                    <NavBullets
                      key={index}
                      active={index === getCurrentSlideIndex()}
                      onClick={() => scrollToSlide(index)}
                    />
                  ))}
                </Flex>
              </Box>
            )}
          >
            <Slide>
              <Hero />
            </Slide>
            <Slide>
              <About />
            </Slide>
            <Slide>
              <Clients />
            </Slide>
            <Slide>
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
                    borderRadius={8}
                    p={10}
                  >
                    <Flex w="100%" gap={4} direction="row" alignItems="center">
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
                  </VStack>
                </Stack>
              </Box>
            </Slide>
          </FullPage>
        </Box>
      </>
    );
  }
  return <></>;
}

export default page;
