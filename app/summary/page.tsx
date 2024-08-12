// components/Habits.tsx
import useSWR from "swr";
import { fetcher } from "@/lib/helpers";

const summary = () => {
  const { data, error } = useSWR("app/api/habits/route.ts", fetcher);

  if (error) return <div>Failed to load habits.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-4">
      {data.map((habit) => (
        <div key={habit._id} className="mb-4 p-4 border rounded">
          <h2 className="text-xl font-semibold">{habit.title}</h2>
          <p>{habit.description}</p>
          <input type="checkbox" checked={habit.completed} readOnly />
        </div>
      ))}
    </div>
  );
};

export default summary;
