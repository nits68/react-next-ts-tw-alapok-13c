type SearchParams = {
  a?: string;
  b?: string;
};

export default async function TeglalapPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  let a: number = params.a ? Number(params.a) : 3;
  let b: number = params.b ? Number(params.b) : 4;
  a = isNaN(a) ? 5 : a;
  b = isNaN(b) ? 6 : b;

  const kerulet = 2 * (a + b);
  const terulet = a * b;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="font-mon w-100 rounded-2xl bg-white p-6 shadow-lg">
        <form className="space-y-5">
          <p>Téglalalp kerülete és területe SSR</p>
          <div>
            <label>a:</label>
            <input
              className="input ml-3 input-primary"
              defaultValue={a}
              min={0}
              name="a"
              step="any"
              type="number"
            />
          </div>
          <div>
            <label>b:</label>
            <input className="input ml-3 input-primary" defaultValue={b} name="b" type="text" />
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
        </form>
      </div>
    </div>
  );
}
