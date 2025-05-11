module.exports = {
  title: "My Single Page Site",
  tagline: "A single-page Docusaurus site",
  url: "https://your-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "your-org", // Usually your GitHub org/user name.
  projectName: "your-project", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false, // Disable the docs plugin since this is a single-page site.
        blog: false, // Disable the blog plugin if not needed.
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false, // Allow users to toggle between dark and light mode
      respectPrefersColorScheme: true, // Use the user's system preference
    },
    navbar: {}, // Disable the navbar by setting it to an empty object
    footer: {}, // Disable the footer
  },
};
