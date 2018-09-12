/**
 * Map type `T` to a plain object hash with the identity mapping.
 *
 * Discards any additional object identity like the ability to `new()` up the class.
 * The `new()` capability is added back later by merging `EmberClassConstructor<T>`
 *
 * Implementation is carefully chosen for the reasons described in
 * https://github.com/typed-ember/ember-typings/pull/29
 */
export type ExtractPropertyNamesOfType<T, S> = {
    [K in keyof T]: T[K] extends S ? K : never
}[keyof T];

export type Mix<A, B> = B & Pick<A, Exclude<keyof A, keyof B>>;
export type Mix3<A, B, C> = Mix<Mix<A, B>, C>;
export type Mix4<A, B, C, D> = Mix3<Mix<A, B>, C, D>;
export type Mix5<A, B, C, D, E> = Mix4<Mix<A, B>, C, D, E>;
