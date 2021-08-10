import { IPlayerCareer } from "../components/playerDetail/playerTypes";

const sortFunction = (key: string, asc = true) => {
  return function innerSort(a: any, b: any) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // If key doesn't exist, use a default key
      // This solved an issue when switching between batting & pitching on player detail page
      key = "year";
      asc = true;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return asc ? comparison : comparison * -1;
  };
};

const handleSortField = (data: any, setterFunc: Function, asc = true) => {
  const handler = (field: string) => {
    setterFunc(
      field === data.field ? { field, asc: !data.asc } : { field, asc }
    );
  };
  return handler;
};

const addYearRange = (results: IPlayerCareer[]) => {
  return results.map((player) => ({
    ...player,
    year_range: `${player.first_year} - ${player.last_year}`,
  }));
};

export { sortFunction, handleSortField, addYearRange };
