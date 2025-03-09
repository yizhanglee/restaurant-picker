function getNearbyRestaurants() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const apiKey = "AIzaSyCBUue2uiI5jvKJGGAaSUIBSXyLmcf7Ijk"; // ⚠️ 替換成你的 API Key
      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=restaurant&key=${apiKey}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.results.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const restaurantName = data.results[randomIndex].name;
            result.textContent = "推薦餐廳：" + restaurantName;
          } else {
            result.textContent = "找不到附近的餐廳！";
          }
        })
        .catch((error) => console.error("錯誤:", error));
    });
  } else {
    result.textContent = "你的瀏覽器不支援定位功能！";
  }
}

button.addEventListener("click", getNearbyRestaurants);
