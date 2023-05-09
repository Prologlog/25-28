let notesList = document.querySelector('#notes');
let createButton = document.querySelector('#newNote');
let textArea = document.querySelector('#area');
let saveButton = document.querySelector('#save');
let counter = 3;
createButton.addEventListener('click',func)
function func(){
	let newNote = document.createElement('li');
  	counter++; 
  	newNote.setAttribute('data-key', counter);
  	newNote.innerHTML = `<span class="open">запись ${counter}</span><span class="remove">X</span>`
  	notesList.appendChild(newNote);
}
saveButton.addEventListener('click', func2)
function func2() {
	let currentNote = notesList.querySelector('.active');
	let spans = currentNote.getElementsByTagName('span');
for (let i = 0; i < spans.length; i++) {
  if (spans[i].classList.contains('open')) {
    spans[i].textContent = textArea.value;

  }
}
}
notesList.addEventListener('click', func3)
function func3(event){
  if (event.target.classList.contains('open')) {
    let activeNote = notesList.querySelector('.active');
    if (activeNote) {
      activeNote.classList.remove('active');
    }
    event.target.parentNode.classList.add('active');
    textArea.value = event.target.textContent;
  }
}
notesList.addEventListener('click',func4) 
function func4(event){
  if (event.target.classList.contains('remove')) {
    event.target.parentNode.remove();
  }
}