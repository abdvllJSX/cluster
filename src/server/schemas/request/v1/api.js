export const deleteSchema = {
  description: "Proxy delete request",
  params: {
    additionalProperties: true,
    type: "object",
  },
  querystring: {
    additionalProperties: true,
    type: "object",
  },
  summary: "Proxy Delete Request",
  tags: ["API"],
};

export const getSchema = {
  description: "Proxy get request",
  params: {
    additionalProperties: true,
    type: "object",
  },
  querystring: {
    additionalProperties: true,
    type: "object",
  },
  summary: "Proxy Get Request",
  tags: ["API"],
};

export const patchSchema = {
  body: {
    anyOf: [
      {
        additionalProperties: true,
        type: "object",
      },
      {
        type: "array",
      },
    ],
  },
  description: "Proxy patch request",
  params: {
    additionalProperties: true,
    type: "object",
  },
  querystring: {
    additionalProperties: true,
    type: "object",
  },
  summary: "Proxy Patch Request",
  tags: ["API"],
};

export const postSchema = {
  body: {
    anyOf: [
      {
        additionalProperties: true,
        type: "object",
      },
      {
        type: "array",
      },
    ],
  },
  description: "Proxy post request",
  params: {
    additionalProperties: true,
    type: "object",
  },
  querystring: {
    additionalProperties: true,
    type: "object",
  },
  summary: "Proxy Post Request",
  tags: ["API"],
};

export const putSchema = {
  body: {
    anyOf: [
      {
        additionalProperties: true,
        type: "object",
      },
      {
        type: "array",
      },
    ],
  },
  description: "Proxy put request",
  params: {
    additionalProperties: true,
    type: "object",
  },
  querystring: {
    additionalProperties: true,
    type: "object",
  },
  summary: "Proxy Put Request",
  tags: ["API"],
};
