/* export interface IMenuObj {
  open_in_new_tab: boolean;
  _id: string;
  logo_text: string;
  logo_link: string;
} */

export interface Menu {
  open_in_new_tab: boolean;
  link_text: string;
  url: string;
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
}
