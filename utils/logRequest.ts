import { NextRequest, NextResponse } from 'next/server';

/**
 * Handles logging of incoming requests and provides a standard error response.
 * @param req - NextRequest object containing the request details.
 * @param endpoint - The name of the endpoint being accessed, for logging purposes.
 */
export async function handleRequest(req: NextRequest, endpoint: string) {
  console.log(`[INFO] ${endpoint} endpoint was called.`);

  try {
    const { message } = await req.json();
    console.log(`[INFO] Received message from ${endpoint}: "${message}"`);

    // Simulating an intentional error for testing purposes.
    console.error(`[ERROR] Simulating an internal server error in ${endpoint} for testing.`);

    return NextResponse.json(
      { error: `Simulated internal server error in ${endpoint} for testing purposes.` },
      { status: 500 }
    );
  } catch (error) {
    console.error(`[ERROR] Failed to parse the request body in ${endpoint}:`, error);
    return NextResponse.json(
      { error: 'Invalid request body. Please ensure your JSON is correctly formatted.' },
      { status: 400 }
    );
  }
}
