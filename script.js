document.addEventListener('DOMContentLoaded', function() {
    const notesContainer = document.getElementById('notes-container');
    const noteInput = document.getElementById('note-input');
    const addButton = document.getElementById('add-button');
  
    addButton.addEventListener('click', function() {
      const noteText = noteInput.value;
      if (noteText.trim() !== '') {
        const noteElement = createNoteElement(noteText);
        notesContainer.appendChild(noteElement);
        noteInput.value = '';
      }
    });
  
    function createNoteElement(noteText) {
      const noteElement = document.createElement('div');
      noteElement.classList.add('note');
  
      const noteContent = document.createElement('p');
      noteContent.textContent = noteText;
  
      const noteActions = document.createElement('div');
      noteActions.classList.add('note-actions');
  
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', function() {
        const parentNote = this.parentNode.parentNode;
        const noteContent = parentNote.querySelector('p');
        const updatedNoteText = prompt('Edit note', noteContent.textContent);
        if (updatedNoteText !== null && updatedNoteText.trim() !== '') {
          noteContent.textContent = updatedNoteText;
        }
      });
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        const parentNote = this.parentNode.parentNode;
        notesContainer.removeChild(parentNote);
      });
  
      noteActions.appendChild(editButton);
      noteActions.appendChild(deleteButton);
  
      noteElement.appendChild(noteContent);
      noteElement.appendChild(noteActions);
  
      return noteElement;
    }
  });
  