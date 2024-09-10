import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const secretKey = process.env.NEXT_PUBLIC_PASSCODE
const encodedKey = new TextEncoder().encode(secretKey)

/**
 * Encrypts a payload object containing a name property into a JSON Web Token (JWT) string.
 *
 * @param payload - An object containing a `name` property to be encrypted.
 * @returns A JWT string representing the encrypted payload.
 */
export async function encrypt(payload: { name: string }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1d')
    .sign(encodedKey)
}

/**
 * Decrypts a JSON Web Token (JWT) string and returns the payload object.
 *
 * @param session - The JWT string to be decrypted. If not provided, an empty string will be used.
 * @returns The decrypted payload object, or `undefined` if the JWT is invalid or cannot be verified.
 */
export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.log('Failed to verify session')
  }
}
/**
 * Creates a new session for the given user name and sets a secure, HttpOnly cookie with the session token.
 *
 * @param name - The name of the user to create a session for.
 * @returns The created session token.
 */
export async function createSession(name: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await encrypt({ name })
  cookies().set('passCode', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

// delete session
export async function deleteSession() {
  cookies().delete('passCode')
}
