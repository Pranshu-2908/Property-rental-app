export default function TabButton({ children, onSelect, isSelected }) {
  console.log("TABBUTTON COMPONENT EXECUTING");
  let classes = "rounded-xl p-2 cursor-pointer";
  classes += isSelected ? " bg-purple-600" : undefined;
  return (
    <li className="list-none">
      <button className={classes} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
