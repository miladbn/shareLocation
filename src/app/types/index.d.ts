import { LatLng } from "leaflet";
export type Pin = {
  id: number;
  lng: number;
  lat: number;
  name: string;
  type: string;
  imageUrl: string;
};

export interface PinEditorProps {
  onClose: () => void;
  onSubmit: () => void;
  pin: Pin | null;
  show: boolean;
}

export interface MapProps {
  onClick: (LatLng) => void;
  pins: Pin[];
}
