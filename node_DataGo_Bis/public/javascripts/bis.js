document.addEventListener("DOMContentLoaded", () => {
  // 정류장 리스트 테이블
  const station_list = document.querySelector("table.station-list");
  station_list.addEventListener("click", (e) => {});
  // 1. table이 클릭되면
  station_list.onclick = (e) => {
    /**
     * table에 event핸들링을 설정했는데
     * 실제 클릭을 했을때 최종적으로 event를 발생시키는 tag는 TD이다
     * 따라서 onclick(e)의 매개변수인 e 는 table이 아닌 TD의 정보가
     * 담겨 있게 된다.
     * e(TD)로 부터 자신의 부모(closest())를 검색하여 tr이 있으면
     * tr tag에 설정된 속성중
     */
    const busstop_id = e.target.closest("TR").dataset.id;
    // alert(busstop_id);
    // localhost:3000/bis/busstop/111
    fetch(`/bis/busstop/${busstop_id}`)
      .then((result) => {
        return result.json();
      })
      .then((list) => {
        const busstop_list = list.BUSSTOP_LIST;
        const stopTitleArray = [
          "LINE_NAME",
          "BUSSTOP_NAME",
          "REMAIN_MIN",
          "REMAIN_STOP",
        ];

        //
        //
        const tr_list = busstop_list.map((busstop) => {
          //
          //
          const td_list = stopTitleArray.map((title) => {
            const td = document.createElement("TD");
            let textContent = busstop[title];

            textContent += title == "REMAIN_MIN" ? "분" : "";
            textContent += title == "REMAIN_STOP" ? "번째전" : "";
            td.textContent = textContent;
            return td;
          });
          const tr = document.createElement("TR");
          tr.append(...td_list);
          return tr;
        });
        document.querySelector("table.busstop-list tbody").innerHTML = "";
        document.querySelector("table.busstop-list tbody").append(...tr_list);
      })
      .catch((err) => alert("서버 통신 오류발생"));
  };
});
