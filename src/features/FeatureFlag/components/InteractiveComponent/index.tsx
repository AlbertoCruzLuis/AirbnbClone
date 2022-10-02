import classNames from "classnames";
import type { ReactNode } from "react";
import { useHover } from "react-use";

import { useInteractiveMode } from "../../hooks/useInteractiveMode";

interface IInteractiveComponentProps {
  children: ReactNode;
  featureName: string;
}

// TODO: Add a way to highlight the component correctly
// FIX: The component is not highlighted correctly when children have fixed, sticky and absolute position
export const InteractiveComponent = ({
  children,
  featureName,
}: IInteractiveComponentProps) => {
  const { isInteractiveMode } = useInteractiveMode();

  const featureHighlight = (isHovered: boolean) => {
    const containerStyles = classNames("transition-all", {
      "border-2 border-solid border-red-1000": isHovered,
    });

    return (
      <div className="relative">
        {isHovered && (
          <div className="absolute -top-10 bg-red-1000 p-2">
            <span className="text-white">{featureName}</span>
          </div>
        )}
        <div className={containerStyles}>{children}</div>
      </div>
    );
  };

  const [hoverable] = useHover(featureHighlight);

  if (!isInteractiveMode) {
    return <>{children}</>;
  }

  return <>{hoverable}</>;
};
