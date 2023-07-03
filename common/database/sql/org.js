export default {
  version: 1,
  MyOrg: {
    fieldName: "org",
    fieldHeader: ["id", "name", "parentId", "attribute", "remarks"],
    fieldType: ["TEXT", "TEXT", "TEXT", "INTEGER", "TEXT"],
  },
  OrgDept: {
    fieldName: "orgDept",
    fieldHeader: [
      "id",
      "name",
      "parentId",
      "remarks",
      "attribute",
      "listChildren",
    ],
    fieldType: ["TEXT", "TEXT", "TEXT", "TEXT", "INTEGER", "varchar"],
  },
};
