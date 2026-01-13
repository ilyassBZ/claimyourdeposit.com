export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Privacy Policy</h1>
        <p className="legal-updated"><em>Last updated: January 13, 2026</em></p>

        <div className="legal-content">
          <p>
            This Privacy Policy describes how <strong>ClaimYourDeposit</strong> ("we", "our", "us") collects, stores, and protects your personal data when you use our website and services at <strong>claimyourdeposit.com</strong> ("the Service").
          </p>
          <p>
            By using the Service, you agree to the practices described in this Privacy Policy.
          </p>

          <hr />

          <h2>1. Information We Collect</h2>
          <p>We may collect the following data:</p>

          <h3>1.1. Account Information</h3>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Authentication ID (from Google/Apple/Firebase login)</li>
          </ul>
          <p>
            We <strong>do not</strong> store plain-text passwords. Authentication is handled by secure providers.
          </p>

          <h3>1.2. Uploaded Content</h3>
          <p>Data you upload to organize your rental records:</p>
          <ul>
            <li>Images & videos</li>
            <li>Screenshots</li>
            <li>Notes and descriptions</li>
            <li>Generated documents from templates</li>
          </ul>
          <p>This information is stored for your personal use inside the platform.</p>

          <h3>1.3. Payment Information</h3>
          <p>
            Payments are processed by <strong>Paddle</strong>.<br />
            We do <strong>not</strong> store card or bank details.
          </p>
          <p>Paddle's privacy policy applies to payment data.</p>

          <h3>1.4. Usage Data</h3>
          <p>For security and performance:</p>
          <ul>
            <li>IP address</li>
            <li>Device type, browser</li>
            <li>Date & time of access</li>
            <li>Cookies for login/session management</li>
          </ul>

          <hr />

          <h2>2. How We Use Your Data</h2>
          <p>We use your data to:</p>
          <ul>
            <li>Create and manage your account</li>
            <li>Provide features like document storage and template generation</li>
            <li>Improve platform functionality</li>
            <li>Send important account or billing emails</li>
            <li>Prevent fraud, abuse, and policy violations</li>
          </ul>
          <p>
            We <strong>do not sell or rent your data</strong> to third parties.
          </p>

          <hr />

          <h2>3. Legal Basis for Data Processing</h2>
          <p>Under GDPR and similar laws, we process data based on:</p>
          
          <table className="legal-table">
            <thead>
              <tr>
                <th>Legal Basis</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contract</td>
                <td>To provide the service you registered for</td>
              </tr>
              <tr>
                <td>Consent</td>
                <td>When you choose to receive notifications</td>
              </tr>
              <tr>
                <td>Legitimate Interest</td>
                <td>To maintain security and improve performance</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>4. Data Storage & Security</h2>
          <p>
            We use secure cloud services (e.g. Cloudflare R2 / Backblaze / AWS or equivalent) to store files.
          </p>
          <p>We protect your data with:</p>
          <ul>
            <li>Encrypted connections (HTTPS/TLS)</li>
            <li>Restricted internal access</li>
            <li>Secure authentication</li>
            <li>Regular monitoring</li>
          </ul>
          <p>
            No system is 100% secure, but we take commercially reasonable steps to protect your data.
          </p>

          <hr />

          <h2>5. Your Rights</h2>
          <p>You may request at any time:</p>
          <ul className="rights-list">
            <li>✔️ Copy of your data</li>
            <li>✔️ Correction of inaccurate data</li>
            <li>✔️ Permanent account deletion</li>
            <li>✔️ Removal of uploaded files</li>
          </ul>
          <p>
            Contact: <a href="mailto:support@claimyourdeposit.com"><strong>support@claimyourdeposit.com</strong></a>
          </p>

          <hr />

          <h2>6. Third-Party Services</h2>
          <p>We use trusted third parties:</p>

          <table className="legal-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Firebase / Auth Provider</td>
                <td>Authentication</td>
              </tr>
              <tr>
                <td>Paddle</td>
                <td>Payments & billing</td>
              </tr>
              <tr>
                <td>Cloud Storage (S3/R2/B2)</td>
                <td>File storage</td>
              </tr>
              <tr>
                <td>Email Provider (e.g. Zoho / Mailgun)</td>
                <td>Notifications & support emails</td>
              </tr>
            </tbody>
          </table>

          <p>These services process data according to their policies.</p>

          <hr />

          <h2>7. Cookies</h2>
          <p>We use cookies for:</p>
          <ul>
            <li>Login and sessions</li>
            <li>Preferences (language, theme)</li>
            <li>Basic analytics (non-identifying)</li>
          </ul>
          <p>
            You can disable cookies in your browser, but the Service may not function correctly.
          </p>

          <hr />

          <h2>8. Children's Privacy</h2>
          <p>
            This service is not intended for users under <strong>18 years old</strong>.<br />
            We do not knowingly collect data from minors.
          </p>

          <hr />

          <h2>9. Changes to This Policy</h2>
          <p>We may update this policy to reflect:</p>
          <ul>
            <li>New features</li>
            <li>Legal requirements</li>
            <li>Service improvements</li>
          </ul>
          <p>We will notify users if significant changes are made.</p>

          <hr />

          <h2>10. Contact</h2>
          <p>If you have any questions about this Privacy Policy:</p>
          <p>
            📧 <a href="mailto:support@claimyourdeposit.com"><strong>support@claimyourdeposit.com</strong></a><br />
            🌐 <a href="https://claimyourdeposit.com"><strong>https://claimyourdeposit.com</strong></a>
          </p>
        </div>
      </div>
    </div>
  );
}





