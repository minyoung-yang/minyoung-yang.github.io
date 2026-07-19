"use client";

import { ImageInEntry } from "@/components/entry-detail/image-in-entry";
import { OgLink } from "@/components/entry-detail/og-anchor";

export const content = (
  <>
    <p>
      2025년 5월 2일, 하루 종일 비가 내렸다. 보통 비가 아니었고, 상당히 많이
      내렸다. 원래 오늘의 목표는, 오전에 하라주쿠를 구경하고 오후에 고쿄와
      도쿄역 및 긴자 근방을 구경하는 것이었다. 하지만 폭우로 인해, 하라주쿠를
      포기했다. 바깥 구경은 어려우니, 쇼핑을 먼저 하자는 것이었다. 그렇게 우린
      도쿄 역으로 이동했다. 숙소에서 간다 역을 통해 가니, 금방이었다. 통풍이
      잘되는 신발이었기에, 비가 매우 잘 들어왔다. 시작부터 찝찝했다.
    </p>
    <ImageInEntry
      src={["https://i.imgur.com/NBxPZDF.jpeg"]}
      alt="호텔 조식"
      height={400}
      caption="조식 사진을 다시 보니, 정말 잘 고른 호텔이다."
    />
    <p>
      도쿄 역의 캐릭터 스트리트를 돌아다니며 여러 굿즈들을 구경했다. 구글 맵
      기록을 보니 한 시간 이상 구경했는데, 비로 인한 찝찝함에 스트레스가
      쌓였는지 사진이 한 장도 없다. 토토로, 짱구, 산리오 등 다양한 캐릭터 샵들이
      있었다. 그리고 유니클로로 이동했다. 습한 바깥에 있다가 에어컨 빵빵한
      매장에 들어가니, 쇼핑할 맛이 났다. 도쿄 여행 계획을 짤 때부터,
      유니클로에서 평생 입을 옷을 구입하자고 결심했었기에 각잡고 옷을 구경했다.
      약 세시간 동안 둘이 합쳐 10만엔 이상 구입했던 것으로 기억한다. 그만큼 짐이
      많았기에, 우린 숙소로 다시 돌아갔다. 짐을 두고 잠시 정비하기 위해. 쇼핑을
      너무 오래 했는지, 점심시간이 지나있었고, 웬만한 식당은 브레이크
      타임이었다. 숙소 주변의 여러 식당을 찾다가, 꽤 평이 좋은 라멘집에
      들어갔다. 색다른 맛이었다. 라멘은 항상 같은 맛이었는데, 여긴 고등어 기반의
      육수였다. 자주 먹고 싶은 맛은 아니었지만, 일본의 음식 문화를 하나 더 알게
      되었다는 느낌이 많이 들었다.
    </p>
    <ImageInEntry
      src={[
        "https://i.imgur.com/I93uHt3.jpeg",
        "https://i.imgur.com/BhnoFgX.jpeg",
      ]}
      alt="고등어 육수 라멘"
      caption="한 번 쯤은 먹어보면 좋은 고등어 육수 라멘"
    />
    <p>
      다시 긴자로 이동했다. 유니클로에서 시간을 예정보다 많이 소비했기에, 다른
      곳을 구경하지 못했다. 문구류도 구경하고, 리쿼샵도 방문했지만, 비로 인한
      스트레스 때문에 편하게 구경하진 못했다.
    </p>
    <ImageInEntry
      src={[
        "https://i.imgur.com/NtOAaAv.jpeg",
        "https://i.imgur.com/dLheB6q.jpeg",
      ]}
      alt="문구류"
      caption="정말 찍은 사진이 없다."
    />
    <p>
      차라리 숙소에서 쉴 걸. 찝찝함과 스트레스만 가득 쌓인 채 쇼핑을 마무리하고,
      아키하바라로 돌아갔다. 일본에 올 때마다 와이프가 먹고 싶어하는 규카츠를
      먹으러 갔다. 규카츠와 함께 맥주와 하이볼로 하루를 마무리했다. 내가
      일본에서 겪은 가장 힘든 날 중 하나였다.
    </p>
    <OgLink
      href="https://maps.app.goo.gl/Ajrnnrec8gLRAVu7A"
      title="캐릭터 스트리트"
      description="東京キャラクターストリート"
      image="https://i.ytimg.com/vi/ZG4JQX4BO9A/maxresdefault.jpg"
    />
    <OgLink
      href="https://maps.app.goo.gl/7vQ1XuLBoLrybvw8A"
      title="고등어 육수 라멘 식당"
      description="炭火焼濃厚中華そば 海富道"
      image="https://i.ytimg.com/vi/ZG4JQX4BO9A/maxresdefault.jpg"
    />
    <OgLink
      href="https://maps.app.goo.gl/9fTTzUNBQC99rTBA9"
      title="규카츠 식당"
      description="규카츠 모토무라 아키하바라점"
      image="https://i.ytimg.com/vi/ZG4JQX4BO9A/maxresdefault.jpg"
    />
  </>
);
