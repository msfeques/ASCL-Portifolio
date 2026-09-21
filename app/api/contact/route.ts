import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { motivo, nome, organizacao, email, telefone, publicacao, mensagem } = body;

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      // "from" precisa ser um endereço do domínio verificado no passo 2
      from: "Site ACSL <contato@revistabrasilemfoco.com.br>",
      to: "contato@acsleditora.com.br", // e-mail que vai receber as mensagens
      replyTo: email, // clicar em "responder" já vai direto pro visitante
      subject: `Novo contato pelo site — ${motivo}`,
      text: `
Motivo: ${motivo}
Nome: ${nome}
Organização: ${organizacao || "-"}
E-mail: ${email}
Telefone: ${telefone || "-"}
Publicação de interesse: ${publicacao || "-"}

Mensagem:
${mensagem}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { error: "Falha ao enviar a mensagem." },
      { status: 500 }
    );
  }
}