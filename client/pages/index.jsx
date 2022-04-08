import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import ChooseWallet from "../components/home/ChooseWallet";
import HomeHero from "../components/home/Hero";
import QuickStart from "../components/home/QuickStart";
import Stats from "../components/home/Stats";
import WhatIs from "../components/home/WhatIs";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";

const GET_PAGES_URL = process.env.NEXT_PUBLIC_API_URI + "/api/pages";
const getPages = async () => {
	const {
		data: { data },
	} = await axios({
		method: "GET",
		url: GET_PAGES_URL,
	});
	return data;
};
export default function Home() {
	const [pages, setPages] = useState(null);

	useEffect(() => {
		getPages().then((data) => {
			setPages({
				...data,
				wallets: data.wallets.reduce((acc, val, ind, mainArray) => {
					while (mainArray.length) {
						acc.push(mainArray.splice(0, 3));
					}
					return acc;
				}, []),
			});
		});
	}, []);

	if (!pages) return null;
	return (
		<div>
			<Head>
				<title>Aka COIN - Landing page</title>
				<meta name="description" content="aka coin landing page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<HomeHero data={pages} />
			<WhatIs />
			<ChooseWallet data={pages} />
			<QuickStart />
			<Stats />
			<Footer />
		</div>
	);
}

