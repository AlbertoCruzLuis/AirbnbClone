import { AvailableModes } from "../AvailableModes";

export const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-white p-4">
      <h1 className="text-xl font-bold">Feature Flag Management - Dashboard</h1>
      <AvailableModes />
    </div>
  );
};
