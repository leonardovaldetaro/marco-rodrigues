export async function POST(req: Request) {
  try {
    const data = await req.json();

    const response = await fetch('https://script.google.com/macros/s/AKfycbxl_tXQIDc6cbRPfKZbGiTwk8XzV9040p6OON84fTh-ikvnbO7_gi6LJQ6BC3gT_8sm/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Erro ao enviar para Google Script:', err);
    return new Response(JSON.stringify({ status: 'erro', mensagem: err.toString() }), {
      status: 500
    });
  }
}
