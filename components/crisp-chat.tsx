"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("9a812224-760e-4822-9b32-0f5e051a39fc");
  }, []);

  return null;
};
