import Link from "next/link";
import Head from "next/head";

import SinglePost from "../components/single.post";

import client from "../contentful/client";

export async function getStaticProps() {
	const res = await client.getEntries({
		content_type: "post",
	});

	return {
		props: {
			posts: res.items,
		},
		revalidate: 1,
	};
}

export default function home({ posts }) {
	const dummy = [1, 2, 3, 4, 5];

	return (
		<div className="w-4/5 md:w-1/2 mx-auto mt-10">
			<Head>
				<title>@rickydamar</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="this is my personal website, i created by nextjs and headless cms contentful" />
			</Head>

			{/* hero section */}
			<section>
				<h1 className="text-3xl capitalize font-bold text-blue-neo">ricky damar saputra</h1>
				<h2 className="text-xl mt-2">Web developer based in Surabaya, Indonesia.</h2>
				<p className="mt-10">
					<span className="font-bold text-white">Hey there, I'm Ricky!</span> I'm a self-taught web developer based in Surabaya, Indonesia. I aim to blur the line between high-performance engineering and good design.
				</p>
			</section>
			{/* hero section */}

			{/* articles section */}
			<section className="mt-20">
				<h1 className="text-3xl font-bold">Featured articles</h1>
				<h2 className="text-xl mt-2">Writings about web development, technology, and everything in between.</h2>
				<div className="mt-10">
					{posts.map((post) => (
						<SinglePost key={post.sys.id} post={post} />
					))}
				</div>
				<Link href="/posts">
					<a className="text-xl text-blue-neo hover:underline">View all posts →</a>
				</Link>
			</section>
			{/* articles section */}

			{/* reading section */}
			<section className="mt-20">
				<h1 className="text-3xl font-bold">Reading list</h1>
				<div className="mt-10">
					{dummy.map((item) => (
						<Link href="#" key={item}>
							<a>
								<div className="bookmark_item mb-5">
									<h1 className="text-xl font-semibold text-blue-neo bg-gray-lightent p-2 rounded-tr-md rounded-tl-md">The Part Time Creator Manifesto - @swyx {item} →</h1>
									<h2 className="text-sm bg-gray-dark p-2 rounded-br-md rounded-bl-md">www.swyx.io</h2>
								</div>
							</a>
						</Link>
					))}
				</div>
				<div className="mt-10">
					<Link href="#">
						<a className="text-xl text-blue-neo hover:underline">View all bookmarks →</a>
					</Link>
				</div>
			</section>
			{/* reading section */}

			{/* project section */}
			<section className="mt-20">
				<h1 className="text-3xl font-bold">Featured project</h1>
				<div className="mt-10 rounded-md overflow-hidden">
					<img src="https://resir014.xyz/assets/projects/portfolio/kawalcovid19.id/kawalcovid19-preview.png" alt="" />
					<div className="bg-gradient-to-tr from-blue-dark to-blue-light p-4">
						<span className="text-sm">FEATURED PROJECT</span>
						<h1 className="text-2xl font-semibold text-blue-neo">Kawal COVID-19</h1>
						<p className="mt-2">Information resource regarding the recent outbreak of the coronavirus COVID-19 in Indonesia.</p>
						<ul className="flex space-x-3 mt-4">
							<li>
								<p className="text-sm text-gray-dark bg-gray-light py-1 px-2 rounded-md">design</p>
							</li>
							<li>
								<p className="text-sm text-gray-dark bg-gray-light py-1 px-2 rounded-md">react</p>
							</li>
							<li>
								<p className="text-sm text-gray-dark bg-gray-light py-1 px-2 rounded-md">javascript</p>
							</li>
						</ul>
						<div className="mt-5">
							<Link href="#">
								<a className="text-xl text-blue-neo hover:underline">View project →</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="mt-10">
					<Link href="#">
						<a className="text-xl text-blue-neo hover:underline">View all projects →</a>
					</Link>
				</div>
			</section>
			{/* project section */}
		</div>
	);
}
