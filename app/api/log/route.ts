import { NextRequest, NextResponse } from 'next/server';
import { handleRequest } from '@/utils/logRequest';

export async function POST(req: NextRequest) {
  return handleRequest(req, 'Test API');
}

export async function GET(req: NextRequest) {
  console.log('GET request received');
  return NextResponse.json({ message: 'GET request successful' });
}
