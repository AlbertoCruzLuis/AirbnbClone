import Switch from "react-switch";

interface IFeaturelistProps {
  features: string[] | undefined;
  handleFeatureChange: (feature: string, enabled: boolean) => void;
  getStateOfFlag: (feature: string) => boolean;
}

export const FeatureList = ({
  features,
  handleFeatureChange,
  getStateOfFlag,
}: IFeaturelistProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-md border border-solid p-2">
      {features?.map((feature) => (
        <div key={feature} className="flex items-center justify-between gap-4">
          <span>{feature}</span>
          <Switch
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={() =>
              handleFeatureChange(feature, !getStateOfFlag(feature))
            }
            checked={getStateOfFlag(feature)}
          />
        </div>
      ))}
    </div>
  );
};
