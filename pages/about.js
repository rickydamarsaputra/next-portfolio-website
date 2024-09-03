import Head from 'next/head';
import Link from 'next/link';

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
				<p className="text-justify mt-5">
					Hello! I’m Ricky Damar Saputra, a Web Developer passionate about creating captivating digital experiences.
					With experience in building various types of websites and applications, I blend creativity with technical expertise to deliver effective and aesthetically pleasing solutions. I'm always excited to collaborate on challenging projects where I can apply my skills in coding, responsive design, and performance optimization.
				</p>
				<p className="text-justify mt-4">
					Are you looking for someone to bring your digital vision to life? Let’s work together and create something extraordinary!
				</p>
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

			<div className="w-full border-b border-white-darkest border-opacity-10 my-10"></div>

			{/* curriculum vitae */}
			<section>
				<h1 className="text-3xl font-semibold mb-4">Curriculum Vitae</h1>
				<a href="http://tiny.cc/cv-en-ats-ricky-damar" rel="noreferrer" target="_blank" className="text-blue-neo hover:underline">
					Let's see!
				</a>
			</section>
			{/* curriculum vitae */}
		</div>
	);
}
