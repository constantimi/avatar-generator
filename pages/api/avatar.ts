import { NextApiRequest, NextApiResponse } from 'next';
import { generateGradient } from '../../utils/gradient';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name = 'name', size = '120', rounded = '0', text = '' } = req.query;

    const gradient = await generateGradient(name as string);
    const sizeNumber = parseInt(size as string, 10);

    const roundedNumber = rounded === 'full' ? sizeNumber / 2 : parseInt(rounded as string, 10); // prettier-ignore

    const svg = `
  <svg width="${sizeNumber}" height="${sizeNumber}" xmlns="http://www.w3.org/2000/svg">
    <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${gradient.fromColor}" />
      <stop offset="100%" stop-color="${gradient.toColor}" />
    </linearGradient>
    </defs>
    <rect width="${sizeNumber}" height="${sizeNumber}" rx="${roundedNumber}" ry="${roundedNumber}" fill="url(#gradient)" />
    ${
        text
            ? `<text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="#FFF" font-size="${Math.max(
                  sizeNumber * 0.4,
                  12
              )}" font-family="Arial">${text}</text>`
            : ''
    }
  </svg>`;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=604800, immutable');
    res.status(200).send(svg);
};

export default handler;
