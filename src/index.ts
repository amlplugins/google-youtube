/**
 * @amlplugins/google-youtube
 *
 * Thin namespaced re-export of the native @googleapis/youtube SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * YouTube Data (youtube_v3).
 */

import * as _sdk from "@googleapis/youtube";
export * from "@googleapis/youtube";
export { _sdk as sdk };
export default _sdk;
