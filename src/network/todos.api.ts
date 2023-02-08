import { ITodo } from "../types/todos.types";

const { VITE_SERVER_URL } = import.meta.env;

console.log(`SERVER_URL: ${VITE_SERVER_URL}`);
console.log(`MODE: ${import.meta.env.MODE}`);

// get all tasks
export async function sendAllTasks(tasks: ITodo[]): Promise<any> {
  //convert to server items?
  const endpoint = `${VITE_SERVER_URL}/api/tasks`;
  fetch(endpoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({tasks}),
  });
}
export async function getAllTasks(): Promise<ITodo[]> {
  const endpoint = `${VITE_SERVER_URL}/api/tasks`;
  const response = convertTodos(
    (await (await fetch(endpoint)).json()) as ServerTodo[]
  );
  console.log({ response });
  return response;
}

interface ServerTodo {
  _id: string;
  title: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

function convertTodos(serverItems: ServerTodo[]): ITodo[] {
  return serverItems.map((item: ServerTodo) => {
    return {
      id: item._id,
      title: item.title,
      completed: item.done,
      show: true,
    };
  });
}

/*
    {
        "_id": "63bf05ba462ab24aeeef173a",
        "title": "Buy milk",
        "done": false,
        "createdAt": "2023-01-11T18:53:46.598Z",
        "updatedAt": "2023-01-11T18:53:46.598Z",
        "__v": 0
    },


     ITodo {
        id: string;
        title: string;
        completed: boolean;
        show: boolean;
    }
*/

// get all tasks
export async function createTask(title: string): Promise<any> {

  const endpoint = `${VITE_SERVER_URL}/api/tasks`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({title}),
  });
  console.log({response});
  
}
