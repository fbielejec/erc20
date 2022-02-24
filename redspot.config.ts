import { RedspotUserConfig } from "redspot/types";
import "@redspot/patract";
import "@redspot/chai";
import "@redspot/gas-reporter";
import "@redspot/known-types";
import "@redspot/watcher";
import "@redspot/explorer";
import "@redspot/decimals";
import "dotenv/config"; // Store environment-specific variable from '.env' to process.env

// require('dotenv').config() 

export default {
  defaultNetwork: "development",
  contract: {
    ink: {
      docker: false,
      toolchain: "nightly-2022-02-02",
      sources: ["contracts/**/*"],
    },
  },
  networks: {
    development: {
      endpoint: "ws://127.0.0.1:9944",
      gasLimit: "400000000000",
      types: {},
    },
    smartnet: {
      endpoint: "wss://ws-smartnet.test.azero.dev",
      gasLimit: "400000000000",
      accounts: [process.env.SMARTNET_MNEMONIC],
      types: {},
    },
  },
  mocha: {
    timeout: 60000,
  },
  docker: {
    sudo: false,
    runTestnet:
      "docker run -p 9944:9944 --rm redspot/contract /bin/bash -c 'canvas --rpc-cors all --tmp --dev --ws-port=9944 --ws-external'",
  },
} as RedspotUserConfig;
