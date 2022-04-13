import React from "react";
import { SectionList, Heading, Center } from "native-base";
export const Example = () => {
  const data = [
    {
      title: "Cyan",
      data: ["cyan.100", "cyan.200", "cyan.300", "cyan.400", "cyan.500"],
    },
    {
      title: "Yellow",
      data: [
        "yellow.100",
        "yellow.200",
        "yellow.300",
        "yellow.400",
        "yellow.500",
      ],
    },
    {
      title: "Violet",
      data: [
        "violet.100",
        "violet.200",
        "violet.300",
        "violet.400",
        "violet.500",
      ],
    },
    {
      title: "Green",
      data: ["green.100", "green.200", "green.300", "green.400", "green.500"],
    },
    {
      title: "Blue",
      data: ["blue.100", "blue.200", "blue.300", "blue.400", "blue.500"],
    },
  ];
  return (
    <Center h="80" w="100%">
      <SectionList
        maxW="300"
        w="100%"
        mb="4"
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Center py="4" bg={item}>
            {item.split(".")[1]}
          </Center>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Center>
            <Heading fontSize="xl" mt="8" pb="4">
              {title}
            </Heading>
          </Center>
        )}
      />
    </Center>
  );
};
