import React from "react";
import { StyleSheet, Text, View } from "react-native";

import styled, { css } from "styled-components/native";

const Col = styled(View)`
  flex: 1;
  background-color: orange;
`;

export default function App() {
  return (
    <Col
      backgroundColor="yellow"
      flex={0}
      css={`
        background: pink;
      `}
    >
      <Text>aaa</Text>
    </Col>
  );
}
