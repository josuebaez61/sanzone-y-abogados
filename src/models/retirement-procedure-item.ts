export class RetirementProcedureItem {
  title: string;
  features: string[];
  order: number;
  icon: string;

  constructor(title: string, features: string[], order: number, icon: string) {
    this.title = title;
    this.features = features;
    this.order = order;
    this.icon = icon;
  }
}
