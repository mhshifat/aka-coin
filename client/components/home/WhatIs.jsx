import Image from "next/image";
import Link from "next/link";

export default function WhatIs() {
	return (
		<div className="WhatIs" id="WhatIs">
			<div className="container">
				<h3>What Is Akacoin?</h3>

				<div className="row">
					<div className="col-md-5">
						<h3>The fastest growing and community friendly</h3>
					</div>
					<div className="col-md-7">
						<p>
							Akacoin is the fastest blockchain in the world and the fastest
							growing ecosystem in crypto, with thousands of projects spanning
							DeFi, NFTs, Web3 and more.
						</p>
						<Link href="/">
							<a>
								Explore Ecosystem{" "}
								<Image
									src="/images/right-arrow.svg"
									alt="Right Arrow Icon"
									width={20}
									height={10}
								/>
							</a>
						</Link>
					</div>
				</div>

				<div className="WhatIs__imageRow">
					<div className="WhatIs__imageRow--left">
						<Image
							src="/images/explore-left.svg"
							width={400}
							height={400}
							alt=""
						/>
					</div>
					<div className="WhatIs__imageRow--right">
						<div>
							<div>
								<span>
									<small>Learn Akacoin</small>
									<p>Watch Video</p>
								</span>
								<Image
									src="/images/explore-play.svg"
									alt=""
									width={27}
									height={27}
								/>
							</div>

							<span>
								<Image
									src="/images/explore-play.svg"
									alt=""
									width={27}
									height={27}
								/>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
