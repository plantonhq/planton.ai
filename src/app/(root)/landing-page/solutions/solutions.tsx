import { StyledTab, StyledTabs, TabPanel } from "@/components";
import { Stack } from "@mui/material";
import { SyntheticEvent, useState } from "react";

import { ByRole } from "./by-role";
import { BySize } from "./by-size";
import { ByUseCase } from "./by-use-case";

export const Solutions = () => {
  const [value, setValue] = useState("size");

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Stack className="max-w-7xl mx-auto pb-24">
      <Stack className="items-center">
        <StyledTabs
          onChange={handleChange}
          value={value}
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          <StyledTab label="Size" value="size" />
          <StyledTab label="Use Case" value="use-case" />
          <StyledTab label="Role" value="role" />
        </StyledTabs>
      </Stack>

      <TabPanel value={value} index="size">
        <BySize />
      </TabPanel>
      <TabPanel value={value} index="use-case">
        <ByUseCase />
      </TabPanel>
      <TabPanel value={value} index="role">
        <ByRole />
      </TabPanel>
    </Stack>
  );
};
