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
    _id: string;
    name: string;
    section_id: string;
    __v: number;
    id: string;
  };
}

export interface SectionContent {
  __component: string;
  title: string;
  content: string;
  metadata: {
    background: boolean;
    _id: string;
    name: string;
    section_id: string;
    __v: number;
    id: string;
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

export interface Image {
  _id: string;
  name: string;
  alternativeText: string;
  caption: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  provider_metadata: Provider_metadata;
}
