export class WorkArea {
  name: string;
  description: string;
  icon: string;
  url?: string;

  constructor(name: string, description: string, icon: string, url?: string) {
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.url = url;
  }
}
