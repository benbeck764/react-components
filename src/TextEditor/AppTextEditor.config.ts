// Mirroring Evernote

export const toolbarOptions = [
  ["bold", "italic", "underline"], // toggled buttons
  [{ list: "ordered" }, { list: "bullet" }], // lists
  [{ align: [] }, { indent: "+1" }, { indent: "-1" }], // align/indent/outdent
  ["strike", { script: "super" }, { script: "sub" }], // strike-through/subscript/superscript
  ["clean"], // remove formatting button
];

// [TODO]: Mobile toolbar?
export const toolbarOptionsMobile = [
  [
    "bold",
    "italic",
    "underline",
    { list: "ordered" },
    { list: "bullet" },
    { align: [] },
    { indent: "+1" },
    { indent: "-1" },
    "strike",
    { script: "super" },
    { script: "sub" },
    "clean",
  ],
];

export const editorFormats = [
  // Enabled Formats
  "bold",
  "italic",
  "strike",
  "script",
  "underline",
  "indent",
  "list",
  "align",

  // Disabled Formats
  //'size',
  //'link',
  //'font',
  //'header',
  //'color',
  //'background',
  //'blockquote',
  //'direction',
  //'code-block',
  //'code',
  //'formula',
  //'image',
  //'video'
];
