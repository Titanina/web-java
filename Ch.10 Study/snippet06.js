//과거 습관 : 문자열 연결을 사용하여 범위내 변수에서 문자열 작성

const formatUserName = user => {
  return user.firstName + " " + user.lastName + " (" + user.handle + ")";
};

//새로운 습관 : 스타일의 문제일수 있지만, 탬플릿 리터럴 사용.

const formatUserName = user => {
  return `${user.firstName} ${user.lastName} (${user.handle})`;
};

