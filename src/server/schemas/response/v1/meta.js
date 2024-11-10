export default {
  additionalProperties: false,
  properties: {
    count: { minimum: 1, type: "number" },
    page: { minimum: 1, type: "number" },
    totalDocuments: { minimum: 0, type: "number" },
    totalPage: { minimum: 0, type: "number" },
  },
  required: ["page", "count", "totalPage", "totalDocuments"],
  type: "object",
};
