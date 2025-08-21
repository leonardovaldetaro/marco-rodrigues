import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const response = await fetch("https://script.google.com/macros/s/AKfycbwRgwD9AAHJc3LH8Kj3nniQ4WFurf-SDgW3Q8PwgecbK9PEZvb1svECAHF7jMeLwfJPmw/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      return NextResponse.json(
        { status: "erro", mensagem: "Falha ao enviar para Google Script" },
        { status: 500 }
      );
    }

    return NextResponse.json({ status: "sucesso" }, { status: 200 });
  } catch (err) {
    console.error("Erro na rota /api/palestras:", err);
    return NextResponse.json(
      { status: "erro", mensagem: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
