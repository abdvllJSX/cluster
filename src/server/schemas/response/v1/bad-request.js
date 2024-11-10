export default {
  additionalProperties: false,
  properties: {
    code: { type: "string" },
    message: { type: "string" },
    status: { type: "string" },
    statusCode: { type: "number" },
  },
  required: ["statusCode", "message", "code", "status"],
  type: "object",
};
