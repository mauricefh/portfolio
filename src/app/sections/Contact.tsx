import emailjs from "@emailjs/browser";
import { useRef, useState, FormEvent, ChangeEvent } from "react";

import useAlert from "@/app/hooks/useAlert.ts";
import Alert from "@/app/components/Alert.tsx";
import { email, fullName } from "@/app/constants";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const EMAIL_SERVICE_ID = process.env.VITE_APP_EMAILJS_SERVICE_ID as String;
    const EMAIL_TEMPLATE_ID = process.env
      .VITE_APP_EMAILJS_TEMPLATE_ID as String;
    const EMAIL_PUBLIC_KEY = process.env.VITE_APP_EMAILJS_PUBLIC_KEY as String;

    if (EMAIL_TEMPLATE_ID || EMAIL_SERVICE_ID || EMAIL_PUBLIC_KEY)
      throw new Error("Missing environements variable for email services");

    try {
      await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: fullName,
          from_email: form.email,
          to_email: email,
          message: form.message,
        },
        EMAIL_PUBLIC_KEY,
      );

      setLoading(false);
      showAlert({
        text: "Thank you for your message 😃",
        type: "success",
      });

      setTimeout(() => {
        hideAlert();
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      setLoading(false);
      console.error(error);
      showAlert({
        text: "I didn't receive your message 😢",
        type: "danger",
      });
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Let&apos;s talk</h3>
          <p className="mt-3 text-lg text-white-600">
            Whether you&apos;re looking to build a new website, improve your
            existing platform, or bring a unique project to life, I&apos;m here
            to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
