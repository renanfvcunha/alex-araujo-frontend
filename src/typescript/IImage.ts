export default interface IImage {
  url: string;
  alternativeText: string;
  formats: {
    thumbnail: {
      url: string;
    };
  };
}
