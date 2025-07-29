"use client";

import { ImageInEntry } from "@/components/entry-detail/image-in-entry";
import { OgLink } from "@/components/entry-detail/og-anchor";

export const content = (
  <>
    <p>
      인테리어 공사는 가장 먼저 철거로 시작된다. 마루 공사를 위해서는 마루
      철거도 따로 작업하는 것으로 파악했다. 나는 마루 공사를 하지 않았기에
      철거를 하루만에 진행할 수 있었다. 철거는 소음이 많이 나는 작업 중
      하나이다. 아마 이 공사 과정 중에서 가장 소음이 컸을 것이다. 작업자 분들께
      듣기로 주민 세 명 정도 시끄럽다고 올라왔었다고 하는데, 그 이후로는 소음에
      대한 방문이 없었던 것으로 보아 가장 시끄러운 공정이었던 것 같다. 아무래도
      한참 전에 공사를 하면서 집에 문제 없게 최대한 접착을 해두었을텐데, 그것을
      철거하려다보니 많은 힘이 들어가고 그 소음이 많이 났을 것이다.
    </p>
    <p>
      철거는 짧은 과정이지만, 아주 꼼꼼하게 파악해야 한다. 빼먹은 것이 있다면
      추후 시간과 돈을 들여야하기 때문이다. 또한, 타 공정과 협업이 잘되었으면
      하는 바람으로, 욕실 타일 업체 사장님의 추천으로 업체를 선정했다. 그렇기에,
      욕실에 대해서는 내가 따로 관리하지 않고, 사장님들끼리 커뮤니케이션하여
      작업을 진행하였다. 나머지 부분에 대해서는 철거업체 사장님께 철거할
      부분들에 대해 최대한 상세히 설명하였다. 공정 중에 나는 회사에 있었지만,
      스마트폰의 알림을 최대한 자주 확인하고 철거업자의 연락이 오면 최대한
      빠르게 커뮤니케이션하려 노력했다. 그리고, 모든 공정에서 마찬가지지만 더
      잘해주시길 바라는 마음으로, 달달구리 뇌물과 시원한 음료를 아이스팩에
      담아두었다.
    </p>
    <ImageInEntry
      src="https://i.imgur.com/9raUmcU.jpeg"
      alt="철거 현장 인부들을 위한 다과와 음료"
      caption="인부들의 사기 향상을 위한 다과와 음료"
      height={600}
    />
    <p>
      사장님께서도 내 업무를 방해하지 않으려, 최대한 카톡으로 남겨주셨다. 그리고
      시간이 되면 전화하는 형태로 커뮤니케이션을 진행하였다.
    </p>
    <ImageInEntry
      src="https://i.imgur.com/CA7gokx.jpeg"
      alt="설명과 함께 전달된 현장 사진"
      caption="설명이 필요한 이미지와 함께 카톡을 남겨주신 사장님"
      height={600}
    />
    <p>
      소음이 심할 것을 알고 있었기에 걱정되는 마음으로 하루를 지냈고 어찌저찌
      시간이 흘러 마무리되었다고 했다.
    </p>
    <ImageInEntry
      src={[
        "https://i.imgur.com/Glz4a7I.jpeg",
        "https://i.imgur.com/dEx7Dw1.jpeg",
        "https://i.imgur.com/WU0Lpn4.jpeg",
      ]}
      alt={["철거된 벽", "철거된 우물천장", "철거된 붙박이"]}
      caption="철거된 벽, 우물천장, 붙박이 등"
    />
    <ImageInEntry
      src={[
        "https://i.imgur.com/os70sF6.jpeg",
        "https://i.imgur.com/OjtBXcU.jpeg",
      ]}
      alt={["철거된 욕실", "철거된 욕실"]}
      caption="철거된 두 욕실"
    />
    <p>
      작업이 완료된 후 직접 사진을 찍어 카톡으로 전달받았고, 일을 마친 후에
      현장에 방문했다. 이젠 집이 아니라 공사 현장이라고 말할 수 있게 되었다.
      집을 까고보니, 어떻게 구성되어 있는지도 알게 되었고, 시멘트와 하수구의
      냄새를 맡으며 공사의 중요성도 알게 되었다. 누군가가 살고 있던 집에서, 하루
      만에 공사 현장이 되어버렸기에 신기하였다.
    </p>
    <ImageInEntry
      src="https://i.imgur.com/IyJvQcE.jpeg"
      alt="공사 현장에서 셀카를 찍는 모습"
      caption="현장이 너무 신기해서 셀카를 찍은 원숭이"
      height={600}
    />
    <p>
      이제 다음날부터 본격적인 작업이 들어간다. 다음 날만 해도, 가스배관 철거와
      시스템 에어컨 배관 설치가 진행된다. 설레면서 무서운 인테리어 공사의 시작
      날이었다.
    </p>
    <OgLink
      href="https://maps.app.goo.gl/o496H7UWoEDhy6yeA"
      title="철거를 진행한 타일 전문 업체 코알라타일"
      description="코알라타일 (KOALATILE)"
      image="https://i.ytimg.com/vi/ZG4JQX4BO9A/maxresdefault.jpg"
    />
  </>
);
