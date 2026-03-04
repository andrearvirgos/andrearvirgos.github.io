import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
	website: 'https://andrearvirgos.github.io',
	avatar: {
		src: avatar,
		alt: 'Andrea R. Virgos'
	},
	title: 'Mi Portfolio',
	subtitle: 'Minimal Astro theme',
	description: 'Astro.js and Tailwind CSS theme for blog and portfolio',
	image: {
		src: '/dante-preview.jpg',
		alt: 'Dante - Astro.js and Tailwind CSS theme'
	},
	headerNavLinks: [
		{
			text: 'Home',
			href: '/'
		},
		{
			text: 'Projects',
			href: '/projects'
		},
		{
			text: 'Blog',
			href: '/blog'
		},
		{
			text: 'Tags',
			href: '/tags'
		}
	],
	footerNavLinks: [
		{
			text: 'About',
			href: '/about'
		},
		{
			text: 'Contact',
			href: '/contact'
		},
		{
			text: 'Terms',
			href: '/terms'
		}
	],
	socialLinks: [
		{
			text: 'GitHub',
			href: 'https://github.com/andrearvirgos'
		}
	],
	hero: {
		title: 'Hola, soy Andrea',
		text: 'Bienvenida a mi portfolio personal creado con Astro.',
		image: hero,
		actions: [
			{
				text: 'Mis Proyectos',
				href: '/projects'
			}
		]
	},
	postsPerPage: 8,
	projectsPerPage: 8
};
