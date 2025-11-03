export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>
          You have no items in your packing list. Start adding some items 🧳
        </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercent = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numPercent === 100
          ? "🎉 You are ready to go! 🎉"
          : `
        💼 You have ${numItems} items on your packing list, and you are bringing
        ${numPacked} (${numPercent} %)🧳`}
      </em>
    </footer>
  );
}
