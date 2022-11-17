import React from "react";
import styled from "styled-components";
import DocumentComponent from "../components/documentation/DocumentComponent";

import Loading from "../components/generic/Loading";
import ElapsedTime from "../components/generic/ElapsedTime";

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
          title="Displaying Time"
          component={<ElapsedTime seconds={65} />}
          propDocs={[
            {
              prop: "seconds",
              description: "The # of seconds which is converted to min:sec",
              type: "string",
              defaultValue: 0,
            }
          ]}
        />
        <DocumentComponent
          title="3rd Party Hook - useInterval"
          propDocs={[
            {
              prop: "callback",
              description: "Function to execute when interval completed",
              type: "function",
              defaultValue: "none",
            },
            {
              prop: "delay",
              description: "The time before executing callback in setInterval",
              type: "number",
              defaultValue: "0 ms",
            },
          ]}
        />
          <DocumentComponent
          title="Displaying a Timer"
          propDocs={[
            {
              prop: "index",
              description: "The index of the timer in the queue",
              type: "integer",
              defaultValue: "0",
            },
          ]}
        />
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
          ]}
        />
      </div>
    </Container>
  );
};

export default Documentation;
