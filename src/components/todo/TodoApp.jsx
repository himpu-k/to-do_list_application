import Navbar from 'components/nav/Navbar';
import Header from './Hearder';
import TodosLogic from './TodosLogic';

const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Navbar />
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
};

export default TodoApp;
