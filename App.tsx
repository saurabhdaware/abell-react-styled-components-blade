import React from "react";
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
  Title,
} from "@razorpay/blade/components";
import { paymentTheme } from "@razorpay/blade/tokens";

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <BladeProvider themeTokens={paymentTheme} colorScheme="light">
      <Box paddingX="spacing.4" paddingY="spacing.5">
        <Title size="large" marginBottom="spacing.8" marginTop="spacing.5">
          Abell 🤝 React 🤝 Styled Components 🤝 Blade
        </Title>
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
      </Box>
    </BladeProvider>
  );
};

export default App;
