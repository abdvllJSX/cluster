import Meta from "./response/v1/meta.js";

/**
 * getSchema
 * @param {object} schema
 * @return {{type: string, properties: {data, message: {type: string}, statusCode: {type: string}, status: {type: string}}}}
 */
export function getSchema(schema) {
  return {
    additionalProperties: false,
    properties: {
      data: schema,
      message: { type: "string" },
      status: { type: "string" },
      statusCode: { type: "number" },
    },
    type: "object",
  };
}

/**
 * listSchema
 * @param {object} schema
 * @return {{type: string, properties: {data: {type: string, items}, meta: {description: string, type: string, required: string[], properties: {totalDocuments: {type: string, minimum: number}, totalPage: {type: string, minimum: number}, count: {type: string, minimum: number}, page: {type: string, minimum: number}}}, message: {type: string}, statusCode: {type: string}, status: {type: string}}}}
 */
export function listSchema(schema) {
  return {
    additionalProperties: false,
    properties: {
      data: {
        items: schema,
        type: "array",
      },
      message: { type: "string" },
      meta: Meta,
      status: { type: "string" },
      statusCode: { type: "number" },
    },
    required: ["meta"],
    type: "object",
  };
}
