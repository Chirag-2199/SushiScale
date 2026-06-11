import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – SushiScale",
  description: "SushiScale privacy policy",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="font-poppins font-bold text-3xl text-[#0F172A] mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">Last updated: {new Date().getFullYear()}</p>
      <p className="text-gray-600 mb-4">
        SushiScale ("we", "us", or "our") operates the website sushiscale.com. We are committed to protecting your personal information and your right to privacy.
      </p>
      <h2 className="font-poppins font-bold text-xl mt-8 mb-3 text-[#0F172A]">Information We Collect</h2>
      <p className="text-gray-600 mb-4">
        We collect information you provide directly, such as your name, email, phone number, and agency details when you fill out our contact forms.
      </p>
      <h2 className="font-poppins font-bold text-xl mt-8 mb-3 text-[#0F172A]">How We Use Your Information</h2>
      <p className="text-gray-600 mb-4">
        We use the information we collect to respond to your inquiries, schedule strategy calls, and communicate with you about our services.
      </p>
      <h2 className="font-poppins font-bold text-xl mt-8 mb-3 text-[#0F172A]">Contact</h2>
      <p className="text-gray-600">
        For any privacy-related questions, email us at{" "}
        <a href="mailto:hello@sushiscale.com" className="text-[#2563EB]">
          hello@sushiscale.com
        </a>
        .
      </p>
    </main>
  );
}
