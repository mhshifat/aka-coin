import Image from "next/image";

export default function HomeHero() {
	return (
		<div className="homeHero" id="homeHero">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-sm-12">
						<h5>
							Introducing <span>AKA</span>
							<span>COIN</span>
						</h5>
						<h1>Living Ecosystem Decentralized Token</h1>
						<p>
							Akacoin is a open source peer-to-peer digital
							currency,community-run technology that supports cryptocurrencies
							and thousands of decentralized applications.
						</p>

						<div className="homeHero__btnGroups">
							<button>Get Started</button>
							<button>
								<Image
									src="/images/hero-github.svg"
									alt="Github Icon"
									width={28}
									height={28}
								/>{" "}
								Source
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
