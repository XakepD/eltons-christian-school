const ngrok = require("@ngrok/ngrok")

;(async function () {
  try {
    const url = await ngrok.connect({
      addr: 5174, // Port your local server is running on
      authtoken: "2STz40J28ydyZ1CTgGbWZIQX5tu_5MR2Wp5mzt9on7tcBKa3f", // Your ngrok authtoken
      // Use ngrok authtoken from environment variable
      // other options can be added here, for example:
      // subdomain: 'your-subdomain',
      // basic_auth: 'user:password'
    })

    console.log(`ngrok tunnel active at: ${url}`)
  } catch (error) {
    console.error("Error starting ngrok:", error)
  }
})()
