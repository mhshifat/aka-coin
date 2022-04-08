/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function QuickStart() {
	return (
		<div className="QuickStart" id="QuickStart">
			<div className="container">
				<h3>Quick Start Guide</h3>

				<div className="QuickStart__grid">
					<div className="QuickStart__grid--item">
						<div className="row">
							<div className="col-md-4">
								<Image
									src="/images/start-guide-1.svg"
									alt=""
									width={160}
									height={160}
								/>
							</div>
							<div className="col-md-8">
								<h4>1. Create a wallet</h4>
								<p>
									Create a Wallet using either a desktop computer or an mobile
									device
								</p>
							</div>
						</div>
					</div>

					<div className="QuickStart__grid--item">
						<div className="row">
							<div className="col-md-4">
								<Image
									src="/images/start-guide-2.svg"
									alt=""
									width={160}
									height={160}
								/>
							</div>
							<div className="col-md-8">
								<h4>2. Buy ETH</h4>
								<p>
									You can buy Ethereum (ETH) directly on MetaMask or transfer it
								</p>
							</div>
						</div>
					</div>

					<div className="QuickStart__grid--item">
						<div className="row">
							<div className="col-md-4">
								<Image
									src="/images/start-guide-3.svg"
									alt=""
									width={160}
									height={160}
								/>
							</div>
							<div className="col-md-8">
								<h4>3. Connect your wallet</h4>
								<p>
									Access your wallet to AoaSwap by clicking ‘Connect to a
									wallet’
								</p>
							</div>
						</div>
					</div>

					<div className="QuickStart__grid--item">
						<div className="row">
							<div className="col-md-4">
								<Image
									src="/images/start-guide-4.svg"
									alt=""
									width={160}
									height={160}
								/>
							</div>
							<div className="col-md-8">
								<h4>4. Swap ETH to AKO</h4>
								<p>
									You can start swapping as you have ETH available! Press
									‘Select a token’
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="ChooseWallet__list">
					<div className="ChooseWallet__wallet">
						<h4>Akacoin Community</h4>

						<p>
							There's something for everybody. Follow along, chat on Discord, or
							read up on what we’re doing.
						</p>

						<button>Learn More</button>
					</div>

					<div className="ChooseWallet__wallet invert">
						<h4
							style={{
								color: "#0E133A",
							}}
						>
							Become a Validator
						</h4>

						<p>
							Help secure the network by running decentralized infrastructure.
							Learn about operating a validator node.
						</p>

						<button>Learn More</button>
					</div>

					<div className="ChooseWallet__wallet">
						<h4>Dev. Resource</h4>

						<p>
							See the get started guide, videos, tutorials, SDKs, reference
							implementations, and more.
						</p>

						<Image
							src="/images/replace-image.svg"
							alt=""
							width={350}
							height={118}
						/>

						<button className="invert">Start Building</button>
					</div>
				</div>
			</div>
		</div>
	);
}
