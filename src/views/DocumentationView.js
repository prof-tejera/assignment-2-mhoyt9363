import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import Loading from "../components/generic/Loading";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

/**
 * You can document your components by using the DocumentComponent component
 */
const Documentation = () => {
  return (
    <Container>
      <div>
        <Title>Documentation</Title>
        <DocumentComponent
          title="Loading spinner "
          component={<Loading />}
          propDocs={[
            {
              prop: "size",
              description: "Changes the size of the loading spinner",
              type: "string",
              defaultValue: "medium",
            },
            {
              prop: "ElapsedTime",
              description: "Displays the seconds elapsed so far",
              type: "component",
              defaultValue: "00:00",
            },
            {
              prop: "Buttons",
              description: "Displays the buttons required for a timer",
              type: "<button>",
              defaultValue: "Start, Pause/Res, FF, Reset",
            },
            {
              prop: "convertSeconds",
              description: "A helper that converts seconds to min:sec",
              type: "string",
              defaultValue: "00:00",
            },
          ]}
        />
      </div>
    </Container>
  );
};

export default Documentation;
