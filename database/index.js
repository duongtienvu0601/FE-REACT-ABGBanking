const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(
  "YOUR_CLIENT_ID.apps.googleusercontent.com"
);

// handle POST requests to /api/login
app.post("/api/login", async (req, res) => {
  const { idToken } = req.body;

  try {
    // Verify the ID token and get the user information
    const ticket = await client.verifyIdToken({
      idToken,
      audience:
        "YOUR_CLIENT_ID.apps.googleusercontent.com",
    });

    const payload = ticket.getPayload();
    const userid = payload["sub"];

    // If request specified a G Suite domain:
    // const domain = payload['hd'];

    // TODO: Check if user is already in your database
    // If not, add the user to your database

    // Send response to ReactJS
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});