import type { APIHandler } from "aleph/types";

export const handler: APIHandler = ({ response }) => {
  response.body = "hi! my name is Egor and I'm 17. I love coding, " +
    "so check out my [github](https://github.com/machnevegor).";
};
