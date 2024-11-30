export const config = {
	runtime: 'edge',
};

export default async (req) => {
	if (req.method === 'POST') {
		const body = await req.json();
		const { error } = body;

		console.log('Received error report:');
		console.log(error);

		return new Response('Error report received', { status: 200 });
	}

	return new Response('Method not allowed', { status: 405 });
};
