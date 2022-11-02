import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Contact />
		</div>
	);
}
