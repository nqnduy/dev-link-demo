module.exports = {
    host: "https://api.webflow.com",
    rootDir: "./devlink",
    siteId: process.env.WF_SITE_ID,
    authToken: process.env.WF_AUTH, // An environment variable is recommended for this field.
    cssModules: true
  }