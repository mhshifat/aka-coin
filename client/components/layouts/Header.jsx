import Image from "next/image";

export default function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light" id="header">
			<div className="container">
				<a className="navbar-brand" href="#">
					<Image
						src="/images/header-logo.svg"
						alt="Logo"
						width={142}
						height={32}
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Ecosystem
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Buy
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								What is AKO?
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Learn
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Community
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<Image
									src="/images/header-glove.svg"
									alt="Glove Icon"
									width={24}
									height={24}
								/>
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<a className="dropdown-item" href="#">
										English
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Bangla
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
