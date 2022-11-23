const s='{)'
// const s="{[]}"
// const s="()[]{}"
// const s='{}'
// const s='[['
// const s="(){}}{"
// const s='()'
// const s="([]"
// const s = ')[]';
const isValid = (s) => {
  const temp = [...s];
  if (temp.length < 2) return false;
  const validAnswers = ['{}', '[]', '()'];
  const opening = [];
  const mapping = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  if (!mapping[temp[0]]) return false;
  if (mapping[temp[temp.length - 1]]) return false;
  for (let i = 0; i < temp.length; i++) {
    if (mapping[temp[i]]) {
      opening.push(temp[i]);
    } else {
      if (!validAnswers.includes(opening[opening.length - 1] + temp[i])) return false;
      opening.pop();
    }
  }
  return opening.length <= 0;
};


const result = isValid(s);
console.log(result);
