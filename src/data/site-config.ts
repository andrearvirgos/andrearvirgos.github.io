import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
	website: 'https://andrearvirgos.github.io',
	avatar: {
		src: avatar,
		alt: 'Andrea R. Virgos'
	},
	title: 'My Portfolio',
	subtitle: 'Andrea R. Virgos',
	description: 'Portfolio personal creado con Astro y Tailwind CSS',
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
			text: 'Github',
			href: 'https://github.com/andrearvirgos'
		}
	],
	footerNavLinks: [
		{
			text: 'About',
			href: '/about'
		},
		{
			text: 'Contact',
			href: 'andrearvirgos@gmail.com'
		}
	],
	socialLinks: [
		{
			text: 'LinkedIn',
			href: 'https://www.linkedin.com/in/andrearvirgos/'
		}
	],
	hero: {
		title: 'Hi there! Welcome to mi portfolio',
		text: 'Aquí tendría que escribir algo de presentación, distinta a la del linkedin',
		image: hero,
		actions: [
			{
				text: 'Ver Proyectos',
				href: '/projects'
			}
		]
	},
	postsPerPage: 8,
	projectsPerPage: 8
};

export default siteConfig;
