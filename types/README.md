# Generating types with `quicktype`

We use [quicktype](https://github.com/quicktype/quicktype) to automatically generate types for the `/schemas` directory with the following scripts. The scripts input JSON (provided by Postman Collections data) and output TypeScript types for development, and eventually type-safety when building our documentation.

## Custom scripts

Run the following [package.json](../package.json) scripts in the root directory:

```shell
# Run quicktype and generate types for all schema files
yarn type-api
# Generate types for schemas/node-api.json (Postman collection)
yarn type-node
# Generate types for schemas/rewards-api.json (Postman collection)
yarn type-rewards
# Generate types for schemas/rewards-rates-api.json (Postman collection)
yarn type-rates
# Generate types for schemas/tx-search-api.json *
yarn type-search
```

\* Note that the `yarn type-search` script currently sources JSON (using `-s json`) and not Postman JSON (using `-s postman`)

### Examples: using quicktype

```shell
# Run quicktype without arguments for help and options
quicktype

# quicktype a sample JSON file in Swift
quicktype person.json -o Person.swift

# A verbose way to do the same thing
quicktype \
  --src person.json \
  --src-lang json \
  --lang swift \
  --top-level Person \
  --out Person.swift

# quicktype a directory of samples as a C++ program
# Suppose ./blockchain is a directory with files:
#   node-api.json transactions.json marketcap.json
quicktype ./blockchain -o blockchain-api.cpp

# quicktype a live JSON API as a Java program
quicktype https://api.somewhere.com/data -o Data.java
```
