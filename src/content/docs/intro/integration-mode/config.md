---
title: Configuration Options
description: Configuration Options
sidebar:
  order: 3
---

`Astro-GhostCMS` config options in `astro.config.mjs` looks like this:

```ts frame="code" title="astro.config.mjs" wrap
import { defineConfig } from "astro/config";
import astroGhostCMS from '@matthiesenxyz/astro-ghostcms';

// https://astro.build/config
export default defineConfig({
  site: "https://YOUR-DOMAIN-HERE.com"
  integrations: [
    astroGhostCMS({
      // Config Options
      ghostURL: "http://example.com", // Recommended to set here, Can also set in .env as CONTENT_API_URL
      ThemeProvider: { // Allows you to pass config options to our ThemeProvider if enabled.
        disableThemeProvider: false, // OPTIONAL - Default False
        theme: "@matthiesenxyz/astro-ghostcms-theme-default", // OPTIONAL - Default Theme shown.
      };
      disableDefault404: false, // Allows the user to disable the default `/404 page, to be able to create their own under `/src/pages/404.astro`.
      enableRSSFeed: true, // Allows the user to Enable or disable RSS Feed Generation. Default: true
      enableOGImages: true, // Allows the user to Enable or disable OG Image Generation. Default: true
      verbose: false, // Show the full Log output from All parts of Astro-GhostCMS
      Integrations: {
        // This allows user config passthrough from Astro-GhostCMS to the Included Integrations
        robotsTxt: {
          // OPTIONAL
          // ADVANCED USAGE - https://www.npmjs.com/package/astro-robots-txt#configuration
        }, 
        sitemap: {
          // OPTIONAL
          // ADVANCED USAGE - https://docs.astro.build/en/guides/integrations-guide/sitemap
        },
      },
    })
  ],
});
```