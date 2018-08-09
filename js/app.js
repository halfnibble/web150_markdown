import { Pumpkin } from './pumpkin.js';
import { Editor } from './editor.js';
import { PreviewField } from './form.js';

let pumpkie = new Pumpkin(),
    author = new PreviewField('author', 'authorOutput'),
    publishedDate = new PreviewField('publishedDate', 'publishedDateOutput'),
    editor = new Editor('markdownInput', 'markdownOutput');
