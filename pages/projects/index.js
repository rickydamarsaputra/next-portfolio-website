import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import SingleProject from "../../components/single.project";

import client from "../../contentful/client";

export async function getStaticProps() {
	const res = await client.getEntries({
		content_type: "project",
	});

	return {
		props: {
			projects: res.items,
		},
		revalidate: 1,
	};
}

export default function projects({ projects }) {
	const featuredProject = projects[0];

	return (
		<div className="w-4/5 md:w-1/2 mx-auto mt-10">
			<Head>
				<title>@rickydamar · Projects</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<h1 className="text-5xl font-semibold mb-4">Projects</h1>

			{/* project featured */}
			<section>
				<div className="featured_project mt-10 rounded-md overflow-hidden">
					{featuredProject?.fields ? (
						<Image
							src={"https:" + featuredProject?.fields.featuredImage.fields.file.url}
							alt={featuredProject?.fields.featuredImage.fields.title}
							width={featuredProject?.fields.featuredImage.fields.file.details.image.width}
							height={featuredProject?.fields.featuredImage.fields.file.details.image.height}
						/>
					) : null}

					<div className="bg-gradient-to-tr from-blue-dark to-blue-light p-4">
						<span className="text-sm">FEATURED PROJECT</span>
						<h1 className="text-2xl font-semibold text-blue-neo">{featuredProject?.fields.title}</h1>
						<p className="mt-2">{featuredProject?.fields ? featuredProject?.fields.shortDescription.slice(0, 100) + "..." : null}</p>
						<ul className="flex space-x-3 mt-4">
							{featuredProject?.fields.type.map((type) => (
								<li key={"key" + type}>
									<p className="text-sm text-gray-dark bg-gray-light py-1 px-2 rounded-md">{type}</p>
								</li>
							))}
						</ul>
						<div className="mt-5">
							<Link href={"/projects/" + featuredProject?.fields.slug}>
								<a className="text-xl text-blue-neo hover:underline">Visit project →</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
			{/* project featured */}

			{/* project portfolio */}
			<section className="mt-10">
				<h1 className="text-3xl font-semibold">Portfolio</h1>
				<div className="mt-5">
					{projects.map((project) => (
						<SingleProject key={project.sys.id} project={project} />
					))}
				</div>
			</section>
			{/* project portfolio */}
		</div>
	);
}
