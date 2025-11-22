import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation, Return & Refund Policy",
  description: "Cancellation, Return and Refund Policy for EvoTech Studio - Learn about our policies for project cancellations and refunds.",
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Cancellation, Return & Refund Policy</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> November 22, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
            <p className="text-muted-foreground mb-4">
              At EvoTech Studio, we strive to deliver high-quality services that meet your expectations. This policy outlines our approach to cancellations, returns, and refunds for our digital services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Nature of Our Services</h2>
            <p className="text-muted-foreground mb-4">
              Our services include custom web development, mobile app development, UI/UX design, and related digital solutions. Due to the custom and time-intensive nature of our work, our refund policy differs from traditional product-based businesses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Cancellation Policy</h2>
            <h3 className="text-xl font-semibold mb-3">3.1 Client-Initiated Cancellation</h3>
            <p className="text-muted-foreground mb-4">
              Clients may cancel a project at any time by providing written notice. Upon cancellation:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>All work completed up to the cancellation date must be paid for</li>
              <li>Any deposits or advance payments are non-refundable</li>
              <li>The client will receive all work completed to date</li>
              <li>Outstanding invoices become immediately due</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3.2 EvoTech Studio-Initiated Cancellation</h3>
            <p className="text-muted-foreground mb-4">
              We reserve the right to cancel a project if:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Payment terms are not met</li>
              <li>The client fails to provide necessary materials or feedback</li>
              <li>The project scope changes significantly without agreement</li>
              <li>We determine we cannot meet the project requirements</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              In such cases, we will provide written notice and refund any payments for work not yet performed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Refund Policy</h2>
            <h3 className="text-xl font-semibold mb-3">4.1 Deposit Refunds</h3>
            <p className="text-muted-foreground mb-4">
              Initial deposits are generally non-refundable as they secure your project slot and cover initial planning and setup costs. Exceptions may be made at our discretion if:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>We are unable to start the project within the agreed timeframe</li>
              <li>We determine we cannot fulfill the project requirements</li>
              <li>No work has been performed on the project</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4.2 Partial Refunds</h3>
            <p className="text-muted-foreground mb-4">
              Partial refunds may be issued in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Significant delays caused by EvoTech Studio</li>
              <li>Failure to deliver agreed-upon features or functionality</li>
              <li>Material breach of contract by EvoTech Studio</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Partial refunds will be calculated based on the percentage of work completed versus the total project scope.
            </p>

            <h3 className="text-xl font-semibold mb-3">4.3 Full Refunds</h3>
            <p className="text-muted-foreground mb-4">
              Full refunds are rare but may be issued if:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>No work has been performed on the project</li>
              <li>We are unable to deliver any usable work product</li>
              <li>There is a fundamental failure to meet the agreed project scope</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Non-Refundable Items</h2>
            <p className="text-muted-foreground mb-4">
              The following are non-refundable:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Initial consultation fees</li>
              <li>Discovery and planning phase work</li>
              <li>Third-party costs (hosting, domains, licenses, stock assets)</li>
              <li>Completed work that meets the agreed specifications</li>
              <li>Time spent on revisions within the agreed scope</li>
              <li>Training and support services already provided</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Return Policy</h2>
            <p className="text-muted-foreground mb-4">
              As we provide custom digital services rather than physical products, traditional returns do not apply. However:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>We offer revisions as specified in the project agreement</li>
              <li>We will correct any defects or errors in our work</li>
              <li>We provide a warranty period for bug fixes (typically 30-90 days post-launch)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Refund Request Process</h2>
            <p className="text-muted-foreground mb-4">
              To request a refund:
            </p>
            <ol className="list-decimal pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Submit a written refund request to info@evotechstudio.dev</li>
              <li>Include your project details and reason for the refund request</li>
              <li>Provide any supporting documentation</li>
              <li>We will review your request within 5-7 business days</li>
              <li>If approved, refunds will be processed within 14 business days</li>
              <li>Refunds will be issued to the original payment method</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Dispute Resolution</h2>
            <p className="text-muted-foreground mb-4">
              If you are dissatisfied with our services or have concerns about billing:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Contact us immediately to discuss the issue</li>
              <li>We will work with you to find a mutually acceptable solution</li>
              <li>If we cannot resolve the issue directly, we may suggest mediation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Subscription Services</h2>
            <p className="text-muted-foreground mb-4">
              For ongoing maintenance or subscription-based services:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Cancellation must be requested before the next billing cycle</li>
              <li>No refunds for partial months of service</li>
              <li>Services will continue until the end of the paid period</li>
              <li>30 days notice is required for cancellation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Force Majeure</h2>
            <p className="text-muted-foreground mb-4">
              We are not liable for delays or failure to perform due to circumstances beyond our reasonable control, including natural disasters, pandemics, or technical failures. In such cases, we will work with you to reschedule or adjust the project timeline.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to modify this policy at any time. Changes will be effective immediately upon posting. Projects already in progress will be governed by the policy in effect at the time of contract signing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              For questions about cancellations, returns, or refunds, please contact us:
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
