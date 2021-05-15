export default function footer() {
	return (
		<footer className="border-t border-white-darkest border-opacity-10 mt-20 py-5">
			<div className="w-4/5 mx-auto">
				<h1 className="text-xl">
					<span className="font-bold text-white-darkest">@rickydamar</span> says “black lives matter”
				</h1>
				<div className="flex flex-col md:flex-row  md:items-center md:space-x-5 mt-5">
					<a href="http://creativecommons.org/licenses/by-nc-sa/4.0" target="_blank" aria-label="creativecommons licenses">
						<img className="mb-2 md:mb-0" src="https://resir014.xyz/_next/static/images/cc-by-nc-sa-35157979fe2560971c103dd439f23409.svg" alt="" width="90px" />
					</a>
					<p className="text-sm">
						Except where otherwise noted, contents are licensed under{" "}
						<a href="http://creativecommons.org/licenses/by-nc-sa/4.0" target="_blank" className="footer_link">
							CC-BY-NC-SA 4.0
						</a>
						. <br />
						Powered by{" "}
						<a href="https://nextjs.org" target="_blank" className="footer_link">
							Next.js
						</a>{" "}
						and{" "}
						<a href="https://reactjs.org" target="_blank" className="footer_link">
							React
						</a>
						. Code licensed under the{" "}
						<a href="https://reactjs.org" target="_blank" className="footer_link">
							MIT License
						</a>
						.{" "}
						<a href="https://blacklivesmatters.carrd.co" target="_blank" className="footer_link">
							#BLM
						</a>
					</p>
				</div>
				<div className="mt-5">
					<a href="#" className="text-sm text-blue-neo">
						Opt out of Google Analytics tracking.
					</a>
				</div>
			</div>
		</footer>
	);
}
