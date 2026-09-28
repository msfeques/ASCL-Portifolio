import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();

const CHAVE = "site_visit_count";

// Apenas LÊ o valor atual, sem efeito colateral
export async function GET() {
  try {
    const valor = (await redis.get<number>(CHAVE)) ?? 0;
    return NextResponse.json({ count: valor });
  } catch (error) {
    console.error("Erro ao ler contador:", error);
    return NextResponse.json({ count: null }, { status: 500 });
  }
}

// Incrementa (chamado uma única vez por visita)
export async function POST() {
  try {
    const novoValor = await redis.incr(CHAVE);
    return NextResponse.json({ count: novoValor });
  } catch (error) {
    console.error("Erro ao incrementar contador:", error);
    return NextResponse.json({ count: null }, { status: 500 });
  }
}