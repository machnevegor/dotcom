import blog from "https://deno.land/x/blog@0.4.2/blog.tsx";

blog({
  title: "Egor Machnev",
  description: "machnevegor",
  avatar: "./logo.png",
  author: "Egor Machnev",
  links: [
    { title: "Email", url: "mailto:egorikhelp@gmail.com" },
    { title: "GitHub", url: "https://github.com/machnevegor" },
  ],
  theme: "light",
});
