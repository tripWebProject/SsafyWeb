var cnt = new Array();
cnt[0] = new Array("전체");
cnt[1] = new Array(
  "전체",
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "관악구",
  "광진구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동대문구",
  "동작구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "성북구",
  "송파구",
  "양천구",
  "영등포구",
  "용산구",
  "은평구",
  "종로구",
  "중구",
  "중랑구"
);
cnt[2] = new Array(
  "전체",
  "계양구",
  "남구",
  "남동구",
  "동구",
  "부평구",
  "서구",
  "연수구",
  "중구",
  "강화군",
  "옹진군"
);
cnt[3] = new Array("전체", "대덕구", "동구", "서구", "유성구", "중구");
cnt[4] = new Array("전체", "남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군");
cnt[5] = new Array("전체", "광산구", "남구", "동구", "북구", "서구");
cnt[6] = new Array(
  "전체",
  "강서구",
  "금정구",
  "남구",
  "동구",
  "동래구",
  "부산진구",
  "북구",
  "사상구",
  "사하구",
  "서구",
  "수영구",
  "연제구",
  "영도구",
  "중구",
  "해운대구",
  "기장군"
);
cnt[7] = new Array("전체", "남구", "동구", "북구", "중구", "울주군");
cnt[8] = new Array("전체");
cnt[9] = new Array(
  "전체",
  "고양시",
  "과천시",
  "광명시",
  "구리시",
  "군포시",
  "남양주시",
  "동두천시",
  "부천시",
  "성남시",
  "수원시",
  "시흥시",
  "안산시",
  "안양시",
  "오산시",
  "의왕시",
  "의정부시",
  "평택시",
  "하남시",
  "가평군",
  "광주시",
  "김포시",
  "안성시",
  "양주군",
  "양평군",
  "여주군",
  "연천군",
  "용인시",
  "이천군",
  "파주시",
  "포천시",
  "화성시"
);
cnt[10] = new Array(
  "전체",
  "강릉시",
  "동해시",
  "삼척시",
  "속초시",
  "원주시",
  "춘천시",
  "태백시",
  "고성군",
  "양구군",
  "양양군",
  "영월군",
  "인제군",
  "정선군",
  "철원군",
  "평창군",
  "홍천군",
  "화천군",
  "황성군"
);
cnt[11] = new Array(
  "전체",
  "제천시",
  "청주시",
  "충주시",
  "괴산군",
  "단양군",
  "보은군",
  "영동군",
  "옥천군",
  "음성군",
  "진천군",
  "청원군"
);
cnt[12] = new Array(
  "전체",
  "공주시",
  "보령시",
  "서산시",
  "아산시",
  "천안시",
  "금산군",
  "논산군",
  "당진군",
  "부여군",
  "서천군",
  "연기군",
  "예산군",
  "청양군",
  "태안군",
  "홍성군"
);
cnt[13] = new Array(
  "전체",
  "경산시",
  "경주시",
  "구미시",
  "김천시",
  "문겅시",
  "상주시",
  "안동시",
  "영주시",
  "영천시",
  "포항시",
  "고령군",
  "군위군",
  "봉화군",
  "성주군",
  "영덕군",
  "영양군",
  "예천군",
  "울릉군",
  "울진군",
  "의성군",
  "청도군",
  "청송군",
  "칠곡군"
);
cnt[14] = new Array(
  "전체",
  "거제시",
  "김해시",
  "마산시",
  "밀양시",
  "사천시",
  "울산시",
  "진주시",
  "진해시",
  "창원시",
  "통영시",
  "거창군",
  "고성군",
  "남해군",
  "산청군",
  "양산시",
  "의령군",
  "창녕군",
  "하동군",
  "함안군",
  "함양군",
  "합천군"
);
cnt[15] = new Array(
  "전체",
  "군산시",
  "김제시",
  "남원시",
  "익산시",
  "전주시",
  "정읍시",
  "고창군",
  "무주군",
  "부안군",
  "순창군",
  "완주군",
  "임실군",
  "장수군",
  "진안군"
);
cnt[16] = new Array(
  "전체",
  "광양시",
  "나주시",
  "목포시",
  "순천시",
  "여수시",
  "여천시",
  "강진군",
  "고흥군",
  "곡성군",
  "구례군",
  "담양군",
  "무안군",
  "보성군",
  "신안군",
  "여천군",
  "영광군",
  "영암군",
  "완도군",
  "장성군",
  "장흥군",
  "진도군",
  "함평군",
  "해남군",
  "화순군"
);
cnt[17] = new Array("전체", "서귀포시", "제주시", "남제주군", "북제주군");

function areaChange(value) {
  document.getElementById("district").options.length = 0;
  for (let i = 0; i < cnt[value].length; i++) {
    let optionObj = document.createElement("option");
    optionObj.value = i;
    optionObj.innerText = cnt[value][i];
    document.getElementById("district").appendChild(optionObj);
  }

  // 36.3890161659, 127.35127 대전 첫번째 집
  // 테스트
  var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
      // center: new kakao.maps.LatLng(33.450705, 126.570677), // 지도의 중심좌표
      center: new kakao.maps.LatLng(36.3890161659, 127.35127), // 지도의 중심좌표
      level: 9, // 지도의 확대 레벨
    };

  // console.log(positions);
  var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
  var positions = [];

  fetch(
    "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=tJN5AxShHg%2Bgz2XB9l7NRAfvFrPJalvdOfV2K9s3s8LiT2yAyfNb8LovR2QBepY6KYEpSq303TINwEKA9TdOmg%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&contentTypeId=39&areaCode=" +
      value
  )
    .then((response) => response.json())
    .then((data) => {
      let items = data.response.body.items.item;

  console.log(items.length);

  for (const item of items) {
    const position = {
      title: item.title,
      latlng: new kakao.maps.LatLng(item.mapy, item.mapx), // 주의: 위도와 경도 순서가 바뀌었습니다.
    };
    positions.push(position);
  }

  console.log(positions.length);

  // 마커 이미지의 이미지 주소입니다
  //   var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  var imageSrc = "./img/location-pin.png";

  //   var imageSrc = "location-pin.png", // 마커이미지의 주소입니다
  //     imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
  //     imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  for (var i = 0; i < positions.length; i++) {
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(64, 69);

    // 마커 이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions[i].latlng, // 마커를 표시할 위치
      title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: markerImage, // 마커 이미지
    });
  }
  // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
  var mapTypeControl = new kakao.maps.MapTypeControl();

  // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
  // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
  map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

  // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
  var zoomControl = new kakao.maps.ZoomControl();
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  var moveLatLon = new kakao.maps.LatLng(33.45058, 126.574942);
  // 지도 중심을 부드럽게 이동시킵니다
  // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
  map.panTo(positions[0].latlng);
});
  // 테스트

  // var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

  // var mapContainer = document.getElementById('map'), // 지도를 표시할 div
  // mapOption = {
  //     center: new kakao.maps.LatLng(35.8753644169, 128.6276707967), // 지도의 중심좌표
  //     level: 3 // 지도의 확대 레벨
  // };

  // var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
  // for (var i = 0; i < positions.length; i ++) {

  //     // 마커 이미지의 이미지 크기 입니다
  //     var imageSize = new kakao.maps.Size(24, 35);

  //     // 마커 이미지를 생성합니다
  //     var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  //     // 마커를 생성합니다
  //     var marker = new kakao.maps.Marker({
  //         map: map, // 마커를 표시할 지도
  //         position: positions[i].latlng, // 마커를 표시할 위치
  //         title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
  //         image : markerImage // 마커 이미지
  //     });
  // }
}
const city = [
  "서울",
  "인천",
  "대전",
  "대구",
  "광주",
  "부산",
  "울산",
  "세종",
  "경기",
  "강원",
  "충북",
  "충남",
  "경북",
  "경남",
  "전북",
  "전남",
  "제주",
];

for (let i = 0; i < city.length; i++) {
  let optionObj = document.createElement("option");
  optionObj.value = i + 1;
  optionObj.innerText = city[i];
  document.getElementById("city").appendChild(optionObj);
}