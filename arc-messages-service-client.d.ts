/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   arc-messages-service-client.html
 */

declare class ArcMessagesServiceClient {

  /**
   * Sends a message to the worker and awaits and handles a corresponding
   * response.
   *
   * @param message Any value that can be sent via `postMessage` to the
   * worker.
   * @returns A promise that resolves when a corresponding response
   * message has been received by from the worker. Requests are given a
   * unique ID, so the first worker response that echos this ID will be
   * used to resolve the promise.
   */
  post(message: any): Promise<any>|null;
  _postImpl(message: any, worker: any): any;

  /**
   * Requests that the worker perform a transaction (supported verbs are
   * `get` and `set`) against a provided `key` and optional `value` in the
   * IndexedDB object store.
   *
   * @param method The method of the transaction (`"get"` or
   * `"set"`)
   * @param type Data type. Can be either `meta` or `data`.
   * @param key The key in the IndexedDB object store to operate
   * on.
   * @param value The value to set at `key`, if using the `"set"`
   * `method`.
   * @returns A promise that resolves when the worker indicates
   * that the transaction has completed.
   */
  transaction(method: string, type: String|null, key: string, value: object|null): Promise<any>|null;
  keys(type: any): any;
  listObjects(type: any): any;
  indexObjects(type: any, index: any, value: any): any;
  closeDb(): any;

  /**
   * Instantiates (if necessary) and connects to the backing worker
   * instance.
   *
   * @returns A promise that resolves when the worker has been
   * created and a handshake has been returned. The worker is an instance
   * of `SharedWorker` (if available), or else `Polymer.CommonWorker`.
   */
  connect(): Promise<any>|null;
  _connectImpl(): any;
}
