import Head from "next/head";
import Image from "next/image";
import ChooseWallet from "../components/home/ChooseWallet";
import HomeHero from "../components/home/Hero";
import QuickStart from "../components/home/QuickStart";
import Stats from "../components/home/Stats";
import WhatIs from "../components/home/WhatIs";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Aka COIN - Landing page</title>
				<meta name="description" content="aka coin landing page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<HomeHero />
			<WhatIs />
			<ChooseWallet />
			<QuickStart />
			<Stats />
			<Footer />
		</div>
	);
}
