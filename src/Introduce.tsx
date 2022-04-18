import React from "react";
import { Box, Text } from "ink";

export const Introduce = () => {
  return (
    <Box margin={2} flexDirection="column">
      <Box>
        <Text color="#A9D0F5">안녕하세요. 좋은 경험을 추구하는 </Text>
        <Text color="#58ACFA">장호승</Text>
        <Text color="#A9D0F5"> 입니다.</Text>
      </Box>
      <Box marginTop={1} alignItems="center">
        <Text color="#58ACFA">프론트엔드</Text>
        <Text color="#A9D0F5">, </Text>
        <Text color="#58ACFA">백엔드</Text>
        <Text color="#A9D0F5">, </Text>
        <Text color="#58ACFA">인프라 </Text>
        <Text color="#A9D0F5">등 많은 분야를 공부하고 있지만,</Text>
      </Box>
      <Box alignItems="center">
        <Text color="#A9D0F5">특히 </Text>
        <Text color="#58ACFA">프론트엔드 개발</Text>
        <Text color="#A9D0F5">에 관심을 갖고 일하고 있어요!</Text>
      </Box>
      <Box marginTop={1} marginBottom={1} flexDirection="column">
        <Box>
          <Text backgroundColor="#A9D0F5" color="#000000">
            {" "}
            Github{" "}
          </Text>
          <Text> </Text>
          <Text color="#FFFFFF" underline>
            https://github.com/HoseungJang
          </Text>
        </Box>
        <Box>
          <Text backgroundColor="#A9D0F5" color="#000000">
            {" "}
            Blog{" "}
          </Text>
          <Text> </Text>
          <Text color="#FFFFFF" underline>
            https://blog.hoseung.me
          </Text>
        </Box>
        <Box>
          <Text backgroundColor="#A9D0F5" color="#000000">
            {" "}
            Email{" "}
          </Text>
          <Text> </Text>
          <Text color="#FFFFFF" underline>
            hsjang.dev@gmail.com
          </Text>
        </Box>
      </Box>
      <Box flexDirection="column">
        <Text color="#A9D0F5">저에 대해 더 궁금하시다면?</Text>
        <Box>
          <Text>👉 </Text>
          <Text color="#FFFFFF" underline>
            https://about.hoseung.me
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
