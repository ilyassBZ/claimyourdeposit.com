export default function RefundPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Refund Policy</h1>
        <p className="legal-updated"><em>Last updated: January 5, 2026</em></p>

        <div className="legal-content">
          <p>
            Thank you for subscribing to <strong>ClaimYourDeposit</strong>. As our product is a digital service that provides immediate value upon use, we maintain the following refund policy to ensure fairness to all users.
          </p>

          <hr />

          <h2>1. Payment Processor</h2>
          <p>
            All payments, taxes, and subscriptions are securely processed by <strong>DodoPayments</strong>, our authorized payment processor. DodoPayments handles all customer service inquiries related to billing and returns.
          </p>

          <hr />

          <h2>2. Eligibility for Refunds</h2>
          <p>
            In accordance with consumer protection laws and DodoPayments' policies, you may be eligible for a refund within <strong>14 days</strong> of your initial purchase. However, because ClaimYourDeposit is a digital SaaS platform that incurs costs upon use, refunds are granted only if the service has not been "consumed."
          </p>
          <p>A refund will be granted if:</p>
          <ul>
            <li>The request is made within 14 days of the transaction.</li>
            <li>You have not generated more than one (1) document from our templates.</li>
            <li>You have not used any postal dispatch tokens (third-party postal utility) to send any documents.</li>
            <li>You have not exported or downloaded significant amounts of data.</li>
          </ul>

          <hr />

          <h2>3. Non-Refundable Situations</h2>
          <p>We generally do not offer refunds in the following cases:</p>
          <ul>
            <li><strong>Product Usage:</strong> Once postal dispatch tokens are used via our third-party postal utility or multiple templates are generated, the software is considered "used," and the statutory right to cancel is waived. ClaimYourDeposit is a passive document-generation tool and does not review, edit, or modify user content.</li>
            <li><strong>Technical Inability:</strong> Issues arising from a lack of technical skill or incorrect data entry by the user.</li>
            <li><strong>User Outcomes:</strong> We provide organizational tools and customizable templates but cannot guarantee any particular response from third parties. Users retain 100% responsibility for content accuracy and legality.</li>
            <li><strong>Wire Transfers:</strong> Per DodoPayments' terms, payments made via wire transfer are non-refundable.</li>
          </ul>

          <hr />

          <h2>4. How to Request a Refund</h2>
          <p>To request a refund, please contact our support team:</p>
          <ul>
            <li>Email our support team at <a href="mailto:support@claimyourdeposit.com"><strong>support@claimyourdeposit.com</strong></a> with your Order ID and transaction details.</li>
            <li>Include the email address used for the purchase and reason for the refund request.</li>
            <li>We will process eligible refunds through DodoPayments within 5-10 business days.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


