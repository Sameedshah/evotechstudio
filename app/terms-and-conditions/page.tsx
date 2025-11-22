import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for EvoTech Studio - Read our terms of service and usage guidelines.",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> November 22, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing or using EvoTech Studio's website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
            <p className="text-muted-foreground mb-4">
              EvoTech Studio provides web development, mobile app development, UI/UX design, and related digital services. The specific scope of services will be outlined in individual project agreements or contracts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <h3 className="text-xl font-semibold mb-3">3.1 Account Security</h3>
            <p className="text-muted-foreground mb-4">
              You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.
            </p>

            <h3 className="text-xl font-semibold mb-3">3.2 Prohibited Activities</h3>
            <p className="text-muted-foreground mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Use our services for any illegal purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Transmit malicious code or viruses</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property Rights</h2>
            <h3 className="text-xl font-semibold mb-3">4.1 Our Content</h3>
            <p className="text-muted-foreground mb-4">
              All content on our website, including text, graphics, logos, and software, is the property of EvoTech Studio and is protected by copyright and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold mb-3">4.2 Project Deliverables</h3>
            <p className="text-muted-foreground mb-4">
              Upon full payment, clients receive ownership rights to the final deliverables as specified in the project agreement. EvoTech Studio retains the right to showcase completed work in our portfolio unless otherwise agreed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
            <p className="text-muted-foreground mb-4">
              Payment terms will be specified in individual project agreements. Generally:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>A deposit may be required before work begins</li>
              <li>Milestone payments may be established for larger projects</li>
              <li>Final payment is due upon project completion</li>
              <li>Late payments may incur additional fees</li>
              <li>All prices are in USD unless otherwise specified</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Project Timeline and Delivery</h2>
            <p className="text-muted-foreground mb-4">
              Project timelines are estimates and may be subject to change based on project complexity, client feedback, and unforeseen circumstances. We will communicate any delays promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Revisions and Changes</h2>
            <p className="text-muted-foreground mb-4">
              The number of revisions included in a project will be specified in the project agreement. Additional revisions beyond the agreed scope may incur extra charges.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Warranties and Disclaimers</h2>
            <h3 className="text-xl font-semibold mb-3">8.1 Service Warranty</h3>
            <p className="text-muted-foreground mb-4">
              We warrant that our services will be performed in a professional and workmanlike manner. We will correct any defects in our work at no additional charge within a reasonable period after delivery.
            </p>

            <h3 className="text-xl font-semibold mb-3">8.2 Disclaimer</h3>
            <p className="text-muted-foreground mb-4">
              Our services are provided "as is" without any warranties, express or implied, except as specifically stated in project agreements. We do not guarantee specific results or outcomes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              To the maximum extent permitted by law, EvoTech Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Confidentiality</h2>
            <p className="text-muted-foreground mb-4">
              We respect the confidentiality of client information and will not disclose confidential information to third parties without consent, except as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
            <p className="text-muted-foreground mb-4">
              Either party may terminate a project agreement with written notice. Upon termination, the client is responsible for payment for all work completed up to the termination date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <ul className="list-none text-muted-foreground mb-4 space-y-2">
              <li><strong>Email:</strong> info@evotechstudio.dev</li>
              <li><strong>Phone:</strong> +92 370 0589908</li>
              <li><strong>Address:</strong> Karachi Pakistan, 74900</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
