"use client";

import { useState, type FormEvent } from "react";
import { PRESALE_ENDPOINT, isPresaleConfigured } from "@/lib/presale";

type Status = "idle" | "submitting" | "success" | "error" | "not-configured";

type Errors = {
  name?: string;
  email?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function PresaleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): Errors => {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your full name.";
    if (!email.trim()) next.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(email.trim())) next.email = "Please enter a valid email address.";
    return next;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    if (!isPresaleConfigured()) {
      setStatus("not-configured");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(PRESALE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: phone.trim() }),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-red/40 bg-red/10 px-6 py-8 text-center"
      >
        <p className="font-display text-lg uppercase tracking-wide text-paper">Thank you</p>
        <p className="font-body mt-2 text-sm text-paper/75">
          You&rsquo;re on the list. We&rsquo;ll email you the purchase link the moment the book is
          released.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-md">
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="presale-name" className="font-display block text-xs uppercase tracking-wider text-paper/70">
            Full Name
          </label>
          <input
            id="presale-name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "presale-name-error" : undefined}
            className="font-body mt-1.5 w-full border border-paper/25 bg-transparent px-4 py-3 text-paper placeholder:text-paper/35 focus:border-red-bright"
            placeholder="Jane Cohen"
          />
          {errors.name && (
            <p id="presale-name-error" className="font-body mt-1.5 text-xs font-semibold text-red-alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="presale-email" className="font-display block text-xs uppercase tracking-wider text-paper/70">
            Email Address
          </label>
          <input
            id="presale-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "presale-email-error" : undefined}
            className="font-body mt-1.5 w-full border border-paper/25 bg-transparent px-4 py-3 text-paper placeholder:text-paper/35 focus:border-red-bright"
            placeholder="jane@example.com"
          />
          {errors.email && (
            <p id="presale-email-error" className="font-body mt-1.5 text-xs font-semibold text-red-alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="presale-phone" className="font-display block text-xs uppercase tracking-wider text-paper/70">
            Phone Number <span className="normal-case text-paper/40">(optional)</span>
          </label>
          <input
            id="presale-phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="font-body mt-1.5 w-full border border-paper/25 bg-transparent px-4 py-3 text-paper placeholder:text-paper/35 focus:border-red-bright"
            placeholder="+972 50 000 0000"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="font-display mt-2 bg-red px-8 py-4 text-sm uppercase tracking-wider text-paper transition-colors hover:bg-red-bright disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Join the Presale"}
        </button>

        {status === "error" && (
          <p role="alert" className="font-body text-sm font-semibold text-red-alert">
            Something went wrong sending your details. Please try again in a moment.
          </p>
        )}
        {status === "not-configured" && (
          <p role="alert" className="font-body text-sm text-paper/60">
            Registration isn&rsquo;t connected yet — please check back shortly, or reach us
            directly in the meantime.
          </p>
        )}
      </div>
    </form>
  );
}
