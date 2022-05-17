import { LatLngLiteral } from "leaflet";
export type marker = {
  lat: number;
  lng: number;
  name: string;
  type: string;
  imgSrc: string;
  id: number;
};

export type markers = Array<marker>;

export interface mapProps {
  handelOpenPopUp: () => void;
  setNewPosition: (position: { lat: number; lng: number }) => void;
  data: markers;
}

export interface locationMarkerProps {
  handelOpenPopUp: () => void;
  setNewPosition: (position: LatLng) => void;
}

export interface pinsProps {
  data: markers;
  marker;
}

export interface popUpProps {
  setShowPopup: (showPopup: boolean) => void;
  newPosition: LatLngLiteral;
  setData: any;
  data: markers;
}

export interface mapLocationProps {
  newPosition: LatLngLiteral;
  name: string;
  type: string;
  imgSrc: string;
}
