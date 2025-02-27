import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import houston from './src/styles/houston.json'

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-ghostcms.xyz',
	integrations: [
		starlight({
			title: 'Astro-GhostCMS',
			description: 'Easily migrate your Ghost Site to Astro, an Astro Integration & API that turns your Ghost server into a Headless CMS',
			logo: {
				src: './src/assets/spaceghost.png',
				alt: "Spaceghost"
			},
			editLink: { baseUrl: 'https://github.com/MatthiesenXYZ/astro-ghostcms-dot-xyz/edit/main/' },
			lastUpdated: true,
			favicon: 'spaceghost.png',
			customCss: [ './src/styles/tailwind.css' ],
			components: {
				SiteTitle: './src/components/starlight/SiteTitle.astro',
				ThemeSelect: './src/components/starlight/ThemeSelect.astro',
				Head: './src/components/starlight/Head.astro'
			},
			expressiveCode: { themes: [houston] },
			plugins: [starlightBlog({
				authors: {
					adam: {
						name: 'Adam Matthiesen',
						title: 'Core Maintainer',
						picture: './authors/adam.jpg',
						url: 'https://github.com/AdamMatthiesen',
					},
				},
			})],
			social: {
				discord: 'https://discord.gg/u7NZqUyeAR',
				github: 'https://github.com/MatthiesenXYZ/astro-ghostcms',
				gitlab: 'https://gitlab.com/matthiesenxyz/astro-ghostcms',
			},
			sidebar: [ { 
				label: 'Introduction', items: [
					{ label: 'Getting Started', link: '/intro' },
					{ label: 'Main Integration', autogenerate: { directory: '/intro/integration-mode' }, },
					{ label: 'Starlight Plugin', badge: { text: 'NEW', variant: 'success' }, autogenerate: { directory: '/intro/starlight' } },
					],
				}, {
				label: 'Advanced Usage', badge: { text: 'Coming Soon', variant: 'caution' }, autogenerate: { directory: '/advanced' },
				}, {
				label: 'Themes', items: [
					{ label: 'Default Theme', collapsed: true, autogenerate: { directory: '/themes/default' }, },
					{ label: 'Catppuccin', collapsed: true, autogenerate: { directory: '/themes/catppuccin' }, },
					{ label: 'Brutal by Elian',	collapsed: true, autogenerate: {	directory: '/themes/brutal'	}, },
					],
				}, {
				label: 'Tools & Extras',
				items: [
					{ label: 'Ghost Render Util', collapsed: true, autogenerate: { directory: '/tools/contentrender' } },
					],
				}, { 
				label: 'Changelogs', autogenerate: { directory: '/changelogs' },
				},
			],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
		robotsTxt(),
	],
});
