import React from 'react';
import { Divider, Flex, Box, Heading } from 'native-base';

export const Example = () => {
  return (
    <Box alignItems="center">
      <Box w="160">
        <Heading mx="auto">Shoes</Heading>
        <Divider
          my="2"
          _light={{ bg: 'muted.800' }}
          _dark={{ bg: 'muted.50' }}
        />
        <Flex mx="3" direction="row" justify="space-evenly" h="60">
          <Heading py="2">Girls</Heading>
          <Divider
            orientation="vertical"
            mx="3"
            _light={{ bg: 'muted.800' }}
            _dark={{ bg: 'muted.50' }}
          />
          <Heading py="2">Boys</Heading>
        </Flex>
      </Box>
    </Box>
  );
};
