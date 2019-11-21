document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit)

  const button = document.querySelector('#deleteAll');
  button.addEventListener('click', handleButtonDelete)
});

const handleFormSubmit = function (event){
  event.preventDefault();
  console.log(event.target.title.value);
  console.log(event.target.author.value);
  console.log(event.target.category.value);

  // const newListItem = document.createElement('li');
  // newListItem.classList.add('book')


  const titleListItem = document.createElement('li');
  titleListItem.classList.add('deleteItems');
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

  const unorderedList = document.querySelector('#reading-list');
  unorderedList.appendChild(titleListItem);
};

const handleButtonDelete = function () {
  const form = document.querySelector('.deleteItems');
  form.remove();
}
