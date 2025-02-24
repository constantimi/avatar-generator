import { NextResponse } from 'next/server';
import { generateGradient } from '../../../utils/gradient';

export async function GET(req: Request) {
    const url = new URL(req.url);
    const name = url.searchParams.get('name') || 'name';
    const text = url.searchParams.get('text') || '';
    const size = Number(url.searchParams.get('size') || 120);
    const rounded =
        url.searchParams.get('rounded') === 'full'
            ? size / 2
            : Number(url.searchParams.get('rounded') || 0);

    // Retrieve color parameters and decode them
    let fromColor = url.searchParams.get('from');
    let toColor = url.searchParams.get('to');

    if (fromColor) {
        fromColor = decodeURIComponent(fromColor); // Decode URL-encoded color
    }

    if (toColor) {
        toColor = decodeURIComponent(toColor); // Decode URL-encoded color
    }

    // If no custom colors are passed, generate gradient based on the username
    const gradient =
        fromColor && toColor
            ? { fromColor, toColor }
            : await generateGradient(name);

    // Create the avatar SVG element
    const svg = `
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="${gradient.fromColor}" />
                    <stop offset="100%" stop-color="${gradient.toColor}" />
                </linearGradient>
            </defs>
            <rect width="${size}" height="${size}" rx="${rounded}" ry="${rounded}" fill="url(#gradient)" />
            ${
                text
                    ? `<text x="50%" y="50%" alignment-baseline="central" dominant-baseline="central" text-anchor="middle" fill="#FFF" font-family="sans-serif" font-size="${Math.max(
                          size * 0.4,
                          12
                      )}">${text}</text>`
                    : ''
            }
        </svg>
    `;

    return new NextResponse(svg, {
        headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'public, max-age=604800, immutable',
        },
    });
}
