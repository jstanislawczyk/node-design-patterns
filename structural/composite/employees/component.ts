export abstract class Component {
  protected parent!: Component | null;

  public setParent(parent: Component | null) {
    this.parent = parent;
  }

  public getParent(): Component | null {
    return this.parent;
  }

  public add(component: Component): void { }

  public remove(component: Component): void { }

  protected generateIndent = (level: number = 0) => {
    let indent = "";

    for (let i = 0; i < level; i++) {
      indent += "  ";
    }

    return indent;
  }

}
