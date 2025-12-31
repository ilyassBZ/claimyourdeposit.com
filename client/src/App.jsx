import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import TermsAndConditions from "./components/TermsAndConditions.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

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
            <p style={{ color: 'var(--red-200)', fontSize: '0.875rem', marginBottom: '12px' }}>
              © 2025 ClaimYourDeposit. All rights reserved.<br/>
              Get Your Security Deposit Back. Every. Single. Cent.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '16px', 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link 
                to="/terms-and-conditions" 
                style={{ 
                  color: 'var(--red-200)', 
                  textDecoration: 'none',
                  fontSize: '0.875rem'
                }}
              >
                Terms and Conditions
              </Link>
              <span style={{ color: 'var(--red-400)' }}>•</span>
              <Link 
                to="/privacy-policy" 
                style={{ 
                  color: 'var(--red-200)', 
                  textDecoration: 'none',
                  fontSize: '0.875rem'
                }}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

