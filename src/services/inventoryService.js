const API_URL = import.meta.env.VITE_API_URL;

export async function getAllInventories() {
  const res = await fetch(`${API_URL}/inventories`, {
    credentials: 'include'
  });
  if (!res.ok) throw new Error("Ошибка при загрузке инвентаризаций");
  return res.json();
}

export async function createInventory(data) {
  const res = await fetch(`${API_URL}/inventories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Ошибка при создании инвентаризации");
  return res.json();
}

export async function updateInventory(id, data) {
  const res = await fetch(`${API_URL}/inventories/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Ошибка при обновлении инвентаризации");
  return res.json();
}

export async function deleteInventory(id) {
  const res = await fetch(`${API_URL}/inventories/${id}`, { 
    method: "DELETE",
    credentials: 'include'
  });
  if (!res.ok) throw new Error("Ошибка при удалении инвентаризации");
  return res.json();
}
