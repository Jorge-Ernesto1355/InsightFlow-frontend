// Expects `data` to be an array of arrays of objects with consistent keys
interface OriginalDataRow {
  [key: string]: any;
}
type OriginalData = OriginalDataRow[][];

const getColumnsOriginalData = (data: OriginalData) => {
  if (typeof data === "undefined" || data === null) return [];
  return Object.keys(data[0][0]).map((key) => ({ title: key, dataIndex: key }));
};

export default getColumnsOriginalData;
