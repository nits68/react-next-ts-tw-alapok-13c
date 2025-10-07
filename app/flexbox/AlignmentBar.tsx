"use client";

import { AlignOptions } from "@/app/flexbox/page";

type Props = {
  alignmentType: string;
  aligments: AlignOptions[];
  setAligment: (value: string) => void;
  aktValue: string;
};

export default function AlignmentBar(props: Props) {
  return (
    <nav className="flex flex-wrap justify-center gap-3 bg-green-300 p-4">
      <h1 className="text-2xl">{props.alignmentType} alignment</h1>
      {props.aligments.map((align) => (
        <button
          className={`btn rounded-2xl shadow-md btn-primary ${props.aktValue === align.value ? "bg-blue-500 text-white shadow-lg" : "bg-white text-gray-700 shadow hover:bg-gray-100"}`}
          key={align.value}
          onClick={() => props.setAligment(align.value)}
        >
          {align.label}
        </button>
      ))}
    </nav>
  );
}
