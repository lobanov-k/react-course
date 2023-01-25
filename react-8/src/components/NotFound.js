import React from "react";
import StepLabel from "@mui/material/StepLabel";

export function NotFound() {
  return (
    <StepLabel error>
      <h2>Error 404</h2>
      <div>NotFound</div>
    </StepLabel>
  );
}
