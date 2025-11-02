import {DocumentContext} from './document/document-context';
import {DraftState} from './document/states/draft-state';

const document = new DocumentContext(new DraftState(null as any));
(document as any).state = new DraftState(document);

document.edit();
document.publish();
document.publish();
document.edit();
