  // 검색 함수
  function search() {
    // 검색어 가져오기
    var searchInput = document.getElementById("searchInput");
    var searchInputValue = searchInput.value;

    // 실제로는 여기에서 검색 로직을 수행하면 됩니다.
    // 예를 들어, 검색어로 서버에 요청을 보내거나 다른 작업을 수행할 수 있습니다.

    // 여기에서는 검색어를 콘솔에 출력하는 예제를 보여줍니다.
    console.log("검색어:", searchInputValue);

    // Set focus on the search input after the search button is clicked
    searchInput.focus();
}