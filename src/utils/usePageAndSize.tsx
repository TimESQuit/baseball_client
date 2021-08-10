import useQuery from "./useQuery";

const usePageAndSize = (rowCount: number, rowChoices: number[]) => {
  const query = useQuery();
  const getSize =
    query.get("size") !== null ? parseInt(query.get("size")!) : null;
  const getPage =
    query.get("page") !== null ? parseInt(query.get("page")!) : null;

  const size = getSize && rowChoices.includes(getSize) ? getSize : 25;

  let page: number;
  if (!getPage || getPage < 0) {
    page = 0;
  } else if (size * getPage >= rowCount) {
    if (rowCount % size === 0) {
      page = rowCount / size - 1;
    } else {
      page = Math.floor(rowCount / size);
    }
  } else if (size * (getPage - 2) < rowCount) {
    page = getPage;
  } else {
    page = 0;
  }

  return [page, size];
};

export default usePageAndSize;
