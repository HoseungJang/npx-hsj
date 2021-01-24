import React from "react";
import { Box, Text } from "ink";

export const Hoseung = () => {
  return (
    <Box margin={2} flexDirection="column">
      <Box>
        <Text color="#A9D0F5">안녕하세요. </Text>
        <Text color="#58ACFA">장호승</Text>
        <Text color="#A9D0F5"> 입니다.</Text>
      </Box>
      <Box marginBottom={1} alignItems="center">
        <Text color="#58ACFA">Front-end</Text>
        <Text color="#A9D0F5">, </Text>
        <Text color="#58ACFA">Back-end</Text>
        <Text color="#A9D0F5"> 개발을 하고있어요!</Text>
      </Box>
      <Box alignItems="center">
        <Text color="#58ACFA">기록하는 공부</Text>
        <Text color="#A9D0F5">를 정말 좋아해요!</Text>
      </Box>
      <Box marginTop={1} marginBottom={1} flexDirection="column">
        <Box>
          <Text backgroundColor="#A9D0F5" color="#000000">  Github </Text>
          <Text> </Text>
          <Text color="#FFFFFF" underline>https://github.com/HoseungJang</Text>
        </Box>
        <Box>
          <Text backgroundColor="#A9D0F5" color="#000000">    Blog </Text>
          <Text> </Text>
          <Text color="#FFFFFF" underline>https://velog.io/@alvin</Text>
        </Box>
      </Box>
      <Box flexDirection="column">
        <Text color="#A9D0F5">저에 대해 더 궁금하시다면?</Text>
        <Box>
          <Text>👉 </Text>
          <Text color="#FFFFFF" underline>https://about.janghoseung.com</Text>
        </Box>
      </Box>
    </Box>
  );
}