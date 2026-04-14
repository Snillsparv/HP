import type { APIRoute } from 'astro';
import pool from '../../lib/db.js';

export const POST: APIRoute = async ({ request }) => {
  try {
    const form = await request.formData();
    const name = form.get('name')?.toString().trim();
    const email = form.get('email')?.toString().trim();
    const message = form.get('message')?.toString().trim();

    if (!name || !email || !message) {
      return new Response(null, { status: 302, headers: { Location: '/?error=Fyll+i+alla+fält' } });
    }

    await pool.query(
      'INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message]
    );

    return new Response(null, { status: 302, headers: { Location: '/?tack=1' } });
  } catch {
    return new Response(null, { status: 302, headers: { Location: '/?error=Något+gick+fel' } });
  }
};
