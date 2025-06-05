'use client';

import { useState } from 'react';

export default function EditableListPage() {
  const [items, setItems] = useState([
    { id: 1, name: '사과', count: 3 },
    { id: 2, name: '바나나', count: 5 },
  ]);

  const [newItem, setNewItem] = useState({ name: '', count: 0 });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', count: 0 });

  // 새 항목 추가
  const handleAdd = () => {
    if (!newItem.name.trim()) return;
    const id = Date.now();
    setItems([...items, { ...newItem, id }]);
    setNewItem({ name: '', count: 0 });
  };

  // 항목 수정 모드로 전환
  const handleEdit = (item) => {
    setEditingId(item.id);
    setEditForm({ name: item.name, count: item.count });
  };

  // 수정 저장
  const handleSave = () => {
    setItems(items.map(item => (
      item.id === editingId ? { ...item, ...editForm } : item
    )));
    setEditingId(null);
  };

  // 삭제
  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">📦 아이템 목록</h1>

      {/* 입력 폼 */}
      <div className="mb-6 flex gap-2">
        <input
          placeholder="이름"
          className="border px-2 py-1 flex-1"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          className="border px-2 py-1 w-24"
          value={newItem.count}
          onChange={(e) => setNewItem({ ...newItem, count: parseInt(e.target.value || 0) })}
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-3 rounded">추가</button>
      </div>

      {/* 목록 렌더링 */}
      {items.map(item => (
        <div key={item.id} className="flex items-center gap-3 mb-2">
          {editingId === item.id ? (
            <>
              <input
                className="border px-2 py-1 flex-1"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
              />
              <input
                type="number"
                className="border px-2 py-1 w-24"
                value={editForm.count}
                onChange={(e) => setEditForm({ ...editForm, count: parseInt(e.target.value || 0) })}
              />
              <button onClick={handleSave} className="bg-green-500 text-white px-2 rounded">저장</button>
            </>
          ) : (
            <>
              <span className="flex-1">{item.name}</span>
              <span className="w-16 text-center">{item.count}</span>
              <button onClick={() => handleEdit(item)} className="bg-yellow-400 px-2 rounded">수정</button>
            </>
          )}
          <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-2 rounded">삭제</button>
        </div>
      ))}
    </div>
  );
}