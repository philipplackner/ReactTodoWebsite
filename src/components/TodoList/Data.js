import { v4 as uuid} from 'uuid'

export const todos = [
  {
    id: uuid(),
    title: "Complete online JavaScript course",
    isChecked: true,
  },
  {
    id: uuid(),
    title: "Jog around the park 3x",
    isChecked: false,
  },
  {
    id: uuid(),
    title: "10 minutes meditation",
    isChecked: false,
  },
  {
    id: uuid(),
    title: "Read for 1 hour",
    isChecked: false,
  },
  {
    id: uuid(),
    title: "Pick up groceries",
    isChecked: false,
  },
  {
    id: uuid(),
    title: "Complete Todo App on Frontend Mentor",
    isChecked: false,
  },
];