import Popup from "reactjs-popup";

import { Dashboard } from "./components/Dashboard";

export const FeatureFlagManagement = () => {
  return (
    <Popup
      contentStyle={{ padding: "16px" }}
      modal
      overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
      trigger={
        <button
          title="FeatureFlagManagement"
          className="fixed bottom-20 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-red-1000 shadow-md"
        >
          <span className="font-bold">FM</span>
        </button>
      }
    >
      <Dashboard />
    </Popup>
  );
};
