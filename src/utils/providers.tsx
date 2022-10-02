import { QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { Provider } from "react-redux";

import { FeatureFlagConfig } from "@/config/FeatureFlagConfig";
import { FlagProvider } from "@/features/FeatureFlag/providers/FlagProvider";
import { store } from "@/redux/store";
import { queryClient } from "@/utils/queryClient";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <FlagProvider config={FeatureFlagConfig}>
        <Provider store={store}>{children}</Provider>
      </FlagProvider>
    </QueryClientProvider>
  );
};
