
import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET() {
  const lumaCalendarUrl =
    "https://lu.ma/embed/calendar/cal-1gNqFpiBnoe4rRF/events";

  try {
    const response = await fetch(lumaCalendarUrl, {
      next: { revalidate: 3600 }, 
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Luma page: ${response.statusText}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Buscamos un selector que solo exista si hay eventos.
    // Inspeccionando la página de Luma, los eventos están dentro de un <a> con un atributo `href` que empieza por "/event/".
    // Si no encontramos ninguno, asumimos que no hay eventos.
    const eventSelector = 'a[href^="/event/"]';
    const eventElement = $(eventSelector).first();

    const hasEvents = eventElement.length > 0;

    return NextResponse.json({ hasEvents });
  } catch (error) {
    console.error("Error in /api/check-events:", error);
    return NextResponse.json(
      { error: "Could not check for events." },
      { status: 500 }
    );
  }
}