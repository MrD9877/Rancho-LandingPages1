import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { z } from "zod";
import type { UserSchema } from "../components/ContactSection";
import { fireStoreDB } from "./firebase";

export async function sendMessage(data: z.infer<typeof UserSchema>) {
  try {
    const docRef = await addDoc(collection(fireStoreDB, "messages"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return docRef;
  } catch {
    return false;
  }
}
