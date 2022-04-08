import Image from "next/image";

export default function HomeHero({ data }) {
	return (
		<div className="homeHero" id="homeHero">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-sm-12">
						<h5>
							{data?.pre_title} <span>{data?.pre_title_blue}</span>
							<span>{data?.pre_title_yellow}</span>
						</h5>
						<h1>{data?.title}</h1>
						<p>{data?.description}</p>

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
