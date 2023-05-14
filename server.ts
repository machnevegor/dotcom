import denoDeploy from "aleph/plugins/deploy";
import react from "aleph/plugins/react";
import unocss from "aleph/plugins/unocss";
import { serve } from "aleph/server";

import modules from "~/routes/_export.ts";
import config from "~/unocss.config.ts";

serve({
  plugins: [
    denoDeploy({ modules }),
    react({ ssr: true }),
    unocss(config),
  ],
});
