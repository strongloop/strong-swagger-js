2015-07-07, Version 20.0.0
==========================

 * Rename the module to strong-swagger-client (Miroslav Bajtoš)

 * add ui support for array of string enum (Jake Ayala)

 * Remove error for duplicate body params, since it breaks Try it out (Shelby Sanders)

 * Refactored to visualize more parameter and property restrictions (Shelby Sanders)

 * Added setting of xhrFields.withCredentials, so JQuery will actually send cookies (Shelby Sanders)

 * Corrected getSampleJSON() to handle Array of Model (Shelby Sanders)

 * Added support for optional path parameters (Shelby Sanders)

 * Remove unnecessary comma between properties as it's confusing for multi-line content (Shelby Sanders)

 * Changed SwaggerModelProperty() to avoid reference error when property name coincidentally matches a Swagger schema name (Shelby Sanders)

 * Changed SwaggerRequest to forward request headers and body to status (Shelby Sanders)

 * Ported changes from SwaggerUI for handling of arrays of types/models, defaultValues, basePaths, and large descriptions (Shelby Sanders)

 * Fix unit-tests on Windows (Miroslav Bajtoš)

 * Fix project infrastructure (Miroslav Bajtoš)


2015-01-28, Version 2.0.49
==========================

 * fix for submit methods (Tony Tam)

 * removed some logs (Tony Tam)

 * added tests for #203 (Tony Tam)

 * Set arg4 to callback when no opt passed in (Brody Dunn)

 * added test for https://github.com/swagger-api/swagger-ui/issues/814 (Tony Tam)

 * Update README.md (Tony Tam)

 * added test for #202 (Tony Tam)


2015-01-06, Version 2.0.48
==========================

 * fixed quotes, causing test failue (Tony Tam)

 * updated package (Tony Tam)

 * removed cakefile, standardized quotes (Tony Tam)

 * added model property check for repeated properties, https://github.com/swagger-api/swagger-ui/issues/697 (Tony Tam)

 * added test for #186 (Tony Tam)

 * added model signature file (Tony Tam)

 * added default callback support per #141 (Tony Tam)

 * added opts per #101 (Tony Tam)

 * fix, tests for #120, overriding headers when fetching swagger spec (Tony Tam)

 * removed log (Tony Tam)

 * added test, fix for #168 (Tony Tam)

 * cleaned up logging (Tony Tam)

 * fix and test for path params of type (Tony Tam)

 * removed logs, added redirect test (Tony Tam)

 * fix for #172 (Tony Tam)

 * added test for operation parameters per #177 (Tony Tam)

 * added asCurl per #174 (Tony Tam)

 * removed old tests (Tony Tam)

 * updated badge (Tony Tam)

 * converted all tests (Tony Tam)

 * added travis (Tony Tam)

 * added tests (Tony Tam)

 * fixed macros (Tony Tam)

 * Fix #109.  Allow a different authorization to be passed to each swagger api that the client is connected to. (Brody Dunn)

 * added var name (Tony Tam)

 * address https://github.com/swagger-api/swagger-js/pull/165 (Tony Tam)

 * fix for https://github.com/swagger-api/swagger-ui/pull/760 (Tony Tam)

 * added try/catch for #117 (Tony Tam)

 * fix for empty consumes (Tony Tam)

 * fix for https://github.com/swagger-api/swagger-js/pull/165 (Tony Tam)

 * updated version (Tony Tam)

 * fixed regex per https://github.com/swagger-api/swagger-ui/issues/715 (Tony Tam)

 * updated versions (Tony Tam)

 * fix for #166 (Tony Tam)

 * fix for https://github.com/swagger-api/swagger-ui/issues/729 (Tony Tam)

 * Fix Issue 109.  Allow a different authorization to be passed to each swagger api that the client is connected to. (Brody Dunn)


2014-11-17, Version 2.0.43
==========================

 * fix for https://github.com/swagger-api/swagger-ui/issues/727 (Tony Tam)

 * updated version for #153 (Tony Tam)

 * updated macros (Tony Tam)

 * updated links (Tony Tam)

 * Update README.md (Tony Tam)

 * Prevent ugly error on missing type (Ian MacLennan)

 * Deprecated is in spec, add it to model. (Chris Allen)

 * Update README.md (Danny Tran)


2014-09-18, Version 2.0.41
==========================

 * updated version (Tony Tam)

 * merged #119, #131 (Tony Tam)

 * Add var to undeclared variables and a function wrapper (Eric Chen)

 * added isValid check (Tony Tam)


2014-09-12, Version 2.0.39
==========================

 * bumped version (Tony Tam)

 * added post processing for models, parameters (Tony Tam)

 * updated test (Tony Tam)

 * Fix Issue 114.  Notify the client that the Shred Request has failed. (Brody Dunn)


2014-08-29, Version 2.0.38
==========================

 * fix for #56, #113 (Tony Tam)

 * Added using defaultValue for generating sample JSONs (Lukasz Sierant)

 * fixed consumes type (Tony Tam)

 * bumped version (Tony Tam)

 * fix for #107 (Tony Tam)

 * partial fix for #107, set application/json to be default content-type (Tony Tam)

 * Fixed mismatched var names (consumes vs contentType) (Ozan Turgut)

 * Update README.md (Tony Tam)


2014-08-02, Version 2.0.36
==========================

 * fix for multipart/form-data (Tony Tam)


2014-08-02, Version 2.0.35
==========================

 * fixed form content type (Tony Tam)


2014-08-01, Version 2.0.34
==========================

 * updated version (Tony Tam)

 * updated to support file uploads without being body params (Tony Tam)


2014-08-01, Version 2.0.33
==========================

 * updated version (Tony Tam)

 * updated to separate logic for header setting (Tony Tam)

 * fix for https://github.com/wordnik/swagger-ui/issues/509 (Tony Tam)

 * fixed sample with URL, bundle (Tony Tam)


2014-07-11, Version 2.0.31
==========================



2014-07-11, Version 2.0.31
==========================

 * merged patch from #96 (Tony Tam)

 * fix for auth keys (Tony Tam)

 * updated auth to support existing authorization keys (Tony Tam)

 * Possible fix for #96 - ensured we could always send using jQuery when other projects had called $.noConflict().  Should be good to go now. (Nicholas Padilla)

 * Possible fix for #96 (Nicholas Padilla)

 * Fix handling for jQuery response headers (Travis Illig)

 * [fix] Invalid regular expression (Dariusz Gertych)

 * getAbsoluteBasePath now works with relative path "/" (Viktor Holmberg)

 * Added a test for getAbsoluteBasePath with relativeBasePath / (Viktor Holmberg)

 * fix for #91 (Tony Tam)

 * Update README.md (Tony Tam)

 * added cookie support (Tony Tam)


2014-04-17, Version 2.0.29
==========================

 * updated logic for stringifying xml nodes (Tony Tam)


2014-04-17, Version 2.0.27
==========================



2014-04-17, Version 2.0.28
==========================

 * added sample model override logic (Tony Tam)

 * Update README.md (Pat)

 * Update README.md (webron)

 * should stringify the path param (Vlad Yazhbin)

 * added shred bundle (Tony Tam)

 * The fix for the issue https://github.com/wordnik/swagger-js/pull/58 only in the swagger.js (valdemon)


2014-03-19, Version 2.0.26
==========================

 * updated version (Tony Tam)

 * updated version, added back type (Tony Tam)

 * dereference btoa before encoding (Max Magee)

 * Create LICENSE (webron)

 * Update README.md (webron)

 * updated shred (Tony Tam)

 * updated shred per https://github.com/automatthew/shred/commit/db55171f93e009327c25843068577120408ee825 (Tony Tam)


2014-03-04, Version 2.0.23
==========================

 * fix for variable declaration (Tony Tam)

 * updates to tests (Tony Tam)

 * clean-up (Tony Tam)

 * another nagging ie issue (Tony Tam)

 * fix for ie8 (Tony Tam)

 * fixed header array (Tony Tam)

 * fix for #81 (Tony Tam)


2014-02-26, Version 2.0.20
==========================

 * updated version (Tony Tam)

 * fix for #82 (Tony Tam)


2014-02-19, Version 2.0.19
==========================

 * fix for #80, checking for body before setting content-type header (Tony Tam)


2014-02-19, Version 2.0.18
==========================

 * updated version (Tony Tam)


2014-02-19, Version 2.0.17
==========================

 * updated version (Tony Tam)

 * fix for btoa, exposed password credentials (Tony Tam)

 * fix for https://github.com/wordnik/swagger-ui/pull/399 (Tony Tam)

 * fixed recursion loop for sample json (Tony Tam)

 * fix for array params (Tony Tam)

 * expose ApiKeyAuthorization and fix readme example (Mat Tyndall)


2014-02-16, Version 2.0.16
==========================

 * fixes for allowable values drop-down (Tony Tam)


2014-02-16, Version 2.0.15
==========================

 * bumped version, added variable declaration (Tony Tam)

 * Add in missing length for allowableValues.values for loop (Paul Winkler)


2014-02-13, Version 2.0.14
==========================

 * fixed value inits, missing models (Tony Tam)

 * fixed parameters code in SwaggerOperation constructor (Vladimir Feskov)


2014-02-12, Version 2.0.13
==========================

 * added checks for empty content (Tony Tam)

 * cleaned up content-type detection (Tony Tam)

 * added obj parsing for json response (Tony Tam)

 * more de-mangling (Tony Tam)

 * fixed dom parser error for ie (Tony Tam)

 * fixed ie8 issues (Tony Tam)

 * updated specs, jquery sppt (Tony Tam)

 * more clean-up (Tony Tam)

 * more clean-ups (Tony Tam)

 * got rid of swagger.coffee for a pure js & cleaner version (Tony Tam)


2014-02-03, Version 2.0.12
==========================

 * updated package (Tony Tam)

 * added model spec (Tony Tam)

 * fixed inability to traverse models (Tony Tam)


2014-02-03, Version 2.0.11
==========================

 * updated version (Tony Tam)

 * added json headers for fetching resource listing, api declaration (Tony Tam)


2014-01-27, Version 2.0.10
==========================

 * fixed headers for non success states (Tony Tam)


2014-01-23, Version 2.0.9
=========================

 * updated to support ie8 (Tony Tam)

 * fix for #181 (Tony Tam)

 * Update README.md (Tony Tam)

 * Exposing raw models at resource level (lbovet)

 * added remove to SwaggerAuthorizations (Mat Tyndall)

 * Fix PasswordAuthorization on nodejs by adding the btoa module (Ferdinand Prantl)


2013-11-06, Version 2.0.8
=========================

 * updated version (Tony Tam)

 * fix for https://github.com/wordnik/swagger-js/issues/61 (Tony Tam)

 * Constructing the absolute Resource's basePath from relative one, using the Api basePath (valdemon)


2013-09-26, Version 2.0.7
=========================

 * fix for https://github.com/wordnik/swagger-ui/pull/322 (Tony Tam)

 * test for https://github.com/wordnik/swagger-core/issues/315 (Tony Tam)

 * update of js files for basePath fix for single file (Pavel Puchkarev)

 * basePath will be set even if only one file is used (Pavel Puchkarev)

 * Update README.md (Tony Tam)

 * fix for https://github.com/wordnik/swagger-ui/issues/310 (Tony Tam)

 * fix for required properties, #50 (Tony Tam)

 * added swagger 1.2 auth spec reading (Tony Tam)

 * added enum support per https://github.com/wordnik/swagger-ui/pull/296 (Tony Tam)


2013-08-29, Version 2.0.6
=========================

 * added back duplicate models #43 and  syntax for 1.2 support #48 (Tony Tam)

 * updated version (Tony Tam)

 * updated tests to point to live petstore so running a server for jasmine tests isn't required (Tony Tam)


2013-08-20, Version 2.0.5
=========================

 * fixed default value for booleans (Tony Tam)

 * updated url in constructor (Tony Tam)

 * fix for header passing (Tony Tam)

 * added enum, required, support (Tony Tam)


2013-08-14, Version 2.0.4
=========================

 * fix for array return types (Tony Tam)

 * removed unnecessary logging (Tony Tam)

 * fixed test bugs, added auth header (Tony Tam)

 * updated to 1.2 spec (Tony Tam)

 * added check for absolute path (Tony Tam)

 * fix for #42 (Tony Tam)


2013-07-17, Version 2.0.3
=========================

 * fixed stringify (Tony Tam)

 * fixed headers (Tony Tam)

 * fixed empty headers for loading resource (Tony Tam)

 * start of file support (Tony Tam)


2013-07-11, Version 2.0.2
=========================

 * added api info (Tony Tam)


2013-07-09, Version 2.0.1
=========================

 * bumped version for authorziation issue (Tony Tam)

 * added authorizations when calling resources (Tony Tam)


2013-07-09, Version 2.0.0
=========================

 * added more examples (Tony Tam)

 * merged from develop-2.0 (Tony Tam)

 * updated version (Tony Tam)

 * updated ignores (Tony Tam)

 * renamed discoveryUrl to url, added optional string constructor (Tony Tam)

 * test for single api declaration (Tony Tam)

 * added support for reading directly from api declaration, #39 (Tony Tam)

 * changed to have opts as an optional hash (Tony Tam)

 * added instructions for browsers (Tony Tam)

 * manual merge of #23 (Tony Tam)

 * updated instructions (Tony Tam)

 * updated deps (Tony Tam)

 * removed loggers (Tony Tam)

 * updated tests, integration for swagger-ui 2.0-develop (Tony Tam)

 * updated to integrate with swagger-ui (Tony Tam)

 * switched resource discovery to shred (Tony Tam)

 * added support for 1.2 spec (Tony Tam)

 * added shred support (Tony Tam)

 * updated help methods to return strings instead of console.log (Tony Tam)

 * fixed expect tests (Tony Tam)

 * updated jasmine, fixed expects operations (Tony Tam)

 * modularized tests, prepared for 1.2 spec (Tony Tam)


2013-06-26, Version 1.0.4
=========================

 * updated to support 1.2 spec responseMessages (Tony Tam)

 * updated version, build (Tony Tam)

 * Fixes a couple of issues (Dilip Krishnan)

 * expose SwaggerModelProperty (Filirom1)

 * Error handling when dataType is undefined (David M. Lee)


2013-03-05, Version 1.0.2
=========================

 * bumped version (Tony Tam)

 * Improve rendering of signature parameters. (Pepijn de Geus)

 * Update to CoffeeScript 1.5 (Pepijn de Geus)


2013-02-20, Version 1.0.1
=========================

 * First release!
