"use client";
import { PrimeReactProvider, PrimeReactStyleSheet } from "@primereact/core";
import { useServerInsertedHTML } from "next/navigation";
import * as React from "react";
import { AppPreset } from "@/theme";

const styledStyleSheet = new PrimeReactStyleSheet();

export default function PrimeSSRProvider({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  useServerInsertedHTML(() => {
    const styleElements = styledStyleSheet.getAllElements();

    styledStyleSheet.clear();

    return <>{styleElements}</>;
  });

  const primereact = {
    theme: {
      preset: AppPreset,
      options: {
        darkModeSelector: false,
        cssLayer: {
          name: "primereact",
          order: "base, theme, primereact",
        },
      },
    },
  };

  return (
    <PrimeReactProvider {...primereact} stylesheet={styledStyleSheet}>
      {children}
    </PrimeReactProvider>
  );
}
