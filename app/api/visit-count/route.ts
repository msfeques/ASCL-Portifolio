import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();

const CHAVE = "site_visit_count";

export async function GET() {
  try {
    const novoValor = await redis.incr(CHAVE);
    return NextResponse.json({ count: novoValor });
  } catch (error) {
    console.error("Erro ao incrementar contador:", error);
    return NextResponse.json({ count: null }, { status: 500 });
  }
}