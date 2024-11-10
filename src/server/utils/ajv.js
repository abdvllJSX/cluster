import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv({
  allErrors: true,
  coerceTypes: true,
  removeAdditional: true,
  strictTuples: false,
  useDefaults: true,
});

addFormats(ajv);

export default ajv;

export const config = {
  customOptions: { keywords: [] },
};
