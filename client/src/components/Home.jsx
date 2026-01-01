import NewsletterForm from "./NewsletterForm.jsx";
import FAQ from "./FAQ.jsx";

export default function Home() {
  return (
    <>
      {/* Hero Section - Above the Fold */}
      <section className="hero">
        <div className="hero-content">
          <h1>Get Your Deposit Back — With Proof.</h1>
          <p className="subheadline">
            Document your rental from Day 1. Upload photos, track repairs, and store timestamped evidence.
            When you move out, generate a state-specific demand letter backed by your proof.
            Your landlord has lawyers — now you have documentation.
          </p>
          <NewsletterForm />
          <p className="micro-copy">
            Stop losing deposits. Start documenting.
          </p>
        </div>
      </section>

      {/* Pain Section - Agitation */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Most Renters Lose Their Deposit</h2>

          <ul className="pain-list">
            <li className="pain-item">No evidence from move-in? Landlord wins by default.</li>
            <li className="pain-item">Lost your photos? No case. No proof. No refund.</li>
            <li className="pain-item">Waited until move-out to document? Too late.</li>
          </ul>
        </div>
      </section>

      {/* Documentation Platform Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Your Year-Round Documentation Platform</h2>
          <p className="section-subtitle">
            Build your case from the moment you move in — not after it's too late
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
                  <span className="ai-label-detail">By room, date, issue type</span>
                </div>
              </div>
            </div>

            <div className="ai-arrow">→</div>

            <div className="ai-panel">
              <div className="ai-panel-header">⚖️ Move-Out Letter</div>
              <div className="ai-panel-content">
                <div className="ai-letter">
                  <p className="ai-letter-line">"Dear [Landlord Name],</p>
                  <p className="ai-letter-line highlighted">
                    Per [State] law, the following deductions are improper.
                    <strong>Evidence attached.</strong>
                  </p>
                  <p className="ai-letter-line">I request full deposit return within 14 days..."</p>
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
            Document. Compare. Dispute. Win.
          </p>

          <div className="steps-grid">
            <div className="step-card">
              <span className="step-number">1</span>
              <span className="step-icon">📸</span>
              <h3>Move-In Documentation</h3>
              <p>Upload photos, videos, and notes on Day 1. Every room. Every issue. Timestamped and secure.</p>
            </div>

            <div className="step-card">
              <span className="step-number">2</span>
              <span className="step-icon">🛠️</span>
              <h3>Track Throughout the Year</h3>
              <p>Document repairs, maintenance requests, and new issues as they happen. Build your timeline.</p>
            </div>

            <div className="step-card">
              <span className="step-number">3</span>
              <span className="step-icon">⚖️</span>
              <h3>Generate Demand Letter</h3>
              <p>When you move out, create a state-specific demand letter with all your evidence attached.</p>
            </div>

            <div className="step-card">
              <span className="step-number">4</span>
              <span className="step-icon">📬</span>
              <h3>Send with Tracking</h3>
              <p>Optional certified mail service. We send it, you get the tracking number. Official and documented.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Subscription Pricing */}
      <section className="section section-blue" id="pricing">
        <div className="container">
          <h2 className="section-title">Protect Your Future Deposit with Today's Evidence</h2>
          <p className="section-subtitle">
            One subscription covers ONE home for a FULL year
          </p>

          <div className="pricing-card">
            <p className="pricing-badge">📋 Year-Round Protection</p>
            <div className="price">
              <span className="price-main">$40</span>
              <span className="price-period">/year</span>
            </div>
            <p className="pricing-detail">Per rental property</p>

            <ul className="pricing-features">
              <li>📸 Move-in documentation</li>
              <li>🛠️ Repairs & issue tracking</li>
              <li>📝 Evidence timeline storage</li>
              <li>⚖️ State-law demand letters</li>
              <li>📬 Optional certified mail</li>
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
          <h2 className="section-title">Built for Renters. Backed by Law.</h2>
          <p className="section-subtitle">
            State-specific legal citations for 2025
          </p>

          <div className="trust-badges">
            <div className="trust-badge">🇺🇸 50 States Covered</div>
            <div className="trust-badge">📊 2025 Laws Updated</div>
            <div className="trust-badge">⚖️ Legal-Grade Citations</div>
            <div className="trust-badge">🔒 Secure Cloud Storage</div>
            <div className="trust-badge">📸 Unlimited Uploads</div>
            <div className="trust-badge">📬 Certified Mail Option</div>
          </div>

          <div className="stat-highlight">
            <p className="stat-big">$4.2 Billion</p>
            <p className="stat-label">
              kept by landlords in 2024.<br />
              <strong>Most renters lose because they have no proof.</strong>
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
          <h2 className="section-title">Ready to Protect Your Deposit?</h2>
          <p className="section-subtitle">
            Join renters who document from Day 1
          </p>
          <p className="section-subtitle" style={{ marginTop: 0 }}>
            📋 $40/year per property<br />
            🔒 Secure documentation all year<br />
            ⚖️ State-specific demand letters when you need them
          </p>
          <NewsletterForm variant="hero" />
        </div>
      </section>
    </>
  );
}

