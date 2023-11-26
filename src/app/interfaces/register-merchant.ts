export interface MerchantRegistration {
    merchantName: string
    merchantUsername: string
    merchantEmail: string
    merchantPhone: string
    merchantDescription: string
    merchantStatus: string
    merchantDocument: Document[]
} 

export interface Document {
    file: File
    filename: string
    description: string
}

export interface MerchantData {
    merchantID : string
    merchantName: string
    merchantUsername: string
    merchantEmail: string
    merchantPhone: string
    merchantDescription: string
    merchantStatus: string
    merchantDocument: Document[]
}