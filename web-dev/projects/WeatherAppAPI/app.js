$(document).ready(() => {
	const submitButton = $('#submit-location')
    const display =$('#display-value')
    // const location = $('#Location-input')[0].value
    // console.log(location)
	const URL =
		'https://api.weatherapi.com/v1/current.json?key=9f5a9fa7954a4ee6b0a185658232106&q=Afghanistan'

	fetch(URL)
		.then((res) => res.json())
		.then((res) => console.log(res))
		.catch((res) => console.log(res))

	//1. Link html to app.js
	//2. Add jQuery to app.js
	//3. Write on submit handler for button
	//4. On submit should log the input

	    submitButton.on('click', (e) => {
					e.preventDefault()
                    const location = $('#Location-input')[0].value
										console.log(location)
					// console.log('hello mardom be kar')
                    displayWeatherData(objCityData)
				})
                function displayWeatherData(data){
                    display.text(`It is Cold in your Location Nilo :${data.current.temp_f}`)

                }
                

	})

         
       const objCityData = {
					location: {
						name: 'London',
						region: 'City of London, Greater London',
						country: 'United Kingdom',
						lat: 51.52,
						lon: -0.11,
						tz_id: 'Europe/London',
						localtime_epoch: 1687376199,
						localtime: '2023-06-21 20:36',
					},
					current: {
						last_updated_epoch: 1687375800,
						last_updated: '2023-06-21 20:30',
						temp_c: 22,
						temp_f: 71.6,
						is_day: 1,
						condition: {
							text: 'Partly cloudy',
							icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
							code: 1003,
						},
						wind_mph: 9.4,
						wind_kph: 15.1,
						wind_degree: 240,
						wind_dir: 'WSW',
						pressure_mb: 1017,
						pressure_in: 30.03,
						precip_mm: 0,
						precip_in: 0,
						humidity: 57,
						cloud: 50,
						feelslike_c: 24.5,
						feelslike_f: 76.2,
						vis_km: 10,
						vis_miles: 6,
						uv: 6,
						gust_mph: 10.3,
						gust_kph: 16.6,
					},
				}
	