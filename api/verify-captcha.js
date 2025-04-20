// Import the Google Cloud reCAPTCHA Enterprise client
import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';

// Serverless API route handler
export default async function handler(req, res) {
  // Only allow POST requests (reject GET, PUT, etc.)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Extract reCAPTCHA token sent from the frontend
  const { token } = req.body;

  // Initialize the reCAPTCHA Enterprise client
  const client = new RecaptchaEnterpriseServiceClient();

  // Load environment variables for your GCP project and site key
  const projectID = process.env.RECAPTCHA_PROJECT_ID;
  const recaptchaKey = process.env.RECAPTCHA_SITE_KEY; // Public site key registered on reCAPTCHA Enterprise
  const recaptchaAction = "contact_form"; // Must match the action sent from the frontend

  // Call Google Cloud's reCAPTCHA Enterprise API to verify the token
  const [assessment] = await client.createAssessment({
    assessment: {
      event: {
        token,          // The token received from frontend's grecaptcha.execute()
        siteKey: recaptchaKey, // Your registered site key
      },
    },
    parent: client.projectPath(projectID), // Format: projects/your-project-id
  });

  // If the token is invalid (e.g., expired or forged), return 400 with a message
  if (!assessment.tokenProperties.valid) {
    return res.status(400).json({ error: 'Invalid token' });
  }

  // Ensure the action from the frontend matches the expected action
  if (assessment.tokenProperties.action !== recaptchaAction) {
    return res.status(400).json({ error: 'Action mismatch' });
  }

  // If everything passes, return the reCAPTCHA risk score (0.0 = likely bot, 1.0 = likely human)
  const score = assessment.riskAnalysis.score;
  return res.status(200).json({ score });
}
