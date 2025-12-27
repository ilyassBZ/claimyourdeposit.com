import NewsletterForm from "./components/NewsletterForm.jsx";
import FAQ from "./components/FAQ.jsx";

export default function App() {
  return (
    <div className="app">
      {/* Hero Section - Above the Fold */}
      <section className="hero">
        <div className="hero-content">
          <h1>Get Your Security Deposit Back. Every. Single. Cent.</h1>
          <p className="subheadline">
            Stop letting landlords "steal" your money for normal wear and tear. Our AI audits your move-out photos, 
            cites your local laws, and generates a legal demand letter that landlords can't ignore.
          </p>
          <NewsletterForm />
          <p className="micro-copy">
            Join 1,240+ renters waiting to fire their landlords.
          </p>
        </div>
      </section>

      {/* Pain Section - Agitation */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">You're Not Alone in This Fight</h2>
          
          <ul className="pain-list">
            <li className="pain-item">Tired of $500 "cleaning fees" for a spotless apartment?</li>
            <li className="pain-item">Sick of being told a tiny scuff is "damage"?</li>
            <li className="pain-item">Don't have $3,000 for a lawyer? We've got you.</li>
          </ul>
        </div>
      </section>

      {/* AI Logic Section - The "Magic" Visual */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">AI-Powered Justice</h2>
          <p className="section-subtitle">
            Our engine identifies illegal deductions and builds your defense
          </p>
          
          <div className="ai-visual">
            <div className="ai-panel">
              <div className="ai-panel-header">📸 Your Photo</div>
              <div className="ai-panel-content">
                <div className="ai-image-placeholder">
                  🖼️ Small carpet stain
                </div>
                <div className="ai-label success">
                  ✅ Normal Wear & Tear<br/>
                  <span className="ai-label-detail">Section 1950.5 Compliance</span>
                </div>
              </div>
            </div>
            
            <div className="ai-arrow">→</div>
            
            <div className="ai-panel">
              <div className="ai-panel-header">⚖️ Generated Letter</div>
              <div className="ai-panel-content">
                <div className="ai-letter">
                  <p className="ai-letter-line">"Dear [Landlord Name],</p>
                  <p className="ai-letter-line highlighted">
                    Failure to return funds within 14 days will result in 
                    <strong> Treble Damages ($3,600 owed)</strong>
                  </p>
                  <p className="ai-letter-line">Per CA Civil Code §1950.5..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - The 3-Step Process */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Three simple steps to get your money back
          </p>
          
          <div className="steps-grid">
            <div className="step-card">
              <span className="step-number">1</span>
              <span className="step-icon">📱</span>
              <h3>Snap & Upload</h3>
              <p>Upload your move-in and move-out photos. Our AI compares them instantly.</p>
            </div>

            <div className="step-card">
              <span className="step-number">2</span>
              <span className="step-icon">🤖</span>
              <h3>AI Audit</h3>
              <p>Our engine identifies illegal deductions based on your Zip Code's laws.</p>
            </div>

            <div className="step-card">
              <span className="step-number">3</span>
              <span className="step-icon">📨</span>
              <h3>The Demand</h3>
              <p>Download a "Nuclear" demand letter to send via Certified Mail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Waitlist Hook - The Incentive */}
      <section className="section section-blue">
        <div className="container">
          <h2 className="section-title">Join the Defense List</h2>
          <p className="section-subtitle">
            Early Access Pricing
          </p>
          
          <div className="pricing-card">
            <p className="pricing-badge">🎯 Founding Members Only</p>
            <div className="price">
              <span className="price-main">$9</span>
              <span className="price-regular">Regularly $29</span>
            </div>
            <p className="pricing-detail">Get your first Defense Kit</p>
            
            <ul className="pricing-features">
              <li>AI Photo Analysis</li>
              <li>State-Specific Legal Citations</li>
              <li>Professional Demand Letter</li>
              <li>Certified Mail Instructions</li>
            </ul>
            
            <p className="pricing-urgency">⚡ Only 500 spots available</p>
          </div>
          
          <div className="referral-box">
            <h3>🚀 Spread the Word!</h3>
            <p>
              Know someone fighting for their deposit? Share ClaimYourDeposit with friends and help 
              renters everywhere get back what's rightfully theirs.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">State-Aware Protection</h2>
          <p className="section-subtitle">
            Database updated for 2025 State Laws
          </p>
          
          <div className="trust-badges">
            <div className="trust-badge">🇺🇸 50 States Covered</div>
            <div className="trust-badge">📊 2025 Laws Updated</div>
            <div className="trust-badge">⚖️ Legal-Grade Citations</div>
            <div className="trust-badge">🔒 Secure & Private</div>
          </div>
          
          <div className="stat-highlight">
            <p className="stat-big">$4.2 Billion</p>
            <p className="stat-label">
              kept by landlords in 2024.<br/>
              <strong>We're here to take it back.</strong>
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
          <h2 className="section-title">Ready to Fight Back?</h2>
          <p className="section-subtitle">
            Join the waitlist and be part of the renter revolution.
          </p>
          <p className="section-subtitle" style={{ marginTop: 0 }}>
            🎁 Founding member pricing: $9 (Save $20)<br/>
            🚀 Early access to all features<br/>
            👥 Priority support & updates
          </p>
          <NewsletterForm variant="hero" />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        background: 'var(--red-900)', 
        color: 'var(--white)', 
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div className="container">
          <p style={{ marginBottom: '8px', fontSize: '1.25rem', fontWeight: '600' }}>
            ClaimYourDeposit.com
          </p>
          <p style={{ color: 'var(--red-200)', fontSize: '0.875rem' }}>
            © 2025 ClaimYourDeposit. All rights reserved.<br/>
            Get Your Security Deposit Back. Every. Single. Cent.
          </p>
        </div>
      </footer>
    </div>
  );
}

