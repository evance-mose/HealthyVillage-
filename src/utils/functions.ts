import data from "./data";

export const getResources = (typeOfResource: string) => {
  return data.entry.filter(
    (res) => res.resource["resourceType"] == typeOfResource
  );
};

const getPatientByHouseHold = (locationId: string) => {
  return data?.entry?.find(
    (res) =>
      res.resource?.managingOrganization?.reference === `Location/${locationId}`
  );
};

export const getHouseholdByID = (id: string) => {
  const location = data?.entry?.find(
    (res) => res.resource?.id === id
  )?.resource;
  const patient = getPatientByHouseHold(id)?.resource;

  return {
    location,
    patient,
  };
};
