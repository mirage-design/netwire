import { Box } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import { FullPage, Slide } from "react-full-page";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";

function App() {
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
          <FullPage>
            <Slide>
              <Box
                p={2}
                h="100vh"
                w="100vw"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Heading as="h1" size="4xl" color="#fff">
                  GOJO LOVER 911
                </Heading>
              </Box>
            </Slide>
            <Slide>
              <Box
                p={2}
                h="100vh"
                w="100vw"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Heading as="h1" size="4xl" color="#fff">
                  Teste
                </Heading>
              </Box>
            </Slide>
          </FullPage>
        </Box>
      </>
    );
  }
  return <></>;
}

export default App;
