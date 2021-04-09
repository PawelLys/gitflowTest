import React from 'react';
import { Box } from '@chakra-ui/react';
import Test from './components/Test';
import Test_randomFeature01 from './components/Test_randomFeature01';
import Test_randomFeature12 from './components/Test_randomFeature12';
import Test_randomFeature16 from './components/Test_randomFeature16';
import Test_otherRandomFeature01 from './components/Test_otherRandomFeature01';
import Test_otherRandomFeature02 from './components/Test_otherRandomFeature02';

export const App: React.FC = () => {
  return (
    <Box background="#eaeaea">
      <Test />
      <Test_randomFeature01 />
      <Test_randomFeature12 />
      <Test_randomFeature16 />
      <Test_otherRandomFeature01 />
      <Test_otherRandomFeature02 />
    </Box>
  );
};
