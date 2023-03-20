const passwordForm = document.querySelector('form');
		const passwordInput = document.querySelector('#password');
		const displayArea = document.querySelector('#display-area');
		const inputForm = document.querySelector('#input-form');
		const newEntryInput = document.querySelector('#new-entry');
		const lockButton = document.querySelector('#lock-button');
        const password = 'mypassword';
		let diaryData = [];
        function handlePasswordSubmit(event) {
			event.preventDefault();
			const enteredPassword = passwordInput.value;
			if (enteredPassword === password) {
				showDiaryData();
			} else {
				alert('Incorrect password!');
			}
			passwordInput.value = '';
		}
        function showDiaryData() {
			displayArea.innerHTML = '';
			if (diaryData.length === 0) {
				displayArea.textContent = 'No diary entries yet.';
			} else {
				diaryData.forEach(entry => {
					const entryElement = document.createElement('p');
					entryElement.textContent = entry;
					displayArea.appendChild(entryElement);
				});
			}
			displayArea.style.display = 'block';
			inputForm.style.display = 'block';
		}
        function handleInputSubmit(event) {
			event.preventDefault();
			const newEntry = newEntryInput.value.trim();
			if (newEntry !== '') {
				diaryData.push(newEntry);
				saveDiaryData();
				showDiaryData();
				newEntryInput.value = '';
			}
		}
        function saveDiaryData() {
        }