import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import Wrapper from "./../../Wrapper";
import Basic from "./Basic";

storiesOf("Kbd", module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add("Basic", () => <Basic />);
