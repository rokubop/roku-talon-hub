module.exports = {
  title: "Roku Talon Hub",
  tagline: "Shared Talon voice tools, games, and utilities",
  url: "https://rokubop.github.io", // Your GitHub Pages URL
  baseUrl: "/roku-talon-hub/", // The repository name as the base URL
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "rokubop", // Your GitHub username
  projectName: "roku-talon-hub", // Your repository name

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
