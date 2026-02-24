import Modal from "./Modal";

/**
 * Цей файл описує історії (stories) для компонента Modal, який використовується в грі для відображення різних станів модального вікна.
 */
export default {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "100vh", padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isOpen: {
      control: "boolean", 
      description: "Визначає, чи відображається модальне вікно на екрані.",
    },
    type: {
      control: "radio", 
      options: ["finish", "menu"],
      description: "Визначає внутрішній контент модалки: екран завершення або меню налаштувань",
    },
    score: {
      control: "number", 
      description: "Кількість набраних балів.",
    },
    usePortal: {
      control: "boolean",
      description: "Визначає, чи рендерити модалку.",
    },
  },
};

/**
 * Варіант 1 Модальне вікно завершення гри.
 * Демонструє стан, коли гравець пройшов рівень.
 * Відображає фінальний рахунок та кнопку для рестарту (Почати заново) .
 */
export const FinishModal = {
  args: {
    isOpen: true,
    type: "finish",
    score: 120, 
    usePortal: false, 
    onRestart: () => console.log("Клік: Перезапуск гри"),
    onClose: () => console.log("Клік: Закрити модалку"),
    onGoHome: () => console.log("Клік: На головний екран"),
  },
};

/**
 * Варіант 2 Модальне меню гри.
 * Демонструє кнопки рестарт гри, головний єкран та продовжити.
 * Містить форму (Formik) для зміни складності гри.
 */
export const MenuModal = {
  args: {
    isOpen: true,
    type: "menu",
    score: 0,
    usePortal: false,
    onRestart: () => console.log("Клік: Перезапуск з новими налаштуваннями"),
    onClose: () => console.log("Клік: Продовжити гру"),
    onGoHome: () => console.log("Клік: Вихід в меню"),
  },
};

/**
 * Варіант 3 Закритий стан модального вікна.
 */
export const ClosedModal = {
  args: {
    isOpen: false, 
    type: "finish",
    score: 50,
    usePortal: false,
  },
};