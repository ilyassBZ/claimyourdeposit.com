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

          <h2>1. Merchant of Record</h2>
          <p>
            All payments and subscriptions on this website are securely processed by <strong>Dodo Payments</strong>, our authorized Merchant of Record. Dodo Payments is the official reseller of our services and handles all transaction-related compliance, taxes, and billing inquiries.
          </p>

          <hr />

          <h2>2. Eligibility for Refunds</h2>
          <p>
            In accordance with consumer protection laws and Paddle's Buyer Terms, you may be eligible for a refund within <strong>14 days</strong> of your initial purchase. However, because ClaimYourDeposit is a digital SaaS platform that incurs costs upon use, refunds are granted only if the service has not been "consumed."
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
            <li><strong>Wire Transfers:</strong> Per Dodo Payments' terms, payments made via wire transfer are non-refundable.</li>
          </ul>

          <hr />

          <h2>4. How to Request a Refund</h2>
          <p>To request a refund, please contact our support team:</p>
          <ul>
            <li>Email us at <a href="mailto:support@claimyourdeposit.com"><strong>support@claimyourdeposit.com</strong></a> with your Order ID.</li>
            <li>We will assist you in coordinating the refund with Dodo Payments.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


