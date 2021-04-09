import React from 'react';
import { Box } from '@chakra-ui/react';
import Test from './components/Test';
import Test_randomFeature01 from './components/Test_randomFeature01';
import Test_randomFeature12 from './components/Test_randomFeature12';
import Test_randomFeature16 from './components/Test_randomFeature16';
import Test_randomFeature17 from './components/Test_randomFeature17';
import Test_randomFeature18 from './components/Test_randomFeature18';

export const App: React.FC = () => {
  return (
    <Box background="#eaeaea">
      <Test />
      <Test_randomFeature01 />
      <Test_randomFeature12 />
      <Test_randomFeature16 />
      <Test_randomFeature17 />
      <Test_randomFeature18 />
    </Box>
  );
};
