import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Carousel } from "react-bootstrap";

export default function ChooseWallet({ data }) {
	return (
		<div className="ChooseWallet" id="ChooseWallet">
			<div className="container">
				<h3>Choose Your Wallets</h3>

				<Carousel indicators={false}>
					{data.wallets.map((row, rowId) => (
						<Carousel.Item key={rowId}>
							<div className="ChooseWallet__list">
								{row.map((wallet) =>
									wallet.type === "default" ? (
										<div className="ChooseWallet__wallet" key={wallet._id}>
											<div>
												<Image
													src={wallet.icon}
													alt=""
													width={48}
													height={48}
												/>
												<h4>{wallet.name}</h4>
											</div>

											<p>{wallet.description}</p>

											<span>
												<Image
													src="/images/choose-phone.svg"
													alt=""
													width={24}
													height={24}
												/>
												<Image
													src="/images/chose-desktop.svg"
													alt=""
													width={24}
													height={24}
												/>
												<Image
													src="/images/choose-globe.svg"
													alt=""
													width={24}
													height={24}
												/>
											</span>

											<button className="invert">
												Choose Wallet
												<Image
													src="/images/right-arow-white.svg"
													alt=""
													width={20}
													height={30}
												/>
											</button>
										</div>
									) : (
										<div
											className="ChooseWallet__wallet invert"
											key={wallet._id}
										>
											<div>
												<Image
													src={wallet.icon}
													alt=""
													width={48}
													height={48}
												/>
												<h4>{wallet.name}</h4>
											</div>

											<p>{wallet.description}</p>

											<span>
												<Image
													src="/images/choose-phone-black.svg"
													alt=""
													width={24}
													height={24}
												/>
												<Image
													src="/images/choose-desktop-black.svg"
													alt=""
													width={24}
													height={24}
												/>
												<Image
													src="/images/choose-glove-black.svg"
													alt=""
													width={24}
													height={24}
												/>
											</span>

											<button>
												Choose Wallet
												<Image
													src="/images/right-arow-white.svg"
													alt=""
													width={20}
													height={30}
												/>
											</button>
										</div>
									)
								)}
							</div>
						</Carousel.Item>
					))}
				</Carousel>
			</div>
		</div>
	);
}
