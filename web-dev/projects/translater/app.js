$(document).ready(() => {
	const outputText = $('#output-text')
	const myButton = $('#myButton')
	const $switchKey = $('#switchTextToFile')
	const $loginLogo = $('#loginLogo')
	const $fileButton = $('#btnradio2')
	const $textButton = $('#btnradio1')

	const url = `https://text-translator2.p.rapidapi.com/translate`

	myButton.on('click', () => {
		const inputText = $('#input-text').val()

		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
				'X-RapidAPI-Key': 'fd0a155d5emsh47f90e73f15b9e3p11116djsn0bf6edc539ce',
				'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
			},
			body: new URLSearchParams({
				source_language: 'en',
				target_language: 'fa',
				text: inputText,
			}),
		}
		fetch(url, options) // this is the API call
			.then((res) => res.json()) //output of API
			.then((res) => {
				let translate = res.data.translatedText
				outputText.append(res.data.translatedText)
			})

			.catch((err) => console.log(err))
	})

	hiddenElements()
	onClickButtons()
	// extractText();

	function hiddenElements() {
		$('#loginInfo').hide()
		//  $('#formFileLg').hide();
		$('#changeFormFileLg').hide()
	}

	function onClickButtons() {
		$loginLogo.on('click', (e) => {
			e.preventDefault()
			$('#switchTextToFile').hide()
			// $('#formFileLg').hide()
			$('#btn').hide()
			$('#changeFormFileLg').hide()
			$('#loginInfo').show()
		})

		$fileButton.on('click', (e) => {
			e.preventDefault()
			$('#switchTextToFile').hide()
			// $('#formFileLg').show()
			$('#changeFormFileLg').show()
		})

		$textButton.on('click', (e) => {
			e.preventDefault()
			$('#changeFormFileLg').hide()
			$('#switchTextToFile').show()
		})
	}

	$('#extract-text-button').on('click', (e) => {
		e.preventDefault()
		const fileInput = $('#formFileLg')[0]
		const file = fileInput.files[0]
		console.log(file, fileInput)
		if (file) {
			const fileReader = new FileReader()

			fileReader.onload = function () {
				const typedArray = new Uint8Array(this.result)

				//  function in PDF.js Load the PDF file using PDF.js. represents the PDF file data.
				// pdfjsLib.GlobalWorkerOptions.workerSrc = 'path/to/pdf.worker.js'
				pdfjsLib.getDocument(typedArray).promise.then(function (pdf) {
					const textContainer = $('#text-container')
					textContainer.textContent = '' // Clear previous content

					const numPages = pdf.numPages
					const pagePromises = []

					// Extract text from each page
					for (let i = 1; i <= numPages; i++) {
						pagePromises.push(
							pdf.getPage(i).then(function (page) {
								return page.getTextContent().then(function (textContent) {
									const textItems = textContent.items.map(function (item) {
										return item.str
									})

									const text = textItems.join(' ')
									textContainer.text(textContainer.text() + text + '\n')
								})
							})
						)
					}

					Promise.all(pagePromises).then(function () {
						console.log('Text extraction complete.')
						//  displayExtractedText(textContainer.textContent)
					})
				})
			}

			fileReader.readAsArrayBuffer(file)
		}
	})

	// function displayExtractedText(text) {
	// 	const outputContainer =$('#output-container')
	// 	outputContainer.textContent = text
	// }
});
  