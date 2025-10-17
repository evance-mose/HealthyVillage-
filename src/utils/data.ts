export default {
  resourceType: "Bundle",
  type: "collection",
  entry: [
    {
      resource: {
        resourceType: "Location",
        id: "hh-001",
        name: "Banda Family",
        description: "Chikanda Village, Lilongwe",
      },
    },
    {
      resource: {
        resourceType: "Location",
        id: "hh-002",
        name: "Moyo Family",
        description: "Kawale Village, Lilongwe",
      },
    },
    {
      resource: {
        resourceType: "Location",
        id: "hh-003",
        name: "Phiri Family",
        description: "Area 25, Lilongwe",
      },
    },
    {
      resource: {
        resourceType: "Patient",
        id: "patient-001",
        name: [{ use: "official", family: "Banda", given: ["John"] }],
        gender: "male",
        birthDate: "1990-04-12",
        address: [{ text: "Chikanda Village" }],
        managingOrganization: { reference: "Location/hh-001" },
      },
    },
    {
      resource: {
        resourceType: "Patient",
        id: "patient-002",
        name: [{ use: "official", family: "Banda", given: ["Grace"] }],
        gender: "female",
        birthDate: "1992-06-08",
        address: [{ text: "Chikanda Village" }],
        managingOrganization: { reference: "Location/hh-001" },
      },
    },
    {
      resource: {
        resourceType: "Patient",
        id: "patient-003",
        name: [{ use: "official", family: "Banda", given: ["Michael"] }],
        gender: "male",
        birthDate: "2015-09-20",
        address: [{ text: "Chikanda Village" }],
        managingOrganization: { reference: "Location/hh-001" },
      },
    },
    {
      resource: {
        resourceType: "Patient",
        id: "patient-004",
        name: [{ use: "official", family: "Moyo", given: ["Peter"] }],
        gender: "male",
        birthDate: "1988-11-20",
        address: [{ text: "Kawale Village" }],
        managingOrganization: { reference: "Location/hh-002" },
      },
    },
    {
      resource: {
        resourceType: "Patient",
        id: "patient-005",
        name: [{ use: "official", family: "Moyo", given: ["Linda"] }],
        gender: "female",
        birthDate: "1995-02-15",
        address: [{ text: "Kawale Village" }],
        managingOrganization: { reference: "Location/hh-002" },
      },
    },
    {
      resource: {
        resourceType: "Patient",
        id: "patient-006",
        name: [{ use: "official", family: "Phiri", given: ["Chikondi"] }],
        gender: "female",
        birthDate: "2005-07-30",
        address: [{ text: "Area 25" }],
        managingOrganization: { reference: "Location/hh-003" },
      },
    },
    {
      resource: {
        resourceType: "Patient",
        id: "patient-007",
        name: [{ use: "official", family: "Phiri", given: ["Thomas"] }],
        gender: "male",
        birthDate: "2002-05-12",
        address: [{ text: "Area 25" }],
        managingOrganization: { reference: "Location/hh-003" },
      },
    },
    {
      resource: {
        resourceType: "Patient",
        id: "patient-008",
        name: [{ use: "official", family: "Phiri", given: ["Mercy"] }],
        gender: "female",
        birthDate: "2010-01-22",
        address: [{ text: "Area 25" }],
        managingOrganization: { reference: "Location/hh-003" },
      },
    },
    {
      resource: {
        resourceType: "Encounter",
        id: "enc-001",
        status: "finished",
        class: { code: "HHV", display: "Home Visit" },
        subject: { reference: "Patient/patient-001" },
        location: [{ location: { reference: "Location/hh-001" } }],
        period: { start: "2025-10-16T10:00:00Z", end: "2025-10-16T10:30:00Z" },
      },
    },
    {
      resource: {
        resourceType: "Observation",
        id: "obs-001",
        status: "final",
        category: [{ coding: [{ code: "vital-signs" }] }],
        code: { text: "Body temperature" },
        subject: { reference: "Patient/patient-001" },
        encounter: { reference: "Encounter/enc-001" },
        valueQuantity: { value: 38.5, unit: "°C" },
        effectiveDateTime: "2025-10-16T10:10:00Z",
      },
    },
    {
      resource: {
        resourceType: "Condition",
        id: "cond-001",
        clinicalStatus: { coding: [{ code: "active" }] },
        verificationStatus: { coding: [{ code: "confirmed" }] },
        category: [{ coding: [{ code: "problem-list-item" }] }],
        code: { text: "Malaria" },
        subject: { reference: "Patient/patient-001" },
        encounter: { reference: "Encounter/enc-001" },
        onsetDateTime: "2025-10-16T10:15:00Z",
      },
    },
  ],
};
