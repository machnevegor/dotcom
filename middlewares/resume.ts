async function pdf(filepath: string): Promise<Response> {
  const file = await Deno.readFile(filepath);

  return new Response(
    file,
    { headers: { "Content-Type": "application/pdf" } },
  );
}

export default <Middleware> {
  fetch(req, ctx) {
    const { pathname } = new URL(req.url);

    switch (pathname) {
      case "/resume":
        return pdf("./assets/resume.pdf");
      case "/резюме":
      case "/%D1%80%D0%B5%D0%B7%D1%8E%D0%BC%D0%B5": // Windows-1251
        return pdf("./assets/резюме.pdf");
    }

    return ctx.next();
  },
};
