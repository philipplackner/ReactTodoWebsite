import TitleBar from "./components/TitleBar";
import './App.css'
import { BackgroundContainer, MainContainer } from "./components/Background/BackgroundElements";
import TodoBar from "./components/TodoBar";
import TodoList from "./components/TodoList";
import TodoListProvider from "./components/TodoList/TodoListContext";
import { TitleBarProvider } from "./components/TitleBar/TitleBarContext";
import Background from "./components/Background";

function App() {

  return (
    <TitleBarProvider>
      <Background>
        <TodoListProvider>
          <MainContainer>
            <TitleBar />
            <TodoBar />
            <TodoList />
          </MainContainer>
        </TodoListProvider>
      </Background>
    </TitleBarProvider>
  );
}

export default App;
