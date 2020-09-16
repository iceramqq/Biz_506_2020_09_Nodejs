# hello node project
## nodejs 를 사용하여 web application server 생성하기
1. workspace / nodejs 폴도 생성
2. nidehs ㅍㅎㄹ도애소 express 프레임워크를 사요요하여 프로젝트 생성
    - express Hello_Node
3. cd Hllo_node : 프로젝트 폴도로 이동 
4. npm install : dependency download
    - package.json 파일에 설정된 dependency들을 download 


## nodejs의 view 설정
1. nodejs ㅡ이 탄생시점에서는 jade라는 view를 사용했다
2. 2.x 로 
3. npm install pug : view 단으 도구 설치
4. view 폴더의 파일들 \*.pug로 이름변경
5. app.js 파일에서 jade를 pug로 변경

## pug view

1. 전통적인 html 코딩이 아닌 새로운 문법구조로 만드는 view파일
2. html과 달리 tag가 열리기만 하고 닫히는 tag가 없다.
3. 각 tag의 시작은 왼쪽정렬로 정확히 구조가 일치해야 한다.
4. tag에 tag를 포함할때는 포함되는 tag의 앞에 tab을 추가해 주어야 한다.
5. pug nodejs에 의해서 reansfiler가 되고 실제로는 html코드로
만들어져서 client에 전송된다.
6. nodejs에 설치한 pug 모듈에 의해서 파일이 변환된다.