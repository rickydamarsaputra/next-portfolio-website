import Link from 'next/link';
import { useRouter } from 'next/router';

export default function header() {
	const router = useRouter();
	const path = router.pathname;

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
							<a className={`font-medium hover:underline ${path == '/about' ? 'underline text-blue-neo' : ''}`}>about</a>
						</Link>
					</li>
					<li>
						<Link href="/posts">
							<a className={`font-medium hover:underline ${path == '/posts' || path == '/posts/[slug]' ? 'underline text-blue-neo' : ''}`}>posts</a>
						</Link>
					</li>
					<li>
						<Link href="/projects">
							<a className={`font-medium hover:underline ${path == '/projects' || path == '/projects/[slug]' ? 'underline text-blue-neo' : ''}`}>projects</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<a className={`font-medium hover:underline ${path == '/contact' ? 'underline text-blue-neo' : ''}`}>contact</a>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
