export interface IProduct {
    id:             number;
    title:          string;
    price:          number;
    pictureUrl:     string;
    productTypeId:  number;
    productBrandId: number;
    productBrand:   string;
    productType:    string;
    description:    string;
    isActive:       boolean;
    summary:        string;
}