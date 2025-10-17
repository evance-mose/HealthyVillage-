import data from "./data";

export const getResources = (typeOfResource: string) => {
  return data.entry.filter(
    (res) => res.resource["resourceType"] == typeOfResource
  );
};
