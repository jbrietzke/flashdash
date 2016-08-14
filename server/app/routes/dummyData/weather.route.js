'use strict';
var router = require('express').Router();
module.exports = router;

// Yahoo Stocks dummy data

router.get('/', function (req, res, next) {
  let data = {
  "city": {
    "id": 5128581,
    "name": "New York",
    "coord": {
      "lon": -74.005966,
      "lat": 40.714272
    },
    "country": "US",
    "population": 0,
    "sys": {
      "population": 0
    }
  },
  "cod": "200",
  "message": 0.0456,
  "cnt": 40,
  "list": [
    {
      "dt": 1471208400,
      "main": {
        "temp": 303.08,
        "temp_min": 300.399,
        "temp_max": 303.08,
        "pressure": 1024.15,
        "sea_level": 1027.22,
        "grnd_level": 1024.15,
        "humidity": 90,
        "temp_kf": 2.68
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 1.62,
        "deg": 310.512
      },
      "rain": {
        "3h": 7.295
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-14 21:00:00"
    },
    {
      "dt": 1471219200,
      "main": {
        "temp": 301.47,
        "temp_min": 299.688,
        "temp_max": 301.47,
        "pressure": 1024.99,
        "sea_level": 1028.32,
        "grnd_level": 1024.99,
        "humidity": 94,
        "temp_kf": 1.79
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 1.12,
        "deg": 291.5
      },
      "rain": {
        "3h": 0.87
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-15 00:00:00"
    },
    {
      "dt": 1471230000,
      "main": {
        "temp": 299.77,
        "temp_min": 298.874,
        "temp_max": 299.77,
        "pressure": 1027,
        "sea_level": 1030.41,
        "grnd_level": 1027,
        "humidity": 90,
        "temp_kf": 0.89
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 2.27,
        "deg": 298
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-15 03:00:00"
    },
    {
      "dt": 1471240800,
      "main": {
        "temp": 297.5,
        "temp_min": 297.5,
        "temp_max": 297.5,
        "pressure": 1028.28,
        "sea_level": 1031.63,
        "grnd_level": 1028.28,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.56,
        "deg": 308.504
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-15 06:00:00"
    },
    {
      "dt": 1471251600,
      "main": {
        "temp": 296.844,
        "temp_min": 296.844,
        "temp_max": 296.844,
        "pressure": 1029.1,
        "sea_level": 1032.46,
        "grnd_level": 1029.1,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.11,
        "deg": 302.505
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-15 09:00:00"
    },
    {
      "dt": 1471262400,
      "main": {
        "temp": 297.802,
        "temp_min": 297.802,
        "temp_max": 297.802,
        "pressure": 1030.48,
        "sea_level": 1033.88,
        "grnd_level": 1030.48,
        "humidity": 94,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 1.66,
        "deg": 334.502
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-15 12:00:00"
    },
    {
      "dt": 1471273200,
      "main": {
        "temp": 299.565,
        "temp_min": 299.565,
        "temp_max": 299.565,
        "pressure": 1031.55,
        "sea_level": 1034.86,
        "grnd_level": 1031.55,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.26,
        "deg": 342.501
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-15 15:00:00"
    },
    {
      "dt": 1471284000,
      "main": {
        "temp": 302.399,
        "temp_min": 302.399,
        "temp_max": 302.399,
        "pressure": 1030.81,
        "sea_level": 1034.07,
        "grnd_level": 1030.81,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.43,
        "deg": 241
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-15 18:00:00"
    },
    {
      "dt": 1471294800,
      "main": {
        "temp": 303.265,
        "temp_min": 303.265,
        "temp_max": 303.265,
        "pressure": 1030.07,
        "sea_level": 1033.46,
        "grnd_level": 1030.07,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.56,
        "deg": 222.504
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-15 21:00:00"
    },
    {
      "dt": 1471305600,
      "main": {
        "temp": 301.554,
        "temp_min": 301.554,
        "temp_max": 301.554,
        "pressure": 1030.45,
        "sea_level": 1033.82,
        "grnd_level": 1030.45,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 2.42,
        "deg": 183.002
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-16 00:00:00"
    },
    {
      "dt": 1471316400,
      "main": {
        "temp": 299.019,
        "temp_min": 299.019,
        "temp_max": 299.019,
        "pressure": 1031.7,
        "sea_level": 1034.97,
        "grnd_level": 1031.7,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 44
      },
      "wind": {
        "speed": 2.31,
        "deg": 173.5
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-16 03:00:00"
    },
    {
      "dt": 1471327200,
      "main": {
        "temp": 297.767,
        "temp_min": 297.767,
        "temp_max": 297.767,
        "pressure": 1030.77,
        "sea_level": 1034.05,
        "grnd_level": 1030.77,
        "humidity": 84,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 44
      },
      "wind": {
        "speed": 2.41,
        "deg": 172.001
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-16 06:00:00"
    },
    {
      "dt": 1471338000,
      "main": {
        "temp": 297.383,
        "temp_min": 297.383,
        "temp_max": 297.383,
        "pressure": 1029.77,
        "sea_level": 1033.13,
        "grnd_level": 1029.77,
        "humidity": 94,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 2.18,
        "deg": 165.51
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-16 09:00:00"
    },
    {
      "dt": 1471348800,
      "main": {
        "temp": 295.875,
        "temp_min": 295.875,
        "temp_max": 295.875,
        "pressure": 1030.62,
        "sea_level": 1034.06,
        "grnd_level": 1030.62,
        "humidity": 100,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 0.66,
        "deg": 195.003
      },
      "rain": {
        "3h": 7.645
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-16 12:00:00"
    },
    {
      "dt": 1471359600,
      "main": {
        "temp": 298.629,
        "temp_min": 298.629,
        "temp_max": 298.629,
        "pressure": 1030.12,
        "sea_level": 1033.48,
        "grnd_level": 1030.12,
        "humidity": 98,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 1.48,
        "deg": 174.502
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-16 15:00:00"
    },
    {
      "dt": 1471370400,
      "main": {
        "temp": 300.681,
        "temp_min": 300.681,
        "temp_max": 300.681,
        "pressure": 1029.14,
        "sea_level": 1032.38,
        "grnd_level": 1029.14,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.66,
        "deg": 185.508
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-16 18:00:00"
    },
    {
      "dt": 1471381200,
      "main": {
        "temp": 303.041,
        "temp_min": 303.041,
        "temp_max": 303.041,
        "pressure": 1027.1,
        "sea_level": 1030.61,
        "grnd_level": 1027.1,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 2.77,
        "deg": 172.002
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-16 21:00:00"
    },
    {
      "dt": 1471392000,
      "main": {
        "temp": 297.976,
        "temp_min": 297.976,
        "temp_max": 297.976,
        "pressure": 1026.51,
        "sea_level": 1029.98,
        "grnd_level": 1026.51,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 1.61,
        "deg": 219.507
      },
      "rain": {
        "3h": 11.7
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-17 00:00:00"
    },
    {
      "dt": 1471402800,
      "main": {
        "temp": 296.674,
        "temp_min": 296.674,
        "temp_max": 296.674,
        "pressure": 1026.95,
        "sea_level": 1030.45,
        "grnd_level": 1026.95,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 1.45,
        "deg": 198.003
      },
      "rain": {
        "3h": 2.67
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-17 03:00:00"
    },
    {
      "dt": 1471413600,
      "main": {
        "temp": 296.624,
        "temp_min": 296.624,
        "temp_max": 296.624,
        "pressure": 1025.4,
        "sea_level": 1028.76,
        "grnd_level": 1025.4,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 2.12,
        "deg": 214.501
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-17 06:00:00"
    },
    {
      "dt": 1471424400,
      "main": {
        "temp": 297.305,
        "temp_min": 297.305,
        "temp_max": 297.305,
        "pressure": 1024.32,
        "sea_level": 1027.77,
        "grnd_level": 1024.32,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 3.77,
        "deg": 218.5
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-17 09:00:00"
    },
    {
      "dt": 1471435200,
      "main": {
        "temp": 298.244,
        "temp_min": 298.244,
        "temp_max": 298.244,
        "pressure": 1024.95,
        "sea_level": 1028.3,
        "grnd_level": 1024.95,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 3.46,
        "deg": 234.002
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-17 12:00:00"
    },
    {
      "dt": 1471446000,
      "main": {
        "temp": 299.533,
        "temp_min": 299.533,
        "temp_max": 299.533,
        "pressure": 1024.98,
        "sea_level": 1028.15,
        "grnd_level": 1024.98,
        "humidity": 89,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 3.16,
        "deg": 253
      },
      "rain": {
        "3h": 0.02
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-17 15:00:00"
    },
    {
      "dt": 1471456800,
      "main": {
        "temp": 300.649,
        "temp_min": 300.649,
        "temp_max": 300.649,
        "pressure": 1023.77,
        "sea_level": 1027.01,
        "grnd_level": 1023.77,
        "humidity": 86,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 2.97,
        "deg": 246.501
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-17 18:00:00"
    },
    {
      "dt": 1471467600,
      "main": {
        "temp": 300.827,
        "temp_min": 300.827,
        "temp_max": 300.827,
        "pressure": 1023.03,
        "sea_level": 1026.33,
        "grnd_level": 1023.03,
        "humidity": 83,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 3.22,
        "deg": 265.001
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-17 21:00:00"
    },
    {
      "dt": 1471478400,
      "main": {
        "temp": 298.804,
        "temp_min": 298.804,
        "temp_max": 298.804,
        "pressure": 1023.4,
        "sea_level": 1026.78,
        "grnd_level": 1023.4,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 2.86,
        "deg": 269.002
      },
      "rain": {
        "3h": 0.04
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-18 00:00:00"
    },
    {
      "dt": 1471489200,
      "main": {
        "temp": 297.672,
        "temp_min": 297.672,
        "temp_max": 297.672,
        "pressure": 1024.29,
        "sea_level": 1027.72,
        "grnd_level": 1024.29,
        "humidity": 88,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 2.46,
        "deg": 291.502
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-18 03:00:00"
    },
    {
      "dt": 1471500000,
      "main": {
        "temp": 297.049,
        "temp_min": 297.049,
        "temp_max": 297.049,
        "pressure": 1024.42,
        "sea_level": 1027.74,
        "grnd_level": 1024.42,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 1.95,
        "deg": 325.001
      },
      "rain": {
        "3h": 0.0225
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-18 06:00:00"
    },
    {
      "dt": 1471510800,
      "main": {
        "temp": 295.606,
        "temp_min": 295.606,
        "temp_max": 295.606,
        "pressure": 1024.2,
        "sea_level": 1027.62,
        "grnd_level": 1024.2,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 2.36,
        "deg": 3.50061
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-18 09:00:00"
    },
    {
      "dt": 1471521600,
      "main": {
        "temp": 295.644,
        "temp_min": 295.644,
        "temp_max": 295.644,
        "pressure": 1024.97,
        "sea_level": 1028.39,
        "grnd_level": 1024.97,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 1.85,
        "deg": 359.004
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-18 12:00:00"
    },
    {
      "dt": 1471532400,
      "main": {
        "temp": 297.06,
        "temp_min": 297.06,
        "temp_max": 297.06,
        "pressure": 1025.33,
        "sea_level": 1028.64,
        "grnd_level": 1025.33,
        "humidity": 89,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 1.86,
        "deg": 349.501
      },
      "rain": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-18 15:00:00"
    },
    {
      "dt": 1471543200,
      "main": {
        "temp": 299.951,
        "temp_min": 299.951,
        "temp_max": 299.951,
        "pressure": 1024.16,
        "sea_level": 1027.63,
        "grnd_level": 1024.16,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 20
      },
      "wind": {
        "speed": 1.22,
        "deg": 39.0025
      },
      "rain": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-18 18:00:00"
    },
    {
      "dt": 1471554000,
      "main": {
        "temp": 300.398,
        "temp_min": 300.398,
        "temp_max": 300.398,
        "pressure": 1022.99,
        "sea_level": 1026.52,
        "grnd_level": 1022.99,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 0.62,
        "deg": 68.5009
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-18 21:00:00"
    },
    {
      "dt": 1471564800,
      "main": {
        "temp": 299.148,
        "temp_min": 299.148,
        "temp_max": 299.148,
        "pressure": 1023.29,
        "sea_level": 1026.74,
        "grnd_level": 1023.29,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 76
      },
      "wind": {
        "speed": 1.31,
        "deg": 160.5
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-19 00:00:00"
    },
    {
      "dt": 1471575600,
      "main": {
        "temp": 297.047,
        "temp_min": 297.047,
        "temp_max": 297.047,
        "pressure": 1023.88,
        "sea_level": 1027.21,
        "grnd_level": 1023.88,
        "humidity": 81,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 2.2,
        "deg": 176.502
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-19 03:00:00"
    },
    {
      "dt": 1471586400,
      "main": {
        "temp": 296.497,
        "temp_min": 296.497,
        "temp_max": 296.497,
        "pressure": 1022.93,
        "sea_level": 1026.31,
        "grnd_level": 1022.93,
        "humidity": 88,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 2.32,
        "deg": 191.5
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-19 06:00:00"
    },
    {
      "dt": 1471597200,
      "main": {
        "temp": 294.64,
        "temp_min": 294.64,
        "temp_max": 294.64,
        "pressure": 1022.46,
        "sea_level": 1025.89,
        "grnd_level": 1022.46,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.67,
        "deg": 215.003
      },
      "rain": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-08-19 09:00:00"
    },
    {
      "dt": 1471608000,
      "main": {
        "temp": 297.86,
        "temp_min": 297.86,
        "temp_max": 297.86,
        "pressure": 1023.02,
        "sea_level": 1026.34,
        "grnd_level": 1023.02,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.42,
        "deg": 260
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-19 12:00:00"
    },
    {
      "dt": 1471618800,
      "main": {
        "temp": 301.723,
        "temp_min": 301.723,
        "temp_max": 301.723,
        "pressure": 1022.44,
        "sea_level": 1025.89,
        "grnd_level": 1022.44,
        "humidity": 62,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.86,
        "deg": 283.503
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-19 15:00:00"
    },
    {
      "dt": 1471629600,
      "main": {
        "temp": 303.072,
        "temp_min": 303.072,
        "temp_max": 303.072,
        "pressure": 1021.05,
        "sea_level": 1024.45,
        "grnd_level": 1021.05,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 2.66,
        "deg": 272.002
      },
      "rain": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-08-19 18:00:00"
    }
  ]
}

  res.send(data);
});

