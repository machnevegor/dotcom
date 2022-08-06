import blog, { redirects } from "https://deno.land/x/blog@0.4.2/blog.tsx";

blog({
  title: "Egor Machnev",
  description:
    "Full Stack developer in Deno and Python, slightly vector designer.",
  avatar: "./assets/icon.svg",
  author: "Egor Machnev",
  links: [
    { title: "Email", url: "mailto:egorikhelp@gmail.com" },
    { title: "GitHub", url: "https://github.com/machnevegor" },
  ],
  middlewares: [
    redirects({
      "github": "https://github.com/machnevegor",
      "telegram": "https://t.me/machnevegor",
    }),
  ],
  favicon: "./assets/logo.svg",
});
