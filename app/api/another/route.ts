import { NextRequest } from 'next/server';
import { handleRequest } from '@/utils/logRequest';

export async function POST(req: NextRequest) {
  return handleRequest(req, 'Another API');
}
