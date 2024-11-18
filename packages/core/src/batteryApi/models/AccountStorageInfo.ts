/* tslint:disable */
/* eslint-disable */
/**
 * Custodial-Battery REST API.
 * REST API for Custodial Battery which provides gas to different networks to help execute transactions.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AccountStorageInfo
 */
export interface AccountStorageInfo {
    /**
     * 
     * @type {number}
     * @memberof AccountStorageInfo
     */
    usedCells: number;
    /**
     * 
     * @type {number}
     * @memberof AccountStorageInfo
     */
    usedBits: number;
    /**
     * 
     * @type {number}
     * @memberof AccountStorageInfo
     */
    usedPublicCells: number;
    /**
     * time of the last payment
     * @type {number}
     * @memberof AccountStorageInfo
     */
    lastPaid: number;
    /**
     * 
     * @type {number}
     * @memberof AccountStorageInfo
     */
    duePayment: number;
}

/**
 * Check if a given object implements the AccountStorageInfo interface.
 */
export function instanceOfAccountStorageInfo(value: object): value is AccountStorageInfo {
    if (!('usedCells' in value) || value['usedCells'] === undefined) return false;
    if (!('usedBits' in value) || value['usedBits'] === undefined) return false;
    if (!('usedPublicCells' in value) || value['usedPublicCells'] === undefined) return false;
    if (!('lastPaid' in value) || value['lastPaid'] === undefined) return false;
    if (!('duePayment' in value) || value['duePayment'] === undefined) return false;
    return true;
}

export function AccountStorageInfoFromJSON(json: any): AccountStorageInfo {
    return AccountStorageInfoFromJSONTyped(json, false);
}

export function AccountStorageInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountStorageInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'usedCells': json['used_cells'],
        'usedBits': json['used_bits'],
        'usedPublicCells': json['used_public_cells'],
        'lastPaid': json['last_paid'],
        'duePayment': json['due_payment'],
    };
}

  export function AccountStorageInfoToJSON(json: any): AccountStorageInfo {
      return AccountStorageInfoToJSONTyped(json, false);
  }

  export function AccountStorageInfoToJSONTyped(value?: AccountStorageInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'used_cells': value['usedCells'],
        'used_bits': value['usedBits'],
        'used_public_cells': value['usedPublicCells'],
        'last_paid': value['lastPaid'],
        'due_payment': value['duePayment'],
    };
}

