import React, { useState } from "react";
import Modal from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};
/**
 * Модальне вікно для завершення гри.
 * Показується коли всі клітинки Sudoku заповнені правильно.
 * Містить:
 * - Результат гри
 * - Кнопку "Почати заново" — починає гру спочатку
 * - Кнопку "Закрити" — закриває модалку та повертає на гру
 */
export const FinishModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{
      margin: "2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "200px",
      border: "1px dashed #ccc",
      padding: "1rem"
    }}>
      <Modal
        isOpen={isOpen}
        type="finish"
        score={250}
        onRestart={() => alert("Почати заново")}
        onClose={() => setIsOpen(false)}
        usePortal={false} 
      />
    </div>
  );
};
/**
 * Модальне вікно меню гри.
 * Можна активувати в будь-який момент під час гри.
 * Містить:
 * - "Почати нову гру" — перезапускає гру
 * - "Продовжити гру" — закриває модалку і повертає до гри
 */
export const MenuModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{
      margin: "2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "200px",
      border: "1px dashed #ccc",
      padding: "1rem"
    }}>
      <Modal
        isOpen={isOpen}
        type="menu"
        onRestart={() => alert("Почати нову гру")}
        onClose={() => setIsOpen(false)}
        usePortal={false} 
      />
    </div>
  );
};