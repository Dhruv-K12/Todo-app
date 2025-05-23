import { createContext, ReactNode, useContext, useState } from "react";

// 1. Define the context type
export interface taskType{
  name: string;
  des?: string;
  catogary:string;
  id: string;
  isCompleted:boolean;
}
interface TodoContextType {
  modal: boolean;
  showModal: (modal: boolean) => void;
  tasks:taskType[];
  setTasker: React.Dispatch<React.SetStateAction<taskType[]>>

}

// 2. Create the context
export const TodoContext = createContext<TodoContextType | undefined>(undefined);

// 3. Create the provider
export const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<boolean>(false);
  const [tasks, setTasks] = useState<taskType[]>([]);
  const value = {
    modal,
    showModal: setModal,
    tasks,
    setTasker:setTasks ,// <- using the correct function name
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

// 4. Create a custom hook to use the context
export const useTodoContext = (): TodoContextType => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodoContext must be used within a TodoContextProvider");
  }

  return context;
};
