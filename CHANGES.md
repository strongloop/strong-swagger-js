2015-08-06, Version 21.0.0-dev.1
================================

 * Include browser/ dist in npm package (Miroslav Bajtoš)

 * Remove `browser` from git, remove bower.json (Miroslav Bajtoš)

 * Normalize array values of text properties (Miroslav Bajtoš)

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


2015-07-22, Version 2.1.2
=========================

 * updated versions, prepare for release (Tony Tam)

 * merged & rebuilt (Tony Tam)

 * merged (Tony Tam)

 * applied #508 to source (Tony Tam)

 * merged, rebuilt (Tony Tam)

 * rebuilt (Tony Tam)

 * rebuilt dist (Tony Tam)

 * rebuilt client (Tony Tam)

 * added basePath, host overrides for #532 (Tony Tam)

 * fix, tests for #530 (Tony Tam)

 * built files (Josh Ponelat)

 * schemToHTML deferences and handles Models (Josh Ponelat)

 * safe guard the modelPropertyMacro (Josh Ponelat)

 * remove schema sample generation from lib/helpers (Josh Ponelat)

 * move schema generation to its own file (Josh Ponelat)

 * moved schemToJSON and schemaToHTML to lib/helpers (Josh Ponelat)

 * saved initial swaggerObject to oldSwaggerObject when converting from older version (Ole Lensmar)

 * moved saving of converted spec to be before resolving (Ole Lensmar)

 * saved parsed and converted definition to client.swaggerObject property (Ole Lensmar)

 * Fix content-type for delete request with body swagger-api/swagger-ui#1435 (Roman Morozov)

 * Fix swagger-api/swagger-ui#1435 (Roman Morozov)

 * Use traditional for instead of for-in in Resolver.countUnresolvedRefs(). (Simon Morvan)

 * add test as per tkatkov's suggestion (Ramon Snir)

 * Add bower install to README.md (mb21)

 * Fix inability to apply multiple apiKey authentications (Anton Popov)

 * browser/swagger-client.js: Throw errors for null types (W. Trevor King)

 * fix allOf support (Ramon Snir)

 * Fixed #504: The `asCurl` method doesn't allow to set content type for response and request (Ivan Ushankin)

 * Improve the language in CONTRIBUTING.md (Andreas Kohn)

 * Use a SPDX-compatible identifier for the 'license' value (Andreas Kohn)

 * Set operation.schemes to the value of 'schemes' if set (Andreas Kohn)

 * Remove duplicated code. (Ivan Goncharov)

 * fix multiple auths that return true (Josh Ponelat)

 * Add updated browser files (joepadmiraal)

 * Extract format field from property models and parameters when it is available (joepadmiraal)

 * correct object checking across the project (Josh Ponelat)

 * use lodash to check types in resolver.js (Josh Ponelat)

 * Remove the 'name' argument of PasswordAuthorization (David Kozub)

 * added back uglifyify (Josh Ponelat)


2015-06-06, Version 2.1.1
=========================

 * bumped version (Tony Tam)

 * removed invalid shrinkwrap file (Tony Tam)

 * updated versions, rebuilt (Tony Tam)

 * linting (Tony Tam)

 * re-enabled tests, addressed npe in resolution when there are no matches (Tony Tam)


2015-06-05, Version 2.1.7-M2
============================

 * merged (Tony Tam)

 * updated version (Tony Tam)

 * disabled browser-only tests (Tony Tam)

 * fix, rebuild for #470 (Tony Tam)

 * comment out resolver/yaml test (Josh Ponelat)

 * change port on gulp-connect (Josh Ponelat)

 * strip mime-checking for http parsing, partial tests (Josh Ponelat)

 * add gulp connect server (Josh Ponelat)

 * add swagger-spec specs (Josh Ponelat)

 * add jquery/yaml test (Josh Ponelat)

 * will to try parse json/yaml, regardless of mime-type (Josh Ponelat)

 * Don't warn when produces contains '*/*' (jheyming)

 * default to application/json if we can (Josh Ponelat)

 * change oauth urls to swagger.io domain (Josh Ponelat)

 * change email address in spec files to apiteam@swagger.io (Josh Ponelat)

 * reduce code in auth.apply (Josh Ponelat)

 * replace use of nock with faux-jax which works in browser too (Josh Ponelat)

 * Refactor/add tests for lib/auth (Josh Ponelat)

 * move clientAuthorization to contructor and allow pre-populating (Josh Ponelat)

 * fix for #460 (Tony Tam)

 * Fixed License (Ron)

 * Updated ToS links (Ron)

 * Updated license (Ron)

 * Revert "Don't warn when produces is "*/*"." (Ron)

 * linting (Tony Tam)

 * missing check (Tony Tam)

 * added composition logic (Tony Tam)

 * Don't warn when produces is "*/*". (jheyming)

 * Cleaned composition/inheritance samples (Ron)

 * add done to browsertest (Josh Ponelat)

 * added tests for composition (Tony Tam)

 * add browsertest to travis (Josh Ponelat)

 * initial unit tests for the browser (Josh Ponelat)

 * update npm-shrinkwrap to latest, and build (Josh Ponelat)

 * use npm test instead of mocha straight, disable browsertests (Josh Ponelat)

 * added buffer check (fehguy)

 * merged (fehguy)

 * Revert "parseBody handle whitespace in responses" (Tony Tam)

 * rebuilt (fehguy)

 * rebased, merged #280 (fehguy)

 * updated gulp (fehguy)

 * rebuilt (Tony Tam)

 * fixed build issue (Tony Tam)

 * updated, added tests for yaml.  Replaces #415 (Tony Tam)

 * update README example to include responseContentType (Josh Ponelat)

 * create npm-shrinkwrap (Josh Ponelat)

 * corrected = into += (Josh Ponelat)

 * fixed locations (Tony Tam)

 * added test scenarios for #417 (Tony Tam)

 * improved unresolved ref handling (Tony Tam)

 * test updates (Tony Tam)

 * updated tests, fixes for resolver (Tony Tam)

 * tests, more support for relative refs (Tony Tam)

 * fixes ui-1152 by carrying across the schema.requires array (Josh Ponelat)

 * added feature, partial tests for #417 (Tony Tam)

 * setup firefox for selenium in travis-ci (Matthew R Hanlon)

 * add pet/{petId}/uploadImage to test spec (Matthew R Hanlon)

 * test harness for browser-based tests (Matthew R Hanlon)

 * convert responseModel into schema+$ref (Josh Ponelat)

 * Add support for GFM syntax in model (schema) descriptions by adding a 'propDesc' class around descriptions which can be used as a hook by Swagger-UI. (Nara Kasbergen)

 * Revert "Use jQuery for trimming" (Bjoern Rochel)

 * Use jQuery for trimming (Björn Rochel)

 * Can handle whitespace only responses (Bjoern Rochel)


2015-05-14, Version 2.1.6-M2
============================

 * update version (Tony Tam)

 * renamed (Tony Tam)

 * fix for #126, linting (Tony Tam)

 * made client pluggable for #239 (Tony Tam)

 * fix for #427, added schemes[0] array.  could be smarter to prefer https over http (Tony Tam)

 * fix for #426 (Tony Tam)

 * removed console output (Tony Tam)


2015-05-13, Version 2.1.5-M2
============================

 * updated versions for release (Tony Tam)

 * removed some cruft (Tony Tam)

 * fix for #422 (Tony Tam)

 * updated required props (Tony Tam)

 * fix, tests for https://github.com/swagger-api/swagger-ui/issues/1260 (Tony Tam)

 * rebuilt (Tony Tam)

 * linting (Tony Tam)

 * test for #419 (Tony Tam)

 * fix for #419 (Tony Tam)


2015-05-08, Version 2.1.4-M2
============================

 * updated version for release (Tony Tam)

 * fix for #416, makes rendering more compact (Tony Tam)

 * fix for https://github.com/swagger-api/swagger-ui/issues/1251 (Tony Tam)


2015-05-08, Version 2.1.3-M2
============================

 * updated bower (Tony Tam)

 * updated name (Tony Tam)

 * fixed missing url #404 (Tony Tam)

 * added fix, test for #375 (Tony Tam)

 * added empty json for empty post when content-type is application/json.  also set content-type for non-json posts per RFC2616 (Tony Tam)

 * merged (Tony Tam)

 * rebuilt (Tony Tam)

 * Update README.md (Lorinda Brandon)

 * Fix for #409: Top level example is included in model (Hes Siemelink)

 * use primitive in param.enum for booleans (Josh Ponelat)

 * tests: update to use raw html strings (Josh Ponelat)

 * fix required props in model#getMockSignature (Josh Ponelat)

 * convert v1.2 required props in v2.0 (Josh Ponelat)

 * add check for inline model in operation#getModelSignature (Josh Ponelat)

 * add String#trim polyfill and tests (Josh Ponelat)

 * Fix issue with `/apis` tag (Jeremy Whitlock)

 * Checking in up-to-date artifacts from the current state of the branch. (Alex Worden)

 * Fix bug that occurs in the swagger-ui "Try it out!" button for relative and https paths. Fix bug in SwaggerSpecConverter initialization. Account for an absolute basePath that uses https. Account for a relative basePath. (cherry picked from commit f2d2399) (Alex Worden)

 * Support https basePath (fragag03)

 * from #396 (Tony Tam)

 * Update git repository URL (Josep)

 * add support for global consumes/produces (Josh Ponelat)

 * allow for type="void" in converter (Josh Ponelat)

 * Fix bug where authorizations were applied even when explicitly turned off (Jeremy Whitlock)

 * Add back support for model property and parameter macros (Jeremy Whitlock)

 * Add back the default error/success callbacks (Jeremy Whitlock)

 * Fix issue with nested schemas (Jeremy Whitlock)

 * Fix display of references to primitives (Jeremy Whitlock)

 * use "Inline Model" over "inline#" (Josh Ponelat)

 * Update README.md (Tony Tam)

 * use opts.useJQuery (Matthew R Hanlon)

 * allow `useJQuery` to be overridden in opts (Matthew R Hanlon)

 * correctly set opts.useJQuery from Operation (Matthew R Hanlon)

 * fix Array of $ref in operation#getType and #getModelSampleJSON (Josh Ponelat)

 * fix for #376 (Tony Tam)

 * ui#1133: add more support for inline schema's (Josh Ponelat)

 * Fix documentation and sample code for browser usage to reflect the new way to instantiate (Bentsen, Troels)

 * Bring primitive types inline with latest swagger spec (Eric Thompson)

 * updated version for next release (Tony Tam)

 * default "Accept" header to one found in #produces (Josh Ponelat)

 * Enum definition at array items level as an option Default value as array for array type parameters (Waldek Kozba)

 * Update spec-converter.js to take into account obj.basePath (Shaun Berryman)

 * Add Bower support (ehmicky)

 * prompt user to send their PR to develop_2.0 until master is ready (Prabhat Jha)

 * Fixed memory leak. (Kamil Sobol)


2015-04-16, Version 2.1.2-M2
============================

 * rebuilt (Tony Tam)

 * updated readme from master (Tony Tam)

 * added parsing try/catch for when type is not application/json (Tony Tam)

 * Updated browser example in README to be a working example (Jeremy Whitlock)

 * updated dev version (Tony Tam)


2015-04-11, Version 2.1.1-M2
============================

 * rebuilt (Tony Tam)

 * added better check on schema.default (Tony Tam)

 * typo (Tony Tam)

 * fix for recursive resolving (Tony Tam)

 * updated dev version (Tony Tam)

 * fix for #346 (Tony Tam)

 * fix for #353 (Tony Tam)

 * Update README.md (nslowes)

 * Update model.js (hamx0r)

 * Update models.js (hamx0r)

 * Make Git ignore temporary files (ehmicky)


2015-03-28, Version 2.1.0-M2
============================

 * fixed version (Tony Tam)

 * updated README for latest release (Tony Tam)

 * updated version, contributors (Tony Tam)

 * added endsWith prototype for lower than ECMAScript 6 engines (Tony Tam)

 * fixed merge error (Tony Tam)

 * updated files (Tony Tam)

 * prepare for release (Tony Tam)

 * Add browser to npm (Mohsen Azimi)

 * New build (Mohsen Azimi)

 * added alpha1 version (Tony Tam)

 * added test for swagger-ui/issues/1078 (Tony Tam)

 * added resolver logic for response refs #329 (Tony Tam)

 * fix for #328, empty response object causing errors (Tony Tam)

 * fix, test for #122 (Tony Tam)

 * fix, tests for #327 (Tony Tam)

 * rebuilt, tests for #317 (Tony Tam)

 * fix for missing tags (Tony Tam)

 * fix, test for #316 (Tony Tam)

 * tests, fixes for #255 (Tony Tam)

 * rebuilt per #255 (Tony Tam)

 * merged (Tony Tam)

 * fix for #225, added ref support for escaped paths (Tony Tam)

 * Properly handle arrays without items (Jeremy Whitlock)

 * Miscellaneous cleanup (Jeremy Whitlock)

 * Only process array enums when properly formatted (Jeremy Whitlock)

 * Update .travis.yml (Tony Tam)

 * First pass at properly rendering arrays with nested $ref (Jeremy Whitlock)

 * Pass responseObj to converter (Mohsen Azimi)

 * added security definitions per #259 (Tony Tam)

 * fix for #259 (Tony Tam)

 * add index.js to package.json files (Frederik Creemers)

 * added tag descriptions #259 (Tony Tam)

 * regenerated (Tony Tam)

 * fix for 1.0 swagger specs (Tony Tam)

 * removed unused files (Tony Tam)

 * linting, tests (Tony Tam)

 * fixed tests, conversions (Tony Tam)

 * Simple test to verify that the HttpClient is actually returning the server side headers in the response object. We achieve by making a request to the mock server. I chose to make a request that triggers the 404 path, which sets the content-type to 'text/plain'. (Livio Soares)

 * fixed in param, produces, consumes (Tony Tam)

 * added more tests (Tony Tam)

 * more converter support (Tony Tam)

 * added responses (Tony Tam)

 * some variable cleanup (Tony Tam)

 * removed some garbage (Tony Tam)

 * added parameters, enums, models (Tony Tam)

 * httpClient: Fix response headers. This looks like a typo, but the current response headers are being inherented from the *request*, not from the reponse. (Livio Soares)

 * added declaration placeholder (Tony Tam)

 * initial commit for spec conversion (Tony Tam)

 * Revert changes to SwaggerClient flow when no success callback is provided (Jeremy Whitlock)

 * Use JSON examples, when available, when creating sample JSON for operations (Jeremy Whitlock)

 * Add test to show we handle empty tags properly (Jeremy Whitlock)

 * Properly handle reserved names for tags and operation ids (Jeremy Whitlock)

 * Update Gulp flow and README to reflect (Jeremy Whitlock)

 * Add externalDocs property to SwaggerClient when available (Jeremy Whitlock)

 * Add response properties to operation responses (Jeremy Whitlock)

 * Support Browserify (Jeremy Whitlock)

 * Follow up for e2c0bb2 to fix failing tests (Jeremy Whitlock)

 * test, fix for #272, stringify not called on post objects (Tony Tam)

 * Support inline models (model property of type 'object') (Jeremy Whitlock)

 * Fix lint errors (Konstantin Yakushev)

 * Minor fixes (Konstantin Yakushev)

 * Tests, build and minor bugfix (Konstantin Yakushev)

 * reverted file (Tony Tam)

 * Fix '&' adding to url if param is empty (Konstantin Yakushev)

 * rebuilt (Tony Tam)

 * fix for https://github.com/swagger-api/swagger-ui/issues/553 (Tony Tam)

 * removed comment (Tony Tam)

 * updated readme (Tony Tam)

 * removed shred non-bundle files (Tony Tam)

 * removed jasmine (Tony Tam)

 * Fixed check for absolute URL (Christian Kaltepoth)


2015-03-04, Version 2.1.10-M1
=============================

 * added file (Tony Tam)

 * fix for issue 272 (Tony Tam)

 * Regenerated swagger-client (aurelian)

 * Renamed swaggerRequstHeaders to swaggerRequestHeaders (aurelian)


2015-02-21, Version 2.1.9-M1
============================

 * updated version (Tony Tam)

 * added malformed link tests (Tony Tam)

 * rebuilt client (Tony Tam)

 * added scope for proper callback (Tony Tam)

 * wired in resolver for remote refs (Tony Tam)

 * added remote resolver, tests (Tony Tam)

 * started remote reference logic (Tony Tam)


2015-02-21, Version 2.1.8-M1
============================

 * updated version (Tony Tam)

 * added file-upload into 2.0 supported client (Tony Tam)

 * fixed exports (Tony Tam)

 * fixed help method for array types (Tony Tam)

 * added sample representations for https://github.com/swagger-api/swagger-ui/issues/934 (Tony Tam)


2015-02-19, Version 2.1.6-M1
============================

 * Update README.md (Tony Tam)

 * fix, tests for bindings as found in #247 (Tony Tam)

 * added 1.1 finish support (Tony Tam)

 * fix, test for #246 (Tony Tam)


2015-02-18, Version 2.1.5-M1
============================

 * added tags description support for #243 (Tony Tam)

 * fix for #243 (Tony Tam)

 * added opts to pass to underlying http client, #229 (Tony Tam)

 * tests for #225 (Tony Tam)

 * fix from https://github.com/swagger-api/swagger-ui/pull/939 merged to proper repo (Tony Tam)

 * updated version, rebuilt (Tony Tam)

 * test for overflow on self-referencing array models (Tony Tam)

 * added model signature, removed overflow on self references (Tony Tam)

 * fix for #238, set ready on completion (Tony Tam)

 * Adding response.statusText to the response out object to support custom statusText. (Cagdas Bayram)

 * Update README.md (Tony Tam)

 * regex pattern matching fix (Michael Stewart)


2015-02-11, Version 2.1.4-M1
============================

 * fix for #234 (Tony Tam)


2015-02-11, Version 2.1.3-M1
============================

 * added 1.2 flag to compat tests (Tony Tam)

 * updated version (Tony Tam)

 * regenerated (Tony Tam)

 * updated test path (Tony Tam)

 * linted, fixed tests (Tony Tam)

 * linted (Tony Tam)

 * updated files (Tony Tam)


2015-02-09, Version 2.1.2-M1
============================

 * updated version (Tony Tam)

 * updated client (Tony Tam)

 * fixed deprecated parsing per https://github.com/swagger-api/swagger-ui/issues/907, #232 (Tony Tam)

 * Avoid URL encoding header values (Duncan Hall)

 * Update README.md (Ron)


2015-02-02, Version 2.1.1-M1
============================

 * fix for https://github.com/swagger-api/swagger-ui/issues/898, exposing param.signature as Array[...] when type:'array' (Tony Tam)

 * added recursion checks, tests, array formatting for #222 (Tony Tam)

 * property merging headers set from parameters and content-types in #895 (Tony Tam)

 * added auth test (Tony Tam)

 * merged from develop (Tony Tam)

 * updated header (Tony Tam)

 * Update LICENSE (Ron)

 * typos (Tony Tam)

 * updated readme, versions (Tony Tam)

 * fix for #161 (Tony Tam)

 * fix for https://github.com/swagger-api/swagger-ui/issues/837 (Tony Tam)

 * fix for #837 (Tony Tam)

 * fixed model signature for unknown types (Tony Tam)

 * updated build, tests, unified client signature (Tony Tam)

 * updated tests, responses in support of https://github.com/swagger-api/swagger-ui/issues/331 (Tony Tam)

 * added checking for underspecified array properties (Tony Tam)

 * fixed scheme handling for https://github.com/swagger-api/swagger-ui/issues/615 (Tony Tam)

 * fix for https://github.com/swagger-api/swagger-ui/issues/800, incorrect rendering of array of primitives (Tony Tam)

 * added test for https://github.com/swagger-api/swagger-ui/issues/835 (Tony Tam)

 * fix, test for https://github.com/swagger-api/swagger-ui/pull/579 (Tony Tam)

 * moved info migration for 1.x specs into swagger-compat (Tony Tam)

 * fixed double slash per #819 (Tony Tam)

 * removed enum keyword, extra quotes (Tony Tam)

 * handling for null url https://github.com/swagger-api/swagger-ui/issues/849 (Tony Tam)

 * added test for https://github.com/swagger-api/swagger-ui/pull/853 (Tony Tam)

 * added test for default value (Tony Tam)

 * changed to use expect, added fix for param macro (Tony Tam)

 * fixed content type setting (Tony Tam)

 * merged from https://github.com/swagger-api/swagger-ui/pull/877 (Tony Tam)

 * merged into swagger-js from https://github.com/swagger-api/swagger-ui/pull/878 (Tony Tam)

 * Updated package (Tony Tam)

 * fixed bad lint (Tony Tam)

 * updated version (Tony Tam)

 * linting (Tony Tam)

 * merged local changes (Tony Tam)

 * updated  to dot syntax (Tony Tam)

 * fixed rendering of Array in getStringSignature for issue 215 (Adam Anderson)

 * added tests for #179 (Tony Tam)

 * added test for #216 (Tony Tam)

 * Fix jQuery HTTP (Axel Haustant)

 * added test for #147 (Tony Tam)

 * added fix, test for #143 (Tony Tam)

 * added delete (Tony Tam)

 * added request tests (Tony Tam)

 * manually applied #214 (Tony Tam)

 * added tests for 2.0 spec, added mock mode in request (Tony Tam)

 * removed dups (Tony Tam)

 * more linting (Tony Tam)

 * merged 1.x tests (Tony Tam)

 * added gulp-wrap, compat-lib into single library (Tony Tam)

 * fix for #210, query param encoding (Tony Tam)

 * added header (Tony Tam)

 * fix for https://github.com/swagger-api/swagger-ui/issues/156 (Tony Tam)

 * merged with master (Tony Tam)

 * updated file to build to proper location (Tony Tam)

 * removed old tests (Tony Tam)

 * updated package per #199 (Tony Tam)

 * Updated package.json (Axel Haustant)

 * updated the README.md dev section (Axel Haustant)

 * Fix paths (Axel Haustant)

 * Added cover task (Axel Haustant)

 * Initialized gulp (Axel Haustant)

 * added tests for help, asCurl syntax #174 (Tony Tam)

 * added tests for host, port, headers (Tony Tam)

 * fix for #192, added content negotiation tests (Tony Tam)

 * moved folders (Tony Tam)

 * deleted old files (Tony Tam)

 * added travis badge (Tony Tam)

 * added mocha tests, started test structure (Tony Tam)

 * fix for https://github.com/swagger-api/swagger-ui/issues/770, checking method instead of type (Tony Tam)

 * fixed macros (Tony Tam)

 * added var name (Tony Tam)

 * address https://github.com/swagger-api/swagger-js/pull/165 (Tony Tam)

 * fix for https://github.com/swagger-api/swagger-ui/pull/760 (Tony Tam)

 * merged from master (Tony Tam)

 * fix for https://github.com/swagger-api/swagger-ui/issues/735 (Tony Tam)

 * fix for https://github.com/swagger-api/swagger-ui/issues/644#issuecomment-62723721, fall back on integer, number if format is not an expected value (Tony Tam)

 * fix for #167, failure to find model properties with canonical references (Tony Tam)

 * added missing param check (Tony Tam)

 * refTyp substring fix (mpoiriert)

 * Ref not found when using full relative path (mpoiriert)

 * rebuilt (Tony Tam)

 * added legacy auth support (Tony Tam)

 * fix for https://github.com/swagger-api/swagger-ui/issues/714 (Tony Tam)

 * added auth support (Tony Tam)

 * fix for vendor options in paths segment, https://github.com/wordnik/swagger-ui/issues/644 (Tony Tam)

 * added support for default (Tony Tam)

 * merged #149 (Tony Tam)

 * fixed handling of integer, number types without formats specified (Tony Tam)

 * updated client to include optional, descriptions (Tony Tam)

 * removed dist folder (Tony Tam)

 * updated getStringSignature to support missing formats (Tony Tam)

 * updated typeFromJsonSchema to support missing formats (Tony Tam)

 * added support for body params other than (Tony Tam)

 * handled array inputs with missing enum values (Tony Tam)

 * updated for allowable values (Tony Tam)

 * added back form encoded support (Tony Tam)

 * added options (Tony Tam)

 * fix for header undefined (Tony Tam)

 * merge from https://github.com/wordnik/swagger-ui/pull/639 (Tony Tam)

 * added body handling (Tony Tam)

 * added exception handling (Tony Tam)

 * added spec to options for #139 (Tony Tam)

 * fix for https://github.com/wordnik/swagger-ui/issues/605 (Tony Tam)

 * updated http method (Tony Tam)

 * added description per #135 (Tony Tam)

 * library fix for https://github.com/wordnik/swagger-ui/issues/602 (Tony Tam)

 * added ampersand fix for https://github.com/wordnik/swagger-ui/issues/596 (Tony Tam)

 * enabled security (Tony Tam)

 * added validity check (Tony Tam)

 * added host if not specified by server (Tony Tam)

 * updated accept header (Tony Tam)

 * made compat with 2.0 lib (Tony Tam)

 * updated js (Tony Tam)

 * added files (Tony Tam)


2015-02-01, Version 2.1.0-M1
============================

 * merged from develop_2.0 (Tony Tam)


2015-08-06, Version 20.1.0
==========================

 * Normalize array values of text properties (Miroslav Bajtoš)


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


2014-04-17, Version 2.0.28
==========================



2014-04-17, Version 2.0.27
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
