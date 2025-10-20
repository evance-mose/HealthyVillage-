import data from "./data";

export const getResources = (typeOfResource: string) => {
  return data.entry.filter(
    (res) => res.resource["resourceType"] == typeOfResource
  );
};

export const getResourcesByID = (id: string) => {
  return data.entry.find((res) => res.resource.id === id);
};
