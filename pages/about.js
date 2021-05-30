import Head from "next/head";
import Link from "next/link";

export default function about() {
	return (
		<div className="w-4/5 md:w-1/2 mx-auto mt-10">
			<Head>
				<title>@rickydamar · About</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<h1 className="text-5xl font-semibold mb-4">About</h1>

			{/* about profile */}
			<section>
				<h2 className="text-xl font-light">Hey, call me Ricky! I'm a web developer.</h2>
				<p className="mt-5">
					Saya seorang web developer otodidak yang berbasis di Surabaya, Indonesia. Saya seorang <span className="font-bold">junior web developer</span>, bertanggung jawab dengan pekerjaan mereka selama jam kerja. Saya sedang menembuh kuliah disalah satu universitas di surabaya, yaitu universitas{" "}
					<a href="https://www.dinamika.ac.id" rel="noreferrer" target="_blank" className="text-blue-neo hover:underline">
						Dinamika
					</a>{" "}
					. Saya memiliki pengalaman dan prestasi beberapa tahun di bidang yang saya geluti.
				</p>
				<p className="mt-4">
					Saya suka pemrograman web, terutama di frontend, saya suka mencari tahu dan mempelajari teknologi baru tentang frontend yang ada seperti React dan Nextjs, saya biasanya mempelajarinya melalui video tutorial di YouTube, saya sangat suka itu, dan saya memiliki beberapa rekomendasi channel
					YouTube , Saya merekomendasikan <br />
					<a href="https://www.youtube.com/channel/UCkXmLjEr95LVtGuIm3l2dPg" rel="noreferrer" target="_blank" className="text-blue-neo hover:underline">
						web programming unpas
					</a>
					,{" "}
					<a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" rel="noreferrer" target="_blank" className="text-blue-neo hover:underline">
						traversy media
					</a>
					, and{" "}
					<a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" rel="noreferrer" target="_blank" className="text-blue-neo hover:underline">
						the net ninja 🐱‍👤.
					</a>
				</p>
				<p className="mt-4">Di luar pemrograman, saya juga membaca manga dan nonton anime 😁 kemudian menonton video pemrograman di youtube.</p>
				<p className="mt-4">Ketika saya tidak lagi melakukan salah satu dari hal-hal yang disebutkan di atas, maka sesuatu yang sangat buruk pasti telah terjadi pada saya 😭.</p>
			</section>
			{/* about profile */}

			<div className="w-full border-b border-white-darkest border-opacity-10 my-10"></div>

			{/* about skill */}
			<section>
				<h1 className="text-3xl font-semibold">Skillset (web development)</h1>
				<h2 className="text-xl font-medium mt-4">HTML and CSS</h2>
				<p className="text-sm mt-2">Bootstrap (3+), Tailwind.css</p>
				<h2 className="text-xl font-medium mt-4">JavaScript</h2>
				<p className="text-sm mt-2">JavaScript (ES2015+), Express, Node.js</p>
				<h2 className="text-xl font-medium mt-4">Build tools</h2>
				<p className="text-sm mt-2">Parcel</p>
				<h2 className="text-xl font-medium mt-4">JavaScript frameworks</h2>
				<p className="text-sm mt-2">jQuery, React, Nextjs</p>
				<h2 className="text-xl font-medium mt-4">Content Management Sistem (CMS)</h2>
				<p className="text-sm mt-2">WordPress</p>
				<h2 className="text-xl font-medium mt-4">Headless CMS</h2>
				<p className="text-sm mt-2">Strapi, Contentful</p>
				<h2 className="text-xl font-medium mt-4">Server-side</h2>
				<p className="text-sm mt-2">Java (learning), PHP</p>
				<h2 className="text-xl font-medium mt-4">Server-side frameworks</h2>
				<p className="text-sm mt-2">Express, Laravel (5.8+), Codeigniter (3)</p>
				<h2 className="text-xl font-medium mt-4">Mobile Development</h2>
				<p className="text-sm mt-2">React Native (expo), Flutter (learning)</p>
				<h2 className="text-xl font-medium mt-4">Database</h2>
				<p className="text-sm mt-2">Maria DB, My SQL, Mongo DB, Firebase</p>
				<h2 className="text-xl font-medium mt-4">Others</h2>
				<p className="text-sm mt-2">Git, Windows, Visual Studio Code, Heroku, Netlify, Github Pages</p>
			</section>
			{/* about skill */}

			<div className="w-full border-b border-white-darkest border-opacity-10 my-10"></div>

			{/* about other skill */}
			<section>
				<h1 className="text-3xl font-semibold">Skillset (other)</h1>
				<h2 className="text-xl font-medium mt-4">Design tools</h2>
				<p className="text-sm mt-2">Adobe XD, Figma</p>
				<h2 className="text-xl font-medium mt-4">Video editing</h2>
				<p className="text-sm mt-2">Filmora, Camtasia</p>
			</section>
			{/* about other skill */}

			<div className="w-full border-b border-white-darkest border-opacity-10 my-10"></div>

			{/* about get in touch */}
			<section>
				<h1 className="text-3xl font-semibold mb-4">Get in touch</h1>
				<Link href="/contact">
					<a className="text-blue-neo hover:underline">Let's talk!</a>
				</Link>
			</section>
			{/* about get in touch */}
		</div>
	);
}
