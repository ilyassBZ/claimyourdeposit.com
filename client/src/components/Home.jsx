import NewsletterForm from "./NewsletterForm.jsx";
import FAQ from "./FAQ.jsx";

export default function Home() {
  return (
    <>
      {/* Hero Section - Above the Fold */}
      <section className="hero">
        <div className="hero-content">
          <h1>The Smart Way to Organize Your Move-Out Records</h1>
          <p className="subheadline">
            Save your photos, store your lease, and generate professional documentation in seconds.
            A digital workspace for renters to keep track of their rental condition from day one to move-out.
            Stay organized. Keep your records safe.
          </p>
          <NewsletterForm />
          <p className="micro-copy">
            Smart documentation. Professional organization.
          </p>
        </div>
      </section>

      {/* Pain Section - Agitation */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Renters Need Better Organization Tools</h2>

          <ul className="pain-list">
            <li className="pain-item">Lost photos scattered across your phone? Hard to find when you need them.</li>
            <li className="pain-item">No organized records from move-in? Difficult to compare conditions later.</li>
            <li className="pain-item">Trying to remember issues from months ago? A digital timeline helps.</li>
          </ul>
        </div>
      </section>

      {/* Documentation Platform Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Your Year-Round Digital Filing System</h2>
          <p className="section-subtitle">
            Organize your rental records from the moment you move in
          </p>

          <div className="ai-visual">
            <div className="ai-panel">
              <div className="ai-panel-header">📸 Move-In Day</div>
              <div className="ai-panel-content">
                <div className="ai-image-placeholder">
                  🏠 Upload timestamped photos
                </div>
                <div className="ai-label success">
                  ✅ Stored & Organized<br />
                  <span className="ai-label-detail">By room, date, condition notes</span>
                </div>
              </div>
            </div>

            <div className="ai-arrow">→</div>

            <div className="ai-panel">
              <div className="ai-panel-header">📄 Condition Summary PDF</div>
              <div className="ai-panel-content">
                <div className="ai-letter">
                  <p className="ai-letter-line">"Dear [Property Manager],</p>
                  <p className="ai-letter-line highlighted">
                    I am writing to document the condition of the property.
                    <strong>Supporting photos attached.</strong>
                  </p>
                  <p className="ai-letter-line">Please find my organized records below..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - The 4-Step Process */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Upload. Organize. Generate. Export.
          </p>

          <div className="steps-grid">
            <div className="step-card">
              <span className="step-number">1</span>
              <span className="step-icon">📸</span>
              <h3>Upload Your Records</h3>
              <p>Save photos, videos, and notes on Day 1. Every room. Every detail. Timestamped and secure in the cloud.</p>
            </div>

            <div className="step-card">
              <span className="step-number">2</span>
              <span className="step-icon">🛠️</span>
              <h3>Track Throughout the Year</h3>
              <p>Add maintenance records, repair requests, and condition updates as they happen. Build your digital timeline.</p>
            </div>

            <div className="step-card">
              <span className="step-number">3</span>
              <span className="step-icon">📝</span>
              <h3>Generate Custom Notice</h3>
              <p>When you move out, create a personalized summary document using our templates. You edit and control all text.</p>
            </div>

            <div className="step-card">
              <span className="step-number">4</span>
              <span className="step-icon">📬</span>
              <h3>Export & Mail</h3>
              <p>Download your PDF or use our mailing service (1 mailing included per year, additional mailings $12 each) with tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Subscription Pricing */}
      <section className="section section-blue" id="pricing">
        <div className="container">
          <h2 className="section-title">Keep Your Rental Records Organized All Year</h2>
          <p className="section-subtitle">
            One subscription covers ONE property for a FULL year
          </p>

          <div className="pricing-card">
            <p className="pricing-badge">🎁 7-Day Free Trial</p>
            <div className="price">
              <span className="price-main">$45</span>
              <span className="price-period">/year</span>
            </div>
            <p className="pricing-detail">Per rental property</p>
            <p className="pricing-trial">Try it free for 7 days, then billed annually</p>

            <ul className="pricing-features">
              <li>📸 Digital photo storage</li>
              <li>🛠️ Maintenance record tracking</li>
              <li>📝 Timeline organization tools</li>
              <li>📄 Automated document templates</li>
              <li>📬 1 document mailing included (additional mailings $12 each)</li>
              <li>🔒 Secure cloud storage</li>
              <li>📊 90-day archive after cancellation</li>
            </ul>

            <p className="pricing-urgency">💡 Each additional property: only $10/year</p>
          </div>

          <div className="referral-box">
            <h3>🏘️ Multiple Properties?</h3>
            <p>
              Managing 2+ rentals? Add extra properties for just $10/year each.
              Perfect for renters with roommates tracking separate leases, or anyone with a second rental.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Built for Renters. Designed for Organization.</h2>
          <p className="section-subtitle">
            Professional document templates for all 50 states
          </p>

          <div className="trust-badges">
            <div className="trust-badge">🇺🇸 50 States Covered</div>
            <div className="trust-badge">📊 2026 Templates Updated</div>
            <div className="trust-badge">📄 Customizable Templates</div>
            <div className="trust-badge">🔒 Secure Cloud Storage</div>
            <div className="trust-badge">📸 Unlimited Uploads</div>
            <div className="trust-badge">📬 Mail Utility Option</div>
          </div>

          <div className="stat-highlight">
            <p className="stat-big">43 Million</p>
            <p className="stat-label">
              renters in the United States.<br />
              <strong>Stay organized with digital record-keeping tools.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about ClaimYourDeposit
          </p>
          <FAQ />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-blue">
        <div className="container">
          <h2 className="section-title">Ready to Get Organized?</h2>
          <p className="section-subtitle">
            Start your 7-day free trial today
          </p>
          <p className="section-subtitle" style={{ marginTop: 0 }}>
            🎁 7 days free, then $45/year per property<br />
            🔒 Secure cloud storage all year<br />
            📄 Customizable document templates when you need them<br />
            📬 1 document mailing included (additional mailings $12 each)
          </p>
          <NewsletterForm variant="hero" />
        </div>
      </section>
    </>
  );
}

