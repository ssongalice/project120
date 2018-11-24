//1. A content Exercise of Letting Variables Be Variables
const name = 'Songyi';
let age = 30;
const dateOfBirth = '1991/10/24';


// 2. Const/Let Refactoring
const statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
const currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
