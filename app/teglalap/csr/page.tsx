"use client";

import { useState } from "react";

export default function TeglalapCsrPage() {
  // Állapot változók (reaktív változók)
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);

  const kerulet = 2 * (a + b);
  const terulet = a * b;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="font-mon w-100 rounded-2xl bg-white p-6 shadow-lg">
        <div className="space-y-5">
          <p>Téglalalp kerülete és területe SSR</p>
          <div>
            <label>a:</label>
            <input
              className="input ml-3 input-primary"
              type="text"
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
            />
          </div>
          <div>
            <label>b:</label>
            <input
              className="input ml-3 input-primary"
              type="text"
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
            />
          </div>
          {/* Kétágú elágazás feltételes operátorral */}
          {a > 0 && b > 0 ? (
            <div>
              <p>Kerület: {kerulet}</p>
              <p>Terület: {terulet}</p>
            </div>
          ) : (
            <p className="text-red-600">A téglalap oldalhosszai érvénytelenek.</p>
          )}
          {/* Egyágú elágazás a JSX kódan */}
          {a > 0 && b > 0 && (
            <div>
              <p>Kerület: {kerulet}</p>
              <p>Terület: {terulet}</p>
            </div>
          )}

          {/* Egyágú elágazás a JSX kódan 2. példa */}
          {(a <= 0 || b <= 0) && (
            <p className="text-red-600">A téglalap oldalhosszai érvénytelenek.</p>
          )}

          <input className="hidden" type="submit" />
        </div>
      </div>
    </div>
  );
}
