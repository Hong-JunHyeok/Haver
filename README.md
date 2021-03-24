# Haver (검색 사이트)

# 검색 API어떻게 사용하나요?

대구소프트웨어고등학교라는 키워드로 검색을 할려고 할려면,

> https://dapi.kakao.com/v2/search/web?query=대구소프트웨어&size=10

이런식으로 쿼리를 작성하면 된다.

하지만 이런식으로 요청을 하게 되면,

```json
{
  "errorType": "AccessDeniedError",
  "message": "cannot find Authorization : KakaoAK header"
}
```

이런식의 메시지가 나오게 될텐데... message를 잘 보면

> cannot find Authorization : KakaoAK header

라는 메시지가 뜨게 되는 모습을 볼 수 있다.

이를 해결하기 위한 방안은 간단하다.

##### 그저 header에 KakaoAK를 같이 전송해주면 된다.

> KakaoAK는 어디서 발급받나요?
> [링크](https://developers.kakao.com/)에서
> 로그인 -> 내 에플리케이션 -> 등록을 하시면
> 요약 정보에 앱 키라는 것이 발급이 될것이다!
> 그곳에서 자신이 필요한 API키를 가져다 쓰면 되는데,
> 나는 REST API키를 가져다가 쓸것이다.

KakaoAK의 형식은

```json
"API_KEY": "KakaoAK + (발급받은 API_KEY)"
```

의 형식으로 헤더에 전송만 해주면 된다.
즉, 나중에 axios를 통한 서버API통신을 진행할때,

```typescript
import { API_KEY } from 'config/config.json';

...

customAxios.get(`${SERVER}${query}`, {
  headers: {
    Authorization: API_KEY,
  },
});
```

이렇게 작성해주면 된다.
