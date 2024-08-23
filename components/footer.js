export default function footer() {
	return (
		<footer className="border-t border-white-darkest border-opacity-10 mt-20 py-5">
			<div className="w-4/5 mx-auto">
				<div className="flex flex-col md:flex-row  md:items-center md:space-x-5 mt-5">
					<p className="text-sm">
						Supported by{' '}
						<a href="https://nextjs.org" rel="noreferrer" target="_blank" className="footer_link">
							Next.js
						</a>{' '}
						and{' '}
						<a href="https://tailwindcss.com" rel="noreferrer" target="_blank" className="footer_link">
							TailwindCSS
						</a>
						. Code licensed under the License{' '}
						<a href="https://github.com/rickydamarsaputra/next-portfolio-website" rel="noreferrer" target="_blank" className="footer_link">
							MIT License
						</a>
					</p>
				</div>
				<div className="mt-5">
					<p className="text-sm">
						Copyright © <span className="text-blue-neo">{new Date().getFullYear()}</span> by @rickydamar
					</p>
				</div>
			</div>
		</footer>
	);
}
