import React from 'react';
import { Box } from '@chakra-ui/react';
import Test from './components/Test';
import Test_randomFeature01 from './components/Test_randomFeature01';

export const App: React.FC = () => {
  return (
    <Box background="#eaeaea">
      <Test />
      <Test_randomFeature01 />
    </Box>
  );
};
