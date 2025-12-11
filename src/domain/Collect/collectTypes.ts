export type CollectDataAPI = {
  id: number;
  scheduledAt: string;
  estimatedWeight: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  status: CollectStatusType;
  user: {
    id: number;
    name: string;
  };
  ecoPoint: {
    id: number;
    name: string;
  };
  materials: {
    id: number;
    material: {
      id: number;
      name: string;
    };
  }[];
};

export type CollectData = {
  id: number;
  scheduledAt: string;
  estimatedWeight: string | null;
  notes: string | null;
  status: CollectStatusType;
  ecoPoint: {
    id: number;
    name: string;
  };
  materials: {
    id: number;
    material: {
      id: number;
      name: string;
    };
  }[];
};

export type CreateCollectType = {
  scheduledAt: string;
  estimatedWeight: string;
  notes: string | undefined;
  userId: number;
  ecoPointId: number;
  materials: {
    id: number;
  }[];
};

export type CollectStatusType =
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'CANCELED';
