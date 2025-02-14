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
 * @interface DomainNames
 */
export interface DomainNames {
    /**
     * 
     * @type {Array<string>}
     * @memberof DomainNames
     */
    domains: Array<string>;
}

/**
 * Check if a given object implements the DomainNames interface.
 */
export function instanceOfDomainNames(value: object): value is DomainNames {
    if (!('domains' in value) || value['domains'] === undefined) return false;
    return true;
}

export function DomainNamesFromJSON(json: any): DomainNames {
    return DomainNamesFromJSONTyped(json, false);
}

export function DomainNamesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainNames {
    if (json == null) {
        return json;
    }
    return {
        
        'domains': json['domains'],
    };
}

  export function DomainNamesToJSON(json: any): DomainNames {
      return DomainNamesToJSONTyped(json, false);
  }

  export function DomainNamesToJSONTyped(value?: DomainNames | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'domains': value['domains'],
    };
}

