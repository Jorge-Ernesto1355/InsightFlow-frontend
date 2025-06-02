// Expects `data` to be an array of arrays of objects with consistent keys
interface OriginalDataRow {
  [key: string]: any;
}
type OriginalData = OriginalDataRow[][];

const getColumnsOriginalData = (data: OriginalData) => {
  if (
    !Array.isArray(data) ||
    data.length === 0 ||
    !Array.isArray(data[0]) ||
    data[0].length === 0 ||
    typeof data[0][0] !== "object" ||
    data[0][0] === null
  ) {
    return [];
  }
  return Object.keys(data[0][0]).map((key) => ({ title: key, dataIndex: key }));
};

export default getColumnsOriginalData;
