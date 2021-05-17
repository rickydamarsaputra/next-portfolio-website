import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import client from "../../contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

const RICHTEXT_OPTIONS = {
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node, children) => {
			return <p className="text-white-darkest mb-3">{children}</p>;
		},
		[BLOCKS.HEADING_2]: (node, children) => {
			return <h2 className="text-2xl font-semibold mt-10">{children}</h2>;
		},
		[BLOCKS.UL_LIST]: (node, children) => {
			return (
				<ul className="list_items mt-4">
					{node.content.map((item, index) => (
						<li key={"key" + index}>
							<p>
								<a href={item.content[0].content[1].data.uri} target="_blank" className="text-blue-neo hover:underline">
									{item.content[0].content[1].content[0].value}
								</a>
							</p>
						</li>
					))}
				</ul>
			);
		},
		[INLINES.HYPERLINK]: (node, children) => {
			return (
				<a className="text-blue-neo hover:underline" href={node.data.uri} target="_blank">
					{children}
				</a>
			);
		},
	},
	renderMark: {
		[MARKS.CODE]: (node, children) => {
			return (
				<pre className="bg-gray-dark py-2 px-4 rounded-md whitespace-nowrap overflow-x-auto">
					<code>{node}</code>
				</pre>
			);
		},
	},
};

export async function getStaticPaths() {
	const res = await client.getEntries({
		content_type: "project",
	});

	const paths = res.items.map((item) => ({
		params: {
			slug: item.fields.slug,
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const res = await client.getEntries({
		content_type: "project",
		"fields.slug": params.slug,
	});

	return {
		props: {
			project: res.items[0],
		},
		revalidate: 1,
	};
}

export default function project({ project }) {
	const { title, slug, shortDescription, description, type, linkToProject } = project.fields;

	return (
		<div className="mt-10">
			<Head>
				<title>@rickydamar · {slug}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content={shortDescription}></meta>
			</Head>

			<div className="w-4/5 md:w-3/5 mx-auto rounded-md overflow-hidden">
				<Image src={"https:" + project.fields.featuredImage.fields.file.url} width={project.fields.featuredImage.fields.file.details.image.width} height={project.fields.featuredImage.fields.file.details.image.height} />
				<div className="bg-gradient-to-tr from-blue-dark to-blue-light p-4">
					<span className="text-sm">FEATURED PROJECT</span>
					<h1 className="text-2xl font-semibold text-blue-neo">{title}</h1>
					<p className="mt-2">{shortDescription}</p>
					<ul className="flex space-x-3 mt-4">
						{type.map((type) => (
							<li key={"key" + type}>
								<p className="text-sm text-gray-dark bg-gray-light py-1 px-2 rounded-md">{type}</p>
							</li>
						))}
					</ul>
					<div className="mt-5">
						<a href={linkToProject} target="_blank" className="text-xl text-blue-neo hover:underline">
							Go to project →
						</a>
					</div>
				</div>
			</div>

			<div className="w-4/5 md:w-1/2 mx-auto mt-5">
				<div className="mt-4">{documentToReactComponents(description, RICHTEXT_OPTIONS)}</div>
			</div>
		</div>
	);
}
