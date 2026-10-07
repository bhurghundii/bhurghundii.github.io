/* eslint-disable no-console */

import WorkPublisher from '../services/WorkPublisher';
import PagePublisher from '../services/PagePublisher';

const args: string[] = process.argv.slice(2);
const target: string = args[0];
const mode: string = args[1];

switch (target) {
  case 'work':
    console.log('\x1b[36m%s\x1b[0m', 'Run WorkPublisher...');

    if (!mode || mode === 'all') {
      console.log('Publish all works: WorkPublisher.publishAllWorks()');
      WorkPublisher.publishAllWorks();
      console.log('\x1b[36m%s\x1b[0m', 'Done!');
    } else {
      console.log('\x1b[31m%s\x1b[0m', `ERR! Unknown mode '${mode}'.`);
    }
    break;

  case 'page':
    console.log('\x1b[36m%s\x1b[0m', 'Run PagePublisher...');

    console.log('Publish all pages: PagePublisher.publishIndex()');
    PagePublisher.publishIndex();
    console.log('Publish all pages: PagePublisher.publishContact()');
    PagePublisher.publishContact();
    break;

  default:
    console.log('\x1b[31m%s\x1b[0m', `ERR! Unknown target '${target}'.`);
}

console.log('');
