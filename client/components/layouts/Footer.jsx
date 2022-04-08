import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="Footer" id="Footer">
			<div className="container">
				<div className="Footer__header">
					<div className="Footer__left">
						<Image
							src="/images/footer-logo.svg"
							alt=""
							width={189}
							height={38}
						/>

						<p>Living Ecosystem Decentralized Token</p>

						<span>
							<Image
								src="/images/footer-github.svg"
								alt=""
								width={40}
								height={40}
							/>
							<Image
								src="/images/footer-discord.svg"
								alt=""
								width={40}
								height={40}
							/>
							<Image
								src="/images/footer-facebook.svg"
								alt=""
								width={40}
								height={40}
							/>
							<Image
								src="/images/footer-instagram.svg"
								alt=""
								width={40}
								height={40}
							/>
						</span>
					</div>

					<div className="Footer__right">
						<ul>
							<li>Pages</li>
							<li>
								<Link href="/">Network Statistic</Link>
							</li>
							<li>
								<Link href="/">What is AkaCoin</Link>
							</li>
							<li>
								<Link href="/">Wallets</Link>
							</li>
							<li>
								<Link href="/">Quick Start Guide</Link>
							</li>
						</ul>
						<ul>
							<li>Learn</li>
							<li>
								<Link href="/">Blog</Link>
							</li>
							<li>
								<Link href="/">Video</Link>
							</li>
							<li>
								<Link href="/">Podcast</Link>
							</li>
							<li>
								<Link href="/">Network states</Link>
							</li>
						</ul>
						<ul>
							<li>Support</li>
							<li>
								<Link href="/">Custommer Service</Link>
							</li>
							<li>
								<Link href="/">FAQ</Link>
							</li>
							<li>
								<Link href="/">Community</Link>
							</li>
						</ul>
						<ul>
							<li>About AKA.Coin</li>
							<li>
								<Link href="/">About us</Link>
							</li>
							<li>
								<Link href="/">Privacy policy</Link>
							</li>
							<li>
								<Link href="/">Term of use</Link>
							</li>
							<li>
								<Link href="/">Quick start guide</Link>
							</li>
							<li>
								<Link href="/">Language support</Link>
							</li>
							<li>
								<Link href="/">Cookie policy</Link>
							</li>
						</ul>
					</div>
				</div>

				<p className="Footer__copy">©2022 AKA.COIN. All right reserved</p>
			</div>
		</div>
	);
}
