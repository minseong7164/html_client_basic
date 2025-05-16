function app() {
  alert("테스트 데이터 알림 출력");
  fetch("http://localhost:8080/api/names")
    .then(response => {
      response.json().then(
        data => {
          const nameList = document.querySelector(".name-list");
          const nameDivElements = data.map(d => `<div>${d}</div>`).join("");
          console.log(nameDivElements)
          nameList.innerHTML = nameDivElements;
          console.log(data);
        }
      )
    })
  fetch("http://localhost:8080/api/addresses")
    .then(response => {
      response.json().then(
        data => {
          const addressList = document.querySelector(".address-list");
          const addressDivElements = data.map(d => `<div>${d}</div>`).join("");
          console.log(addressDivElements)
          addressList.innerHTML = addressDivElements;
          console.log(data);
        }
      )
    })
}

app();
