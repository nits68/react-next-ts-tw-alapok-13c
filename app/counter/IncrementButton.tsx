export type IncrementButtonProps = {
  onIncrement: () => void; // a paraméter egy függvény referencia, ami nem vár paramétert és nem ad vissza semmit
};

// A komponeseket megvalósító föggvények azonosítója PascalCase
// A komponensek visszatérési értékének típusa JSX.Element
// A komponenst tároló *.tsx fájl neve is PascalCase, egyezik a komponens nevével
const IncrementButton = (props: IncrementButtonProps) => {
  return (
    <button
      className="cursor-pointer rounded-2xl bg-green-200 px-4 py-1 shadow-xl transition active:scale-95 active:shadow-md"
      onClick={props.onIncrement}
    >
      Increment
    </button>
  );
};

export default IncrementButton;
