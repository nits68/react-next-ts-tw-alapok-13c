"use client";

import React from "react";
import IncrementButton from "@/app/counter/IncrementButton";

export default function CounterPage() {
  // let count: number = 0;
  // useState hook biztosítja a reaktív változást
  const [count, setCount] = React.useState<number>(0);

  // const increment = () => {
  // setCount(count + 1);
  // setCount(count + 1);
  // setCount(count + 1);

  // setCount((prev) => prev + 1);
  // setCount((prev) => prev + 1);

  // setCount((prev) => prev + 1);
  // React batcheli a state változásokat, ezért a count csak egyszer változik
  // console.log(count);
  //   };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="flex flex-col items-center justify-center gap-y-3 rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-semibold">Counter example</h1>
        <p className="text-5xl font-bold text-red-600">{count}</p>
        <IncrementButton onIncrement={() => setCount((p) => p + 1)} />
      </div>
    </main>
  );
}
