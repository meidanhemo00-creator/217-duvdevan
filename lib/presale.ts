// The book has no purchase link yet — every "Purchase" CTA is replaced with
// a presale registration instead. Submissions need somewhere to go: this is
// a static export (see next.config.ts, output: "export"), so there is no
// server route on this site itself to receive them.
//
// Point this at a form backend that accepts a POST of FormData/JSON and
// forwards it to an inbox — e.g. a Formspree endpoint
// ("https://formspree.io/f/xxxxxxxx"), Getform, Basin, or a custom
// endpoint of your own. Until a real value is set, the form still renders
// and validates normally, but submission fails honestly (see
// PresaleForm.tsx) rather than pretending to succeed.
export const PRESALE_ENDPOINT = "ADD_PRESALE_FORM_ENDPOINT_HERE";

export const isPresaleConfigured = () =>
  Boolean(PRESALE_ENDPOINT) && PRESALE_ENDPOINT !== "ADD_PRESALE_FORM_ENDPOINT_HERE";
