import TableData from "./TableData";

export default function TableRow({ data }) {
  return (
    <tr className="border-b border-purple-100 last:border-b-0 hover:bg-slate-50/50 transition-colors">
      <TableData data = {data.question} />
      <TableData data = {data.whatItTests} />
    </tr>
  );
}