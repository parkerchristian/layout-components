// append a ul
// append li w/ 'spot', 'rover', 'bingo', and 'joe'
import styles from './index.css';

const root = document.getElementById('root');
const ul = document.createElement('ul');
ul.className = styles.dogs;
root.appendChild(ul);

['spot', 'rover', 'bingo', 'joe']
  .forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
  });

// const li = document.createElement('li');
// const a = document.createElement('li');
// const b = document.createElement('li');
// const c = document.createElement('li');

// li.textContent = 'spot';
// a.textContent = 'rover';
// b.textContent = 'bingo';
// c.textContent = 'joe';

// ul.appendChild(li).style.color = 'blue';
// ul.appendChild(a);
// ul.appendChild(b);
// ul.appendChild(c);
// root.appendChild(ul);
