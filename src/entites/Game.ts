import Genre from "./Genre";
import Platform from "./Platform";
import Publishers from "./Publishers";

export default interface Game {
  rating_top: number;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //why becouse parent_platforms:[{platform:{id:1,name:"PC",slug:"pc"}},{platform:{id:2,name:"XO",slug:"xo"}},{platform:{id:3,name:"Laptop",slug:"lap"}}]
  metacritic: number;
  slug: string;
  description_raw: string;
  genres: Genre[];
  publishers: Publishers[];
}
