import { DataObject } from "../types/types";

export const formatDataForContext = (data: DataObject): string => {
  try {
    if (typeof data === "object" && data !== null) {
      return JSON.stringify(data, null, 2);
    }
    return String(data);
  } catch (error) {
    return "Invalid data format";
  }
};
