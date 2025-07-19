import React, { useActionState, useRef } from "react";
import { z, ZodError } from "zod"; // Add new import
import { sendMessage } from "../utility/sendMessage";

export const UserSchema = z.object({
  email: z.string().email({ error: "Please put a valid email." }),
  name: z.string().min(3, { error: "Name is too short." }).max(20, { error: "Name is too long." }),
  message: z.string().min(10, { error: "Message is to short." }).max(2000, { error: "Please send reasonable size message." }),
});

export default function ContactSection() {
  const nameLableRef = useRef<HTMLParagraphElement>(null);
  const emailLabelRef = useRef<HTMLParagraphElement>(null);
  const messageLabelRef = useRef<HTMLParagraphElement>(null);
  const resultLabelRef = useRef<HTMLParagraphElement>(null);

  const toggle = (ref: React.RefObject<HTMLParagraphElement | null>) => {
    if (ref.current) {
      const el = ref.current;
      el.classList.toggle("invisible");
      el.classList.toggle("opacity-0");
    }
  };

  const clear = (ref: React.RefObject<HTMLParagraphElement | null>) => {
    if (ref.current) {
      if (!ref.current.classList.contains("invisible")) ref.current.classList.add("invisible");
      if (!ref.current.classList.contains("opacity-0")) ref.current.classList.add("opacity-0");
    }
  };

  const clearLabels = () => {
    clear(emailLabelRef);
    clear(nameLableRef);
    clear(messageLabelRef);
    clear(resultLabelRef);
  };

  const handleLabels = async (ref: React.RefObject<HTMLParagraphElement | null>, message: string) => {
    clearLabels();
    if (!ref.current) return;
    const el = ref.current;
    el.innerText = message;
    toggle(ref);
  };

  const [state, submitAction, isPending] = useActionState(
    async (previousState: unknown, formData: FormData) => {
      const raw = Object.fromEntries(formData.entries());
      const data: Record<string, string> = Object.fromEntries(Object.entries(raw).map(([key, value]) => [key, value.toString()]));
      try {
        const parsed = await UserSchema.parseAsync(data);
        const send = await sendMessage(parsed);
        if (!send) throw Error("Error:Unable to send message!!");
        handleLabels(resultLabelRef, "Thank you! I'll get back to you shortly!");
        return { values: {} };
      } catch (err) {
        if (err instanceof ZodError) {
          handleLabels(nameLableRef, "test");
          const path = err.issues[0].path[0];
          const message = err.issues[0].message;
          const ref = path === "message" ? messageLabelRef : path === "name" ? nameLableRef : emailLabelRef;
          handleLabels(ref, message);
        } else if (err instanceof Error) {
          handleLabels(resultLabelRef, `Error:${err.message.split("").slice(20).join("")}`);
        }
        return { values: data };
      }
    },
    { values: {} }
  );

  return (
    <section id="contact" className="h-fit py-[6vh]  bg-[linear-gradient(0deg,_#393632,_#080807)] w-[89vw] mx-auto rounded-lg   contact-card -translate-y-14 font-popins text-silverMain">
      <h2 style={{ fontWeight: 700 }} className=" w-fit mx-auto text-[10vw] lg:text-[7vw] text-center text-creamBackground  scrambleLoop-animation" data-secondtext="CONTACT ME TODAY!!" data-text="LET' MAKE IT HAPPEN">
        LET&apos; MAKE IT HAPPEN
      </h2>
      <form action={submitAction} className="w-[90%] mx-auto sm:w-[36rem] gap-6  flex flex-col  my-10 px-6 sm:px-10 xl:px-14 py-12 rounded-2xl backdrop-blur-xl bg-[rgba(209,209,199,0.05)] border border-[rgba(255,255,255,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <p className="text-center text-creamBackground">Say Hello</p>
        <div>
          <input defaultValue={state.values?.name ?? ""} type="text" placeholder="Drop a name" className="w-full placeholder:font-[400] font-normal text-[length:var(--text-base)] rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-creamBackground placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition" name="name" />
          <p ref={nameLableRef} className="text-red-400 text-sm mt-1 h-5 transition-all duration-300 opacity-0 invisible"></p>
        </div>
        <div>
          <input defaultValue={state.values?.email ?? ""} type="text" placeholder="Wanna hear back? Add your email" className="w-full placeholder:font-[400]  text-[length:var(--text-base)] font-normal rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-creamBackground placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition" name="email" />
          <p ref={emailLabelRef} className="text-red-400 text-sm mt-1 h-5 transition-all duration-300 opacity-0 invisible"></p>
        </div>
        <div>
          <textarea defaultValue={state.values?.message ?? ""} name="message" placeholder="Say hello or drop a note..." rows={5} required className="w-full placeholder:font-[400] font-normal rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-creamBackground placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition resize-none"></textarea>
          <p ref={messageLabelRef} className="text-red-400 text-sm mt-1 h-5 transition-all duration-300 opacity-0 invisible"></p>
        </div>

        <button disabled={isPending} type="submit" className="w-full px-6 py-3 rounded-xl font-semibold tracking-wide text-base transition-all duration-100 bg-creamBackground text-black hover:bg-white active:scale-[0.98] active:shadow-inner">
          {isPending ? "Please wait..." : "Send Message"}
        </button>
        <p ref={resultLabelRef} className="text-[--color-accent-400] text-center transition-all duration-300 opacity-0 invisible ">
          Thank you! I&apos;ll get back to you shortly!
        </p>
      </form>
    </section>
  );
}
