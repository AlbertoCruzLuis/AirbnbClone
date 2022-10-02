import type { FC } from "react";

import { IfFeatureEnabled } from "@/features/FeatureFlag/components/IfFeatureEnabled";

interface IFeatureRenderProps {
  versions: { [key: string]: React.ReactNode };
}

export const FeatureRender: FC<IFeatureRenderProps> = ({ versions }) => {
  return (
    <>
      {Object.entries(versions).map(([featureName, component]) => (
        <IfFeatureEnabled key={featureName} featureName={featureName}>
          {component}
        </IfFeatureEnabled>
      ))}
    </>
  );
};
