import NoData from "../response/v1/no-data.js";

export const getHealthSchema = {
  description: "Health schema",
  response: {
    204: NoData,
  },
  summary: "Health",
  tags: ["Service Health"],
};
