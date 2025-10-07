"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function PageNameAndAge() {
  useEffect(() => {
    toast.success("Fg. törzs elkezdve!");
  }); // minden renderelés elején lefut, nincs dependency array

  // a useState hook egy két elemű tömböt ad vissza: az első elem a reaktív változó referenciája, a második elem a függvény referenciája, amivel ezt az értéket tudjuk módosítani
  // a useState-et generikussal (<string>) is megadhatjuk, hogy milyen típusú értéket várunk (itt stringet)
  // tömb destrukturálással vesszük ki a két elemet a tömbből
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("Kérlek, add meg a neved és az életkorod!");
  const [age, setAge] = useState<string>("");

  useEffect(() => {
    toast.success("Az oldal betöltődött!");
  }, []); // csak egyszer fut le, amikor az oldal/komponens először renderelődik, üres dependency array miatt

  useEffect(() => {
    // A name vagy az age  változásakor kap új értéket a message változó
    if (name && age) {
      setMessage(`Szia ${name}! Te ${age} éves vagy!`);
    } else if (name) {
      setMessage(`Szia ${name}! Add meg az életkorodat is!`);
    } else if (age) {
      setMessage(`Te ${age} éves vagy! Add meg a neved is!`);
    } else {
      setMessage("Kérlek, add meg a neved és az életkorod!");
    }
    toast.success("A name vagy az age változott!");
  }, [name, age]); // akkor fut le, amikor a name vagy age változik

  useEffect(() => {
    toast.success("A message változott!");
  }, [message]); // akkor fut le, amikor a message változik

  useEffect(() => {
    toast.success("Fg. törzs befejezve!");
  }); // minden renderelés végén lefut, nincs dependency array

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-144 space-y-4 rounded-2xl bg-gradient-to-tl from-blue-400 to-indigo-800 p-8 text-center shadow-2xl">
        <h1 className="text-4xl font-bold text-white">useEffect example</h1>
        <p className="text-2xl break-all text-gray-200">{message}</p>

        <input
          className="w-full rounded-lg border bg-cyan-300 p-2 font-bold focus:ring-2 focus:ring-blue-400"
          placeholder="Add meg a neved!"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full rounded-lg border bg-cyan-300 p-2 font-bold focus:ring-2 focus:ring-blue-400"
          placeholder="Életkorod"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
    </main>
  );
}
