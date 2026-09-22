import TableHead from "./TableHead";
import TableRow from "./TableRow";

export default function Table({ items }) {
  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-xl border border-purple-100 shadow-sm bg-white">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-[#2488ff] text-white">
           <TableHead data = {"Question"}/>
           <TableHead data = {"What It Tests"}/>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <TableRow key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}