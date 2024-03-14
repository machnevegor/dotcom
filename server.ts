import config from "~/unocss.config.ts";
import denoDeploy from "aleph/plugins/deploy";
import modules from "~/routes/_export.ts";
import react from "aleph/plugins/react";
import resume from "~/middlewares/resume.ts";
import unocss from "aleph/plugins/unocss";
import { serve } from "aleph/server";

serve({
  middlewares: [
    resume,
  ],
  plugins: [
    denoDeploy({ modules }),
    react({ ssr: true }),
    unocss(config),
  ],
});
