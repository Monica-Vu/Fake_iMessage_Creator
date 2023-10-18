import { createContext } from "react";

export type TimeType = {
    time: string;
    setTime: (time: string ) => void;
}

const TimeContext = createContext<TimeType | string>("12:00PM");

export default TimeContext;