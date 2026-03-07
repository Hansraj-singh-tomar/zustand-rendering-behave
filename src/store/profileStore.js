import { create } from "zustand";

const useProfileStore = create((set) => ({
  profile: {
    name: "Hansraj",
    age: 25,
  },
  todos: ["Learn React", "Learn Zustand"],

  incrementAge: () =>
    set((state) => ({
      profile: { ...state.profile, age: state.profile.age + 1 },
    })),

  changeName: (name) =>
    set((state) => ({
      profile: { ...state.profile, name },
    })),

  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, todo],
    })),
}));

export default useProfileStore;
