"use client";

import { useActionState, useEffect, useRef } from "react";

import { buttonStyles } from "@/components/button";
import {
  submitEnquiry,
  type ContactState,
} from "@/app/contact/actions";
import { contactPage, enquiryFields } from "@/content/contact";

const fieldClass =
  "mt-2 w-full min-h-11 border border-line bg-ink px-3 text-base text-paper placeholder:text-faint";

const initialContactState: ContactState = {
  status: "idle",
  message: "",
  fieldErrors: {},
  delivered: false,
};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitEnquiry,
    initialContactState,
  );
  const alertRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (state.status === "error") {
      alertRef.current?.focus();
    }
    if (state.status === "success") {
      successRef.current?.focus();
    }
  }, [state]);

  if (state.status === "success") {
    return (
      <div aria-live="polite">
        <h2
          ref={successRef}
          tabIndex={-1}
          className="text-2xl font-semibold tracking-tight text-paper"
        >
          {contactPage.form.successTitle}
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">{state.message}</p>
        {process.env.NODE_ENV === "development" && !state.delivered ? (
          <p className="mt-6 text-sm text-faint">
            Development only: FORMSPREE_FORM_ID is not set, so this enquiry was
            not emailed.
          </p>
        ) : null}
      </div>
    );
  }

  const hasFieldErrors = Object.keys(state.fieldErrors).length > 0;

  return (
    <form
      action={formAction}
      aria-labelledby="enquiry-title"
      className="relative"
      noValidate
    >
      <h2
        id="enquiry-title"
        className="text-2xl font-semibold tracking-tight text-paper"
      >
        {contactPage.form.title}
      </h2>
      <p className="mt-3 text-sm text-muted">{contactPage.form.requiredNote}</p>

      <div aria-live="polite">
        {pending ? <p className="sr-only">Sending your enquiry.</p> : null}
        {state.status === "error" ? (
          <div
            ref={alertRef}
            tabIndex={-1}
            role="alert"
            className="mt-6 border border-stroke bg-panel px-4 py-3"
          >
            <p className="font-semibold text-paper">{state.message}</p>
            {hasFieldErrors ? (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                {enquiryFields.map((field) => {
                  const message = state.fieldErrors[field.name];
                  if (!message) return null;
                  return (
                    <li key={field.name}>
                      <a href={`#${field.name}`} className="underline">
                        {message}
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="shaft_hp">Leave this empty</label>
        <input
          id="shaft_hp"
          name="shaft_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {enquiryFields.map((field) => {
          const error = state.fieldErrors[field.name];
          const errorId = `${field.name}-error`;
          const describedBy = error ? errorId : undefined;
          const shared = {
            id: field.name,
            name: field.name,
            required: field.required,
            maxLength: field.maxLength,
            autoComplete: field.autoComplete,
            placeholder: field.placeholder,
            "aria-invalid": error ? true : undefined,
            "aria-describedby": describedBy,
            className: fieldClass,
          };

          return (
            <div
              key={field.name}
              className={field.width === "full" ? "sm:col-span-2" : undefined}
            >
              <label htmlFor={field.name} className="text-sm font-semibold text-paper">
                {field.label}
                {field.required ? (
                  <>
                    <span aria-hidden="true" className="text-amber">
                      {" "}
                      *
                    </span>
                    <span className="sr-only"> (required)</span>
                  </>
                ) : (
                  <span className="font-normal text-muted"> (optional)</span>
                )}
              </label>
              {field.type === "textarea" ? (
                <textarea {...shared} rows={6} className={`${fieldClass} py-3`} />
              ) : (
                <input {...shared} type={field.type} />
              )}
              {error ? (
                <p id={errorId} className="mt-2 text-sm text-paper">
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        className={`${buttonStyles.primary} mt-8 disabled:cursor-wait disabled:opacity-100`}
        disabled={pending}
        aria-busy={pending}
      >
        {pending ? contactPage.form.sending : contactPage.form.submit}
      </button>
    </form>
  );
}
