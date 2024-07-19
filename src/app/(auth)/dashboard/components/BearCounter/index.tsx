"use client";

import React from "react";

import { Button } from "@/components";
import { useBoundStore } from "@/store";

const BearCounter = () => {
  const { increasePopulation, removeAllBears, bears } = useBoundStore(
    (state) => state
  );
  return (
    <div className="flex items-center gap-4 mt-4">
      <Button onClick={increasePopulation} size="small">
        one up
      </Button>
      <Button onClick={removeAllBears} size="small">
        remove all
      </Button>
      <h1>{bears} around here...</h1>
    </div>
  );
};

export default BearCounter;
