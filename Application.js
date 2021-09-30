const getData = new GetData();
const view = new VeiwPage();
const search = document.getElementById("searchCity");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;

  getData.getCurrentData(currentVal).then((data) => {
    view.populateUI(data);
    view.getImage(data);
    view.saveDataToLocalStrage(data);
  });
});
window.addEventListener("DOMContentLoaded", () => {
  console.log("HTML page is  fully loaded and parsed");
  const dataSaved = view.getDataFromLocalStorage();
  view.populateUI(dataSaved);
  view.getImage(dataSaved);

});