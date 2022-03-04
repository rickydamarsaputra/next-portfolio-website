import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import SinglePost from '../components/single.post';

import client from '../contentful/client';

export async function getStaticProps() {
	const resPost = await client.getEntries({
		content_type: 'post',
	});

	const resProject = await client.getEntries({
		content_type: 'project',
	});

	const resRepo = await fetch(process.env.GIT_REPO_API).then((res) => res.json());

	return {
		props: {
			posts: resPost.items,
			project: resProject.items[0],
			repos: resRepo.slice(0, 10),
		},
		revalidate: 1,
	};
}

export default function home({ posts, project, repos }) {
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
					<span className="font-bold text-white">Hello, I'm Ricky!</span> I am a self-taught web developer based in Surabaya, Indonesia. I aim to blur the line between high-performance engineering and good design.
				</p>
			</section>
			{/* hero section */}

			{/* articles section */}
			<section className="mt-20">
				<h1 className="text-3xl font-bold">Featured articles</h1>
				<h2 className="text-xl mt-2">Posts about web development, technology, and everything in between.</h2>
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

			{/* repositories section */}
			<section className="mt-20">
				<h1 className="text-3xl font-bold">Repositories list</h1>
				<div className="mt-10">
					{repos.map((repo) => (
						<a href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id}>
							<div className="bookmark_item mb-5">
								<h1 className="text-xl font-semibold overflow-x-auto lg:overflow-x-hidden whitespace-nowrap text-blue-neo bg-gray-lightent p-2 rounded-tr-md rounded-tl-md">{repo.name} →</h1>
								<h2 className="text-sm bg-gray-dark overflow-x-auto lg:overflow-x-hidden whitespace-nowrap p-2 rounded-br-md rounded-bl-md">{repo.html_url}</h2>
							</div>
						</a>
					))}
				</div>
				<div className="mt-10">
					<a href={process.env.GIT_REPOS} target="_blank" rel="noreferrer" className="text-xl text-blue-neo hover:underline">
						View all repo →
					</a>
				</div>
			</section>
			{/* repositories section */}

			{/* project section */}
			<section className="mt-20">
				<h1 className="text-3xl font-bold">Featured project</h1>
				<div className="featured_project mt-10 rounded-md overflow-hidden">
					<Image src={'https:' + project.fields.featuredImage.fields.file.url} alt={project.fields.featuredImage.fields.title} width={project.fields.featuredImage.fields.file.details.image.width} height={project.fields.featuredImage.fields.file.details.image.height} />
					<div className="bg-gradient-to-tr from-blue-dark to-blue-light p-4">
						<span className="text-sm">FEATURED PROJECT</span>
						<h1 className="text-2xl font-semibold text-blue-neo">{project.fields.title}</h1>
						<p className="mt-2">{project.fields.shortDescription}</p>
						<ul className="flex space-x-3 mt-4">
							{project.fields.type.map((item) => (
								<li key={'key-' + item}>
									<p className="text-sm text-gray-dark bg-gray-light py-1 px-2 rounded-md">{item}</p>
								</li>
							))}
						</ul>
						<div className="mt-5">
							<Link href={'/projects/' + project.fields.slug}>
								<a className="text-xl text-blue-neo hover:underline">Visit project →</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="mt-10">
					<Link href="/projects">
						<a className="text-xl text-blue-neo hover:underline">View all projects →</a>
					</Link>
				</div>
			</section>
			{/* project section */}
		</div>
	);
}
