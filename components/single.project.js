import Link from "next/link";

export default function single_project({ project }) {
	return (
		<div className="bg-gray-dark p-5 rounded-md mb-5">
			<h2 className="text-sm font-jetbrain-mono font-light">PORTFOLIO</h2>
			<h1 className="text-blue-neo text-2xl font-semibold mt-1">{project.fields.title}</h1>
			<p className="mt-4">{project.fields.shortDescription.slice(0, 100) + "..."}</p>
			<div className="mt-5">
				<Link href={"/projects/" + project.fields.slug}>
					<a className="text-blue-neo hover:underline">Visit project →</a>
				</Link>
			</div>
		</div>
	);
}
