import { Box } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Box
        p={2}
        bg='#f0f0f0'
        h='100vh'
        w='100vw'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Heading as='h1' size='4xl'>
          GOJO LOVER 911
        </Heading>
      </Box>
    </>
  );
}

export default App;
