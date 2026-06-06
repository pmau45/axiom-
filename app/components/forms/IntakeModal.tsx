'use client';

import { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface IntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormValues {
  name: string;
  phone: string;
  dog_name: string;
  service: string;
  message: string;
  'bot-field': string; // honeypot
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  message?: string;
}

function validate(values: Omit<FormValues, 'bot-field'>): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Your name is required.';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }

  if (!values.phone.trim()) {
    errors.phone = 'A phone number is required.';
  } else if (!/^\+?[\d\s\-().]{7,15}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!values.service) {
    errors.service = 'Please select a service.';
  }

  if (!values.message.trim()) {
    errors.message = "Please describe what's going on.";
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please provide a bit more detail (at least 10 characters).';
  }

  return errors;
}

export default function IntakeModal({ isOpen, onClose }: IntakeModalProps) {
  const [values, setValues] = useState<FormValues>({
    name: '',
    phone: '',
    dog_name: '',
    service: '',
    message: '',
    'bot-field': '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormErrors, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Focus management: trap focus inside modal
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleClose = () => {
    setErrors({});
    setTouched({});
    setValues({ name: '', phone: '', dog_name: '', service: '', message: '', 'bot-field': '' });
    setSubmitting(false);
    setSubmitted(false);
    setSubmitError(null);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) handleClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear error on change if field was touched
    if (touched[name as keyof FormErrors]) {
      const newErrors = validate({ ...values, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(values);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If honeypot is filled, silently succeed (spam bot)
    if (values['bot-field']) {
      setSubmitted(true);
      return;
    }

    // Mark all fields as touched and validate
    setTouched({ name: true, phone: true, service: true, message: true });
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const formData = new URLSearchParams();
      formData.append('form-name', 'intake');
      formData.append('name', values.name);
      formData.append('phone', values.phone);
      formData.append('dog_name', values.dog_name);
      formData.append('service', values.service);
      formData.append('message', values.message);

      const response = await fetch('/netlify-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitError('Something went wrong. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitError('Something went wrong. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses = (field: keyof FormErrors) =>
    `w-full bg-[#0B0C10] border px-5 py-4 text-white focus:outline-none focus:ring-1 transition-colors ${
      errors[field] && touched[field]
        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
        : 'border-[#1A2030] focus:border-[#FF5E00] focus:ring-[#FF5E00]'
    }`;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center p-4 pt-16 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#050505]/90 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Panel */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-2xl bg-[#050505] border border-[#1A2030] shadow-2xl my-8"
      >
        {/* Corner Accents */}
        <div
          className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#FF5E00] -translate-x-2 -translate-y-2"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#FF5E00] translate-x-2 translate-y-2"
          aria-hidden="true"
        />

        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#C5C6C7] hover:text-white p-2 z-20"
          aria-label="Close form"
        >
          <X className="w-6 h-6" aria-hidden="true" />
        </button>

        <div className="p-8 md:p-14 relative">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-[#7A8B66] mx-auto mb-6" aria-hidden="true" />
              <h2
                id="modal-title"
                className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]"
              >
                Got It!
              </h2>
              <p className="text-[#C5C6C7] text-lg max-w-md mx-auto mb-8">
                We&apos;ll reach out within 24 hours. Talk soon.
              </p>
              <button
                onClick={handleClose}
                className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest py-4 px-10 hover:bg-[#CC4B00] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
          <>
          <div className="text-center mb-12">
            <h2
              id="modal-title"
              className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]"
            >
              Let&apos;s Get to Work
            </h2>
            <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto">
              Fill out the form and we&apos;ll reach out within 24 hours.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            name="intake"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6"
            noValidate
            aria-label="Dog training intake form"
          >
                {/* Netlify hidden field - required for Netlify to recognize form */}
                <input type="hidden" name="form-name" value="intake" />

                {/* Honeypot field (hidden from humans) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="bot-field">
                    Don&apos;t fill this out if you&apos;re human:
                  </label>
                  <input
                    type="text"
                    id="bot-field"
                    name="bot-field"
                    value={values['bot-field']}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="intake-name"
                      className="font-oswald uppercase text-sm tracking-widest text-[#C5C6C7] block"
                    >
                      Your Name <span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      id="intake-name"
                      type="text"
                      name="name"
                      required
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClasses('name')}
                      placeholder="First &amp; Last Name"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!(errors.name && touched.name)}
                      aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                    />
                    {errors.name && touched.name && (
                      <p id="name-error" role="alert" className="text-red-400 text-xs mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="intake-phone"
                      className="font-oswald uppercase text-sm tracking-widest text-[#C5C6C7] block"
                    >
                      Phone Number <span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      id="intake-phone"
                      type="tel"
                      name="phone"
                      required
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClasses('phone')}
                      placeholder="(904) 555-0123"
                      autoComplete="tel"
                      aria-required="true"
                      aria-invalid={!!(errors.phone && touched.phone)}
                      aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && touched.phone && (
                      <p id="phone-error" role="alert" className="text-red-400 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Dog's Name (optional) */}
                  <div className="col-span-1 md:col-span-2 space-y-2">
                    <label
                      htmlFor="intake-dog-name"
                      className="font-oswald uppercase text-sm tracking-widest text-[#C5C6C7] block"
                    >
                      Dog&apos;s Name{' '}
                      <span className="text-[#C5C6C7]/40 text-xs normal-case tracking-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="intake-dog-name"
                      type="text"
                      name="dog_name"
                      value={values.dog_name}
                      onChange={handleChange}
                      className="w-full bg-[#0B0C10] border border-[#1A2030] px-5 py-4 text-white focus:outline-none focus:ring-1 focus:border-[#FF5E00] focus:ring-[#FF5E00] transition-colors"
                      placeholder="e.g. Zeus, Bella..."
                      autoComplete="off"
                    />
                  </div>
                </div>

                {/* Service Selector */}
                <div className="space-y-2">
                  <label
                    htmlFor="intake-service"
                    className="font-oswald uppercase text-sm tracking-widest text-[#C5C6C7] block"
                  >
                    How Can We Help? <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <select
                    id="intake-service"
                    name="service"
                    required
                    value={values.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputClasses('service')} appearance-none`}
                    aria-required="true"
                    aria-invalid={!!(errors.service && touched.service)}
                    aria-describedby={errors.service && touched.service ? 'service-error' : undefined}
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    <option value="behavior">Behavior Modification</option>
                    <option value="obedience">Advanced Obedience</option>
                    <option value="board-train">Board &amp; Train</option>
                    <option value="in-home">In-Home Training</option>
                    <option value="group">Group Classes</option>
                    <option value="rescue">Rescue &#47; Adoption Adjustment (Free)</option>
                  </select>
                  {errors.service && touched.service && (
                    <p id="service-error" role="alert" className="text-red-400 text-xs mt-1">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2 pt-2">
                  <label
                    htmlFor="intake-message"
                    className="font-oswald uppercase text-sm tracking-widest text-[#C5C6C7] block"
                  >
                    What&apos;s Going On? <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <textarea
                    id="intake-message"
                    name="message"
                    required
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputClasses('message')} resize-none`}
                    placeholder="Tell us about the behaviors..."
                    aria-required="true"
                    aria-invalid={!!(errors.message && touched.message)}
                    aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                  />
                  {errors.message && touched.message && (
                    <p id="message-error" role="alert" className="text-red-400 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                {submitError && (
                  <p role="alert" className="text-red-400 text-sm text-center">
                    {submitError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest py-5 flex items-center justify-center gap-3 mt-8 hover:bg-[#CC4B00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Send Information'}
                  {!submitting && <Send className="w-5 h-5" aria-hidden="true" />}
                </button>
          </form>
          </>
          )}
        </div>
      </div>
    </div>
  );
}
