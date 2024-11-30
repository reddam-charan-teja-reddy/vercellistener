export const config = {
	runtime: 'edge', // Ensures it runs as an edge function.
};

export default async (req) => {
	if (req.method === 'POST') {
		const body = await req.json();

		console.log('Received error report:', body.error);

		return new Response('Error report received', { status: 200 });
	}

	return new Response('Method Not Allowed', { status: 405 });
};
