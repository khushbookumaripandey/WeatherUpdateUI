class VeiwPage {
    constructor() {
      this.Container = document.getElementById("content");
      this.city;
      this.defaultCity = "London";     
    }
    //for ui
    populateUI(data) {
      var Name=data.name;
      var Temp=data.main.temp;
      var Pressure=data.main.pressure;
      var InCelcius=Temp-273.15;
      var TemperatureValue=InCelcius.toFixed(2);

      this.Container.innerHTML = `
      <p style=" color:rgb(61, 61, 212);text-align:center; font-size: 35px;"><b>Welcome to Weather Report of  ${Name} </b></p>
      <table class="table">
      <tbody>
              <tr>
              <td><b>City</b></td>
              <td>${Name}</td>
              </tr>
              <tr>
              <td><b>Temperature in Celcius</b></td>
              <td>${TemperatureValue}</td>
          </tr>
          <tr>
          <td><b>Pressure</b></td>
          <td>${Pressure} hpa</td>
      </tr>
      </tbody>
  </table>
  
`;
    }
  clearViewpage() {
      Container.innerHTML = "";
    }
  
    saveDataToLocalStrage(data) {
      localStorage.setItem("city", JSON.stringify(data));
    }
  
    getDataFromLocalStorage() {
      if (localStorage.getItem("city" == null)) {
        return this.defaultCity;
      } else {
        this.city = JSON.parse(localStorage.getItem("city"));
      }
  
      return this.city;
    }

    clearDataFromLocalStrage() {
      localStorage.clear();
    }

    getImage (data){
      var Temp=data.main.temp;
      var InCelcius=Temp-273.15;
      var TemperatureValue=InCelcius.toFixed(2);
      console.log(TemperatureValue)
       if (TemperatureValue > 20){
        document.body.style.backgroundImage="url('/Users/khushbookumari/Desktop/AngularjsHandson/oie_307295j2ZMJY9e.jpg')";
       }
      else if(TemperatureValue <20 && TemperatureValue >10){
        document.body.style.backgroundImage="url('/Users/khushbookumari/Desktop/AngularjsHandson/oie_30732294jgn0IU.jpg')";
      }
      else{
        document.body.style.backgroundImage= "url('/Users/khushbookumari/Desktop/AngularjsHandson/oie_3072436AgONDB9x.png')";
      }
  }
}