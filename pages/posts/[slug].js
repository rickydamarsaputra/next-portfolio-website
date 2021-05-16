import Head from "next/head";
import Image from "next/image";

import moment from "moment";
import "moment/locale/id";

import client from "../../contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

const RICHTEXT_OPTIONS = {
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node, children) => {
			return <p className="text-white-darkest mb-3">{children}</p>;
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

const formatDate = (date) => moment(date).locale("id").format("D MMMM y");

export async function getStaticPaths() {
	const res = await client.getEntries({
		content_type: "post",
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
		content_type: "post",
		"fields.slug": params.slug,
	});

	return {
		props: {
			post: res.items[0],
		},
	};
}

export default function post({ post }) {
	const { title, slug, featuredImage, body, excerpt } = post.fields;
	return (
		<div className="mt-10">
			<Head>
				<title>@rickydamar · {slug}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content={excerpt}></meta>
			</Head>

			<div className="w-4/5 md:w-3/5 mx-auto opacity-80">
				<Image src={"https:" + featuredImage.fields.file.url} alt={featuredImage.fields.title} width={featuredImage.fields.file.details.image.width} height={featuredImage.fields.file.details.image.height} />
			</div>
			<div className="w-4/5 md:w-1/2 mx-auto mt-5">
				<h2>{formatDate(post.sys.createdAt)} / ARTICLE</h2>
				<h1 className="text-2xl font-semibold mt-2">{title}</h1>
				<div className="mt-4">{documentToReactComponents(body, RICHTEXT_OPTIONS)}</div>
			</div>
		</div>
	);
}
