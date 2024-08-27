import { useState, useEffect } from 'react';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import ToolbarPlugin from '../../plugins/ToolbarPlugin';
import { $getRoot } from 'lexical'; // Importação para manipulação do conteúdo do editor
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

const placeholder = 'Enter some rich text...';

export const Home = () => {
  const [editorContent, setEditorContent] = useState(''); // Estado para armazenar o conteúdo do editor
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor) return;

    // Listener para capturar mudanças no editor
    editor.registerUpdateListener(() => {
      editor.update(() => {
        const root = $getRoot();
        const text = root.getTextContent(); // Obtém o texto do editor
        setEditorContent(text);
      });
    });
  }, [editor]);

  const handleSave = () => {
    // Aqui você pode salvar o conteúdo onde quiser, por exemplo, no localStorage ou em um backend
    console.log('Conteúdo salvo:', editorContent);
    localStorage.setItem('editorContent', editorContent); // Exemplo de salvamento no localStorage
  };

  return (
    <div className="editor-container">
      <ToolbarPlugin />
      <div className="editor-inner">
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className="editor-input"
              aria-placeholder={placeholder}
              placeholder={<div className="editor-placeholder">{placeholder}</div>}
            />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
      </div>
      <button onClick={handleSave}>Salvar Conteúdo</button> {/* Botão para salvar o conteúdo */}
    </div>
  );
};
