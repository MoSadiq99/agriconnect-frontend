export class Cultivation {
  id: number | null = null;  // Optional, for existing cultivations
  cropType: string = '';
  cultivationDate: Date | null = null;
  harvestDate: Date | null = null;
  location: string = '';
  landSize: string = '';
  expectedYield: string = '';
  methodOfCultivation: string = '';
  description: string = '';
}
