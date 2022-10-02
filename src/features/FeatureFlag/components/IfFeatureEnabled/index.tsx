import type { ReactNode } from "react";

import { useFlag } from "../../hooks/useFlag";

interface IIfFeatureEnabledProps {
  featureName: string;
  children: ReactNode;
}

export const IfFeatureEnabled = ({
  featureName,
  children,
}: IIfFeatureEnabledProps) => {
  const { isEnabled } = useFlag({ name: featureName });

  return isEnabled ? <>{children}</> : null;
};
