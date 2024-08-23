import React from "react";
import styled from 'styled-components';
import {
  BladeProvider,
  Button,
  Text,
  Dropdown,
  DropdownOverlay,
  SelectInput,
  ActionList,
  ActionListItem,
  Heading,
  Box,
  Display,
} from "@razorpay/blade/components";
import { bladeTheme } from "@razorpay/blade/tokens";

const StyledBox = styled.div`
  background-color: tomato;
  height: 200px;
  width: 200px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
`

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <BladeProvider themeTokens={bladeTheme} colorScheme="light">
      <Box paddingX="spacing.4" paddingY="spacing.5">
        <Display size="large" marginBottom="spacing.8" marginTop="spacing.5">
          Abell 🤝 React 🤝 Styled Components 🤝 Blade
        </Display>
        <Box>
          <Heading size="large" marginBottom="spacing.5">
            Counter Example
          </Heading>
          <Box display="flex" alignItems="center">
            <Button onClick={() => setCount(count + 1)}>Counter++</Button>
            <Text size="large" marginLeft="spacing.4">
              {count}
            </Text>
          </Box>
        </Box>

        <Box paddingTop="spacing.5">
          <Heading size="large" marginBottom="spacing.5">
            Dropdown Example
          </Heading>
          <Dropdown>
            <SelectInput label="Select City" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Mumbai" value="mumbai" />
                <ActionListItem title="Bangalore" value="bangalore" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
        </Box>

        <Box>
          <StyledBox>
            <Text size="large" weight="semibold" display="inline-block" textAlign="center" color="surface.text.staticWhite.normal">Custom Styled Component</Text>
          </StyledBox>
        </Box>
      </Box>
    </BladeProvider>
  );
};

export default App;
