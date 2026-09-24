"use client";

import { Toaster } from "react-hot-toast";
import { FitLogProvider } from "@/context/FitLogContext";

export default function Providers({ children }) {
  return (
    <FitLogProvider>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1d2027",
            color: "#f3f4f6",
            border: "1px solid #343943",
          },
        }}
      />
    </FitLogProvider>
  );
}
