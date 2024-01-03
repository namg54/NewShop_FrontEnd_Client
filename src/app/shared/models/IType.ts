export interface IType {
    title:          string;
    description?:    null;
    isActive?:       boolean;
    isDelete?:       boolean;
    summary?:        string;
    created?:        Date;
    createdBy?:      number;
    lastModified?:   Date;
    lastModifiedBy?: number;
    id:             number;
}