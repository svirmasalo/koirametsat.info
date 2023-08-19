export type StoryblokImage = {
    id: string;
    alt: string;
    name: string;
    focus: string;
    title: string;
    filename: string;
    filetype: string;
    url: string;
    fieldtype: string;
  }
  export type SERPBlock = {
    _uid: String;
    canonical: StoryblokLink;
    component: "SERP";
    meta_image: StoryblokImage;
    meta_title: string;
    meta_description: string;
    _editable: string;
  }
  export type StoryblokLink = {
    cached_url: string;
    linktype: string;
    id: number;
  }