import ContactForm from "./ContactForm";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Contact Joe Palala | Senior Full-Stack Engineer",
  description:
    "Send a message to Joe Palala, a senior full-stack engineer working across front end, back end and servers.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      <h1 className="mb-6 text-4xl font-extrabold text-foreground">
        Contact Joe Palala
      </h1>
      <ContactForm />
    </div>
  );
}
