import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "tailwind.config.jsgroup tailwind.config.jsrelative tailwind.config.jsmx-auto tailwind.config.jsflex tailwind.config.jsmax-w-fit tailwind.config.jsflex-row tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jsrounded-2xl tailwind.config.jsbg-white/40 tailwind.config.jspx-4 tailwind.config.jspy-1.5 tailwind.config.jstext-sm tailwind.config.jsfont-medium tailwind.config.jsshadow-[inset_0_-8px_10px_#8fdfff1f] tailwind.config.jsbackdrop-blur-sm tailwind.config.jstransition-shadow tailwind.config.jsduration-500 tailwind.config.jsease-out [--bg-size:tailwind.config.js300%] hover:tailwind.config.jsshadow-[inset_0_-5px_10px_#8fdfff3f] dark:tailwind.config.jsbg-black/40",
        className,
      )}
    >
      <div
        className={`absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
      />

      {children}
    </div>
  );
}
