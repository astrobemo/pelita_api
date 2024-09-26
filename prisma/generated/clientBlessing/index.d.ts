
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model customer
 * 
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>
/**
 * Model rekam_faktur_pajak
 * 
 */
export type rekam_faktur_pajak = $Result.DefaultSelection<Prisma.$rekam_faktur_pajakPayload>
/**
 * Model rekam_faktur_pajak_detail
 * 
 */
export type rekam_faktur_pajak_detail = $Result.DefaultSelection<Prisma.$rekam_faktur_pajak_detailPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.customerDelegate<ExtArgs>;

  /**
   * `prisma.rekam_faktur_pajak`: Exposes CRUD operations for the **rekam_faktur_pajak** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rekam_faktur_pajaks
    * const rekam_faktur_pajaks = await prisma.rekam_faktur_pajak.findMany()
    * ```
    */
  get rekam_faktur_pajak(): Prisma.rekam_faktur_pajakDelegate<ExtArgs>;

  /**
   * `prisma.rekam_faktur_pajak_detail`: Exposes CRUD operations for the **rekam_faktur_pajak_detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rekam_faktur_pajak_details
    * const rekam_faktur_pajak_details = await prisma.rekam_faktur_pajak_detail.findMany()
    * ```
    */
  get rekam_faktur_pajak_detail(): Prisma.rekam_faktur_pajak_detailDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    customer: 'customer',
    rekam_faktur_pajak: 'rekam_faktur_pajak',
    rekam_faktur_pajak_detail: 'rekam_faktur_pajak_detail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "customer" | "rekam_faktur_pajak" | "rekam_faktur_pajak_detail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>
        fields: Prisma.customerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.customerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      rekam_faktur_pajak: {
        payload: Prisma.$rekam_faktur_pajakPayload<ExtArgs>
        fields: Prisma.rekam_faktur_pajakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rekam_faktur_pajakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rekam_faktur_pajakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajakPayload>
          }
          findFirst: {
            args: Prisma.rekam_faktur_pajakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rekam_faktur_pajakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajakPayload>
          }
          findMany: {
            args: Prisma.rekam_faktur_pajakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajakPayload>[]
          }
          create: {
            args: Prisma.rekam_faktur_pajakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajakPayload>
          }
          createMany: {
            args: Prisma.rekam_faktur_pajakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rekam_faktur_pajakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajakPayload>
          }
          update: {
            args: Prisma.rekam_faktur_pajakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajakPayload>
          }
          deleteMany: {
            args: Prisma.rekam_faktur_pajakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rekam_faktur_pajakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rekam_faktur_pajakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajakPayload>
          }
          aggregate: {
            args: Prisma.Rekam_faktur_pajakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRekam_faktur_pajak>
          }
          groupBy: {
            args: Prisma.rekam_faktur_pajakGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rekam_faktur_pajakGroupByOutputType>[]
          }
          count: {
            args: Prisma.rekam_faktur_pajakCountArgs<ExtArgs>
            result: $Utils.Optional<Rekam_faktur_pajakCountAggregateOutputType> | number
          }
        }
      }
      rekam_faktur_pajak_detail: {
        payload: Prisma.$rekam_faktur_pajak_detailPayload<ExtArgs>
        fields: Prisma.rekam_faktur_pajak_detailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rekam_faktur_pajak_detailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajak_detailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rekam_faktur_pajak_detailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajak_detailPayload>
          }
          findFirst: {
            args: Prisma.rekam_faktur_pajak_detailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajak_detailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rekam_faktur_pajak_detailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajak_detailPayload>
          }
          findMany: {
            args: Prisma.rekam_faktur_pajak_detailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajak_detailPayload>[]
          }
          create: {
            args: Prisma.rekam_faktur_pajak_detailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajak_detailPayload>
          }
          createMany: {
            args: Prisma.rekam_faktur_pajak_detailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rekam_faktur_pajak_detailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajak_detailPayload>
          }
          update: {
            args: Prisma.rekam_faktur_pajak_detailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajak_detailPayload>
          }
          deleteMany: {
            args: Prisma.rekam_faktur_pajak_detailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rekam_faktur_pajak_detailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rekam_faktur_pajak_detailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rekam_faktur_pajak_detailPayload>
          }
          aggregate: {
            args: Prisma.Rekam_faktur_pajak_detailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRekam_faktur_pajak_detail>
          }
          groupBy: {
            args: Prisma.rekam_faktur_pajak_detailGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rekam_faktur_pajak_detailGroupByOutputType>[]
          }
          count: {
            args: Prisma.rekam_faktur_pajak_detailCountArgs<ExtArgs>
            result: $Utils.Optional<Rekam_faktur_pajak_detailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    rekam_faktur_pajak_detail: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rekam_faktur_pajak_detail?: boolean | CustomerCountOutputTypeCountRekam_faktur_pajak_detailArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountRekam_faktur_pajak_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rekam_faktur_pajak_detailWhereInput
  }


  /**
   * Count Type Rekam_faktur_pajakCountOutputType
   */

  export type Rekam_faktur_pajakCountOutputType = {
    rekam_faktur_pajak_detail: number
  }

  export type Rekam_faktur_pajakCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rekam_faktur_pajak_detail?: boolean | Rekam_faktur_pajakCountOutputTypeCountRekam_faktur_pajak_detailArgs
  }

  // Custom InputTypes
  /**
   * Rekam_faktur_pajakCountOutputType without action
   */
  export type Rekam_faktur_pajakCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rekam_faktur_pajakCountOutputType
     */
    select?: Rekam_faktur_pajakCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Rekam_faktur_pajakCountOutputType without action
   */
  export type Rekam_faktur_pajakCountOutputTypeCountRekam_faktur_pajak_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rekam_faktur_pajak_detailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
    tempo_kredit: number | null
    warning_kredit: number | null
    limit_warning_type: number | null
    limit_amount: number | null
    limit_atas: number | null
    limit_warning_amount: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
    tempo_kredit: number | null
    warning_kredit: number | null
    limit_warning_type: number | null
    limit_amount: number | null
    limit_atas: number | null
    limit_warning_amount: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    nama: string | null
    alias: string | null
    alamat: string | null
    telepon1: string | null
    telepon2: string | null
    npwp: string | null
    nik: string | null
    kota: string | null
    provinsi: string | null
    kode_pos: string | null
    email: string | null
    contact_person: string | null
    tempo_kredit: number | null
    warning_kredit: number | null
    limit_warning_type: number | null
    limit_amount: number | null
    limit_atas: number | null
    limit_warning_amount: number | null
    status_aktif: boolean | null
    img_link: string | null
    npwp_link: string | null
    ktp_link: string | null
    medsos_link: string | null
    tipe_company: string | null
    blok: string | null
    no: string | null
    rt: string | null
    rw: string | null
    kecamatan: string | null
    kelurahan: string | null
    updated_at: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    alias: string | null
    alamat: string | null
    telepon1: string | null
    telepon2: string | null
    npwp: string | null
    nik: string | null
    kota: string | null
    provinsi: string | null
    kode_pos: string | null
    email: string | null
    contact_person: string | null
    tempo_kredit: number | null
    warning_kredit: number | null
    limit_warning_type: number | null
    limit_amount: number | null
    limit_atas: number | null
    limit_warning_amount: number | null
    status_aktif: boolean | null
    img_link: string | null
    npwp_link: string | null
    ktp_link: string | null
    medsos_link: string | null
    tipe_company: string | null
    blok: string | null
    no: string | null
    rt: string | null
    rw: string | null
    kecamatan: string | null
    kelurahan: string | null
    updated_at: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    nama: number
    alias: number
    alamat: number
    telepon1: number
    telepon2: number
    npwp: number
    nik: number
    kota: number
    provinsi: number
    kode_pos: number
    email: number
    contact_person: number
    tempo_kredit: number
    warning_kredit: number
    limit_warning_type: number
    limit_amount: number
    limit_atas: number
    limit_warning_amount: number
    status_aktif: number
    img_link: number
    npwp_link: number
    ktp_link: number
    medsos_link: number
    tipe_company: number
    blok: number
    no: number
    rt: number
    rw: number
    kecamatan: number
    kelurahan: number
    updated_at: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
    tempo_kredit?: true
    warning_kredit?: true
    limit_warning_type?: true
    limit_amount?: true
    limit_atas?: true
    limit_warning_amount?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
    tempo_kredit?: true
    warning_kredit?: true
    limit_warning_type?: true
    limit_amount?: true
    limit_atas?: true
    limit_warning_amount?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    nama?: true
    alias?: true
    alamat?: true
    telepon1?: true
    telepon2?: true
    npwp?: true
    nik?: true
    kota?: true
    provinsi?: true
    kode_pos?: true
    email?: true
    contact_person?: true
    tempo_kredit?: true
    warning_kredit?: true
    limit_warning_type?: true
    limit_amount?: true
    limit_atas?: true
    limit_warning_amount?: true
    status_aktif?: true
    img_link?: true
    npwp_link?: true
    ktp_link?: true
    medsos_link?: true
    tipe_company?: true
    blok?: true
    no?: true
    rt?: true
    rw?: true
    kecamatan?: true
    kelurahan?: true
    updated_at?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    nama?: true
    alias?: true
    alamat?: true
    telepon1?: true
    telepon2?: true
    npwp?: true
    nik?: true
    kota?: true
    provinsi?: true
    kode_pos?: true
    email?: true
    contact_person?: true
    tempo_kredit?: true
    warning_kredit?: true
    limit_warning_type?: true
    limit_amount?: true
    limit_atas?: true
    limit_warning_amount?: true
    status_aktif?: true
    img_link?: true
    npwp_link?: true
    ktp_link?: true
    medsos_link?: true
    tipe_company?: true
    blok?: true
    no?: true
    rt?: true
    rw?: true
    kecamatan?: true
    kelurahan?: true
    updated_at?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    nama?: true
    alias?: true
    alamat?: true
    telepon1?: true
    telepon2?: true
    npwp?: true
    nik?: true
    kota?: true
    provinsi?: true
    kode_pos?: true
    email?: true
    contact_person?: true
    tempo_kredit?: true
    warning_kredit?: true
    limit_warning_type?: true
    limit_amount?: true
    limit_atas?: true
    limit_warning_amount?: true
    status_aktif?: true
    img_link?: true
    npwp_link?: true
    ktp_link?: true
    medsos_link?: true
    tipe_company?: true
    blok?: true
    no?: true
    rt?: true
    rw?: true
    kecamatan?: true
    kelurahan?: true
    updated_at?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: customerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    nama: string
    alias: string | null
    alamat: string
    telepon1: string
    telepon2: string
    npwp: string | null
    nik: string | null
    kota: string | null
    provinsi: string | null
    kode_pos: string | null
    email: string | null
    contact_person: string | null
    tempo_kredit: number | null
    warning_kredit: number | null
    limit_warning_type: number | null
    limit_amount: number | null
    limit_atas: number | null
    limit_warning_amount: number | null
    status_aktif: boolean
    img_link: string | null
    npwp_link: string | null
    ktp_link: string | null
    medsos_link: string | null
    tipe_company: string
    blok: string
    no: string
    rt: string
    rw: string
    kecamatan: string
    kelurahan: string
    updated_at: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alias?: boolean
    alamat?: boolean
    telepon1?: boolean
    telepon2?: boolean
    npwp?: boolean
    nik?: boolean
    kota?: boolean
    provinsi?: boolean
    kode_pos?: boolean
    email?: boolean
    contact_person?: boolean
    tempo_kredit?: boolean
    warning_kredit?: boolean
    limit_warning_type?: boolean
    limit_amount?: boolean
    limit_atas?: boolean
    limit_warning_amount?: boolean
    status_aktif?: boolean
    img_link?: boolean
    npwp_link?: boolean
    ktp_link?: boolean
    medsos_link?: boolean
    tipe_company?: boolean
    blok?: boolean
    no?: boolean
    rt?: boolean
    rw?: boolean
    kecamatan?: boolean
    kelurahan?: boolean
    updated_at?: boolean
    rekam_faktur_pajak_detail?: boolean | customer$rekam_faktur_pajak_detailArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>


  export type customerSelectScalar = {
    id?: boolean
    nama?: boolean
    alias?: boolean
    alamat?: boolean
    telepon1?: boolean
    telepon2?: boolean
    npwp?: boolean
    nik?: boolean
    kota?: boolean
    provinsi?: boolean
    kode_pos?: boolean
    email?: boolean
    contact_person?: boolean
    tempo_kredit?: boolean
    warning_kredit?: boolean
    limit_warning_type?: boolean
    limit_amount?: boolean
    limit_atas?: boolean
    limit_warning_amount?: boolean
    status_aktif?: boolean
    img_link?: boolean
    npwp_link?: boolean
    ktp_link?: boolean
    medsos_link?: boolean
    tipe_company?: boolean
    blok?: boolean
    no?: boolean
    rt?: boolean
    rw?: boolean
    kecamatan?: boolean
    kelurahan?: boolean
    updated_at?: boolean
  }

  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rekam_faktur_pajak_detail?: boolean | customer$rekam_faktur_pajak_detailArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customer"
    objects: {
      rekam_faktur_pajak_detail: Prisma.$rekam_faktur_pajak_detailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      alias: string | null
      alamat: string
      telepon1: string
      telepon2: string
      npwp: string | null
      nik: string | null
      kota: string | null
      provinsi: string | null
      kode_pos: string | null
      email: string | null
      contact_person: string | null
      tempo_kredit: number | null
      warning_kredit: number | null
      limit_warning_type: number | null
      limit_amount: number | null
      limit_atas: number | null
      limit_warning_amount: number | null
      status_aktif: boolean
      img_link: string | null
      npwp_link: string | null
      ktp_link: string | null
      medsos_link: string | null
      tipe_company: string
      blok: string
      no: string
      rt: string
      rw: string
      kecamatan: string
      kelurahan: string
      updated_at: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<Prisma.$customerPayload, S>

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<customerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer'], meta: { name: 'customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customerFindUniqueArgs>(args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs>(args: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customerFindFirstArgs>(args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs>(args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends customerFindManyArgs>(args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends customerCreateArgs>(args: SelectSubset<T, customerCreateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {customerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customerCreateManyArgs>(args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends customerDeleteArgs>(args: SelectSubset<T, customerDeleteArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customerUpdateArgs>(args: SelectSubset<T, customerUpdateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customerDeleteManyArgs>(args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customerUpdateManyArgs>(args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends customerUpsertArgs>(args: SelectSubset<T, customerUpsertArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customer model
   */
  readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rekam_faktur_pajak_detail<T extends customer$rekam_faktur_pajak_detailArgs<ExtArgs> = {}>(args?: Subset<T, customer$rekam_faktur_pajak_detailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rekam_faktur_pajak_detailPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customer model
   */ 
  interface customerFieldRefs {
    readonly id: FieldRef<"customer", 'Int'>
    readonly nama: FieldRef<"customer", 'String'>
    readonly alias: FieldRef<"customer", 'String'>
    readonly alamat: FieldRef<"customer", 'String'>
    readonly telepon1: FieldRef<"customer", 'String'>
    readonly telepon2: FieldRef<"customer", 'String'>
    readonly npwp: FieldRef<"customer", 'String'>
    readonly nik: FieldRef<"customer", 'String'>
    readonly kota: FieldRef<"customer", 'String'>
    readonly provinsi: FieldRef<"customer", 'String'>
    readonly kode_pos: FieldRef<"customer", 'String'>
    readonly email: FieldRef<"customer", 'String'>
    readonly contact_person: FieldRef<"customer", 'String'>
    readonly tempo_kredit: FieldRef<"customer", 'Int'>
    readonly warning_kredit: FieldRef<"customer", 'Int'>
    readonly limit_warning_type: FieldRef<"customer", 'Int'>
    readonly limit_amount: FieldRef<"customer", 'Int'>
    readonly limit_atas: FieldRef<"customer", 'Int'>
    readonly limit_warning_amount: FieldRef<"customer", 'Int'>
    readonly status_aktif: FieldRef<"customer", 'Boolean'>
    readonly img_link: FieldRef<"customer", 'String'>
    readonly npwp_link: FieldRef<"customer", 'String'>
    readonly ktp_link: FieldRef<"customer", 'String'>
    readonly medsos_link: FieldRef<"customer", 'String'>
    readonly tipe_company: FieldRef<"customer", 'String'>
    readonly blok: FieldRef<"customer", 'String'>
    readonly no: FieldRef<"customer", 'String'>
    readonly rt: FieldRef<"customer", 'String'>
    readonly rw: FieldRef<"customer", 'String'>
    readonly kecamatan: FieldRef<"customer", 'String'>
    readonly kelurahan: FieldRef<"customer", 'String'>
    readonly updated_at: FieldRef<"customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>
  }

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
  }

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>
  }

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput
  }

  /**
   * customer.rekam_faktur_pajak_detail
   */
  export type customer$rekam_faktur_pajak_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak_detail
     */
    select?: rekam_faktur_pajak_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajak_detailInclude<ExtArgs> | null
    where?: rekam_faktur_pajak_detailWhereInput
    orderBy?: rekam_faktur_pajak_detailOrderByWithRelationInput | rekam_faktur_pajak_detailOrderByWithRelationInput[]
    cursor?: rekam_faktur_pajak_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rekam_faktur_pajak_detailScalarFieldEnum | Rekam_faktur_pajak_detailScalarFieldEnum[]
  }

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
  }


  /**
   * Model rekam_faktur_pajak
   */

  export type AggregateRekam_faktur_pajak = {
    _count: Rekam_faktur_pajakCountAggregateOutputType | null
    _avg: Rekam_faktur_pajakAvgAggregateOutputType | null
    _sum: Rekam_faktur_pajakSumAggregateOutputType | null
    _min: Rekam_faktur_pajakMinAggregateOutputType | null
    _max: Rekam_faktur_pajakMaxAggregateOutputType | null
  }

  export type Rekam_faktur_pajakAvgAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type Rekam_faktur_pajakSumAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type Rekam_faktur_pajakMinAggregateOutputType = {
    id: number | null
    tanggal_awal: Date | null
    tanggal_akhir: Date | null
    status: number | null
    locked_date: Date | null
  }

  export type Rekam_faktur_pajakMaxAggregateOutputType = {
    id: number | null
    tanggal_awal: Date | null
    tanggal_akhir: Date | null
    status: number | null
    locked_date: Date | null
  }

  export type Rekam_faktur_pajakCountAggregateOutputType = {
    id: number
    tanggal_awal: number
    tanggal_akhir: number
    status: number
    locked_date: number
    _all: number
  }


  export type Rekam_faktur_pajakAvgAggregateInputType = {
    id?: true
    status?: true
  }

  export type Rekam_faktur_pajakSumAggregateInputType = {
    id?: true
    status?: true
  }

  export type Rekam_faktur_pajakMinAggregateInputType = {
    id?: true
    tanggal_awal?: true
    tanggal_akhir?: true
    status?: true
    locked_date?: true
  }

  export type Rekam_faktur_pajakMaxAggregateInputType = {
    id?: true
    tanggal_awal?: true
    tanggal_akhir?: true
    status?: true
    locked_date?: true
  }

  export type Rekam_faktur_pajakCountAggregateInputType = {
    id?: true
    tanggal_awal?: true
    tanggal_akhir?: true
    status?: true
    locked_date?: true
    _all?: true
  }

  export type Rekam_faktur_pajakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rekam_faktur_pajak to aggregate.
     */
    where?: rekam_faktur_pajakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rekam_faktur_pajaks to fetch.
     */
    orderBy?: rekam_faktur_pajakOrderByWithRelationInput | rekam_faktur_pajakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rekam_faktur_pajakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rekam_faktur_pajaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rekam_faktur_pajaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rekam_faktur_pajaks
    **/
    _count?: true | Rekam_faktur_pajakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rekam_faktur_pajakAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rekam_faktur_pajakSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rekam_faktur_pajakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rekam_faktur_pajakMaxAggregateInputType
  }

  export type GetRekam_faktur_pajakAggregateType<T extends Rekam_faktur_pajakAggregateArgs> = {
        [P in keyof T & keyof AggregateRekam_faktur_pajak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRekam_faktur_pajak[P]>
      : GetScalarType<T[P], AggregateRekam_faktur_pajak[P]>
  }




  export type rekam_faktur_pajakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rekam_faktur_pajakWhereInput
    orderBy?: rekam_faktur_pajakOrderByWithAggregationInput | rekam_faktur_pajakOrderByWithAggregationInput[]
    by: Rekam_faktur_pajakScalarFieldEnum[] | Rekam_faktur_pajakScalarFieldEnum
    having?: rekam_faktur_pajakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rekam_faktur_pajakCountAggregateInputType | true
    _avg?: Rekam_faktur_pajakAvgAggregateInputType
    _sum?: Rekam_faktur_pajakSumAggregateInputType
    _min?: Rekam_faktur_pajakMinAggregateInputType
    _max?: Rekam_faktur_pajakMaxAggregateInputType
  }

  export type Rekam_faktur_pajakGroupByOutputType = {
    id: number
    tanggal_awal: Date
    tanggal_akhir: Date
    status: number
    locked_date: Date
    _count: Rekam_faktur_pajakCountAggregateOutputType | null
    _avg: Rekam_faktur_pajakAvgAggregateOutputType | null
    _sum: Rekam_faktur_pajakSumAggregateOutputType | null
    _min: Rekam_faktur_pajakMinAggregateOutputType | null
    _max: Rekam_faktur_pajakMaxAggregateOutputType | null
  }

  type GetRekam_faktur_pajakGroupByPayload<T extends rekam_faktur_pajakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rekam_faktur_pajakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rekam_faktur_pajakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rekam_faktur_pajakGroupByOutputType[P]>
            : GetScalarType<T[P], Rekam_faktur_pajakGroupByOutputType[P]>
        }
      >
    >


  export type rekam_faktur_pajakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal_awal?: boolean
    tanggal_akhir?: boolean
    status?: boolean
    locked_date?: boolean
    rekam_faktur_pajak_detail?: boolean | rekam_faktur_pajak$rekam_faktur_pajak_detailArgs<ExtArgs>
    _count?: boolean | Rekam_faktur_pajakCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rekam_faktur_pajak"]>


  export type rekam_faktur_pajakSelectScalar = {
    id?: boolean
    tanggal_awal?: boolean
    tanggal_akhir?: boolean
    status?: boolean
    locked_date?: boolean
  }

  export type rekam_faktur_pajakInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rekam_faktur_pajak_detail?: boolean | rekam_faktur_pajak$rekam_faktur_pajak_detailArgs<ExtArgs>
    _count?: boolean | Rekam_faktur_pajakCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $rekam_faktur_pajakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rekam_faktur_pajak"
    objects: {
      rekam_faktur_pajak_detail: Prisma.$rekam_faktur_pajak_detailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tanggal_awal: Date
      tanggal_akhir: Date
      status: number
      locked_date: Date
    }, ExtArgs["result"]["rekam_faktur_pajak"]>
    composites: {}
  }

  type rekam_faktur_pajakGetPayload<S extends boolean | null | undefined | rekam_faktur_pajakDefaultArgs> = $Result.GetResult<Prisma.$rekam_faktur_pajakPayload, S>

  type rekam_faktur_pajakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<rekam_faktur_pajakFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Rekam_faktur_pajakCountAggregateInputType | true
    }

  export interface rekam_faktur_pajakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rekam_faktur_pajak'], meta: { name: 'rekam_faktur_pajak' } }
    /**
     * Find zero or one Rekam_faktur_pajak that matches the filter.
     * @param {rekam_faktur_pajakFindUniqueArgs} args - Arguments to find a Rekam_faktur_pajak
     * @example
     * // Get one Rekam_faktur_pajak
     * const rekam_faktur_pajak = await prisma.rekam_faktur_pajak.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rekam_faktur_pajakFindUniqueArgs>(args: SelectSubset<T, rekam_faktur_pajakFindUniqueArgs<ExtArgs>>): Prisma__rekam_faktur_pajakClient<$Result.GetResult<Prisma.$rekam_faktur_pajakPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Rekam_faktur_pajak that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {rekam_faktur_pajakFindUniqueOrThrowArgs} args - Arguments to find a Rekam_faktur_pajak
     * @example
     * // Get one Rekam_faktur_pajak
     * const rekam_faktur_pajak = await prisma.rekam_faktur_pajak.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rekam_faktur_pajakFindUniqueOrThrowArgs>(args: SelectSubset<T, rekam_faktur_pajakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rekam_faktur_pajakClient<$Result.GetResult<Prisma.$rekam_faktur_pajakPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Rekam_faktur_pajak that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekam_faktur_pajakFindFirstArgs} args - Arguments to find a Rekam_faktur_pajak
     * @example
     * // Get one Rekam_faktur_pajak
     * const rekam_faktur_pajak = await prisma.rekam_faktur_pajak.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rekam_faktur_pajakFindFirstArgs>(args?: SelectSubset<T, rekam_faktur_pajakFindFirstArgs<ExtArgs>>): Prisma__rekam_faktur_pajakClient<$Result.GetResult<Prisma.$rekam_faktur_pajakPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Rekam_faktur_pajak that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekam_faktur_pajakFindFirstOrThrowArgs} args - Arguments to find a Rekam_faktur_pajak
     * @example
     * // Get one Rekam_faktur_pajak
     * const rekam_faktur_pajak = await prisma.rekam_faktur_pajak.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rekam_faktur_pajakFindFirstOrThrowArgs>(args?: SelectSubset<T, rekam_faktur_pajakFindFirstOrThrowArgs<ExtArgs>>): Prisma__rekam_faktur_pajakClient<$Result.GetResult<Prisma.$rekam_faktur_pajakPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rekam_faktur_pajaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekam_faktur_pajakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rekam_faktur_pajaks
     * const rekam_faktur_pajaks = await prisma.rekam_faktur_pajak.findMany()
     * 
     * // Get first 10 Rekam_faktur_pajaks
     * const rekam_faktur_pajaks = await prisma.rekam_faktur_pajak.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rekam_faktur_pajakWithIdOnly = await prisma.rekam_faktur_pajak.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rekam_faktur_pajakFindManyArgs>(args?: SelectSubset<T, rekam_faktur_pajakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rekam_faktur_pajakPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Rekam_faktur_pajak.
     * @param {rekam_faktur_pajakCreateArgs} args - Arguments to create a Rekam_faktur_pajak.
     * @example
     * // Create one Rekam_faktur_pajak
     * const Rekam_faktur_pajak = await prisma.rekam_faktur_pajak.create({
     *   data: {
     *     // ... data to create a Rekam_faktur_pajak
     *   }
     * })
     * 
     */
    create<T extends rekam_faktur_pajakCreateArgs>(args: SelectSubset<T, rekam_faktur_pajakCreateArgs<ExtArgs>>): Prisma__rekam_faktur_pajakClient<$Result.GetResult<Prisma.$rekam_faktur_pajakPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rekam_faktur_pajaks.
     * @param {rekam_faktur_pajakCreateManyArgs} args - Arguments to create many Rekam_faktur_pajaks.
     * @example
     * // Create many Rekam_faktur_pajaks
     * const rekam_faktur_pajak = await prisma.rekam_faktur_pajak.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rekam_faktur_pajakCreateManyArgs>(args?: SelectSubset<T, rekam_faktur_pajakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rekam_faktur_pajak.
     * @param {rekam_faktur_pajakDeleteArgs} args - Arguments to delete one Rekam_faktur_pajak.
     * @example
     * // Delete one Rekam_faktur_pajak
     * const Rekam_faktur_pajak = await prisma.rekam_faktur_pajak.delete({
     *   where: {
     *     // ... filter to delete one Rekam_faktur_pajak
     *   }
     * })
     * 
     */
    delete<T extends rekam_faktur_pajakDeleteArgs>(args: SelectSubset<T, rekam_faktur_pajakDeleteArgs<ExtArgs>>): Prisma__rekam_faktur_pajakClient<$Result.GetResult<Prisma.$rekam_faktur_pajakPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Rekam_faktur_pajak.
     * @param {rekam_faktur_pajakUpdateArgs} args - Arguments to update one Rekam_faktur_pajak.
     * @example
     * // Update one Rekam_faktur_pajak
     * const rekam_faktur_pajak = await prisma.rekam_faktur_pajak.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rekam_faktur_pajakUpdateArgs>(args: SelectSubset<T, rekam_faktur_pajakUpdateArgs<ExtArgs>>): Prisma__rekam_faktur_pajakClient<$Result.GetResult<Prisma.$rekam_faktur_pajakPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rekam_faktur_pajaks.
     * @param {rekam_faktur_pajakDeleteManyArgs} args - Arguments to filter Rekam_faktur_pajaks to delete.
     * @example
     * // Delete a few Rekam_faktur_pajaks
     * const { count } = await prisma.rekam_faktur_pajak.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rekam_faktur_pajakDeleteManyArgs>(args?: SelectSubset<T, rekam_faktur_pajakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rekam_faktur_pajaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekam_faktur_pajakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rekam_faktur_pajaks
     * const rekam_faktur_pajak = await prisma.rekam_faktur_pajak.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rekam_faktur_pajakUpdateManyArgs>(args: SelectSubset<T, rekam_faktur_pajakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rekam_faktur_pajak.
     * @param {rekam_faktur_pajakUpsertArgs} args - Arguments to update or create a Rekam_faktur_pajak.
     * @example
     * // Update or create a Rekam_faktur_pajak
     * const rekam_faktur_pajak = await prisma.rekam_faktur_pajak.upsert({
     *   create: {
     *     // ... data to create a Rekam_faktur_pajak
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rekam_faktur_pajak we want to update
     *   }
     * })
     */
    upsert<T extends rekam_faktur_pajakUpsertArgs>(args: SelectSubset<T, rekam_faktur_pajakUpsertArgs<ExtArgs>>): Prisma__rekam_faktur_pajakClient<$Result.GetResult<Prisma.$rekam_faktur_pajakPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rekam_faktur_pajaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekam_faktur_pajakCountArgs} args - Arguments to filter Rekam_faktur_pajaks to count.
     * @example
     * // Count the number of Rekam_faktur_pajaks
     * const count = await prisma.rekam_faktur_pajak.count({
     *   where: {
     *     // ... the filter for the Rekam_faktur_pajaks we want to count
     *   }
     * })
    **/
    count<T extends rekam_faktur_pajakCountArgs>(
      args?: Subset<T, rekam_faktur_pajakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rekam_faktur_pajakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rekam_faktur_pajak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rekam_faktur_pajakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rekam_faktur_pajakAggregateArgs>(args: Subset<T, Rekam_faktur_pajakAggregateArgs>): Prisma.PrismaPromise<GetRekam_faktur_pajakAggregateType<T>>

    /**
     * Group by Rekam_faktur_pajak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekam_faktur_pajakGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rekam_faktur_pajakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rekam_faktur_pajakGroupByArgs['orderBy'] }
        : { orderBy?: rekam_faktur_pajakGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rekam_faktur_pajakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRekam_faktur_pajakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rekam_faktur_pajak model
   */
  readonly fields: rekam_faktur_pajakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rekam_faktur_pajak.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rekam_faktur_pajakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rekam_faktur_pajak_detail<T extends rekam_faktur_pajak$rekam_faktur_pajak_detailArgs<ExtArgs> = {}>(args?: Subset<T, rekam_faktur_pajak$rekam_faktur_pajak_detailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rekam_faktur_pajak_detailPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rekam_faktur_pajak model
   */ 
  interface rekam_faktur_pajakFieldRefs {
    readonly id: FieldRef<"rekam_faktur_pajak", 'Int'>
    readonly tanggal_awal: FieldRef<"rekam_faktur_pajak", 'DateTime'>
    readonly tanggal_akhir: FieldRef<"rekam_faktur_pajak", 'DateTime'>
    readonly status: FieldRef<"rekam_faktur_pajak", 'Int'>
    readonly locked_date: FieldRef<"rekam_faktur_pajak", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * rekam_faktur_pajak findUnique
   */
  export type rekam_faktur_pajakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak
     */
    select?: rekam_faktur_pajakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajakInclude<ExtArgs> | null
    /**
     * Filter, which rekam_faktur_pajak to fetch.
     */
    where: rekam_faktur_pajakWhereUniqueInput
  }

  /**
   * rekam_faktur_pajak findUniqueOrThrow
   */
  export type rekam_faktur_pajakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak
     */
    select?: rekam_faktur_pajakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajakInclude<ExtArgs> | null
    /**
     * Filter, which rekam_faktur_pajak to fetch.
     */
    where: rekam_faktur_pajakWhereUniqueInput
  }

  /**
   * rekam_faktur_pajak findFirst
   */
  export type rekam_faktur_pajakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak
     */
    select?: rekam_faktur_pajakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajakInclude<ExtArgs> | null
    /**
     * Filter, which rekam_faktur_pajak to fetch.
     */
    where?: rekam_faktur_pajakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rekam_faktur_pajaks to fetch.
     */
    orderBy?: rekam_faktur_pajakOrderByWithRelationInput | rekam_faktur_pajakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rekam_faktur_pajaks.
     */
    cursor?: rekam_faktur_pajakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rekam_faktur_pajaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rekam_faktur_pajaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rekam_faktur_pajaks.
     */
    distinct?: Rekam_faktur_pajakScalarFieldEnum | Rekam_faktur_pajakScalarFieldEnum[]
  }

  /**
   * rekam_faktur_pajak findFirstOrThrow
   */
  export type rekam_faktur_pajakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak
     */
    select?: rekam_faktur_pajakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajakInclude<ExtArgs> | null
    /**
     * Filter, which rekam_faktur_pajak to fetch.
     */
    where?: rekam_faktur_pajakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rekam_faktur_pajaks to fetch.
     */
    orderBy?: rekam_faktur_pajakOrderByWithRelationInput | rekam_faktur_pajakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rekam_faktur_pajaks.
     */
    cursor?: rekam_faktur_pajakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rekam_faktur_pajaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rekam_faktur_pajaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rekam_faktur_pajaks.
     */
    distinct?: Rekam_faktur_pajakScalarFieldEnum | Rekam_faktur_pajakScalarFieldEnum[]
  }

  /**
   * rekam_faktur_pajak findMany
   */
  export type rekam_faktur_pajakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak
     */
    select?: rekam_faktur_pajakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajakInclude<ExtArgs> | null
    /**
     * Filter, which rekam_faktur_pajaks to fetch.
     */
    where?: rekam_faktur_pajakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rekam_faktur_pajaks to fetch.
     */
    orderBy?: rekam_faktur_pajakOrderByWithRelationInput | rekam_faktur_pajakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rekam_faktur_pajaks.
     */
    cursor?: rekam_faktur_pajakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rekam_faktur_pajaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rekam_faktur_pajaks.
     */
    skip?: number
    distinct?: Rekam_faktur_pajakScalarFieldEnum | Rekam_faktur_pajakScalarFieldEnum[]
  }

  /**
   * rekam_faktur_pajak create
   */
  export type rekam_faktur_pajakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak
     */
    select?: rekam_faktur_pajakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajakInclude<ExtArgs> | null
    /**
     * The data needed to create a rekam_faktur_pajak.
     */
    data: XOR<rekam_faktur_pajakCreateInput, rekam_faktur_pajakUncheckedCreateInput>
  }

  /**
   * rekam_faktur_pajak createMany
   */
  export type rekam_faktur_pajakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rekam_faktur_pajaks.
     */
    data: rekam_faktur_pajakCreateManyInput | rekam_faktur_pajakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rekam_faktur_pajak update
   */
  export type rekam_faktur_pajakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak
     */
    select?: rekam_faktur_pajakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajakInclude<ExtArgs> | null
    /**
     * The data needed to update a rekam_faktur_pajak.
     */
    data: XOR<rekam_faktur_pajakUpdateInput, rekam_faktur_pajakUncheckedUpdateInput>
    /**
     * Choose, which rekam_faktur_pajak to update.
     */
    where: rekam_faktur_pajakWhereUniqueInput
  }

  /**
   * rekam_faktur_pajak updateMany
   */
  export type rekam_faktur_pajakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rekam_faktur_pajaks.
     */
    data: XOR<rekam_faktur_pajakUpdateManyMutationInput, rekam_faktur_pajakUncheckedUpdateManyInput>
    /**
     * Filter which rekam_faktur_pajaks to update
     */
    where?: rekam_faktur_pajakWhereInput
  }

  /**
   * rekam_faktur_pajak upsert
   */
  export type rekam_faktur_pajakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak
     */
    select?: rekam_faktur_pajakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajakInclude<ExtArgs> | null
    /**
     * The filter to search for the rekam_faktur_pajak to update in case it exists.
     */
    where: rekam_faktur_pajakWhereUniqueInput
    /**
     * In case the rekam_faktur_pajak found by the `where` argument doesn't exist, create a new rekam_faktur_pajak with this data.
     */
    create: XOR<rekam_faktur_pajakCreateInput, rekam_faktur_pajakUncheckedCreateInput>
    /**
     * In case the rekam_faktur_pajak was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rekam_faktur_pajakUpdateInput, rekam_faktur_pajakUncheckedUpdateInput>
  }

  /**
   * rekam_faktur_pajak delete
   */
  export type rekam_faktur_pajakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak
     */
    select?: rekam_faktur_pajakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajakInclude<ExtArgs> | null
    /**
     * Filter which rekam_faktur_pajak to delete.
     */
    where: rekam_faktur_pajakWhereUniqueInput
  }

  /**
   * rekam_faktur_pajak deleteMany
   */
  export type rekam_faktur_pajakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rekam_faktur_pajaks to delete
     */
    where?: rekam_faktur_pajakWhereInput
  }

  /**
   * rekam_faktur_pajak.rekam_faktur_pajak_detail
   */
  export type rekam_faktur_pajak$rekam_faktur_pajak_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak_detail
     */
    select?: rekam_faktur_pajak_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajak_detailInclude<ExtArgs> | null
    where?: rekam_faktur_pajak_detailWhereInput
    orderBy?: rekam_faktur_pajak_detailOrderByWithRelationInput | rekam_faktur_pajak_detailOrderByWithRelationInput[]
    cursor?: rekam_faktur_pajak_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rekam_faktur_pajak_detailScalarFieldEnum | Rekam_faktur_pajak_detailScalarFieldEnum[]
  }

  /**
   * rekam_faktur_pajak without action
   */
  export type rekam_faktur_pajakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak
     */
    select?: rekam_faktur_pajakSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajakInclude<ExtArgs> | null
  }


  /**
   * Model rekam_faktur_pajak_detail
   */

  export type AggregateRekam_faktur_pajak_detail = {
    _count: Rekam_faktur_pajak_detailCountAggregateOutputType | null
    _avg: Rekam_faktur_pajak_detailAvgAggregateOutputType | null
    _sum: Rekam_faktur_pajak_detailSumAggregateOutputType | null
    _min: Rekam_faktur_pajak_detailMinAggregateOutputType | null
    _max: Rekam_faktur_pajak_detailMaxAggregateOutputType | null
  }

  export type Rekam_faktur_pajak_detailAvgAggregateOutputType = {
    id: number | null
    rekam_faktur_pajak_id: number | null
    penjualan_id: number | null
    customer_id: number | null
  }

  export type Rekam_faktur_pajak_detailSumAggregateOutputType = {
    id: number | null
    rekam_faktur_pajak_id: number | null
    penjualan_id: number | null
    customer_id: number | null
  }

  export type Rekam_faktur_pajak_detailMinAggregateOutputType = {
    id: number | null
    rekam_faktur_pajak_id: number | null
    penjualan_id: number | null
    customer_id: number | null
    tanggal: Date | null
    nama_customer: string | null
    no_npwp: string | null
    no_nik: string | null
    no_faktur_pajak: string | null
  }

  export type Rekam_faktur_pajak_detailMaxAggregateOutputType = {
    id: number | null
    rekam_faktur_pajak_id: number | null
    penjualan_id: number | null
    customer_id: number | null
    tanggal: Date | null
    nama_customer: string | null
    no_npwp: string | null
    no_nik: string | null
    no_faktur_pajak: string | null
  }

  export type Rekam_faktur_pajak_detailCountAggregateOutputType = {
    id: number
    rekam_faktur_pajak_id: number
    penjualan_id: number
    customer_id: number
    tanggal: number
    nama_customer: number
    no_npwp: number
    no_nik: number
    no_faktur_pajak: number
    _all: number
  }


  export type Rekam_faktur_pajak_detailAvgAggregateInputType = {
    id?: true
    rekam_faktur_pajak_id?: true
    penjualan_id?: true
    customer_id?: true
  }

  export type Rekam_faktur_pajak_detailSumAggregateInputType = {
    id?: true
    rekam_faktur_pajak_id?: true
    penjualan_id?: true
    customer_id?: true
  }

  export type Rekam_faktur_pajak_detailMinAggregateInputType = {
    id?: true
    rekam_faktur_pajak_id?: true
    penjualan_id?: true
    customer_id?: true
    tanggal?: true
    nama_customer?: true
    no_npwp?: true
    no_nik?: true
    no_faktur_pajak?: true
  }

  export type Rekam_faktur_pajak_detailMaxAggregateInputType = {
    id?: true
    rekam_faktur_pajak_id?: true
    penjualan_id?: true
    customer_id?: true
    tanggal?: true
    nama_customer?: true
    no_npwp?: true
    no_nik?: true
    no_faktur_pajak?: true
  }

  export type Rekam_faktur_pajak_detailCountAggregateInputType = {
    id?: true
    rekam_faktur_pajak_id?: true
    penjualan_id?: true
    customer_id?: true
    tanggal?: true
    nama_customer?: true
    no_npwp?: true
    no_nik?: true
    no_faktur_pajak?: true
    _all?: true
  }

  export type Rekam_faktur_pajak_detailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rekam_faktur_pajak_detail to aggregate.
     */
    where?: rekam_faktur_pajak_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rekam_faktur_pajak_details to fetch.
     */
    orderBy?: rekam_faktur_pajak_detailOrderByWithRelationInput | rekam_faktur_pajak_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rekam_faktur_pajak_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rekam_faktur_pajak_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rekam_faktur_pajak_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rekam_faktur_pajak_details
    **/
    _count?: true | Rekam_faktur_pajak_detailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rekam_faktur_pajak_detailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rekam_faktur_pajak_detailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rekam_faktur_pajak_detailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rekam_faktur_pajak_detailMaxAggregateInputType
  }

  export type GetRekam_faktur_pajak_detailAggregateType<T extends Rekam_faktur_pajak_detailAggregateArgs> = {
        [P in keyof T & keyof AggregateRekam_faktur_pajak_detail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRekam_faktur_pajak_detail[P]>
      : GetScalarType<T[P], AggregateRekam_faktur_pajak_detail[P]>
  }




  export type rekam_faktur_pajak_detailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rekam_faktur_pajak_detailWhereInput
    orderBy?: rekam_faktur_pajak_detailOrderByWithAggregationInput | rekam_faktur_pajak_detailOrderByWithAggregationInput[]
    by: Rekam_faktur_pajak_detailScalarFieldEnum[] | Rekam_faktur_pajak_detailScalarFieldEnum
    having?: rekam_faktur_pajak_detailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rekam_faktur_pajak_detailCountAggregateInputType | true
    _avg?: Rekam_faktur_pajak_detailAvgAggregateInputType
    _sum?: Rekam_faktur_pajak_detailSumAggregateInputType
    _min?: Rekam_faktur_pajak_detailMinAggregateInputType
    _max?: Rekam_faktur_pajak_detailMaxAggregateInputType
  }

  export type Rekam_faktur_pajak_detailGroupByOutputType = {
    id: number
    rekam_faktur_pajak_id: number
    penjualan_id: number
    customer_id: number
    tanggal: Date
    nama_customer: string
    no_npwp: string | null
    no_nik: string | null
    no_faktur_pajak: string
    _count: Rekam_faktur_pajak_detailCountAggregateOutputType | null
    _avg: Rekam_faktur_pajak_detailAvgAggregateOutputType | null
    _sum: Rekam_faktur_pajak_detailSumAggregateOutputType | null
    _min: Rekam_faktur_pajak_detailMinAggregateOutputType | null
    _max: Rekam_faktur_pajak_detailMaxAggregateOutputType | null
  }

  type GetRekam_faktur_pajak_detailGroupByPayload<T extends rekam_faktur_pajak_detailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rekam_faktur_pajak_detailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rekam_faktur_pajak_detailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rekam_faktur_pajak_detailGroupByOutputType[P]>
            : GetScalarType<T[P], Rekam_faktur_pajak_detailGroupByOutputType[P]>
        }
      >
    >


  export type rekam_faktur_pajak_detailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rekam_faktur_pajak_id?: boolean
    penjualan_id?: boolean
    customer_id?: boolean
    tanggal?: boolean
    nama_customer?: boolean
    no_npwp?: boolean
    no_nik?: boolean
    no_faktur_pajak?: boolean
    rekam_faktur_pajak?: boolean | rekam_faktur_pajakDefaultArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rekam_faktur_pajak_detail"]>


  export type rekam_faktur_pajak_detailSelectScalar = {
    id?: boolean
    rekam_faktur_pajak_id?: boolean
    penjualan_id?: boolean
    customer_id?: boolean
    tanggal?: boolean
    nama_customer?: boolean
    no_npwp?: boolean
    no_nik?: boolean
    no_faktur_pajak?: boolean
  }

  export type rekam_faktur_pajak_detailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rekam_faktur_pajak?: boolean | rekam_faktur_pajakDefaultArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }

  export type $rekam_faktur_pajak_detailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rekam_faktur_pajak_detail"
    objects: {
      rekam_faktur_pajak: Prisma.$rekam_faktur_pajakPayload<ExtArgs>
      customer: Prisma.$customerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rekam_faktur_pajak_id: number
      penjualan_id: number
      customer_id: number
      tanggal: Date
      nama_customer: string
      no_npwp: string | null
      no_nik: string | null
      no_faktur_pajak: string
    }, ExtArgs["result"]["rekam_faktur_pajak_detail"]>
    composites: {}
  }

  type rekam_faktur_pajak_detailGetPayload<S extends boolean | null | undefined | rekam_faktur_pajak_detailDefaultArgs> = $Result.GetResult<Prisma.$rekam_faktur_pajak_detailPayload, S>

  type rekam_faktur_pajak_detailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<rekam_faktur_pajak_detailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Rekam_faktur_pajak_detailCountAggregateInputType | true
    }

  export interface rekam_faktur_pajak_detailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rekam_faktur_pajak_detail'], meta: { name: 'rekam_faktur_pajak_detail' } }
    /**
     * Find zero or one Rekam_faktur_pajak_detail that matches the filter.
     * @param {rekam_faktur_pajak_detailFindUniqueArgs} args - Arguments to find a Rekam_faktur_pajak_detail
     * @example
     * // Get one Rekam_faktur_pajak_detail
     * const rekam_faktur_pajak_detail = await prisma.rekam_faktur_pajak_detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rekam_faktur_pajak_detailFindUniqueArgs>(args: SelectSubset<T, rekam_faktur_pajak_detailFindUniqueArgs<ExtArgs>>): Prisma__rekam_faktur_pajak_detailClient<$Result.GetResult<Prisma.$rekam_faktur_pajak_detailPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Rekam_faktur_pajak_detail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {rekam_faktur_pajak_detailFindUniqueOrThrowArgs} args - Arguments to find a Rekam_faktur_pajak_detail
     * @example
     * // Get one Rekam_faktur_pajak_detail
     * const rekam_faktur_pajak_detail = await prisma.rekam_faktur_pajak_detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rekam_faktur_pajak_detailFindUniqueOrThrowArgs>(args: SelectSubset<T, rekam_faktur_pajak_detailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rekam_faktur_pajak_detailClient<$Result.GetResult<Prisma.$rekam_faktur_pajak_detailPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Rekam_faktur_pajak_detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekam_faktur_pajak_detailFindFirstArgs} args - Arguments to find a Rekam_faktur_pajak_detail
     * @example
     * // Get one Rekam_faktur_pajak_detail
     * const rekam_faktur_pajak_detail = await prisma.rekam_faktur_pajak_detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rekam_faktur_pajak_detailFindFirstArgs>(args?: SelectSubset<T, rekam_faktur_pajak_detailFindFirstArgs<ExtArgs>>): Prisma__rekam_faktur_pajak_detailClient<$Result.GetResult<Prisma.$rekam_faktur_pajak_detailPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Rekam_faktur_pajak_detail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekam_faktur_pajak_detailFindFirstOrThrowArgs} args - Arguments to find a Rekam_faktur_pajak_detail
     * @example
     * // Get one Rekam_faktur_pajak_detail
     * const rekam_faktur_pajak_detail = await prisma.rekam_faktur_pajak_detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rekam_faktur_pajak_detailFindFirstOrThrowArgs>(args?: SelectSubset<T, rekam_faktur_pajak_detailFindFirstOrThrowArgs<ExtArgs>>): Prisma__rekam_faktur_pajak_detailClient<$Result.GetResult<Prisma.$rekam_faktur_pajak_detailPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rekam_faktur_pajak_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekam_faktur_pajak_detailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rekam_faktur_pajak_details
     * const rekam_faktur_pajak_details = await prisma.rekam_faktur_pajak_detail.findMany()
     * 
     * // Get first 10 Rekam_faktur_pajak_details
     * const rekam_faktur_pajak_details = await prisma.rekam_faktur_pajak_detail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rekam_faktur_pajak_detailWithIdOnly = await prisma.rekam_faktur_pajak_detail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rekam_faktur_pajak_detailFindManyArgs>(args?: SelectSubset<T, rekam_faktur_pajak_detailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rekam_faktur_pajak_detailPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Rekam_faktur_pajak_detail.
     * @param {rekam_faktur_pajak_detailCreateArgs} args - Arguments to create a Rekam_faktur_pajak_detail.
     * @example
     * // Create one Rekam_faktur_pajak_detail
     * const Rekam_faktur_pajak_detail = await prisma.rekam_faktur_pajak_detail.create({
     *   data: {
     *     // ... data to create a Rekam_faktur_pajak_detail
     *   }
     * })
     * 
     */
    create<T extends rekam_faktur_pajak_detailCreateArgs>(args: SelectSubset<T, rekam_faktur_pajak_detailCreateArgs<ExtArgs>>): Prisma__rekam_faktur_pajak_detailClient<$Result.GetResult<Prisma.$rekam_faktur_pajak_detailPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rekam_faktur_pajak_details.
     * @param {rekam_faktur_pajak_detailCreateManyArgs} args - Arguments to create many Rekam_faktur_pajak_details.
     * @example
     * // Create many Rekam_faktur_pajak_details
     * const rekam_faktur_pajak_detail = await prisma.rekam_faktur_pajak_detail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rekam_faktur_pajak_detailCreateManyArgs>(args?: SelectSubset<T, rekam_faktur_pajak_detailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rekam_faktur_pajak_detail.
     * @param {rekam_faktur_pajak_detailDeleteArgs} args - Arguments to delete one Rekam_faktur_pajak_detail.
     * @example
     * // Delete one Rekam_faktur_pajak_detail
     * const Rekam_faktur_pajak_detail = await prisma.rekam_faktur_pajak_detail.delete({
     *   where: {
     *     // ... filter to delete one Rekam_faktur_pajak_detail
     *   }
     * })
     * 
     */
    delete<T extends rekam_faktur_pajak_detailDeleteArgs>(args: SelectSubset<T, rekam_faktur_pajak_detailDeleteArgs<ExtArgs>>): Prisma__rekam_faktur_pajak_detailClient<$Result.GetResult<Prisma.$rekam_faktur_pajak_detailPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Rekam_faktur_pajak_detail.
     * @param {rekam_faktur_pajak_detailUpdateArgs} args - Arguments to update one Rekam_faktur_pajak_detail.
     * @example
     * // Update one Rekam_faktur_pajak_detail
     * const rekam_faktur_pajak_detail = await prisma.rekam_faktur_pajak_detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rekam_faktur_pajak_detailUpdateArgs>(args: SelectSubset<T, rekam_faktur_pajak_detailUpdateArgs<ExtArgs>>): Prisma__rekam_faktur_pajak_detailClient<$Result.GetResult<Prisma.$rekam_faktur_pajak_detailPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rekam_faktur_pajak_details.
     * @param {rekam_faktur_pajak_detailDeleteManyArgs} args - Arguments to filter Rekam_faktur_pajak_details to delete.
     * @example
     * // Delete a few Rekam_faktur_pajak_details
     * const { count } = await prisma.rekam_faktur_pajak_detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rekam_faktur_pajak_detailDeleteManyArgs>(args?: SelectSubset<T, rekam_faktur_pajak_detailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rekam_faktur_pajak_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekam_faktur_pajak_detailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rekam_faktur_pajak_details
     * const rekam_faktur_pajak_detail = await prisma.rekam_faktur_pajak_detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rekam_faktur_pajak_detailUpdateManyArgs>(args: SelectSubset<T, rekam_faktur_pajak_detailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rekam_faktur_pajak_detail.
     * @param {rekam_faktur_pajak_detailUpsertArgs} args - Arguments to update or create a Rekam_faktur_pajak_detail.
     * @example
     * // Update or create a Rekam_faktur_pajak_detail
     * const rekam_faktur_pajak_detail = await prisma.rekam_faktur_pajak_detail.upsert({
     *   create: {
     *     // ... data to create a Rekam_faktur_pajak_detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rekam_faktur_pajak_detail we want to update
     *   }
     * })
     */
    upsert<T extends rekam_faktur_pajak_detailUpsertArgs>(args: SelectSubset<T, rekam_faktur_pajak_detailUpsertArgs<ExtArgs>>): Prisma__rekam_faktur_pajak_detailClient<$Result.GetResult<Prisma.$rekam_faktur_pajak_detailPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rekam_faktur_pajak_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekam_faktur_pajak_detailCountArgs} args - Arguments to filter Rekam_faktur_pajak_details to count.
     * @example
     * // Count the number of Rekam_faktur_pajak_details
     * const count = await prisma.rekam_faktur_pajak_detail.count({
     *   where: {
     *     // ... the filter for the Rekam_faktur_pajak_details we want to count
     *   }
     * })
    **/
    count<T extends rekam_faktur_pajak_detailCountArgs>(
      args?: Subset<T, rekam_faktur_pajak_detailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rekam_faktur_pajak_detailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rekam_faktur_pajak_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rekam_faktur_pajak_detailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rekam_faktur_pajak_detailAggregateArgs>(args: Subset<T, Rekam_faktur_pajak_detailAggregateArgs>): Prisma.PrismaPromise<GetRekam_faktur_pajak_detailAggregateType<T>>

    /**
     * Group by Rekam_faktur_pajak_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rekam_faktur_pajak_detailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rekam_faktur_pajak_detailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rekam_faktur_pajak_detailGroupByArgs['orderBy'] }
        : { orderBy?: rekam_faktur_pajak_detailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rekam_faktur_pajak_detailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRekam_faktur_pajak_detailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rekam_faktur_pajak_detail model
   */
  readonly fields: rekam_faktur_pajak_detailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rekam_faktur_pajak_detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rekam_faktur_pajak_detailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rekam_faktur_pajak<T extends rekam_faktur_pajakDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rekam_faktur_pajakDefaultArgs<ExtArgs>>): Prisma__rekam_faktur_pajakClient<$Result.GetResult<Prisma.$rekam_faktur_pajakPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    customer<T extends customerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customerDefaultArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rekam_faktur_pajak_detail model
   */ 
  interface rekam_faktur_pajak_detailFieldRefs {
    readonly id: FieldRef<"rekam_faktur_pajak_detail", 'Int'>
    readonly rekam_faktur_pajak_id: FieldRef<"rekam_faktur_pajak_detail", 'Int'>
    readonly penjualan_id: FieldRef<"rekam_faktur_pajak_detail", 'Int'>
    readonly customer_id: FieldRef<"rekam_faktur_pajak_detail", 'Int'>
    readonly tanggal: FieldRef<"rekam_faktur_pajak_detail", 'DateTime'>
    readonly nama_customer: FieldRef<"rekam_faktur_pajak_detail", 'String'>
    readonly no_npwp: FieldRef<"rekam_faktur_pajak_detail", 'String'>
    readonly no_nik: FieldRef<"rekam_faktur_pajak_detail", 'String'>
    readonly no_faktur_pajak: FieldRef<"rekam_faktur_pajak_detail", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rekam_faktur_pajak_detail findUnique
   */
  export type rekam_faktur_pajak_detailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak_detail
     */
    select?: rekam_faktur_pajak_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajak_detailInclude<ExtArgs> | null
    /**
     * Filter, which rekam_faktur_pajak_detail to fetch.
     */
    where: rekam_faktur_pajak_detailWhereUniqueInput
  }

  /**
   * rekam_faktur_pajak_detail findUniqueOrThrow
   */
  export type rekam_faktur_pajak_detailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak_detail
     */
    select?: rekam_faktur_pajak_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajak_detailInclude<ExtArgs> | null
    /**
     * Filter, which rekam_faktur_pajak_detail to fetch.
     */
    where: rekam_faktur_pajak_detailWhereUniqueInput
  }

  /**
   * rekam_faktur_pajak_detail findFirst
   */
  export type rekam_faktur_pajak_detailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak_detail
     */
    select?: rekam_faktur_pajak_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajak_detailInclude<ExtArgs> | null
    /**
     * Filter, which rekam_faktur_pajak_detail to fetch.
     */
    where?: rekam_faktur_pajak_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rekam_faktur_pajak_details to fetch.
     */
    orderBy?: rekam_faktur_pajak_detailOrderByWithRelationInput | rekam_faktur_pajak_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rekam_faktur_pajak_details.
     */
    cursor?: rekam_faktur_pajak_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rekam_faktur_pajak_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rekam_faktur_pajak_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rekam_faktur_pajak_details.
     */
    distinct?: Rekam_faktur_pajak_detailScalarFieldEnum | Rekam_faktur_pajak_detailScalarFieldEnum[]
  }

  /**
   * rekam_faktur_pajak_detail findFirstOrThrow
   */
  export type rekam_faktur_pajak_detailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak_detail
     */
    select?: rekam_faktur_pajak_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajak_detailInclude<ExtArgs> | null
    /**
     * Filter, which rekam_faktur_pajak_detail to fetch.
     */
    where?: rekam_faktur_pajak_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rekam_faktur_pajak_details to fetch.
     */
    orderBy?: rekam_faktur_pajak_detailOrderByWithRelationInput | rekam_faktur_pajak_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rekam_faktur_pajak_details.
     */
    cursor?: rekam_faktur_pajak_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rekam_faktur_pajak_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rekam_faktur_pajak_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rekam_faktur_pajak_details.
     */
    distinct?: Rekam_faktur_pajak_detailScalarFieldEnum | Rekam_faktur_pajak_detailScalarFieldEnum[]
  }

  /**
   * rekam_faktur_pajak_detail findMany
   */
  export type rekam_faktur_pajak_detailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak_detail
     */
    select?: rekam_faktur_pajak_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajak_detailInclude<ExtArgs> | null
    /**
     * Filter, which rekam_faktur_pajak_details to fetch.
     */
    where?: rekam_faktur_pajak_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rekam_faktur_pajak_details to fetch.
     */
    orderBy?: rekam_faktur_pajak_detailOrderByWithRelationInput | rekam_faktur_pajak_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rekam_faktur_pajak_details.
     */
    cursor?: rekam_faktur_pajak_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rekam_faktur_pajak_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rekam_faktur_pajak_details.
     */
    skip?: number
    distinct?: Rekam_faktur_pajak_detailScalarFieldEnum | Rekam_faktur_pajak_detailScalarFieldEnum[]
  }

  /**
   * rekam_faktur_pajak_detail create
   */
  export type rekam_faktur_pajak_detailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak_detail
     */
    select?: rekam_faktur_pajak_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajak_detailInclude<ExtArgs> | null
    /**
     * The data needed to create a rekam_faktur_pajak_detail.
     */
    data: XOR<rekam_faktur_pajak_detailCreateInput, rekam_faktur_pajak_detailUncheckedCreateInput>
  }

  /**
   * rekam_faktur_pajak_detail createMany
   */
  export type rekam_faktur_pajak_detailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rekam_faktur_pajak_details.
     */
    data: rekam_faktur_pajak_detailCreateManyInput | rekam_faktur_pajak_detailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rekam_faktur_pajak_detail update
   */
  export type rekam_faktur_pajak_detailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak_detail
     */
    select?: rekam_faktur_pajak_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajak_detailInclude<ExtArgs> | null
    /**
     * The data needed to update a rekam_faktur_pajak_detail.
     */
    data: XOR<rekam_faktur_pajak_detailUpdateInput, rekam_faktur_pajak_detailUncheckedUpdateInput>
    /**
     * Choose, which rekam_faktur_pajak_detail to update.
     */
    where: rekam_faktur_pajak_detailWhereUniqueInput
  }

  /**
   * rekam_faktur_pajak_detail updateMany
   */
  export type rekam_faktur_pajak_detailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rekam_faktur_pajak_details.
     */
    data: XOR<rekam_faktur_pajak_detailUpdateManyMutationInput, rekam_faktur_pajak_detailUncheckedUpdateManyInput>
    /**
     * Filter which rekam_faktur_pajak_details to update
     */
    where?: rekam_faktur_pajak_detailWhereInput
  }

  /**
   * rekam_faktur_pajak_detail upsert
   */
  export type rekam_faktur_pajak_detailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak_detail
     */
    select?: rekam_faktur_pajak_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajak_detailInclude<ExtArgs> | null
    /**
     * The filter to search for the rekam_faktur_pajak_detail to update in case it exists.
     */
    where: rekam_faktur_pajak_detailWhereUniqueInput
    /**
     * In case the rekam_faktur_pajak_detail found by the `where` argument doesn't exist, create a new rekam_faktur_pajak_detail with this data.
     */
    create: XOR<rekam_faktur_pajak_detailCreateInput, rekam_faktur_pajak_detailUncheckedCreateInput>
    /**
     * In case the rekam_faktur_pajak_detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rekam_faktur_pajak_detailUpdateInput, rekam_faktur_pajak_detailUncheckedUpdateInput>
  }

  /**
   * rekam_faktur_pajak_detail delete
   */
  export type rekam_faktur_pajak_detailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak_detail
     */
    select?: rekam_faktur_pajak_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajak_detailInclude<ExtArgs> | null
    /**
     * Filter which rekam_faktur_pajak_detail to delete.
     */
    where: rekam_faktur_pajak_detailWhereUniqueInput
  }

  /**
   * rekam_faktur_pajak_detail deleteMany
   */
  export type rekam_faktur_pajak_detailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rekam_faktur_pajak_details to delete
     */
    where?: rekam_faktur_pajak_detailWhereInput
  }

  /**
   * rekam_faktur_pajak_detail without action
   */
  export type rekam_faktur_pajak_detailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rekam_faktur_pajak_detail
     */
    select?: rekam_faktur_pajak_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rekam_faktur_pajak_detailInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    alias: 'alias',
    alamat: 'alamat',
    telepon1: 'telepon1',
    telepon2: 'telepon2',
    npwp: 'npwp',
    nik: 'nik',
    kota: 'kota',
    provinsi: 'provinsi',
    kode_pos: 'kode_pos',
    email: 'email',
    contact_person: 'contact_person',
    tempo_kredit: 'tempo_kredit',
    warning_kredit: 'warning_kredit',
    limit_warning_type: 'limit_warning_type',
    limit_amount: 'limit_amount',
    limit_atas: 'limit_atas',
    limit_warning_amount: 'limit_warning_amount',
    status_aktif: 'status_aktif',
    img_link: 'img_link',
    npwp_link: 'npwp_link',
    ktp_link: 'ktp_link',
    medsos_link: 'medsos_link',
    tipe_company: 'tipe_company',
    blok: 'blok',
    no: 'no',
    rt: 'rt',
    rw: 'rw',
    kecamatan: 'kecamatan',
    kelurahan: 'kelurahan',
    updated_at: 'updated_at'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const Rekam_faktur_pajakScalarFieldEnum: {
    id: 'id',
    tanggal_awal: 'tanggal_awal',
    tanggal_akhir: 'tanggal_akhir',
    status: 'status',
    locked_date: 'locked_date'
  };

  export type Rekam_faktur_pajakScalarFieldEnum = (typeof Rekam_faktur_pajakScalarFieldEnum)[keyof typeof Rekam_faktur_pajakScalarFieldEnum]


  export const Rekam_faktur_pajak_detailScalarFieldEnum: {
    id: 'id',
    rekam_faktur_pajak_id: 'rekam_faktur_pajak_id',
    penjualan_id: 'penjualan_id',
    customer_id: 'customer_id',
    tanggal: 'tanggal',
    nama_customer: 'nama_customer',
    no_npwp: 'no_npwp',
    no_nik: 'no_nik',
    no_faktur_pajak: 'no_faktur_pajak'
  };

  export type Rekam_faktur_pajak_detailScalarFieldEnum = (typeof Rekam_faktur_pajak_detailScalarFieldEnum)[keyof typeof Rekam_faktur_pajak_detailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    id?: IntFilter<"customer"> | number
    nama?: StringFilter<"customer"> | string
    alias?: StringNullableFilter<"customer"> | string | null
    alamat?: StringFilter<"customer"> | string
    telepon1?: StringFilter<"customer"> | string
    telepon2?: StringFilter<"customer"> | string
    npwp?: StringNullableFilter<"customer"> | string | null
    nik?: StringNullableFilter<"customer"> | string | null
    kota?: StringNullableFilter<"customer"> | string | null
    provinsi?: StringNullableFilter<"customer"> | string | null
    kode_pos?: StringNullableFilter<"customer"> | string | null
    email?: StringNullableFilter<"customer"> | string | null
    contact_person?: StringNullableFilter<"customer"> | string | null
    tempo_kredit?: IntNullableFilter<"customer"> | number | null
    warning_kredit?: IntNullableFilter<"customer"> | number | null
    limit_warning_type?: IntNullableFilter<"customer"> | number | null
    limit_amount?: IntNullableFilter<"customer"> | number | null
    limit_atas?: IntNullableFilter<"customer"> | number | null
    limit_warning_amount?: IntNullableFilter<"customer"> | number | null
    status_aktif?: BoolFilter<"customer"> | boolean
    img_link?: StringNullableFilter<"customer"> | string | null
    npwp_link?: StringNullableFilter<"customer"> | string | null
    ktp_link?: StringNullableFilter<"customer"> | string | null
    medsos_link?: StringNullableFilter<"customer"> | string | null
    tipe_company?: StringFilter<"customer"> | string
    blok?: StringFilter<"customer"> | string
    no?: StringFilter<"customer"> | string
    rt?: StringFilter<"customer"> | string
    rw?: StringFilter<"customer"> | string
    kecamatan?: StringFilter<"customer"> | string
    kelurahan?: StringFilter<"customer"> | string
    updated_at?: DateTimeFilter<"customer"> | Date | string
    rekam_faktur_pajak_detail?: Rekam_faktur_pajak_detailListRelationFilter
  }

  export type customerOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    alias?: SortOrderInput | SortOrder
    alamat?: SortOrder
    telepon1?: SortOrder
    telepon2?: SortOrder
    npwp?: SortOrderInput | SortOrder
    nik?: SortOrderInput | SortOrder
    kota?: SortOrderInput | SortOrder
    provinsi?: SortOrderInput | SortOrder
    kode_pos?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contact_person?: SortOrderInput | SortOrder
    tempo_kredit?: SortOrderInput | SortOrder
    warning_kredit?: SortOrderInput | SortOrder
    limit_warning_type?: SortOrderInput | SortOrder
    limit_amount?: SortOrderInput | SortOrder
    limit_atas?: SortOrderInput | SortOrder
    limit_warning_amount?: SortOrderInput | SortOrder
    status_aktif?: SortOrder
    img_link?: SortOrderInput | SortOrder
    npwp_link?: SortOrderInput | SortOrder
    ktp_link?: SortOrderInput | SortOrder
    medsos_link?: SortOrderInput | SortOrder
    tipe_company?: SortOrder
    blok?: SortOrder
    no?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    kecamatan?: SortOrder
    kelurahan?: SortOrder
    updated_at?: SortOrder
    rekam_faktur_pajak_detail?: rekam_faktur_pajak_detailOrderByRelationAggregateInput
  }

  export type customerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    nama?: StringFilter<"customer"> | string
    alias?: StringNullableFilter<"customer"> | string | null
    alamat?: StringFilter<"customer"> | string
    telepon1?: StringFilter<"customer"> | string
    telepon2?: StringFilter<"customer"> | string
    npwp?: StringNullableFilter<"customer"> | string | null
    nik?: StringNullableFilter<"customer"> | string | null
    kota?: StringNullableFilter<"customer"> | string | null
    provinsi?: StringNullableFilter<"customer"> | string | null
    kode_pos?: StringNullableFilter<"customer"> | string | null
    email?: StringNullableFilter<"customer"> | string | null
    contact_person?: StringNullableFilter<"customer"> | string | null
    tempo_kredit?: IntNullableFilter<"customer"> | number | null
    warning_kredit?: IntNullableFilter<"customer"> | number | null
    limit_warning_type?: IntNullableFilter<"customer"> | number | null
    limit_amount?: IntNullableFilter<"customer"> | number | null
    limit_atas?: IntNullableFilter<"customer"> | number | null
    limit_warning_amount?: IntNullableFilter<"customer"> | number | null
    status_aktif?: BoolFilter<"customer"> | boolean
    img_link?: StringNullableFilter<"customer"> | string | null
    npwp_link?: StringNullableFilter<"customer"> | string | null
    ktp_link?: StringNullableFilter<"customer"> | string | null
    medsos_link?: StringNullableFilter<"customer"> | string | null
    tipe_company?: StringFilter<"customer"> | string
    blok?: StringFilter<"customer"> | string
    no?: StringFilter<"customer"> | string
    rt?: StringFilter<"customer"> | string
    rw?: StringFilter<"customer"> | string
    kecamatan?: StringFilter<"customer"> | string
    kelurahan?: StringFilter<"customer"> | string
    updated_at?: DateTimeFilter<"customer"> | Date | string
    rekam_faktur_pajak_detail?: Rekam_faktur_pajak_detailListRelationFilter
  }, "id">

  export type customerOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    alias?: SortOrderInput | SortOrder
    alamat?: SortOrder
    telepon1?: SortOrder
    telepon2?: SortOrder
    npwp?: SortOrderInput | SortOrder
    nik?: SortOrderInput | SortOrder
    kota?: SortOrderInput | SortOrder
    provinsi?: SortOrderInput | SortOrder
    kode_pos?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contact_person?: SortOrderInput | SortOrder
    tempo_kredit?: SortOrderInput | SortOrder
    warning_kredit?: SortOrderInput | SortOrder
    limit_warning_type?: SortOrderInput | SortOrder
    limit_amount?: SortOrderInput | SortOrder
    limit_atas?: SortOrderInput | SortOrder
    limit_warning_amount?: SortOrderInput | SortOrder
    status_aktif?: SortOrder
    img_link?: SortOrderInput | SortOrder
    npwp_link?: SortOrderInput | SortOrder
    ktp_link?: SortOrderInput | SortOrder
    medsos_link?: SortOrderInput | SortOrder
    tipe_company?: SortOrder
    blok?: SortOrder
    no?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    kecamatan?: SortOrder
    kelurahan?: SortOrder
    updated_at?: SortOrder
    _count?: customerCountOrderByAggregateInput
    _avg?: customerAvgOrderByAggregateInput
    _max?: customerMaxOrderByAggregateInput
    _min?: customerMinOrderByAggregateInput
    _sum?: customerSumOrderByAggregateInput
  }

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    OR?: customerScalarWhereWithAggregatesInput[]
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"customer"> | number
    nama?: StringWithAggregatesFilter<"customer"> | string
    alias?: StringNullableWithAggregatesFilter<"customer"> | string | null
    alamat?: StringWithAggregatesFilter<"customer"> | string
    telepon1?: StringWithAggregatesFilter<"customer"> | string
    telepon2?: StringWithAggregatesFilter<"customer"> | string
    npwp?: StringNullableWithAggregatesFilter<"customer"> | string | null
    nik?: StringNullableWithAggregatesFilter<"customer"> | string | null
    kota?: StringNullableWithAggregatesFilter<"customer"> | string | null
    provinsi?: StringNullableWithAggregatesFilter<"customer"> | string | null
    kode_pos?: StringNullableWithAggregatesFilter<"customer"> | string | null
    email?: StringNullableWithAggregatesFilter<"customer"> | string | null
    contact_person?: StringNullableWithAggregatesFilter<"customer"> | string | null
    tempo_kredit?: IntNullableWithAggregatesFilter<"customer"> | number | null
    warning_kredit?: IntNullableWithAggregatesFilter<"customer"> | number | null
    limit_warning_type?: IntNullableWithAggregatesFilter<"customer"> | number | null
    limit_amount?: IntNullableWithAggregatesFilter<"customer"> | number | null
    limit_atas?: IntNullableWithAggregatesFilter<"customer"> | number | null
    limit_warning_amount?: IntNullableWithAggregatesFilter<"customer"> | number | null
    status_aktif?: BoolWithAggregatesFilter<"customer"> | boolean
    img_link?: StringNullableWithAggregatesFilter<"customer"> | string | null
    npwp_link?: StringNullableWithAggregatesFilter<"customer"> | string | null
    ktp_link?: StringNullableWithAggregatesFilter<"customer"> | string | null
    medsos_link?: StringNullableWithAggregatesFilter<"customer"> | string | null
    tipe_company?: StringWithAggregatesFilter<"customer"> | string
    blok?: StringWithAggregatesFilter<"customer"> | string
    no?: StringWithAggregatesFilter<"customer"> | string
    rt?: StringWithAggregatesFilter<"customer"> | string
    rw?: StringWithAggregatesFilter<"customer"> | string
    kecamatan?: StringWithAggregatesFilter<"customer"> | string
    kelurahan?: StringWithAggregatesFilter<"customer"> | string
    updated_at?: DateTimeWithAggregatesFilter<"customer"> | Date | string
  }

  export type rekam_faktur_pajakWhereInput = {
    AND?: rekam_faktur_pajakWhereInput | rekam_faktur_pajakWhereInput[]
    OR?: rekam_faktur_pajakWhereInput[]
    NOT?: rekam_faktur_pajakWhereInput | rekam_faktur_pajakWhereInput[]
    id?: IntFilter<"rekam_faktur_pajak"> | number
    tanggal_awal?: DateTimeFilter<"rekam_faktur_pajak"> | Date | string
    tanggal_akhir?: DateTimeFilter<"rekam_faktur_pajak"> | Date | string
    status?: IntFilter<"rekam_faktur_pajak"> | number
    locked_date?: DateTimeFilter<"rekam_faktur_pajak"> | Date | string
    rekam_faktur_pajak_detail?: Rekam_faktur_pajak_detailListRelationFilter
  }

  export type rekam_faktur_pajakOrderByWithRelationInput = {
    id?: SortOrder
    tanggal_awal?: SortOrder
    tanggal_akhir?: SortOrder
    status?: SortOrder
    locked_date?: SortOrder
    rekam_faktur_pajak_detail?: rekam_faktur_pajak_detailOrderByRelationAggregateInput
  }

  export type rekam_faktur_pajakWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rekam_faktur_pajakWhereInput | rekam_faktur_pajakWhereInput[]
    OR?: rekam_faktur_pajakWhereInput[]
    NOT?: rekam_faktur_pajakWhereInput | rekam_faktur_pajakWhereInput[]
    tanggal_awal?: DateTimeFilter<"rekam_faktur_pajak"> | Date | string
    tanggal_akhir?: DateTimeFilter<"rekam_faktur_pajak"> | Date | string
    status?: IntFilter<"rekam_faktur_pajak"> | number
    locked_date?: DateTimeFilter<"rekam_faktur_pajak"> | Date | string
    rekam_faktur_pajak_detail?: Rekam_faktur_pajak_detailListRelationFilter
  }, "id">

  export type rekam_faktur_pajakOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal_awal?: SortOrder
    tanggal_akhir?: SortOrder
    status?: SortOrder
    locked_date?: SortOrder
    _count?: rekam_faktur_pajakCountOrderByAggregateInput
    _avg?: rekam_faktur_pajakAvgOrderByAggregateInput
    _max?: rekam_faktur_pajakMaxOrderByAggregateInput
    _min?: rekam_faktur_pajakMinOrderByAggregateInput
    _sum?: rekam_faktur_pajakSumOrderByAggregateInput
  }

  export type rekam_faktur_pajakScalarWhereWithAggregatesInput = {
    AND?: rekam_faktur_pajakScalarWhereWithAggregatesInput | rekam_faktur_pajakScalarWhereWithAggregatesInput[]
    OR?: rekam_faktur_pajakScalarWhereWithAggregatesInput[]
    NOT?: rekam_faktur_pajakScalarWhereWithAggregatesInput | rekam_faktur_pajakScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rekam_faktur_pajak"> | number
    tanggal_awal?: DateTimeWithAggregatesFilter<"rekam_faktur_pajak"> | Date | string
    tanggal_akhir?: DateTimeWithAggregatesFilter<"rekam_faktur_pajak"> | Date | string
    status?: IntWithAggregatesFilter<"rekam_faktur_pajak"> | number
    locked_date?: DateTimeWithAggregatesFilter<"rekam_faktur_pajak"> | Date | string
  }

  export type rekam_faktur_pajak_detailWhereInput = {
    AND?: rekam_faktur_pajak_detailWhereInput | rekam_faktur_pajak_detailWhereInput[]
    OR?: rekam_faktur_pajak_detailWhereInput[]
    NOT?: rekam_faktur_pajak_detailWhereInput | rekam_faktur_pajak_detailWhereInput[]
    id?: IntFilter<"rekam_faktur_pajak_detail"> | number
    rekam_faktur_pajak_id?: IntFilter<"rekam_faktur_pajak_detail"> | number
    penjualan_id?: IntFilter<"rekam_faktur_pajak_detail"> | number
    customer_id?: IntFilter<"rekam_faktur_pajak_detail"> | number
    tanggal?: DateTimeFilter<"rekam_faktur_pajak_detail"> | Date | string
    nama_customer?: StringFilter<"rekam_faktur_pajak_detail"> | string
    no_npwp?: StringNullableFilter<"rekam_faktur_pajak_detail"> | string | null
    no_nik?: StringNullableFilter<"rekam_faktur_pajak_detail"> | string | null
    no_faktur_pajak?: StringFilter<"rekam_faktur_pajak_detail"> | string
    rekam_faktur_pajak?: XOR<Rekam_faktur_pajakRelationFilter, rekam_faktur_pajakWhereInput>
    customer?: XOR<CustomerRelationFilter, customerWhereInput>
  }

  export type rekam_faktur_pajak_detailOrderByWithRelationInput = {
    id?: SortOrder
    rekam_faktur_pajak_id?: SortOrder
    penjualan_id?: SortOrder
    customer_id?: SortOrder
    tanggal?: SortOrder
    nama_customer?: SortOrder
    no_npwp?: SortOrderInput | SortOrder
    no_nik?: SortOrderInput | SortOrder
    no_faktur_pajak?: SortOrder
    rekam_faktur_pajak?: rekam_faktur_pajakOrderByWithRelationInput
    customer?: customerOrderByWithRelationInput
  }

  export type rekam_faktur_pajak_detailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rekam_faktur_pajak_detailWhereInput | rekam_faktur_pajak_detailWhereInput[]
    OR?: rekam_faktur_pajak_detailWhereInput[]
    NOT?: rekam_faktur_pajak_detailWhereInput | rekam_faktur_pajak_detailWhereInput[]
    rekam_faktur_pajak_id?: IntFilter<"rekam_faktur_pajak_detail"> | number
    penjualan_id?: IntFilter<"rekam_faktur_pajak_detail"> | number
    customer_id?: IntFilter<"rekam_faktur_pajak_detail"> | number
    tanggal?: DateTimeFilter<"rekam_faktur_pajak_detail"> | Date | string
    nama_customer?: StringFilter<"rekam_faktur_pajak_detail"> | string
    no_npwp?: StringNullableFilter<"rekam_faktur_pajak_detail"> | string | null
    no_nik?: StringNullableFilter<"rekam_faktur_pajak_detail"> | string | null
    no_faktur_pajak?: StringFilter<"rekam_faktur_pajak_detail"> | string
    rekam_faktur_pajak?: XOR<Rekam_faktur_pajakRelationFilter, rekam_faktur_pajakWhereInput>
    customer?: XOR<CustomerRelationFilter, customerWhereInput>
  }, "id">

  export type rekam_faktur_pajak_detailOrderByWithAggregationInput = {
    id?: SortOrder
    rekam_faktur_pajak_id?: SortOrder
    penjualan_id?: SortOrder
    customer_id?: SortOrder
    tanggal?: SortOrder
    nama_customer?: SortOrder
    no_npwp?: SortOrderInput | SortOrder
    no_nik?: SortOrderInput | SortOrder
    no_faktur_pajak?: SortOrder
    _count?: rekam_faktur_pajak_detailCountOrderByAggregateInput
    _avg?: rekam_faktur_pajak_detailAvgOrderByAggregateInput
    _max?: rekam_faktur_pajak_detailMaxOrderByAggregateInput
    _min?: rekam_faktur_pajak_detailMinOrderByAggregateInput
    _sum?: rekam_faktur_pajak_detailSumOrderByAggregateInput
  }

  export type rekam_faktur_pajak_detailScalarWhereWithAggregatesInput = {
    AND?: rekam_faktur_pajak_detailScalarWhereWithAggregatesInput | rekam_faktur_pajak_detailScalarWhereWithAggregatesInput[]
    OR?: rekam_faktur_pajak_detailScalarWhereWithAggregatesInput[]
    NOT?: rekam_faktur_pajak_detailScalarWhereWithAggregatesInput | rekam_faktur_pajak_detailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rekam_faktur_pajak_detail"> | number
    rekam_faktur_pajak_id?: IntWithAggregatesFilter<"rekam_faktur_pajak_detail"> | number
    penjualan_id?: IntWithAggregatesFilter<"rekam_faktur_pajak_detail"> | number
    customer_id?: IntWithAggregatesFilter<"rekam_faktur_pajak_detail"> | number
    tanggal?: DateTimeWithAggregatesFilter<"rekam_faktur_pajak_detail"> | Date | string
    nama_customer?: StringWithAggregatesFilter<"rekam_faktur_pajak_detail"> | string
    no_npwp?: StringNullableWithAggregatesFilter<"rekam_faktur_pajak_detail"> | string | null
    no_nik?: StringNullableWithAggregatesFilter<"rekam_faktur_pajak_detail"> | string | null
    no_faktur_pajak?: StringWithAggregatesFilter<"rekam_faktur_pajak_detail"> | string
  }

  export type customerCreateInput = {
    nama: string
    alias?: string | null
    alamat: string
    telepon1: string
    telepon2: string
    npwp?: string | null
    nik?: string | null
    kota?: string | null
    provinsi?: string | null
    kode_pos?: string | null
    email?: string | null
    contact_person?: string | null
    tempo_kredit?: number | null
    warning_kredit?: number | null
    limit_warning_type?: number | null
    limit_amount?: number | null
    limit_atas?: number | null
    limit_warning_amount?: number | null
    status_aktif: boolean
    img_link?: string | null
    npwp_link?: string | null
    ktp_link?: string | null
    medsos_link?: string | null
    tipe_company: string
    blok: string
    no: string
    rt: string
    rw: string
    kecamatan: string
    kelurahan: string
    updated_at: Date | string
    rekam_faktur_pajak_detail?: rekam_faktur_pajak_detailCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateInput = {
    id?: number
    nama: string
    alias?: string | null
    alamat: string
    telepon1: string
    telepon2: string
    npwp?: string | null
    nik?: string | null
    kota?: string | null
    provinsi?: string | null
    kode_pos?: string | null
    email?: string | null
    contact_person?: string | null
    tempo_kredit?: number | null
    warning_kredit?: number | null
    limit_warning_type?: number | null
    limit_amount?: number | null
    limit_atas?: number | null
    limit_warning_amount?: number | null
    status_aktif: boolean
    img_link?: string | null
    npwp_link?: string | null
    ktp_link?: string | null
    medsos_link?: string | null
    tipe_company: string
    blok: string
    no: string
    rt: string
    rw: string
    kecamatan: string
    kelurahan: string
    updated_at: Date | string
    rekam_faktur_pajak_detail?: rekam_faktur_pajak_detailUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: StringFieldUpdateOperationsInput | string
    telepon1?: StringFieldUpdateOperationsInput | string
    telepon2?: StringFieldUpdateOperationsInput | string
    npwp?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kode_pos?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    tempo_kredit?: NullableIntFieldUpdateOperationsInput | number | null
    warning_kredit?: NullableIntFieldUpdateOperationsInput | number | null
    limit_warning_type?: NullableIntFieldUpdateOperationsInput | number | null
    limit_amount?: NullableIntFieldUpdateOperationsInput | number | null
    limit_atas?: NullableIntFieldUpdateOperationsInput | number | null
    limit_warning_amount?: NullableIntFieldUpdateOperationsInput | number | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    img_link?: NullableStringFieldUpdateOperationsInput | string | null
    npwp_link?: NullableStringFieldUpdateOperationsInput | string | null
    ktp_link?: NullableStringFieldUpdateOperationsInput | string | null
    medsos_link?: NullableStringFieldUpdateOperationsInput | string | null
    tipe_company?: StringFieldUpdateOperationsInput | string
    blok?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    rt?: StringFieldUpdateOperationsInput | string
    rw?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kelurahan?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rekam_faktur_pajak_detail?: rekam_faktur_pajak_detailUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: StringFieldUpdateOperationsInput | string
    telepon1?: StringFieldUpdateOperationsInput | string
    telepon2?: StringFieldUpdateOperationsInput | string
    npwp?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kode_pos?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    tempo_kredit?: NullableIntFieldUpdateOperationsInput | number | null
    warning_kredit?: NullableIntFieldUpdateOperationsInput | number | null
    limit_warning_type?: NullableIntFieldUpdateOperationsInput | number | null
    limit_amount?: NullableIntFieldUpdateOperationsInput | number | null
    limit_atas?: NullableIntFieldUpdateOperationsInput | number | null
    limit_warning_amount?: NullableIntFieldUpdateOperationsInput | number | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    img_link?: NullableStringFieldUpdateOperationsInput | string | null
    npwp_link?: NullableStringFieldUpdateOperationsInput | string | null
    ktp_link?: NullableStringFieldUpdateOperationsInput | string | null
    medsos_link?: NullableStringFieldUpdateOperationsInput | string | null
    tipe_company?: StringFieldUpdateOperationsInput | string
    blok?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    rt?: StringFieldUpdateOperationsInput | string
    rw?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kelurahan?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rekam_faktur_pajak_detail?: rekam_faktur_pajak_detailUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customerCreateManyInput = {
    id?: number
    nama: string
    alias?: string | null
    alamat: string
    telepon1: string
    telepon2: string
    npwp?: string | null
    nik?: string | null
    kota?: string | null
    provinsi?: string | null
    kode_pos?: string | null
    email?: string | null
    contact_person?: string | null
    tempo_kredit?: number | null
    warning_kredit?: number | null
    limit_warning_type?: number | null
    limit_amount?: number | null
    limit_atas?: number | null
    limit_warning_amount?: number | null
    status_aktif: boolean
    img_link?: string | null
    npwp_link?: string | null
    ktp_link?: string | null
    medsos_link?: string | null
    tipe_company: string
    blok: string
    no: string
    rt: string
    rw: string
    kecamatan: string
    kelurahan: string
    updated_at: Date | string
  }

  export type customerUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: StringFieldUpdateOperationsInput | string
    telepon1?: StringFieldUpdateOperationsInput | string
    telepon2?: StringFieldUpdateOperationsInput | string
    npwp?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kode_pos?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    tempo_kredit?: NullableIntFieldUpdateOperationsInput | number | null
    warning_kredit?: NullableIntFieldUpdateOperationsInput | number | null
    limit_warning_type?: NullableIntFieldUpdateOperationsInput | number | null
    limit_amount?: NullableIntFieldUpdateOperationsInput | number | null
    limit_atas?: NullableIntFieldUpdateOperationsInput | number | null
    limit_warning_amount?: NullableIntFieldUpdateOperationsInput | number | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    img_link?: NullableStringFieldUpdateOperationsInput | string | null
    npwp_link?: NullableStringFieldUpdateOperationsInput | string | null
    ktp_link?: NullableStringFieldUpdateOperationsInput | string | null
    medsos_link?: NullableStringFieldUpdateOperationsInput | string | null
    tipe_company?: StringFieldUpdateOperationsInput | string
    blok?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    rt?: StringFieldUpdateOperationsInput | string
    rw?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kelurahan?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: StringFieldUpdateOperationsInput | string
    telepon1?: StringFieldUpdateOperationsInput | string
    telepon2?: StringFieldUpdateOperationsInput | string
    npwp?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kode_pos?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    tempo_kredit?: NullableIntFieldUpdateOperationsInput | number | null
    warning_kredit?: NullableIntFieldUpdateOperationsInput | number | null
    limit_warning_type?: NullableIntFieldUpdateOperationsInput | number | null
    limit_amount?: NullableIntFieldUpdateOperationsInput | number | null
    limit_atas?: NullableIntFieldUpdateOperationsInput | number | null
    limit_warning_amount?: NullableIntFieldUpdateOperationsInput | number | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    img_link?: NullableStringFieldUpdateOperationsInput | string | null
    npwp_link?: NullableStringFieldUpdateOperationsInput | string | null
    ktp_link?: NullableStringFieldUpdateOperationsInput | string | null
    medsos_link?: NullableStringFieldUpdateOperationsInput | string | null
    tipe_company?: StringFieldUpdateOperationsInput | string
    blok?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    rt?: StringFieldUpdateOperationsInput | string
    rw?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kelurahan?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rekam_faktur_pajakCreateInput = {
    tanggal_awal: Date | string
    tanggal_akhir: Date | string
    status: number
    locked_date: Date | string
    rekam_faktur_pajak_detail?: rekam_faktur_pajak_detailCreateNestedManyWithoutRekam_faktur_pajakInput
  }

  export type rekam_faktur_pajakUncheckedCreateInput = {
    id?: number
    tanggal_awal: Date | string
    tanggal_akhir: Date | string
    status: number
    locked_date: Date | string
    rekam_faktur_pajak_detail?: rekam_faktur_pajak_detailUncheckedCreateNestedManyWithoutRekam_faktur_pajakInput
  }

  export type rekam_faktur_pajakUpdateInput = {
    tanggal_awal?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    locked_date?: DateTimeFieldUpdateOperationsInput | Date | string
    rekam_faktur_pajak_detail?: rekam_faktur_pajak_detailUpdateManyWithoutRekam_faktur_pajakNestedInput
  }

  export type rekam_faktur_pajakUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_awal?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    locked_date?: DateTimeFieldUpdateOperationsInput | Date | string
    rekam_faktur_pajak_detail?: rekam_faktur_pajak_detailUncheckedUpdateManyWithoutRekam_faktur_pajakNestedInput
  }

  export type rekam_faktur_pajakCreateManyInput = {
    id?: number
    tanggal_awal: Date | string
    tanggal_akhir: Date | string
    status: number
    locked_date: Date | string
  }

  export type rekam_faktur_pajakUpdateManyMutationInput = {
    tanggal_awal?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    locked_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rekam_faktur_pajakUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_awal?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    locked_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rekam_faktur_pajak_detailCreateInput = {
    penjualan_id: number
    tanggal: Date | string
    nama_customer: string
    no_npwp?: string | null
    no_nik?: string | null
    no_faktur_pajak: string
    rekam_faktur_pajak: rekam_faktur_pajakCreateNestedOneWithoutRekam_faktur_pajak_detailInput
    customer: customerCreateNestedOneWithoutRekam_faktur_pajak_detailInput
  }

  export type rekam_faktur_pajak_detailUncheckedCreateInput = {
    id?: number
    rekam_faktur_pajak_id: number
    penjualan_id: number
    customer_id: number
    tanggal: Date | string
    nama_customer: string
    no_npwp?: string | null
    no_nik?: string | null
    no_faktur_pajak: string
  }

  export type rekam_faktur_pajak_detailUpdateInput = {
    penjualan_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nama_customer?: StringFieldUpdateOperationsInput | string
    no_npwp?: NullableStringFieldUpdateOperationsInput | string | null
    no_nik?: NullableStringFieldUpdateOperationsInput | string | null
    no_faktur_pajak?: StringFieldUpdateOperationsInput | string
    rekam_faktur_pajak?: rekam_faktur_pajakUpdateOneRequiredWithoutRekam_faktur_pajak_detailNestedInput
    customer?: customerUpdateOneRequiredWithoutRekam_faktur_pajak_detailNestedInput
  }

  export type rekam_faktur_pajak_detailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rekam_faktur_pajak_id?: IntFieldUpdateOperationsInput | number
    penjualan_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nama_customer?: StringFieldUpdateOperationsInput | string
    no_npwp?: NullableStringFieldUpdateOperationsInput | string | null
    no_nik?: NullableStringFieldUpdateOperationsInput | string | null
    no_faktur_pajak?: StringFieldUpdateOperationsInput | string
  }

  export type rekam_faktur_pajak_detailCreateManyInput = {
    id?: number
    rekam_faktur_pajak_id: number
    penjualan_id: number
    customer_id: number
    tanggal: Date | string
    nama_customer: string
    no_npwp?: string | null
    no_nik?: string | null
    no_faktur_pajak: string
  }

  export type rekam_faktur_pajak_detailUpdateManyMutationInput = {
    penjualan_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nama_customer?: StringFieldUpdateOperationsInput | string
    no_npwp?: NullableStringFieldUpdateOperationsInput | string | null
    no_nik?: NullableStringFieldUpdateOperationsInput | string | null
    no_faktur_pajak?: StringFieldUpdateOperationsInput | string
  }

  export type rekam_faktur_pajak_detailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rekam_faktur_pajak_id?: IntFieldUpdateOperationsInput | number
    penjualan_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nama_customer?: StringFieldUpdateOperationsInput | string
    no_npwp?: NullableStringFieldUpdateOperationsInput | string | null
    no_nik?: NullableStringFieldUpdateOperationsInput | string | null
    no_faktur_pajak?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Rekam_faktur_pajak_detailListRelationFilter = {
    every?: rekam_faktur_pajak_detailWhereInput
    some?: rekam_faktur_pajak_detailWhereInput
    none?: rekam_faktur_pajak_detailWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type rekam_faktur_pajak_detailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customerCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alias?: SortOrder
    alamat?: SortOrder
    telepon1?: SortOrder
    telepon2?: SortOrder
    npwp?: SortOrder
    nik?: SortOrder
    kota?: SortOrder
    provinsi?: SortOrder
    kode_pos?: SortOrder
    email?: SortOrder
    contact_person?: SortOrder
    tempo_kredit?: SortOrder
    warning_kredit?: SortOrder
    limit_warning_type?: SortOrder
    limit_amount?: SortOrder
    limit_atas?: SortOrder
    limit_warning_amount?: SortOrder
    status_aktif?: SortOrder
    img_link?: SortOrder
    npwp_link?: SortOrder
    ktp_link?: SortOrder
    medsos_link?: SortOrder
    tipe_company?: SortOrder
    blok?: SortOrder
    no?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    kecamatan?: SortOrder
    kelurahan?: SortOrder
    updated_at?: SortOrder
  }

  export type customerAvgOrderByAggregateInput = {
    id?: SortOrder
    tempo_kredit?: SortOrder
    warning_kredit?: SortOrder
    limit_warning_type?: SortOrder
    limit_amount?: SortOrder
    limit_atas?: SortOrder
    limit_warning_amount?: SortOrder
  }

  export type customerMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alias?: SortOrder
    alamat?: SortOrder
    telepon1?: SortOrder
    telepon2?: SortOrder
    npwp?: SortOrder
    nik?: SortOrder
    kota?: SortOrder
    provinsi?: SortOrder
    kode_pos?: SortOrder
    email?: SortOrder
    contact_person?: SortOrder
    tempo_kredit?: SortOrder
    warning_kredit?: SortOrder
    limit_warning_type?: SortOrder
    limit_amount?: SortOrder
    limit_atas?: SortOrder
    limit_warning_amount?: SortOrder
    status_aktif?: SortOrder
    img_link?: SortOrder
    npwp_link?: SortOrder
    ktp_link?: SortOrder
    medsos_link?: SortOrder
    tipe_company?: SortOrder
    blok?: SortOrder
    no?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    kecamatan?: SortOrder
    kelurahan?: SortOrder
    updated_at?: SortOrder
  }

  export type customerMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alias?: SortOrder
    alamat?: SortOrder
    telepon1?: SortOrder
    telepon2?: SortOrder
    npwp?: SortOrder
    nik?: SortOrder
    kota?: SortOrder
    provinsi?: SortOrder
    kode_pos?: SortOrder
    email?: SortOrder
    contact_person?: SortOrder
    tempo_kredit?: SortOrder
    warning_kredit?: SortOrder
    limit_warning_type?: SortOrder
    limit_amount?: SortOrder
    limit_atas?: SortOrder
    limit_warning_amount?: SortOrder
    status_aktif?: SortOrder
    img_link?: SortOrder
    npwp_link?: SortOrder
    ktp_link?: SortOrder
    medsos_link?: SortOrder
    tipe_company?: SortOrder
    blok?: SortOrder
    no?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    kecamatan?: SortOrder
    kelurahan?: SortOrder
    updated_at?: SortOrder
  }

  export type customerSumOrderByAggregateInput = {
    id?: SortOrder
    tempo_kredit?: SortOrder
    warning_kredit?: SortOrder
    limit_warning_type?: SortOrder
    limit_amount?: SortOrder
    limit_atas?: SortOrder
    limit_warning_amount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type rekam_faktur_pajakCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal_awal?: SortOrder
    tanggal_akhir?: SortOrder
    status?: SortOrder
    locked_date?: SortOrder
  }

  export type rekam_faktur_pajakAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type rekam_faktur_pajakMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal_awal?: SortOrder
    tanggal_akhir?: SortOrder
    status?: SortOrder
    locked_date?: SortOrder
  }

  export type rekam_faktur_pajakMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal_awal?: SortOrder
    tanggal_akhir?: SortOrder
    status?: SortOrder
    locked_date?: SortOrder
  }

  export type rekam_faktur_pajakSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type Rekam_faktur_pajakRelationFilter = {
    is?: rekam_faktur_pajakWhereInput
    isNot?: rekam_faktur_pajakWhereInput
  }

  export type CustomerRelationFilter = {
    is?: customerWhereInput
    isNot?: customerWhereInput
  }

  export type rekam_faktur_pajak_detailCountOrderByAggregateInput = {
    id?: SortOrder
    rekam_faktur_pajak_id?: SortOrder
    penjualan_id?: SortOrder
    customer_id?: SortOrder
    tanggal?: SortOrder
    nama_customer?: SortOrder
    no_npwp?: SortOrder
    no_nik?: SortOrder
    no_faktur_pajak?: SortOrder
  }

  export type rekam_faktur_pajak_detailAvgOrderByAggregateInput = {
    id?: SortOrder
    rekam_faktur_pajak_id?: SortOrder
    penjualan_id?: SortOrder
    customer_id?: SortOrder
  }

  export type rekam_faktur_pajak_detailMaxOrderByAggregateInput = {
    id?: SortOrder
    rekam_faktur_pajak_id?: SortOrder
    penjualan_id?: SortOrder
    customer_id?: SortOrder
    tanggal?: SortOrder
    nama_customer?: SortOrder
    no_npwp?: SortOrder
    no_nik?: SortOrder
    no_faktur_pajak?: SortOrder
  }

  export type rekam_faktur_pajak_detailMinOrderByAggregateInput = {
    id?: SortOrder
    rekam_faktur_pajak_id?: SortOrder
    penjualan_id?: SortOrder
    customer_id?: SortOrder
    tanggal?: SortOrder
    nama_customer?: SortOrder
    no_npwp?: SortOrder
    no_nik?: SortOrder
    no_faktur_pajak?: SortOrder
  }

  export type rekam_faktur_pajak_detailSumOrderByAggregateInput = {
    id?: SortOrder
    rekam_faktur_pajak_id?: SortOrder
    penjualan_id?: SortOrder
    customer_id?: SortOrder
  }

  export type rekam_faktur_pajak_detailCreateNestedManyWithoutCustomerInput = {
    create?: XOR<rekam_faktur_pajak_detailCreateWithoutCustomerInput, rekam_faktur_pajak_detailUncheckedCreateWithoutCustomerInput> | rekam_faktur_pajak_detailCreateWithoutCustomerInput[] | rekam_faktur_pajak_detailUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: rekam_faktur_pajak_detailCreateOrConnectWithoutCustomerInput | rekam_faktur_pajak_detailCreateOrConnectWithoutCustomerInput[]
    createMany?: rekam_faktur_pajak_detailCreateManyCustomerInputEnvelope
    connect?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
  }

  export type rekam_faktur_pajak_detailUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<rekam_faktur_pajak_detailCreateWithoutCustomerInput, rekam_faktur_pajak_detailUncheckedCreateWithoutCustomerInput> | rekam_faktur_pajak_detailCreateWithoutCustomerInput[] | rekam_faktur_pajak_detailUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: rekam_faktur_pajak_detailCreateOrConnectWithoutCustomerInput | rekam_faktur_pajak_detailCreateOrConnectWithoutCustomerInput[]
    createMany?: rekam_faktur_pajak_detailCreateManyCustomerInputEnvelope
    connect?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type rekam_faktur_pajak_detailUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<rekam_faktur_pajak_detailCreateWithoutCustomerInput, rekam_faktur_pajak_detailUncheckedCreateWithoutCustomerInput> | rekam_faktur_pajak_detailCreateWithoutCustomerInput[] | rekam_faktur_pajak_detailUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: rekam_faktur_pajak_detailCreateOrConnectWithoutCustomerInput | rekam_faktur_pajak_detailCreateOrConnectWithoutCustomerInput[]
    upsert?: rekam_faktur_pajak_detailUpsertWithWhereUniqueWithoutCustomerInput | rekam_faktur_pajak_detailUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: rekam_faktur_pajak_detailCreateManyCustomerInputEnvelope
    set?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
    disconnect?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
    delete?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
    connect?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
    update?: rekam_faktur_pajak_detailUpdateWithWhereUniqueWithoutCustomerInput | rekam_faktur_pajak_detailUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: rekam_faktur_pajak_detailUpdateManyWithWhereWithoutCustomerInput | rekam_faktur_pajak_detailUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: rekam_faktur_pajak_detailScalarWhereInput | rekam_faktur_pajak_detailScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type rekam_faktur_pajak_detailUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<rekam_faktur_pajak_detailCreateWithoutCustomerInput, rekam_faktur_pajak_detailUncheckedCreateWithoutCustomerInput> | rekam_faktur_pajak_detailCreateWithoutCustomerInput[] | rekam_faktur_pajak_detailUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: rekam_faktur_pajak_detailCreateOrConnectWithoutCustomerInput | rekam_faktur_pajak_detailCreateOrConnectWithoutCustomerInput[]
    upsert?: rekam_faktur_pajak_detailUpsertWithWhereUniqueWithoutCustomerInput | rekam_faktur_pajak_detailUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: rekam_faktur_pajak_detailCreateManyCustomerInputEnvelope
    set?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
    disconnect?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
    delete?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
    connect?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
    update?: rekam_faktur_pajak_detailUpdateWithWhereUniqueWithoutCustomerInput | rekam_faktur_pajak_detailUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: rekam_faktur_pajak_detailUpdateManyWithWhereWithoutCustomerInput | rekam_faktur_pajak_detailUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: rekam_faktur_pajak_detailScalarWhereInput | rekam_faktur_pajak_detailScalarWhereInput[]
  }

  export type rekam_faktur_pajak_detailCreateNestedManyWithoutRekam_faktur_pajakInput = {
    create?: XOR<rekam_faktur_pajak_detailCreateWithoutRekam_faktur_pajakInput, rekam_faktur_pajak_detailUncheckedCreateWithoutRekam_faktur_pajakInput> | rekam_faktur_pajak_detailCreateWithoutRekam_faktur_pajakInput[] | rekam_faktur_pajak_detailUncheckedCreateWithoutRekam_faktur_pajakInput[]
    connectOrCreate?: rekam_faktur_pajak_detailCreateOrConnectWithoutRekam_faktur_pajakInput | rekam_faktur_pajak_detailCreateOrConnectWithoutRekam_faktur_pajakInput[]
    createMany?: rekam_faktur_pajak_detailCreateManyRekam_faktur_pajakInputEnvelope
    connect?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
  }

  export type rekam_faktur_pajak_detailUncheckedCreateNestedManyWithoutRekam_faktur_pajakInput = {
    create?: XOR<rekam_faktur_pajak_detailCreateWithoutRekam_faktur_pajakInput, rekam_faktur_pajak_detailUncheckedCreateWithoutRekam_faktur_pajakInput> | rekam_faktur_pajak_detailCreateWithoutRekam_faktur_pajakInput[] | rekam_faktur_pajak_detailUncheckedCreateWithoutRekam_faktur_pajakInput[]
    connectOrCreate?: rekam_faktur_pajak_detailCreateOrConnectWithoutRekam_faktur_pajakInput | rekam_faktur_pajak_detailCreateOrConnectWithoutRekam_faktur_pajakInput[]
    createMany?: rekam_faktur_pajak_detailCreateManyRekam_faktur_pajakInputEnvelope
    connect?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
  }

  export type rekam_faktur_pajak_detailUpdateManyWithoutRekam_faktur_pajakNestedInput = {
    create?: XOR<rekam_faktur_pajak_detailCreateWithoutRekam_faktur_pajakInput, rekam_faktur_pajak_detailUncheckedCreateWithoutRekam_faktur_pajakInput> | rekam_faktur_pajak_detailCreateWithoutRekam_faktur_pajakInput[] | rekam_faktur_pajak_detailUncheckedCreateWithoutRekam_faktur_pajakInput[]
    connectOrCreate?: rekam_faktur_pajak_detailCreateOrConnectWithoutRekam_faktur_pajakInput | rekam_faktur_pajak_detailCreateOrConnectWithoutRekam_faktur_pajakInput[]
    upsert?: rekam_faktur_pajak_detailUpsertWithWhereUniqueWithoutRekam_faktur_pajakInput | rekam_faktur_pajak_detailUpsertWithWhereUniqueWithoutRekam_faktur_pajakInput[]
    createMany?: rekam_faktur_pajak_detailCreateManyRekam_faktur_pajakInputEnvelope
    set?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
    disconnect?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
    delete?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
    connect?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
    update?: rekam_faktur_pajak_detailUpdateWithWhereUniqueWithoutRekam_faktur_pajakInput | rekam_faktur_pajak_detailUpdateWithWhereUniqueWithoutRekam_faktur_pajakInput[]
    updateMany?: rekam_faktur_pajak_detailUpdateManyWithWhereWithoutRekam_faktur_pajakInput | rekam_faktur_pajak_detailUpdateManyWithWhereWithoutRekam_faktur_pajakInput[]
    deleteMany?: rekam_faktur_pajak_detailScalarWhereInput | rekam_faktur_pajak_detailScalarWhereInput[]
  }

  export type rekam_faktur_pajak_detailUncheckedUpdateManyWithoutRekam_faktur_pajakNestedInput = {
    create?: XOR<rekam_faktur_pajak_detailCreateWithoutRekam_faktur_pajakInput, rekam_faktur_pajak_detailUncheckedCreateWithoutRekam_faktur_pajakInput> | rekam_faktur_pajak_detailCreateWithoutRekam_faktur_pajakInput[] | rekam_faktur_pajak_detailUncheckedCreateWithoutRekam_faktur_pajakInput[]
    connectOrCreate?: rekam_faktur_pajak_detailCreateOrConnectWithoutRekam_faktur_pajakInput | rekam_faktur_pajak_detailCreateOrConnectWithoutRekam_faktur_pajakInput[]
    upsert?: rekam_faktur_pajak_detailUpsertWithWhereUniqueWithoutRekam_faktur_pajakInput | rekam_faktur_pajak_detailUpsertWithWhereUniqueWithoutRekam_faktur_pajakInput[]
    createMany?: rekam_faktur_pajak_detailCreateManyRekam_faktur_pajakInputEnvelope
    set?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
    disconnect?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
    delete?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
    connect?: rekam_faktur_pajak_detailWhereUniqueInput | rekam_faktur_pajak_detailWhereUniqueInput[]
    update?: rekam_faktur_pajak_detailUpdateWithWhereUniqueWithoutRekam_faktur_pajakInput | rekam_faktur_pajak_detailUpdateWithWhereUniqueWithoutRekam_faktur_pajakInput[]
    updateMany?: rekam_faktur_pajak_detailUpdateManyWithWhereWithoutRekam_faktur_pajakInput | rekam_faktur_pajak_detailUpdateManyWithWhereWithoutRekam_faktur_pajakInput[]
    deleteMany?: rekam_faktur_pajak_detailScalarWhereInput | rekam_faktur_pajak_detailScalarWhereInput[]
  }

  export type rekam_faktur_pajakCreateNestedOneWithoutRekam_faktur_pajak_detailInput = {
    create?: XOR<rekam_faktur_pajakCreateWithoutRekam_faktur_pajak_detailInput, rekam_faktur_pajakUncheckedCreateWithoutRekam_faktur_pajak_detailInput>
    connectOrCreate?: rekam_faktur_pajakCreateOrConnectWithoutRekam_faktur_pajak_detailInput
    connect?: rekam_faktur_pajakWhereUniqueInput
  }

  export type customerCreateNestedOneWithoutRekam_faktur_pajak_detailInput = {
    create?: XOR<customerCreateWithoutRekam_faktur_pajak_detailInput, customerUncheckedCreateWithoutRekam_faktur_pajak_detailInput>
    connectOrCreate?: customerCreateOrConnectWithoutRekam_faktur_pajak_detailInput
    connect?: customerWhereUniqueInput
  }

  export type rekam_faktur_pajakUpdateOneRequiredWithoutRekam_faktur_pajak_detailNestedInput = {
    create?: XOR<rekam_faktur_pajakCreateWithoutRekam_faktur_pajak_detailInput, rekam_faktur_pajakUncheckedCreateWithoutRekam_faktur_pajak_detailInput>
    connectOrCreate?: rekam_faktur_pajakCreateOrConnectWithoutRekam_faktur_pajak_detailInput
    upsert?: rekam_faktur_pajakUpsertWithoutRekam_faktur_pajak_detailInput
    connect?: rekam_faktur_pajakWhereUniqueInput
    update?: XOR<XOR<rekam_faktur_pajakUpdateToOneWithWhereWithoutRekam_faktur_pajak_detailInput, rekam_faktur_pajakUpdateWithoutRekam_faktur_pajak_detailInput>, rekam_faktur_pajakUncheckedUpdateWithoutRekam_faktur_pajak_detailInput>
  }

  export type customerUpdateOneRequiredWithoutRekam_faktur_pajak_detailNestedInput = {
    create?: XOR<customerCreateWithoutRekam_faktur_pajak_detailInput, customerUncheckedCreateWithoutRekam_faktur_pajak_detailInput>
    connectOrCreate?: customerCreateOrConnectWithoutRekam_faktur_pajak_detailInput
    upsert?: customerUpsertWithoutRekam_faktur_pajak_detailInput
    connect?: customerWhereUniqueInput
    update?: XOR<XOR<customerUpdateToOneWithWhereWithoutRekam_faktur_pajak_detailInput, customerUpdateWithoutRekam_faktur_pajak_detailInput>, customerUncheckedUpdateWithoutRekam_faktur_pajak_detailInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type rekam_faktur_pajak_detailCreateWithoutCustomerInput = {
    penjualan_id: number
    tanggal: Date | string
    nama_customer: string
    no_npwp?: string | null
    no_nik?: string | null
    no_faktur_pajak: string
    rekam_faktur_pajak: rekam_faktur_pajakCreateNestedOneWithoutRekam_faktur_pajak_detailInput
  }

  export type rekam_faktur_pajak_detailUncheckedCreateWithoutCustomerInput = {
    id?: number
    rekam_faktur_pajak_id: number
    penjualan_id: number
    tanggal: Date | string
    nama_customer: string
    no_npwp?: string | null
    no_nik?: string | null
    no_faktur_pajak: string
  }

  export type rekam_faktur_pajak_detailCreateOrConnectWithoutCustomerInput = {
    where: rekam_faktur_pajak_detailWhereUniqueInput
    create: XOR<rekam_faktur_pajak_detailCreateWithoutCustomerInput, rekam_faktur_pajak_detailUncheckedCreateWithoutCustomerInput>
  }

  export type rekam_faktur_pajak_detailCreateManyCustomerInputEnvelope = {
    data: rekam_faktur_pajak_detailCreateManyCustomerInput | rekam_faktur_pajak_detailCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type rekam_faktur_pajak_detailUpsertWithWhereUniqueWithoutCustomerInput = {
    where: rekam_faktur_pajak_detailWhereUniqueInput
    update: XOR<rekam_faktur_pajak_detailUpdateWithoutCustomerInput, rekam_faktur_pajak_detailUncheckedUpdateWithoutCustomerInput>
    create: XOR<rekam_faktur_pajak_detailCreateWithoutCustomerInput, rekam_faktur_pajak_detailUncheckedCreateWithoutCustomerInput>
  }

  export type rekam_faktur_pajak_detailUpdateWithWhereUniqueWithoutCustomerInput = {
    where: rekam_faktur_pajak_detailWhereUniqueInput
    data: XOR<rekam_faktur_pajak_detailUpdateWithoutCustomerInput, rekam_faktur_pajak_detailUncheckedUpdateWithoutCustomerInput>
  }

  export type rekam_faktur_pajak_detailUpdateManyWithWhereWithoutCustomerInput = {
    where: rekam_faktur_pajak_detailScalarWhereInput
    data: XOR<rekam_faktur_pajak_detailUpdateManyMutationInput, rekam_faktur_pajak_detailUncheckedUpdateManyWithoutCustomerInput>
  }

  export type rekam_faktur_pajak_detailScalarWhereInput = {
    AND?: rekam_faktur_pajak_detailScalarWhereInput | rekam_faktur_pajak_detailScalarWhereInput[]
    OR?: rekam_faktur_pajak_detailScalarWhereInput[]
    NOT?: rekam_faktur_pajak_detailScalarWhereInput | rekam_faktur_pajak_detailScalarWhereInput[]
    id?: IntFilter<"rekam_faktur_pajak_detail"> | number
    rekam_faktur_pajak_id?: IntFilter<"rekam_faktur_pajak_detail"> | number
    penjualan_id?: IntFilter<"rekam_faktur_pajak_detail"> | number
    customer_id?: IntFilter<"rekam_faktur_pajak_detail"> | number
    tanggal?: DateTimeFilter<"rekam_faktur_pajak_detail"> | Date | string
    nama_customer?: StringFilter<"rekam_faktur_pajak_detail"> | string
    no_npwp?: StringNullableFilter<"rekam_faktur_pajak_detail"> | string | null
    no_nik?: StringNullableFilter<"rekam_faktur_pajak_detail"> | string | null
    no_faktur_pajak?: StringFilter<"rekam_faktur_pajak_detail"> | string
  }

  export type rekam_faktur_pajak_detailCreateWithoutRekam_faktur_pajakInput = {
    penjualan_id: number
    tanggal: Date | string
    nama_customer: string
    no_npwp?: string | null
    no_nik?: string | null
    no_faktur_pajak: string
    customer: customerCreateNestedOneWithoutRekam_faktur_pajak_detailInput
  }

  export type rekam_faktur_pajak_detailUncheckedCreateWithoutRekam_faktur_pajakInput = {
    id?: number
    penjualan_id: number
    customer_id: number
    tanggal: Date | string
    nama_customer: string
    no_npwp?: string | null
    no_nik?: string | null
    no_faktur_pajak: string
  }

  export type rekam_faktur_pajak_detailCreateOrConnectWithoutRekam_faktur_pajakInput = {
    where: rekam_faktur_pajak_detailWhereUniqueInput
    create: XOR<rekam_faktur_pajak_detailCreateWithoutRekam_faktur_pajakInput, rekam_faktur_pajak_detailUncheckedCreateWithoutRekam_faktur_pajakInput>
  }

  export type rekam_faktur_pajak_detailCreateManyRekam_faktur_pajakInputEnvelope = {
    data: rekam_faktur_pajak_detailCreateManyRekam_faktur_pajakInput | rekam_faktur_pajak_detailCreateManyRekam_faktur_pajakInput[]
    skipDuplicates?: boolean
  }

  export type rekam_faktur_pajak_detailUpsertWithWhereUniqueWithoutRekam_faktur_pajakInput = {
    where: rekam_faktur_pajak_detailWhereUniqueInput
    update: XOR<rekam_faktur_pajak_detailUpdateWithoutRekam_faktur_pajakInput, rekam_faktur_pajak_detailUncheckedUpdateWithoutRekam_faktur_pajakInput>
    create: XOR<rekam_faktur_pajak_detailCreateWithoutRekam_faktur_pajakInput, rekam_faktur_pajak_detailUncheckedCreateWithoutRekam_faktur_pajakInput>
  }

  export type rekam_faktur_pajak_detailUpdateWithWhereUniqueWithoutRekam_faktur_pajakInput = {
    where: rekam_faktur_pajak_detailWhereUniqueInput
    data: XOR<rekam_faktur_pajak_detailUpdateWithoutRekam_faktur_pajakInput, rekam_faktur_pajak_detailUncheckedUpdateWithoutRekam_faktur_pajakInput>
  }

  export type rekam_faktur_pajak_detailUpdateManyWithWhereWithoutRekam_faktur_pajakInput = {
    where: rekam_faktur_pajak_detailScalarWhereInput
    data: XOR<rekam_faktur_pajak_detailUpdateManyMutationInput, rekam_faktur_pajak_detailUncheckedUpdateManyWithoutRekam_faktur_pajakInput>
  }

  export type rekam_faktur_pajakCreateWithoutRekam_faktur_pajak_detailInput = {
    tanggal_awal: Date | string
    tanggal_akhir: Date | string
    status: number
    locked_date: Date | string
  }

  export type rekam_faktur_pajakUncheckedCreateWithoutRekam_faktur_pajak_detailInput = {
    id?: number
    tanggal_awal: Date | string
    tanggal_akhir: Date | string
    status: number
    locked_date: Date | string
  }

  export type rekam_faktur_pajakCreateOrConnectWithoutRekam_faktur_pajak_detailInput = {
    where: rekam_faktur_pajakWhereUniqueInput
    create: XOR<rekam_faktur_pajakCreateWithoutRekam_faktur_pajak_detailInput, rekam_faktur_pajakUncheckedCreateWithoutRekam_faktur_pajak_detailInput>
  }

  export type customerCreateWithoutRekam_faktur_pajak_detailInput = {
    nama: string
    alias?: string | null
    alamat: string
    telepon1: string
    telepon2: string
    npwp?: string | null
    nik?: string | null
    kota?: string | null
    provinsi?: string | null
    kode_pos?: string | null
    email?: string | null
    contact_person?: string | null
    tempo_kredit?: number | null
    warning_kredit?: number | null
    limit_warning_type?: number | null
    limit_amount?: number | null
    limit_atas?: number | null
    limit_warning_amount?: number | null
    status_aktif: boolean
    img_link?: string | null
    npwp_link?: string | null
    ktp_link?: string | null
    medsos_link?: string | null
    tipe_company: string
    blok: string
    no: string
    rt: string
    rw: string
    kecamatan: string
    kelurahan: string
    updated_at: Date | string
  }

  export type customerUncheckedCreateWithoutRekam_faktur_pajak_detailInput = {
    id?: number
    nama: string
    alias?: string | null
    alamat: string
    telepon1: string
    telepon2: string
    npwp?: string | null
    nik?: string | null
    kota?: string | null
    provinsi?: string | null
    kode_pos?: string | null
    email?: string | null
    contact_person?: string | null
    tempo_kredit?: number | null
    warning_kredit?: number | null
    limit_warning_type?: number | null
    limit_amount?: number | null
    limit_atas?: number | null
    limit_warning_amount?: number | null
    status_aktif: boolean
    img_link?: string | null
    npwp_link?: string | null
    ktp_link?: string | null
    medsos_link?: string | null
    tipe_company: string
    blok: string
    no: string
    rt: string
    rw: string
    kecamatan: string
    kelurahan: string
    updated_at: Date | string
  }

  export type customerCreateOrConnectWithoutRekam_faktur_pajak_detailInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutRekam_faktur_pajak_detailInput, customerUncheckedCreateWithoutRekam_faktur_pajak_detailInput>
  }

  export type rekam_faktur_pajakUpsertWithoutRekam_faktur_pajak_detailInput = {
    update: XOR<rekam_faktur_pajakUpdateWithoutRekam_faktur_pajak_detailInput, rekam_faktur_pajakUncheckedUpdateWithoutRekam_faktur_pajak_detailInput>
    create: XOR<rekam_faktur_pajakCreateWithoutRekam_faktur_pajak_detailInput, rekam_faktur_pajakUncheckedCreateWithoutRekam_faktur_pajak_detailInput>
    where?: rekam_faktur_pajakWhereInput
  }

  export type rekam_faktur_pajakUpdateToOneWithWhereWithoutRekam_faktur_pajak_detailInput = {
    where?: rekam_faktur_pajakWhereInput
    data: XOR<rekam_faktur_pajakUpdateWithoutRekam_faktur_pajak_detailInput, rekam_faktur_pajakUncheckedUpdateWithoutRekam_faktur_pajak_detailInput>
  }

  export type rekam_faktur_pajakUpdateWithoutRekam_faktur_pajak_detailInput = {
    tanggal_awal?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    locked_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rekam_faktur_pajakUncheckedUpdateWithoutRekam_faktur_pajak_detailInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_awal?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    locked_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerUpsertWithoutRekam_faktur_pajak_detailInput = {
    update: XOR<customerUpdateWithoutRekam_faktur_pajak_detailInput, customerUncheckedUpdateWithoutRekam_faktur_pajak_detailInput>
    create: XOR<customerCreateWithoutRekam_faktur_pajak_detailInput, customerUncheckedCreateWithoutRekam_faktur_pajak_detailInput>
    where?: customerWhereInput
  }

  export type customerUpdateToOneWithWhereWithoutRekam_faktur_pajak_detailInput = {
    where?: customerWhereInput
    data: XOR<customerUpdateWithoutRekam_faktur_pajak_detailInput, customerUncheckedUpdateWithoutRekam_faktur_pajak_detailInput>
  }

  export type customerUpdateWithoutRekam_faktur_pajak_detailInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: StringFieldUpdateOperationsInput | string
    telepon1?: StringFieldUpdateOperationsInput | string
    telepon2?: StringFieldUpdateOperationsInput | string
    npwp?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kode_pos?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    tempo_kredit?: NullableIntFieldUpdateOperationsInput | number | null
    warning_kredit?: NullableIntFieldUpdateOperationsInput | number | null
    limit_warning_type?: NullableIntFieldUpdateOperationsInput | number | null
    limit_amount?: NullableIntFieldUpdateOperationsInput | number | null
    limit_atas?: NullableIntFieldUpdateOperationsInput | number | null
    limit_warning_amount?: NullableIntFieldUpdateOperationsInput | number | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    img_link?: NullableStringFieldUpdateOperationsInput | string | null
    npwp_link?: NullableStringFieldUpdateOperationsInput | string | null
    ktp_link?: NullableStringFieldUpdateOperationsInput | string | null
    medsos_link?: NullableStringFieldUpdateOperationsInput | string | null
    tipe_company?: StringFieldUpdateOperationsInput | string
    blok?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    rt?: StringFieldUpdateOperationsInput | string
    rw?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kelurahan?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerUncheckedUpdateWithoutRekam_faktur_pajak_detailInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: StringFieldUpdateOperationsInput | string
    telepon1?: StringFieldUpdateOperationsInput | string
    telepon2?: StringFieldUpdateOperationsInput | string
    npwp?: NullableStringFieldUpdateOperationsInput | string | null
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    kota?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    kode_pos?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact_person?: NullableStringFieldUpdateOperationsInput | string | null
    tempo_kredit?: NullableIntFieldUpdateOperationsInput | number | null
    warning_kredit?: NullableIntFieldUpdateOperationsInput | number | null
    limit_warning_type?: NullableIntFieldUpdateOperationsInput | number | null
    limit_amount?: NullableIntFieldUpdateOperationsInput | number | null
    limit_atas?: NullableIntFieldUpdateOperationsInput | number | null
    limit_warning_amount?: NullableIntFieldUpdateOperationsInput | number | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    img_link?: NullableStringFieldUpdateOperationsInput | string | null
    npwp_link?: NullableStringFieldUpdateOperationsInput | string | null
    ktp_link?: NullableStringFieldUpdateOperationsInput | string | null
    medsos_link?: NullableStringFieldUpdateOperationsInput | string | null
    tipe_company?: StringFieldUpdateOperationsInput | string
    blok?: StringFieldUpdateOperationsInput | string
    no?: StringFieldUpdateOperationsInput | string
    rt?: StringFieldUpdateOperationsInput | string
    rw?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kelurahan?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rekam_faktur_pajak_detailCreateManyCustomerInput = {
    id?: number
    rekam_faktur_pajak_id: number
    penjualan_id: number
    tanggal: Date | string
    nama_customer: string
    no_npwp?: string | null
    no_nik?: string | null
    no_faktur_pajak: string
  }

  export type rekam_faktur_pajak_detailUpdateWithoutCustomerInput = {
    penjualan_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nama_customer?: StringFieldUpdateOperationsInput | string
    no_npwp?: NullableStringFieldUpdateOperationsInput | string | null
    no_nik?: NullableStringFieldUpdateOperationsInput | string | null
    no_faktur_pajak?: StringFieldUpdateOperationsInput | string
    rekam_faktur_pajak?: rekam_faktur_pajakUpdateOneRequiredWithoutRekam_faktur_pajak_detailNestedInput
  }

  export type rekam_faktur_pajak_detailUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    rekam_faktur_pajak_id?: IntFieldUpdateOperationsInput | number
    penjualan_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nama_customer?: StringFieldUpdateOperationsInput | string
    no_npwp?: NullableStringFieldUpdateOperationsInput | string | null
    no_nik?: NullableStringFieldUpdateOperationsInput | string | null
    no_faktur_pajak?: StringFieldUpdateOperationsInput | string
  }

  export type rekam_faktur_pajak_detailUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    rekam_faktur_pajak_id?: IntFieldUpdateOperationsInput | number
    penjualan_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nama_customer?: StringFieldUpdateOperationsInput | string
    no_npwp?: NullableStringFieldUpdateOperationsInput | string | null
    no_nik?: NullableStringFieldUpdateOperationsInput | string | null
    no_faktur_pajak?: StringFieldUpdateOperationsInput | string
  }

  export type rekam_faktur_pajak_detailCreateManyRekam_faktur_pajakInput = {
    id?: number
    penjualan_id: number
    customer_id: number
    tanggal: Date | string
    nama_customer: string
    no_npwp?: string | null
    no_nik?: string | null
    no_faktur_pajak: string
  }

  export type rekam_faktur_pajak_detailUpdateWithoutRekam_faktur_pajakInput = {
    penjualan_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nama_customer?: StringFieldUpdateOperationsInput | string
    no_npwp?: NullableStringFieldUpdateOperationsInput | string | null
    no_nik?: NullableStringFieldUpdateOperationsInput | string | null
    no_faktur_pajak?: StringFieldUpdateOperationsInput | string
    customer?: customerUpdateOneRequiredWithoutRekam_faktur_pajak_detailNestedInput
  }

  export type rekam_faktur_pajak_detailUncheckedUpdateWithoutRekam_faktur_pajakInput = {
    id?: IntFieldUpdateOperationsInput | number
    penjualan_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nama_customer?: StringFieldUpdateOperationsInput | string
    no_npwp?: NullableStringFieldUpdateOperationsInput | string | null
    no_nik?: NullableStringFieldUpdateOperationsInput | string | null
    no_faktur_pajak?: StringFieldUpdateOperationsInput | string
  }

  export type rekam_faktur_pajak_detailUncheckedUpdateManyWithoutRekam_faktur_pajakInput = {
    id?: IntFieldUpdateOperationsInput | number
    penjualan_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nama_customer?: StringFieldUpdateOperationsInput | string
    no_npwp?: NullableStringFieldUpdateOperationsInput | string | null
    no_nik?: NullableStringFieldUpdateOperationsInput | string | null
    no_faktur_pajak?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Rekam_faktur_pajakCountOutputTypeDefaultArgs instead
     */
    export type Rekam_faktur_pajakCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Rekam_faktur_pajakCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use customerDefaultArgs instead
     */
    export type customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = customerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use rekam_faktur_pajakDefaultArgs instead
     */
    export type rekam_faktur_pajakArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = rekam_faktur_pajakDefaultArgs<ExtArgs>
    /**
     * @deprecated Use rekam_faktur_pajak_detailDefaultArgs instead
     */
    export type rekam_faktur_pajak_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = rekam_faktur_pajak_detailDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}