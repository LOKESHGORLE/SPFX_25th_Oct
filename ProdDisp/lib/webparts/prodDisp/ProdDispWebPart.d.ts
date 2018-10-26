import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IProdDispWebPartProps {
    description: string;
}
export default class ProdDispWebPart extends BaseClientSideWebPart<IProdDispWebPartProps> {
    render(): void;
    private getready();
    private EVentListener();
    private EventTesting();
    private getCategoryInfo();
    private getProductsByCategory();
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
