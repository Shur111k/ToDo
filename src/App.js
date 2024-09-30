import styles from './App.module.css';
import { TodoWrapper } from './components/index';

function App() {
  return (
    <div className={styles.App}>
      <TodoWrapper />
    </div>
  );
}

export default App;
