import React from "react";
import { Accordion, Box } from "native-base";
const Example = () => {
  return (
    <Box m={3}>
      <Accordion index={[0, 1]}>
        <Accordion.Item>
          <Accordion.Summary>
            Section 1 title
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Summary>
            Section 2 title
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Summary>
            Section 3 title
            <Accordion.Icon />
          </Accordion.Summary>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Details>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
};
export default Example;
