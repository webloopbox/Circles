import ReactDOM from 'react-dom';
import './styles/index.scss';
import { Board } from './Board';
import { AppProvider } from './context';

ReactDOM.render(
    <AppProvider>
      <Board />
    </AppProvider>,
  document.getElementById('root')
)