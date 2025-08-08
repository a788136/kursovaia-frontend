import { useNavigate } from "react-router-dom";
import { createInventory } from "../services/inventoryService";
import InventoryForm from "../components/InventoryForm";

export default function CreateInventory() {
  const navigate = useNavigate();

  async function handleCreate(data) {
    try {
      await createInventory(data);
      navigate("/inventories");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Создать инвентаризацию</h1>
      <InventoryForm onSubmit={handleCreate} />
    </div>
  );
}
