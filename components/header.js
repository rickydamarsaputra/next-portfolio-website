import Link from "next/link";

export default function header() {
	return (
		<header className="border-b border-white-darkest border-opacity-10 py-4">
			<div className="w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
				<div>
					<Link href="/">
						<a className="font-semibold">@rickydamar</a>
					</Link>
				</div>
				<ul className="flex space-x-5">
					<li>
						<Link href="/about">
							<a className="font-medium hover:underline">about</a>
						</Link>
					</li>
					<li>
						<Link href="/posts">
							<a className="font-medium hover:underline">posts</a>
						</Link>
					</li>
					<li>
						<Link href="/projects">
							<a className="font-medium hover:underline">projects</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<a className="font-medium hover:underline">contact</a>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
