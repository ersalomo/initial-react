import Home from './components/Home';
import Input from './components/Elements/Input';
import './index.css';

export default function App() {
  let num = 0;
  [3, 4, 2].forEach((e) => {
    num += e;
  });

  return (
    <main className="bg-blue-900">
      <Input />
    </main>
  );
}
