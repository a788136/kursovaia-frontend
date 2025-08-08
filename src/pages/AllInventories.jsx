import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllInventories } from "../services/inventoryService";

export default function AllInventories() {
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getAllInventories();
        setInventories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Все инвентаризации</h1>
        <button
          onClick={() => navigate("/inventories/new")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          ➕ Создать
        </button>
      </div>

      <div className="border border-gray-300 rounded-lg overflow-hidden">
        {/* Заголовки */}
        <div className="grid grid-cols-3 bg-gray-100 font-semibold text-gray-700">
          <div className="p-3 border-r border-gray-300">Название</div>
          <div className="p-3 border-r border-gray-300">Автор</div>
          <div className="p-3">Описание</div>
        </div>

        {/* Строки */}
        {inventories.map((inv, i) => (
          <div
            key={inv._id}
            className={`grid grid-cols-3 hover:bg-gray-50 transition ${
              i !== inventories.length - 1 ? "border-t border-gray-200" : ""
            }`}
          >
            <div className="p-3 border-r border-gray-200">{inv.title}</div>
            <div className="p-3 border-r border-gray-200">
              {inv.creator?.name || "—"}
            </div>
            <div className="p-3">{inv.description || "—"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
