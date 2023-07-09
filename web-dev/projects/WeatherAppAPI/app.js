$(document).ready(() => {
    const submitButton = $('#submit-location')
	const displayValue= $('#display-value')
    const buttonClear = $('#clear-info')
    const weatherList = $("#weather-list")
    const fahrenheitButton = $('#Fahrenheit-input')
    const celsiusButton = $('#Celsius-input')
    

	submitButton.on('click', (e) => {
		e.preventDefault()
		const location = $('#Location-input')[0].value
		

         


		const URL = `https://api.weatherapi.com/v1/current.json?key=9f5a9fa7954a4ee6b0a185658232106&q=${location}`
		fetch(URL)
			.then((res) => res.json())
			.then((res) => {
                // displayWeatherData(location ,res)

                 const fahrenheitTemp = Math.round(res.current.temp_f)

				const celsiusTemp = Math.round(res.current.temp_c)
                
            
               weatherList.append(
			   `<p> Country: ${res.location.country} </p>
                <p> Region: ${res.location.name}</p>
                 <p>temp_f: ${res.current.temp_f}</p>
                 <p> localtime: ${res.location.localtime} </p>
                 <p> humidity: ${res.current.humidity}</p>
                 <p> Latitude: ${res.location.lat} </p>
                 <p> Day: ${res.current.is_day} </p>`
				)  

               
            })
			.catch((err) => console.log(err.message))

        })
	 
    
    buttonClear.on('click' ,(e) => {
        e.preventDefault()
        weatherList.text('')
    })




     celsiusButton.on('click', () => {
				const tempElements = $('.temp-c').get()
				tempElements.forEach(function (e) {
				const celsiusTemp = Math.round($(e).data('celsius'))
				$(e).text(`${celsiusTemp} °C`)
				console.log($(e).data('celsius'))
				})
			})

    


   
		


        fahrenheitButton.on('click', () => {
					const tempElements = $('.temp-f').get()
					tempElements.forEach(function (e) {
						const fahrenheitTemp = Math.round($(e).data('fahrenheit'))
						$(e).text(`${fahrenheitTemp} °F`)
					});
				});
   

});
	




   