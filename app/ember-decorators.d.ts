declare module 'ember-decorators/object' {
  export const action: MethodDecorator;
  export function computed(...dependentKeys: string[]): PropertyDecorator;
  export function computed(target: any, propertyKey: string | symbol): void;
  export const observes: (...propsToObserve: string[]) => PropertyDecorator;
  // TODO readonly
}

declare module 'ember-decorators/component' {
  // NOTE: @attribute currently doesn't work
  // export function attribute(target: any, propertyKey: string | symbol): void;
  // export function attribute(attrName: string): PropertyDecorator;
  export function className(target: any, propertyKey: string | symbol): void;
  export function className(
    whenTrue: string,
    whenFalse: string
  ): PropertyDecorator;
  export function classNames(...classes: string[]): ClassDecorator;
  export function tagName(tag: string): ClassDecorator;
}

declare module 'ember-decorators/service' {
  export const service: PropertyDecorator;
}

declare module 'ember-decorators/data' {
  export const attr: PropertyDecorator;
  // export const hasMany: ServiceDecorator;
  // export const belongsTo: ServiceDecorator;
}

declare module 'ember-decorators/controller' {
  // export controller attr: ServiceDecorator;
  // export const hasMany: ServiceDecorator;
  // export const belongsTo: ServiceDecorator;
}

/*

import {
  controller
} from 'ember-decorators/controller';

import {
  alias,
  or,
  reads
} from 'ember-decorators/object/computed';

import {
  on
} from 'ember-decorators/object/evented';

*/
