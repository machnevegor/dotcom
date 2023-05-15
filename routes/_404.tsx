export default function E404() {
  return (
    <main className="grid h-[calc(100dvh)] gap-2 place-content-center justify-items-center">
      <img
        className="w-48"
        src="/assets/blinking.svg"
        alt="machnevegor's logo"
      />
      <p className="font-mono text-xl">
        Oops... Contact{" "}
        <a
          className="color-green @hover:underline"
          href="https://t.me/machnevegor"
        >
          me
        </a>?
      </p>
    </main>
  );
}
