export default function footer() {
	return (
		<footer className="border-t border-white-darkest border-opacity-10 mt-20 py-5">
			<div className="w-4/5 mx-auto">
				<h1 className="text-xl">
					<span className="font-bold text-white-darkest">@rickydamar</span> says “black lives matter”
				</h1>
				<div className="flex flex-col md:flex-row  md:items-center md:space-x-5 mt-5">
					<p className="text-sm">
						Supported by{' '}
						<a href="https://nextjs.org" rel="noreferrer" target="_blank" className="footer_link">
							Next.js
						</a>{' '}
						and{' '}
						<a href="https://reactjs.org" rel="noreferrer" target="_blank" className="footer_link">
							React
						</a>
						. Code licensed under the License{' '}
						<a href="https://github.com/rickydamarsaputra/next-portfolio-website" rel="noreferrer" target="_blank" className="footer_link">
							MIT License
						</a>
						.{' '}
						<a href="https://blacklivesmatters.carrd.co" rel="noreferrer" target="_blank" className="footer_link">
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
