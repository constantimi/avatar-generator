import tinycolor from 'tinycolor2';

/**
 * Computes a hash value for a given string using the SHA-1 algorithm.
 *
 * @param str - The input string to be hashed.
 * @returns A promise that resolves to a 32-bit integer hash value.
 *
 * @example
 * ```typescript
 * const result = await hash("example");
 * console.log(result); // Outputs the hash value as a number
 * ```
 */
const hash = async (str: string): Promise<number> => {
    const buffer = await crypto.subtle.digest(
        'SHA-1',
        new TextEncoder().encode(str)
    );
    return new Uint8Array(buffer).reduce(
        (sum, byte) => (sum * 31 + byte) >>> 0,
        0
    );
};

const hue = async (str: string): Promise<number> => {
    const n = await hash(str);
    return n % 360;
};

/**
 * Generates a gradient based on the provided username.
 *
 * @param {string} username - The username to generate the gradient for.
 * @returns {Promise<{ fromColor: string, toColor: string }>} An object containing the starting and ending colors of the gradient.
 */
export const generateGradient = async (username: string) => {
    const h = await hue(username);
    const color1 = tinycolor({ h, s: 0.9, l: 0.6 });
    const color2 = color1.triad()[1].toHexString();

    return {
        fromColor: color1.toHexString(),
        toColor: color2,
    };
};
