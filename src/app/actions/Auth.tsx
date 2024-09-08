'use server';

import { createSession } from "@/lib/Session";
/**
 * Submits a form and creates a session if the provided passcode is valid.
 *
 * @param data - The form data to be submitted.
 * @returns An object with a `success` boolean and a `message` string indicating the result of the form submission.
 */

export async function submitForm(data: FormData) {
  const passCode = data.get('passCode');
  if (passCode === process.env.NEXT_PUBLIC_PASSCODE) {
    createSession(passCode as string);
    return { success: true, message: 'Form submitted successfully!' };
  }
  else return { success: false, message: 'Invalid passcode' };
}
