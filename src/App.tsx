import ExampleTheme from './ExampleTheme';
import { AppRouter } from './router/router';
import { LexicalComposer } from '@lexical/react/LexicalComposer';

const editorConfig = {
  namespace: 'App Editor', // Nome único para o namespace do editor
  theme: ExampleTheme, // Defina seu tema ou outros valores de configuração aqui
  nodes: [], // Defina os nós que você deseja usar
  onError(error: Error) {
    console.error(error); // Defina o comportamento para erros
  },
};

function App() {
  return (
    <>
      <LexicalComposer initialConfig={editorConfig}>
        <AppRouter />
      </LexicalComposer>
    </>
  );
}

export default App;
