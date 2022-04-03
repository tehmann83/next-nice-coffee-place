import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CoffeeStore = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Coffee Store</title>
			</Head>
			<div>coffee-store{router.query.id}</div>
			<Link href={'/'}>
				<a>Back to home</a>
			</Link>
			<Link href={'/coffee-store/dynamic'}>
				<a>Dynamic page</a>
			</Link>
		</>
	);
};

export default CoffeeStore;
