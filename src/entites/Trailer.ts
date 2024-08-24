export default interface Trailer {
  id: number;
  name: string;
  preview: string;
  //   data: any; //temp solution
  data: {
    480: string;
    max: string;
  };
}
