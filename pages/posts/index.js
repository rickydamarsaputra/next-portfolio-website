import Head from "next/head";

import SinglePost from "../../components/single.post";

import { createClient } from "contentful";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFULL_SPACE_ID,
		accessToken: process.env.CONTENTFULL_ACCESS_TOKEN,
	});

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

export default function posts({ posts }) {
	return (
		<div className="w-4/5 md:w-1/2 mx-auto mt-10">
			<Head>
				<title>@rickydamar · Posts</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<h1 className="text-5xl font-semibold mb-4">Posts</h1>
			<h2 className="text-3xl font-semibold">Featured posts</h2>
			<div className="mt-10">
				{posts.map((post) => (
					<SinglePost key={post.sys.id} post={post} />
				))}
			</div>
		</div>
	);
}
