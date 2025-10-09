"use client";

import { useState } from "react";
import AlignmentBar from "@/app/flexbox/AlignmentBar";

export type AlignOptions = {
  label: string; // parancsgomb felirata
  value: string; // Tailwind osztálynév az igazításhoz
};

export default function FlexboxPage() {
  // Tailwind függőleges igazítások osztályai
  const verticalAlign: AlignOptions[] = [
    { label: "Top", value: "items-start" },
    { label: "Center", value: "items-center" },
    { label: "Bottom", value: "items-end" },
  ];

  // Tailwind vízszintes igazítások osztályai
  const horizontalAlign: AlignOptions[] = [
    { label: "Left", value: "justify-start" },
    { label: "Center", value: "justify-center" },
    { label: "Right", value: "justify-end" },
    { label: "Space Between", value: "justify-between" },
    { label: "Space Around", value: "justify-around" },
  ];

  // aktuális igazítások állapot (state, reaktív) változói és azok beállító függvényei
  const [vertical, setVerical] = useState<string>("items-start");
  const [horizontal, setHorizontal] = useState<string>("justify-center");

  return (
    <div className="flex min-h-screen flex-col">
      {/* Saját komponens a parancsgombokat tartalmazó sávhoz */}
      <AlignmentBar
        aktValue={vertical} // igazítás aktuális értéke
        aligments={verticalAlign} // igazítási lehetőségek (object array)
        alignmentType="Vertical" // felirat a sávon
        setAligment={setVerical} // állapot változót beállító függvény referenciája
      />
      <div className={`flex h-72 w-full flex-wrap bg-yellow-100 ${vertical} ${horizontal} gap-4`}>
        {/* [...Array(3)] -> [undefined, undefined, undefined] */}
        {/* ... -> spread operator */}
        {[...Array(7)].map((_, i) => (
          <div
            className="flex h-24 w-24 items-center justify-center rounded-xl border border-black bg-gradient-to-tr from-cyan-400 to-blue-600 text-2xl font-bold text-white shadow-xl transition-transform hover:scale-120 hover:shadow-2xl"
            key={i}
          >
            {i + 1}
          </div>
        ))}
      </div>
      {/* Alsó sáv a vízszintes igazítás beállításához */}
      <AlignmentBar
        aktValue={horizontal}
        aligments={horizontalAlign}
        alignmentType="Horizontal"
        setAligment={setHorizontal}
      />
    </div>
  );
}
