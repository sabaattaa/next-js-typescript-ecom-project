// src/app/components/BootstrapLoader.tsx
"use client";

import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const BootstrapLoader = () => {
  useEffect(() => {
    const loadBootstrap = async () => {
      if (typeof window !== "undefined") {
        // await import("bootstrap/dist/js/bootstrap.bundle.min.js") as any;
      }
    };

    loadBootstrap();
  }, []);

  return null; // This component does not render anything
};

export default BootstrapLoader;
