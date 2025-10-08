"use client";

import { useState } from "react";
import AlignmentBar from "@/app/flexbox/AlignmentBar";

export type AlignOptions = {
  label: string;
  value: string;
};

export default function FlexboxPage() {
  // Függőleges igazítás

  const verticalAlign: AlignOptions[] = [
    { label: "Top", value: "items-start" },
    { label: "Center", value: "items-center" },
    { label: "Bottom", value: "items-end" },
  ];

  const [vertical, setVerical] = useState<string>("items-start");
  const [horizontal, setHorizontal] = useState<string>("justify-center");

  // Vízszintes igazítás
  const horizontalAlign: AlignOptions[] = [
    { label: "Left", value: "justify-start" },
    { label: "Center", value: "justify-center" },
    { label: "Right", value: "justify-end" },
    { label: "Space Between", value: "justify-between" },
    { label: "Space Around", value: "justify-around" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <AlignmentBar
        aktValue={vertical}
        aligments={verticalAlign}
        alignmentType="Vertical"
        setAligment={setVerical}
      />
      <div className={`flex h-72 w-full flex-wrap bg-yellow-100 ${vertical} ${horizontal} gap-4`}>
        { /* [...Array(3)] -> [undefined, undefined, undefined] */ }
        {[...Array(7)].map((_, i) => (
          <div
            className="flex h-24 w-24 items-center justify-center rounded-xl border border-black bg-gradient-to-tr from-cyan-400 to-blue-600 font-bold text-white shadow-xl transition-transform hover:scale-120 hover:shadow-2xl"
            key={i}
          >
            <div className="text-2xl">{i + 1}</div>
          </div>
        ))}
      </div>
      <AlignmentBar
        aktValue={horizontal}
        aligments={horizontalAlign}
        alignmentType="Horizontal"
        setAligment={setHorizontal}
      />
    </div>
  );
}
