import Header from "./Header"

export default {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Текст заголовка сторінки",
    },
  },
}

/**
 * Базовий варіант заголовка.
 * Використовується на стартовій сторінці.
 */
export const StartPage = {
  args: {
    title: "Sudoku Game",
  },
}

/**
 * Варіант для сторінки гри.
 */
export const GamePage = {
  args: {
    title: "Game Page",
  },
}

