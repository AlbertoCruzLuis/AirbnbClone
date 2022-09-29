import dayjs from "dayjs";
import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import Popup from "reactjs-popup";

import { DateRangePicker } from "../DateRangePicker";

interface IDropdownDateRangePickerProps {
  className?: string;
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

const formattedDate = (date: string) => {
  if (!date) return "";
  return dayjs(date).format("DD [de] MMM");
};

export const DropdownDateRangePicker = ({
  className,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: IDropdownDateRangePickerProps) => {
  const [hoveredDate, setHoveredDate] = useState("");

  const clearDates = () => {
    onStartDateChange("");
    onEndDateChange("");
  };

  const arrivalDateFormatted = formattedDate(startDate) || "Llegada";
  const departureDateFormatted = formattedDate(endDate) || "Salida";

  const isClearButtonVisible = startDate || endDate;

  return (
    <div className="flex justify-between gap-2">
      <Popup
        className="appearance-none pt-4"
        arrow={false}
        position={"bottom left"}
        trigger={
          <button
            title="DateRangePicker"
            className={`${className} flex gap-2 truncate`}
          >
            <div>
              <AiOutlineCalendar size="1.4rem" />
            </div>
            <span className="flex gap-1 truncate">
              <span>{arrivalDateFormatted}</span>
              <span>-</span>
              <span>{departureDateFormatted}</span>
            </span>
          </button>
        }
      >
        <div
          title="DateRangePickerModal"
          className="flex flex-col gap-4 border border-solid bg-white p-4"
        >
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            hoveredDate={hoveredDate}
            onStartDateChange={onStartDateChange}
            onEndDateChange={onEndDateChange}
            onHoveredDateChange={setHoveredDate}
          />
        </div>
      </Popup>
      {isClearButtonVisible && (
        <button title="clearDates" onClick={clearDates}>
          <IoCloseOutline size="1.4rem" />
        </button>
      )}
    </div>
  );
};
