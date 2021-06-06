export interface CodeRadioDataType {
  station: {
    id: string | number;
    name: string;
    shortcode: string;
    description: string;
    frontend: string;
    backend: string;
    listen_url: string;
    is_public: boolean;
  };
  listeners: {
    current: number;
    unique: number;
    total: number;
  };
  now_playing: {
    song: {
      id: string;
      text: string;
      artist: string;
      title: string;
      album: string;
      genre: string;
      art: string;
    };
  };
  playing_next: {
    song: {
      id: string;
      text: string;
      artist: string;
      title: string;
      album: string;
      genre: string;
      art: string;
    };
  };
}
