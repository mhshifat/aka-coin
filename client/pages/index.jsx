import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import ChooseWallet from "../components/home/ChooseWallet";
import HomeHero from "../components/home/Hero";
import QuickStart from "../components/home/QuickStart";
import Stats from "../components/home/Stats";
import WhatIs from "../components/home/WhatIs";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";

export default function Home({ data }) {
	return (
		<div>
			<Head>
				<title>Aka COIN - Landing page</title>
				<meta name="description" content="aka coin landing page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<HomeHero data={data} />
			<WhatIs />
			<ChooseWallet data={data} />
			<QuickStart />
			<Stats />
			<Footer />
		</div>
	);
}

const GET_PAGES_URL = process.env.NEXT_PUBLIC_API_URI + "/api/pages";
export async function getServerSideProps(context) {
	const {
		data: { data },
	} = await axios({
		method: "GET",
		url: GET_PAGES_URL,
	});

	return {
		props: {
			data: {
				...data,
				wallets: data.wallets.reduce((acc, val, ind, mainArray) => {
					while (mainArray.length) {
						acc.push(mainArray.splice(0, 3));
					}
					return acc;
				}, []),
			},
		},
	};
}
