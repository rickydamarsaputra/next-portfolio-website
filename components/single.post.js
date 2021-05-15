import Link from "next/link";

import moment from "moment";
import "moment/locale/id";

export default function single_post({ post }) {
	const formatDate = (date) => moment(date).locale("id").format("D MMMM y");

	return (
		<Link href={"/posts/" + post.fields.slug}>
			<a>
				<div className="article_item mb-10">
					<h2>{formatDate(post.sys.createdAt)} / ARTICLE</h2>
					<h1 className="text-2xl font-medium mt-1">{post.fields.title}</h1>
					<p className="mt-2">{post.fields.excerpt.substring(0, 150) + "..."}</p>
				</div>
			</a>
		</Link>
	);
}
