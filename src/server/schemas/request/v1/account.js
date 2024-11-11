export const verifyAccountSchema = {
  description: "Verify account request",
  querystring: {
    additionalProperties: false,
    properties: {
      token: { type: "string", minLength: 1 },
    },
    required: ["token"],
    type: "object",
  },
  summary: "Verify Account Request",
  tags: ["Account"],
};
