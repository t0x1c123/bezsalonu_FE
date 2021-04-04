import React, { useEffect, useRef, useState } from 'react';

export default function TextEditor() {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react'),
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
      language: require('@ckeditor/ckeditor5-build-classic/build/translations/cs'),
    };
    setEditorLoaded(true);
  }, []);
  return editorLoaded && CKEditor ? (
    <CKEditor.CKEditor
      editor={ClassicEditor}
      config={{
        language: 'cs',
      }}
      data="<p>Hello from CKEditor 5!</p>"
      onInit={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
      }}
    />
  ) : (
    <div>Editor loading</div>
  );
}
