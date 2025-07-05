import { BlogPost } from "@/types/blog";
import { ImageInEntry } from "@/components/entry-detail/image-in-entry";
import { EntryContent } from "@/components/entry-detail/entry-content";
import busWindowImg from "./images/bus-window.webp";
import hotelKeyImg from "./images/hotel-key.webp";
import hotelWallImg from "./images/hotel-wall.webp";
import hotelElevatorImg from "./images/hotel-elevator.webp";

const images = [busWindowImg, hotelKeyImg, hotelWallImg, hotelElevatorImg];
export const post3: BlogPost = {
  id: "3",
  title: "0. 왜 사람들은 오사카에 많이 갈까",
  slug: "why-people-go-to-osaka",
  content: (
    <EntryContent
      content={
        <>
          <p>
            나는 지난 4월까지 일본 여행을 네 번 다녀왔지만, 오사카는 한 번도
            방문해보지 못했다. 누군가 오사카에 함께 가자고 제안한 적도 없고,
            미디어에서 많이 접해보지도 못했고, 가고 싶다는 생각이 들지
            않아서였다. 여자친구와 일본 여행을 계획하면서 이곳 저곳을
            공부하다보니, 사람들이 오사카에 많이 가는 이유를 이해하고 계획하게
            되었다.
          </p>
          <ImageInEntry
            src={[images[1], images[2], images[3]]}
            alt={["호텔 키", "호텔 벽", "호텔 엘리베이터"]}
            caption="숙소의 엘레베이터에는 CCTV를 통해 내 뒷통수를 볼 수 있다."
          />
        </>
      }
    />
  ),
  summary: "간사이 여행 계획",
  subCategoryId: "2",
  author: "양가브리엘",
  publishDate: "2024-08-08 00:40:00",
  readTime: 5,
  imageUrl: images[0],
  tags: ["일본", "간사이", "오사카", "교토", "나라", "여행"],
};
