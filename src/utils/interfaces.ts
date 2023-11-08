export interface Menu {
  open_in_new_tab: boolean;
  link_text: string;
  url: string;
}

export interface Section {
  __component: string;
  title: string;
  description: string;
  image: Image;
  metadata: {
    background: boolean;
    name: string;
    section_id: string;
  };
}

export interface GridText {
  __component: string;
  title: string;
  description: string;
  text_grid: Array<{
    title: string;
    description: string;
  }>;
  metadata: {
    background: boolean;
    name: string;
    section_id: string;
  };
}

export interface GridImg {
  __component: string;
  title: string;
  description: string;
  image_grid: Array<{ img_grid: Image }>;
  metadata: {
    background: boolean;
    name: string;
    section_id: string;
  };
}

export interface SectionContent {
  __component: string;
  title: string;
  content: string;
  metadata: {
    background: boolean;
    name: string;
    section_id: string;
  };
}

export interface Provider_metadata {
  public_id: string;
  resource_type: string;
}

export interface Logo {
  url: string;
}

export interface IMenuObj {
  open_in_new_tab: boolean;
  logo_text: string;
  logo_link: string;
  menu: Menu[];
  logo: Logo;
  sections: Array<Section>;
}

export interface Attribute {
  name: string;
  alternativeText: string;
  url: string;
}

export interface Data {
  id: number;
  attributes: Attribute;
}

export interface Image {
  data: Data[];
}

export interface IImagGrid {
  id: number;
  image: Image;
}
