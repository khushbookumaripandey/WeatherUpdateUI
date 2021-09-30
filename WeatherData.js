class GetData {
    async getCurrentData(input) {
      const myKey = "5c9d06d901f34be2628ac1d9010c70b4";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
      const data = await response.json();
      console.log(data);
      return data;
    }
  
  }
  