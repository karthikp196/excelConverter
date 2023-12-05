const data = {};

const sheetData = data['Sheet1'];
let result = {};
const KeyName = 'P_REFERENCEVALUE';
const firstValue = 'Queue Key';
const secondValue = 'Assignee';

sheetData.forEach((sheet) => {
  const referenceValue = sheet[KeyName];
  const res = {
    [referenceValue]: {
      queueKey: sheet[firstValue],
      assignee: sheet[secondValue],
    },
  };
  console.log(res);
});
