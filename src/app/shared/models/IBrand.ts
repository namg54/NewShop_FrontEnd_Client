export interface IBrand {
    id:             number;
    title:          string;
    description?:    string;
    isActive?:       boolean;
    isDelete?:       boolean;
    summary?:        string;
    created?:        Date;
    createdBy?:      number;
    lastModified?:   Date;
    lastModifiedBy?: number;
}