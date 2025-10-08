export default function TeglalapPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="font-mon w-100 rounded-2xl bg-white p-6 shadow-lg">
        <form className="space-y-5">
          <p>Téglalalp kerülete és területe SSR</p>
          <div>
            <label>a:</label>
            <input className="input ml-3 input-primary" type="text" name="a" />
          </div>
          <div>
            <label>b:</label>
            <input className="input ml-3 input-primary" type="text" name="b" />
          </div>
          <div>
            <p>Kerület: </p>
            <p>Terület: </p>
          </div>
        </form>
      </div>
    </div>
  );
}
