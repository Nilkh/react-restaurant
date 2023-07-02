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
		console.log(location)

         


		const URL = `https://api.weatherapi.com/v1/current.json?key=9f5a9fa7954a4ee6b0a185658232106&q=${location}`
		fetch(URL)
			.then((res) => res.json())
			.then((res) => {
                 console.log(res.current.temp_f)
                displayWeatherData(location ,res)

                 const fahrenheitButton = Math.round(res.current.temp_f)

				const celsiusButton = Math.round(res.current.temp_c)
                
            
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
			.catch((res) => console.log(res))

        })
	function displayWeatherData(location ,res) {
		// display.text(`It is Cold in ${location} Nilo ${res.current.temp_f}`)
    }
	
    
    buttonClear.on('click' ,(e) => {
        e.preventDefault()
        weatherList.text('')
    })

    // fahrenheitButton.on('submit', (e) =>{
    //     e.preventDefault()
    //     weatherList.text(res.current.temp_f)
    // })



   
		celsiusButton.on('click', (e) => {
			e.preventDefault()
			weatherList.text()
		})
   

})
	




   