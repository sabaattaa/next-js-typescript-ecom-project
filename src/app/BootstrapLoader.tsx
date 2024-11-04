// src/app/components/BootstrapLoader.tsx
"use client";

import { useEffect } from "react";

const BootstrapLoader = () => {
  useEffect(() => {
    const loadBootstrap = async () => {
      if (typeof window !== "undefined") {
        await import("bootstrap/dist/js/bootstrap.bundle.min.js");
        await import('bootstrap-icons/font/bootstrap-icons.css');
;
      }
    };

    loadBootstrap();
  }, []);

  return null; // This component does not render anything
};

export default BootstrapLoader;
