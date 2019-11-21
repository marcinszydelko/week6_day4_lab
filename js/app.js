document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit)
});

const handleFormSubmit = function (event){
  event.preventDefault();
  console.log(event.target.title.value);
  console.log(event.target.author.value);
  console.log(event.target.category.value);

  // const newListItem = document.createElement('li');
  // newListItem.classList.add('book')


  const titleListItem = document.createElement('li');
  const book = document.createElement('article');

  const title = document.createElement('p');
  title.textContent = `Title: ${event.target.title.value}`;
  book.appendChild(title);


  const author = document.createElement('p');
  author.textContent = `Author: ${event.target.author.value}`;
  book.appendChild(author);

  const category = document.createElement('p');
  category.textContent = `Category: ${event.target.category.value}`;
  book.appendChild(category);

  titleListItem.appendChild(book);

  const unorderList = document.querySelector('#reading-list');
  unorderList.appendChild(titleListItem);
};
