export default interface StrapiImage {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    large: {
      ext: ".png";
      url: string;
      hash: string;
      mime: "image/png";
      name: string;
      path: null;
      size: number;
      width: number;
      height: number;
      provider_metadata: {
        public_id: string;
        resource_type: "image";
      };
    };
    small: {
      ext: ".png";
      url: string;
      hash: string;
      mime: "image/png";
      name: string;
      path: null;
      size: number;
      width: number;
      height: number;
      provider_metadata: {
        public_id: string;
        resource_type: "image";
      };
    };
    medium: {
      ext: ".png";
      url: string;
      hash: string;
      mime: "image/png";
      name: string;
      path: null;
      size: number;
      width: number;
      height: number;
      provider_metadata: {
        public_id: string;
        resource_type: "image";
      };
    };
    thumbnail: {
      ext: ".png";
      url: string;
      hash: string;
      mime: "image/png";
      name: string;
      path: null;
      size: number;
      width: number;
      height: number;
      provider_metadata: {
        public_id: string;
        resource_type: "image";
      };
    };
  };
  hash: string;
  ext: ".png";
  mime: "image/png";
  size: number;
  url: string;
  previewUrl: null;
  provider: "cloudinary";
  provider_metadata: {
    public_id: string;
    resource_type: "image";
  };
  createdAt: string;
  updatedAt: string;
}
