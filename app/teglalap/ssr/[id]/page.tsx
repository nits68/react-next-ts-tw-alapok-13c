// Query és dinamikus route paraméterek átadása destrukturálás nélkül

// http://localhost:3000/teglalap/ssr/dinamikus?txt=alma
// Az oldal minden esetben egy paraméter kap, ami egy objektum
// Ez az objektum tartalmazza a route paramétereket és a query paramétereket szintén objektumként
// A route paraméterek a params al-objektumban érhetők el
// A query paraméterek a searchParams al-objektumban érhetők el
// A dinamikus route paramétert a mappa neve határozza meg, itt [id]

export default async function TeglalapPageParamsMinta(props: {
  params: { id: string };
  searchParams: { txt?: string };
}) {
  // Next.js 13+ verzióban a params és searchParams objektumot aszinkron módon kell kezelni
  // Ezért az alábbi módon érjük el a paramétereket:

  const p = await props.params;
  const sp = await props.searchParams;

  // Enter leütésekor a form újratöltődik (automatikus submit),
  // és a paraméterek újra beolvasódnak a URL-ből
  return (
    <>
      <form className="space-y-5">
        <p>Dimamikus (route) paraméter (id): {p.id}</p>
        <div>
          <label>Query paraméter (txt):</label>
          <input
            className="input ml-3 input-primary"
            defaultValue={sp.txt}
            name="txt"
            type="text"
          />
        </div>
        <h1>Query paraméter (txt): {sp.txt ? `${sp.txt}` : "undefined"}</h1>
      </form>
    </>
  );
}
