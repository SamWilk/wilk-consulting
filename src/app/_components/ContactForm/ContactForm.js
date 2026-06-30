"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactRequest } from "../../_serverless/contactActions";
import styles from "./ContactForm.module.css";

const initialState = {
  ok: null,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sending request..." : "Send request"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContactRequest, initialState);

  return (
    <form
      id="contact-form"
      className={styles.contactForm}
      action={formAction}
      aria-label="Contact Sam Wilk Consulting"
    >
      <div className={styles.formHeader}>
        <p>Project inquiry</p>
        <h2>Tell me what you need fixed or built.</h2>
        <span>
          Share what your business does, what feels outdated, and what you want the site
          to do better.
        </span>
      </div>

      <div className={styles.fieldGrid}>
        <label>
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>

      <label>
        Business or service
        <input
          name="business"
          type="text"
          placeholder="Pressure washing, landscaping, roofing..."
          required
        />
      </label>

      <label>
        What do you want help with?
        <textarea
          name="details"
          rows="5"
          placeholder="Tell me about the current site, the problems you want solved, and what you want customers to do next."
          required
        />
      </label>

      <SubmitButton />

      {state.message ? (
        <p className={state.ok ? styles.successMessage : styles.errorMessage}>
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
