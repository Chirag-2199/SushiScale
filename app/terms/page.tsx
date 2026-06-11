import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service – SushiScale",
  description: "SushiScale terms of service",
  robots: { index: false, follow: false },
};

export default function Terms() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="font-poppins font-bold text-3xl text-[#0F172A] mb-6">Terms of Service</h1>
      <p className="text-gray-600 mb-4">Last updated: {new Date().getFullYear()}</p>
      <p className="text-gray-600 mb-4">
        By accessing or using the SushiScale website and services, you agree to be bound by these Terms of Service.
      </p>
      <h2 className="font-poppins font-bold text-xl mt-8 mb-3 text-[#0F172A]">Services</h2>
      <p className="text-gray-600 mb-4">
        SushiScale provides white-label digital marketing fulfillment services including Meta Ads management, GoHighLevel setup, funnel creation, and related services.
      </p>
      <h2 className="font-poppins font-bold text-xl mt-8 mb-3 text-[#0F172A]">Payment</h2>
      <p className="text-gray-600 mb-4">
        Services are billed monthly at $270 per active client account. Pricing is subject to change with 30 days' notice.
      </p>
      <h2 className="font-poppins font-bold text-xl mt-8 mb-3 text-[#0F172A]">Contact</h2>
      <p className="text-gray-600">
        Questions? Email{" "}
        <a href="mailto:hello@sushiscale.com" className="text-[#2563EB]">
          hello@sushiscale.com
        </a>
        .
      </p>
    </main>
  );
}
