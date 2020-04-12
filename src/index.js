// @ts-check

import codeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/php/php.js';
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/selection/active-line.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/scroll/scrollpastend.js';

codeMirror(document.getElementById('editor'), {
  lineNumbers: true,
  tabSize: 2,
  // mode: 'text/x-php',
  mode: 'javascript',
  autoCloseBrackets: true,
  styleActiveLine: true,
  matchBrackets: true,
  scrollPastEnd: true,
});
