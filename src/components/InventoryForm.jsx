import { useState } from "react";

export default function InventoryForm({ onSubmit, initialData = {} }) {
  const [form, setForm] = useState({
    title: initialData.title || "",
    description: initialData.description || "",
    category: initialData.category || "",
    tags: initialData.tags?.join(", ") || "",
    isPublic: initialData.isPublic || false
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim()) {
      setError("Название обязательно");
      return;
    }
    const payload = {
      ...form,
      tags: form.tags.split(",").map(t => t.trim()).filter(Boolean)
    };
    onSubmit(payload);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
      {error && <p className="text-red-500">{error}</p>}

      <div>
        <label className="block">Название *</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block">Описание</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block">Категория</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block">Теги (через запятую)</label>
        <input
          type="text"
          name="tags"
          value={form.tags}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="isPublic"
            checked={form.isPublic}
            onChange={handleChange}
          />{" "}
          Сделать публичной
        </label>
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4">
        Сохранить
      </button>
    </form>
  );
}
