import Head from "next/head";

export default function contact() {
	return (
		<div className="w-4/5 md:w-1/2 mx-auto mt-10">
			<Head>
				<title>@rickydamar · Get in touch</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<h1 className="text-5xl font-semibold mb-10">Get in touch</h1>

			{/* contact social media */}
			<section>
				<h1 className="text-3xl font-semibold">Social media, etc.</h1>
				<ul className="list_items mt-4">
					<li>
						<p>
							<a href="https://github.com/rickydamarsaputra" rel="noreferrer" target="_blank" className="text-blue-neo font-semibold hover:underline">
								GitHub
							</a>{" "}
							– Programming stuff and side projects, old and new.
						</p>
					</li>
					<li>
						<p>
							<a href="https://facebook.com/rickydamar.saputra" rel="noreferrer" target="_blank" className="text-blue-neo font-semibold hover:underline">
								Facebook
							</a>{" "}
							– Mostly just get information about programing in group facebook.
						</p>
					</li>
				</ul>
			</section>
			{/* contact social media */}

			{/* contact email */}
			<section className="mt-5">
				<h1 className="text-3xl font-semibold mb-4">Email</h1>
				<p className="mb-4">please don't spam my email 🤣</p>
				<a href="mailto:retrocode.rc@gmail.com" className="text-blue-neo hover:underline bg-gray-dark py-2 px-4 rounded-md">
					retrocode.rc@gmail.com
				</a>
			</section>
			{/* contact email */}
		</div>
	);
}
