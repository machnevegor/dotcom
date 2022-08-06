import blog, { ga } from "https://deno.land/x/blog/blog.tsx";

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
    ga("G-K2TLBLL972"),
  ],
  favicon: "./assets/logo.svg",
});
