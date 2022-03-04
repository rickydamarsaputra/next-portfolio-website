import Head from 'next/head';

import { useState } from 'react';

const Question = ({ answer, setAnswer, setShowEmail }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		if (Number(answer) === 666) setShowEmail(true);
		setAnswer('');
	};

	return (
		<>
			<h2 className="mb-2">
				How result from <span className="font-medium text-blue-neo">111 x 6</span> 🤔 ?
			</h2>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={(text) => setAnswer(text.target.value)} value={answer} className="py-2 px-4 focus:outline-none bg-gray-dark placeholder-blue-neo text-blue-neo" placeholder="enter the answer here..." />
			</form>
		</>
	);
};

const MyEmail = () => {
	return (
		<>
			<p className="mb-4">please don't spam my email 🤣</p>
			<a href="mailto:retrocode.rc@gmail.com" className="text-blue-neo hover:underline bg-gray-dark py-2 px-4 rounded-md">
				retrocode.rc@gmail.com
			</a>
		</>
	);
};

export default function contact() {
	const [showEmail, setShowEmail] = useState(false);
	const [answer, setAnswer] = useState('');

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
							</a>{' '}
							– Programming stuff and side projects, old and new.
						</p>
					</li>
					<li>
						<p>
							<a href="https://facebook.com/rickydamar.saputra" rel="noreferrer" target="_blank" className="text-blue-neo font-semibold hover:underline">
								Facebook
							</a>{' '}
							– Mostly just get information about programing in group facebook.
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.linkedin.com/in/ricky-damar-saputra-179b42230/" rel="noreferrer" target="_blank" className="text-blue-neo font-semibold hover:underline">
								Linkedin
							</a>{' '}
							– Maybe i can get some job offer in the field i can on linkedin.
						</p>
					</li>
					<li>
						<p>
							<a href="https://wa.link/595l0t" rel="noreferrer" target="_blank" className="text-blue-neo font-semibold hover:underline">
								Whatsapp
							</a>{' '}
							– maybe you can contact me if you're curious on whatsapp.
						</p>
					</li>
				</ul>
			</section>
			{/* contact social media */}

			{/* contact email */}
			<section className="mt-5">
				<h1 className="text-3xl font-semibold mb-4">Email</h1>
				{!showEmail ? <Question answer={answer} setAnswer={setAnswer} setShowEmail={setShowEmail} /> : ''}
				{showEmail && <MyEmail />}
			</section>
			{/* contact email */}
		</div>
	);
}
