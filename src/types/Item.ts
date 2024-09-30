export type Item = {
  name: string;
  description: string;
  collog: string;
  plaintext: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string[];
  maps: {
    11: boolean;
    12: boolean;
    21: boolean;
    22: boolean;
    30: boolean;
    33: boolean;
  };
  stats: {
    FlatMovementSpeedMod: number;
  };
  into: string[] | undefined;
  inStore: boolean | undefined;
  from: string[] | undefined;
  depth: number | undefined;
};
