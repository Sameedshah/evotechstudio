import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ownership Statement",
  description: "Ownership Statement for EvoTech Studio - Information about intellectual property rights and ownership of deliverables.",
};

export default function OwnershipStatement() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Ownership Statement</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> November 22, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
            <p className="text-muted-foreground mb-4">
              This Ownership Statement outlines the intellectual property rights and ownership terms for work created by EvoTech Studio for our clients.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Client Ownership</h2>
            <h3 className="text-xl font-semibold mb-3">2.1 Final Deliverables</h3>
            <p className="text-muted-foreground mb-4">
              Upon receipt of full payment, the client receives ownership rights to the final project deliverables, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Custom code written specifically for the project</li>
              <li>Custom designs and graphics created for the project</li>
              <li>Project documentation and materials</li>
              <li>Final compiled applications or websites</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 License Grant</h3>
            <p className="text-muted-foreground mb-4">
              The client receives a perpetual, worldwide, non-exclusive license to use, modify, and distribute the final deliverables for their business purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. EvoTech Studio Ownership</h2>
            <h3 className="text-xl font-semibold mb-3">3.1 Pre-existing Materials</h3>
            <p className="text-muted-foreground mb-4">
              EvoTech Studio retains ownership of:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Pre-existing code libraries, frameworks, and tools</li>
              <li>Proprietary development methodologies and processes</li>
              <li>Reusable code components and templates</li>
              <li>Internal documentation and workflows</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">3.2 Portfolio Rights</h3>
            <p className="text-muted-foreground mb-4">
              Unless otherwise agreed in writing, EvoTech Studio reserves the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Display completed projects in our portfolio</li>
              <li>Use project screenshots and descriptions for marketing</li>
              <li>Reference the client relationship in case studies</li>
              <li>Showcase our work on our website and social media</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Clients may request confidentiality for sensitive projects, which will be honored upon written agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Components</h2>
            <h3 className="text-xl font-semibold mb-3">4.1 Open Source Software</h3>
            <p className="text-muted-foreground mb-4">
              Projects may incorporate open-source software components, which are subject to their respective licenses. We will inform clients of any significant open-source dependencies.
            </p>

            <h3 className="text-xl font-semibold mb-3">4.2 Licensed Assets</h3>
            <p className="text-muted-foreground mb-4">
              Third-party assets (fonts, stock images, plugins) remain the property of their respective owners and are subject to their licensing terms. Clients are responsible for maintaining valid licenses for these assets.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Client-Provided Materials</h2>
            <p className="text-muted-foreground mb-4">
              Clients retain ownership of all materials they provide, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Brand assets (logos, trademarks)</li>
              <li>Content (text, images, videos)</li>
              <li>Existing code or designs</li>
              <li>Business data and information</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Clients grant EvoTech Studio a license to use these materials solely for the purpose of completing the project.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Work in Progress</h2>
            <p className="text-muted-foreground mb-4">
              Until final payment is received, EvoTech Studio retains ownership of all work in progress, including drafts, prototypes, and incomplete deliverables.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property Warranties</h2>
            <h3 className="text-xl font-semibold mb-3">7.1 Our Warranty</h3>
            <p className="text-muted-foreground mb-4">
              EvoTech Studio warrants that the work we create does not infringe upon the intellectual property rights of third parties, to the best of our knowledge.
            </p>

            <h3 className="text-xl font-semibold mb-3">7.2 Client Warranty</h3>
            <p className="text-muted-foreground mb-4">
              Clients warrant that all materials they provide do not infringe upon the intellectual property rights of third parties and that they have the right to use and license these materials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Confidentiality</h2>
            <p className="text-muted-foreground mb-4">
              Both parties agree to maintain the confidentiality of proprietary information shared during the project. This obligation survives the completion of the project.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Source Code Access</h2>
            <p className="text-muted-foreground mb-4">
              Upon full payment, clients receive access to the source code of custom-developed applications. We recommend maintaining proper backups and version control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Modifications and Derivative Works</h2>
            <p className="text-muted-foreground mb-4">
              After ownership transfer, clients are free to modify the deliverables or create derivative works. However, EvoTech Studio is not responsible for issues arising from modifications made by third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Dispute Resolution</h2>
            <p className="text-muted-foreground mb-4">
              Any disputes regarding ownership or intellectual property rights will be resolved through good-faith negotiation. If necessary, disputes may be subject to mediation or arbitration.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions about ownership and intellectual property rights, please contact us:
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
